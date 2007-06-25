/***************************************************************************
                              qgsmapcanvassnapper.cpp    
                              -----------------------
  begin                : June 21, 2007
  copyright            : (C) 2007 by Marco Hugentobler
  email                : marco dot hugentobler at karto dot baug dot ethz dot ch
 ***************************************************************************/

/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

#include "qgsmapcanvassnapper.h"
#include "qgsmapcanvas.h"
#include "qgsmaplayerregistry.h"
#include "qgsmaptopixel.h"
#include "qgsproject.h"
#include "qgsvectorlayer.h"

QgsMapCanvasSnapper::QgsMapCanvasSnapper(QgsMapCanvas* canvas): mMapCanvas(canvas), mSnapper(0)
{
  if(canvas)
    {
      QgsMapRender* canvasRender = canvas->mapRender();
      if(canvasRender)
	{
	  mSnapper = new QgsSnapper(canvasRender);
	}
    }
}

QgsMapCanvasSnapper::QgsMapCanvasSnapper(): mMapCanvas(0), mSnapper(0)
{

}

QgsMapCanvasSnapper::~QgsMapCanvasSnapper()
{
  delete mSnapper;
}

void QgsMapCanvasSnapper::setMapCanvas(QgsMapCanvas* canvas)
{
  mMapCanvas = canvas;
  if(mMapCanvas)
    {
      mSnapper = new QgsSnapper(canvas->mapRender());
    }
  else
    {
      mSnapper = 0;
    }
}

int QgsMapCanvasSnapper::snapToVertexCurrentLayer(const QgsPoint& p, QList<QgsSnappingResult>& results)
{
  results.clear();
  return 1; //soon
}

int QgsMapCanvasSnapper::snapToBackgroundLayers(const QPoint& p, QgsPoint& result)
{
  if(mSnapper)
    {
      mSnapper->setSnapMode(QgsSnapper::ONE_RESULT);

      //read snapping settings from project
      bool ok; //todo: take the default snapping tolerance for all vector layers if snapping not defined in project
      QStringList layerIdList = QgsProject::instance()->readListEntry("Digitizing", "/LayerSnappingList", &ok);
      QStringList enabledList = QgsProject::instance()->readListEntry("Digitizing", "/LayerSnappingEnabledList", &ok);
      QStringList toleranceList = QgsProject::instance()->readListEntry("Digitizing", "/LayerSnappingToleranceList", &ok); 
      QStringList snapToList = QgsProject::instance()->readListEntry("Digitizing", "/LayerSnapToList", &ok);

      if(!(layerIdList.size() == enabledList.size() && layerIdList.size() == toleranceList.size() && layerIdList.size() == snapToList.size()))
	{
	  return 1; //lists must have the same size, otherwise something is wrong
	}

      //set layers, tolerances, snap to segment/vertex to QgsSnapper
      QList<QgsVectorLayer*> vectorLayerList;
      QList<double> toleranceDoubleList;
      QList<QgsSnapper::SNAP_TO> snapTo;

      QgsMapLayer* layer = 0;
      QgsVectorLayer* vlayer = 0;
      
      QStringList::const_iterator layerIt = layerIdList.constBegin();
      QStringList::const_iterator tolIt = toleranceList.constBegin();
      QStringList::const_iterator snapIt = snapToList.constBegin();
      QStringList::const_iterator enabledIt = enabledList.constBegin();

      for(; layerIt != layerIdList.constEnd(); ++layerIt, ++tolIt, ++snapIt, ++enabledIt)
	{
	  if( (*enabledIt) != "enabled") //skip layer if snapping is not enabled
	    {
	      continue;
	    }

	  //layer
	  layer = QgsMapLayerRegistry::instance()->mapLayer(*layerIt);
	  if(layer)
	    {
	      vlayer = dynamic_cast<QgsVectorLayer*>(layer);
	      if(vlayer)
		{
		  vectorLayerList.push_back(vlayer);
		}
	    }

	  //tolerance
	  toleranceDoubleList.push_back(tolIt->toDouble());

	  //segment or vertex
	  if( (*snapIt) == "to_segment" )
	    {
	      snapTo.push_back(QgsSnapper::SNAP_TO_SEGMENT);
	    }
	  else
	    {
	      snapTo.push_back(QgsSnapper::SNAP_TO_VERTEX);
	    }
	  
	}

      mSnapper->setLayersToSnap(vectorLayerList);
      mSnapper->setTolerances(toleranceDoubleList);
      mSnapper->setSnapToList(snapTo);

      QList<QgsSnappingResult> snappingResult;
      if(mSnapper->snapPoint(p, snappingResult) != 0)
	{
	  return 2;
	}
      if(snappingResult.size() > 0)
	{
	  result = snappingResult.at(0).snappedVertex;
	  return 0;
	}
      else //no result found, 
	{
	  result = mMapCanvas->getCoordinateTransform()->toMapCoordinates(p);
	  return 0;
	}
    }
  else
    {
      return 3;
    }
}
