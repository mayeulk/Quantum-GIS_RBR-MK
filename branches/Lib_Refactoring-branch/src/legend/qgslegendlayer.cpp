/***************************************************************************
 *   Copyright (C) 2005 by Tim Sutton   *
 *   aps02ts@macbuntu   *
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 *   This program is distributed in the hope that it will be useful,       *
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of        *
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the         *
 *   GNU General Public License for more details.                          *
 *                                                                         *
 *   You should have received a copy of the GNU General Public License     *
 *   along with this program; if not, write to the                         *
 *   Free Software Foundation, Inc.,                                       *
 *   59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.             *
 ***************************************************************************/
#include "qgslegend.h"
#include "qgslegendlayer.h"
#include "qgslegendlayerfile.h"
#include "qgslegendlayerfilegroup.h"
#include "qgslegendsymbologyitem.h"

#include "qgsapplication.h"
#include "qgsfield.h"
#include "qgsmaplayerregistry.h"
#include "qgsrasterlayer.h"
#include "qgsrenderer.h"
#include "qgsvectorlayer.h"
#include "qgsvectordataprovider.h"

#include <iostream>
#include <QCoreApplication>
#include <QIcon>

QgsLegendLayer::QgsLegendLayer(QTreeWidgetItem* parent,QString name)
    : QgsLegendItem(parent, name)
{
  mType=LEGEND_LAYER;
  setFlags(Qt::ItemIsEditable | Qt::ItemIsUserCheckable | Qt::ItemIsEnabled | Qt::ItemIsSelectable);
  setCheckState (0, Qt::Checked);
  setText(0, name);
}

QgsLegendLayer::QgsLegendLayer(QTreeWidget* parent, QString name): QgsLegendItem(parent, name)
{
  mType=LEGEND_LAYER;
  setFlags(Qt::ItemIsEditable | Qt::ItemIsUserCheckable | Qt::ItemIsEnabled | Qt::ItemIsSelectable);
  setCheckState (0, Qt::Checked);
  setText(0, name);
}

QgsLegendLayer::QgsLegendLayer(QString name): QgsLegendItem()
{
  mType=LEGEND_LAYER;
  setFlags(Qt::ItemIsEditable | Qt::ItemIsUserCheckable | Qt::ItemIsEnabled | Qt::ItemIsSelectable);
  setCheckState (0, Qt::Checked);
  setText(0, name);
}

QgsLegendLayer::~QgsLegendLayer()
{
  mType=LEGEND_LAYER;
}

void QgsLegendLayer::setLayerTypeIcon()
{
  QgsMapLayer* firstLayer = firstMapLayer();
  if(firstLayer)
  {
    QString myThemePath = QgsApplication::themePath();
    QString myPath;

    if (firstLayer->type() == QgsMapLayer::VECTOR)
    {
      QgsVectorLayer* vlayer = dynamic_cast<QgsVectorLayer*>(firstLayer);
      switch(vlayer->vectorType())
      {
        case QgsVectorLayer::Point:
          myPath = myThemePath+"/mIconPointLayer.png";
          break;
        case QgsVectorLayer::Line:
          myPath = myThemePath+"/mIconLineLayer.png";
          break;
        case QgsVectorLayer::Polygon:
          myPath = myThemePath+"/mIconPolygonLayer.png";
          break;
        default:
          myPath = myThemePath+"/mIconLayer.png";
      }
    }
    else // RASTER
    {
      myPath = myThemePath+"/mIconLayer.png";
    }

    
    QFileInfo file(myPath);
    if(file.exists())
    {
      QIcon myIcon(file.absoluteFilePath());
      setIcon(0, myIcon);
    }
  }
}

bool QgsLegendLayer::isLeafNode()
{
  return false;
}

QgsLegendItem::DRAG_ACTION QgsLegendLayer::accept(LEGEND_ITEM_TYPE type)
{
    if ( type == LEGEND_LAYER || type == LEGEND_GROUP)
    {
      return REORDER;
    }
    else
      {
	return NO_ACTION;
      }
}

QgsLegendItem::DRAG_ACTION QgsLegendLayer::accept(const QgsLegendItem* li) const
{
  if(li && li != this)
    {
      LEGEND_ITEM_TYPE type = li->type();
      if ( type == LEGEND_LAYER)
	{
	  if(parent() == li->parent())
	    {
	      return REORDER;
	    }
	}
      else if(type == LEGEND_GROUP)
	{
	  //only parent legend layers can change positions with groups
	  if(parent() == 0)
	    {
	      return REORDER;
	    }
	}
    }
  return NO_ACTION;
}

QgsLegendLayerFile* QgsLegendLayer::firstLayerFile()
{
  //first find the legend layer file group
  QgsLegendLayerFileGroup* llfg = 0;
  for(int i = 0; i < childCount(); ++i)
  {
    llfg = dynamic_cast<QgsLegendLayerFileGroup*>(child(i));
    if(llfg)
    {
      break;
    }
  }

  if(!llfg)
  {
    return 0;
  }

  QTreeWidgetItem* llf = llfg->child(0);
  if(!llf)
  {
    return 0;
  }
  QgsLegendLayerFile* legendlayerfile = dynamic_cast<QgsLegendLayerFile*>(llf);
  return legendlayerfile;
}

QgsMapLayer* QgsLegendLayer::firstMapLayer()
{
  QgsLegendLayerFile* llf = firstLayerFile();
  if (llf)
  {
    return llf->layer();
  }
  else
  {
    return 0;
  }
}

std::list<QgsMapLayer*> QgsLegendLayer::mapLayers()
{
    std::list<QgsMapLayer*> list;
    std::list<QgsLegendLayerFile*> llist = legendLayerFiles();
    for(std::list<QgsLegendLayerFile*>::iterator it = llist.begin(); it != llist.end(); ++it)
      {
	list.push_back((*it)->layer());
      }
    return list;
}

std::list<QgsLegendLayerFile*> QgsLegendLayer::legendLayerFiles()
{
  std::list<QgsLegendLayerFile*> list;
  
  //find the layer file group
  QgsLegendLayerFileGroup* theLayerGroup = 0;
  for(int i = 0; i < childCount(); ++i)
    {
      theLayerGroup = dynamic_cast<QgsLegendLayerFileGroup*>(child(i));
      if(theLayerGroup)
	{
	  break;
	}
    }

  //add all the legend layer files in the group
  if(theLayerGroup)
    {
      QgsLegendLayerFile* theFile = 0;
      for(int i = 0; i < theLayerGroup->childCount(); ++i)
	{
	  theFile = dynamic_cast<QgsLegendLayerFile*>(theLayerGroup->child(i));
	  if(theFile)
	    {
	      list.push_back(theFile);
	    }
	}
    }
  return list;
}

void QgsLegendLayer::updateLayerSymbologySettings(const QgsMapLayer* mapLayer)
{
  if(mapLayer)
    {
      //find all layers
      std::list<QgsMapLayer*> theMapLayers = mapLayers();
      for(std::list<QgsMapLayer*>::iterator it = theMapLayers.begin(); it != theMapLayers.end(); ++it)
	{
	  if((*it) != mapLayer)
	    {
	      (*it)->copySymbologySettings(*mapLayer);
	    }
	}
    }
}

void QgsLegendLayer::updateCheckState()
{
  std::list<QgsLegendLayerFile*> llfiles = legendLayerFiles();
  if(llfiles.size() < 1)
    {
      return;
    }

  std::list<QgsLegendLayerFile*>::iterator iter = llfiles.begin();
  Qt::CheckState theState = (*iter)->checkState(0);
  for(; iter != llfiles.end(); ++iter)
    {
      if(theState != (*iter)->checkState(0))
	{
	  theState = Qt::PartiallyChecked;
	  break;
	}
    }

  if(theState != checkState(0))
    {
      treeWidget()->blockSignals(true);
      setCheckState(0, theState);
      treeWidget()->blockSignals(false);
    }
}

void QgsLegendLayer::refreshSymbology(const QString& key)
{
  QgsMapLayer* theMapLayer = QgsMapLayerRegistry::instance()->mapLayer(key);
  if(!theMapLayer)
  {
    return;
  }

  if (theMapLayer->type() == QgsMapLayer::VECTOR) // VECTOR
  {
    QgsVectorLayer* vlayer = dynamic_cast<QgsVectorLayer*>(theMapLayer);
    const QgsRenderer* renderer = vlayer->renderer();
    std::list< std::pair<QString, QPixmap> > itemList;
    renderer->refreshLegend(&itemList);
    if(renderer->needsAttributes()) //create an item for each classification field (only one for most renderers)
    {
      std::list<int> classfieldlist = renderer->classificationAttributes();
      for(std::list<int>::iterator it = classfieldlist.begin(); it!=classfieldlist.end(); ++it)
      {
        const QgsField theField = (vlayer->getDataProvider()->fields())[*it];
        QString classfieldname = theField.name();
        itemList.push_front(std::make_pair(classfieldname, QPixmap()));
      }
    }
    changeSymbologySettings(theMapLayer, &itemList);
  }
  else // RASTER
  {
    QgsRasterLayer* rlayer = dynamic_cast<QgsRasterLayer*>(theMapLayer);
    std::list< std::pair<QString, QPixmap> > itemList;
    itemList.push_back(std::make_pair("", rlayer->getLegendQPixmap(true)));
    
    changeSymbologySettings(theMapLayer, &itemList);
  }
}

void QgsLegendLayer::changeSymbologySettings(const QgsMapLayer* theMapLayer,
                                             const std::list< std::pair<QString, QPixmap> >* newSymbologyItems)
{
  if(!theMapLayer)
  {
    return;
  }

  QgsLegend* myLegend = legend();
  QgsLegendSymbologyItem* theSymbologyItem = 0;

  //remove the symbology items under the legend layer
  for(int i = childCount(); i >= 0; --i)
  {
    theSymbologyItem = dynamic_cast<QgsLegendSymbologyItem*>(child(i));
    if(theSymbologyItem)
    {
      myLegend->removePixmapWidthValue(theSymbologyItem->pixmapWidth());
      myLegend->removePixmapHeightValue(theSymbologyItem->pixmapHeight());
      delete takeChild(i);
    }
  }

  //add the new symbology items
  if(newSymbologyItems)
  {
    int childposition = 0; //position to insert the items
    for(std::list< std::pair<QString, QPixmap> >::const_iterator it= newSymbologyItems->begin(); it != newSymbologyItems->end(); ++it)
    {
      QgsLegendSymbologyItem* theItem = new QgsLegendSymbologyItem(it->second.width(), it->second.height());
      theItem->setText(0, it->first);
      theItem->setIcon(0, QIcon(it->second));
      insertChild(childposition, theItem);

      //add the width and height values to the multisets
      myLegend->addPixmapWidthValue(theItem->pixmapWidth());
      myLegend->addPixmapHeightValue(theItem->pixmapHeight());
      ++childposition;
    }
  }

  //copy the legend settings for the other layer files in the same legend layer
  updateLayerSymbologySettings(theMapLayer);

}
