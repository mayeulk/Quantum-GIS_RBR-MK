/***************************************************************************
                               qgsvectorlayer.cpp
  This class implements a generic means to display vector layers. The features
  and attributes are read from the data store using a "data provider" plugin.
  QgsVectorLayer can be used with any data store for which an appropriate
  plugin is available.
                              -------------------
          begin                : Oct 29, 2003
          copyright            : (C) 2003 by Gary E.Sherman
          email                : sherman at mrcc.com
 
***************************************************************************/

/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/
/*  $Id$ */

#include <iostream>
#include <iosfwd>
#include <cfloat>
#include <cstring>
#include <cmath>
#include <sstream>
#include <memory>
#include <vector>
#include <utility>
#include <cassert>
#include <limits>

// for htonl
#ifdef WIN32
#include <winsock.h>
#else
#include <netinet/in.h>
#endif

#include <QApplication>
#include <QCursor>
#include <QLibrary>
#include <QMessageBox>
#include <QPainter>
#include <QPixmap>
#include <QPolygonF>
#include <QProgressDialog>
#include <QString>
#include <QSettings>

#include "qgis.h" //for globals
#include "qgisapp.h"
#include "qgsapplication.h"
#include "qgsattributedialog.h"
#include "qgsattributetable.h"
#include "qgsattributetabledisplay.h"
#include "qgscontinuouscolorrenderer.h"
#include "qgscoordinatetransform.h"
#include "qgsdistancearea.h"
#include "qgsfeature.h"
#include "qgsfield.h"
#include "qgsgraduatedsymbolrenderer.h"
#include "qgslabel.h"
#include "qgslabelattributes.h"
#include "qgslegend.h"
#include "qgslogger.h"
#include "qgsmaplayerregistry.h"
#include "qgsmaptopixel.h"
#include "qgspoint.h"
#include "qgsproject.h"
#include "qgsproviderregistry.h"
#include "qgsrect.h"
#include "qgsrect.h"
#include "qgsrenderer.h"
#include "qgsrenderitem.h"
#include "qgssinglesymbolrenderer.h"
#include "qgsspatialrefsys.h"
#include "qgsuniquevaluerenderer.h"
#include "qgsvectordataprovider.h"
#include "qgsvectorlayer.h"
#include "qgsvectorlayerproperties.h"
#ifdef Q_WS_X11
#include "qgsclipper.h"
#endif
//#include "wkbheader.h"

#ifdef TESTPROVIDERLIB
#include <dlfcn.h>
#endif


static const char * const ident_ = "$Id$";

// typedef for the QgsDataProvider class factory
typedef QgsDataProvider * create_it(const QString* uri);



QgsVectorLayer::QgsVectorLayer(QString vectorLayerPath,
    QString baseName,
    QString providerKey)
: QgsMapLayer(VECTOR, baseName, vectorLayerPath),
  tabledisplay(0),
  m_renderer(0),
  mLabel(0),
  m_propertiesDialog(0),
  providerKey(providerKey),
  valid(false),
  myLib(0),
  updateThreshold(0),       // XXX better default value?
  mMinimumScale(0),
  mMaximumScale(0),
  mScaleDependentRender(false),
  mEditable(false),
  mModified(false),
  mToggleEditingAction(0)
{
  // if we're given a provider type, try to create and bind one to this layer
  if ( ! providerKey.isEmpty() )
  {
    setDataProvider( providerKey );
  }
  if(valid)
  {
    setCoordinateSystem();

    // Default for the popup menu
    popMenu = 0;

    // Get the update threshold from user settings. We
    // do this only on construction to avoid the penality of
    // fetching this each time the layer is drawn. If the user
    // changes the threshold from the preferences dialog, it will
    // have no effect on existing layers
    QSettings settings;
    updateThreshold = settings.readNumEntry("Map/updateThreshold", 1000);
  }
} // QgsVectorLayer ctor



QgsVectorLayer::~QgsVectorLayer()
{
  QgsDebugMsg("In QgsVectorLayer destructor");

  valid=false;

  if(isEditable())
  {
    stopEditing();
  }

  if (tabledisplay)
  {
    tabledisplay->close();
    delete tabledisplay;
  }
  if (m_renderer)
  {
    delete m_renderer;
  }
  if (m_propertiesDialog)
  {
    delete m_propertiesDialog;
  }
  // delete the provider object
  delete dataProvider;
  // delete the popu pmenu
  delete popMenu;
  // delete the provider lib pointer
  delete myLib;
  delete mLabel;

  // Destroy and cached geometries and clear the references to them
  for (std::map<int, QgsGeometry*>::iterator it  = mCachedGeometries.begin(); 
      it != mCachedGeometries.end();
      ++it )
  {
    delete (*it).second;
  }
  mCachedGeometries.clear();
}

QString QgsVectorLayer::storageType() const
{
  if (dataProvider)
  {
    return dataProvider->storageType();
  }
  return 0;
}


QString QgsVectorLayer::capabilitiesString() const
{
  if (dataProvider)
  {
    return dataProvider->capabilitiesString();
  }
  return 0;
}

int QgsVectorLayer::getProjectionSrid()
{
  //delegate to the provider
  if (valid)
  {
    QgsDebugMsg("Getting srid from provider...");
    return dataProvider->getSrid();
  }
  else
  {
    return 0;
  }
}

QString QgsVectorLayer::getProjectionWKT()
{
  //delegate to the provider
  if (valid)
  {
    return dataProvider->getProjectionWKT();
  }
  else
  {
    return NULL;
  }
}

QString QgsVectorLayer::providerType()
{
  return providerKey;
}

/**
 * sets the preferred display field based on some fuzzy logic
 */
void QgsVectorLayer::setDisplayField(QString fldName)
{
  // If fldName is provided, use it as the display field, otherwise
  // determine the field index for the feature column of the identify
  // dialog. We look for fields containing "name" first and second for
  // fields containing "id". If neither are found, the first field
  // is used as the node.
  QString idxName="";
  QString idxId="";

  std::vector < QgsField > fields = dataProvider->fields();
  if(!fldName.isEmpty())
  {
    // find the index for this field
    fieldIndex = fldName;
    /*
       for(int i = 0; i < fields.size(); i++)
       {
       if(QString(fields[i].name()) == fldName)
       {
       fieldIndex = i;
       break;
       }
       }
       */
  }
  else
  {
    int fieldsSize = fields.size();
    for (int j = 0; j < fieldsSize; j++)
    {

      QString fldName = fields[j].name();
      QgsDebugMsg("Checking field " + fldName + " of " + QString::number(fields.size()) + " total");
      
      // Check the fields and keep the first one that matches.
      // We assume that the user has organized the data with the
      // more "interesting" field names first. As such, name should
      // be selected before oldname, othername, etc.
      if (fldName.find("name", false) > -1)
      {
        if(idxName.isEmpty())
        {
          idxName = fldName;
        }
      }
      if (fldName.find("descrip", false) > -1)
      {
        if(idxName.isEmpty())
        {
          idxName = fldName;
        }
      }
      if (fldName.find("id", false) > -1)
      {
        if(idxId.isEmpty())
        {
          idxId = fldName;
        }
      }
    }

    //if there were no fields in the dbf just return - otherwise qgis segfaults!
    if (fields.size() == 0) return;

    if (idxName.length() > 0)
    {
      fieldIndex = idxName;
    }
    else
    {
      if (idxId.length() > 0)
      {
        fieldIndex = idxId;
      }
      else
      {
        fieldIndex = fields[0].name();
      }
    }

    // set this to be the label field as well
    setLabelField(fieldIndex);
  }
}

void QgsVectorLayer::drawLabels(QPainter * p, QgsRect * viewExtent, QgsMapToPixel * theMapToPixelTransform)
{
  drawLabels(p, viewExtent, theMapToPixelTransform, 1.);
}

// NOTE this is a temporary method added by Tim to prevent label clipping
// which was occurring when labeller was called in the main draw loop
// This method will probably be removed again in the near future!
void QgsVectorLayer::drawLabels(QPainter * p, QgsRect * viewExtent, QgsMapToPixel * theMapToPixelTransform, double scale)
{
  QgsDebugMsg("Starting draw of labels");

  if ( /*1 == 1 */ m_renderer && mLabelOn)
  {
    bool projectionsEnabledFlag = projectionsEnabled();
    std::list<int> attributes=m_renderer->classificationAttributes();
    // Add fields required for labels
    mLabel->addRequiredFields ( &attributes );

    QgsDebugMsg("Selecting features based on view extent");

    int featureCount = 0;
    // select the records in the extent. The provider sets a spatial filter
    // and sets up the selection set for retrieval
    dataProvider->reset();
    dataProvider->select(viewExtent);

    try
    {
      //main render loop
      QgsFeature *fet;

      while((fet = dataProvider->getNextFeature(attributes)))
      {
        // Render label
        if ( fet != 0 )
        {
          if(mDeleted.find(fet->featureId())==mDeleted.end())//don't render labels of deleted features
          {
            bool sel=mSelected.find(fet->featureId()) != mSelected.end();
            mLabel->renderLabel ( p, viewExtent, *mCoordinateTransform, 
                projectionsEnabledFlag,
                theMapToPixelTransform, fet, sel, 0, scale);
          }
        }
        delete fet;
        featureCount++;
      }

      //render labels of not-commited features
      //XXX changed from std::vector to std::list in merge from 0.7 to head (TS)
      for(std::vector<QgsFeature*>::iterator it=mAddedFeatures.begin();it!=mAddedFeatures.end();++it)
      {
        bool sel=mSelected.find((*it)->featureId()) != mSelected.end();
        mLabel->renderLabel ( p, viewExtent, *mCoordinateTransform, projectionsEnabledFlag,
            theMapToPixelTransform, *it, sel, 0, scale);
      }
    }
    catch (QgsCsException &e)
    {
      QgsLogger::critical("Error projecting label locations, caught in " + QString(__FILE__) + ", line " +QString(__LINE__));
    }

#ifdef QGISDEBUG
    QgsLogger::debug("Total features processed", featureCount, 1, __FILE__, __FUNCTION__, __LINE__);
#endif
    
    // XXX Something in our draw event is triggering an additional draw event when resizing [TE 01/26/06]
    // XXX Calling this will begin processing the next draw event causing image havoc and recursion crashes.
    //qApp->processEvents();

  }
}

QgsRect QgsVectorLayer::inverseProjectRect(const QgsRect& r) const
{
  // Undo a coordinate transformation if one was in effect
  if (projectionsEnabled())
  { 
    try
    {
      QgsPoint p1 = mCoordinateTransform->transform(r.xMin(), r.yMin(), 
          QgsCoordinateTransform::INVERSE);
      QgsPoint p2 = mCoordinateTransform->transform(r.xMax(), r.yMax(), 
          QgsCoordinateTransform::INVERSE);
#ifdef QGISDEBUG
      QgsDebugMsg("Projections are enabled");
      QgsDebugMsg("Rectangle was: "+r.stringRep(true));
      QgsRect tt(p1, p2);
      QgsDebugMsg("Inverse transformed to: "+tt.stringRep(true))
#endif
      return QgsRect(p1, p2);

    }
    catch (QgsCsException &e)
    {
      QgsLogger::critical("Inverse transform error in " + QString(__FILE__) + ", line " + QString(__LINE__));
    }
  }
  // fall through for all failures
  return QgsRect(r);
}

unsigned char* QgsVectorLayer::drawLineString(unsigned char* feature, 
    QPainter* p,
    QgsMapToPixel* mtp, 
    bool projectionsEnabledFlag)
{
  unsigned char *ptr = feature + 5;
  unsigned int nPoints = *((int*)ptr);
  ptr = feature + 9;

  std::vector<double> x(nPoints);
  std::vector<double> y(nPoints);
  std::vector<double> z(nPoints, 0.0);

  // Extract the points from the WKB format into the x and y vectors. 
  for (register unsigned int i = 0; i < nPoints; ++i)
  {
    x[i] = *((double *) ptr);
    ptr += sizeof(double);
    y[i] = *((double *) ptr);
    ptr += sizeof(double);
  }

  // Transform the points into map coordinates (and reproject if
  // necessary)

  transformPoints(x, y, z, mtp, projectionsEnabledFlag);

#if defined(Q_WS_X11)
  // Work around a +/- 32768 limitation on coordinates in X11

  // Look through the x and y coordinates and see if there are any
  // that need trimming. If one is found, there's no need to look at
  // the rest of them so end the loop at that point. 
  for (register unsigned int i = 0; i < nPoints; ++i)
    if (std::abs(x[i]) > QgsClipper::maxX ||
        std::abs(y[i]) > QgsClipper::maxY)
    {
      QgsClipper::trimFeature(x, y, true); // true = polyline
      nPoints = x.size(); // trimming may change nPoints.
      break;
    }
#endif

  // set up QPolygonF class with transformed points
  QPolygonF pa(nPoints);
  for (register unsigned int i = 0; i < nPoints; ++i)
  {
    pa[i].setX(x[i]);
    pa[i].setY(y[i]);
  }
  
#ifdef QGISDEBUGVERBOSE
  // this is only used for verbose debug output
  for (int i = 0; i < pa.size(); ++i)
    {
      QgsDebugMsgLevel("pa" + QString::number(pa.point(i).x()), 2);
      QgsDebugMsgLevel("pa" + QString::number(pa.point(i).y()), 2);
    }
#endif

  // The default pen gives bevelled joins between segements of the
  // polyline, which is good enough for the moment.
  //preserve a copy of the pen before we start fiddling with it
  QPen pen = p->pen(); // to be kept original
  //
  // experimental alpha transparency
  // 255 = opaque
  //
  QPen myTransparentPen = p->pen(); // store current pen
  QColor myColor = myTransparentPen.color();
  myColor.setAlpha(transparencyLevelInt);
  myTransparentPen.setColor(myColor);
  p->setPen(myTransparentPen);
  p->drawPolyline(pa);

  if(mEditable)
    {
      std::vector<double>::const_iterator xIt;
      std::vector<double>::const_iterator yIt;
      for(xIt = x.begin(), yIt = y.begin(); xIt != x.end(); ++xIt, ++yIt)
	{
	  drawVertexMarker((int)(*xIt), (int)(*yIt), *p);
	}
    }

  //restore the pen
  p->setPen(pen);
  
  return ptr;
}

unsigned char* QgsVectorLayer::drawPolygon(unsigned char* feature, 
    QPainter* p, 
    QgsMapToPixel* mtp, 
    bool projectionsEnabledFlag)
{
  typedef std::pair<std::vector<double>, std::vector<double> > ringType;
  typedef ringType* ringTypePtr;
  typedef std::vector<ringTypePtr> ringsType;

  // get number of rings in the polygon
  unsigned int numRings = *((int*)(feature + 1 + sizeof(int)));

  if ( numRings == 0 )  // sanity check for zero rings in polygon
    return feature + 9;

  int total_points = 0;

  // A vector containing a pointer to a pair of double vectors.The
  // first vector in the pair contains the x coordinates, and the
  // second the y coordinates.
  ringsType rings;

  // Set pointer to the first ring
  unsigned char* ptr = feature + 1 + 2 * sizeof(int); 

  for (register unsigned int idx = 0; idx < numRings; idx++)
  {
    unsigned int nPoints = *((int*)ptr);

    ringTypePtr ring = new ringType(std::vector<double>(nPoints),
        std::vector<double>(nPoints));
    ptr += 4;

    // create a dummy vector for the z coordinate
    std::vector<double> zVector(nPoints, 0.0);
    // Extract the points from the WKB and store in a pair of
    // vectors.
    /*
#ifdef QGISDEBUG
std::cerr << "Points for ring " << idx << " ("
<< nPoints << " points)\n";
#endif
*/
    for (register unsigned int jdx = 0; jdx < nPoints; jdx++)
    {
      ring->first[jdx] = *((double *) ptr);
      ptr += sizeof(double);
      ring->second[jdx] = *((double *) ptr);
      ptr += sizeof(double);
      /*
#ifdef QGISDEBUG
std::cerr << jdx << ": " 
<< ring->first[jdx] << ", " << ring->second[jdx] << '\n';
#endif
*/
    }
    // If ring has fewer than two points, what is it then?
    // Anyway, this check prevents a crash
    if (nPoints < 1) 
    {
      QgsDebugMsg("Ring has only " + QString::number(nPoints) + " points! Skipping this ring.");
      continue;
    }

    transformPoints(ring->first, ring->second, zVector, mtp, projectionsEnabledFlag);

#if defined(Q_WS_X11)
    // Work around a +/- 32768 limitation on coordinates in X11

    // Look through the x and y coordinates and see if there are any
    // that need trimming. If one is found, there's no need to look at
    // the rest of them so end the loop at that point. 
    for (register unsigned int i = 0; i < nPoints; ++i)
    {
      if (std::abs(ring->first[i]) > QgsClipper::maxX ||
          std::abs(ring->second[i]) > QgsClipper::maxY)
      {
        QgsClipper::trimFeature(ring->first, ring->second, false);
        /*
#ifdef QGISDEBUG
std::cerr << "Trimmed points (" << ring->first.size() << ")\n";
for (int i = 0; i < ring->first.size(); ++i)
std::cerr << i << ": " << ring->first[i] 
<< ", " << ring->second[i] << '\n';
#endif
*/
        break;
      }
      //std::cout << "POLYGONTRANSFORM: " << ring->first[i] << ", " << ring->second[i] << std::endl; 
    }

#endif

    // Don't bother keeping the ring if it has been trimmed out of
    // existence.
    if (ring->first.size() == 0)
      delete ring;
    else
    {
      rings.push_back(ring);
      total_points += ring->first.size();
    }
  }

  // Now we draw the polygons

  // Only try to draw polygons if there is something to draw
  if (total_points > 0)
  {
    int ii = 0;
    QPointF outerRingPt;

    // Stores the start index of each ring (first) and the number
    // of points in each ring (second).
    typedef std::vector<std::pair<unsigned int, unsigned int> > ringDetailType;
    ringDetailType ringDetails;

    // Need to copy the polygon vertices into a QPologynF for the
    // QPainter::drawpolygon() call. The size is the sum of points in
    // the polygon plus one extra point for each ring except for the
    // first ring.

    // Store size here and use it in the loop to avoid penalty of
    // multiple calls to size()
    int numRings = rings.size();
    QPolygonF pa(total_points + numRings - 1);
    for (register int i = 0; i < numRings; ++i)
    {
      // Store the pointer in a variable with a short name so as to make
      // the following code easier to type and read.
      ringTypePtr r = rings[i];
      // only do this once to avoid penalty of additional calls
      unsigned ringSize = r->first.size();

      // Store the start index of this ring, and the number of
      // points in the ring.
      ringDetails.push_back(std::make_pair(ii, ringSize));

      // Transfer points to the array of QPointF
      //for (register unsigned int j = 0; j != ringSize; ++j, ++ii)
      for (register unsigned int j = 0; j != ringSize; ++j, ii++)
      {
        // there is maybe a bug in Qt4.1: when using doubles without rounding,
        // I've experienced crashes (broken pipe) when drawing polygon
        // with more than 3000 vertices  [MD]
        //pa[ii].setX(static_cast<int>(r->first[j] + 0.5));
        //pa[ii].setY(static_cast<int>(r->second[j] + 0.5));

        // The crash was probably caused by writing outside 
        // pa(total_points + numRings - 1) size, because
        // cycle was using ++ii insted of ii++ => reenabled floating point
        pa[ii].setX(r->first[j]);
        pa[ii].setY(r->second[j]);
      }

      // Store the last point of the first ring, and insert it at
      // the end of all other rings. This makes all the other rings
      // appear as holes in the first ring.
      if (i == 0)
      {
        outerRingPt.setX(pa[ii-1].x());
        outerRingPt.setY(pa[ii-1].y());
      }
      else
        pa[ii++] = outerRingPt;

      // Tidy up the pointed to pairs of vectors as we finish with them
      delete rings[i];
    }

#ifdef QGISDEBUGVERBOSE
    // this is only for verbose debug output -- no optimzation is 
    // needed :)
    QgsDebugMsg("Pixel points are:");
    for (int i = 0; i < pa.size(); ++i)
      {
	QgsDebugMsgLevel("i" + QString::number(i), 2);
	QgsDebugMsgLevel("pa[i].x()" + QString::number(pa[i].x()), 2);
	QgsDebugMsgLevel("pa[i].y()" + QString::number(pa[i].y()), 2);
      }
    std::cerr << "Ring positions are:\n";
    QgsDebugMsg("Ring positions are:");
    for (int i = 0; i < ringDetails.size(); ++i)
      {
	QgsDebugMsgLevel("ringDetails[i].first" + QString::number(ringDetails[i].first), 2);
	QgsDebugMsgLevel("ringDetails[i].second" + QString::number(ringDetails[i].second), 2);
      }
    QgsDebugMsg("Outer ring point is " + QString::number(outerRingPt.x()) + ", " + QString::number(outerRingPt.y()));
#endif

    /*
    // A bit of code to aid in working out what values of
    // QgsClipper::minX, etc cause the X11 zoom bug.
    int largestX  = -std::numeric_limits<int>::max();
    int smallestX = std::numeric_limits<int>::max();
    int largestY  = -std::numeric_limits<int>::max();
    int smallestY = std::numeric_limits<int>::max();

    for (int i = 0; i < pa.size(); ++i)
    {
    largestX  = std::max(largestX,  pa.point(i).x());
    smallestX = std::min(smallestX, pa.point(i).x());
    largestY  = std::max(largestY,  pa.point(i).y());
    smallestY = std::min(smallestY, pa.point(i).y());
    }
    std::cerr << "Largest  X coordinate was " << largestX  << '\n';
    std::cerr << "Smallest X coordinate was " << smallestX << '\n';
    std::cerr << "Largest  Y coordinate was " << largestY  << '\n';
    std::cerr << "Smallest Y coordinate was " << smallestY << '\n';
    */

    //preserve a copy of the brush and pen before we start fiddling with it
    QBrush brush = p->brush(); //to be kept as original
    QPen pen = p->pen(); // to be kept original
    //
    // experimental alpha transparency
    // 255 = opaque
    //
    QBrush myTransparentBrush = p->brush();
    QColor myColor = brush.color();
    myColor.setAlpha(transparencyLevelInt);
    myTransparentBrush.setColor(myColor);
    QPen myTransparentPen = p->pen(); // store current pen
    myColor = myTransparentPen.color();
    myColor.setAlpha(transparencyLevelInt);
    myTransparentPen.setColor(myColor);
    //
    // draw the polygon fill
    // 
    p->setBrush(myTransparentBrush);
    p->setPen ( Qt::NoPen ); // no boundary
    p->drawPolygon( pa );

    // draw the polygon outline. Draw each ring as a separate
    // polygon to avoid the lines associated with the outerRingPt.
    p->setBrush ( Qt::NoBrush );
    p->setPen (myTransparentPen);

    ringDetailType::const_iterator ri = ringDetails.begin();

    for (; ri != ringDetails.end(); ++ri)
      p->drawPolygon(pa.constData() + ri->first, ri->second, Qt::OddEvenFill);
    
    if(mEditable)//draw the vertex markers
      {
	for(int i = 0; i < pa.size(); ++i)
	  {
	    drawVertexMarker((int)(pa[i].x()), (int)(pa[i].y()), *p);
	  }
      }

    //
    //restore brush and pen to original
    //
    p->setBrush ( brush );
    p->setPen ( pen );
  
  } // totalPoints > 0
  
  return ptr;
}


bool QgsVectorLayer::draw(QPainter * p, QgsRect * viewExtent, QgsMapToPixel * theMapToPixelTransform)
{
  draw ( p, viewExtent, theMapToPixelTransform, 1., 1.);

  return TRUE; // Assume success always
}

void QgsVectorLayer::draw(QPainter * p, QgsRect * viewExtent, QgsMapToPixel * theMapToPixelTransform, 
    double widthScale, double symbolScale)
{
  if(m_renderer)
  {
    // painter is active (begin has been called
    /* Steps to draw the layer
       1. get the features in the view extent by SQL query
       2. read WKB for a feature
       3. transform
       4. draw
       */

    QPen pen;
    /*Pointer to a marker image*/
    QPixmap marker;
    /*Scale factor of the marker image*/
    double markerScaleFactor=1.;

    // Destroy all cached geometries and clear the references to them

    if(mEditable)
    {
      // Destroy all cached geometries and clear the references to them
      deleteCachedGeometries();
      
    }

    dataProvider->reset();
    dataProvider->select(viewExtent);
    dataProvider->updateFeatureCount();
    int totalFeatures = dataProvider->featureCount();
    int featureCount = 0;
    QgsFeature *fet;

    bool projectionsEnabledFlag = projectionsEnabled();
    std::list<int> attributes=m_renderer->classificationAttributes();

    mDrawingCancelled=false; //pressing esc will change this to true

    /*
       QTime t;
       t.start();
       */

    try
    {
      while (fet = dataProvider->getNextFeature(attributes, updateThreshold))
      {
        // XXX Something in our draw event is triggering an additional draw event when resizing [TE 01/26/06]
        // XXX Calling this will begin processing the next draw event causing image havoc and recursion crashes.
        //qApp->processEvents(); //so we can trap for esc press
        if (mDrawingCancelled) return;
        // If update threshold is greater than 0, check to see if
        // the threshold has been exceeded
        if(updateThreshold > 0)
        {
          // signal progress in drawing
          if(0 == featureCount % updateThreshold)
            emit drawingProgress(featureCount, totalFeatures);
        }

        if (fet == 0)
	  {
	    QgsDebugMsg("get next feature returned null");
	    continue;
	  }
	
	if(mEditable)
	  {
	    if (mDeleted.find(fet->featureId()) != mDeleted.end())
	      {
		continue; //dont't draw feature marked as deleted
	      }
	    if (mChangedGeometries.find(fet->featureId()) != mChangedGeometries.end())
            {
	      // substitute the committed geometry with the modified one
	      fet->setGeometry( mChangedGeometries[ fet->featureId() ] );
	    }
	    // Cache this for the use of (e.g.) modifying the feature's uncommitted geometry.
	    mCachedGeometries[fet->featureId()] = fet->geometryAndOwnership();
	  }
	    
	//check if feature is selected
	bool sel=mSelected.find(fet->featureId()) != mSelected.end();
	m_renderer->renderFeature(p, fet, &marker, &markerScaleFactor, sel, widthScale );
	double scale = markerScaleFactor * symbolScale;
	drawFeature(p,fet,theMapToPixelTransform,&marker, scale, projectionsEnabledFlag);
	++featureCount;
	delete fet;
      }	

      //also draw the not yet commited features
      if(mEditable)
	{
	  for(std::vector<QgsFeature*>::iterator it = mAddedFeatures.begin(); it != mAddedFeatures.end(); ++it)
	    {
	      bool sel=mSelected.find((*it)->featureId()) != mSelected.end();
	      m_renderer->renderFeature(p, *it, &marker, &markerScaleFactor, sel, widthScale);
	      double scale = markerScaleFactor * symbolScale;
	      if (mChangedGeometries.find((*it)->featureId()) != mChangedGeometries.end())
		{
		  (*it)->setGeometry( mChangedGeometries[(*it)->featureId() ] );
		}
	      //give a deep copy of the geometry to mCachedGeometry because it will be erased at each redraw
	      QgsGeometry* deepCopy = new QgsGeometry(*((*it)->geometry()));
	      mCachedGeometries.insert(std::make_pair((*it)->featureId(), deepCopy));
	      drawFeature(p,*it,theMapToPixelTransform,&marker,scale, projectionsEnabledFlag);
	    }
	}
    }
    catch (QgsCsException &cse)
    {
      QString msg("Failed to transform a point while drawing a feature of type '"
          + fet->typeName() + "'. Ignoring this feature.");
      msg += cse.what();
      qWarning(msg.toLocal8Bit().data());
    }
    QgsDebugMsg("Total features processed is " + QString::number(featureCount));
    // XXX Something in our draw event is triggering an additional draw event when resizing [TE 01/26/06]
    // XXX Calling this will begin processing the next draw event causing image havoc and recursion crashes.
    //qApp->processEvents();
  }
  else
  {
    QgsLogger::warning("QgsRenderer is null in QgsVectorLayer::draw()");
  }
}


QgsVectorLayer::endian_t QgsVectorLayer::endian()
{
  //     char *chkEndian = new char[4];
  //     memset(chkEndian, '\0', 4);
  //     chkEndian[0] = 0xE8;

  //     int *ce = (int *) chkEndian;
  //     int retVal;
  //     if (232 == *ce)
  //       retVal = NDR;
  //     else
  //       retVal = XDR;

  //     delete [] chkEndian;

  return (htonl(1) == 1) ? QgsVectorLayer::XDR : QgsVectorLayer::NDR ;
}

void QgsVectorLayer::cacheGeometries()
{
  if(dataProvider)
    {
      QgsFeature* f = 0;
      while(f = dataProvider->getNextFeature(false))
	{
	  mCachedGeometries.insert(std::make_pair(f->featureId(), f->geometryAndOwnership()));
	  delete f;
	}
    }
}

void QgsVectorLayer::deleteCachedGeometries()
{
  for (std::map<int, QgsGeometry*>::iterator it  = mCachedGeometries.begin(); it != mCachedGeometries.end(); ++it )
    {
      delete (*it).second;
    }
  mCachedGeometries.clear();
}

void QgsVectorLayer::drawVertexMarker(int x, int y, QPainter& p)
{
  //todo: let the user configure the size and appearance of the marker 
  int size = 15;
  int m = (size-1)/2;
  p.drawLine(x-m, y+m, x+m, y-m);
  p.drawLine(x-m, y-m, x+m, y+m);
}

void QgsVectorLayer::table()
{
  if (tabledisplay)
  {
    tabledisplay->raise();
    // Give the table the most recent copy of the actions for this
    // layer.
    tabledisplay->table()->setAttributeActions(mActions);
  }
  else
  {
    // display the attribute table
    QApplication::setOverrideCursor(Qt::waitCursor);
    tabledisplay = new QgsAttributeTableDisplay(this);
    connect(tabledisplay, SIGNAL(deleted()), this, SLOT(invalidateTableDisplay()));
    tabledisplay->table()->fillTable(this);
    tabledisplay->table()->setSorting(true);


    tabledisplay->setTitle(tr("Attribute table - ") + name());
    tabledisplay->show();
    tabledisplay->table()->clearSelection();  //deselect the first row

    // Give the table the most recent copy of the actions for this
    // layer.
    tabledisplay->table()->setAttributeActions(mActions);

    QObject::disconnect(tabledisplay->table(), SIGNAL(selectionChanged()), tabledisplay->table(), SLOT(handleChangedSelections()));

    for (std::set<int>::iterator it = mSelected.begin(); it != mSelected.end(); ++it)
    {
      tabledisplay->table()->selectRowWithId(*it);//todo: avoid that the table gets repainted during each selection
#ifdef QGISDEBUG
      qWarning(("selecting row with id " + QString::number(*it)).toLocal8Bit().data());
#endif

    }

    QObject::connect(tabledisplay->table(), SIGNAL(selectionChanged()), tabledisplay->table(), SLOT(handleChangedSelections()));

    //etablish the necessary connections between the table and the shapefilelayer
    QObject::connect(tabledisplay->table(), SIGNAL(selected(int)), this, SLOT(select(int)));
    QObject::connect(tabledisplay->table(), SIGNAL(selectionRemoved()), this, SLOT(removeSelection()));
    QObject::connect(tabledisplay->table(), SIGNAL(repaintRequested()), this, SLOT(triggerRepaint()));
    QApplication::restoreOverrideCursor();
  }

} // QgsVectorLayer::table

void QgsVectorLayer::select(int number)
{
  mSelected.insert(number);
  emit selectionChanged();
}

void QgsVectorLayer::select(QgsRect * rect, bool lock)
{
  QApplication::setOverrideCursor(Qt::WaitCursor);
  // normalize the rectangle
  rect->normalize();
  if (tabledisplay)
  {
    QObject::disconnect(tabledisplay->table(), SIGNAL(selectionChanged()), tabledisplay->table(), SLOT(handleChangedSelections()));
    QObject::disconnect(tabledisplay->table(), SIGNAL(selected(int)), this, SLOT(select(int))); //disconnecting because of performance reason
  }

  if (lock == false)
  {
    removeSelection();        //only if ctrl-button is not pressed
    if (tabledisplay)
    {
      tabledisplay->table()->clearSelection();
    }
  }

  QgsRect r = inverseProjectRect(*rect);
  dataProvider->select(&r, true);

  QgsFeature *fet;

  while (fet = dataProvider->getNextFeature(false))
  {
    if(mDeleted.find(fet->featureId())==mDeleted.end())//don't select deleted features
    {
      select(fet->featureId());
      if (tabledisplay)
      {
        tabledisplay->table()->selectRowWithId(fet->featureId());
      }
    }
    delete fet;
  }

  //also test the not commited features
  for(std::vector<QgsFeature*>::iterator it=mAddedFeatures.begin();it!=mAddedFeatures.end();++it)
  {
    if((*it)->geometry()->intersects(rect))
    {
      select((*it)->featureId());
      if (tabledisplay)
      {
        tabledisplay->table()->selectRowWithId((*it)->featureId());
      }
    }
  }

  if (tabledisplay)
  {
    QObject::connect(tabledisplay->table(), SIGNAL(selectionChanged()), tabledisplay->table(), SLOT(handleChangedSelections()));
    QObject::connect(tabledisplay->table(), SIGNAL(selected(int)), this, SLOT(select(int)));  //disconnecting because of performance reason
  }
  triggerRepaint();
  QApplication::restoreOverrideCursor();

  emit selectionChanged();
}

void QgsVectorLayer::invertSelection()
{
  QApplication::setOverrideCursor(Qt::waitCursor);
  if (tabledisplay)
  {
    QObject::disconnect(tabledisplay->table(), SIGNAL(selectionChanged()), tabledisplay->table(), SLOT(handleChangedSelections()));
    QObject::disconnect(tabledisplay->table(), SIGNAL(selected(int)), this, SLOT(select(int))); //disconnecting because of performance reason
    tabledisplay->hide();
  }


  //copy the ids of selected features to tmp
  std::list<int> tmp;
  for(std::set<int>::iterator iter=mSelected.begin();iter!=mSelected.end();++iter)
  {
    tmp.push_back(*iter);
  }

  removeSelection();
  if (tabledisplay)
  {
    tabledisplay->table()->clearSelection();
  }

  QgsFeature *fet;
  dataProvider->reset();

  while (fet = dataProvider->getNextFeature(true))
  {
    if(mDeleted.find(fet->featureId())==mDeleted.end())//don't select deleted features
    {
      select(fet->featureId());
    }
  }

  for(std::vector<QgsFeature*>::iterator iter=mAddedFeatures.begin();iter!=mAddedFeatures.end();++iter)
  {
    select((*iter)->featureId());
  }

  for(std::list<int>::iterator iter=tmp.begin();iter!=tmp.end();++iter)
  {
    mSelected.erase(*iter);
  }

  if(tabledisplay)
  {
    QProgressDialog progress( tr("Invert Selection..."), tr("Abort"), 0, mSelected.size(), tabledisplay);
    int i=0;
    for(std::set<int>::iterator iter=mSelected.begin();iter!=mSelected.end();++iter)
    {
      ++i;
      progress.setValue(i);
      qApp->processEvents();
      if(progress.wasCanceled())
      {
        //deselect the remaining features if action was canceled
        mSelected.erase(iter,--mSelected.end());
        break;
      }
      tabledisplay->table()->selectRowWithId(*iter);//todo: avoid that the table gets repainted during each selection
    }
  }

  if (tabledisplay)
  {
    QObject::connect(tabledisplay->table(), SIGNAL(selectionChanged()), tabledisplay->table(), SLOT(handleChangedSelections()));
    QObject::connect(tabledisplay->table(), SIGNAL(selected(int)), this, SLOT(select(int)));  //disconnecting because of performance reason
    tabledisplay->show();
  }

  triggerRepaint();
  QApplication::restoreOverrideCursor();

  emit selectionChanged();
}

void QgsVectorLayer::removeSelection()
{
  mSelected.clear();
  emit selectionChanged();
}

void QgsVectorLayer::triggerRepaint()
{ 
  emit repaintRequested();
}

void QgsVectorLayer::invalidateTableDisplay()
{
  tabledisplay = 0;
}

QgsVectorDataProvider* QgsVectorLayer::getDataProvider()
{
  return dataProvider;
}

const QgsVectorDataProvider* QgsVectorLayer::getDataProvider() const
{
  return dataProvider;
}

void QgsVectorLayer::setProviderEncoding(const QString& encoding)
{
  if(dataProvider)
  {
    dataProvider->setEncoding(encoding);
  }
}


void QgsVectorLayer::showLayerProperties()
{
  // Set wait cursor while the property dialog is created
  // and initialized
  qApp->setOverrideCursor(QCursor(Qt::WaitCursor));


  if (!m_propertiesDialog)
  {
#ifdef QGISDEBUG
    std::cerr << "Creating new QgsVectorLayerProperties object\n";
#endif
    m_propertiesDialog = new QgsVectorLayerProperties(this);
    // Make sure that the UI starts out with the correct display
    // field value
#ifdef QGISDEBUG
    std::cerr << "Setting display field in prop dialog\n";
#endif
    m_propertiesDialog->setDisplayField(displayField());

#ifdef QGISDEBUG
    std::cerr << "Raising prop dialog\n";
#endif
    m_propertiesDialog->raise();
#ifdef QGISDEBUG
    std::cerr << "Showing prop dialog\n";
#endif
    m_propertiesDialog->show();
  }
  else
  {
    m_propertiesDialog->reset();
    m_propertiesDialog->show();
    m_propertiesDialog->raise();
  }

  // restore normal cursor
  qApp->restoreOverrideCursor();
}


const QgsRenderer* QgsVectorLayer::renderer() const
{
  return m_renderer;
}

void QgsVectorLayer::setRenderer(QgsRenderer * r)
{
  if (r != m_renderer)
  {
    delete m_renderer;
    m_renderer = r;
  }
}

QGis::VectorType QgsVectorLayer::vectorType() const
{
  if (dataProvider)
  {
    int type = dataProvider->geometryType();
    switch (type)
    {
      case QGis::WKBPoint:
        return QGis::Point;
      case QGis::WKBLineString:
        return QGis::Line;
      case QGis::WKBPolygon:
        return QGis::Polygon;
      case QGis::WKBMultiPoint:
        return QGis::Point;
      case QGis::WKBMultiLineString:
        return QGis::Line;
      case QGis::WKBMultiPolygon:
        return QGis::Polygon;
    }
  }
  else
  {
#ifdef QGISDEBUG
    qWarning("warning, pointer to dataProvider is null in QgsVectorLayer::vectorType()");
#endif

  }

  // We shouldn't get here, and if we have, other things are likely to
  // go wrong. Code that uses the vectorType() return value should be
  // rewritten to cope with a value of QGis::Unknown. To make this
  // need known, the following message is printed every time we get
  // here.
  std::cerr << "WARNING: This code (file " << __FILE__ << ", line "
            << __LINE__ << ") should never be reached. "
            << "Problems may occur...\n";

  return QGis::Unknown;
}

QGis::WKBTYPE QgsVectorLayer::getGeometryType() const
{
  return (QGis::WKBTYPE)(geometryType);
}

QgsVectorLayerProperties *QgsVectorLayer::propertiesDialog()
{
  return m_propertiesDialog;
}


void QgsVectorLayer::initContextMenu_(QgisApp * app)
{

  popMenu->addAction(tr("&Open attribute table"), app, SLOT(attributeTable()));

  popMenu->addSeparator();

  int cap=dataProvider->capabilities();
  if((cap&QgsVectorDataProvider::AddFeatures)
      ||(cap&QgsVectorDataProvider::DeleteFeatures))
  {
    mToggleEditingAction = popMenu->addAction(tr("Allow Editing"),this,SLOT(toggleEditing()));
    mToggleEditingAction->setCheckable(true);
    mToggleEditingAction->blockSignals(true);
    if(mEditable)
      {
	mToggleEditingAction->setChecked(true);
      }
    else
      {
	mToggleEditingAction->setChecked(false);
      }
    mToggleEditingAction->blockSignals(false);
  }

  if(cap&QgsVectorDataProvider::SaveAsShapefile)
  {
    // add the save as shapefile menu item
    popMenu->addSeparator();
    popMenu->addAction(tr("Save as shapefile..."), this, SLOT(saveAsShapefile()));
  }

} // QgsVectorLayer::initContextMenu_(QgisApp * app)

QgsRect QgsVectorLayer::bBoxOfSelected()
{
  if(mSelected.size()==0)//no selected features
  {
    return QgsRect(0,0,0,0);
  }

  QgsRect r, retval;
  QgsFeature* fet;
  dataProvider->reset();

  retval.setMinimal();
  while ((fet = dataProvider->getNextFeature(false)))
  {
    if (mSelected.find(fet->featureId()) != mSelected.end())
    {
      r=fet->geometry()->boundingBox();
      retval.combineExtentWith(&r);
    }
    delete fet;
  }
  //also go through the not commited features
  for(std::vector<QgsFeature*>::iterator iter=mAddedFeatures.begin();iter!=mAddedFeatures.end();++iter)
  {
    if(mSelected.find((*iter)->featureId())!=mSelected.end())
    {
      r=(*iter)->geometry()->boundingBox();
      retval.combineExtentWith(&r);
    }
  }

  if (retval.width() == 0.0 || retval.height() == 0.0)
  {
    // If all of the features are at the one point, buffer the
    // rectangle a bit. If they are all at zero, do something a bit
    // more crude.

    if (retval.xMin() == 0.0 && retval.xMax() == 0.0 &&
        retval.yMin() == 0.0 && retval.yMax() == 0.0)
    {
      retval.set(-1.0, -1.0, 1.0, 1.0);
    }
    else
    {
      const double padFactor = 1e-8;
      double widthPad = retval.xMin() * padFactor;
      double heightPad = retval.yMin() * padFactor;
      double xmin = retval.xMin() - widthPad;
      double xmax = retval.xMax() + widthPad;
      double ymin = retval.yMin() - heightPad;
      double ymax = retval.yMax() + heightPad;
      retval.set(xmin, ymin, xmax, ymax);
    }
  }

  return retval;
}

void QgsVectorLayer::setLayerProperties(QgsVectorLayerProperties * properties)
{
  m_propertiesDialog = properties;
  // Make sure that the UI gets the correct display
  // field value

  if(m_propertiesDialog)
  {
    m_propertiesDialog->setDisplayField(displayField());
  }
}



QgsFeature * QgsVectorLayer::getFirstFeature(bool fetchAttributes, bool selected) const
{
  if ( ! dataProvider )
  {
    std::cerr << __FILE__ << ":" << __LINE__
      << " QgsVectorLayer::getFirstFeature() invoked with null dataProvider\n";
    return 0x0;
  }

  if ( selected )
  {
    QgsFeature *fet = dataProvider->getFirstFeature(fetchAttributes);
    while(fet)
    {
      bool sel = mSelected.find(fet->featureId()) != mSelected.end();
      if ( sel ) return fet;
      fet = dataProvider->getNextFeature(fetchAttributes);
    }
    return 0;
  }

  return dataProvider->getFirstFeature( fetchAttributes );
} // QgsVectorLayer::getFirstFeature


QgsFeature * QgsVectorLayer::getNextFeature(bool fetchAttributes, bool selected) const
{
  if ( ! dataProvider )
  {
    std::cerr << __FILE__ << ":" << __LINE__
      << " QgsVectorLayer::getNextFeature() invoked with null dataProvider\n";
    return 0x0;
  }

  if ( selected )
  {
    QgsFeature *fet;
    while ( fet = dataProvider->getNextFeature(fetchAttributes) )
    {
      bool sel = mSelected.find(fet->featureId()) != mSelected.end();
      if ( sel ) return fet;
    }
    return 0;
  }

  return dataProvider->getNextFeature( fetchAttributes );
} // QgsVectorLayer::getNextFeature



bool QgsVectorLayer::getNextFeature(QgsFeature &feature, bool fetchAttributes) const
{
  if ( ! dataProvider )
  {
    std::cerr << __FILE__ << ":" << __LINE__
      << " QgsVectorLayer::getNextFeature() invoked with null dataProvider\n";
    return false;
  }

  return dataProvider->getNextFeature( feature, fetchAttributes );
} // QgsVectorLayer::getNextFeature



long QgsVectorLayer::featureCount() const
{
  if ( ! dataProvider )
  {
    std::cerr << __FILE__ << ":" << __LINE__
      << " QgsVectorLayer::featureCount() invoked with null dataProvider\n";
    return 0;
  }

  return dataProvider->featureCount();
} // QgsVectorLayer::featureCount

long QgsVectorLayer::updateFeatureCount() const
{
  if ( ! dataProvider )
  {
    std::cerr << __FILE__ << ":" << __LINE__
      << " QgsVectorLayer::updateFeatureCount() invoked with null dataProvider\n";
    return 0;
  }
  return dataProvider->updateFeatureCount();
}

void QgsVectorLayer::updateExtents()
{
  if(dataProvider)
  {
    if(mDeleted.size()==0)
    {
      // get the extent of the layer from the provider
      layerExtent.setXmin(dataProvider->extent()->xMin());
      layerExtent.setYmin(dataProvider->extent()->yMin());
      layerExtent.setXmax(dataProvider->extent()->xMax());
      layerExtent.setYmax(dataProvider->extent()->yMax());
    }
    else
    {
      QgsFeature* fet=0;
      QgsRect bb;

      layerExtent.setMinimal();
      dataProvider->reset();
      while(fet=dataProvider->getNextFeature(false))
      {
        if(mDeleted.find(fet->featureId())==mDeleted.end())
        {
          bb=fet->boundingBox();
          layerExtent.combineExtentWith(&bb);
        }
        delete fet;
      }
    }
  }
  else
  {
    std::cerr << __FILE__ << ":" << __LINE__
      << " QgsVectorLayer::updateFeatureCount() invoked with null dataProvider\n";
  }

  //todo: also consider the not commited features
  for(std::vector<QgsFeature*>::iterator iter=mAddedFeatures.begin();iter!=mAddedFeatures.end();++iter)
  {
    QgsRect bb=(*iter)->boundingBox();
    layerExtent.combineExtentWith(&bb);

  }

  // Send this (hopefully) up the chain to the map canvas
  emit recalculateExtents();
}

QString QgsVectorLayer::subsetString()
{
  if ( ! dataProvider )
  {
    std::cerr << __FILE__ << ":" << __LINE__
      << " QgsVectorLayer::subsetString() invoked with null dataProvider\n";
    return 0;
  }
  return dataProvider->subsetString();
}
void QgsVectorLayer::setSubsetString(QString subset)
{
  if ( ! dataProvider )
  {
    std::cerr << __FILE__ << ":" << __LINE__
      << " QgsVectorLayer::setSubsetString() invoked with null dataProvider\n";
  }
  else
  {
    dataProvider->setSubsetString(subset);
    // get the updated data source string from the provider
    dataSource = dataProvider->getDataSourceUri();
    updateExtents();
  }
  //trigger a recalculate extents request to any attached canvases
#ifdef QGISDEBUG
  std::cout << "Subset query changed, emitting recalculateExtents() signal" << std::endl;
#endif
  // emit the signal  to inform any listeners that the extent of this
  // layer has changed
  emit recalculateExtents();
}
int QgsVectorLayer::fieldCount() const
{
  if ( ! dataProvider )
  {
    std::cerr << __FILE__ << ":" << __LINE__
      << " QgsVectorLayer::fieldCount() invoked with null dataProvider\n";
    return 0;
  }

  return dataProvider->fieldCount();
} // QgsVectorLayer::fieldCount


std::vector<QgsField> const& QgsVectorLayer::fields() const
{
  if ( ! dataProvider )
  {
    std::cerr << __FILE__ << ":" << __LINE__
      << " QgsVectorLayer::fields() invoked with null dataProvider\n";

    static std::vector<QgsField> bogus; // empty, bogus container
    return bogus;
  }

  return dataProvider->fields();
} // QgsVectorLayer::fields()


bool QgsVectorLayer::addFeature(QgsFeature* f, bool alsoUpdateExtent)
{
  static int addedIdLowWaterMark = -1;

  if(dataProvider)
  {
    if(!(dataProvider->capabilities() & QgsVectorDataProvider::AddFeatures))
    {
      QMessageBox::information(0, tr("Layer cannot be added to"), 
          tr("The data provider for this layer does not support the addition of features."));
      return false;
    }

    if(!isEditable())
    {
      QMessageBox::information(0, tr("Layer not editable"), 
          tr("The current layer is not editable. Choose 'Start editing' in the digitizing toolbar."));
      return false;
    }

    //assign a temporary id to the feature (use negative numbers)
    addedIdLowWaterMark--;

#ifdef QGISDEBUG
    qWarning("assigned feature id "+QString::number(addedIdLowWaterMark));
#endif

    // Change the fields on the feature to suit the destination
    // in the paste transformation transfer.
    // TODO: Could be done more efficiently for large pastes
    std::map<int, QString> fields = f->fields();

#ifdef QGISDEBUG
    std::cout << "QgsVectorLayer::addFeature: about to traverse fields." << std::endl;
#endif
    for (std::map<int, QString>::iterator it  = fields.begin(); it != fields.end(); ++it)
    {
#ifdef QGISDEBUG
      std::cout << "QgsVectorLayer::addFeature: inspecting field '"
        << (it->second).toLocal8Bit().data()
        << "'." << std::endl;
#endif

    }

    // Force a feature ID (to keep other functions in QGIS happy,
    // providers will use their own new feature ID when we commit the new feature)
    // and add to the known added features.
    f->setFeatureId(addedIdLowWaterMark);
    mAddedFeatures.push_back(f);
    mModified=true;

    //hide and delete the table because it is not up to date any more
    if (tabledisplay)
    {
      tabledisplay->close();
      delete tabledisplay;
      tabledisplay=0;
    }

    if (alsoUpdateExtent)
    {
      updateExtents();
    }  

    return true;
  }
  return false;
}


bool QgsVectorLayer::insertVertexBefore(double x, double y, int atFeatureId, QgsGeometryVertexIndex beforeVertex)
{
  if(!mEditable)
    {
      return false;
    }

  if(dataProvider)
  {
    if(mChangedGeometries.find(atFeatureId) == mChangedGeometries.end())
    {
      //first time this geometry has changed since last commit
      if(!mCachedGeometries[atFeatureId])
	{
	  return false;
	}
      mChangedGeometries[atFeatureId] = *(mCachedGeometries[atFeatureId]);
    }
    
    mChangedGeometries[atFeatureId].insertVertexBefore(x, y, beforeVertex);
    mModified=true;
    return true;
  }
  return false;
}


bool QgsVectorLayer::moveVertexAt(double x, double y, int atFeatureId,
    QgsGeometryVertexIndex atVertex)
{
  if(!mEditable)
    {
      return false;
    }

  if(dataProvider)
  {
    if(mChangedGeometries.find(atFeatureId) == mChangedGeometries.end())
    {
      // first time this geometry has changed since last commit
      if(mCachedGeometries.find(atFeatureId) == mCachedGeometries.end() || mCachedGeometries[atFeatureId] == 0)
	{
	  return false;
	}
      mChangedGeometries[atFeatureId] = *(mCachedGeometries[atFeatureId]);
    }

    mChangedGeometries[atFeatureId].moveVertexAt(x, y, atVertex);
    mModified=true;
    return true;
  }
  return false;
}


bool QgsVectorLayer::deleteVertexAt(int atFeatureId,
    QgsGeometryVertexIndex atVertex)
{
  if(!mEditable)
    {
      return false;
    }

  if(dataProvider)
  {
    if(mChangedGeometries.find(atFeatureId) == mChangedGeometries.end())
    {
      // first time this geometry has changed since last commit
      if(!mCachedGeometries[atFeatureId])
	{
	  return false;
	}
      mChangedGeometries[atFeatureId] = *(mCachedGeometries[atFeatureId]);
    }

    mChangedGeometries[atFeatureId].deleteVertexAt(atVertex);
    mModified=true;
    return true;
  }
  return false;
}


QString QgsVectorLayer::getDefaultValue(const QString& attr,
    QgsFeature* f)
{
  return dataProvider->getDefaultValue(attr, f);
}

bool QgsVectorLayer::deleteSelectedFeatures()
{
  if(!(dataProvider->capabilities() & QgsVectorDataProvider::DeleteFeatures))
  {
    QMessageBox::information(0, tr("Provider does not support deletion"), 
        tr("Data provider does not support deleting features"));
    return false;
  }

  if(!isEditable())
  {
    QMessageBox::information(0, tr("Layer not editable"), 
        tr("The current layer is not editable. Choose 'Allow editing' in the legend item right click menu"));
    return false;
  }

  for(std::set<int>::iterator it=mSelected.begin();it!=mSelected.end();++it)
  {
    bool notcommitedfeature=false;
    //first test, if the feature with this id is a not-commited feature
    for(std::vector<QgsFeature*>::iterator iter=mAddedFeatures.begin();iter!=mAddedFeatures.end();++iter)
    {
      if((*it)==(*iter)->featureId())
      {
        // Delete the feature itself before deleting the reference to it.
        delete *iter;
        mAddedFeatures.erase(iter);

        notcommitedfeature=true;
        break;
      }
    }
    if(!notcommitedfeature)
    {
      mDeleted.insert(*it);
    }
  }

  if(mSelected.size()>0)
  {
    mModified=true;
    /*      mSelected.clear();*/
    removeSelection();
    triggerRepaint();
    updateExtents();

    //hide and delete the table because it is not up to date any more
    if (tabledisplay)
    {
      tabledisplay->close();
      delete tabledisplay;
      tabledisplay=0;
    }

  }

  return true;
}

QgsLabel * QgsVectorLayer::label()
{
  return mLabel;
}

void QgsVectorLayer::setLabelOn ( bool on )
{
  mLabelOn = on;
}

bool QgsVectorLayer::labelOn ( void )
{
  return mLabelOn;
}

void QgsVectorLayer::toggleEditing()
{
  if(mToggleEditingAction)
  {
    if (mToggleEditingAction->isChecked() ) //checking of the QAction is done before calling this slot
    {
      startEditing();
    }
    else
    {
      stopEditing();
    }
  }
}


void QgsVectorLayer::startEditing()
{
  if(dataProvider)
  {
    if(!(dataProvider->capabilities()&QgsVectorDataProvider::AddFeatures))
    {
      QMessageBox::information(0,tr("Start editing failed"),
                               tr("Provider cannot be opened for editing"),
                               QMessageBox::Ok);
    }
    else
    {
      cacheGeometries();
      mEditable=true;
      if(isValid())
      {
        updateItemPixmap();
        if(mToggleEditingAction)
        {
          mToggleEditingAction->setChecked(true);
        }
	triggerRepaint();
      }
    }
  }
}

void QgsVectorLayer::stopEditing()
{
  deleteCachedGeometries();
  if(dataProvider)
  {
    if(mModified)
    {
      //commit or roll back?
      int commit=QMessageBox::information(0,tr("Stop editing"),tr("Do you want to save the changes?"),tr("&Yes"),tr("&No"),QString::null,0,1);	

      if(commit==0)
      {
        if(!commitChanges())
        {
          QMessageBox::information(0,tr("Error"),tr("Could not commit changes"),QMessageBox::Ok);
        }
        else
        {
          dataProvider->updateExtents();
	  dataProvider->updateFeatureCount();
          //hide and delete the table because it is not up to date any more
          if (tabledisplay)
          {
            tabledisplay->close();
            delete tabledisplay;
            tabledisplay=0;
          }
        }
      }
      else if(commit==1)
      {
        if(!rollBack())
        {
          QMessageBox::information(0,tr("Error"),
              tr("Problems during roll back"),QMessageBox::Ok);
        }
        //hide and delete the table because it is not up to date any more
        if (tabledisplay)
        {
          tabledisplay->close();
          delete tabledisplay;
          tabledisplay=0;
        }
      }
      emit editingStopped(true);
    }
    else
    {
      emit editingStopped(false);
    }
    mEditable=false;
    triggerRepaint();
    mModified=false;
    if(isValid())
    {
      updateItemPixmap();
      if(mToggleEditingAction)
      {
        mToggleEditingAction->setChecked(false);
      }
    }
  }
}

// return state of scale dependent rendering. True if features should
// only be rendered if between mMinimumScale and mMaximumScale
bool QgsVectorLayer::scaleDependentRender()
{
  return mScaleDependentRender;
}


// Return the minimum scale at which the layer is rendered
int QgsVectorLayer::minimumScale()
{
  return mMinimumScale;
}
// Return the maximum scale at which the layer is rendered
int QgsVectorLayer::maximumScale()
{
  return mMaximumScale;
}



bool QgsVectorLayer::readXML_( QDomNode & layer_node )
{
#ifdef QGISDEBUG
  std::cerr << "Datasource in QgsVectorLayer::readXML_: " << dataSource.toLocal8Bit().data() << std::endl;
#endif
  // process the attribute actions
  mActions.readXML(layer_node);

  //process provider key
  QDomNode pkeyNode = layer_node.namedItem("provider");

  if (pkeyNode.isNull())
  {
    providerKey = "";
  }
  else
  {
    QDomElement pkeyElt = pkeyNode.toElement();
    providerKey = pkeyElt.text();
  }

  // determine type of vector layer
  if ( ! providerKey.isNull() )
  {
    // if the provider string isn't empty, then we successfully
    // got the stored provider
  }
  else if ((dataSource.find("host=") > -1) &&
      (dataSource.find("dbname=") > -1))
  {
    providerKey = "postgres";
  }
  else
  {
    providerKey = "ogr";
  }

#ifdef QGISDEBUG
  const char * dataproviderStr = providerKey.ascii(); // debugger probe
#endif

  if ( ! setDataProvider( providerKey ) )
  {
    return false;
  }

  //read provider encoding
  QDomNode encodingNode = layer_node.namedItem("encoding");
  if( ! encodingNode.isNull() && dataProvider )
  {
    dataProvider->setEncoding(encodingNode.toElement().text());
  }

  // get and set the display field if it exists.
  QDomNode displayFieldNode = layer_node.namedItem("displayfield");
  if (!displayFieldNode.isNull())
  {
    QDomElement e = displayFieldNode.toElement();
    setDisplayField(e.text());
  }



  // create and bind a renderer to this layer

  QDomNode singlenode = layer_node.namedItem("singlesymbol");
  QDomNode graduatednode = layer_node.namedItem("graduatedsymbol");
  QDomNode continuousnode = layer_node.namedItem("continuoussymbol");
  QDomNode singlemarkernode = layer_node.namedItem("singlemarker");
  QDomNode graduatedmarkernode = layer_node.namedItem("graduatedmarker");
  QDomNode uniquevaluenode = layer_node.namedItem("uniquevalue");
  QDomNode labelnode = layer_node.namedItem("label");
  QDomNode uniquemarkernode = layer_node.namedItem("uniquevaluemarker");

  //std::auto_ptr<QgsRenderer> renderer; actually the renderer SHOULD NOT be
  //deleted when this function finishes, otherwise the application will
  //crash
  // XXX this seems to be a dangerous implementation; should re-visit design
  QgsRenderer * renderer;

  // XXX Kludge!


  // if we don't have a coordinate transform, get one

  //
  // Im commenting this out - if the layer was serialied in a 
  //  >=0.7 project it should have been validated and have all
  // coord xform info
  //

  //if ( ! coordinateTransform() )
  //{
  //    setCoordinateSystem();
  //}

  if (!singlenode.isNull())
  {
    renderer = new QgsSingleSymbolRenderer(vectorType());
    renderer->readXML(singlenode, *this);
  }
  else if (!graduatednode.isNull())
  {
    renderer = new QgsGraduatedSymbolRenderer(vectorType());
    renderer->readXML(graduatednode, *this);
  }
  else if (!continuousnode.isNull())
  {
    renderer = new QgsContinuousColorRenderer(vectorType());
    renderer->readXML(continuousnode, *this);
  }
  else if (!uniquevaluenode.isNull())
  {
    renderer = new QgsUniqueValueRenderer(vectorType());
    renderer->readXML(uniquevaluenode, *this);
  }

  // Test if labeling is on or off
  QDomElement element = labelnode.toElement();
  int labelOn = element.text().toInt();
  if (labelOn < 1)
  {
    setLabelOn(false);
  }
  else
  {
    setLabelOn(true);
  }

#ifdef QGISDEBUG
  std::cout << "Testing if qgsvectorlayer can call label readXML routine" << std::endl;
#endif

  QDomNode labelattributesnode = layer_node.namedItem("labelattributes");

  if(!labelattributesnode.isNull())
  {
#ifdef QGISDEBUG
    std::cout << "qgsvectorlayer calling label readXML routine" << std::endl;
#endif
    mLabel->readXML(labelattributesnode);
  }

  return valid;               // should be true if read successfully

} // void QgsVectorLayer::readXML_



bool QgsVectorLayer::setDataProvider( QString const & provider )
{
  // XXX should I check for and possibly delete any pre-existing providers?
  // XXX How often will that scenario occur?

  providerKey = provider;     // XXX is this necessary?  Usually already set
  // XXX when execution gets here.

  //XXX - This was a dynamic cast but that kills the Windows
  //      version big-time with an abnormal termination error
  dataProvider = 
    (QgsVectorDataProvider*)(QgsProviderRegistry::instance()->getProvider(provider,dataSource));

  if (dataProvider)
  {
    QgsDebug( "Instantiated the data provider plugin" );

    if (dataProvider->isValid())
    {
      valid = true;

      // TODO: Check if the provider has the capability to send fullExtentCalculated
      connect(dataProvider, SIGNAL( fullExtentCalculated() ), 
          this,           SLOT( updateExtents() ) 
          );

      // get the extent
      QgsRect *mbr = dataProvider->extent();

      // show the extent
      QString s = mbr->stringRep();
      QgsDebugMsg("Extent of layer: " +  s);
      // store the extent
      layerExtent.setXmax(mbr->xMax());
      layerExtent.setXmin(mbr->xMin());
      layerExtent.setYmax(mbr->yMax());
      layerExtent.setYmin(mbr->yMin());

      // get and store the feature type
      geometryType = dataProvider->geometryType();

      // look at the fields in the layer and set the primary
      // display field using some real fuzzy logic
      setDisplayField();

      if (providerKey == "postgres")
      {
	QgsDebugMsg("Beautifying layer name " + name());
        // adjust the display name for postgres layers
        QString lName(name());
        lName = lName.mid(lName.find(".") + 1);
        lName = lName.left(lName.find("(") - 1);   // Take one away, to avoid a trailing space
        setLayerName(lName);
	QgsDebugMsg("Beautifying layer name " + name());
      }

      // label
      mLabel = new QgsLabel ( dataProvider->fields() );
      mLabelOn = false;
    }
    else
    {
#ifdef QGISDEBUG
      qDebug( "%s:%d invalid provider plugin %s", 
          __FILE__, __LINE__, dataSource.ascii() );
      return false;
#endif
    }
  }
  else
  {
    QgsDebug( " unable to get data provider" );

    return false;
  }

  return true;

} // QgsVectorLayer:: setDataProvider




/* virtual */ bool QgsVectorLayer::writeXML_( QDomNode & layer_node,
    QDomDocument & document )
{
  // first get the layer element so that we can append the type attribute

  QDomElement mapLayerNode = layer_node.toElement();

  if ( mapLayerNode.isNull() || ("maplayer" != mapLayerNode.nodeName()) )
  {
    qDebug( "QgsVectorLayer::writeXML() can't find <maplayer>" );
    return false;
  }

  mapLayerNode.setAttribute( "type", "vector" );

  // set the geometry type
  mapLayerNode.setAttribute( "geometry", QGis::qgisVectorGeometryType[vectorType()]);

  // add provider node

  QDomElement provider  = document.createElement( "provider" );
  QDomText providerText = document.createTextNode( providerType() );
  provider.appendChild( providerText );
  layer_node.appendChild( provider );

  //provider encoding
  QDomElement encoding = document.createElement("encoding");
  QDomText encodingText = document.createTextNode(dataProvider->encoding());
  encoding.appendChild( encodingText );
  layer_node.appendChild( encoding );

  //classification field(s)
  std::list<int> attributes=m_renderer->classificationAttributes();
  const std::vector<QgsField> providerFields = dataProvider->fields();
  for(std::list<int>::const_iterator it = attributes.begin(); it != attributes.end(); ++it)
    {
      QDomElement classificationElement = document.createElement("classificationattribute");
      QDomText classificationText = document.createTextNode(providerFields[*it].name());
      classificationElement.appendChild(classificationText);
      layer_node.appendChild(classificationElement);
    }

  // add the display field

  QDomElement dField  = document.createElement( "displayfield" );
  QDomText dFieldText = document.createTextNode( displayField() );
  dField.appendChild( dFieldText );
  layer_node.appendChild( dField );

  // add label node

  QDomElement label  = document.createElement( "label" );
  QDomText labelText = document.createTextNode( "" );

  if ( labelOn() )
  {
    labelText.setData( "1" );
  }
  else
  {
    labelText.setData( "0" );
  }
  label.appendChild( labelText );

  layer_node.appendChild( label );

  // add attribute actions

  mActions.writeXML(layer_node, document);

  // renderer specific settings

  const QgsRenderer * myRenderer;
  if( myRenderer = renderer())
  {
    myRenderer->writeXML(layer_node, document);
  }
  else
  {
    std::cerr << __FILE__ << ":" << __LINE__
      << " no renderer\n";

    // XXX return false?
  }

  // Now we get to do all that all over again for QgsLabel

  // XXX Since this is largely a cut-n-paste from the previous, this
  // XXX therefore becomes a candidate to be generalized into a separate
  // XXX function.  I think.

  QgsLabel * myLabel;

  if ( myLabel = this->label() )
  {
    std::stringstream labelXML;

    myLabel->writeXML(labelXML);

    QDomDocument labelDOM;

    std::string rawXML;
    std::string temp_str;
    QString     errorMsg;
    int         errorLine;
    int         errorColumn;

    // start with bogus XML header
    rawXML  = "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"yes\"?>\n";

    temp_str = labelXML.str();

    rawXML   += temp_str;

#ifdef QGISDEBUG
    std::cout << rawXML << std::endl << std::flush;
#endif
    const char * s = rawXML.c_str(); // debugger probe
    // Use the const char * form of the xml to make non-stl qt happy
    if ( ! labelDOM.setContent( QString::fromUtf8(s), &errorMsg, &errorLine, &errorColumn ) )
    {
      qDebug( ("XML import error at line %d column %d " + errorMsg).toLocal8Bit().data(), errorLine, errorColumn );

      return false;
    }

    // lastChild() because the first two nodes are the <xml> and
    // <!DOCTYPE> nodes; the label node follows that, and is (hopefully)
    // the last node.
    QDomNode labelDOMNode = document.importNode( labelDOM.lastChild(), true );

    if ( ! labelDOMNode.isNull() )
    {
      layer_node.appendChild( labelDOMNode );
    }
    else
    {
      qDebug( "not able to import label DOM node" );

      // XXX return false?
    }

  }

  return true;
} // bool QgsVectorLayer::writeXML_


/** we wouldn't have to do this if slots were inherited */
void QgsVectorLayer::inOverview( bool b )
{
  QgsMapLayer::inOverview( b );
}

int QgsVectorLayer::findFreeId()
{
  int freeid=-INT_MAX;
  int fid;
  if(dataProvider)
  {
    dataProvider->reset();
    QgsFeature *fet;

    //TODO: Is there an easier way of doing this other than iteration?
    //TODO: Also, what about race conditions between this code and a competing mapping client?
    //TODO: Maybe push this to the data provider?
    while ((fet = dataProvider->getNextFeature(true)))
    {
      fid=fet->featureId();
      if(fid>freeid)
      {
        freeid=fid;
      }
      delete fet;
    }
#ifdef QGISDEBUG
    qWarning(("freeid is: "+QString::number(freeid+1)).toLocal8Bit().data());
#endif
    return freeid+1;
  }
  else
  {
#ifdef QGISDEBUG
    qWarning("Error, dataProvider is 0 in QgsVectorLayer::findFreeId");
#endif
    return -1;
  }
}

bool QgsVectorLayer::commitChanges()
{
  if(dataProvider)
  {
    bool returnvalue=true;

    // Commit new features
    std::list<QgsFeature*> addedlist;
    for(std::vector<QgsFeature*>::iterator it=mAddedFeatures.begin();it!=mAddedFeatures.end();++it)
    {
      addedlist.push_back(*it);
    }

    if(!dataProvider->addFeatures(addedlist))
    {
      returnvalue=false;
    }

    // Delete the features themselves before deleting the references to them.
    for(std::vector<QgsFeature*>::iterator it=mAddedFeatures.begin();it!=mAddedFeatures.end();++it)
    {
      delete *it;
    }
    mAddedFeatures.clear();

    // Commit changed attributes
    if( mChangedAttributes.size() > 0 ) 
    {
      if ( !dataProvider->changeAttributeValues ( mChangedAttributes ) ) 
      {
        QMessageBox::warning(0,tr("Warning"),tr("Could not change attributes"));
      }
      mChangedAttributes.clear();
    }

    // Commit changed geometries
    if( mChangedGeometries.size() > 0 ) 
    {
      if ( !dataProvider->changeGeometryValues ( mChangedGeometries ) ) 
      {
        QMessageBox::warning(0,tr("Error"),tr("Could not commit changes to geometries"));
      }
      mChangedGeometries.clear();
    }

    // Commit deleted features
    if(mDeleted.size()>0)
    {
      std::list<int> deletelist;
      for(std::set<int>::iterator it=mDeleted.begin();it!=mDeleted.end();++it)
      {
        deletelist.push_back(*it);
        mSelected.erase(*it);//just in case the feature is still selected
      }
      if(!dataProvider->deleteFeatures(deletelist))
      {
        returnvalue=false;
      }
    }

    return returnvalue;
  }
  else
  {
    return false;
  }
}

bool QgsVectorLayer::rollBack()
{
  //Roll back changed features
  mChangedGeometries.clear();
  // Roll back added features
  // Delete the features themselves before deleting the references to them.
  for(std::vector<QgsFeature*>::iterator it=mAddedFeatures.begin();it!=mAddedFeatures.end();++it)
  {
    delete *it;
  }
  mAddedFeatures.clear();

  // Roll back deleted features
  mDeleted.clear();

  updateExtents();
  return true;
}

std::vector<QgsFeature>* QgsVectorLayer::selectedFeatures()
{
  if (!dataProvider)
  {
    return 0;
  }
  
  std::vector<QgsFeature>* features = new std::vector<QgsFeature>;
  if(mSelected.size() == 0)
    {
      return features;
    }

  //we need to cache all the features first (which has already been done if a layer is editable)
  if(!mEditable)
    {
      deleteCachedGeometries();
      cacheGeometries();
    }

  for (std::set<int>::iterator it  = mSelected.begin(); it != mSelected.end(); ++it)
  {
    // Check this selected item against the committed or cached features
    if ( mCachedGeometries.find(*it) != mCachedGeometries.end() )
    {
      QgsFeature* f = new QgsFeature();
      f->setGeometry(*mCachedGeometries[*it]);//makes a deep copy of the geometry
      features->push_back(*f);
      continue;
    }
    
    // Check this selected item against the uncommitted added features
    /*for (std::vector<QgsFeature*>::iterator iter  = mAddedFeatures.begin();
        iter != mAddedFeatures.end();
        ++iter)
    {
      if ( (*it) == (*iter)->featureId() )
      {
        features->push_back( **iter ); //shouldn't we make a deep copy here?
        break;
      }
      }*/

  } // for each selected

  return features;
}

bool QgsVectorLayer::addFeatures(std::vector<QgsFeature*>* features, bool makeSelected)
{
  if (dataProvider)
  {  
    if(!(dataProvider->capabilities() & QgsVectorDataProvider::AddFeatures))
    {
      QMessageBox::information(0, tr("Layer cannot be added to"), 
          tr("The data provider for this layer does not support the addition of features."));
      return false;
    }

    if(!isEditable())
    {
      QMessageBox::information(0, tr("Layer not editable"), 
          tr("The current layer is not editable. Choose 'Allow editing' in the legend item right click menu."));
      return false;
    }


    if (makeSelected)
    {
      mSelected.clear();
    }

    for (std::vector<QgsFeature*>::iterator iter  = features->begin();
        iter != features->end();
        ++iter)
    {
      // TODO: Tidy these next two lines up

      //      QgsFeature f = (*iter);
      //      addFeature(&f, FALSE);

      addFeature(*iter);

      if (makeSelected)
      {
        mSelected.insert((*iter)->featureId());
      }
    }

    updateExtents();
  }  
  return true;
}

QString QgsVectorLayer::layerTypeIconPath()
{
  QString myThemePath = QgsApplication::themePath();
  switch(vectorType())
    {
    case Point:
      return (myThemePath+"/mIconPointLayer.png");
      break;
    case Line:
      return (myThemePath+"/mIconLineLayer.png");
      break;
    case Polygon:
      return (myThemePath+"/mIconPolygonLayer.png");
    default:
      return (myThemePath+"/mIconLayer.png");
    }
}

void QgsVectorLayer::refreshLegend()
{
  if(mLegend && m_renderer)
    {
      std::list< std::pair<QString, QPixmap> > itemList;
      m_renderer->refreshLegend(&itemList);
      if(m_renderer->needsAttributes()) //create an item for each classification field (only one for most renderers)
	{
	  std::list<int> classfieldlist = m_renderer->classificationAttributes();
	  for(std::list<int>::iterator it = classfieldlist.begin(); it!=classfieldlist.end(); ++it)
	    {
	      const QgsField theField = (dataProvider->fields())[*it];
	      QString classfieldname = theField.name();
	      itemList.push_front(std::make_pair(classfieldname, QPixmap()));
	    }
	}
      mLegend->changeSymbologySettings(getLayerID(), &itemList);
    }
}

bool QgsVectorLayer::copySymbologySettings(const QgsMapLayer& other)
{
  const QgsVectorLayer* vl = dynamic_cast<const QgsVectorLayer*>(&other);

  if(this == vl)//exit if both vectorlayer are the same
  {
    return false;
  }

  if(!vl)
  {
    return false;
  }
  delete m_renderer;

  QgsRenderer* r = vl->m_renderer;
  if(r)
  {
    m_renderer = r->clone();
    return true;
  }
  else
  {
    return false;
  }
}

bool QgsVectorLayer::isSymbologyCompatible(const QgsMapLayer& other) const
{
  //vector layers are symbology compatible if they have the same type, the same sequence of numerical/ non numerical fields and the same field names


  const QgsVectorLayer* otherVectorLayer = dynamic_cast<const QgsVectorLayer*>(&other);
  if(otherVectorLayer)
  {

    if(otherVectorLayer->vectorType() != vectorType())
      {
	return false;
      }

    const std::vector<QgsField> fieldsThis = dataProvider->fields();
    const std::vector<QgsField> fieldsOther = otherVectorLayer ->dataProvider->fields();

    if(fieldsThis.size() != fieldsOther.size())
    {
      return false;
    }

    //fill two sets with the numerical types for both layers
    const std::list<QString> numAttThis = dataProvider->numericalTypes();
    std::set<QString> numericalThis; //the set of numerical types for this vector layer
    for(std::list<QString>::const_iterator it = numAttThis.begin(); it != numAttThis.end(); ++it)
    {
      numericalThis.insert(*it);
    }

    const std::list<QString> numAttOther = otherVectorLayer ->dataProvider->numericalTypes();
    std::set<QString> numericalOther; //the set of numerical types for the other vector layer
    for(std::list<QString>::const_iterator it = numAttOther.begin(); it != numAttOther.end(); ++it)
    {
      numericalOther.insert(*it);
    }

    std::set<QString>::const_iterator thisiter;
    std::set<QString>::const_iterator otheriter;
    int fieldsThisSize = fieldsThis.size();

    for(register int i = 0; i < fieldsThisSize; ++i)
    {
      if(fieldsThis[i].name() != fieldsOther[i].name())//field names need to be the same
      {
        return false;
      }
      thisiter = numericalThis.find(fieldsThis[i].name());
      otheriter = numericalOther.find(fieldsOther[i].name());
      if(thisiter == numericalThis.end())
      {
        if(otheriter != numericalOther.end())
        {
          return false;
        }
      }
      else
      {
        if(otheriter == numericalOther.end())
        {
          return false;
        }
      }
    }
    return true; //layers are symbology compatible if the code reaches this point
  }
  return false;
}

bool QgsVectorLayer::snapPoint(QgsPoint& point, double tolerance)
{
  if(tolerance<=0||!dataProvider)
  {
    return false;
  }
  double mindist=tolerance*tolerance;//current minimum distance
  double mindistx=point.x();
  double mindisty=point.y();
  QgsFeature* fet;
  QgsPoint vertexFeature;//the closest vertex of a feature
  QgsGeometryVertexIndex vindex;
  double minsquaredist;
  int rb1, rb2; //rubberband indexes (not used in this method)

  QgsRect selectrect(point.x()-tolerance,point.y()-tolerance,point.x()+tolerance,point.y()+tolerance);
  selectrect = inverseProjectRect(selectrect);
  dataProvider->reset();
  dataProvider->select(&selectrect);

  if(projectionsEnabled() && coordinateTransform())
    {
      //inverse tramsform point to layer SRS
      try
	{
	  point = coordinateTransform()->transform(point, QgsCoordinateTransform::INVERSE);
	}
      catch(QgsCsException &cse)
	{
	  return false;
	}
    }

  //go to through the features reported by the spatial filter of the provider
  while ((fet = dataProvider->getNextFeature(false)))
  {
    if(mChangedGeometries.find(fet->featureId()) != mChangedGeometries.end())//if geometry has been changed, use the new geometry
    {
      vertexFeature = mChangedGeometries[fet->featureId()].closestVertex(point, vindex, rb1, rb2, minsquaredist);
    }
    else
    {
      vertexFeature=fet->geometry()->closestVertex(point, vindex, rb1, rb2, minsquaredist);
    }
    if(minsquaredist<mindist)
    {
      mindistx=vertexFeature.x();
      mindisty=vertexFeature.y();
      mindist=minsquaredist;
    }
  }

  //also go through the not commited features
  for(std::vector<QgsFeature*>::iterator iter=mAddedFeatures.begin();iter!=mAddedFeatures.end();++iter)
  {
    if(mChangedGeometries.find((*iter)->featureId()) != mChangedGeometries.end())//use the changed geometry
    {
      vertexFeature = mChangedGeometries[(*iter)->featureId()].closestVertex(point, vindex, rb1, rb2, minsquaredist);
    }
    else
    {
      vertexFeature=(*iter)->geometry()->closestVertex(point, vindex, rb1, rb2, minsquaredist);
    }
    if(minsquaredist<mindist)
    {
      mindistx=vertexFeature.x();
      mindisty=vertexFeature.y();
      mindist=minsquaredist;
    }
  }

  //and also go through the changed geometries, because the spatial filter of the provider did not consider feature changes
  for(std::map<int, QgsGeometry>::const_iterator iter = mChangedGeometries.begin(); iter != mChangedGeometries.end(); ++iter)
  {
    vertexFeature = iter->second.closestVertex(point, vindex, rb1, rb2, minsquaredist);
    if(minsquaredist<mindist)
    {
      mindistx=vertexFeature.x();
      mindisty=vertexFeature.y();
      mindist=minsquaredist;
    }
  }

  point.setX(mindistx);
  point.setY(mindisty);

  if(projectionsEnabled())
    {
      //transform point to canvas SRC
      try
	{
	  point = coordinateTransform()->transform(point);
	}
      catch(QgsCsException &cse)
	{
	  return false;
	}
    }

  return true;
}


bool QgsVectorLayer::snapVertexWithContext(QgsPoint& point, QgsGeometryVertexIndex& atVertex, int& beforeVertexIndex, int& afterVertexIndex,\
int& snappedFeatureId, QgsGeometry& snappedGeometry, double tolerance)
{
  bool vertexFound = false; //flag to check if a meaningful result can be returned
  QgsGeometryVertexIndex atVertexTemp;
  int beforeVertexIndexTemp, afterVertexIndexTemp;

  QgsPoint origPoint = point;

  // Sanity checking
  if ( tolerance<=0 || !dataProvider)
  {
    return false;
  }

  QgsFeature* feature;
  QgsPoint minDistSegPoint;  // the closest point
  double testSqrDist;        // the squared distance between 'point' and 'snappedFeature'

  double minSqrDist  = tolerance*tolerance; //current minimum distance

  QgsRect selectrect(origPoint.x()-tolerance, origPoint.y()-tolerance, origPoint.x()+tolerance, origPoint.y()+tolerance);
  dataProvider->reset();
  dataProvider->select(&selectrect);

  if(projectionsEnabled() && coordinateTransform())
    {
      //inverse tramsform points to layer SRS
      try
	{
	  origPoint = coordinateTransform()->transform(point, QgsCoordinateTransform::INVERSE);
	}
      catch(QgsCsException &cse)
	{
	  return false;
	}
    }

  // Go through the committed features
  while ((feature = dataProvider->getNextFeature(false)))
  {
    if(mChangedGeometries.find(feature->featureId()) != mChangedGeometries.end())
    {
      // ignore for this loop, let the loop below over mChangedGeometries
      // detect the changed geometry instead
      continue;

      // // substitute the modified geometry for the committed version
      // feature->setGeometry(mChangedGeometries[feature->featureId()]);
    }

    minDistSegPoint = feature->geometry()->closestVertex(origPoint, atVertexTemp, beforeVertexIndexTemp, afterVertexIndexTemp, testSqrDist);
    if(testSqrDist < minSqrDist)
    {
      point = minDistSegPoint;
      minSqrDist = testSqrDist;

      atVertex          = atVertexTemp;
      beforeVertexIndex = beforeVertexIndexTemp;
      afterVertexIndex = afterVertexIndexTemp;
      snappedFeatureId  = feature->featureId();
      snappedGeometry   = *(feature->geometry());
      vertexFound = true;
    }
    delete feature;
  }

  // Also go through the new features
  for (std::vector<QgsFeature*>::iterator iter  = mAddedFeatures.begin(); iter != mAddedFeatures.end(); ++iter)
  {
    if(mChangedGeometries.find((*iter)->featureId()) != mChangedGeometries.end())
      {
        // ignore for this loop, let the loop below over mChangedGeometries
        // detect the changed geometry instead
        continue;
        // //use the modified geometry
        // minDistSegPoint = mChangedGeometries[(*iter)->featureId()].closestVertex(origPoint, atVertexTemp, beforeVertexIndexTemp, afterVertexIndexTemp, testSqrDist);
      }
    else
      {
	minDistSegPoint = (*iter)->geometry()->closestVertex(origPoint, atVertexTemp, beforeVertexIndexTemp, afterVertexIndexTemp, testSqrDist);
      }
    if(testSqrDist < minSqrDist)
    {
      point = minDistSegPoint;
      minSqrDist = testSqrDist;

      atVertex      = atVertexTemp;
      beforeVertexIndex = beforeVertexIndexTemp;
      afterVertexIndex = afterVertexIndexTemp;
      snappedFeatureId  =   (*iter)->featureId();
      snappedGeometry   = *((*iter)->geometry());
      vertexFound = true;
    }
  }

  //and also go through the changed geometries, because the spatial filter of the provider did not consider feature changes
  for(std::map<int, QgsGeometry>::iterator it = mChangedGeometries.begin(); it != mChangedGeometries.end(); ++it)
    {
      minDistSegPoint = it->second.closestVertex(origPoint, atVertexTemp, beforeVertexIndexTemp, afterVertexIndexTemp, testSqrDist);
      if(testSqrDist < minSqrDist)
	{
	  point = minDistSegPoint;
	  minSqrDist = testSqrDist;
	  atVertex      = atVertexTemp;
	  beforeVertexIndex = beforeVertexIndexTemp;
	  afterVertexIndex = afterVertexIndexTemp;
	  snappedFeatureId  = it->first;
	  snappedGeometry   = it->second;
	  vertexFound = true;
	}
    }

  if(!vertexFound)
    {
      beforeVertexIndex = -1;
      afterVertexIndex = -1;
      return false;
    }

   if(projectionsEnabled())
    {
      //transform point to canvas SRC
      try
	{
	  point = coordinateTransform()->transform(point);
	}
      catch(QgsCsException &cse)
	{
	  return false;
	}
    }
  return true;
}


bool QgsVectorLayer::snapSegmentWithContext(QgsPoint& point, QgsGeometryVertexIndex& beforeVertex, int& snappedFeatureId,\
QgsGeometry& snappedGeometry, double tolerance)
{
  bool segmentFound = false; //flag to check if a reasonable result can be returned
  QgsGeometryVertexIndex beforeVertexTemp;

  QgsPoint origPoint = point;

  // Sanity checking
  if ( tolerance<=0 || !dataProvider)
  {
    return false;
  }

  QgsFeature* feature;
  QgsPoint minDistSegPoint;  // the closest point on the segment
  double testSqrDist;        // the squared distance between 'point' and 'snappedFeature'
  double minSqrDist  = tolerance*tolerance; //current minimum distance

  QgsRect selectrect(point.x()-tolerance, point.y()-tolerance, point.x()+tolerance, point.y()+tolerance);
  dataProvider->reset();
  dataProvider->select(&selectrect);

  if(projectionsEnabled() && coordinateTransform())
    {
      //inverse tramsform points to layer SRS
      try
	{
	  origPoint = coordinateTransform()->transform(point, QgsCoordinateTransform::INVERSE);
	}
      catch(QgsCsException &cse)
	{
	  return false;
	}
    }

  // Go through the committed features
  while ((feature = dataProvider->getNextFeature(false)))
  {
    if (mChangedGeometries.find(feature->featureId()) != mChangedGeometries.end())
    {
      // ignore for this loop, let the loop below over mChangedGeometries
      // detect the changed geometry instead
      continue;

      // // substitute the modified geometry for the committed version
      // feature->setGeometry( mChangedGeometries[ feature->featureId() ] );
    }

    minDistSegPoint = feature->geometry()->closestSegmentWithContext(origPoint, beforeVertexTemp, testSqrDist);

    if (testSqrDist < minSqrDist)
    {
      point = minDistSegPoint;
      minSqrDist = testSqrDist;

      beforeVertex      = beforeVertexTemp;
      snappedFeatureId  = feature->featureId();
      snappedGeometry   = *(feature->geometry());
      segmentFound = true;
    }
    delete feature;
  }

  // Also go through the new features
  for (std::vector<QgsFeature*>::iterator iter  = mAddedFeatures.begin(); iter != mAddedFeatures.end(); ++iter)
  {
    if(mChangedGeometries.find((*iter)->featureId()) != mChangedGeometries.end())
      {
        // ignore for this loop, let the loop below over mChangedGeometries
        // detect the changed geometry instead
        continue;

        // //use the modified geometry
        // minDistSegPoint = mChangedGeometries[(*iter)->featureId()].closestSegmentWithContext(origPoint, beforeVertexTemp, testSqrDist);
      }
    else
      {
	minDistSegPoint = (*iter)->geometry()->closestSegmentWithContext(origPoint, beforeVertexTemp, testSqrDist);
      }

    if (testSqrDist < minSqrDist)
    {
      point = minDistSegPoint;
      minSqrDist = testSqrDist;

      beforeVertex      = beforeVertexTemp;
      snappedFeatureId  =   (*iter)->featureId();
      snappedGeometry   = *((*iter)->geometry());
      segmentFound = true;
    }
  }

  //and also go through the changed geometries, because the spatial filter of the provider did not consider feature changes
  for(std::map<int, QgsGeometry>::iterator it = mChangedGeometries.begin(); it != mChangedGeometries.end(); ++it)
    {
      minDistSegPoint = it->second.closestSegmentWithContext(origPoint, beforeVertexTemp, testSqrDist);
      if(testSqrDist < minSqrDist)
	{
	  point = minDistSegPoint;
	  minSqrDist = testSqrDist;
	  beforeVertex      = beforeVertexTemp;
	  snappedFeatureId  = it->first;
	  snappedGeometry   = it->second;
	  segmentFound = true;
	}
    }

  return segmentFound;
}


void QgsVectorLayer::drawFeature(QPainter* p, QgsFeature* fet, QgsMapToPixel * theMapToPixelTransform, 
    QPixmap * marker, double markerScaleFactor, bool projectionsEnabledFlag)
{
  // Only have variables, etc outside the switch() statement that are
  // used in all cases of the statement (otherwise they may get
  // executed, but never used, in a bit of code where performance is
  // critical).

#if defined(Q_WS_X11)
  bool needToTrim = false;
#endif

  unsigned char* feature = fet->getGeometry();

  unsigned int wkbType;
  memcpy(&wkbType, (feature+1), sizeof(wkbType));

#ifdef QGISDEBUG
  //std::cout <<"Entering drawFeature()" << std::endl;
#endif

  switch (wkbType)
  {
    case WKBPoint:
      {
        double x = *((double *) (feature + 5));
        double y = *((double *) (feature + 5 + sizeof(double)));

#ifdef QGISDEBUG 
        //  std::cout <<"...WKBPoint (" << x << ", " << y << ")" <<std::endl;
#endif

        transformPoint(x, y, theMapToPixelTransform, projectionsEnabledFlag);
        //QPointF pt(x - (marker->width()/2),  y - (marker->height()/2));
        QPointF pt(x/markerScaleFactor - (marker->width()/2),  y/markerScaleFactor - (marker->height()/2));

        p->save();
        p->scale(markerScaleFactor,markerScaleFactor);
        p->drawPixmap(pt, *marker);
        p->restore();

        break;
      }
    case WKBMultiPoint:
      {
        unsigned char *ptr = feature + 5;
        unsigned int nPoints = *((int*)ptr);
        ptr += 4;

        p->save();
        p->scale(markerScaleFactor, markerScaleFactor);

        for (register unsigned int i = 0; i < nPoints; ++i)
        {
          ptr += 5;
          double x = *((double *) ptr);
          ptr += sizeof(double);
          double y = *((double *) ptr);
          ptr += sizeof(double);

#ifdef QGISDEBUG 
          std::cout <<"...WKBMultiPoint (" << x << ", " << y << ")" <<std::endl;
#endif

          transformPoint(x, y, theMapToPixelTransform, projectionsEnabledFlag);
          //QPointF pt(x - (marker->width()/2),  y - (marker->height()/2));
          QPointF pt(x/markerScaleFactor - (marker->width()/2),  y/markerScaleFactor - (marker->height()/2));
          
#if defined(Q_WS_X11)
          // Work around a +/- 32768 limitation on coordinates in X11
          if (std::abs(x) > QgsClipper::maxX ||
              std::abs(y) > QgsClipper::maxY)
            needToTrim = true;
          else
#endif
          p->drawPixmap(pt, *marker);
        }
        p->restore();

        break;
      }
    case WKBLineString:
      {
        drawLineString(feature, p, theMapToPixelTransform,
            projectionsEnabledFlag);
        break;
      }
    case WKBMultiLineString:
      {
        unsigned char* ptr = feature + 5;
        unsigned int numLineStrings = *((int*)ptr);
        ptr = feature + 9;

        for (register unsigned int jdx = 0; jdx < numLineStrings; jdx++)
        {
          ptr = drawLineString(ptr, p, theMapToPixelTransform,
              projectionsEnabledFlag);
        }
        break;
      }
    case WKBPolygon:
      {
        drawPolygon(feature, p, theMapToPixelTransform,
            projectionsEnabledFlag);
        break;
      }
    case WKBMultiPolygon:
      {
        unsigned char *ptr = feature + 5;
        unsigned int numPolygons = *((int*)ptr);
        ptr = feature + 9;
        for (register unsigned int kdx = 0; kdx < numPolygons; kdx++)
          ptr = drawPolygon(ptr, p, theMapToPixelTransform, 
              projectionsEnabledFlag);
        break;
      }
    default:
#ifdef QGISDEBUG
      std::cout << "UNKNOWN WKBTYPE ENCOUNTERED\n";
#endif
      break;
  }
}



void QgsVectorLayer::saveAsShapefile()
{
  // call the dataproviders saveAsShapefile method
  dataProvider->saveAsShapefile();
  //  QMessageBox::information(0,"Save As Shapefile", "Someday...");
}

void QgsVectorLayer::setCoordinateSystem()
{
  delete mCoordinateTransform;
  mCoordinateTransform=new QgsCoordinateTransform();
  //slot is defined inthe maplayer superclass
  connect(mCoordinateTransform, SIGNAL(invalidTransformInput()), this, SLOT(invalidTransformInput()));

  QgsDebugMsg("QgsVectorLayer::setCoordinateSystem ------------------------------------------------start");
  QgsDebugMsg("QgsVectorLayer::setCoordinateSystem ----- Computing Coordinate System");
  //
  // Get the layers project info and set up the QgsCoordinateTransform 
  // for this layer
  //
  int srid = getProjectionSrid();

  if(srid == 0)
  {
    QString mySourceWKT(getProjectionWKT());
    if (mySourceWKT.isNull())
    {
      mySourceWKT=QString("");
    }
    QgsDebugMsg("QgsVectorLayer::setCoordinateSystem --- using wkt " + mySourceWKT);
    mCoordinateTransform->sourceSRS().createFromWkt(mySourceWKT);
    //mCoordinateTransform->sourceSRS()->createFromWkt(getProjectionWKT());
  }
  else
  {
    QgsDebugMsg("QgsVectorLayer::setCoordinateSystem --- using srid " + QString::number(srid));
    mCoordinateTransform->sourceSRS().createFromSrid(srid);
  }

  //QgsSpatialRefSys provides a mechanism for FORCE a srs to be valid
  //which is inolves falling back to system, project or user selected
  //defaults if the srs is not properly intialised.
  //we only nee to do that if the srs is not alreay valid
  if (!mCoordinateTransform->sourceSRS().isValid())
  {
    mCoordinateTransform->sourceSRS().validate();
  }
  //get the project projections WKT, defaulting to this layer's projection
  //if none exists....
  //First get the SRS for the default projection WGS 84
  //QString defaultWkt = QgsSpatialReferences::instance()->getSrsBySrid("4326")->srText();

  // if no other layers exist, set the output projection to be
  // the same as the input projection, otherwise set the output to the
  // project srs

  QgsDebugMsg("Layer registry has " + QString::number(QgsMapLayerRegistry::instance()->count()) + " layers ");
  if (QgsMapLayerRegistry::instance()->count() ==0)
  {
    mCoordinateTransform->destSRS().createFromProj4(
        mCoordinateTransform->sourceSRS().proj4String());
    //first layer added will set the default project level projection
    //TODO remove cast if poss!
    int mySrsId = static_cast<int>(mCoordinateTransform->sourceSRS().srsid());
    if (mySrsId)
    {
      QgsProject::instance()->writeEntry("SpatialRefSys","/ProjectSRSID",mySrsId);
    }
  }
  else 
  {
    mCoordinateTransform->destSRS().createFromSrsId(
        QgsProject::instance()->readNumEntry("SpatialRefSys","/ProjectSRSID",0));
  }
  if (!mCoordinateTransform->destSRS().isValid())
  {
    mCoordinateTransform->destSRS().validate();  
  }


  //initialise the transform - you should do this any time one of the SRS's changes

  mCoordinateTransform->initialise();



}

bool QgsVectorLayer::commitAttributeChanges(const std::set<QString>& deleted,
    const std::map<QString,QString>& added,
    std::map<int,std::map<QString,QString> >& changed)
{
  bool returnvalue=true;

  if(dataProvider)
  {
    if(dataProvider->capabilities()&QgsVectorDataProvider::DeleteAttributes)
    {
      //delete attributes in all not commited features
      for(std::vector<QgsFeature*>::iterator iter=mAddedFeatures.begin();iter!=mAddedFeatures.end();++iter)
      {
        for(std::set<QString>::const_iterator it=deleted.begin();it!=deleted.end();++it)
        {
          (*iter)->deleteAttribute(*it);
        }
      }
      //and then in the provider
      if(!dataProvider->deleteAttributes(deleted))
      {
        returnvalue=false;
      }
    }

    if(dataProvider->capabilities()&QgsVectorDataProvider::AddAttributes)
    {
      //add attributes in all not commited features
      for(std::vector<QgsFeature*>::iterator iter=mAddedFeatures.begin();iter!=mAddedFeatures.end();++iter)
      {
        for(std::map<QString,QString>::const_iterator it=added.begin();it!=added.end();++it)
        {
          (*iter)->addAttribute(it->first);
        }
      }
      //and then in the provider
      if(!dataProvider->addAttributes(added))
      {
        returnvalue=false;
      }
    }

    if(dataProvider->capabilities()&QgsVectorDataProvider::ChangeAttributeValues)
    {
      //change values of the not commited features
      for(std::vector<QgsFeature*>::iterator iter=mAddedFeatures.begin();iter!=mAddedFeatures.end();++iter)
      {
        std::map<int,std::map<QString,QString> >::iterator it=changed.find((*iter)->featureId());
        if(it!=changed.end())
        {
          for(std::map<QString,QString>::const_iterator iterat=it->second.begin();iterat!=it->second.end();++iterat)
          {
            (*iter)->changeAttributeValue(iterat->first,iterat->second);
          }
          changed.erase(it);
        }
      }

      //and then those of the commited ones
      if(!dataProvider->changeAttributeValues(changed))
      {
        returnvalue=false;
      }
    }
  }
  else
  {
    returnvalue=false;
  }
  return returnvalue;
}

// Convenience function to transform the given point
inline void QgsVectorLayer::transformPoint(double& x, 
    double& y, 
    QgsMapToPixel* mtp,
    bool projectionsEnabledFlag)
{
  // transform the point
  if (projectionsEnabledFlag)
  {
    double z = 0;
    mCoordinateTransform->transformInPlace(x, y, z);
  }

  // transform from projected coordinate system to pixel 
  // position on map canvas
  mtp->transformInPlace(x, y);
}

inline void QgsVectorLayer::transformPoints(
    std::vector<double>& x, std::vector<double>& y, std::vector<double>& z,
    QgsMapToPixel* mtp, bool projectionsEnabledFlag)
{
  // transform the point
  if (projectionsEnabledFlag)
    mCoordinateTransform->transformInPlace(x, y, z);

  // transform from projected coordinate system to pixel 
  // position on map canvas
  mtp->transformInPlace(x, y);
}

unsigned int QgsVectorLayer::getTransparency()
{
  return transparencyLevelInt;
}

//should be between 0 and 255
void QgsVectorLayer::setTransparency(unsigned int theInt)
{
  transparencyLevelInt=theInt;
} //  QgsRasterLayer::setTransparency(unsigned int theInt)

