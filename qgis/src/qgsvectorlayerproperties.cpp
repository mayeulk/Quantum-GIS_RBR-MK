/***************************************************************************
                          qgsvectorlayerproperties.cpp  -  description
                             -------------------
    begin                : Sun Aug 11 2002
    copyright            : (C) 2002 by Gary E.Sherman
    email                : sherman at mrcc dot com
       Romans 3:23=>Romans 6:23=>Romans 5:8=>Romans 10:9,10=>Romans 12
 ***************************************************************************/

/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/
 /* $Id$ */
#include <qframe.h>
#include <qcolordialog.h>
#include <qpushbutton.h>
#include <qlineedit.h>
#include <qspinbox.h>
#include <qstring.h>
#include <qlabel.h>
#include "qgsvectorlayer.h"
#include "qgssymbol.h"
#include "qgsvectorlayerproperties.h"
#include "qtabwidget.h"
#include <iostream>
#include <qcombobox.h>
#include "qgssisydialog.h"
//#include "qgsgrasydialog.h"
#include "qgssinglesymrenderer.h"
//#include "qgsgraduatedsymrenderer.h"
#include <cfloat>
#include "qgslegenditem.h"
//#include "qgscontinuouscolrenderer.h"
//#include "qgscontcoldialog.h"

QgsVectorLayerProperties::QgsVectorLayerProperties(QgsVectorLayer* lyr):layer(lyr)
{
	// populate the property sheet based on the layer properties
	// general info
	QString source = lyr->source();
	source = source.left(source.find("password"));
	lblSource->setText(source);
	setCaption("Layer Properties - " + lyr->name());
	connect( settingsbutton, SIGNAL( clicked() ), this, SLOT( showSymbolSettings() ) );
	legendtypecombobox->insertItem(tr("single symbol"));
	//legendtypecombobox->insertItem(tr("graduated symbol"));
	//legendtypecombobox->insertItem(tr("continuous color"));
	QObject::connect(legendtypecombobox,SIGNAL(activated(const QString&)),this,SLOT(alterLayerDialog(const QString&)));
}

QgsVectorLayerProperties::~QgsVectorLayerProperties()
{
 
}

QgsSymbol* QgsVectorLayerProperties::getSymbol()
{

}

void QgsVectorLayerProperties::alterLayerDialog(const QString& string)
{
    QgsRenderer* oldrenderer=layer->renderer();
    QDialog* olddialog=layer->rendererDialog();
    
    QDialog* dialog;
    QgsRenderer* renderer;
    
    //create a new Dialog
    if(string==tr("single symbol"))
    {
	renderer=new QgsSingleSymRenderer();
	layer->setRenderer(renderer);
	dialog=new QgsSiSyDialog(layer);
    }
    /*else if(string==tr("graduated symbol"))
    {
	renderer=new QgsGraduatedSymRenderer();
	//add a default item
	QgsSymbol s(QColor(0,0,0));
	s.setBrush(QBrush(QColor(0,0,255)));
	s.setPen(QPen(QColor(0,0,0),1));
	QgsRangeRenderItem* defaultitem=new QgsRangeRenderItem(s,0,QString::number(DBL_MAX,'f')," ");
	((QgsGraduatedSymRenderer*)renderer)->addItem(defaultitem);
	layer->setRenderer(renderer);
	dialog=new QgsGraSyDialog(layer);
    }
    else if(string==tr("continuous color"))
    {
	renderer=new QgsContinuousColRenderer();
	//add a default setting
	QgsSymbol s(QColor(0,0,0));
	s.setBrush(QBrush(QColor(0,0,255)));
	s.setPen(QPen(QColor(0,0,0),1));
	QgsRenderItem* defaultminimum=new QgsRenderItem(s,QString::number(DBL_MIN,'f')," ");
	QgsRenderItem* defaultmaximum=new QgsRenderItem(s,QString::number(DBL_MAX,'f')," ");
	((QgsContinuousColRenderer*)renderer)->setMinimumItem(defaultminimum);
	((QgsContinuousColRenderer*)renderer)->setMaximumItem(defaultmaximum);
	layer->setRenderer(renderer);
	dialog=new QgsContColDialog(layer);
	}*/
    
    QString name=layer->name();
    double namewidth=45+name.length()*12;
    int width=(namewidth>60) ? namewidth : 60;
    //show a legend with just the display name
    QPixmap* pix=layer->legendPixmap();
    pix->resize(width,75);
    pix->fill();
    QPainter p(pix);
    p.drawText(45,35,name);
    layer->legendItem()->setPixmap(0,(*pix));
    
      
    layer->setRendererDialog(dialog);

    if(oldrenderer)
    {
	delete oldrenderer;
    }
    if(olddialog)
    {
	delete olddialog;
    }
    layer->triggerRepaint(); 
}

void QgsVectorLayerProperties::showSymbolSettings()
{
    layer->rendererDialog()->show();
    layer->rendererDialog()->raise();
}

