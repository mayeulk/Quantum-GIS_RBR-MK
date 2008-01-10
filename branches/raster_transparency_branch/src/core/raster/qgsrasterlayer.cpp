/* **************************************************************************
					   qgsrasterlayer.cpp -  description
   -------------------
begin                : Sat Jun 22 2002
copyright            : (C) 2003 by Tim Sutton, Steve Halasz and Gary E.Sherman
email                : tim at linfiniti.com
 ***************************************************************************/

/* **************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/
/* $Id$ */


#include "qgsapplication.h"
#include "qgslogger.h"
#include "qgsmaplayerregistry.h"
#include "qgsmaptopixel.h"
#include "qgsproviderregistry.h"
#include "qgsrasterbandstats.h"
#include "qgsrasterlayer.h"
#include "qgsrasterpyramid.h"
#include "qgsrasterviewport.h"
#include "qgsrect.h"
#include "qgsspatialrefsys.h"
#include "gdalwarper.h"

#include "qgspseudocolorshader.h"
#include "qgsfreakoutshader.h"
#include "qgscolorrampshader.h"

#include <cstdio>
#include <cmath>
#include <limits>
#include <iostream>

#include <QApplication>
#include <QCursor>
#include <QDomElement>
#include <QDomNode>
#include <QFile>
#include <QFileInfo>
#include <QFont>
#include <QFontMetrics>
#include <QFrame>
#include <QImage>
#include <QLabel>
#include <QList>
#include <QMatrix>
#include <QMessageBox>
#include <QLibrary>
#include <QPainter>
#include <QPixmap>
#include <QRegExp>
#include <QSlider>

// workaround for MSVC compiler which already has defined macro max
// that interferes with calling std::numeric_limits<int>::max
#ifdef _MSC_VER
# ifdef max
#  undef max
# endif
#endif

//////////////////////////////////////////////////////////
//
// Static Methods and members first....
//
/////////////////////////////////////////////////////////
/**
  Static member variable storing the subset of GDAL formats
  that we currently support.

  @note

  Some day this won't be necessary as there'll be a time when
  theoretically we'll support everything that GDAL can throw at us.

  These are GDAL driver description strings.
  */
static const char *const mSupportedRasterFormats[] =
{
  "AAIGrid",
  "AIG",
  "DTED",
  "ECW",
  "GRASS",
  "GTiff",
  "HFA",
  "JP2ECW",
  "JP2KAK",
  "JP2MrSID",
  "JPEG2000",
  "MrSID",
  "SDTS",
  "USGSDEM",
  ""   // used to indicate end of list
};



/**
  Builds the list of file filter strings to later be used by
  QgisApp::addRasterLayer()

  We query GDAL for a list of supported raster formats; we then build
  a list of file filter strings from that list.  We return a string
  that contains this list that is suitable for use in a a
  QFileDialog::getOpenFileNames() call.

*/
void QgsRasterLayer::buildSupportedRasterFileFilter(QString & theFileFiltersString)
{
  // first get the GDAL driver manager
  registerGdalDrivers();

  GDALDriverManager *myGdalDriverManager = GetGDALDriverManager();

  if (!myGdalDriverManager)
  {
    QgsLogger::warning("unable to get GDALDriverManager");
    return;                   // XXX good place to throw exception if we
  }                           // XXX decide to do exceptions

  // then iterate through all of the supported drivers, adding the
  // corresponding file filter

  GDALDriver *myGdalDriver;           // current driver

  char **myGdalDriverMetadata;        // driver metadata strings

  QString myGdalDriverLongName("");   // long name for the given driver
  QString myGdalDriverExtension("");  // file name extension for given driver
  QString myGdalDriverDescription;    // QString wrapper of GDAL driver description

  QStringList metadataTokens;   // essentially the metadata string delimited by '='

  QStringList catchallFilter;   // for Any file(*.*), but also for those
  // drivers with no specific file filter

  GDALDriver *jp2Driver = NULL; // first JPEG2000 driver found

  // Grind through all the drivers and their respective metadata.
  // We'll add a file filter for those drivers that have a file
  // extension defined for them; the others, welll, even though
  // theoreticaly we can open those files because there exists a
  // driver for them, the user will have to use the "All Files" to
  // open datasets with no explicitly defined file name extension.
  // Note that file name extension strings are of the form
  // "DMD_EXTENSION=.*".  We'll also store the long name of the
  // driver, which will be found in DMD_LONGNAME, which will have the
  // same form.

  for (int i = 0; i < myGdalDriverManager->GetDriverCount(); ++i)
  {
    myGdalDriver = myGdalDriverManager->GetDriver(i);

    Q_CHECK_PTR(myGdalDriver);

    if (!myGdalDriver)
    {
      QgsLogger::warning("unable to get driver " + QString::number(i));
      continue;
    }
    // now we need to see if the driver is for something currently
    // supported; if not, we give it a miss for the next driver

    myGdalDriverDescription = myGdalDriver->GetDescription();

    if (!isSupportedRasterDriver(myGdalDriverDescription))
    {
      // not supported, therefore skip
      QgsDebugMsg("skipping unsupported driver " + QString(myGdalDriver->GetDescription()));
      continue;
    }
    // std::cerr << "got driver string " << myGdalDriver->GetDescription() << "\n";

    myGdalDriverMetadata = myGdalDriver->GetMetadata();

    // presumably we know we've run out of metadta if either the
    // address is 0, or the first character is null
    while (myGdalDriverMetadata && '\0' != myGdalDriverMetadata[0])
    {
      metadataTokens = QStringList::split("=", *myGdalDriverMetadata);
      // std::cerr << "\t" << *myGdalDriverMetadata << "\n";

      // XXX add check for malformed metadataTokens

      // Note that it's oddly possible for there to be a
      // DMD_EXTENSION with no corresponding defined extension
      // string; so we check that there're more than two tokens.

      if (metadataTokens.count() > 1)
      {
        if ("DMD_EXTENSION" == metadataTokens[0])
        {
          myGdalDriverExtension = metadataTokens[1];

        }
        else if ("DMD_LONGNAME" == metadataTokens[0])
        {
          myGdalDriverLongName = metadataTokens[1];

          // remove any superfluous (.*) strings at the end as
          // they'll confuse QFileDialog::getOpenFileNames()

          myGdalDriverLongName.remove(QRegExp("\\(.*\\)$"));
        }
      }
      // if we have both the file name extension and the long name,
      // then we've all the information we need for the current
      // driver; therefore emit a file filter string and move to
      // the next driver
      if (!(myGdalDriverExtension.isEmpty() || myGdalDriverLongName.isEmpty()))
      {
        // XXX add check for SDTS; in that case we want (*CATD.DDF)
        QString glob = "*." + myGdalDriverExtension;
        // Add only the first JP2 driver found to the filter list (it's the one GDAL uses)
        if (myGdalDriverDescription == "JPEG2000" ||
            myGdalDriverDescription.startsWith("JP2"))	// JP2ECW, JP2KAK, JP2MrSID
        {
          if (!jp2Driver)
          {
            jp2Driver = myGdalDriver;   // first JP2 driver found
            glob += " *.j2k";           // add alternate extension
          }
          else break;               // skip if already found a JP2 driver
        }
        theFileFiltersString += myGdalDriverLongName + " (" + glob.lower() + " " + glob.upper() + ");;";

        break;            // ... to next driver, if any.
      }

      ++myGdalDriverMetadata;

    }                       // each metadata item

    if (myGdalDriverExtension.isEmpty() && !myGdalDriverLongName.isEmpty())
    {
      // Then what we have here is a driver with no corresponding
      // file extension; e.g., GRASS.  In which case we append the
      // string to the "catch-all" which will match all file types.
      // (I.e., "*.*") We use the driver description intead of the
      // long time to prevent the catch-all line from getting too
      // large.

      // ... OTOH, there are some drivers with missing
      // DMD_EXTENSION; so let's check for them here and handle
      // them appropriately

      // USGS DEMs use "*.dem"
      if (myGdalDriverDescription.startsWith("USGSDEM"))
      {
        QString glob = "*.dem";
        theFileFiltersString += myGdalDriverLongName + " (" + glob.lower() + " " + glob.upper() + ");;";
      }
      else if (myGdalDriverDescription.startsWith("DTED"))
      {
        // DTED use "*.dt0"
        QString glob = "*.dt0";
        theFileFiltersString += myGdalDriverLongName + " (" + glob.lower() + " " + glob.upper() + ");;";
      }
      else if (myGdalDriverDescription.startsWith("MrSID"))
      {
        // MrSID use "*.sid"
        QString glob = "*.sid";
        theFileFiltersString += myGdalDriverLongName + " (" + glob.lower() + " " + glob.upper() + ");;";
      }
      else
      {
        catchallFilter << QString(myGdalDriver->GetDescription());
      }
    }

    myGdalDriverExtension = myGdalDriverLongName = "";  // reset for next driver

  }                           // each loaded GDAL driver

  // can't forget the default case
  theFileFiltersString += catchallFilter.join(", ") + " " + tr("and all other files") + " (*)";
  QgsDebugMsg("Raster filter list built: " + theFileFiltersString);
}                               // buildSupportedRasterFileFilter_()

/**
 ensures that GDAL drivers are registered, but only once.
*/

void QgsRasterLayer::registerGdalDrivers()
{
    if( GDALGetDriverCount() == 0 )
        GDALAllRegister();
}

/**
  returns true if the given raster driver name is one currently
  supported, otherwise it returns false

  @param theDriverName GDAL driver description string
  */
bool QgsRasterLayer::isSupportedRasterDriver(QString const &theDriverName)
{
  size_t i = 0;

  while (mSupportedRasterFormats[i][0]) // while not end of string list
  {
    // If we've got a case-insensitive match for a GDAL aware driver
    // description, then we've got a match.  Why case-insensitive?
    // I'm just being paranoid in that I can envision a situation
    // whereby GDAL slightly changes driver description string case,
    // in which case we'd catch it here.  Not that that would likely
    // happen, but if it does, we'll already compensate.
    // GS - At Qt 3.1.2, the case sensitive argument. So we change the
    // driverName to lower case before testing
    QString format = mSupportedRasterFormats[i];
    if (theDriverName.lower().startsWith(format.lower()))
    {
      return true;
    }

    i++;
  }

  return false;
}   // isSupportedRasterDriver



/** This helper checks to see whether the filename appears to be a valid raster file name */
bool QgsRasterLayer::isValidRasterFileName(QString const & theFileNameQString)
{

  GDALDatasetH myDataset;
  registerGdalDrivers();

  //open the file using gdal making sure we have handled locale properly
  myDataset = GDALOpen( QFile::encodeName(theFileNameQString).constData(), GA_ReadOnly );
  if( myDataset == NULL )
  {
    return false;
  }
  else
  {
    GDALClose(myDataset);
    return true;
  }

  /*
   * This way is no longer a good idea because it does not
   * cater for filetypes such as grass rasters that dont
   * have a predictable file extension.
   *
   QString name = theFileNameQString.lower();
   return (name.endsWith(".adf") ||
   name.endsWith(".asc") ||
   name.endsWith(".grd") ||
   name.endsWith(".img") ||
   name.endsWith(".tif") ||
   name.endsWith(".png") ||
   name.endsWith(".jpg") ||
   name.endsWith(".dem") ||
   name.endsWith(".ddf")) ||
   name.endsWith(".dt0");

*/
}





//////////////////////////////////////////////////////////
//
// Non Static methods now....
//
/////////////////////////////////////////////////////////
QgsRasterLayer::QgsRasterLayer(QString const & path, QString const & baseName)
  : QgsMapLayer(RASTER, baseName, path),
  // XXX where is this? popMenu(0), //popMenu is the contextmenu obtained by right clicking on the legend
  mRasterXDim( std::numeric_limits<int>::max() ),
  mRasterYDim( std::numeric_limits<int>::max() ),
  mDebugOverlayFlag(false),
  mInvertPixelsFlag(false),
  mStandardDeviations(0),
  mDataProvider(0)
{
  mUserDefinedRGBMinMaxFlag = false; //defaults needed to bypass stretch
  mUserDefinedGrayMinMaxFlag = false;
  setContrastEnhancementAlgorithm(QgsContrastEnhancement::NO_STRETCH); //defaults needed to bypass stretch

  mRasterShader = new QgsRasterShader();

  // Initialise the affine transform matrix
  mGeoTransform[0] =  0;
  mGeoTransform[1] =  1;
  mGeoTransform[2] =  0;
  mGeoTransform[3] =  0;
  mGeoTransform[4] =  0;
  mGeoTransform[5] = -1;

  // set the layer name (uppercase first character)

  if ( ! baseName.isEmpty() )   // XXX shouldn't this happen in parent?
  {
    setLayerName(baseName);
  }

  // load the file if one specified
  if ( ! path.isEmpty() )
  {
    readFile( path ); // XXX check for failure?
  }

} // QgsRasterLayer ctor


QgsRasterLayer::~QgsRasterLayer()
{

  if (mProviderKey.isEmpty())
  {
    mGdalBaseDataset->Dereference();
    GDALClose(mGdalDataset);
  }  
}



bool QgsRasterLayer::readFile( QString const & fileName )
{
  registerGdalDrivers();

  mGdalDataset = NULL;

  //open the dataset making sure we handle char encoding of locale properly
  mGdalBaseDataset = (GDALDataset *) GDALOpen(QFile::encodeName(fileName).constData(), GA_ReadOnly);

  if (mGdalBaseDataset == NULL)
  {
    mValid = FALSE;
    return false;
  }

  // Store timestamp
  mLastModified = lastModified ( fileName );

  // Check if we need a warped VRT for this file. 
  if( (mGdalBaseDataset->GetGeoTransform(mGeoTransform) == CE_None
       && (mGeoTransform[1] < 0.0
           || mGeoTransform[2] != 0.0
           || mGeoTransform[4] != 0.0
           || mGeoTransform[5] > 0.0))
       || mGdalBaseDataset->GetGCPCount() > 0 )
  {
      QgsLogger::warning("Creating Warped VRT.");

      mGdalDataset = (GDALDataset *) 
          GDALAutoCreateWarpedVRT( mGdalBaseDataset, NULL, NULL, 
                                   GRA_NearestNeighbour, 0.2, NULL );
  }
  else
  {
      mGdalDataset = mGdalBaseDataset;
      mGdalDataset->Reference();
  }

  //check f this file has pyramids
  GDALRasterBandH myGDALBand = GDALGetRasterBand( mGdalDataset, 1 ); //just use the first band
  if( GDALGetOverviewCount(myGDALBand) > 0 )
  {
    hasPyramidsFlag=true;
  }
  else
  {
    hasPyramidsFlag=false;
  }

  //populate the list of what pyramids exist
  buildRasterPyramidList();

  // Get the layer's projection info and set up the
  // QgsCoordinateTransform for this layer
  // NOTE: we must do this before getMetadata is called

  QgsDebugMsg("Raster initial SRS");
  mSRS->debugPrint();

  QString mySourceWKT = getProjectionWKT();

  QgsDebugMsg("--------------------------------------------------------------------------------------");
  QgsDebugMsg("QgsRasterLayer::readFile --- using wkt\n" + mySourceWKT);
  QgsDebugMsg("--------------------------------------------------------------------------------------");

  mSRS->createFromWkt(mySourceWKT);
  //get the project projection, defaulting to this layer's projection
  //if none exists....
  if (!mSRS->isValid())
  {
    mSRS->validate();
  }
  QgsDebugMsg("Raster determined to have the following SRS");
  mSRS->debugPrint();

  //set up the coordinat transform - in the case of raster this is mainly used to convert
  //the inverese projection of the map extents of the canvas when zzooming in etc. so
  //that they match the coordinate system of this layer
  QgsDebugMsg("Layer registry has " + QString::number(QgsMapLayerRegistry::instance()->count()) + "layers");

  getMetadata();

  // Use the affine transform to get geo coordinates for
  // the corners of the raster
  double myXMax = mGeoTransform[0] +
    mGdalDataset->GetRasterXSize() * mGeoTransform[1] +
    mGdalDataset->GetRasterYSize() * mGeoTransform[2];
  double myYMin = mGeoTransform[3] +
    mGdalDataset->GetRasterXSize() * mGeoTransform[4] +
    mGdalDataset->GetRasterYSize() * mGeoTransform[5];

  mLayerExtent.setXmax(myXMax);
  // The affine transform reduces to these values at the
  // top-left corner of the raster
  mLayerExtent.setXmin(mGeoTransform[0]);
  mLayerExtent.setYmax(mGeoTransform[3]);
  mLayerExtent.setYmin(myYMin);

  //
  // Set up the x and y dimensions of this raster layer
  //
  mRasterXDim = mGdalDataset->GetRasterXSize();
  mRasterYDim = mGdalDataset->GetRasterYSize();

  //
  // Determin the nodatavalue
  //
  mNoDataValue = -9999; //Standard default?
  mValidNoDataValue = false;
  int isValid = false;
  double myNoDataValue = mGdalDataset->GetRasterBand(1)->GetNoDataValue(&isValid);
  if(isValid)
  {
    mNoDataValue = myNoDataValue;
    mValidNoDataValue = true;
  }
  
  if(mValidNoDataValue)
  {
    mRasterTransparency.initializeTransparentPixelList(mNoDataValue, mNoDataValue, mNoDataValue);
    mRasterTransparency.initializeTransparentPixelList(mNoDataValue);
  }

  //initialise the raster band stats and contrast enhancement vector
  for (int i = 1; i <= mGdalDataset->GetRasterCount(); i++)
  {
    GDALRasterBand *myGdalBand = mGdalDataset->GetRasterBand(i);
    QString myColorQString = GDALGetColorInterpretationName(myGdalBand->GetColorInterpretation());
    QgsRasterBandStats myRasterBandStats;
    //myRasterBandStats.bandName = myColorQString ;
    myRasterBandStats.bandName=QString::number(i) + " : " + myColorQString;
    myRasterBandStats.bandNo = i;
    myRasterBandStats.statsGatheredFlag = false;
    myRasterBandStats.histogramVector = new QgsRasterBandStats::HistogramVector();
    // Read color table
    readColorTable ( myGdalBand, &(myRasterBandStats.colorTable) );

    mRasterStatsList.push_back(myRasterBandStats);
    
    //Build a new contrast enhancement for the band and store in list
    QgsContrastEnhancement myContrastEnhancement((QgsContrastEnhancement::QgsRasterDataType)myGdalBand->GetRasterDataType());
    mContrastEnhancementList.append(myContrastEnhancement);
  }
  
  //decide what type of layer this is...
  //note that multiband images can have one or more 'undefindd' bands,
  //so we must do this check first!
  if ((mGdalDataset->GetRasterCount() > 1))
  {
    rasterLayerType = MULTIBAND;
  }
  else if (hasBand("Palette")) //dont tr() this its a gdal word!
  {
    rasterLayerType = PALETTE;
  }
  else
  {
    rasterLayerType = GRAY_OR_UNDEFINED;
  }

  if (rasterLayerType == PALETTE)
  {
    mRedBandName = "Red"; // sensible default
    mGreenBandName = "Green"; // sensible default
    mBlueBandName = "Blue";// sensible default
    mTransparencyBandName = tr("Not Set"); // sensible default
    mGrayBandName = tr("Not Set");  //sensible default
    drawingStyle = PALETTED_MULTI_BAND_COLOR; //sensible default
  }
  else if (rasterLayerType == MULTIBAND)
  {
    //we know we have at least 2 layers...
    mRedBandName = getRasterBandName(1);  // sensible default
    mGreenBandName = getRasterBandName(2);  // sensible default
    //for the third layer we cant be sure so..
    if (mGdalDataset->GetRasterCount() > 2)
    {
      mBlueBandName = getRasterBandName(3); // sensible default
    }
    else
    {
      mBlueBandName = tr("Not Set");  // sensible default
    }

    //Beacuse the transparent band can be set from a different layer defaulting to the fourth
    //is not a sensible default P.Ersts 2007-05-14
    /*
    if (mGdalDataset->GetRasterCount() > 3)
      mTransparencyBandName = getRasterBandName(4);
    else
    */
    mTransparencyBandName = tr("Not Set");

    mGrayBandName = tr("Not Set");  //sensible default
    drawingStyle = MULTI_BAND_COLOR;  //sensible default
  }
  else                        //GRAY_OR_UNDEFINED
  {
    getRasterBandStats(1);
    mRedBandName = tr("Not Set"); //sensible default
    mGreenBandName = tr("Not Set"); //sensible default
    mBlueBandName = tr("Not Set");  //sensible default
    mTransparencyBandName = tr("Not Set");  //sensible default
    drawingStyle = SINGLE_BAND_GRAY;  //sensible default
    mGrayBandName = getRasterBandName(1); // usually gdal will return gray or undefined  
  }

  //mark the layer as valid
  mValid=TRUE;
  return true;

} // QgsRasterLayer::readFile

QString QgsRasterLayer::getProjectionWKT() 
{ 
  QString myWKTString;
  QgsSpatialRefSys mySRS;   
  myWKTString=QString (mGdalDataset->GetProjectionRef());
  mySRS.createFromWkt(myWKTString);
  if (!mySRS.isValid())
  {
    //try to get the gcp srs from the raster layer if available
    myWKTString=QString(mGdalDataset->GetGCPProjection());

// What is the purpose of this piece of code?
// Sideeffects from validate()?
//    mySRS.createFromWkt(myWKTString);
//    if (!mySRS.isValid())
//    {
//      // use force and make SRS valid!
//      mySRS.validate();
//    }

  }

  return myWKTString;
}

void QgsRasterLayer::closeDataset()
{
  if ( !mValid  ) return;
  mValid = FALSE;

  mGdalBaseDataset->Dereference();
  mGdalBaseDataset = NULL;

  GDALClose(mGdalDataset);
  mGdalDataset = NULL;

  hasPyramidsFlag=false;
  mPyramidList.clear();

  mRasterStatsList.clear();
}

bool QgsRasterLayer::update()
{
  QgsDebugMsg("QgsRasterLayer::update");

  if ( mLastModified < QgsRasterLayer::lastModified ( source() ) )
  {
    QgsDebugMsg("Outdated -> reload");
    closeDataset();
    return readFile ( source() );
  }
  return true;
}

QDateTime QgsRasterLayer::lastModified ( QString const & name )
{
  QgsDebugMsg("QgsRasterLayer::lastModified: " + name);
  QDateTime t;

  QFileInfo fi ( name );

  // Is it file?
  if ( !fi.exists() ) return t;

  t = fi.lastModified();

  // Check also color table for GRASS
  if ( name.contains( "cellhd" ) > 0 )
  { // most probably GRASS
    QString dir = fi.dirPath();
    QString map = fi.fileName();
    fi.setFile ( dir + "/../colr/" + map );

    if ( fi.exists() )
    {
      if ( fi.lastModified() > t ) t = fi.lastModified();
    }
  }

  // Check GRASS group members (bands)
  if ( name.contains( "group" ) > 0 )
  { // probably GRASS group
    fi.setFile ( name + "/REF" );

    if ( fi.exists() )
    {  // most probably GRASS group
      QFile f ( name + "/REF" );
      if ( f.open ( QIODevice::ReadOnly ) )
      {
        QString dir = fi.dirPath() + "/../../../";

        char buf[101];
        while ( f.readLine(buf,100) != -1 )
        {
          QString ln = QString(buf);
          QStringList sl = QStringList::split ( ' ', ln.stripWhiteSpace() );
          QString map = sl.first();
          sl.pop_front();
          QString mapset = sl.first();

          // header
          fi.setFile ( dir + mapset + "/cellhd/" +  map );
          if ( fi.exists() )
          {
            if ( fi.lastModified() > t ) t = fi.lastModified();
          }

          // color
          fi.setFile ( dir + mapset + "/colr/" +  map );
          if ( fi.exists() )
          {
            if ( fi.lastModified() > t ) t = fi.lastModified();
          }
        }
      }
    }
  }

  QgsDebugMsg("last modified = " + t.toString());

  return t;
}


// emit a signal asking for a repaint
void QgsRasterLayer::triggerRepaint()
{
  emit repaintRequested();
}


QString QgsRasterLayer::getDrawingStyleAsQString()
{
  switch (drawingStyle)
  {
    case SINGLE_BAND_GRAY:
      return QString("SINGLE_BAND_GRAY"); //no need to tr() this its not shown in ui
      break;
    case SINGLE_BAND_PSEUDO_COLOR:
      return QString("SINGLE_BAND_PSEUDO_COLOR");//no need to tr() this its not shown in ui
      break;
    case PALETTED_SINGLE_BAND_GRAY:
      return QString("PALETTED_SINGLE_BAND_GRAY");//no need to tr() this its not shown in ui
      break;
    case PALETTED_SINGLE_BAND_PSEUDO_COLOR:
      return QString("PALETTED_SINGLE_BAND_PSEUDO_COLOR");//no need to tr() this its not shown in ui
      break;
    case PALETTED_MULTI_BAND_COLOR:
      return QString("PALETTED_MULTI_BAND_COLOR");//no need to tr() this its not shown in ui
      break;
    case MULTI_BAND_SINGLE_BAND_GRAY:
      return QString("MULTI_BAND_SINGLE_BAND_GRAY");//no need to tr() this its not shown in ui
      break;
    case MULTI_BAND_SINGLE_BAND_PSEUDO_COLOR:
      return QString("MULTI_BAND_SINGLE_BAND_PSEUDO_COLOR");//no need to tr() this its not shown in ui
      break;
    case MULTI_BAND_COLOR:
      return QString("MULTI_BAND_COLOR");//no need to tr() this its not shown in ui
      break;
    default:
      break;
  }

  return QString("INVALID_DRAWING_STYLE"); // XXX I hope this is ok to return

}

void QgsRasterLayer::setDrawingStyle(QString const & theDrawingStyleQString)
{
  if (theDrawingStyleQString == "SINGLE_BAND_GRAY")//no need to tr() this its not shown in ui
  {
    drawingStyle = SINGLE_BAND_GRAY;
    return;
  }
  if (theDrawingStyleQString == "SINGLE_BAND_PSEUDO_COLOR")//no need to tr() this its not shown in ui
  {
    drawingStyle = SINGLE_BAND_PSEUDO_COLOR;
    return;
  }
  if (theDrawingStyleQString == "PALETTED_SINGLE_BAND_GRAY")//no need to tr() this its not shown in ui
  {
    drawingStyle = PALETTED_SINGLE_BAND_GRAY;
    return;
  }
  if (theDrawingStyleQString == "PALETTED_SINGLE_BAND_PSEUDO_COLOR")//no need to tr() this its not shown in ui
  {
    drawingStyle = PALETTED_SINGLE_BAND_PSEUDO_COLOR;
    return;
  }
  if (theDrawingStyleQString == "PALETTED_MULTI_BAND_COLOR")//no need to tr() this its not shown in ui
  {
    drawingStyle = PALETTED_MULTI_BAND_COLOR;
    return;
  }
  if (theDrawingStyleQString == "MULTI_BAND_SINGLE_BAND_GRAY")//no need to tr() this its not shown in ui
  {
    drawingStyle = MULTI_BAND_SINGLE_BAND_GRAY;
    return;
  }
  if (theDrawingStyleQString == "MULTI_BAND_SINGLE_BAND_PSEUDO_COLOR")//no need to tr() this its not shown in ui
  {
    drawingStyle = MULTI_BAND_SINGLE_BAND_PSEUDO_COLOR;
    return;
  }
  if (theDrawingStyleQString == "MULTI_BAND_COLOR")//no need to tr() this its not shown in ui
  {
    drawingStyle = MULTI_BAND_COLOR;
    return;
  }
}


/** This method looks to see if a given band name exists.

  @note

  muliband layers may have more than one "Undefined" band!
  */
bool QgsRasterLayer::hasBand(QString const & theBandName)
{
  QgsDebugMsg("Looking for band : " + theBandName);

  for (int i = 1; i <= mGdalDataset->GetRasterCount(); i++)
  {
    GDALRasterBand *myGdalBand = mGdalDataset->GetRasterBand(i);
    QString myColorQString = GDALGetColorInterpretationName(myGdalBand->GetColorInterpretation());
#ifdef QGISDEBUG
    QgsLogger::debug("band", i, __FILE__, __FUNCTION__, __LINE__, 2);
#endif

    if (myColorQString == theBandName)
    {
#ifdef QGISDEBUG
      QgsLogger::debug("band", i, __FILE__, __FUNCTION__, __LINE__, 2);
      QgsDebugMsgLevel("Found band : " + theBandName, 2);
#endif

      return true;
    }
    QgsDebugMsgLevel("Found unmatched band : " + QString::number(i) + " " + myColorQString, 2);
  }
  return false;
}

void QgsRasterLayer::drawThumbnail(QPixmap * theQPixmap)
{
  theQPixmap->fill(); //defaults to white

  // Raster providers are disabled (for the moment)
  if (mProviderKey.isEmpty())
  {
    QgsRasterViewPort *myRasterViewPort = new QgsRasterViewPort();
    myRasterViewPort->rectXOffset = 0;
    myRasterViewPort->rectYOffset = 0;
    myRasterViewPort->clippedXMin = 0;
    myRasterViewPort->clippedXMax = mRasterXDim;
    myRasterViewPort->clippedYMin = mRasterYDim;
    myRasterViewPort->clippedYMax = 0;
    myRasterViewPort->clippedWidth   = mRasterXDim;
    myRasterViewPort->clippedHeight  = mRasterYDim;
    myRasterViewPort->topLeftPoint = QgsPoint(0,0);
    myRasterViewPort->bottomRightPoint = QgsPoint(theQPixmap->width(), theQPixmap->height());
    myRasterViewPort->drawableAreaXDim = theQPixmap->width();
    myRasterViewPort->drawableAreaYDim = theQPixmap->height();

    QPainter * myQPainter=new QPainter(theQPixmap);
    draw(myQPainter,myRasterViewPort);
    delete myRasterViewPort;
    myQPainter->end();
    delete myQPainter;
  }

}



QPixmap QgsRasterLayer::getPaletteAsPixmap()
{
  QgsDebugMsg("QgsRasterLayer::getPaletteAsPixmap");

  // Only do this for the non-provider (hard-coded GDAL) scenario...
  // Maybe WMS can do this differently using QImage::numColors and QImage::color()
  if (
      (mProviderKey.isEmpty()) &&
      (hasBand("Palette") ) //dont tr() this its a gdal word!
     )
  {
    QgsDebugMsg("....found paletted image");
    QgsColorTable *myColorTable = colorTable ( 1 );
    GDALRasterBandH myGdalBand = mGdalDataset->GetRasterBand(1);
    if( GDALGetRasterColorInterpretation(myGdalBand) == GCI_PaletteIndex && myColorTable->defined() )
    {
      QgsDebugMsg("....found GCI_PaletteIndex");
      double myMin = myColorTable->rmin();
      double myMax = myColorTable->rmax();
      QgsDebugMsg("myMin = " + QString::number(myMin) + " myMax = " + QString::number(myMax));

      // Draw image
      int mySize = 100;
      QPixmap myPalettePixmap( mySize, mySize);
      QPainter myQPainter(&myPalettePixmap);

      QImage myQImage = QImage( mySize, mySize, 32);
      myQImage.fill(0);
      myQImage.setAlphaBuffer(false);
      myPalettePixmap.fill();

      double myStep = ( myMax - myMin ) / ( mySize * mySize);

      for( int myRow = 0; myRow < mySize; myRow++ )
      {
        for( int myCol = 0; myCol < mySize; myCol++ )
        {

          double myValue = myMin + myStep * (myCol + myRow * mySize);

          int c1, c2, c3;
          bool found = myColorTable->color ( myValue, &c1, &c2, &c3 );

          if ( found )
            myQImage.setPixel( myCol, myRow, qRgb(c1, c2, c3));
        }
      }

      myQPainter.drawImage(0,0,myQImage);
      return myPalettePixmap;
    }
    QPixmap myNullPixmap;
    return myNullPixmap;
  }
  else
  {
    //invalid layer  was requested
    QPixmap myNullPixmap;
    return myNullPixmap;
  }
}



bool QgsRasterLayer::draw(QPainter * theQPainter,
    QgsRect & theViewExtent,
    QgsMapToPixel * theQgsMapToPixel,
    QgsCoordinateTransform*,
    bool drawingToEditingCanvas)
{
  QgsDebugMsg("QgsRasterLayer::draw(4 arguments): entered.");

  //Dont waste time drawing if transparency is at 0 (completely transparent)
  if (mTransparencyLevel == 0)
    return TRUE;
  QgsDebugMsg("QgsRasterLayer::draw(4 arguments): checking timestamp.");

  // Check timestamp
  if ( !update() )
  {
    return FALSE;
  }    

  // clip raster extent to view extent
  QgsRect myRasterExtent = theViewExtent.intersect(&mLayerExtent);
  if (myRasterExtent.isEmpty())
  {
    // nothing to do
    return TRUE;
  }

#ifdef QGISDEBUG
  QgsLogger::debug<QgsRect>("QgsRasterLayer::draw(4 arguments): theViewExtent is ", theViewExtent, __FILE__, __FUNCTION__, __LINE__, 1);
  QgsLogger::debug<QgsRect>("QgsRasterLayer::draw(4 arguments): myRasterExtent is ", myRasterExtent, __FILE__, __FUNCTION__, __LINE__, 1);
#endif




  //
  // The first thing we do is set up the QgsRasterViewPort. This struct stores all the settings
  // relating to the size (in pixels and coordinate system units) of the raster part that is
  // in view in the map window. It also stores the origin.
  //
  //this is not a class level member because every time the user pans or zooms
  //the contents of the rasterViewPort will change
  QgsRasterViewPort *myRasterViewPort = new QgsRasterViewPort();


  // calculate raster pixel offsets from origin to clipped rect
  // we're only interested in positive offsets where the origin of the raster
  // is northwest of the origin of the view
  myRasterViewPort->rectXOffsetFloat = (theViewExtent.xMin() - mLayerExtent.xMin()) / fabs(mGeoTransform[1]);
  myRasterViewPort->rectYOffsetFloat = (mLayerExtent.yMax() - theViewExtent.yMax()) / fabs(mGeoTransform[5]);

  if (myRasterViewPort->rectXOffsetFloat < 0 )
  {
    myRasterViewPort->rectXOffsetFloat = 0;
  }

  if (myRasterViewPort->rectYOffsetFloat < 0 )
  {
    myRasterViewPort->rectYOffsetFloat = 0;
  }

  myRasterViewPort->rectXOffset = static_cast < int >(myRasterViewPort->rectXOffsetFloat);
  myRasterViewPort->rectYOffset = static_cast < int >(myRasterViewPort->rectYOffsetFloat);

#ifdef QGISDEBUG
  QgsLogger::debug("QgsRasterLayer::draw(4 arguments): mGeoTransform[0] = ", mGeoTransform[0], 1, __FILE__,\
      __FUNCTION__, __LINE__);
  QgsLogger::debug("QgsRasterLayer::draw(4 arguments): mGeoTransform[1] = ", mGeoTransform[1], 1, __FILE__,\
      __FUNCTION__, __LINE__);
  QgsLogger::debug("QgsRasterLayer::draw(4 arguments): mGeoTransform[2] = ", mGeoTransform[2], 1, __FILE__,\
      __FUNCTION__, __LINE__);
  QgsLogger::debug("QgsRasterLayer::draw(4 arguments): mGeoTransform[3] = ", mGeoTransform[3], 1, __FILE__,\
      __FUNCTION__, __LINE__);
  QgsLogger::debug("QgsRasterLayer::draw(4 arguments): mGeoTransform[4] = ", mGeoTransform[4], 1, __FILE__,\
      __FUNCTION__, __LINE__);
  QgsLogger::debug("QgsRasterLayer::draw(4 arguments): mGeoTransform[5] = ", mGeoTransform[5], 1, __FILE__,\
      __FUNCTION__, __LINE__);
#endif

  // get dimensions of clipped raster image in raster pixel space/ RasterIO will do the scaling for us.
  // So for example, if the user is zoomed in a long way, there may only be e.g. 5x5 pixels retrieved from
  // the raw raster data, but rasterio will seamlessly scale the up to whatever the screen coordinats are
  // e.g. a 600x800 display window (see next section below)
  myRasterViewPort->clippedXMin = (myRasterExtent.xMin() - mGeoTransform[0]) / mGeoTransform[1];
  myRasterViewPort->clippedXMax = (myRasterExtent.xMax() - mGeoTransform[0]) / mGeoTransform[1];
  myRasterViewPort->clippedYMin = (myRasterExtent.yMin() - mGeoTransform[3]) / mGeoTransform[5];
  myRasterViewPort->clippedYMax = (myRasterExtent.yMax() - mGeoTransform[3]) / mGeoTransform[5];

  // Sometimes the Ymin/Ymax are reversed.
  if (myRasterViewPort->clippedYMin > myRasterViewPort->clippedYMax)
  {
    double t = myRasterViewPort->clippedYMin;
    myRasterViewPort->clippedYMin = myRasterViewPort->clippedYMax;
    myRasterViewPort->clippedYMax = t;
  }

  // Set the clipped width and height to encompass all of the source pixels
  // that could end up being displayed.
  myRasterViewPort->clippedWidth = 
    static_cast<int>(ceil(myRasterViewPort->clippedXMax) - floor(myRasterViewPort->clippedXMin));

  myRasterViewPort->clippedHeight = 
    static_cast<int>(ceil(myRasterViewPort->clippedYMax) - floor(myRasterViewPort->clippedYMin));

  // but make sure the intended SE corner extent doesn't exceed the SE corner
  // of the source raster, otherwise GDAL's RasterIO gives an error and returns nothing.
  // The SE corner = NW origin + dimensions of the image itself.
  if ( (myRasterViewPort->rectXOffset + myRasterViewPort->clippedWidth)
      > mRasterXDim)
  {
    myRasterViewPort->clippedWidth =
      mRasterXDim - myRasterViewPort->rectXOffset;
  }
  if ( (myRasterViewPort->rectYOffset + myRasterViewPort->clippedHeight)
      > mRasterYDim)
  {
    myRasterViewPort->clippedHeight =
      mRasterYDim - myRasterViewPort->rectYOffset;
  }

  // get dimensions of clipped raster image in device coordinate space (this is the size of the viewport)
  myRasterViewPort->topLeftPoint = theQgsMapToPixel->transform(myRasterExtent.xMin(), myRasterExtent.yMax());
  myRasterViewPort->bottomRightPoint = theQgsMapToPixel->transform(myRasterExtent.xMax(), myRasterExtent.yMin());

  myRasterViewPort->drawableAreaXDim = static_cast<int> (fabs( (myRasterViewPort->clippedWidth / theQgsMapToPixel->mapUnitsPerPixel() * mGeoTransform[1])) + 0.5);
  myRasterViewPort->drawableAreaYDim = static_cast<int> (fabs( (myRasterViewPort->clippedHeight / theQgsMapToPixel->mapUnitsPerPixel() * mGeoTransform[5])) + 0.5);

#ifdef QGISDEBUG
  QgsLogger::debug("QgsRasterLayer::draw: mapUnitsPerPixel", theQgsMapToPixel->mapUnitsPerPixel(), 1, __FILE__,\
      __FUNCTION__, __LINE__);
  QgsLogger::debug("QgsRasterLayer::draw: mRasterXDim", mRasterXDim, 1, __FILE__, __FUNCTION__, __LINE__); 
  QgsLogger::debug("QgsRasterLayer::draw: mRasterYDim", mRasterYDim, 1, __FILE__, __FUNCTION__, __LINE__);

  QgsLogger::debug("QgsRasterLayer::draw: rectXOffset", myRasterViewPort->rectXOffset, 1, __FILE__,\
      __FUNCTION__, __LINE__);
  QgsLogger::debug("QgsRasterLayer::draw: rectXOffsetFloat", myRasterViewPort->rectXOffsetFloat, 1, __FILE__,\
      __FUNCTION__, __LINE__);
  QgsLogger::debug("QgsRasterLayer::draw: rectYOffset", myRasterViewPort->rectYOffset, 1, __FILE__,\
      __FUNCTION__, __LINE__);
  QgsLogger::debug("QgsRasterLayer::draw: rectYOffsetFloat", myRasterViewPort->rectYOffsetFloat, 1, __FILE__,\
      __FUNCTION__, __LINE__);

  QgsLogger::debug("QgsRasterLayer::draw: myRasterExtent.xMin()", myRasterExtent.xMin(), 1, __FILE__, __FUNCTION__,\
      __LINE__);
  QgsLogger::debug("QgsRasterLayer::draw: myRasterExtent.xMax()", myRasterExtent.xMax(), 1, __FILE__, __FUNCTION__,\
      __LINE__);
  QgsLogger::debug("QgsRasterLayer::draw: myRasterExtent.yMin()", myRasterExtent.yMin(), 1, __FILE__, __FUNCTION__,\
      __LINE__);
  QgsLogger::debug("QgsRasterLayer::draw: myRasterExtent.yMax()", myRasterExtent.yMax(), 1, __FILE__, __FUNCTION__,\
      __LINE__);

  QgsLogger::debug("QgsRasterLayer::draw: topLeftPoint.x()", myRasterViewPort->topLeftPoint.x(), 1, __FILE__,\
      __FUNCTION__, __LINE__);
  QgsLogger::debug("QgsRasterLayer::draw: bottomRightPoint.x()", myRasterViewPort->bottomRightPoint.x(), 1, __FILE__,\
      __FUNCTION__, __LINE__);
  QgsLogger::debug("QgsRasterLayer::draw: topLeftPoint.y()", myRasterViewPort->topLeftPoint.y(), 1, __FILE__,\
      __FUNCTION__, __LINE__);
  QgsLogger::debug("QgsRasterLayer::draw: bottomRightPoint.y()", myRasterViewPort->bottomRightPoint.y(), 1, __FILE__,\
      __FUNCTION__, __LINE__);

  QgsLogger::debug("QgsRasterLayer::draw: clippedXMin", myRasterViewPort->clippedXMin, 1, __FILE__,\
      __FUNCTION__, __LINE__);
  QgsLogger::debug("QgsRasterLayer::draw: clippedXMax", myRasterViewPort->clippedXMax, 1, __FILE__,\
      __FUNCTION__, __LINE__);
  QgsLogger::debug("QgsRasterLayer::draw: clippedYMin", myRasterViewPort->clippedYMin, 1, __FILE__,\
      __FUNCTION__, __LINE__);
  QgsLogger::debug("QgsRasterLayer::draw: clippedYMax", myRasterViewPort->clippedYMax, 1, __FILE__,\
      __FUNCTION__, __LINE__); 

  QgsLogger::debug("QgsRasterLayer::draw: clippedWidth", myRasterViewPort->clippedWidth, 1, __FILE__,\
      __FUNCTION__, __LINE__);
  QgsLogger::debug("QgsRasterLayer::draw: clippedHeight", myRasterViewPort->clippedHeight, 1, __FILE__,\
      __FUNCTION__, __LINE__);  
  QgsLogger::debug("QgsRasterLayer::draw: drawableAreaXDim", myRasterViewPort->drawableAreaXDim, 1, __FILE__,\
      __FUNCTION__, __LINE__);
  QgsLogger::debug("QgsRasterLayer::draw: drawableAreaYDim", myRasterViewPort->drawableAreaYDim, 1, __FILE__,\
      __FUNCTION__, __LINE__);

  QgsDebugMsg("ReadXml: gray band name : " + mGrayBandName);
  QgsDebugMsg("ReadXml: red band name : " + mRedBandName);
  QgsDebugMsg("ReadXml: green band name : " + mGreenBandName);
  QgsDebugMsg("ReadXml: blue band name : " + mBlueBandName);
#endif

  // /\/\/\ - added to handle zoomed-in rasters


  // Provider mode: See if a provider key is specified, and if so use the provider instead
  
  QgsDebugMsg("QgsRasterLayer::draw: Checking for provider key.");
  
  if (!mProviderKey.isEmpty())
  {
    QgsDebugMsg("QgsRasterLayer::draw: Wanting a '" + mProviderKey + "' provider to draw this.");

    emit setStatus(QString("Retrieving using ")+mProviderKey);

    QImage* image = 
      mDataProvider->draw(
                         myRasterExtent,
                         // Below should calculate to the actual pixel size of the
                         // part of the layer that's visible.
                         static_cast<int>( fabs( (myRasterViewPort->clippedXMax -  myRasterViewPort->clippedXMin)
                                                 / theQgsMapToPixel->mapUnitsPerPixel() * mGeoTransform[1]) + 1),
                         static_cast<int>( fabs( (myRasterViewPort->clippedYMax -  myRasterViewPort->clippedYMin)
                                                 / theQgsMapToPixel->mapUnitsPerPixel() * mGeoTransform[5]) + 1)
//                         myRasterViewPort->drawableAreaXDim,
//                         myRasterViewPort->drawableAreaYDim
                        );

    if (!image)
    {
      // An error occurred.
      mErrorCaption = mDataProvider->errorCaptionString();
      mError        = mDataProvider->errorString();

      delete myRasterViewPort;
      return FALSE;
    }

    QgsDebugMsg("QgsRasterLayer::draw: Done mDataProvider->draw.");
    QgsDebugMsg("QgsRasterLayer::draw: image stats: ");
#ifdef QGISDEBUG
    QgsLogger::debug("depth", image->depth(), __FILE__, __FUNCTION__, __LINE__, 1);
    QgsLogger::debug("bytes", image->numBytes(), __FILE__, __FUNCTION__, __LINE__, 1);
    QgsLogger::debug("width", image->width(), __FILE__, __FUNCTION__, __LINE__, 1);
    QgsLogger::debug("height", image->height(), __FILE__, __FUNCTION__, __LINE__, 1);
#endif

    QgsDebugMsg("QgsRasterLayer::draw: Want to theQPainter->drawImage with");
#ifdef QGISDEBUG
    QgsLogger::debug("origin x", myRasterViewPort->topLeftPoint.x(), __FILE__, __FUNCTION__, __LINE__, 1);
    QgsLogger::debug("(int)origin x", static_cast<int>(myRasterViewPort->topLeftPoint.x()), __FILE__,\
        __FUNCTION__, __LINE__, 1);
    QgsLogger::debug("origin y", myRasterViewPort->topLeftPoint.y(), __FILE__, __FUNCTION__, __LINE__, 1);
    QgsLogger::debug("(int)origin y", static_cast<int>(myRasterViewPort->topLeftPoint.y()), __FILE__,\
        __FUNCTION__, __LINE__, 1);
#endif

    // Since GDAL's RasterIO can't handle floating point, we have to round to
    // the nearest pixel.  Add 0.5 to get rounding instead of truncation
    // out of static_cast<int>.

    theQPainter->drawImage(static_cast<int>(
          myRasterViewPort->topLeftPoint.x()
          + 0.5    // try simulating rounding instead of truncation, to avoid off-by-one errors
          // TODO: Check for rigorous correctness
          ),
        static_cast<int>(
          myRasterViewPort->topLeftPoint.y()
          + 0.5    // try simulating rounding instead of truncation, to avoid off-by-one errors
          // TODO: Check for rigorous correctness
          ),
        *image);

  }
  else
  {
    if ((myRasterViewPort->drawableAreaXDim) > 4000 &&  (myRasterViewPort->drawableAreaYDim > 4000))
    {
      // We have scaled one raster pixel to more than 4000 screen pixels. What's the point of showing this layer?
      // Instead, we just stop displaying the layer. Prevents allocating the entire world of memory for showing
      // very few pixels.
      // (Alternatively, we have a very big screen > 2000 x 2000)
      QgsDebugMsg("Too zoomed in! Displaying raster requires too much memory. Raster will not display");
    } else {
      // Otherwise use the old-fashioned GDAL direct-drawing style
      // TODO: Move into its own GDAL provider.

      // \/\/\/ - commented-out to handle zoomed-in rasters
    //    draw(theQPainter,myRasterViewPort);
      // /\/\/\ - commented-out to handle zoomed-in rasters
      // \/\/\/ - added to handle zoomed-in rasters
      draw(theQPainter, myRasterViewPort, theQgsMapToPixel);
      // /\/\/\ - added to handle zoomed-in rasters
    }

  }

  delete myRasterViewPort;
  QgsDebugMsg("QgsRasterLayer::draw: exiting.");

  return TRUE;

}

void QgsRasterLayer::draw (QPainter * theQPainter, 
    QgsRasterViewPort * theRasterViewPort,
    QgsMapToPixel * theQgsMapToPixel)
{
  QgsDebugMsg("QgsRasterLayer::draw (3 arguments)");
  //
  //
  // The goal here is to make as many decisions as possible early on (outside of the rendering loop)
  // so that we can maximise performance of the rendering process. So now we check which drawing
  // procedure to use :
  //


  switch (drawingStyle)
  {
    // a "Gray" or "Undefined" layer drawn as a range of gray colors
    case SINGLE_BAND_GRAY:
      //check the band is set!
      if (mGrayBandName == tr("Not Set"))
      {
        break;
      }
      else
      {
        drawSingleBandGray(theQPainter, theRasterViewPort,
            theQgsMapToPixel, getRasterBandNumber(mGrayBandName));
        break;
      }
      // a "Gray" or "Undefined" layer drawn using a pseudocolor algorithm
    case SINGLE_BAND_PSEUDO_COLOR:
      //check the band is set!
      if (mGrayBandName == tr("Not Set"))
      {
        break;
      }
      else
      {
        drawSingleBandPseudoColor(theQPainter, theRasterViewPort, 
            theQgsMapToPixel, getRasterBandNumber(mGrayBandName));
        break;
      }
      // a "Palette" layer drawn in gray scale (using only one of the color components)
    case PALETTED_SINGLE_BAND_GRAY:
      //check the band is set!
      if (mGrayBandName == tr("Not Set"))
      {
        break;
      }
      else
      {
        QgsDebugMsg("PALETTED_SINGLE_BAND_GRAY drawing type detected...");

        int myBandNo = 1;
        drawPalettedSingleBandGray(theQPainter, theRasterViewPort, 
            theQgsMapToPixel, myBandNo, mGrayBandName);

        break;
      }
      // a "Palette" layer having only one of its color components rendered as psuedo color
    case PALETTED_SINGLE_BAND_PSEUDO_COLOR:
      //check the band is set!
      if (mGrayBandName == tr("Not Set"))
      {
        break;
      }
      else
      {

        int myBandNo = 1;
        drawPalettedSingleBandPseudoColor(theQPainter, theRasterViewPort,
            theQgsMapToPixel, myBandNo, mGrayBandName);
        break;
      }
      //a "Palette" image where the bands contains 24bit color info and 8 bits is pulled out per color
    case PALETTED_MULTI_BAND_COLOR:
      drawPalettedMultiBandColor(theQPainter, theRasterViewPort,
          theQgsMapToPixel, 1);
      break;
      // a layer containing 2 or more bands, but using only one band to produce a grayscale image
    case MULTI_BAND_SINGLE_BAND_GRAY:
      QgsDebugMsg("MULTI_BAND_SINGLE_BAND_GRAY drawing type detected...");
      //check the band is set!
      if (mGrayBandName == tr("Not Set"))
      {
        QgsDebugMsg("MULTI_BAND_SINGLE_BAND_GRAY Not Set detected..." + mGrayBandName);
        break;
      }
      else
      {

        //get the band number for the mapped gray band
        drawMultiBandSingleBandGray(theQPainter, theRasterViewPort,
            theQgsMapToPixel, getRasterBandNumber(mGrayBandName));
        break;
      }
      //a layer containing 2 or more bands, but using only one band to produce a pseudocolor image
    case MULTI_BAND_SINGLE_BAND_PSEUDO_COLOR:
      //check the band is set!
      if (mGrayBandName == tr("Not Set"))
      {
        break;
      }
      else
      {

        drawMultiBandSingleBandPseudoColor(theQPainter, theRasterViewPort,
            theQgsMapToPixel, getRasterBandNumber(mGrayBandName));
        break;
      }
      //a layer containing 2 or more bands, mapped to the three RGBcolors.
      //In the case of a multiband with only two bands, 
      //one band will have to be mapped to more than one color
    case MULTI_BAND_COLOR:
      if(mRedBandName == tr("Not Set") || 
         mGreenBandName == tr("Not Set") || 
         mBlueBandName == tr("Not Set"))
      {
        break;
      }
      else
      {
        drawMultiBandColor(theQPainter, theRasterViewPort,
            theQgsMapToPixel);
      }
      break;

    default:
      break;

  }
  
  //see if debug info is wanted
  if (mDebugOverlayFlag)
  {
    showDebugOverlay(theQPainter, theRasterViewPort);
  };

}                               //end of draw method


void QgsRasterLayer::drawSingleBandGray(QPainter * theQPainter, QgsRasterViewPort * theRasterViewPort, QgsMapToPixel * theQgsMapToPixel, int theBandNo)
{
  QgsDebugMsg("QgsRasterLayer::drawSingleBandGray called for layer " + QString::number(theBandNo));
  GDALRasterBand *myGdalBand = mGdalDataset->GetRasterBand(theBandNo);
  GDALDataType myDataType = myGdalBand->GetRasterDataType();
  void *myGdalScanData = readData ( myGdalBand, theRasterViewPort );

  /* Check for out of memory error */
  if (myGdalScanData == NULL)
  {
    return;
  }

  QImage myQImage = QImage(theRasterViewPort->drawableAreaXDim, theRasterViewPort->drawableAreaYDim, 32);
  myQImage.setAlphaBuffer(true);
  myQImage.fill(qRgba(255,255,255,0 )); // fill transparent

  QgsRasterBandStats myGrayBandStats;

  if(QgsContrastEnhancement::NO_STRETCH != getContrastEnhancementAlgorithm() && !mUserDefinedGrayMinMaxFlag && mStandardDeviations > 0)
  {
    myGrayBandStats = getRasterBandStats(theBandNo);
    setMaximumValue(theBandNo, myGrayBandStats.mean + (mStandardDeviations * myGrayBandStats.stdDev));
    setMinimumValue(theBandNo, myGrayBandStats.mean - (mStandardDeviations * myGrayBandStats.stdDev));
  }

  QgsDebugMsg("Starting main render loop");
  // print each point in myGdalScanData with equal parts R, G ,B o make it show as gray
  double myGrayValue = 0.0;
  int myGrayVal = 0;
  int myAlphaValue = 0;
  QgsContrastEnhancement* myContrastEnhancement = getContrastEnhancement(theBandNo);
  for (int myColumn = 0; myColumn < theRasterViewPort->drawableAreaYDim; ++myColumn)
  {
    for (int myRow = 0; myRow < theRasterViewPort->drawableAreaXDim; ++myRow)
    {
      myGrayValue = readValue ( myGdalScanData, myDataType,
          myColumn * theRasterViewPort->drawableAreaXDim + myRow );

      // If mNoDataValue is 'nan', the comparison
      // against myGrayVal will always fail ( nan==nan always
      // returns false, by design), hence the slightly odd comparison
      // of myGrayVal against itself. 
      if (mValidNoDataValue && (myGrayValue == mNoDataValue || myGrayValue != myGrayValue))
      {
        continue;
      }

      if(!myContrastEnhancement->isValueInDisplayableRange(myGrayValue))
      {
        continue;
      }

      myAlphaValue = mRasterTransparency.getAlphaValue(myGrayValue, mTransparencyLevel);
      if(0 == myAlphaValue)
      {
        continue;
      }
      

      myGrayVal = myContrastEnhancement->stretch(myGrayValue);

      if (mInvertPixelsFlag)
      {
        myGrayVal = 255 - myGrayVal;
      }

      myQImage.setPixel(myRow, myColumn, qRgba(myGrayVal, myGrayVal, myGrayVal, myAlphaValue));

    }
  }
  
  CPLFree ( myGdalScanData );

  QgsDebugMsg("Render done, preparing to copy to canvas");
  //render any inline filters
  filterLayer(&myQImage);

  paintImageToCanvas(theQPainter, theRasterViewPort, theQgsMapToPixel, &myQImage);

} // QgsRasterLayer::drawSingleBandGray


void QgsRasterLayer::drawSingleBandPseudoColor(QPainter * theQPainter, 
    QgsRasterViewPort * theRasterViewPort,
    QgsMapToPixel * theQgsMapToPixel, 
    int theBandNoInt)
{
  QgsDebugMsg("QgsRasterLayer::drawSingleBandPseudoColor called");

  QgsRasterBandStats myRasterBandStats = getRasterBandStats(theBandNoInt);
  GDALRasterBand *myGdalBand = mGdalDataset->GetRasterBand(theBandNoInt);
  GDALDataType myDataType = myGdalBand->GetRasterDataType();
  void *myGdalScanData = readData ( myGdalBand, theRasterViewPort );

  /* Check for out of memory error */
  if (myGdalScanData == NULL)
  {
    return;
  }

  QImage myQImage = QImage(theRasterViewPort->drawableAreaXDim, theRasterViewPort->drawableAreaYDim, 32);
  myQImage.setAlphaBuffer(true);
  myQImage.fill(qRgba(255,255,255,0 )); // fill transparent

  if (NULL == mRasterShader)
  {
    return;
  }

  double myMinimumValue = 0.0;
  double myMaximumValue = 0.0;
  //Use standard deviations if set, otherwise, use min max of band
  if (mStandardDeviations > 0)
  {
    myMinimumValue = (myRasterBandStats.mean - (mStandardDeviations * myRasterBandStats.stdDev));
    myMaximumValue = (myRasterBandStats.mean + (mStandardDeviations * myRasterBandStats.stdDev));
  }
  else
  {
    myMinimumValue = myRasterBandStats.minVal;
    myMaximumValue = myRasterBandStats.maxVal;
  }

  mRasterShader->setMinimumValue(myMinimumValue);
  mRasterShader->setMaximumValue(myMaximumValue);
  

  int myRedValue = 255;
  int myGreenValue = 255;
  int myBlueValue = 255;

  double myPixelValue = 0.0;
  int myAlphaValue = 0;
  for (int myColumn = 0; myColumn < theRasterViewPort->drawableAreaYDim; ++myColumn)
  {
    for (int myRow = 0; myRow < theRasterViewPort->drawableAreaXDim; ++myRow)
    {
      myPixelValue = readValue ( myGdalScanData, myDataType,
          myColumn * theRasterViewPort->drawableAreaXDim + myRow );

      if ( mValidNoDataValue && (myPixelValue == mNoDataValue || myPixelValue != myPixelValue ))
      {
        continue;
      }
      
      myAlphaValue = mRasterTransparency.getAlphaValue(myPixelValue, mTransparencyLevel);
      if(0 == myAlphaValue)
      {
        continue;
      }
      
      if(!mRasterShader->generateShadedValue(myPixelValue, &myRedValue, &myGreenValue, &myBlueValue))
      {
        continue;
      }

      if (mInvertPixelsFlag)
      {
        //Invert flag, flip blue and read
        myQImage.setPixel(myRow, myColumn, qRgba(myBlueValue, myGreenValue, myRedValue, myAlphaValue));
      }
      else
      {
        //Normal
        myQImage.setPixel(myRow, myColumn, qRgba(myRedValue, myGreenValue, myBlueValue, myAlphaValue));
      }
    }                       //end of columnwise loop
  }                           //end of rowwise loop

  CPLFree ( myGdalScanData );

  //render any inline filters
  filterLayer(&myQImage);

  paintImageToCanvas(theQPainter, theRasterViewPort, theQgsMapToPixel, &myQImage);
}

/**
 * This method is used to render a paletted raster layer as a colour image.
 * @param theQPainter - pointer to the QPainter onto which the layer should be drawn.
 * @param theRasterViewPort - pointer to the ViewPort struct containing dimensions of viewable area and subset area to be extracted from data file.
 * @param theGdalBand - pointer to the GDALRasterBand which should be rendered.
 */
void QgsRasterLayer::drawPalettedSingleBandColor(QPainter * theQPainter, QgsRasterViewPort * theRasterViewPort, 
    QgsMapToPixel * theQgsMapToPixel, int theBandNo)
{
  QgsDebugMsg("QgsRasterLayer::drawPalettedSingleBandColor called");

  GDALRasterBand *myGdalBand = mGdalDataset->GetRasterBand(theBandNo);
  GDALDataType myDataType = myGdalBand->GetRasterDataType();
  void *myGdalScanData = readData ( myGdalBand, theRasterViewPort );

  /* Check for out of memory error */
  if (myGdalScanData == NULL)
  {
    return;
  }

  QgsColorTable *myColorTable = colorTable ( theBandNo );

  QImage myQImage = QImage(theRasterViewPort->drawableAreaXDim, theRasterViewPort->drawableAreaYDim, 32);
  myQImage.setAlphaBuffer(true);
  myQImage.fill(qRgba(255,255,255,0 )); // fill transparent
  
  double myPixelValue = 0.0;
  int myRedValue = 0;
  int myGreenValue = 0;
  int myBlueValue = 0;
  bool found = false;
  int myAlphaValue = 0;
  for (int myColumn = 0; myColumn < theRasterViewPort->drawableAreaYDim; ++myColumn)
  {
    for (int myRow = 0; myRow < theRasterViewPort->drawableAreaXDim; ++myRow)
    {
      //Reinitalize values;      
      myRedValue = 0;
      myGreenValue = 0;
      myBlueValue = 0;
      found = false;
      myPixelValue = readValue ( myGdalScanData, (GDALDataType)myDataType,
          myColumn * theRasterViewPort->drawableAreaXDim + myRow );

      if ( mValidNoDataValue && (myPixelValue == mNoDataValue || myPixelValue != myPixelValue ))
      {
        continue;
      }

      myAlphaValue = mRasterTransparency.getAlphaValue(myPixelValue, mTransparencyLevel);
      if(0 == myAlphaValue)
      {
        continue;
      }
      
      found = myColorTable->color ( myPixelValue, &myRedValue, &myGreenValue, &myBlueValue );
      if ( !found ) continue;

      if (mInvertPixelsFlag)
      {
        myRedValue = 255 - myRedValue;
        myGreenValue = 255 - myGreenValue;
        myBlueValue = 255 - myBlueValue;
      }
      myQImage.setPixel(myRow, myColumn, qRgba(myRedValue, myGreenValue, myBlueValue, myAlphaValue));
    }
  }

  CPLFree(myGdalScanData);

  //render any inline filters
  filterLayer(&myQImage);

  paintImageToCanvas(theQPainter, theRasterViewPort, theQgsMapToPixel, &myQImage);
}


/**
 * This method is used to render a paletted raster layer as a gray image.
 * @param theQPainter - pointer to the QPainter onto which the layer should be drawn.
 * @param theRasterViewPort - pointer to the ViewPort struct containing dimensions of viewable area and subset area to be extracted from data file.
 * @param theGdalBand - pointer to the GDALRasterBand which should be rendered.
 * @param theColorQString - QString containing either 'Red' 'Green' or 'Blue' indicating which part of the rgb triplet will be used to render gray.
 */
void QgsRasterLayer::drawPalettedSingleBandGray(QPainter * theQPainter, QgsRasterViewPort * theRasterViewPort, 
    QgsMapToPixel * theQgsMapToPixel, int theBandNo,
    QString const & theColorQString)
{
  QgsDebugMsg("QgsRasterLayer::drawPalettedSingleBandGray called");

  QgsRasterBandStats myRasterBandStats = getRasterBandStats(theBandNo);
  GDALRasterBand *myGdalBand = mGdalDataset->GetRasterBand(theBandNo);
  GDALDataType myDataType = myGdalBand->GetRasterDataType();
  void *myGdalScanData = readData ( myGdalBand, theRasterViewPort );

  /* Check for out of memory error */
  if (myGdalScanData == NULL)
  {
    return;
  }

  QgsColorTable *myColorTable = &(myRasterBandStats.colorTable);

  QImage myQImage = QImage(theRasterViewPort->drawableAreaXDim, theRasterViewPort->drawableAreaYDim, 32);
  myQImage.setAlphaBuffer(true);
  myQImage.fill(qRgba(255,255,255,0 )); // fill transparent
 
  bool found = false;
  double myPixelValue = 0.0;
  int myRedLUTValue = 0;
  int myGreenLUTValue = 0;
  int myBlueLUTValue = 0;
  int myAlphaValue = 0;
  
  //Set a pointer to the LUT color channel
  int* myGrayValue;
  if (theColorQString == mRedBandName)
  {
    myGrayValue = &myRedLUTValue;
  }
  else if (theColorQString == mGreenBandName)
  {
    myGrayValue = &myGreenLUTValue;
  }
  else
  {
    myGrayValue = &myBlueLUTValue;
  }  
  
  for (int myColumn = 0; myColumn < theRasterViewPort->drawableAreaYDim; ++myColumn)
  {
    for (int myRow = 0; myRow < theRasterViewPort->drawableAreaXDim; ++myRow)
    {
      myRedLUTValue = 0;
      myGreenLUTValue = 0;
      myBlueLUTValue = 0;
      found = false;
      myPixelValue = readValue ( myGdalScanData, (GDALDataType)myDataType,
          myColumn * theRasterViewPort->drawableAreaXDim + myRow );

      if ( mValidNoDataValue && (myPixelValue == mNoDataValue || myPixelValue != myPixelValue ))
      {
        continue;
      }

      myAlphaValue = mRasterTransparency.getAlphaValue(myPixelValue, mTransparencyLevel);
      if(0 == myAlphaValue)
      {
        continue;
      }

      found = myColorTable->color ( myPixelValue, &myRedLUTValue, &myGreenLUTValue, &myBlueLUTValue );
      if ( !found ) continue;

      if (mInvertPixelsFlag)
      {
        *myGrayValue = 255 - *myGrayValue;
      }

      myQImage.setPixel(myRow, myColumn, qRgba(*myGrayValue, *myGrayValue, *myGrayValue, myAlphaValue));
    }
  }
  CPLFree ( myGdalScanData );

  //render any inline filters
  filterLayer(&myQImage);

  paintImageToCanvas(theQPainter, theRasterViewPort, theQgsMapToPixel, &myQImage);
}


/**
 * This method is used to render a paletted raster layer as a pseudocolor image.
 * @param theQPainter - pointer to the QPainter onto which the layer should be drawn.
 * @param theRasterViewPort - pointer to the ViewPort struct containing dimensions of viewable area and subset area to be extracted from data file.
 * @param theGdalBand - pointer to the GDALRasterBand which should be rendered.
 * @param theColorQString - QString containing either 'Red' 'Green' or 'Blue' indicating which part of the rgb triplet will be used to render gray.
 */
void QgsRasterLayer::drawPalettedSingleBandPseudoColor(QPainter * theQPainter, QgsRasterViewPort * theRasterViewPort,
    QgsMapToPixel * theQgsMapToPixel, int theBandNo, 
    QString const & theColorQString)
{
  QgsDebugMsg("QgsRasterLayer::drawPalettedSingleBandPseudoColor called");
  QgsRasterBandStats myRasterBandStats = getRasterBandStats(theBandNo);
  GDALRasterBand *myGdalBand = mGdalDataset->GetRasterBand(theBandNo);
  GDALDataType myDataType = myGdalBand->GetRasterDataType();
  void *myGdalScanData = readData ( myGdalBand, theRasterViewPort );

  /* Check for out of memory error */
  if (myGdalScanData == NULL)
  {
    return;
  }

  QImage myQImage = QImage(theRasterViewPort->drawableAreaXDim, theRasterViewPort->drawableAreaYDim, 32);
  myQImage.setAlphaBuffer(true);
  myQImage.fill(qRgba(255,255,255,0 )); // fill transparent

  if (NULL == mRasterShader)
  {
    return;
  }

  double myMinimumValue = 0.0;
  double myMaximumValue = 0.0;
  //Use standard deviations if set, otherwise, use min max of band
  if (mStandardDeviations > 0)
  {
    myMinimumValue = (myRasterBandStats.mean - (mStandardDeviations * myRasterBandStats.stdDev));
    myMaximumValue = (myRasterBandStats.mean + (mStandardDeviations * myRasterBandStats.stdDev));
  }
  else
  {
    myMinimumValue = myRasterBandStats.minVal;
    myMaximumValue = myRasterBandStats.maxVal;
  }

  mRasterShader->setMinimumValue(myMinimumValue);
  mRasterShader->setMaximumValue(myMaximumValue);

  QgsColorTable *myColorTable = &(myRasterBandStats.colorTable);
  int myRedLUTValue = 0;
  int myGreenLUTValue = 0;
  int myBlueLUTValue;
  
  double myPixelValue = 0.0;
  int myRedValue = 0;
  int myGreenValue = 0;
  int myBlueValue = 0;
  int myAlphaValue = 0;
  
  //Set a pointer to the LUT color channel
  int* myGrayValue;
  if (theColorQString == mRedBandName)
  {
    myGrayValue = &myRedLUTValue;
  }
  else if (theColorQString == mGreenBandName)
  {
    myGrayValue = &myGreenLUTValue;
  }
  else
  {
    myGrayValue = &myBlueLUTValue;
  } 
  
  for (int myColumn = 0; myColumn < theRasterViewPort->drawableAreaYDim; ++myColumn)
  {
    for (int myRow = 0; myRow < theRasterViewPort->drawableAreaXDim; ++myRow)
    {
      myRedValue = 0;
      myGreenValue = 0;
      myBlueValue = 0;
      myPixelValue = readValue ( myGdalScanData, (GDALDataType)myDataType,
          myColumn * theRasterViewPort->drawableAreaXDim + myRow );

      if ( mValidNoDataValue && (myPixelValue == mNoDataValue || myPixelValue != myPixelValue ))
      {
        continue;
      }

      myAlphaValue = mRasterTransparency.getAlphaValue(myPixelValue, mTransparencyLevel);
      if(0 == myAlphaValue)
      {
        continue;
      }
      
      bool found = myColorTable->color ( myPixelValue, &myRedLUTValue, &myGreenLUTValue, &myBlueLUTValue );
      if ( !found ) continue;


      if(!mRasterShader->generateShadedValue((double)*myGrayValue, &myRedValue, &myGreenValue, &myBlueValue))
      {
        continue;
      }

      if (mInvertPixelsFlag)
      {
        //Invert flag, flip blue and read
        myQImage.setPixel(myRow, myColumn, qRgba(myBlueValue, myGreenValue, myRedValue, myAlphaValue));
      }
      else
      {
        //Normal
        myQImage.setPixel(myRow, myColumn, qRgba(myRedValue, myGreenValue, myBlueValue, myAlphaValue));
      }
    }
  }
  CPLFree ( myGdalScanData );

  //render any inline filters
  filterLayer(&myQImage);

  paintImageToCanvas(theQPainter, theRasterViewPort, theQgsMapToPixel, &myQImage);
}

/**
 * This method is used to render a paletted raster layer as a colour image.
 * @param theQPainter - pointer to the QPainter onto which the layer should be drawn.
 * @param theRasterViewPort - pointer to the ViewPort struct containing dimensions of viewable area and subset area to be extracted from data file.
 * @param theGdalBand - pointer to the GDALRasterBand which should be rendered.
 */
void QgsRasterLayer::drawPalettedMultiBandColor(QPainter * theQPainter, QgsRasterViewPort * theRasterViewPort, 
    QgsMapToPixel * theQgsMapToPixel, int theBandNo)
{
  QgsDebugMsg("QgsRasterLayer::drawPalettedMultiBandColor called");

  GDALRasterBand *myGdalBand = mGdalDataset->GetRasterBand(theBandNo);
  GDALDataType myDataType = myGdalBand->GetRasterDataType();
  void *myGdalScanData = readData ( myGdalBand, theRasterViewPort );

  /* Check for out of memory error */
  if (myGdalScanData == NULL)
  {
    return;
  }

  QgsColorTable *myColorTable = colorTable ( theBandNo );

  QImage myQImage = QImage(theRasterViewPort->drawableAreaXDim, theRasterViewPort->drawableAreaYDim, 32);
  myQImage.setAlphaBuffer(true);
  myQImage.fill(qRgba(255,255,255,0 )); // fill transparent
  
  double myPixelValue = 0.0;
  int myRedLUTValue = 0;
  int myGreenLUTValue = 0;
  int myBlueLUTValue = 0;
  
  int myRedValue = 0;  //color 1 int
  int myGreenValue = 0;  //color 2 int
  int myBlueValue = 0; //color 3 int
  int myAlphaValue = 0;
  for (int myColumn = 0; myColumn < theRasterViewPort->drawableAreaYDim; ++myColumn)
  {
    for (int myRow = 0; myRow < theRasterViewPort->drawableAreaXDim; ++myRow)
    {
      myRedLUTValue = 0;
      myGreenLUTValue = 0;
      myBlueLUTValue = 0;
      
      myRedValue = 0;
      myGreenValue = 0;
      myBlueValue = 0;
      myPixelValue = readValue ( myGdalScanData, (GDALDataType)myDataType,
          myColumn * theRasterViewPort->drawableAreaXDim + myRow );

      if ( mValidNoDataValue && (myPixelValue == mNoDataValue || myPixelValue != myPixelValue ))
      {
        continue;
      }

      myAlphaValue = mRasterTransparency.getAlphaValue(myPixelValue, mTransparencyLevel);
      if(0 == myAlphaValue)
      {
        continue;
      }
      
      bool found = myColorTable->color ( myPixelValue, &myRedLUTValue, &myGreenLUTValue, &myBlueLUTValue );
      if ( !found ) continue;

      //check for alternate color mappings
      if (mRedBandName == "Red")
        myRedValue = myRedLUTValue;
      else if (mRedBandName == "Green")
        myRedValue = myGreenLUTValue;
      else if (mRedBandName == "Blue")
        myRedValue = myBlueLUTValue;

      if (mGreenBandName == "Red")
        myGreenValue = myRedLUTValue;
      else if (mGreenBandName == "Green")
        myGreenValue = myGreenLUTValue;
      else if (mGreenBandName == "Blue")

        myGreenValue = myBlueLUTValue;

      if (mBlueBandName == "Red")
        myBlueValue = myRedLUTValue;
      else if (mBlueBandName == "Green")
        myBlueValue = myGreenLUTValue;
      else if (mBlueBandName == "Blue")
        myBlueValue = myBlueLUTValue;

      if (mInvertPixelsFlag)
      {
        myRedValue = 255 - myRedValue;
        myGreenValue = 255 - myGreenValue;
        myBlueValue = 255 - myBlueValue;

      }

      myQImage.setPixel(myRow, myColumn, qRgba(myRedValue, myGreenValue, myBlueValue, myAlphaValue));
    }
  }
  
  CPLFree(myGdalScanData);
  
  //render any inline filters
  filterLayer(&myQImage);

  paintImageToCanvas(theQPainter, theRasterViewPort, theQgsMapToPixel, &myQImage);
}


void QgsRasterLayer::drawMultiBandSingleBandGray(QPainter * theQPainter, QgsRasterViewPort * theRasterViewPort, 
    QgsMapToPixel * theQgsMapToPixel, int theBandNo)
{
  //delegate to drawSingleBandGray!
  drawSingleBandGray(theQPainter, theRasterViewPort, theQgsMapToPixel, theBandNo);
}


void QgsRasterLayer::drawMultiBandSingleBandPseudoColor(QPainter * theQPainter, QgsRasterViewPort * theRasterViewPort, 
    QgsMapToPixel * theQgsMapToPixel, int theBandNo)
{
  //delegate to drawSinglePseudocolor!
  drawSingleBandPseudoColor(theQPainter, theRasterViewPort, theQgsMapToPixel, theBandNo);
}


void QgsRasterLayer::drawMultiBandColor(QPainter * theQPainter, QgsRasterViewPort * theRasterViewPort,
    QgsMapToPixel * theQgsMapToPixel)
{
  QgsDebugMsg("QgsRasterLayer::drawMultiBandColor called");

  int myRedBandNo = getRasterBandNumber(mRedBandName);
  int myGreenBandNo = getRasterBandNumber(mGreenBandName);
  int myBlueBandNo = getRasterBandNumber(mBlueBandName);
  GDALRasterBand *myGdalRedBand = mGdalDataset->GetRasterBand(myRedBandNo);
  GDALRasterBand *myGdalGreenBand = mGdalDataset->GetRasterBand(myGreenBandNo);
  GDALRasterBand *myGdalBlueBand = mGdalDataset->GetRasterBand(myBlueBandNo);

  GDALDataType myRedType = myGdalRedBand->GetRasterDataType();
  GDALDataType myGreenType = myGdalGreenBand->GetRasterDataType();
  GDALDataType myBlueType = myGdalBlueBand->GetRasterDataType();

  void *myGdalRedData = readData ( myGdalRedBand, theRasterViewPort );
  void *myGdalGreenData = readData ( myGdalGreenBand, theRasterViewPort );
  void *myGdalBlueData = readData ( myGdalBlueBand, theRasterViewPort );

  /* Check for out of memory error */
  if (myGdalRedData == NULL || myGdalGreenData == NULL || myGdalBlueData == NULL)
  {
    // Safe to free NULL-pointer */
    VSIFree(myGdalRedData);
    VSIFree(myGdalGreenData);
    VSIFree(myGdalBlueData);
    return;
  }

  QImage myQImage = QImage(theRasterViewPort->drawableAreaXDim, theRasterViewPort->drawableAreaYDim, 32);
  myQImage.setAlphaBuffer(true);
  myQImage.fill(qRgba(255,255,255,0 )); // fill transparent

  QgsRasterBandStats myRedBandStats;
  QgsRasterBandStats myGreenBandStats;
  QgsRasterBandStats myBlueBandStats;
  /*
   * If a stetch is requested and there are no user defined Min Max values
   * we need to get these values from the bands themselves.
   *
   */
  if(QgsContrastEnhancement::NO_STRETCH != getContrastEnhancementAlgorithm() && !mUserDefinedRGBMinMaxFlag && mStandardDeviations > 0)
  {
    myRedBandStats = getRasterBandStats(myRedBandNo);
    myGreenBandStats = getRasterBandStats(myGreenBandNo);
    myBlueBandStats = getRasterBandStats(myBlueBandNo);

    setMaximumValue(myRedBandNo, myRedBandStats.mean + (mStandardDeviations * myRedBandStats.stdDev));
    setMinimumValue(myRedBandNo, myRedBandStats.mean - (mStandardDeviations * myRedBandStats.stdDev));
    setMaximumValue(myGreenBandNo, myGreenBandStats.mean + (mStandardDeviations * myGreenBandStats.stdDev));
    setMinimumValue(myGreenBandNo, myGreenBandStats.mean - (mStandardDeviations * myGreenBandStats.stdDev));
    setMaximumValue(myBlueBandNo, myBlueBandStats.mean + (mStandardDeviations * myBlueBandStats.stdDev));
    setMinimumValue(myBlueBandNo, myBlueBandStats.mean - (mStandardDeviations * myBlueBandStats.stdDev));
  }

  //Read and display pixels
  double myRedValue = 0.0;
  double myGreenValue = 0.0;
  double myBlueValue = 0.0;
  
  int myStretchedRedValue   = 0;
  int myStretchedGreenValue = 0;
  int myStretchedBlueValue  = 0;
  int myAlphaValue = 0;
  QgsContrastEnhancement* myRedContrastEnhancement = getContrastEnhancement(myRedBandNo);
  QgsContrastEnhancement* myGreenContrastEnhancement = getContrastEnhancement(myGreenBandNo);
  QgsContrastEnhancement* myBlueContrastEnhancement = getContrastEnhancement(myBlueBandNo);
  for (int myColumn = 0; myColumn < theRasterViewPort->drawableAreaYDim; ++myColumn)
  {
    for (int myRow = 0; myRow < theRasterViewPort->drawableAreaXDim; ++myRow)
    {
      myRedValue   = readValue ( myGdalRedData, (GDALDataType)myRedType,
          myColumn * theRasterViewPort->drawableAreaXDim + myRow );
      myGreenValue = readValue ( myGdalGreenData, (GDALDataType)myGreenType,
          myColumn * theRasterViewPort->drawableAreaXDim + myRow );
      myBlueValue  = readValue ( myGdalBlueData, (GDALDataType)myBlueType,
          myColumn * theRasterViewPort->drawableAreaXDim + myRow );

      if(mValidNoDataValue && ((myRedValue == mNoDataValue || myRedValue != myRedValue) || (myGreenValue == mNoDataValue || myGreenValue != myGreenValue) || (myBlueValue == mNoDataValue || myBlueValue != myBlueValue)))
      {
        continue;
      }

      if(!myRedContrastEnhancement->isValueInDisplayableRange(myRedValue) || !myGreenContrastEnhancement->isValueInDisplayableRange(myGreenValue) || !myBlueContrastEnhancement->isValueInDisplayableRange(myBlueValue))
      {
        continue;
      }

      myAlphaValue = mRasterTransparency.getAlphaValue(myRedValue, myGreenValue, myBlueValue, mTransparencyLevel);
      if(0 == myAlphaValue)
      {
        continue;
      }
      
      myStretchedRedValue = myRedContrastEnhancement->stretch(myRedValue);
      myStretchedGreenValue = myGreenContrastEnhancement->stretch(myGreenValue);
      myStretchedBlueValue = myBlueContrastEnhancement->stretch(myBlueValue);

      if (mInvertPixelsFlag)
      {
        myStretchedRedValue = 255 - myStretchedRedValue;
        myStretchedGreenValue = 255 - myStretchedGreenValue;
        myStretchedBlueValue = 255 - myStretchedBlueValue;
      }

      myQImage.setPixel( myRow, myColumn, qRgba(myStretchedRedValue, myStretchedGreenValue, myStretchedBlueValue, myAlphaValue));
    }
  }
  //free the scanline memory
  CPLFree(myGdalRedData);
  CPLFree(myGdalGreenData);
  CPLFree(myGdalBlueData);
    
  //render any inline filters
  filterLayer(&myQImage);

#ifdef QGISDEBUG
  QPixmap* pm = dynamic_cast<QPixmap*>(theQPainter->device());
  if(pm)
  {
    QgsDebugMsg("QgsRasterLayer::drawMultiBandColor: theQPainter stats: ");
    QgsDebugMsg("width = " + QString::number(pm->width()));
    QgsDebugMsg("height = " + QString::number(pm->height()));
    pm->save("/tmp/qgis-rasterlayer-drawmultibandcolor-test-a.png", "PNG");
  }
#endif

  paintImageToCanvas(theQPainter, theRasterViewPort, theQgsMapToPixel, &myQImage);

#ifdef QGISDEBUG
  QgsDebugMsg("QgsRasterLayer::drawMultiBandColor: theQPainter->drawImage.");
  if(pm)
  {
    pm->save("/tmp/qgis-rasterlayer-drawmultibandcolor-test-b.png", "PNG");
  }
#endif
}



/**
 * Call any inline filters
 */
void QgsRasterLayer::filterLayer(QImage * theQImage)
{
  //do stuff here....
  //return;
}

/**
  Print some debug info to the qpainter
  */

void QgsRasterLayer::showDebugOverlay(QPainter * theQPainter, QgsRasterViewPort * theRasterViewPort)
{


  QFont myQFont("arial", 10, QFont::Bold);
  theQPainter->setFont(myQFont);
  theQPainter->setPen(Qt::black);
  QBrush myQBrush(qRgba(128, 128, 164, 50), Qt::Dense6Pattern); //semi transparent
  theQPainter->setBrush(myQBrush);  // set the yellow brush
  theQPainter->drawRect(5, 5, theQPainter->window().width() - 10, 60);
  theQPainter->setBrush(Qt::NoBrush); // do not fill

  theQPainter->drawText(10, 20, "QPainter: "
      + QString::number(theQPainter->window().width()) + " x " + QString::number(theQPainter->window().height()));
  theQPainter->drawText(10, 32, tr("Raster Extent: ")
      + QString::number(theRasterViewPort->drawableAreaXDim)
      + "," + QString::number(theRasterViewPort->drawableAreaYDim));
  theQPainter->drawText(10, 44, tr("Clipped area: ")
      + QString::number(theRasterViewPort->clippedXMin)
      + "," + QString::number(theRasterViewPort->clippedYMin)
      + " - " + QString::number(theRasterViewPort->clippedXMax)
      + "," + QString::number(theRasterViewPort->clippedYMin));

  return;


}                               //end of main draw method

/** Return the statistics for a given band name.
  WARDNING::: THERE IS NO GUARANTEE THAT BAND NAMES ARE UNIQE
  THE FIRST MATCH WILL BE RETURNED!!!!!!!!!!!!
  */
const QgsRasterBandStats QgsRasterLayer::getRasterBandStats(QString const & theBandNameQString)
{

  //we cant use a vector iterator because the iterator is astruct not a class
  //and the qvector model does not like this.
  for (int i = 1; i <= mGdalDataset->GetRasterCount(); i++)
  {
    QgsRasterBandStats myRasterBandStats = getRasterBandStats(i);
    if (myRasterBandStats.bandName == theBandNameQString)
    {
      return myRasterBandStats;
    }
  }

  return QgsRasterBandStats();     // return a null one
  // XXX is this ok?  IS there a "null" one?
}

//get the number of a band given its name
//note this should be the rewritten name set up in the constructor,
//not the name retrieved directly from gdal!
//if no matching band is found zero will be returned!
const int QgsRasterLayer::getRasterBandNumber(QString const &  theBandNameQString)
{
  for (int myIterator = 0; myIterator < mRasterStatsList.size(); ++myIterator)
  {
    //find out the name of this band
    QgsRasterBandStats myRasterBandStats = mRasterStatsList[myIterator];
    QgsDebugMsg("myRasterBandStats.bandName: " + myRasterBandStats.bandName + "  :: theBandNameQString: "\
        + theBandNameQString);

    if (myRasterBandStats.bandName == theBandNameQString)
    {
      QgsDebugMsg("********** band " + QString::number(myRasterBandStats.bandNo) +\
          " was found in getRasterBandNumber " + theBandNameQString);

      return myRasterBandStats.bandNo;
    }
  }
  QgsDebugMsg("********** no band was found in getRasterBandNumber " + theBandNameQString);

  return 0;                     //no band was found
}



// get the name of a band given its number
const QString QgsRasterLayer::getRasterBandName(int theBandNo)
{

  if (theBandNo <= mRasterStatsList.size())
  {
    //vector starts at base 0, band counts at base1 !
    return mRasterStatsList[theBandNo - 1].bandName;
  }
  else
  {
    return QString("");
  }
}



/** Check whether a given band number has stats associated with it */
const bool QgsRasterLayer::hasStats(int theBandNo)
{
  if (theBandNo <= mRasterStatsList.size())
  {
    //vector starts at base 0, band counts at base1 !
    return mRasterStatsList[theBandNo - 1].statsGatheredFlag;
  }
  else
  {
    return false;
  }
}


/** Private method to calculate statistics for a band. Populates rasterStatsMemArray.

Calculates:

<ul>
<li>myRasterBandStats.elementCount
<li>myRasterBandStats.minVal
<li>myRasterBandStats.maxVal
<li>myRasterBandStats.sum
<li>myRasterBandStats.range
<li>myRasterBandStats.mean
<li>myRasterBandStats.sumSqrDev
<li>myRasterBandStats.stdDev
<li>myRasterBandStats.colorTable
</ul>

@seealso RasterBandStats

@note

That this is a cpu intensive and slow task!

*/
//TODO: This method needs some cleaning up PJE 2007-12-30
//TODO: Values that are only used in debug should be totally wrapped in debug ifdefs 
const QgsRasterBandStats QgsRasterLayer::getRasterBandStats(int theBandNo)
{
  // check if we have received a valid band number
  if ((mGdalDataset->GetRasterCount() < theBandNo) && rasterLayerType != PALETTE)
  {
    // invalid band id, return nothing
    QgsRasterBandStats myNullReturnStats;
    return myNullReturnStats;
  }
  if (rasterLayerType == PALETTE && (theBandNo > 3))
  {
    // invalid band id, return nothing
    QgsRasterBandStats myNullReturnStats;
    return myNullReturnStats;
  }
  // check if we have previously gathered stats for this band...

  QgsRasterBandStats myRasterBandStats = mRasterStatsList[theBandNo - 1];
  myRasterBandStats.bandNo = theBandNo;

  // don't bother with this if we already have stats
  if (myRasterBandStats.statsGatheredFlag)
  {
    return myRasterBandStats;
  }
  // only print message if we are actually gathering the stats
  emit setStatus(QString("Retrieving stats for ")+name());
  qApp->processEvents();
  QgsDebugMsg("QgsRasterLayer::retrieve stats for band " + QString::number(theBandNo));
  GDALRasterBand *myGdalBand = mGdalDataset->GetRasterBand(theBandNo);


  QString myColorerpretation = GDALGetColorInterpretationName(myGdalBand->GetColorInterpretation());

  //declare a colorTable to hold a palette - will only be used if the layer color interp is palette ???
  //get the palette colour table
  QgsColorTable *myColorTable = &(myRasterBandStats.colorTable);
  if (rasterLayerType == PALETTE)
  {

    //override the band name - palette images are really only one band
    //so we are faking three band behaviour
    switch (theBandNo)
    {
      // a "Red" layer
      case 1:
        myRasterBandStats.bandName = mRedBandName;
        break;
      case 2:
        myRasterBandStats.bandName = mBlueBandName;
        break;
      case 3:
        myRasterBandStats.bandName = mGreenBandName;
        break;
      default:
        //invalid band id so return
        QgsRasterBandStats myNullReturnStats;
        return myNullReturnStats;
        break;
    }
  }
  else if (rasterLayerType==GRAY_OR_UNDEFINED)
  {
    myRasterBandStats.bandName = myColorerpretation;
  }
  else //rasterLayerType is MULTIBAND
  {
    //do nothing
  }

  // XXX this sets the element count to a sensible value; but then you ADD to
  // XXX it later while iterating through all the pixels?
  //myRasterBandStats.elementCount = mRasterXDim * mRasterYDim;

  myRasterBandStats.elementCount = 0; // because we'll be counting only VALID pixels later

  emit setStatus(QString("Calculating stats for ")+name());
  //reset the main app progress bar
  emit drawingProgress(0,0);

  // let the user know we're going to possibly be taking a while
  //QApplication::setOverrideCursor(QCursor(Qt::WaitCursor));

 GDALDataType myDataType = myGdalBand->GetRasterDataType();

  int  myNXBlocks, myNYBlocks, myXBlockSize, myYBlockSize;
  myGdalBand->GetBlockSize( &myXBlockSize, &myYBlockSize );

  myNXBlocks = (myGdalBand->GetXSize() + myXBlockSize - 1) / myXBlockSize;
  myNYBlocks = (myGdalBand->GetYSize() + myYBlockSize - 1) / myYBlockSize;

  void *myData = CPLMalloc ( myXBlockSize * myYBlockSize * GDALGetDataTypeSize(myDataType)/8 );

  // unfortunately we need to make two passes through the data to calculate stddev
  bool myFirstIterationFlag = true;

  // Comparison value for equality; i.e., we shouldn't directly compare two
  // floats so it's better to take their difference and see if they're within
  // a certain range -- in this case twenty times the smallest value that
  // doubles can take for the current system.  (Yes, 20 was arbitrary.)
  double myPrecision = std::numeric_limits<double>::epsilon() * 20;
  
  //ifdefs below to remove compiler warning about unused vars
#ifdef QGISDEBUG
  int success;
  double GDALminimum = myGdalBand->GetMinimum( &success );

  if ( ! success )
  {
    QgsDebugMsg("myGdalBand->GetMinimum() failed");
  }

  double GDALmaximum = myGdalBand->GetMaximum( &success );
  
  if ( ! success )
  {
    QgsDebugMsg("myGdalBand->GetMaximum() failed");
  }

  double GDALnodata = myGdalBand->GetNoDataValue( &success );
  
  if ( ! success )
  {
    QgsDebugMsg("myGdalBand->GetNoDataValue() failed");
  }

  QgsLogger::debug("GDALminium: ", GDALminimum, __FILE__, __FUNCTION__, __LINE__);
  QgsLogger::debug("GDALmaximum: ", GDALmaximum, __FILE__, __FUNCTION__, __LINE__);
  QgsLogger::debug("GDALnodata: ", GDALnodata, __FILE__, __FUNCTION__, __LINE__);

  double GDALrange[2];          // calculated min/max, as opposed to the
  // dataset provided
  
  GDALComputeRasterMinMax( myGdalBand, 1, GDALrange );
  QgsLogger::debug("approximate computed GDALminium:", GDALrange[0], __FILE__, __FUNCTION__, __LINE__, 1);
  QgsLogger::debug("approximate computed GDALmaximum:", GDALrange[1], __FILE__, __FUNCTION__, __LINE__, 1);

  GDALComputeRasterMinMax( myGdalBand, 0, GDALrange );
  QgsLogger::debug("exactly computed GDALminium:", GDALrange[0]);
  QgsLogger::debug("exactly computed GDALmaximum:", GDALrange[1]);
  
  QgsDebugMsg("starting manual stat computation");
#endif

  int myGdalBandXSize = myGdalBand->GetXSize();
  int myGdalBandYSize = myGdalBand->GetYSize();
  for( int iYBlock = 0; iYBlock < myNYBlocks; iYBlock++ )
  {
    emit drawingProgress ( iYBlock, myNYBlocks * 2 );

    for( int iXBlock = 0; iXBlock < myNXBlocks; iXBlock++ )
    {
      int  nXValid, nYValid;
      myGdalBand->ReadBlock( iXBlock, iYBlock, myData );

      // Compute the portion of the block that is valid
      // for partial edge blocks.
      if( (iXBlock+1) * myXBlockSize > myGdalBandXSize )
        nXValid = myGdalBandXSize - iXBlock * myXBlockSize;
      else
        nXValid = myXBlockSize;

      if( (iYBlock+1) * myYBlockSize > myGdalBandYSize )
        nYValid = myGdalBandYSize - iYBlock * myYBlockSize;
      else
        nYValid = myYBlockSize;

      // Collect the histogram counts.
      for( int iY = 0; iY < nYValid; iY++ )
      {
        for( int iX = 0; iX < nXValid; iX++ )
        {
          double my = readValue ( myData, myDataType, iX + iY * myXBlockSize );
          
          //if ( mValidNoDataValue && (fabs(my - mNoDataValue) < myPrecision || my == mNoDataValue || my != my))
          if ( mValidNoDataValue && (my == mNoDataValue || my != my))
          {
            continue; // NULL
          }

          //only use this element if we have a non null element
          if (myFirstIterationFlag)
          {
            //this is the first iteration so initialise vars
            myFirstIterationFlag = false;
            myRasterBandStats.minVal = my;
            myRasterBandStats.maxVal = my;
            ++myRasterBandStats.elementCount;
          }               //end of true part for first iteration check
          else
          {
            //this is done for all subsequent iterations
            if (my < myRasterBandStats.minVal)
            {
              myRasterBandStats.minVal = my;
            }
            if (my > myRasterBandStats.maxVal)
            {
              myRasterBandStats.maxVal = my;
            }
            
            myRasterBandStats.sum += my;
            ++myRasterBandStats.elementCount;
          }               //end of false part for first iteration check
        }
      }
    }                       //end of column wise loop
  }                           //end of row wise loop


  //end of first pass through data now calculate the range
  myRasterBandStats.range = myRasterBandStats.maxVal - myRasterBandStats.minVal;
  //calculate the mean
  myRasterBandStats.mean = myRasterBandStats.sum / myRasterBandStats.elementCount;

  //for the second pass we will get the sum of the squares / mean
  for( int iYBlock = 0; iYBlock < myNYBlocks; iYBlock++ )
  {
    emit drawingProgress ( iYBlock+myNYBlocks, myNYBlocks * 2 );

    for( int iXBlock = 0; iXBlock < myNXBlocks; iXBlock++ )
    {
      int  nXValid, nYValid;

      myGdalBand->ReadBlock( iXBlock, iYBlock, myData );

      // Compute the portion of the block that is valid
      // for partial edge blocks.
      if( (iXBlock+1) * myXBlockSize > myGdalBandXSize )
        nXValid = myGdalBandXSize - iXBlock * myXBlockSize;
      else
        nXValid = myXBlockSize;

      if( (iYBlock+1) * myYBlockSize > myGdalBandYSize )
        nYValid = myGdalBandYSize - iYBlock * myYBlockSize;
      else
        nYValid = myYBlockSize;

      // Collect the histogram counts.
      for( int iY = 0; iY < nYValid; iY++ )
      {
        for( int iX = 0; iX < nXValid; iX++ )
        {
          double my = readValue ( myData, myDataType, iX + iY * myXBlockSize );

          //if ( mValidNoDataValue && (fabs(my - mNoDataValue) < myPrecision || my == mNoDataValue || my != my))
          if ( mValidNoDataValue && (my == mNoDataValue || my != my))
          {
            continue; // NULL
          }

          //get the nth element from the current row
          if (myColorerpretation == "Palette") // dont translate this its a gdal string
          {
            //this is a palette layer so red / green / blue 'layers are 'virtual'
            //in that we need to obtain the palette entry and then get the r,g or g
            //component from that palette entry

            int c1, c2, c3;
            bool found = myColorTable->color ( my, &c1, &c2, &c3 );
            if ( !found ) continue;

            //check for alternate color mappings
            switch (theBandNo)
            {
              case 1:
                my = c1;
                break;
              case 2:
                my = c2;
                break;
              case 3:
                my = c3;
                break;
            }
          }

          myRasterBandStats.sumSqrDev += static_cast < double >
            (pow(my - myRasterBandStats.mean, 2));
        }
      }
    }                       //end of column wise loop
  }                           //end of row wise loop

  //divide result by sample size - 1 and get square root to get stdev
  myRasterBandStats.stdDev = static_cast < double >(sqrt(myRasterBandStats.sumSqrDev /
        (myRasterBandStats.elementCount - 1)));

#ifdef QGISDEBUG
  QgsLogger::debug("************ STATS **************", 1, __FILE__, __FUNCTION__, __LINE__);
  QgsLogger::debug("VALID NODATA", mValidNoDataValue, 1, __FILE__, __FUNCTION__, __LINE__);
  QgsLogger::debug("NULL", mNoDataValue, 1, __FILE__, __FUNCTION__, __LINE__);
  QgsLogger::debug("MIN", myRasterBandStats.minVal, 1, __FILE__, __FUNCTION__, __LINE__);
  QgsLogger::debug("MAX", myRasterBandStats.maxVal, 1, __FILE__, __FUNCTION__, __LINE__);
  QgsLogger::debug("RANGE", myRasterBandStats.range, 1, __FILE__, __FUNCTION__, __LINE__);
  QgsLogger::debug("MEAN", myRasterBandStats.mean, 1, __FILE__, __FUNCTION__, __LINE__);
  QgsLogger::debug("STDDEV", myRasterBandStats.stdDev, 1, __FILE__, __FUNCTION__, __LINE__);
#endif

  CPLFree(myData);
  myRasterBandStats.statsGatheredFlag = true;

  QgsDebugMsg("adding stats to stats collection at position " + QString::number(theBandNo - 1));
  //add this band to the class stats map
  mRasterStatsList[theBandNo - 1] = myRasterBandStats;
  emit drawingProgress(mRasterYDim, mRasterYDim); //reset progress
  //QApplication::restoreOverrideCursor(); //restore the cursor
  QgsDebugMsg("Stats collection completed returning");
  return myRasterBandStats;

} // QgsRasterLayer::getRasterBandStats




//mutator for red band name (allows alternate mappings e.g. map blue as red colour)
void QgsRasterLayer::setRedBandName(QString const &  theBandNameQString)
{
  QgsDebugMsg("setRedBandName :  " + theBandNameQString);
  //check if the band is unset
  if (theBandNameQString == tr("Not Set"))
  {
    mRedBandName = theBandNameQString;
    return;
  }
  //check if the image is paletted
  if (rasterLayerType == PALETTE && (theBandNameQString == "Red" || theBandNameQString == "Green" || theBandNameQString == "Blue"))
  {
    mRedBandName = theBandNameQString;
    return;
  }
  //check that a valid band name was passed

  for (int myIterator = 0; myIterator < mRasterStatsList.size(); ++myIterator)
  {
    //find out the name of this band
    QgsRasterBandStats myRasterBandStats = mRasterStatsList[myIterator];
    if (myRasterBandStats.bandName == theBandNameQString)
    {
      mRedBandName = theBandNameQString;
      return;
    }
  }

  //if no matches were found default to not set
  mRedBandName = tr("Not Set");
  return;
}



//mutator for green band name
void QgsRasterLayer::setGreenBandName(QString const &  theBandNameQString)
{
  //check if the band is unset
  if (theBandNameQString == tr("Not Set"))
  {
    mGreenBandName = theBandNameQString;
    return;
  }
  //check if the image is paletted
  if (rasterLayerType == PALETTE && (theBandNameQString == "Red" || theBandNameQString == "Green" || theBandNameQString == "Blue"))
  {
    mGreenBandName = theBandNameQString;
    return;
  }
  //check that a valid band name was passed

  for (int myIterator = 0; myIterator < mRasterStatsList.size(); ++myIterator)
  {
    //find out the name of this band
    QgsRasterBandStats myRasterBandStats = mRasterStatsList[myIterator];
    if (myRasterBandStats.bandName == theBandNameQString)
    {
      mGreenBandName = theBandNameQString;
      return;
    }
  }

  //if no matches were found default to not set
  mGreenBandName = tr("Not Set");
  return;
}

//mutator for blue band name
void QgsRasterLayer::setBlueBandName(QString const &  theBandNameQString)
{
  //check if the band is unset
  if (theBandNameQString == tr("Not Set"))
  {
    mBlueBandName = theBandNameQString;
    return;
  }
  //check if the image is paletted
  if (rasterLayerType == PALETTE && (theBandNameQString == "Red" || theBandNameQString == "Green" || theBandNameQString == "Blue"))
  {
    mBlueBandName = theBandNameQString;
    return;
  }
  //check that a valid band name was passed

  for (int myIterator = 0; myIterator < mRasterStatsList.size(); ++myIterator)
  {
    //find out the name of this band
    QgsRasterBandStats myRasterBandStats = mRasterStatsList[myIterator];
    if (myRasterBandStats.bandName == theBandNameQString)
    {
      mBlueBandName = theBandNameQString;
      return;
    }
  }

  //if no matches were found default to not set
  mBlueBandName = tr("Not Set");
  return;
}

//mutator for transparent band name
void QgsRasterLayer::setTransparentBandName(QString const &  theBandNameQString)
{
  //check if the band is unset
  if (theBandNameQString == tr("Not Set"))
  {
    mTransparencyBandName = theBandNameQString;
    return;
  }
  //check if the image is paletted
  if (rasterLayerType == PALETTE && (theBandNameQString == "Red" || theBandNameQString == "Green" || theBandNameQString == "Blue"))
  {
    mTransparencyBandName = theBandNameQString;
    return;
  }
  //check that a valid band name was passed

  for (int myIterator = 0; myIterator < mRasterStatsList.size(); ++myIterator)
  {
    //find out the name of this band
    QgsRasterBandStats myRasterBandStats = mRasterStatsList[myIterator];
    if (myRasterBandStats.bandName == theBandNameQString)
    {
      mTransparencyBandName = theBandNameQString;
      return;
    }
  }

  //if no matches were found default to not set
  mTransparencyBandName = tr("Not Set");
  return;
}


//mutator for gray band name
void QgsRasterLayer::setGrayBandName(QString const &  theBandNameQString)
{
  //check if the band is unset
  if (theBandNameQString == tr("Not Set"))
  {
    mGrayBandName = theBandNameQString;
    return;
  }
  //check if the image is paletted
  if (rasterLayerType == PALETTE && (theBandNameQString == mRedBandName || theBandNameQString == mGreenBandName || theBandNameQString == mBlueBandName))
  {
    mGrayBandName = theBandNameQString;
    return;
  }
  //otherwise check that a valid band name was passed

  for (int myIterator = 0; myIterator < mRasterStatsList.size(); ++myIterator)
  {
    //find out the name of this band
    QgsRasterBandStats myRasterBandStats = mRasterStatsList[myIterator];
    QgsDebugMsg("Checking if " + myRasterBandStats.bandName + " == " 
        + mGrayBandName);
    if (myRasterBandStats.bandName == theBandNameQString)
    {
      mGrayBandName = theBandNameQString;
      return;
    }
  }

  //if no matches were found default to not set
  mGrayBandName = tr("Not Set");
  return;
}

/** Return a pixmap representing a legend image. This is an overloaded
 * version of the method below and assumes false for the legend name flag.
 */
QPixmap QgsRasterLayer::getLegendQPixmap()
{
  return getLegendQPixmap(false);
}

/** Return a pixmap representing a legend image
 * @param theWithNameFlag - boolena flag whether to overlay the legend name in the text
 */
QPixmap QgsRasterLayer::getLegendQPixmap(bool theWithNameFlag)
{
  QgsDebugMsg("QgsRasterLayer::getLegendQPixmap called (" + getDrawingStyleAsQString() + ")");

  QPixmap myLegendQPixmap;      //will be initialised once we know what drawing style is active
  QPainter myQPainter; 


  if (!mProviderKey.isEmpty())
  {
    QgsDebugMsg("QgsRasterLayer::getLegendQPixmap called with provider Key (" + mProviderKey + ")");
    myLegendQPixmap = QPixmap(3, 1);
    myQPainter.begin(&myLegendQPixmap);
    //draw legend red part
    myQPainter.setPen(QPen(QColor(255,   0,   0, QColor::Rgb), 0));
    myQPainter.drawPoint(0, 0);
    //draw legend green part
    myQPainter.setPen(QPen(QColor(  0, 255,   0, QColor::Rgb), 0));
    myQPainter.drawPoint(1, 0);
    //draw legend blue part
    myQPainter.setPen(QPen(QColor(  0,   0, 255, QColor::Rgb), 0));
    myQPainter.drawPoint(2, 0);

  }
  else
  { 
    // Legacy GDAL (non-provider)

    //
    // Get the adjusted matrix stats
    //
    GDALRasterBand *myGdalBand = mGdalDataset->GetRasterBand(1);
    QString myColorerpretation = GDALGetColorInterpretationName(myGdalBand->GetColorInterpretation());



    //
    // Create the legend pixmap - note it is generated on the preadjusted stats
    //
    if (drawingStyle == MULTI_BAND_SINGLE_BAND_GRAY || drawingStyle == PALETTED_SINGLE_BAND_GRAY || drawingStyle == SINGLE_BAND_GRAY)
    {

      myLegendQPixmap = QPixmap(100, 1);
      myQPainter.begin(&myLegendQPixmap);
      int myPos = 0;
      for (double my = 0; my < 255; my += 2.55)
      {
        if (!mInvertPixelsFlag) //histogram is not inverted
        {
          //draw legend as grayscale
          int myGray = static_cast < int >(my);
          myQPainter.setPen(QPen(QColor(myGray, myGray, myGray, QColor::Rgb), 0));
        } else                //histogram is inverted
        {
          //draw legend as inverted grayscale
          int myGray = 255 - static_cast < int >(my);
          myQPainter.setPen(QPen(QColor(myGray, myGray, myGray, QColor::Rgb), 0));
        }                   //end of invert histogram  check
        myQPainter.drawPoint(myPos++, 0);
      }
    }                           //end of gray check
    else if (drawingStyle == MULTI_BAND_SINGLE_BAND_PSEUDO_COLOR ||
        drawingStyle == PALETTED_SINGLE_BAND_PSEUDO_COLOR || drawingStyle == SINGLE_BAND_PSEUDO_COLOR)
    {

      //set up the three class breaks for pseudocolour mapping
      double myRangeSize = 90;  //hard coded for now
      double myBreakSize = myRangeSize / 3;
      double myClassBreakMin1 = 0;
      double myClassBreakMax1 = myClassBreakMin1 + myBreakSize;
      double myClassBreakMin2 = myClassBreakMax1;
      double myClassBreakMax2 = myClassBreakMin2 + myBreakSize;
      double myClassBreakMin3 = myClassBreakMax2;

      //
      // Create the legend pixmap - note it is generated on the preadjusted stats
      //
      myLegendQPixmap = QPixmap(100, 1);
      myQPainter.begin(&myLegendQPixmap);
      int myPos = 0;
      for (double my = 0; my < myRangeSize; my += myRangeSize / 100.0)
      {
        //draw pseudocolor legend
        if (!mInvertPixelsFlag)
        {
          //check if we are in the first class break
          if ((my >= myClassBreakMin1) && (my < myClassBreakMax1))
          {
            int myRed = 0;
            int myBlue = 255;
            int myGreen = static_cast < int >(((255 / myRangeSize) * (my - myClassBreakMin1)) * 3);
            // testing this stuff still ...
            if (mColorShadingAlgorithm==FREAK_OUT)
            {
              myRed=255-myGreen;
            }
            myQPainter.setPen(QPen(QColor(myRed, myGreen, myBlue, QColor::Rgb), 0));
          }
          //check if we are in the second class break
          else if ((my >= myClassBreakMin2) && (my < myClassBreakMax2))
          {
            int myRed = static_cast < int >(((255 / myRangeSize) * ((my - myClassBreakMin2) / 1)) * 3);
            int myBlue = static_cast < int >(255 - (((255 / myRangeSize) * ((my - myClassBreakMin2) / 1)) * 3));
            int myGreen = 255;
            // testing this stuff still ...
            if (mColorShadingAlgorithm==FREAK_OUT)
            {
              myGreen=myBlue;
            }
            myQPainter.setPen(QPen(QColor(myRed, myGreen, myBlue, QColor::Rgb), 0));
          }
          //otherwise we must be in the third classbreak
          else
          {
            int myRed = 255;
            int myBlue = 0;
            int myGreen = static_cast < int >(255 - (((255 / myRangeSize) * ((my - myClassBreakMin3) / 1) * 3)));
            // testing this stuff still ...
            if (mColorShadingAlgorithm==FREAK_OUT)
            {
              myRed=myGreen;
              myGreen=255-myGreen;
            }
            myQPainter.setPen(QPen(QColor(myRed, myGreen, myBlue, QColor::Rgb), 0));
          }
        }                   //end of invert histogram == false check
        else                  //invert histogram toggle is off
        {
          //check if we are in the first class break
          if ((my >= myClassBreakMin1) && (my < myClassBreakMax1))
          {
            int myRed = 255;
            int myBlue = 0;
            int myGreen = static_cast < int >(((255 / myRangeSize) * ((my - myClassBreakMin1) / 1) * 3));
            // testing this stuff still ...
            if (mColorShadingAlgorithm==FREAK_OUT)
            {
              myRed=255-myGreen;
            }
            myQPainter.setPen(QPen(QColor(myRed, myGreen, myBlue, QColor::Rgb), 0));
          }
          //check if we are in the second class break
          else if ((my >= myClassBreakMin2) && (my < myClassBreakMax2))
          {
            int myRed = static_cast < int >(255 - (((255 / myRangeSize) * ((my - myClassBreakMin2) / 1)) * 3));
            int myBlue = static_cast < int >(((255 / myRangeSize) * ((my - myClassBreakMin2) / 1)) * 3);
            int myGreen = 255;
            // testing this stuff still ...
            if (mColorShadingAlgorithm==FREAK_OUT)
            {
              myGreen=myBlue;
            }
            myQPainter.setPen(QPen(QColor(myRed, myGreen, myBlue, QColor::Rgb), 0));
          }
          //otherwise we must be in the third classbreak
          else
          {
            int myRed = 0;
            int myBlue = 255;
            int myGreen = static_cast < int >(255 - (((255 / myRangeSize) * (my - myClassBreakMin3)) * 3));
            // testing this stuff still ...
            if (mColorShadingAlgorithm==FREAK_OUT)
            {
              myRed=255-myGreen;
            }
            myQPainter.setPen(QPen(QColor(myRed, myGreen, myBlue, QColor::Rgb), 0));
          }

        }                   //end of invert histogram check
        myQPainter.drawPoint(myPos++, 0);
      }

    }                           //end of pseudocolor check
    else if (drawingStyle == PALETTED_MULTI_BAND_COLOR || drawingStyle == MULTI_BAND_COLOR)
    {
      //
      // Create the legend pixmap showing red green and blue band mappings
      //
      // TODO update this so it actually shows the mappings for paletted images
      myLegendQPixmap = QPixmap(3, 1);
      myQPainter.begin(&myLegendQPixmap);
      //draw legend red part
      myQPainter.setPen(QPen(QColor(224, 103, 103, QColor::Rgb), 0));
      myQPainter.drawPoint(0, 0);
      //draw legend green part
      myQPainter.setPen(QPen(QColor(132, 224, 127, QColor::Rgb), 0));
      myQPainter.drawPoint(1, 0);
      //draw legend blue part
      myQPainter.setPen(QPen(QColor(127, 160, 224, QColor::Rgb), 0));
      myQPainter.drawPoint(2, 0);
    }
  }

  myQPainter.end();


  // see if the caller wants the name of the layer in the pixmap (used for legend bar)
  if (theWithNameFlag)
  {
    QFont myQFont("arial", 10, QFont::Normal);
    QFontMetrics myQFontMetrics(myQFont);

    int myHeight = (myQFontMetrics.height() + 10 > 35) ? myQFontMetrics.height() + 10 : 35;

    //create a matrix to
    QMatrix myQWMatrix;
    //scale the raster legend up a bit bigger to the legend item size
    //note that scaling parameters are factors, not absolute values,
    // so scale (0.25,1) scales the painter to a quarter of its size in the x direction
    //TODO We need to decide how much to scale by later especially for rgb images which are only 3x1 pix
    //hard coding thes values for now.
    if (myLegendQPixmap.width() == 3)
    {
      //scale width by factor of 50 (=150px wide)
      myQWMatrix.scale(60, myHeight);
    }
    else
    {
      //assume 100px so scale by factor of 1.5 (=150px wide)
      myQWMatrix.scale(1.8, myHeight);
    }
    //apply the matrix
    QPixmap myQPixmap2 = myLegendQPixmap.xForm(myQWMatrix);
    QPainter myQPainter(&myQPixmap2);

    //load  up the pyramid icons
    QString myThemePath = QgsApplication::themePath();
    QPixmap myPyramidPixmap(myThemePath + "/mIconPyramid.png");
    QPixmap myNoPyramidPixmap(myThemePath + "/mIconNoPyramid.png");

    //
    // Overlay a pyramid icon
    //
    if (hasPyramidsFlag)
    {
      myQPainter.drawPixmap(0,myHeight-myPyramidPixmap.height(),myPyramidPixmap);
    }
    else
    {
      myQPainter.drawPixmap(0,myHeight-myNoPyramidPixmap.height(),myNoPyramidPixmap);
    }
    //
    // Overlay the layername
    //
    if (drawingStyle == MULTI_BAND_SINGLE_BAND_GRAY || drawingStyle == PALETTED_SINGLE_BAND_GRAY || drawingStyle == SINGLE_BAND_GRAY)
    {
      myQPainter.setPen(Qt::white);
    }
    else
    {
      myQPainter.setPen(Qt::black);
    }
    myQPainter.setFont(myQFont);
    myQPainter.drawText(25, myHeight - 10, this->name());
    //
    // finish up
    //
    myLegendQPixmap = myQPixmap2;
    myQPainter.end();
  }
  //finish up

  return myLegendQPixmap;

}                               //end of getLegendQPixmap function


QPixmap QgsRasterLayer::getDetailedLegendQPixmap(int theLabelCount=3)
{
  QgsDebugMsg("QgsRasterLayer::getDetailedLegendQPixmap called");
  QFont myQFont("arial", 10, QFont::Normal);
  QFontMetrics myQFontMetrics(myQFont);

  int myFontHeight = (myQFontMetrics.height() );
  const int myerLabelSpacing = 5;
  int myImageHeight = ((myFontHeight + (myerLabelSpacing*2)) * theLabelCount);
  //these next two vars are not used anywhere so commented out for now
  //int myLongestLabelWidth =  myQFontMetrics.width(this->name());
  //const int myHorizontalLabelSpacing = 5;
  const int myColourBarWidth = 10;
  //
  // Get the adjusted matrix stats
  //
  GDALRasterBand *myGdalBand = mGdalDataset->GetRasterBand(1);
  QString myColorerpretation = GDALGetColorInterpretationName(myGdalBand->GetColorInterpretation());
  QPixmap myLegendQPixmap;      //will be initialised once we know what drawing style is active
  QPainter myQPainter;
  //
  // Create the legend pixmap - note it is generated on the preadjusted stats
  //
  if (drawingStyle == MULTI_BAND_SINGLE_BAND_GRAY || drawingStyle == PALETTED_SINGLE_BAND_GRAY || drawingStyle == SINGLE_BAND_GRAY)
  {

    myLegendQPixmap = QPixmap(1, myImageHeight);
    const double myIncrement = static_cast<double>(myImageHeight)/255.0;
    myQPainter.begin(&myLegendQPixmap);
    int myPos = 0;
    for (double my = 0; my < 255; my += myIncrement)
    {
      if (!mInvertPixelsFlag) //histogram is not inverted
      {
        //draw legend as grayscale
        int myGray = static_cast < int >(my);
        myQPainter.setPen(QPen(QColor(myGray, myGray, myGray, QColor::Rgb), 0));
      } else                //histogram is inverted
      {
        //draw legend as inverted grayscale
        int myGray = 255 - static_cast < int >(my);
        myQPainter.setPen(QPen(QColor(myGray, myGray, myGray, QColor::Rgb), 0));
      }                   //end of invert histogram  check
      myQPainter.drawPoint(0,myPos++);
    }
  }                           //end of gray check
  else if (drawingStyle == MULTI_BAND_SINGLE_BAND_PSEUDO_COLOR ||
      drawingStyle == PALETTED_SINGLE_BAND_PSEUDO_COLOR || drawingStyle == SINGLE_BAND_PSEUDO_COLOR)
  {

    //set up the three class breaks for pseudocolour mapping
    double myRangeSize = 90;  //hard coded for now
    double myBreakSize = myRangeSize / 3;
    double myClassBreakMin1 = 0;
    double myClassBreakMax1 = myClassBreakMin1 + myBreakSize;
    double myClassBreakMin2 = myClassBreakMax1;
    double myClassBreakMax2 = myClassBreakMin2 + myBreakSize;
    double myClassBreakMin3 = myClassBreakMax2;

    //
    // Create the legend pixmap - note it is generated on the preadjusted stats
    //
    myLegendQPixmap = QPixmap(1, myImageHeight);
    const double myIncrement = myImageHeight/myRangeSize;
    myQPainter.begin(&myLegendQPixmap);
    int myPos = 0;
    for (double my = 0; my < 255; my += myIncrement)
      for (double my = 0; my < myRangeSize; my +=myIncrement)
      {
        //draw pseudocolor legend
        if (!mInvertPixelsFlag)
        {
          //check if we are in the first class break
          if ((my >= myClassBreakMin1) && (my < myClassBreakMax1))
          {
            int myRed = 0;
            int myBlue = 255;
            int myGreen = static_cast < int >(((255 / myRangeSize) * (my - myClassBreakMin1)) * 3);
            // testing this stuff still ...
            if (mColorShadingAlgorithm==FREAK_OUT)
            {
              myRed=255-myGreen;
            }
            myQPainter.setPen(QPen(QColor(myRed, myGreen, myBlue, QColor::Rgb), 0));
          }
          //check if we are in the second class break
          else if ((my >= myClassBreakMin2) && (my < myClassBreakMax2))
          {
            int myRed = static_cast < int >(((255 / myRangeSize) * ((my - myClassBreakMin2) / 1)) * 3);
            int myBlue = static_cast < int >(255 - (((255 / myRangeSize) * ((my - myClassBreakMin2) / 1)) * 3));
            int myGreen = 255;
            // testing this stuff still ...
            if (mColorShadingAlgorithm==FREAK_OUT)
            {
              myGreen=myBlue;
            }
            myQPainter.setPen(QPen(QColor(myRed, myGreen, myBlue, QColor::Rgb), 0));
          }
          //otherwise we must be in the third classbreak
          else
          {
            int myRed = 255;
            int myBlue = 0;
            int myGreen = static_cast < int >(255 - (((255 / myRangeSize) * ((my - myClassBreakMin3) / 1) * 3)));
            // testing this stuff still ...
            if (mColorShadingAlgorithm==FREAK_OUT)
            {
              myRed=myGreen;
              myGreen=255-myGreen;
            }
            myQPainter.setPen(QPen(QColor(myRed, myGreen, myBlue, QColor::Rgb), 0));
          }
        }                   //end of invert histogram == false check
        else                  //invert histogram toggle is off
        {
          //check if we are in the first class break
          if ((my >= myClassBreakMin1) && (my < myClassBreakMax1))
          {
            int myRed = 255;
            int myBlue = 0;
            int myGreen = static_cast < int >(((255 / myRangeSize) * ((my - myClassBreakMin1) / 1) * 3));
            // testing this stuff still ...
            if (mColorShadingAlgorithm==FREAK_OUT)
            {
              myRed=255-myGreen;
            }
            myQPainter.setPen(QPen(QColor(myRed, myGreen, myBlue, QColor::Rgb), 0));
          }
          //check if we are in the second class break
          else if ((my >= myClassBreakMin2) && (my < myClassBreakMax2))
          {
            int myRed = static_cast < int >(255 - (((255 / myRangeSize) * ((my - myClassBreakMin2) / 1)) * 3));
            int myBlue = static_cast < int >(((255 / myRangeSize) * ((my - myClassBreakMin2) / 1)) * 3);
            int myGreen = 255;
            // testing this stuff still ...
            if (mColorShadingAlgorithm==FREAK_OUT)
            {
              myGreen=myBlue;
            }
            myQPainter.setPen(QPen(QColor(myRed, myGreen, myBlue, QColor::Rgb), 0));
          }
          //otherwise we must be in the third classbreak
          else
          {
            int myRed = 0;
            int myBlue = 255;
            int myGreen = static_cast < int >(255 - (((255 / myRangeSize) * (my - myClassBreakMin3)) * 3));
            // testing this stuff still ...
            if (mColorShadingAlgorithm==FREAK_OUT)
            {
              myRed=255-myGreen;
            }
            myQPainter.setPen(QPen(QColor(myRed, myGreen, myBlue, QColor::Rgb), 0));
          }

        }                   //end of invert histogram check
        myQPainter.drawPoint(0,myPos++);
      }

  }                           //end of pseudocolor check
  else if (drawingStyle == PALETTED_MULTI_BAND_COLOR || drawingStyle == MULTI_BAND_COLOR)
  {
    //
    // Create the legend pixmap showing red green and blue band mappings
    //
    // TODO update this so it actually shows the mappings for paletted images
    myLegendQPixmap = QPixmap(1, 3);
    myQPainter.begin(&myLegendQPixmap);
    //draw legend red part
    myQPainter.setPen(QPen(QColor(224, 103, 103, QColor::Rgb), 0));
    myQPainter.drawPoint(0, 0);
    //draw legend green part
    myQPainter.setPen(QPen(QColor(132, 224, 127, QColor::Rgb), 0));
    myQPainter.drawPoint(0,1);
    //draw legend blue part
    myQPainter.setPen(QPen(QColor(127, 160, 224, QColor::Rgb), 0));
    myQPainter.drawPoint(0,2);
  }


  myQPainter.end();



  //create a matrix to
  QMatrix myQWMatrix;
  //scale the raster legend up a bit bigger to the legend item size
  //note that scaling parameters are factors, not absolute values,
  // so scale (0.25,1) scales the painter to a quarter of its size in the x direction
  //TODO We need to decide how much to scale by later especially for rgb images which are only 3x1 pix
  //hard coding thes values for now.
  if (myLegendQPixmap.height() == 3)
  {
    myQWMatrix.scale(myColourBarWidth,2);
  }
  else
  {
    myQWMatrix.scale(myColourBarWidth,2);
  }
  //apply the matrix
  QPixmap myQPixmap2 = myLegendQPixmap.xForm(myQWMatrix);
  QPainter myQPainter2(&myQPixmap2);
  //
  // Overlay the layername
  //
  if (drawingStyle == MULTI_BAND_SINGLE_BAND_GRAY || drawingStyle == PALETTED_SINGLE_BAND_GRAY || drawingStyle == SINGLE_BAND_GRAY)
  {
    myQPainter2.setPen(Qt::white);
  }
  else
  {
    myQPainter2.setPen(Qt::black);
  }
  myQPainter2.setFont(myQFont);
  myQPainter2.drawText(25, myImageHeight - 10, this->name());
  //
  // finish up
  //
  myLegendQPixmap = myQPixmap2;
  myQPainter2.end();
  //finish up

  return myLegendQPixmap;

}//end of getDetailedLegend

// Useful for Provider mode

QStringList QgsRasterLayer::subLayers() const
{

  if (mDataProvider)
  {
    return mDataProvider->subLayers();
  }
  else
  {
    return QStringList();   // Empty
  }

}


// Useful for Provider mode

void QgsRasterLayer::setLayerOrder(QStringList const & layers)
{
  QgsDebugMsg("QgsRasterLayer::setLayerOrder: Entered.");

  if (mDataProvider)
  {
    QgsDebugMsg("QgsRasterLayer::setLayerOrder: About to mDataProvider->setLayerOrder(layers).");
    mDataProvider->setLayerOrder(layers);
  }

}

// Useful for Provider mode

void QgsRasterLayer::setSubLayerVisibility(QString const &  name, bool vis)
{

  if (mDataProvider)
  {
    QgsDebugMsg("QgsRasterLayer::setSubLayerVisibility: About to mDataProvider->setSubLayerVisibility(name, vis).");
    mDataProvider->setSubLayerVisibility(name, vis);
  }

}


void QgsRasterLayer::updateProgress(int theProgress, int theMax)
{
  //simply propogate it on!
  emit drawingProgress (theProgress,theMax);
}



// convenience function for building getMetadata() HTML table cells
static
  QString
makeTableCell_( QString const & value )
{
  return "<td>" + value + "</td>";
} // makeTableCell_



// convenience function for building getMetadata() HTML table cells
static
  QString
makeTableCells_( QStringList const & values )
{
  QString s( "<tr>" );

  for ( QStringList::const_iterator i = values.begin();
      i != values.end();
      ++i )
  {
    s += makeTableCell_( *i );
  }

  s += "</tr>";

  return s;
} // makeTableCell_



// convenience function for creating a string list from a C style string list
static
  QStringList
cStringList2Q_( char ** stringList )
{
  QStringList strings;

  // presume null terminated string list
  for ( size_t i = 0; stringList[i]; ++i )
  {
    strings.append( stringList[i] );
  }

  return strings;

} // cStringList2Q_




QString QgsRasterLayer::getMetadata()
{
  QString myMetadataQString ;
  myMetadataQString += "<table class=\"wide\">";
  myMetadataQString += "<tr><td class=\"glossy\">";
  myMetadataQString += tr("Driver:");
  myMetadataQString += "</td></tr>";
  myMetadataQString += "<tr><td>";
  if (mProviderKey.isEmpty())
  {
    myMetadataQString += QString(mGdalDataset->GetDriver()->GetDescription());
    myMetadataQString += "<br>";
    myMetadataQString += QString(mGdalDataset->GetDriver()->GetMetadataItem(GDAL_DMD_LONGNAME));
  }
  else
  {
    myMetadataQString += mDataProvider->description();
  }
  myMetadataQString += "</td></tr>";

  if (!mProviderKey.isEmpty())
  {
    // Insert provider-specific (e.g. WMS-specific) metadata
    myMetadataQString += mDataProvider->getMetadata();
  }
  else
  {

    // my added code (MColetti)

    myMetadataQString += "<tr><td class=\"glossy\">";
    myMetadataQString += tr("Dataset Description");
    myMetadataQString += "</td></tr>";
    myMetadataQString += "<tr><td>";
    myMetadataQString += QFile::decodeName(mGdalDataset->GetDescription());
    myMetadataQString += "</td></tr>";


    char ** GDALmetadata = mGdalDataset->GetMetadata();

    if ( GDALmetadata )
    {
      QStringList metadata = cStringList2Q_( GDALmetadata );
      myMetadataQString += makeTableCells_( metadata ); 
    }
    else
    {
      QgsDebugMsg("dataset has no metadata");
    }

    for ( int i = 1; i <= mGdalDataset->GetRasterCount(); ++i )
    {
      mGdalDataset->GetRasterBand(i)->GetMetadata();

      if ( GDALmetadata )
      {
        QStringList metadata = cStringList2Q_( GDALmetadata );
        myMetadataQString += makeTableCells_( metadata ); 
      }
      else
      {
        QgsDebugMsg("band " + QString::number(i) + "has no metadata"); 
      }

      char ** GDALcategories = mGdalDataset->GetRasterBand(i)->GetCategoryNames();

      if ( GDALcategories )
      {
        QStringList categories = cStringList2Q_( GDALcategories );
        myMetadataQString += makeTableCells_( categories ); 
      }
      else
      {
        QgsDebugMsg("band " + QString::number(i) + " has no categories");
      }

    }

    // end my added code

    myMetadataQString += "<tr><td class=\"glossy\">";
    myMetadataQString += tr("Dimensions:");
    myMetadataQString += "</td></tr>";
    myMetadataQString += "<tr><td>";
    myMetadataQString += tr("X: ") + QString::number(mGdalDataset->GetRasterXSize()) +
      tr(" Y: ") + QString::number(mGdalDataset->GetRasterYSize()) + tr(" Bands: ") + QString::number(mGdalDataset->GetRasterCount());
    myMetadataQString += "</td></tr>";

    //just use the first band
    GDALRasterBand *myGdalBand = mGdalDataset->GetRasterBand(1);

    myMetadataQString += "<tr><td class=\"glossy\">";
    myMetadataQString += tr("No Data Value");
    myMetadataQString += "</td></tr>";
    myMetadataQString += "<tr><td>";
    if(mValidNoDataValue)
    {
      myMetadataQString += QString::number(mNoDataValue);
    }
    else
    {
      myMetadataQString += "*" + tr("NoDataValue not set") + "*";
    }
    myMetadataQString += "</td></tr>";

    myMetadataQString += "</td></tr>";
    myMetadataQString += "<tr><td class=\"glossy\">";
    myMetadataQString += tr("Data Type:");
    myMetadataQString += "</td></tr>";
    myMetadataQString += "<tr><td>";
    switch (myGdalBand->GetRasterDataType())
    {
      case GDT_Byte:
        myMetadataQString += tr("GDT_Byte - Eight bit unsigned integer");
        break;
      case GDT_UInt16:
        myMetadataQString += tr("GDT_UInt16 - Sixteen bit unsigned integer ");
        break;
      case GDT_Int16:
        myMetadataQString += tr("GDT_Int16 - Sixteen bit signed integer ");
        break;
      case GDT_UInt32:
        myMetadataQString += tr("GDT_UInt32 - Thirty two bit unsigned integer ");
        break;
      case GDT_Int32:
        myMetadataQString += tr("GDT_Int32 - Thirty two bit signed integer ");
        break;
      case GDT_Float32:
        myMetadataQString += tr("GDT_Float32 - Thirty two bit floating point ");
        break;
      case GDT_Float64:
        myMetadataQString += tr("GDT_Float64 - Sixty four bit floating point ");
        break;
      case GDT_CInt16:
        myMetadataQString += tr("GDT_CInt16 - Complex Int16 ");
        break;
      case GDT_CInt32:
        myMetadataQString += tr("GDT_CInt32 - Complex Int32 ");
        break;
      case GDT_CFloat32:
        myMetadataQString += tr("GDT_CFloat32 - Complex Float32 ");
        break;
      case GDT_CFloat64:
        myMetadataQString += tr("GDT_CFloat64 - Complex Float64 ");
        break;
      default:
        myMetadataQString += tr("Could not determine raster data type.");
    }
    myMetadataQString += "</td></tr>";

    myMetadataQString += "<tr><td class=\"glossy\">";
    myMetadataQString += tr("Pyramid overviews:");
    myMetadataQString += "</td></tr>";
    myMetadataQString += "<tr><td>";

    if( GDALGetOverviewCount(myGdalBand) > 0 )
    {
      int myOverviewInt;
      for( myOverviewInt = 0;
          myOverviewInt < GDALGetOverviewCount(myGdalBand);
          myOverviewInt++ )
      {
        GDALRasterBandH myOverview;
        myOverview = GDALGetOverview( myGdalBand, myOverviewInt );
        myMetadataQString += "<p>X : " + QString::number(GDALGetRasterBandXSize( myOverview ));
        myMetadataQString += ",Y " + QString::number(GDALGetRasterBandYSize( myOverview ) ) + "</p>";
      }
    }
    myMetadataQString += "</td></tr>";
  }  // if (mProviderKey.isEmpty())

  myMetadataQString += "<tr><td class=\"glossy\">";
  myMetadataQString += tr("Layer Spatial Reference System: ");
  myMetadataQString += "</td></tr>";
  myMetadataQString += "<tr><td>";
  myMetadataQString += mSRS->proj4String();
  myMetadataQString += "</td></tr>";

  // output coordinate system
  // TODO: this is not related to layer, to be removed? [MD]
  /*  
      myMetadataQString += "<tr><td class=\"glossy\">";
      myMetadataQString += tr("Project Spatial Reference System: ");
      myMetadataQString += "</td></tr>";
      myMetadataQString += "<tr><td>";
      myMetadataQString +=  mCoordinateTransform->destSRS().proj4String();
      myMetadataQString += "</td></tr>";
      */

  if (mProviderKey.isEmpty())
  {
    if (mGdalDataset->GetGeoTransform(mGeoTransform) != CE_None)
    {
      // if the raster does not have a valid transform we need to use
      // a pixel size of (1,-1), but GDAL returns (1,1)
      mGeoTransform[5] = -1;
    }
    else
    {
      myMetadataQString += "<tr><td class=\"glossy\">";
      myMetadataQString += tr("Origin:");
      myMetadataQString += "</td></tr>";
      myMetadataQString += "<tr><td>";
      myMetadataQString += QString::number(mGeoTransform[0]);
      myMetadataQString += ",";
      myMetadataQString += QString::number(mGeoTransform[3]);
      myMetadataQString += "</td></tr>";

      myMetadataQString += "<tr><td class=\"glossy\">";
      myMetadataQString += tr("Pixel Size:");
      myMetadataQString += "</td></tr>";
      myMetadataQString += "<tr><td>";
      myMetadataQString += QString::number(mGeoTransform[1]);
      myMetadataQString += ",";
      myMetadataQString += QString::number(mGeoTransform[5]);
      myMetadataQString += "</td></tr>";
    }

    //
    // Add the stats for each band to the output table
    //
    myMetadataQString += "<tr><td>";

    // Start a nested table in this trow
    myMetadataQString += "<table class=\"wide\">";
    myMetadataQString += "<tr><td class=\"glossy\">";
    myMetadataQString += tr("Property") ;
    myMetadataQString += "</td>";
    myMetadataQString += "<td class=\"glossy\">";
    myMetadataQString += tr("Value");
    myMetadataQString += "</th><tr>";

    int myBandCountInt = getBandCount();
    for (int myIteratorInt = 1; myIteratorInt <= myBandCountInt; ++myIteratorInt)
    {
      QgsDebugMsg("Raster properties : checking if band " + QString::number(myIteratorInt) + " has stats? ");
      //band name
      myMetadataQString += "<tr><td class=\"cellHeader\">";
      myMetadataQString += tr("Band");
      myMetadataQString += "</td>";
      myMetadataQString += "<td class=\"cellHeader\">";
      myMetadataQString += getRasterBandName(myIteratorInt);
      myMetadataQString += "</td></tr>";
      //band number
      myMetadataQString += "<tr><td>";
      myMetadataQString += tr("Band No");
      myMetadataQString += "</td>";
      myMetadataQString += "<td>";
      myMetadataQString += QString::number(myIteratorInt);
      myMetadataQString += "</td></tr>";

      //check if full stats for this layer have already been collected
      if (!hasStats(myIteratorInt))  //not collected
      {
        QgsDebugMsg(".....no");

        myMetadataQString += "<tr><td>";
        myMetadataQString += tr("No Stats");
        myMetadataQString += "</td>";
        myMetadataQString += "<td>";
        myMetadataQString += tr("No stats collected yet");
        myMetadataQString += "</td></tr>";
      }
      else                    // collected - show full detail
      {
        QgsDebugMsg(".....yes");

        QgsRasterBandStats myRasterBandStats = getRasterBandStats(myIteratorInt);
        //Min Val
        myMetadataQString += "<tr><td>";
        myMetadataQString += tr("Min Val");
        myMetadataQString += "</td>";
        myMetadataQString += "<td>";
        myMetadataQString += QString::number(myRasterBandStats.minVal, 'f',10);
        myMetadataQString += "</td></tr>";

        // Max Val
        myMetadataQString += "<tr><td>";
        myMetadataQString += tr("Max Val");
        myMetadataQString += "</td>";
        myMetadataQString += "<td>";
        myMetadataQString += QString::number(myRasterBandStats.maxVal, 'f',10);
        myMetadataQString += "</td></tr>";

        // Range
        myMetadataQString += "<tr><td>";
        myMetadataQString += tr("Range");
        myMetadataQString += "</td>";
        myMetadataQString += "<td>";
        myMetadataQString += QString::number(myRasterBandStats.range, 'f',10);
        myMetadataQString += "</td></tr>";

        // Mean
        myMetadataQString += "<tr><td>";
        myMetadataQString += tr("Mean");
        myMetadataQString += "</td>";
        myMetadataQString += "<td>";
        myMetadataQString += QString::number(myRasterBandStats.mean, 'f',10);
        myMetadataQString += "</td></tr>";

        //sum of squares
        myMetadataQString += "<tr><td>";
        myMetadataQString += tr("Sum of squares");
        myMetadataQString += "</td>";
        myMetadataQString += "<td>";
        myMetadataQString += QString::number(myRasterBandStats.sumSqrDev, 'f',10);
        myMetadataQString += "</td></tr>";

        //standard deviation
        myMetadataQString += "<tr><td>";
        myMetadataQString += tr("Standard Deviation");
        myMetadataQString += "</td>";
        myMetadataQString += "<td>";
        myMetadataQString += QString::number(myRasterBandStats.stdDev, 'f',10);
        myMetadataQString += "</td></tr>";

        //sum of all cells
        myMetadataQString += "<tr><td>";
        myMetadataQString += tr("Sum of all cells");
        myMetadataQString += "</td>";
        myMetadataQString += "<td>";
        myMetadataQString += QString::number(myRasterBandStats.sum, 'f',10);
        myMetadataQString += "</td></tr>";

        //number of cells
        myMetadataQString += "<tr><td>";
        myMetadataQString += tr("Cell Count");
        myMetadataQString += "</td>";
        myMetadataQString += "<td>";
        myMetadataQString += QString::number(myRasterBandStats.elementCount);
        myMetadataQString += "</td></tr>";
      }
    }
    myMetadataQString += "</table>"; //end of nested table
    myMetadataQString += "</td></tr>"; //end of stats container table row
  } // if (mProviderKey.isEmpty())

  //
  // Close the table
  //

  myMetadataQString += "</table>";
  return myMetadataQString;
}

QString QgsRasterLayer::buildPyramids(RasterPyramidList const & theRasterPyramidList, 
    QString const & theResamplingMethod)
{
  emit drawingProgress(0,0);
  //first test if the file is writeable
  QFileInfo myQFile(mDataSource);

  if (!myQFile.isWritable())
  {
    return "ERROR_WRITE_ACCESS";
  }

  if( mGdalDataset != mGdalBaseDataset )
  {
    QgsLogger::warning("Pyramid building not currently supported for 'warped virtual dataset'.");
    return "ERROR_VIRTUAL";
  }

  registerGdalDrivers();

  //close the gdal dataset and reopen it in read / write mode
  delete mGdalDataset;
  mGdalDataset = (GDALDataset *) GDALOpen(QFile::encodeName(mDataSource).constData(), GA_Update);

  // if the dataset couldn't be opened in read / write mode, tell the user
  if (!mGdalDataset)
  {
    emit drawingProgress(0,0);
    mGdalDataset = (GDALDataset *) GDALOpen(QFile::encodeName(mDataSource).constData(), GA_ReadOnly);
    return "ERROR_WRITE_FORMAT";
  }

  //
  // Iterate through the Raster Layer Pyramid Vector, building any pyramid
  // marked as exists in eaxh RasterPyramid struct.
  //
  CPLErr myError; //in case anything fails
  int myCount=1;
  int myTotal=theRasterPyramidList.count();
  RasterPyramidList::const_iterator myRasterPyramidIterator;
  for ( myRasterPyramidIterator = theRasterPyramidList.begin();
      myRasterPyramidIterator != theRasterPyramidList.end();
      ++myRasterPyramidIterator )
  {
#ifdef QGISDEBUG
    QgsLogger::debug("Build pyramids:: Level", (*myRasterPyramidIterator).level, 1, __FILE__, __FUNCTION__, __LINE__);
    QgsLogger::debug("x", (*myRasterPyramidIterator).xDim, 1, __FILE__, __FUNCTION__, __LINE__);
    QgsLogger::debug("y", (*myRasterPyramidIterator).yDim, 1, __FILE__, __FUNCTION__, __LINE__);
    QgsLogger::debug("exists :", (*myRasterPyramidIterator).existsFlag,  1, __FILE__, __FUNCTION__, __LINE__);
#endif
    if ((*myRasterPyramidIterator).existsFlag)
    {
      QgsDebugMsg("Building.....");
      emit drawingProgress(myCount,myTotal);
      int myOverviewLevelsArray[1] = {(*myRasterPyramidIterator).level };
      /* From : http://remotesensing.org/gdal/classGDALDataset.html#a23
       * pszResampling : one of "NEAREST", "AVERAGE" or "MODE" controlling the downsampling method applied.
       * nOverviews : number of overviews to build.
       * panOverviewList : the list of overview decimation factors to build.
       * nBand : number of bands to build overviews for in panBandList. Build for all bands if this is 0.
       * panBandList : list of band numbers.
       * pfnProgress : a function to call to report progress, or NULL.
       * pProgressData : application data to pass to the progress function.
       */
      //build the pyramid and show progress to console
      try 
      {

        //build the pyramid and show progress to console
        //NOTE this (magphase) is disabled in teh gui since it tends
        //to create corrupted images. The images can be repaired
        //by running one of the other resampling strategies below.
        //see ticket #284
        if(theResamplingMethod==tr("Average Magphase"))
        {
          myError = mGdalDataset->BuildOverviews( "MODE", 1, myOverviewLevelsArray, 0, NULL,
              GDALDummyProgress, NULL );
        }
        else if(theResamplingMethod==tr("Average"))

        {
          myError = mGdalDataset->BuildOverviews( "AVERAGE", 1, myOverviewLevelsArray, 0, NULL,
              GDALDummyProgress, NULL );
        }
        else // fall back to nearest neighbor
        {
          myError = mGdalDataset->BuildOverviews( "NEAREST", 1, myOverviewLevelsArray, 0, NULL,
              GDALDummyProgress, NULL );
        }
        if (myError == CE_Failure || CPLGetLastErrorNo()==CPLE_NotSupported  )
        {
          //something bad happenend
          //QString myString = QString (CPLGetLastError());
          delete mGdalDataset;
          mGdalDataset = (GDALDataset *) GDALOpen(QFile::encodeName(mDataSource).constData(), GA_ReadOnly);
          emit drawingProgress(0,0);
          return "FAILED_NOT_SUPPORTED";
        }
        myCount++;
        //make sure the raster knows it has pyramids
        hasPyramidsFlag=true;
      }
      catch (CPLErr)
      {
        QgsLogger::warning("Pyramid overview building failed!");
      }
    }
  }
  QgsDebugMsg("Pyramid overviews built");
  //close the gdal dataset and reopen it in read only mode
  delete mGdalDataset;
  mGdalDataset = (GDALDataset *) GDALOpen(QFile::encodeName(mDataSource).constData(), GA_ReadOnly);
  emit drawingProgress(0,0);
  return NULL; // returning null on success
}

QgsRasterLayer::RasterPyramidList  QgsRasterLayer::buildRasterPyramidList()
{
  //
  // First we build up a list of potential pyramid layers
  //
  int myWidth=mRasterXDim;
  int myHeight=mRasterYDim;
  int myDivisor=2;
  GDALRasterBandH myGDALBand = GDALGetRasterBand( mGdalDataset, 1 ); //just use the first band

  mPyramidList.clear();
  QgsDebugMsg("Building initial pyramid list");
  while((myWidth/myDivisor > 32) && ((myHeight/myDivisor)>32))
  {

    QgsRasterPyramid myRasterPyramid;
    myRasterPyramid.level=myDivisor;
    myRasterPyramid.xDim = (int)(0.5 + (myWidth/(double)myDivisor));
    myRasterPyramid.yDim = (int)(0.5 + (myHeight/(double)myDivisor));
    myRasterPyramid.existsFlag=false;
#ifdef QGISDEBUG
    QgsLogger::debug("Pyramid", myRasterPyramid.level, 1, __FILE__, __FUNCTION__, __LINE__);
    QgsLogger::debug("xDim", myRasterPyramid.xDim, 1, __FILE__, __FUNCTION__, __LINE__);
    QgsLogger::debug("yDim", myRasterPyramid.yDim, 1, __FILE__, __FUNCTION__, __LINE__);
#endif




    //
    // Now we check if it actually exists in the raster layer
    // and also adjust the dimensions if the dimensions calculated
    // above are only a near match.
    //
    const int myNearMatchLimit=5;
    if( GDALGetOverviewCount(myGDALBand) > 0 )
    {
      int myOverviewCount;
      for( myOverviewCount = 0;
          myOverviewCount < GDALGetOverviewCount(myGDALBand);
          ++myOverviewCount)
      {
        GDALRasterBandH myOverview;
        myOverview = GDALGetOverview( myGDALBand, myOverviewCount );
        int myOverviewXDim = GDALGetRasterBandXSize( myOverview );
        int myOverviewYDim = GDALGetRasterBandYSize( myOverview );
        //
        // here is where we check if its a near match:
        // we will see if its within 5 cells either side of
        //
        QgsDebugMsg("Checking whether " + QString::number(myRasterPyramid.xDim) + " x " +\
            QString::number(myRasterPyramid.yDim) + " matches "+\
            QString::number(myOverviewXDim) + " x " + QString::number(myOverviewYDim));


        if ((myOverviewXDim <= (myRasterPyramid.xDim+ myNearMatchLimit)) &&
            (myOverviewXDim >= (myRasterPyramid.xDim- myNearMatchLimit)) &&
            (myOverviewYDim <= (myRasterPyramid.yDim+ myNearMatchLimit)) &&
            (myOverviewYDim >= (myRasterPyramid.yDim- myNearMatchLimit)))
        {
          //right we have a match so adjust the a / y before they get added to the list
          myRasterPyramid.xDim=myOverviewXDim;
          myRasterPyramid.yDim=myOverviewYDim;
          myRasterPyramid.existsFlag=true;
          QgsDebugMsg(".....YES!");
        }
        else
        {
          //no match
          QgsDebugMsg(".....no.");
        }
      }
    }
    mPyramidList.append(myRasterPyramid);
    //sqare the divisor each step
    myDivisor=(myDivisor *2);
  }

  return mPyramidList;
}


bool QgsRasterLayer::isEditable() const
{
  return false;
}




void QgsRasterLayer::readColorTable ( GDALRasterBand *gdalBand, QgsColorTable *theColorTable )
{
  QgsDebugMsg("QgsRasterLayer::readColorTable()");

  // First try to read color table from metadata
  char **metadata = gdalBand->GetMetadata();
  theColorTable->clear();
  bool found = false;
  while ( metadata && metadata[0] )
  {
    QStringList metadataTokens = QStringList::split("=", *metadata );

    if (metadataTokens.count() < 2 ) continue;

    if ( metadataTokens[0].contains("COLOR_TABLE_RULE_RGB_") )
    {
      double min, max;
      int min_c1, min_c2, min_c3, max_c1, max_c2, max_c3;

      if ( sscanf(metadataTokens[1].toLocal8Bit().data(), "%lf %lf %d %d %d %d %d %d",
            &min, &max, &min_c1, &min_c2, &min_c3, &max_c1, &max_c2, &max_c3) != 8 )
      {
        continue;
      }
      theColorTable->add ( min, max,
          (unsigned char)min_c1, (unsigned char)min_c2, (unsigned char)min_c3, 0,
          (unsigned char)max_c1, (unsigned char)max_c2, (unsigned char)max_c3, 0 );
      found = true;
    }
    ++metadata;
  }
  theColorTable->sort();

  // If no color table was found, try to read it from GDALColorTable
  if ( !found )
  {
    GDALColorTable *gdalColorTable = gdalBand->GetColorTable();

    if ( gdalColorTable )
    {
      int count = gdalColorTable->GetColorEntryCount();

      for ( int i = 0; i < count; i++ )
      {
        const GDALColorEntry *colorEntry = gdalColorTable->GetColorEntry ( i );

        if ( !colorEntry ) continue;

        theColorTable->add ( i, (unsigned char) colorEntry->c1, (unsigned char) colorEntry->c2,
            (unsigned char) colorEntry->c3 );
      }
    }
  }

#ifdef QGISDEBUG
  theColorTable->print();
#endif
}


QgsColorTable *QgsRasterLayer::colorTable ( int theBandNo )
{
  return &(mRasterStatsList[theBandNo-1].colorTable);
}


void *QgsRasterLayer::readData ( GDALRasterBand *gdalBand, QgsRasterViewPort *viewPort )
{
  GDALDataType type = gdalBand->GetRasterDataType();
  int size = GDALGetDataTypeSize ( type ) / 8;

  QgsDebugMsg("QgsRasterLayer::readData: calling RasterIO with " +\
      QString(", source NW corner: ") + QString::number(viewPort->rectXOffset)+\
      ", " + QString::number(viewPort->rectYOffset)+\
      ", source size: " + QString::number(viewPort->clippedWidth)+\
      ", " + QString::number(viewPort->clippedHeight)+\
      ", dest size: " + QString::number(viewPort->drawableAreaXDim)+\
      ", " + QString::number(viewPort->drawableAreaYDim));

  void *data = VSIMalloc ( size * viewPort->drawableAreaXDim * viewPort->drawableAreaYDim );
  
  /* Abort if out of memory */
  if (data == NULL) 
  {
    QgsDebugMsg("Layer " + this->name() + " couldn't allocate enough memory. Ignoring");
  }
  else
  {
    CPLErr myErr = gdalBand->RasterIO ( GF_Read,
                                        viewPort->rectXOffset,
                                        viewPort->rectYOffset,
                                        viewPort->clippedWidth,
                                        viewPort->clippedHeight,
                                        data,
                                        viewPort->drawableAreaXDim,
                                        viewPort->drawableAreaYDim,
                                        type, 0, 0 );
    if (myErr != CPLE_None)
    {
      QgsLogger::warning("RaterIO error: " + QString(CPLGetLastErrorMsg()));
    }
  }
  return data;
}


double QgsRasterLayer::readValue ( void *data, GDALDataType type, int index )
{
  double val;

  switch ( type )
  {
    case GDT_Byte:
      return (double) ((GByte *)data)[index];
      break;
    case GDT_UInt16:
      return (double) ((GUInt16 *)data)[index];
      break;
    case GDT_Int16:
      return (double) ((GInt16 *)data)[index];
      break;
    case GDT_UInt32:
      return (double) ((GUInt32 *)data)[index];
      break;
    case GDT_Int32:
      return (double) ((GInt32 *)data)[index];
      break;
    case GDT_Float32:
      return (double) ((float *)data)[index];
      break;
    case GDT_Float64:
      val = ((double *)data)[index];
      return (double) ((double *)data)[index];
      break;
    default:
      QgsLogger::warning("GDAL data type is not supported");
  }
  return 0.0;
}


/**

  Raster layer project file XML of form:

  <maplayer type="raster" visible="1" showInOverviewFlag="1">
  <layername>Wynoochee_dem</layername>
  <datasource>/home/mcoletti/mnt/MCOLETTIF8F9/c/Toolkit_Course/Answers/Training_Data/wynoochee_dem.img</datasource>
  <zorder>0</zorder>
  <rasterproperties>
  <mDebugOverlayFlag boolean="false"/>
  <drawingStyle>SINGLE_BAND_GRAY</drawingStyle>
  <mInvertPixelsFlag boolean="false"/>
  <mStandardDeviations>0</mStandardDeviations>
  <transparencyLevel>255</transparencyLevel>
  <mRedBandName>Not Set</mRedBandName>
  <mGreenBandName>Not Set</mGreenBandName>
  <mBlueBandName>Not Set</mBlueBandName>
  <mGrayBandName>Undefined</mGrayBandName>
  </rasterproperties>
  </maplayer>
  */
bool QgsRasterLayer::readXML_( QDomNode & layer_node )
{
  //! @NOTE Make sure to read the file first so stats etc are initialised properly!

  //process provider key
  QDomNode pkeyNode = layer_node.namedItem("provider");

  if (pkeyNode.isNull())
  {
    mProviderKey = "";
  }
  else
  {
    QDomElement pkeyElt = pkeyNode.toElement();
    mProviderKey = pkeyElt.text();
  }

  // Open the raster source based on provider and datasource

  if (!mProviderKey.isEmpty())
  {
    // Go down the raster-data-provider paradigm

    // Collect provider-specific information

    QDomNode rpNode = layer_node.namedItem("rasterproperties");

    // Collect sublayer names and styles
    QStringList layers;
    QStringList styles;
    QDomElement layerElement = rpNode.firstChildElement("wmsSublayer");
    while (!layerElement.isNull())
    {
      // TODO: sublayer visibility - post-0.8 release timeframe

      // collect name for the sublayer
      layers += layerElement.namedItem("name").toElement().text();

      // collect style for the sublayer
      styles += layerElement.namedItem("style").toElement().text();

      layerElement = layerElement.nextSiblingElement("wmsSublayer");
    }

    // Collect format
    QString format = rpNode.namedItem("wmsFormat").toElement().text();

    // Collect CRS
    QString crs = QString("EPSG:%1").arg(srs().epsg());

    // Collect proxy information
    QString proxyHost = rpNode.namedItem("wmsProxyHost").toElement().text();
    int     proxyPort = rpNode.namedItem("wmsProxyPort").toElement().text().toInt();
    QString proxyUser = rpNode.namedItem("wmsProxyUser").toElement().text();
    QString proxyPass = rpNode.namedItem("wmsProxyPass").toElement().text();

    setDataProvider( mProviderKey, layers, styles, format, crs,
        proxyHost, proxyPort, proxyUser, proxyPass );
  }
  else
  {
    // Go down the monolithic-gdal-provider paradigm

    if (!readFile(source()))   // Data source name set in
      // QgsMapLayer::readXML()
    {
      QgsLogger::warning(QString(__FILE__) + ":" + QString(__LINE__) + 
          " unable to read from raster file " + source());
      return false;
    }

  }

  QDomNode mnl = layer_node.namedItem("rasterproperties");

  QDomNode snode = mnl.namedItem("mDebugOverlayFlag");
  QDomElement myElement = snode.toElement();
  QVariant myQVariant = (QVariant) myElement.attribute("boolean");
  setShowDebugOverlayFlag(myQVariant.toBool());

  snode = mnl.namedItem("drawingStyle");
  myElement = snode.toElement();
  setDrawingStyle(myElement.text());
  
  snode = mnl.namedItem("colorShadingAlgorithm");
  myElement = snode.toElement();
  setColorShadingAlgorithm(myElement.text());

  snode = mnl.namedItem("mInvertPixelsFlag");
  myElement = snode.toElement();
  myQVariant = (QVariant) myElement.attribute("boolean");
  setInvertHistogramFlag(myQVariant.toBool());

  snode = mnl.namedItem("mRedBandName");
  myElement = snode.toElement();
  setRedBandName(myElement.text());

  snode = mnl.namedItem("mGreenBandName");
  myElement = snode.toElement();
  setGreenBandName(myElement.text());

  snode = mnl.namedItem("mBlueBandName");
  myElement = snode.toElement();
  setBlueBandName(myElement.text());

  snode = mnl.namedItem("mGrayBandName");
  myElement = snode.toElement();
  std::cout << __FILE__ << ":" << __LINE__<< " Setting gray band to : " << myElement.text().data() << std::endl;
  setGrayBandName(myElement.text());

  snode = mnl.namedItem("mStandardDeviations");
  myElement = snode.toElement();
  setStdDevsToPlot(myElement.text().toInt());
  
  snode = mnl.namedItem("contrastEnhancementAlgorithm");
  myElement = snode.toElement();
  setContrastEnhancementAlgorithm(myElement.text(), false);
  
  QDomNode contrastEnhancementMinMaxValues = mnl.namedItem("contrastEnhancementMinMaxValues");
  QDomNodeList minMaxValueList = contrastEnhancementMinMaxValues.toElement().elementsByTagName("minMaxEntry");
  for(int i = 0; i < minMaxValueList.size(); ++i)
  {
    QDomNode minMaxEntry = minMaxValueList.at(i).toElement();
    if(minMaxEntry.isNull())
    {
      continue;
    }
    QDomNode minEntry = minMaxEntry.namedItem("min");
    QDomNode maxEntry = minMaxEntry.namedItem("max");
    
    setMinimumValue(i+1, minEntry.toElement().text().toDouble(), false);
    setMaximumValue(i+1, maxEntry.toElement().text().toDouble(), false);
  }

  QgsDebugMsg("ReadXml: gray band name " + mGrayBandName);
  QgsDebugMsg("ReadXml: red band name " + mRedBandName);
  QgsDebugMsg("ReadXml: green band name  " + mGreenBandName);
  QgsDebugMsg("Drawing style " + getDrawingStyleAsQString());

  /*
   * Transparency tab
   */
  snode = mnl.namedItem("mNoDataValue");
  myElement = snode.toElement();
  setNoDataValue(myElement.text().toDouble());
  if(myElement.attribute("mValidNoDataValue") == "false")
  {
    mValidNoDataValue = false;
  }
  
  QDomNode singleValuePixelListNode = mnl.namedItem("singleValuePixelList");
  if(!singleValuePixelListNode.isNull())
  {
    QList<QgsRasterTransparency::TransparentSingleValuePixel> newSingleValuePixelList;
    
    //entries
    QDomNodeList singleValuePixelList = singleValuePixelListNode.toElement().elementsByTagName("pixelListEntry");
    for(int i = 0; i < singleValuePixelList.size(); ++i)
    {
      QgsRasterTransparency::TransparentSingleValuePixel myNewItem;
      QDomElement singleValuePixelListElement = singleValuePixelList.at(i).toElement();
      if(singleValuePixelListElement.isNull())
      {
        continue;
      }
      
      myNewItem.pixelValue = singleValuePixelListElement.attribute("pixelValue").toDouble();
      myNewItem.percentTransparent = singleValuePixelListElement.attribute("percentTransparent").toDouble();

      newSingleValuePixelList.push_back(myNewItem);
    }
    mRasterTransparency.setTransparentSingleValuePixelList(newSingleValuePixelList);
  }

  QDomNode threeValuePixelListNode = mnl.namedItem("threeValuePixelList");
  if(!threeValuePixelListNode.isNull())
  {
    QList<QgsRasterTransparency::TransparentThreeValuePixel> newThreeValuePixelList;
    
    //entries
    QDomNodeList threeValuePixelList = threeValuePixelListNode.toElement().elementsByTagName("pixelListEntry");
    for(int i = 0; i < threeValuePixelList.size(); ++i)
    {
      QgsRasterTransparency::TransparentThreeValuePixel myNewItem;
      QDomElement threeValuePixelListElement = threeValuePixelList.at(i).toElement();
      if(threeValuePixelListElement.isNull())
      {
        continue;
      }
      
      myNewItem.red = threeValuePixelListElement.attribute("red").toDouble();
      myNewItem.green = threeValuePixelListElement.attribute("green").toDouble();
      myNewItem.blue = threeValuePixelListElement.attribute("blue").toDouble();
      myNewItem.percentTransparent = threeValuePixelListElement.attribute("percentTransparent").toDouble();

      newThreeValuePixelList.push_back(myNewItem);
    }
    mRasterTransparency.setTransparentThreeValuePixelList(newThreeValuePixelList);
  }
  
  /*
   * Color Ramp tab
   */
  //restore custom color ramp settings
  QDomNode customColorRampNode = mnl.namedItem("customColorRamp");
  if(!customColorRampNode.isNull())
  {
    QgsColorRampShader* myColorRampShader = (QgsColorRampShader*) mRasterShader->getRasterShaderFunction();
    
    QDomNode customColorRampTypeNode = customColorRampNode.namedItem("colorRampType");
    myColorRampShader->setColorRampType((QgsColorRampShader::COLOR_RAMP_TYPE)customColorRampTypeNode.toElement().text().toInt());


    //entries
    QList<QgsColorRampShader::ColorRampItem> myColorRampItemList;
    QDomNodeList colorRampEntryList = customColorRampNode.toElement().elementsByTagName("colorRampEntry");
    for(int i = 0; i < colorRampEntryList.size(); ++i)
    {
      QgsColorRampShader::ColorRampItem myNewItem;
      QDomElement colorRampEntryElement = colorRampEntryList.at(i).toElement();
      if(colorRampEntryElement.isNull())
      {
        continue;
      }
      
      myNewItem.color = QColor(colorRampEntryElement.attribute("red").toInt(), colorRampEntryElement.attribute("green").toInt(), colorRampEntryElement.attribute("blue").toInt());
      myNewItem.label = colorRampEntryElement.attribute("label");
      myNewItem.value = colorRampEntryElement.attribute("value").toDouble();

      myColorRampItemList.push_back(myNewItem);
    }
    myColorRampShader->setColorRampItemList(myColorRampItemList);
  }

  return true;

} // QgsRasterLayer::readXML_( QDomNode & layer_node )



/* virtual */ bool QgsRasterLayer::writeXML_( QDomNode & layer_node,
    QDomDocument & document )
{
  // first get the layer element so that we can append the type attribute

  QDomElement mapLayerNode = layer_node.toElement();

  if ( mapLayerNode.isNull() || ("maplayer" != mapLayerNode.nodeName()) )
  {
    QgsLogger::warning("QgsRasterLayer::writeXML() can't find <maplayer>");
    return false;
  }

  mapLayerNode.setAttribute( "type", "raster" );

  // add provider node

  QDomElement provider  = document.createElement( "provider" );
  QDomText providerText = document.createTextNode( mProviderKey );
  provider.appendChild( providerText );
  layer_node.appendChild( provider );

  // <rasterproperties>
  QDomElement rasterPropertiesElement = document.createElement( "rasterproperties" );
  mapLayerNode.appendChild( rasterPropertiesElement );

  if (!mProviderKey.isEmpty())
  {
    QStringList sl = subLayers();
    QStringList sls = mDataProvider->subLayerStyles();

    QStringList::const_iterator layerStyle = sls.begin();

    // <rasterproperties><wmsSublayer>
    for ( QStringList::const_iterator layerName  = sl.begin();
        layerName != sl.end();
        ++layerName )
    {

#ifdef QGISDEBUG
      std::cout << "<rasterproperties><wmsSublayer> " << layerName->toLocal8Bit().data() << std::endl;
#endif

      QDomElement sublayerElement = document.createElement("wmsSublayer");

      // TODO: sublayer visibility - post-0.8 release timeframe

      // <rasterproperties><wmsSublayer><name>
      QDomElement sublayerNameElement = document.createElement("name");
      QDomText sublayerNameText = document.createTextNode(*layerName);
      sublayerNameElement.appendChild(sublayerNameText);
      sublayerElement.appendChild(sublayerNameElement);

      // <rasterproperties><wmsSublayer><style>
      QDomElement sublayerStyleElement = document.createElement("style");
      QDomText sublayerStyleText = document.createTextNode(*layerStyle);
      sublayerStyleElement.appendChild(sublayerStyleText);
      sublayerElement.appendChild(sublayerStyleElement);

      rasterPropertiesElement.appendChild(sublayerElement);

      // This assumes there are exactly the same number of "layerName"s as there are "layerStyle"s
      ++layerStyle;
    }

    // <rasterproperties><wmsFormat>
    QDomElement formatElement = document.createElement("wmsFormat");
    QDomText formatText =
      document.createTextNode(mDataProvider->imageEncoding());
    formatElement.appendChild(formatText);
    rasterPropertiesElement.appendChild(formatElement);

    // <rasterproperties><wmsProxyHost>
    QDomElement proxyHostElement = document.createElement("wmsProxyHost");
    QDomText proxyHostText =
      document.createTextNode(mDataProvider->proxyHost());
    proxyHostElement.appendChild(proxyHostText);
    rasterPropertiesElement.appendChild(proxyHostElement);

    // <rasterproperties><wmsProxyPort>
    QDomElement proxyPortElement = document.createElement("wmsProxyPort");
    QDomText proxyPortText =
      document.createTextNode( QString::number(mDataProvider->proxyPort()) );
    proxyPortElement.appendChild(proxyPortText);
    rasterPropertiesElement.appendChild(proxyPortElement);

    // <rasterproperties><wmsProxyUser>
    QDomElement proxyUserElement = document.createElement("wmsProxyUser");
    QDomText proxyUserText =
      document.createTextNode(mDataProvider->proxyUser());
    proxyUserElement.appendChild(proxyUserText);
    rasterPropertiesElement.appendChild(proxyUserElement);

    // <rasterproperties><wmsProxyPass>
    QDomElement proxyPassElement = document.createElement("wmsProxyPass");
    QDomText proxyPassText =
      document.createTextNode(mDataProvider->proxyPass());
    proxyPassElement.appendChild(proxyPassText);
    rasterPropertiesElement.appendChild(proxyPassElement);
  }

  // <mDebugOverlayFlag>
  QDomElement mDebugOverlayFlagElement = document.createElement( "mDebugOverlayFlag" );

  if ( getShowDebugOverlayFlag() )
  {
    mDebugOverlayFlagElement.setAttribute( "boolean", "true" );
  }
  else
  {
    mDebugOverlayFlagElement.setAttribute( "boolean", "false" );
  }

  rasterPropertiesElement.appendChild( mDebugOverlayFlagElement );

  // <drawingStyle>
  QDomElement drawStyleElement = document.createElement( "drawingStyle" );
  QDomText    drawStyleText    = document.createTextNode( getDrawingStyleAsQString() );

  drawStyleElement.appendChild( drawStyleText );

  rasterPropertiesElement.appendChild( drawStyleElement );

  // <colorShadingAlgorithm>
  QDomElement colorShadingAlgorithmElement = document.createElement( "colorShadingAlgorithm" );
  QDomText    colorShadingAlgorithmText    = document.createTextNode( getColorShadingAlgorithmAsQString() );

  colorShadingAlgorithmElement.appendChild( colorShadingAlgorithmText );

  rasterPropertiesElement.appendChild( colorShadingAlgorithmElement );

  // <mInvertPixelsFlag>
  QDomElement mInvertPixelsFlagElement = document.createElement( "mInvertPixelsFlag" );

  if ( getInvertHistogramFlag() )
  {
    mInvertPixelsFlagElement.setAttribute( "boolean", "true" );
  }
  else
  {
    mInvertPixelsFlagElement.setAttribute( "boolean", "false" );
  }

  rasterPropertiesElement.appendChild( mInvertPixelsFlagElement );


  // <mRedBandName>
  QDomElement mRedBandNameElement = document.createElement( "mRedBandName" );
  QDomText    mRedBandNameText    = document.createTextNode( getRedBandName() );

  mRedBandNameElement.appendChild( mRedBandNameText );

  rasterPropertiesElement.appendChild( mRedBandNameElement );


  // <mGreenBandName>
  QDomElement mGreenBandNameElement = document.createElement( "mGreenBandName" );
  QDomText    mGreenBandNameText    = document.createTextNode( getGreenBandName() );

  mGreenBandNameElement.appendChild( mGreenBandNameText );

  rasterPropertiesElement.appendChild( mGreenBandNameElement );


  // <mBlueBandName>
  QDomElement mBlueBandNameElement = document.createElement( "mBlueBandName" );
  QDomText    mBlueBandNameText    = document.createTextNode( getBlueBandName() );

  mBlueBandNameElement.appendChild( mBlueBandNameText );

  rasterPropertiesElement.appendChild( mBlueBandNameElement );


  // <mGrayBandName>
  QDomElement mGrayBandNameElement = document.createElement( "mGrayBandName" );
  QDomText    mGrayBandNameText    = document.createTextNode( getGrayBandName() );

  mGrayBandNameElement.appendChild( mGrayBandNameText );
  rasterPropertiesElement.appendChild( mGrayBandNameElement );
  
  // <mStandardDeviations>
  QDomElement mStandardDeviationsElement = document.createElement( "mStandardDeviations" );
  QDomText    mStandardDeviationsText    = document.createTextNode( QString::number(getStdDevsToPlot()) );

  mStandardDeviationsElement.appendChild( mStandardDeviationsText );

  rasterPropertiesElement.appendChild( mStandardDeviationsElement );
  
  // <contrastEnhancementAlgorithm>
  QDomElement contrastEnhancementAlgorithmElement = document.createElement( "contrastEnhancementAlgorithm" );
  QDomText    contrastEnhancementAlgorithmText    = document.createTextNode( getContrastEnhancementAlgorithmAsQString() );

  contrastEnhancementAlgorithmElement.appendChild( contrastEnhancementAlgorithmText );

  rasterPropertiesElement.appendChild( contrastEnhancementAlgorithmElement );
  
  // <minMaxValues>
  QList<QgsContrastEnhancement>::iterator it;
  QDomElement contrastEnhancementMinMaxValuesElement = document.createElement( "contrastEnhancementMinMaxValues" );
  for(it =  mContrastEnhancementList.begin(); it != mContrastEnhancementList.end(); ++it)
  {
    QDomElement minMaxEntry = document.createElement("minMaxEntry");
    QDomElement minEntry = document.createElement("min");
    QDomElement maxEntry = document.createElement("max");
    
    QDomText minEntryText = document.createTextNode(QString::number(it->getMinimumValue()));
    minEntry.appendChild(minEntryText);
    
    QDomText maxEntryText = document.createTextNode(QString::number(it->getMaximumValue()));
    maxEntry.appendChild(maxEntryText);
    
    minMaxEntry.appendChild(minEntry);
    minMaxEntry.appendChild(maxEntry);
         
    contrastEnhancementMinMaxValuesElement.appendChild(minMaxEntry);
  }
    
  rasterPropertiesElement.appendChild(contrastEnhancementMinMaxValuesElement);
  
  /*
   * Transparency tab
   */
    // <mNodataValue>
  QDomElement mNoDataValueElement = document.createElement( "mNoDataValue" );
  QDomText    mNoDataValueText    = document.createTextNode( QString::number(mNoDataValue) );
  if(mValidNoDataValue)
  {
    mNoDataValueElement.setAttribute( "mValidNoDataValue", "true" );
  }
  else
  {
    mNoDataValueElement.setAttribute( "mValidNoDataValue", "false" );
  }
  
  mNoDataValueElement.appendChild( mNoDataValueText );

  rasterPropertiesElement.appendChild( mNoDataValueElement );
  
  
  if(mRasterTransparency.getTransparentSingleValuePixelList().count() > 0)
  {
    QDomElement singleValuePixelListElement = document.createElement("singleValuePixelList");
    

    QList<QgsRasterTransparency::TransparentSingleValuePixel> myPixelList = mRasterTransparency.getTransparentSingleValuePixelList();
    QList<QgsRasterTransparency::TransparentSingleValuePixel>::iterator it;
    for(it =  myPixelList.begin(); it != myPixelList.end(); ++it)
    {
      QDomElement pixelListElement = document.createElement("pixelListEntry");
      pixelListElement.setAttribute("pixelValue", QString::number(it->pixelValue));
      pixelListElement.setAttribute("percentTransparent", QString::number(it->percentTransparent));
           
      singleValuePixelListElement.appendChild(pixelListElement);
    }
    
    rasterPropertiesElement.appendChild(singleValuePixelListElement);
  }
  
  if(mRasterTransparency.getTransparentThreeValuePixelList().count() > 0)
  {
    QDomElement threeValuePixelListElement = document.createElement("threeValuePixelList");
    

    QList<QgsRasterTransparency::TransparentThreeValuePixel> myPixelList = mRasterTransparency.getTransparentThreeValuePixelList();
    QList<QgsRasterTransparency::TransparentThreeValuePixel>::iterator it;
    for(it =  myPixelList.begin(); it != myPixelList.end(); ++it)
    {
      QDomElement pixelListElement = document.createElement("pixelListEntry");
      pixelListElement.setAttribute("red", QString::number(it->red));
      pixelListElement.setAttribute("green", QString::number(it->green));
      pixelListElement.setAttribute("blue", QString::number(it->blue));
      pixelListElement.setAttribute("percentTransparent", QString::number(it->percentTransparent));
           
      threeValuePixelListElement.appendChild(pixelListElement);
    }
    
    rasterPropertiesElement.appendChild(threeValuePixelListElement);
  }
   
  /*
   * Color Ramp tab
   */
  if(QgsRasterLayer::COLOR_RAMP ==  getColorShadingAlgorithm())
  {
    QDomElement customColorRampElement = document.createElement("customColorRamp");
    
    QDomElement customColorRampType = document.createElement("customColorRampType");
    QDomText customColorRampTypeText = document.createTextNode( QString::number((int)((QgsColorRampShader*)mRasterShader->getRasterShaderFunction())->getColorRampType()));
    customColorRampType.appendChild(customColorRampTypeText);
    customColorRampElement.appendChild(customColorRampType);

    QList<QgsColorRampShader::ColorRampItem> myColorRampItemList = ((QgsColorRampShader*)mRasterShader->getRasterShaderFunction())->getColorRampItemList();
    QList<QgsColorRampShader::ColorRampItem>::iterator it;
    for(it =  myColorRampItemList.begin(); it != myColorRampItemList.end(); ++it)
    {
      QDomElement colorRampEntryElement = document.createElement("colorRampEntry");
	    colorRampEntryElement.setAttribute("red", QString::number(it->color.red()));
	    colorRampEntryElement.setAttribute("green", QString::number(it->color.green()));
	    colorRampEntryElement.setAttribute("blue", QString::number(it->color.blue()));
	    colorRampEntryElement.setAttribute("value", QString::number(it->value, 'f'));
	    colorRampEntryElement.setAttribute("label", it->label);
					 
	    customColorRampElement.appendChild(colorRampEntryElement);
	  }
    
      rasterPropertiesElement.appendChild(customColorRampElement);
  }

  return true;
} // bool QgsRasterLayer::writeXML_



void QgsRasterLayer::identify(const QgsPoint& point, std::map<QString,QString>& results)
{
  double x = point.x();
  double y = point.y();

  QgsDebugMsg("QgsRasterLayer::identify: " + QString::number(x) + ", " + QString::number(y));

  if ( x < mLayerExtent.xMin() || x > mLayerExtent.xMax() || y < mLayerExtent.yMin() || y > mLayerExtent.yMax() )
  {
    // Outside the raster
    for ( int i = 1; i <= mGdalDataset->GetRasterCount(); i++ )
    {
      results[tr("Band") + QString::number(i)] = tr("out of extent");
    }
  }
  else
  {
    /* Calculate the row / column where the point falls */
    double xres = (mLayerExtent.xMax() - mLayerExtent.xMin()) / mRasterXDim;
    double yres = (mLayerExtent.yMax() - mLayerExtent.yMin()) / mRasterYDim;

    // Offset, not the cell index -> flor
    int col = (int) floor ( (x - mLayerExtent.xMin()) / xres );
    int row = (int) floor ( (mLayerExtent.yMax() - y) / yres );

    QgsDebugMsg( "row = " + QString::number(row) + " col = " + QString::number(col));

    for ( int i = 1; i <= mGdalDataset->GetRasterCount(); i++ )
    {
      GDALRasterBand *gdalBand = mGdalDataset->GetRasterBand(i);
      GDALDataType type = gdalBand->GetRasterDataType();
      int size = GDALGetDataTypeSize ( type ) / 8;
      void *data = CPLMalloc ( size );

      CPLErr err = gdalBand->RasterIO ( GF_Read, col, row, 1, 1, data, 1, 1, type, 0, 0 );

      if (err != CPLE_None)
      {
        QgsLogger::warning("RaterIO error: " + QString(CPLGetLastErrorMsg()));
      }

      double value = readValue ( data, type, 0 );
#ifdef QGISDEBUG
      QgsLogger::debug("value", value, 1, __FILE__, __FUNCTION__, __LINE__);
#endif
      QString v;

      if ( mValidNoDataValue && (mNoDataValue == value || value != value ))
      {
        v = tr("null (no data)");
      }
      else
      {
        v.setNum ( value );
      }
      results[tr("Band") + QString::number(i)] = v;

      free (data);
    }
  }

} // void QgsRasterLayer::identify


QString QgsRasterLayer::identifyAsText(const QgsPoint& point)
{
  if (mProviderKey != "wms")
  {
    // Currently no meaning for anything other than OGC WMS layers
    return QString();
  }

  return (mDataProvider->identifyAsText(point));
}

void QgsRasterLayer::populateHistogram(int theBandNo, int theBinCount,bool theIgnoreOutOfRangeFlag,bool theHistogramEstimatedFlag)
{

  GDALRasterBand *myGdalBand = mGdalDataset->GetRasterBand(theBandNo);
  QgsRasterBandStats myRasterBandStats = getRasterBandStats(theBandNo);
  //calculate the histogram for this band
  //we assume that it only needs to be calculated if the lenght of the histogram
  //vector is not equal to the number of bins
  //i.e if the histogram has never previously been generated or the user has
  //selected a new number of bins.
  if (myRasterBandStats.histogramVector->size()!=theBinCount ||
      theIgnoreOutOfRangeFlag != myRasterBandStats.histogramOutOfRangeFlag ||
      theHistogramEstimatedFlag != myRasterBandStats.histogramEstimatedFlag)
  {
    myRasterBandStats.histogramVector->clear();
    myRasterBandStats.histogramEstimatedFlag=theHistogramEstimatedFlag;
    myRasterBandStats.histogramOutOfRangeFlag=theIgnoreOutOfRangeFlag;
    int *myHistogramArray = new int[theBinCount];


    /*
     *  CPLErr GDALRasterBand::GetHistogram (       
     *          double       dfMin,
     *          double      dfMax,
     *          int     nBuckets,
     *          int *   panHistogram,
     *          int     bIncludeOutOfRange,
     *          int     bApproxOK,
     *          GDALProgressFunc    pfnProgress,
     *          void *      pProgressData
     *          ) 
     */
    double myerval = (myRasterBandStats.maxVal-myRasterBandStats.minVal)/theBinCount;
    myGdalBand->GetHistogram( myRasterBandStats.minVal-0.1*myerval, myRasterBandStats.maxVal+0.1*myerval, theBinCount, myHistogramArray ,theIgnoreOutOfRangeFlag ,theHistogramEstimatedFlag , GDALDummyProgress, NULL );

    for (int myBin = 0; myBin <theBinCount; myBin++)
    {
      myRasterBandStats.histogramVector->push_back( myHistogramArray[myBin]);
      QgsDebugMsg("Added " + QString::number(myHistogramArray[myBin]) + " to histogram vector");
    }

  }
  QgsDebugMsg(">>>>> Histogram vector now contains " + QString::number(myRasterBandStats.histogramVector->size()) +\
      " elements");
}


/*
 * 
 * New functions that will convert this class to a data provider interface
 * (B Morley)
 *
 */ 



QgsRasterLayer::QgsRasterLayer(int dummy,
    QString const & rasterLayerPath,
    QString const & baseName,
    QString const & providerKey,
    QStringList const & layers,
    QStringList const & styles,
    QString const & format,
    QString const & crs,
    QString const & proxyHost,
    int proxyPort,
    QString const & proxyUser,
    QString const & proxyPass )
: QgsMapLayer(RASTER, baseName, rasterLayerPath),
  mRasterXDim( std::numeric_limits<int>::max() ),
  mRasterYDim( std::numeric_limits<int>::max() ),
  mDebugOverlayFlag(false),
  mInvertPixelsFlag(false),
  mStandardDeviations(0),
  mProviderKey(providerKey),
  mDataProvider(0),
  mEditable(false),
mModified(false)

{
  QgsDebugMsg("QgsRasterLayer::QgsRasterLayer(4 arguments): starting. with layer list of "+\
      layers.join(", ") +  " and style list of "+ styles.join(", ") + " and format of " +\
      format +  " and CRS of " + crs);

  mRasterShader = new QgsRasterShader();
  
  // Initialise the affine transform matrix
  mGeoTransform[0] =  0;
  mGeoTransform[1] =  1;
  mGeoTransform[2] =  0;
  mGeoTransform[3] =  0;
  mGeoTransform[4] =  0;
  mGeoTransform[5] = -1;

  // if we're given a provider type, try to create and bind one to this layer
  if ( ! providerKey.isEmpty() )
  {
    setDataProvider( providerKey, layers, styles, format, crs,
        proxyHost, proxyPort, proxyUser, proxyPass );
  }

  // Default for the popup menu
  // TODO: popMenu = 0;

  // Get the update threshold from user settings. We
  // do this only on construction to avoid the penality of
  // fetching this each time the layer is drawn. If the user
  // changes the threshold from the preferences dialog, it will
  // have no effect on existing layers
  // TODO: QSettings settings;
  // updateThreshold = settings.readNumEntry("Map/updateThreshold", 1000);


  // TODO: Connect signals from the dataprovider to the qgisapp

  // Do a passthrough for the status bar text
  connect(
      mDataProvider, SIGNAL(setStatus        (QString)),
      this,           SLOT(showStatusMessage(QString))
      );
  QgsDebugMsg("QgsRasterLayer::QgsRasterLayer(4 arguments): exiting.");

  emit setStatus("QgsRasterLayer created");
} // QgsRasterLayer ctor


// typedef for the QgsDataProvider class factory
typedef QgsDataProvider * classFactoryFunction_t( const QString * );


/** Copied from QgsVectorLayer::setDataProvider 
 *  TODO: Make it work in the raster environment
 */
void QgsRasterLayer::setDataProvider( QString const & provider,
    QStringList const & layers,
    QStringList const & styles,
    QString const & format,
    QString const & crs,
    QString const & proxyHost,
    int proxyPort,
    QString const & proxyUser,
    QString const & proxyPass )
{
  // XXX should I check for and possibly delete any pre-existing providers?
  // XXX How often will that scenario occur?

  mProviderKey = provider;     // XXX is this necessary?  Usually already set
  // XXX when execution gets here.

  // load the plugin
  QgsProviderRegistry * pReg = QgsProviderRegistry::instance();
  QString ogrlib = pReg->library(provider);

  //QString ogrlib = libDir + "/libpostgresprovider.so";

#ifdef TESTPROVIDERLIB
  const char *cOgrLib = (const char *) ogrlib;
  // test code to help debug provider loading problems
  //  void *handle = dlopen(cOgrLib, RTLD_LAZY);
  void *handle = dlopen(cOgrLib, RTLD_LAZY | RTLD_GLOBAL);
  if (!handle)
  {
    QgsLogger::warning("Error in dlopen: ");
  }
  else
  {
    QgsDebugMsg("dlopen suceeded");
    dlclose(handle);
  }

#endif

  // load the data provider
  mLib = new QLibrary((const char *) ogrlib);
  QgsDebugMsg("QgsRasterLayer::setDataProvider: Library name is " + mLib->library());
  bool loaded = mLib->load();

  if (loaded)
  {
    QgsDebugMsg("QgsRasterLayer::setDataProvider: Loaded data provider library");
    QgsDebugMsg("QgsRasterLayer::setDataProvider: Attempting to resolve the classFactory function");
    classFactoryFunction_t * classFactory = (classFactoryFunction_t *) mLib->resolve("classFactory");

    mValid = false;            // assume the layer is invalid until we
    // determine otherwise
    if (classFactory)
    {
      QgsDebugMsg("QgsRasterLayer::setDataProvider: Getting pointer to a mDataProvider object from the library");
      //XXX - This was a dynamic cast but that kills the Windows
      //      version big-time with an abnormal termination error
      //      mDataProvider = (QgsRasterDataProvider*)(classFactory((const
      //                                              char*)(dataSource.utf8())));

      // Copied from qgsproviderregistry in preference to the above.
      mDataProvider = (QgsRasterDataProvider*)(*classFactory)(&mDataSource);

      if (mDataProvider)
      {
        QgsDebugMsg("QgsRasterLayer::setDataProvider: Instantiated the data provider plugin" +\
            QString(" with layer list of ") + layers.join(", ") + " and style list of " + styles.join(", ")+\
            " and format of " + format +  " and CRS of " + crs);
        if (mDataProvider->isValid())
        {
          mValid = true;

          mDataProvider->addLayers(layers, styles);
          mDataProvider->setImageEncoding(format);
          mDataProvider->setImageCrs(crs);
          mDataProvider->setProxy(proxyHost, proxyPort, proxyUser, proxyPass);

          // get the extent
          QgsRect mbr = mDataProvider->extent();

          // show the extent
          QString s = mbr.stringRep();
          QgsDebugMsg("QgsRasterLayer::setDataProvider: Extent of layer: " + s);
          // store the extent
          mLayerExtent.setXmax(mbr.xMax());
          mLayerExtent.setXmin(mbr.xMin());
          mLayerExtent.setYmax(mbr.yMax());
          mLayerExtent.setYmin(mbr.yMin());

          // upper case the first letter of the layer name
          QgsDebugMsg("QgsRasterLayer::setDataProvider: mLayerName: " + name());

          // set up the raster drawing style
          drawingStyle = MULTI_BAND_COLOR;  //sensible default

          // Setup source SRS
          *mSRS = QgsSpatialRefSys();
          mSRS->createFromOgcWmsCrs(crs);
        }
      }
      else
      {
        QgsLogger::warning("QgsRasterLayer::setDataProvider: Unable to instantiate the data provider plugin");
        mValid = false;
      }
    }
  }
  else
  {
    mValid = false;
    QgsLogger::warning("QgsRasterLayer::setDataProvider: Failed to load ../providers/libproviders.so");

  }
  QgsDebugMsg("QgsRasterLayer::setDataProvider: exiting.");

} // QgsRasterLayer::setDataProvider


bool QgsRasterLayer::setProxy(QString const & host,
    int port,
    QString const & user,
    QString const & pass)
{
  if (!mDataProvider)
  {
    return FALSE;
  }
  else
  {
#ifdef QGISDEBUG
    std::cout << "  QgsRasterLayer::setProxy: host = " << host.toLocal8Bit().data() << "." << std::endl;
    std::cout << "  QgsRasterLayer::setProxy: port = " << port << "." << std::endl;
    std::cout << "  QgsRasterLayer::setProxy: user = " << user.toLocal8Bit().data() << "." << std::endl;
    std::cout << "  QgsRasterLayer::setProxy: pass = " << pass.toLocal8Bit().data() << "." << std::endl;
#endif
    return mDataProvider->setProxy(host, port, user, pass);
  }
}



bool QgsRasterLayer::usesProvider()
{
  if (mProviderKey.isEmpty())
  {
    return FALSE;
  }
  else
  {
    return TRUE;
  }
}


QString QgsRasterLayer::providerKey()
{
  if (mProviderKey.isEmpty())
  {
    return QString();
  }
  else
  {
    return mProviderKey;
  }
}


void QgsRasterLayer::showStatusMessage(QString const & theMessage)
{
#ifdef QGISDEBUG
  //  std::cout << "QgsRasterLayer::showStatusMessage: entered with '" << theMessage << "'." << std::endl;
#endif
  // Pass-through
  // TODO: See if we can connect signal-to-signal.  This is a kludge according to the Qt doc.
  emit setStatus(theMessage);
}


QString QgsRasterLayer::errorCaptionString()
{
  return mErrorCaption;
}


QString QgsRasterLayer::errorString()
{
  return mError;
}


QgsRasterDataProvider* QgsRasterLayer::getDataProvider()
{
  return mDataProvider;
}

const QgsRasterDataProvider* QgsRasterLayer::getDataProvider() const
{
  return mDataProvider;
}

const unsigned int QgsRasterLayer::getBandCount()
{
  return mRasterStatsList.size();
}

double QgsRasterLayer::rasterUnitsPerPixel()
{
// We return one raster pixel per map unit pixel
// One raster pixel can have several raster units...

// We can only use one of the mGeoTransform[], so go with the
// horisontal one.

return fabs(mGeoTransform[1]);
}

void QgsRasterLayer::setColorShadingAlgorithm(COLOR_SHADING_ALGORITHM theShadingAlgorithm)
{
#ifdef QGISDEBUG
      QgsDebugMsg("QgsRasterLayer::setColorShadingAlgorithm called with ["+ QString::number(theShadingAlgorithm) +"]");
#endif
  if(mColorShadingAlgorithm != theShadingAlgorithm)
  {
    if(0 == mRasterShader)
    {
      mRasterShader = new QgsRasterShader();
    }
        
    mColorShadingAlgorithm=theShadingAlgorithm;
        
    switch(theShadingAlgorithm)
    {
      case PSEUDO_COLOR:
        mRasterShader->setRasterShaderFunction(new QgsPseudoColorShader());
        break;
      case FREAK_OUT:
        mRasterShader->setRasterShaderFunction(new QgsFreakOutShader());
        break;
      case COLOR_RAMP:
        mRasterShader->setRasterShaderFunction(new QgsColorRampShader());
        break;
      case USER_DEFINED:
        //do nothing
        break;
      default:
        mRasterShader->setRasterShaderFunction(new QgsRasterShaderFunction());
        break;
    }
  }
#ifdef QGISDEBUG
      QgsDebugMsg("mColorShadingAlgorithm = "+ QString::number(theShadingAlgorithm));
#endif
}

void QgsRasterLayer::setNoDataValue(double theNoDataValue) 
{ 
  if(theNoDataValue != mNoDataValue)
  {
    mNoDataValue=theNoDataValue; 
    mValidNoDataValue=true; 
    //Basically set the raster stats as invalid 
    QList<QgsRasterBandStats>::iterator myIterator = mRasterStatsList.begin();
    while(myIterator !=  mRasterStatsList.end())
    {
      (*myIterator).statsGatheredFlag = false;
      ++myIterator;
    }
  }
}

void QgsRasterLayer::paintImageToCanvas(QPainter* theQPainter, QgsRasterViewPort * theRasterViewPort, QgsMapToPixel * theQgsMapToPixel, QImage* theImage)
{
  // Set up the initial offset into the myQImage we want to copy to the map canvas
  // This is useful when the source image pixels are larger than the screen image.
  int paintXoffset = 0;
  int paintYoffset = 0;

  if (theQgsMapToPixel)
  {
    paintXoffset = static_cast<int>( 
        (theRasterViewPort->rectXOffsetFloat - 
         theRasterViewPort->rectXOffset)
        / theQgsMapToPixel->mapUnitsPerPixel() 
        * fabs(mGeoTransform[1])
        ); 

    paintYoffset = static_cast<int>( 
        (theRasterViewPort->rectYOffsetFloat - 
         theRasterViewPort->rectYOffset)
        / theQgsMapToPixel->mapUnitsPerPixel() 
        * fabs(mGeoTransform[5])
        );
  }

  QgsDebugMsg("QgsRasterLayer::drawSingleBandGray: painting image to canvas from "\
      + QString::number(paintXoffset) + ", " + QString::number(paintYoffset)\
      + " to "\
      + QString::number(static_cast<int>(theRasterViewPort->topLeftPoint.x() + 0.5))\
      + ", "\
      + QString::number(static_cast<int>(theRasterViewPort->topLeftPoint.y() + 0.5))\
      + ".");

  theQPainter->drawImage(static_cast<int>(theRasterViewPort->topLeftPoint.x() + 0.5),
      static_cast<int>(theRasterViewPort->topLeftPoint.y() + 0.5),
      *theImage,
      paintXoffset,
      paintYoffset);
}

QString QgsRasterLayer::getColorShadingAlgorithmAsQString()
{
  switch(mColorShadingAlgorithm)
  {
    case PSEUDO_COLOR:
      return QString("PSEUDO_COLOR");
      break;
    case FREAK_OUT:
      return QString("FREAK_OUT");
      break;
    case COLOR_RAMP:
      return QString("COLOR_RAMP");
      break;
    case USER_DEFINED:
      return QString("USER_DEFINED");
      break;
  }
  
  return QString("UNKNOWN");
}

void QgsRasterLayer::setColorShadingAlgorithm(QString theShaderAlgorithm)
{
#ifdef QGISDEBUG
      QgsDebugMsg("QgsRasterLayer::setColorShadingAlgorithm called with ["+ theShaderAlgorithm +"]");
#endif

  if(theShaderAlgorithm == "PSEUDO_COLOR")
    setColorShadingAlgorithm(PSEUDO_COLOR);
  else if(theShaderAlgorithm == "FREAK_OUT")
    setColorShadingAlgorithm(FREAK_OUT);
  else if(theShaderAlgorithm == "COLOR_RAMP")
    setColorShadingAlgorithm(COLOR_RAMP);
  else if(theShaderAlgorithm == "USER_DEFINED")
    setColorShadingAlgorithm(USER_DEFINED);
}

QString QgsRasterLayer::getContrastEnhancementAlgorithmAsQString()
{
  switch(mContrastEnhancementAlgorithm)
  {
    case QgsContrastEnhancement::NO_STRETCH:
      return QString("NO_STRETCH");
      break;
    case QgsContrastEnhancement::STRETCH_TO_MINMAX:
      return QString("STRETCH_TO_MINMAX");
      break;
    case QgsContrastEnhancement::STRETCH_AND_CLIP_TO_MINMAX:
      return QString("STRETCH_AND_CLIP_TO_MINMAX");
      break;
    case QgsContrastEnhancement::CLIP_TO_MINMAX:
      return QString("CLIP_TO_MINMAX");
      break;
    case QgsContrastEnhancement::USER_DEFINED:
      return QString("USER_DEFINED");
      break;
  }
  
  return QString("UNKNOWN");
}

void QgsRasterLayer::setContrastEnhancementAlgorithm(QString theAlgorithm, bool theGenerateLookupTableFlag)
{
#ifdef QGISDEBUG
      QgsDebugMsg("QgsRasterLayer::setContrastEnhancementAlgorithm called with ["+ theAlgorithm +"] and flag="+ QString::number((int)theGenerateLookupTableFlag));
#endif

  if(theAlgorithm == "NO_STRETCH")
  {
    setContrastEnhancementAlgorithm(QgsContrastEnhancement::NO_STRETCH, theGenerateLookupTableFlag);
  }
  else if(theAlgorithm == "STRETCH_TO_MINMAX")
  {
    setContrastEnhancementAlgorithm(QgsContrastEnhancement::STRETCH_TO_MINMAX, theGenerateLookupTableFlag);
  }
  else if(theAlgorithm == "STRETCH_AND_CLIP_TO_MINMAX")
  {
    setContrastEnhancementAlgorithm(QgsContrastEnhancement::STRETCH_AND_CLIP_TO_MINMAX, theGenerateLookupTableFlag);
  }
  else if(theAlgorithm == "CLIP_TO_MINMAX")
  {
    setContrastEnhancementAlgorithm(QgsContrastEnhancement::CLIP_TO_MINMAX, theGenerateLookupTableFlag);
  }
  else if(theAlgorithm == "USER_DEFINED")
  {
    setContrastEnhancementAlgorithm(QgsContrastEnhancement::USER_DEFINED, theGenerateLookupTableFlag);
  }
}
