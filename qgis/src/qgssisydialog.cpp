/***************************************************************************
                         qgssisydialog.cpp  -  description
                             -------------------
    begin                : Oct 2003
    copyright            : (C) 2003 by Marco Hugentobler
    email                : mhugent@geo.unizh.ch
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
#include <iostream>
#include <qgssisydialog.h>
#include <qpushbutton.h>
#include <qspinbox.h>
#include <qcolordialog.h>
#include <qpixmap.h>
#include <qlineedit.h>
#include <qtoolbutton.h>
#include <qlabel.h>
#include <qbuttongroup.h>
#include <qbrush.h>
#include <qpen.h>

#include "qgsvectorlayer.h"
#include "qgslegenditem.h"
#include "qgsrenderitem.h"
#include "qgssinglesymrenderer.h"
#include "qgspatterndialog.h"
#include "qgssymbologyutils.h"
#include "qgslinestyledialog.h"

QgsSiSyDialog::QgsSiSyDialog():QgsSiSyDialogBase(), mVectorLayer(0)
{
#ifdef QGISDEBUG
    qWarning("constructor QgsSiSyDialog called WITHOUT a layer");
#endif
}

QgsSiSyDialog::QgsSiSyDialog(QgsVectorLayer * layer):QgsSiSyDialogBase(), mVectorLayer(layer)
{
#ifdef QGISDEBUG
    qWarning("constructor QgsSiSyDialog called WITH a layer");
#endif

    //
    //set outline / line style
    //
    pbnLineSolid->setPixmap(QgsSymbologyUtils::char2LinePixmap("SolidLine"));
    pbnLineDash->setPixmap(QgsSymbologyUtils::char2LinePixmap("DashLine"));
    pbnLineDot->setPixmap(QgsSymbologyUtils::char2LinePixmap("DotLine"));
    pbnLineDashDot->setPixmap(QgsSymbologyUtils::char2LinePixmap("DashDotLine"));
    pbnLineDashDotDot->setPixmap(QgsSymbologyUtils::char2LinePixmap("DashDotDotLine"));
    pbnLineNoPen->setPixmap(QgsSymbologyUtils::char2LinePixmap("NoPen"));

    //
    //set pattern button group icons and state
    //
    solid->setPixmap(QgsSymbologyUtils::char2PatternPixmap("SolidPattern"));
    horizontal->setPixmap(QgsSymbologyUtils::char2PatternPixmap("HorPattern"));
    vertical->setPixmap(QgsSymbologyUtils::char2PatternPixmap("VerPattern"));
    cross->setPixmap(QgsSymbologyUtils::char2PatternPixmap("CrossPattern"));
    bdiag->setPixmap(QgsSymbologyUtils::char2PatternPixmap("BDiagPattern"));
    fdiag->setPixmap(QgsSymbologyUtils::char2PatternPixmap("FDiagPattern"));
    diagcross->setPixmap(QgsSymbologyUtils::char2PatternPixmap("DiagCrossPattern"));
    dense1->setPixmap(QgsSymbologyUtils::char2PatternPixmap("Dense1Pattern"));
    dense2->setPixmap(QgsSymbologyUtils::char2PatternPixmap("Dense2Pattern"));
    dense3->setPixmap(QgsSymbologyUtils::char2PatternPixmap("Dense3Pattern"));
    dense4->setPixmap(QgsSymbologyUtils::char2PatternPixmap("Dense4Pattern"));
    dense5->setPixmap(QgsSymbologyUtils::char2PatternPixmap("Dense5Pattern"));
    dense6->setPixmap(QgsSymbologyUtils::char2PatternPixmap("Dense6Pattern"));
    dense7->setPixmap(QgsSymbologyUtils::char2PatternPixmap("Dense7Pattern"));
    nopen->setPixmap(QgsSymbologyUtils::char2PatternPixmap("NoBrush"));


    if (layer)
    {
        QgsSingleSymRenderer *renderer;

        //initial settings, use the buffer of the propertiesDialog if possible. If this is not possible, use the renderer of the vectorlayer directly
        if (mVectorLayer->propertiesDialog())
        {
            renderer = dynamic_cast < QgsSingleSymRenderer * >(layer->propertiesDialog()->getBufferRenderer());
        }
        else
        {
            renderer = dynamic_cast < QgsSingleSymRenderer * >(layer->renderer());
        }

        if (renderer)
        {
#ifdef QGISDEBUG
            qWarning("Setting up renderer");
#endif
            // get the renderer item first
            QgsRenderItem *ri = renderer->item();
            //if(ri)
            outlinewidthspinbox->setValue(renderer->item()->getSymbol()->pen().width());
            outlinewidthspinbox->setMinValue(1);//set line width 1 as minimum to avoid confusion between line width 0 and no pen line style
            lblFillColor->setPaletteBackgroundColor(renderer->item()->getSymbol()->brush().color());


            lblOutlineColor->setPaletteBackgroundColor(renderer->item()->getSymbol()->pen().color());

            //stylebutton->setName(QgsSymbologyUtils::penStyle2Char(renderer->item()->getSymbol()->pen().style()));
            //stylebutton->setPixmap(QgsSymbologyUtils::char2LinePixmap(stylebutton->name()));
            //load the icons stored in QgsSymbologyUtils.cpp (to avoid redundancy)

            QPen myPen = renderer->item()->getSymbol()->pen();

            switch ( myPen.style() )
            {
                case Qt::NoPen :
                    pbnLineNoPen->setOn(true);
                    break;
                case Qt::DashLine :
                    pbnLineDash->setOn(true);
                    break;
                case Qt::DotLine :
                    pbnLineDot->setOn(true);
                    break;
                case Qt::DashDotLine :
                    pbnLineDashDot->setOn(true);
                    break;
                case Qt::DashDotDotLine :
                    pbnLineDashDotDot->setOn(true);
                    break;
                default :
                    pbnLineSolid->setOn(true); // default to solid
                    break;
            }

            QBrush myBrush = renderer->item()->getSymbol()->brush();

            switch ( myBrush.style() )
            {
                case Qt::SolidPattern :
                    solid->setOn(true);
                    break;
                case Qt::HorPattern :
                    horizontal->setOn(true);
                    break;
                case Qt::VerPattern :
                    vertical->setOn(true);
                    break;
                case  Qt::CrossPattern :
                    cross->setOn(true);
                    break;
                case Qt::BDiagPattern :
                    bdiag->setOn(true);
                    break;
                case Qt::FDiagPattern :
                    fdiag->setOn(true);
                    break;
                case Qt::DiagCrossPattern :
                    diagcross->setOn(true);
                    break;
                case Qt::Dense1Pattern :
                    dense1->setOn(true);
                    break;
                case Qt::Dense2Pattern :
                    dense2->setOn(true);
                    break;
                case Qt::Dense3Pattern :
                    dense3->setOn(true);
                    break;
                case Qt::Dense4Pattern :
                    dense4->setOn(true);
                    break;
                case Qt::Dense5Pattern :
                    dense5->setOn(true);
                    break;
                case Qt::Dense6Pattern :
                    dense6->setOn(true);
                    break;
                case Qt::Dense7Pattern :
                    dense7->setOn(true);
                    break;
                case Qt::NoBrush :
                    nopen->setOn(true);
                    break;
                default :
                    solid->setOn(true);
                    break;
            }
        }
        else
        {
            qWarning("%s:%d Warning, typecast failed", __FILE__, __LINE__);
        }

        if (mVectorLayer && mVectorLayer->vectorType() == QGis::Line)
        {
            lblFillColor->unsetPalette();
            btnFillColor->setEnabled(false);
            grpPattern->setEnabled(false);
        }
        //do the signal/slot connections
        QObject::connect(btnOutlineColor, SIGNAL(clicked()), this, SLOT(selectOutlineColor()));
        //QObject::connect(stylebutton, SIGNAL(clicked()), this, SLOT(selectOutlineStyle()));
        QObject::connect(btnFillColor, SIGNAL(clicked()), this, SLOT(selectFillColor()));
        QObject::connect(outlinewidthspinbox, SIGNAL(valueChanged(int)), this, SLOT(resendSettingsChanged()));
        QObject::connect(mLabelEdit, SIGNAL(textChanged(const QString&)), this, SLOT(resendSettingsChanged()));
    }
    else
    {
        qWarning("Warning, layer is a null pointer in QgsSiSyDialog::QgsSiSyDialog(QgsVectorLayer)");
    }
}

QgsSiSyDialog::~QgsSiSyDialog()
{
#ifdef QGISDEBUG
    qWarning("destructor QgsSiSyDialog");
#endif
}

void QgsSiSyDialog::selectOutlineColor()
{
    lblOutlineColor->setPaletteBackgroundColor(QColorDialog::getColor(QColor(black),this));
    setActiveWindow();
    emit settingsChanged();
}

void QgsSiSyDialog::selectFillColor()
{
    lblFillColor->setPaletteBackgroundColor(QColorDialog::getColor(QColor(black),this));
    setActiveWindow();
    emit settingsChanged();
}



void QgsSiSyDialog::apply()
{
    //query the values of the widgets and set the symbology of the vector layer
    QgsSymbol* sy = new QgsSymbol();
    sy->brush().setColor(lblFillColor->paletteBackgroundColor());
    sy->pen().setWidth(outlinewidthspinbox->value());
    sy->pen().setColor(lblOutlineColor->paletteBackgroundColor());


    //
    // Apply the line style
    //
    if  (pbnLineNoPen->isOn())
        (sy->pen().setStyle(Qt::NoPen));
    else if  (pbnLineDash->isOn())
        (sy->pen().setStyle(Qt::DashLine));
    else if  (pbnLineDot->isOn())
        (sy->pen().setStyle(Qt::DotLine)) ;
    else if  (pbnLineDashDot->isOn())
        (sy->pen().setStyle(Qt::DashDotLine));
    else if  (pbnLineDashDotDot->isOn())
        (sy->pen().setStyle(Qt::DashDotDotLine)) ;
    else
        (sy->pen().setStyle(Qt::SolidLine)); //default to solid


    //
    // Apply the pattern
    //

    if (solid->isOn())
    {
        sy->brush().setStyle(Qt::SolidPattern);
    }
    else if (fdiag->isOn())
    {
        sy->brush().setStyle(Qt::FDiagPattern);
    }
    else if (dense4->isOn())
    {
        sy->brush().setStyle(Qt::Dense4Pattern);
    }
    else if (horizontal->isOn())
    {
        sy->brush().setStyle(Qt::HorPattern);
    }
    else if (dense5->isOn())
    {
        sy->brush().setStyle(Qt::Dense5Pattern);
    }
    else if (diagcross->isOn())
    {
        sy->brush().setStyle(Qt::DiagCrossPattern);
    }
    else if (dense1->isOn())
    {
        sy->brush().setStyle(Qt::Dense1Pattern);
    }
    else if (dense6->isOn())
    {
        sy->brush().setStyle(Qt::Dense6Pattern);
    }
    else if (vertical->isOn())
    {
        sy->brush().setStyle(Qt::VerPattern);
    }
    else if (dense7->isOn())
    {
        sy->brush().setStyle(Qt::Dense7Pattern);
    }
    else if (cross->isOn())
    {
        sy->brush().setStyle(Qt::CrossPattern);
    }
    else if (dense2->isOn())
    {
        sy->brush().setStyle(Qt::Dense2Pattern);
    }
    else if (bdiag->isOn())
    {
        sy->brush().setStyle(Qt::BDiagPattern);
    }
    else if (dense3->isOn())
    {
        sy->brush().setStyle(Qt::Dense3Pattern);
    }
    else if (nopen->isOn())
    {
        sy->brush().setStyle(Qt::NoBrush);
    }


    QgsRenderItem* ri = new QgsRenderItem(sy, "blabla", "blabla");

    QgsSingleSymRenderer *renderer = dynamic_cast < QgsSingleSymRenderer * >(mVectorLayer->renderer());

    if (renderer)
    {
        renderer->addItem(ri);
    }
    else
    {
        qWarning("typecast failed in QgsSiSyDialog::apply()");
        return;
    }

    //add a pixmap to the legend item

    //font tor the legend text
    QFont f("arial", 10, QFont::Normal);
    QFontMetrics fm(f);

    QPixmap *pix = mVectorLayer->legendPixmap();

    QString name;
    if (mVectorLayer->propertiesDialog())
    {
        name = mVectorLayer->propertiesDialog()->displayName();
    }
    else
    {
        name = "";
    }

    int width = 40 + fm.width(name);
    int height = (fm.height() + 10 > 35) ? fm.height() + 10 : 35;
    pix->resize(width, height);
    pix->fill();

    QPainter p(pix);
    p.setPen(sy->pen());
    p.setBrush(sy->brush());
    //paint differently in case of point, lines, polygones
    switch (mVectorLayer->vectorType())
    {
    case QGis::Polygon:
        p.drawRect(10, pix->height() - 25, 20, 15);
        break;
    case QGis::Line:
        p.drawLine(10, pix->height() - 25, 25, pix->height() - 10);
        break;
    case QGis::Point:
        p.drawRect(20, pix->height() - 17, 5, 5);
    }

    p.setPen(Qt::black);
    p.setFont(f);
    p.drawText(35, pix->height() - 10, name);

    mVectorLayer->updateItemPixmap();

    if (mVectorLayer->propertiesDialog())
    {
        mVectorLayer->propertiesDialog()->setRendererDirty(false);
    }
    //repaint the map canvas
    mVectorLayer->triggerRepaint();
}

void QgsSiSyDialog::setOutlineColor(QColor& c)
{
    lblOutlineColor->setPaletteBackgroundColor(c);
}

void QgsSiSyDialog::setOutlineStyle(Qt::PenStyle pstyle)
{
#ifdef QGISDEBUG
    qWarning("Setting outline style: "+QgsSymbologyUtils::penStyle2QString(pstyle));
#endif

    // XXX use switch() instead
    if (pstyle==Qt::NoPen)
        (pbnLineNoPen->setOn(true));
    else if (pstyle==Qt::DashLine)
        (pbnLineDash->setOn(true));
    else if (pstyle==Qt::DotLine)
        (pbnLineDash->setOn(true));
    else if (pstyle==Qt::DashDotLine)
        (pbnLineDash->setOn(true));
    else if (pstyle==Qt::DashDotDotLine)
        (pbnLineDash->setOn(true));
    else
        (pbnLineSolid->setOn(true)); //default to solid
}

void QgsSiSyDialog::setFillColor(QColor& c)
{
    lblFillColor->setPaletteBackgroundColor(c);
}

void QgsSiSyDialog::setFillStyle(Qt::BrushStyle fstyle)
{
#ifdef QGISDEBUG
    qWarning("Setting fill style: "+QgsSymbologyUtils::brushStyle2QString(fstyle));
#endif

    // XXX use switch instead
    if (fstyle==Qt::SolidPattern)
        (solid->setOn(true));
    else if (fstyle==Qt::HorPattern)
        (horizontal->setOn(true));
    else if (fstyle==Qt::VerPattern)
        (vertical->setOn(true));
    else if (fstyle==Qt::CrossPattern)
        (cross->setOn(true));
    else if (fstyle==Qt::BDiagPattern)
        (bdiag->setOn(true));
    else if (fstyle==Qt::FDiagPattern)
        (fdiag->setOn(true));
    else if (fstyle==Qt::DiagCrossPattern)
        (diagcross->setOn(true));
    else if (fstyle==Qt::Dense1Pattern)
        (dense1->setOn(true));
    else if (fstyle==Qt::Dense2Pattern)
        (dense2->setOn(true));
    else if (fstyle==Qt::Dense3Pattern)
        (dense3->setOn(true));
    else if (fstyle==Qt::Dense4Pattern)
        (dense4->setOn(true));
    else if (fstyle==Qt::Dense5Pattern)
        (dense5->setOn(true));
    else if (fstyle==Qt::Dense6Pattern)
        (dense6->setOn(true));
    else if (fstyle==Qt::Dense7Pattern)
        (dense7->setOn(true));
    else if (fstyle==Qt::NoBrush)
        (solid->setOn(true)); //default to no brush
}

void QgsSiSyDialog::setOutlineWidth(int width)
{
    outlinewidthspinbox->setValue(width);
}

QColor QgsSiSyDialog::getOutlineColor()
{
    return lblOutlineColor->paletteBackgroundColor();
}

Qt::PenStyle QgsSiSyDialog::getOutlineStyle()
{
    if  (pbnLineNoPen->isOn())
        return Qt::NoPen;
    else if  (pbnLineDash->isOn())
        return Qt::DashLine;
    else if  (pbnLineDash->isOn())
        return Qt::DotLine ;
    else if  (pbnLineDash->isOn())
        return Qt::DashDotLine;
    else if  (pbnLineDash->isOn())
        return Qt::DashDotDotLine ;
    else
        return Qt::SolidLine; //default to solid

}

int QgsSiSyDialog::getOutlineWidth()
{
    return outlinewidthspinbox->value();
}

QColor QgsSiSyDialog::getFillColor()
{
    return lblFillColor->paletteBackgroundColor();
}

Qt::BrushStyle QgsSiSyDialog::getFillStyle()
{
    if (solid->isOn())
    {
        return Qt::SolidPattern;
    }
    else if (fdiag->isOn())
    {
        return Qt::FDiagPattern;
    }
    else if (dense4->isOn())
    {
        return Qt::Dense4Pattern;
    }
    else if (horizontal->isOn())
    {
        return Qt::HorPattern;
    }
    else if (dense5->isOn())
    {
        return Qt::Dense5Pattern;
    }
    else if (diagcross->isOn())
    {
        return Qt::DiagCrossPattern;
    }
    else if (dense1->isOn())
    {
        return Qt::Dense1Pattern;
    }
    else if (dense6->isOn())
    {
        return Qt::Dense6Pattern;
    }
    else if (vertical->isOn())
    {
        return Qt::VerPattern;
    }
    else if (dense7->isOn())
    {
        return Qt::Dense7Pattern;
    }
    else if (cross->isOn())
    {
        return Qt::CrossPattern;
    }
    else if (dense2->isOn())
    {
        return Qt::Dense2Pattern;
    }
    else if (bdiag->isOn())
    {
        return Qt::BDiagPattern;
    }
    else if (dense3->isOn())
    {
        return Qt::Dense3Pattern;
    }
    //fall back to transparent
    return Qt::NoBrush;

}

void QgsSiSyDialog::resendSettingsChanged()
{
    emit settingsChanged();
}

QString QgsSiSyDialog::label()
{
    return mLabelEdit->text();
}

void QgsSiSyDialog::setLabel(QString label)
{
    mLabelEdit->setText(label);
}


//
// These are simple event triggers off the various pattern and line
// style buttons
//


void QgsSiSyDialog::solid_clicked()
{
    emit settingsChanged();

}


void QgsSiSyDialog::fdiag_clicked()
{
    emit settingsChanged();

}


void QgsSiSyDialog::dense4_clicked()
{
    emit settingsChanged();

}


void QgsSiSyDialog::horizontal_clicked()
{
    emit settingsChanged();

}


void QgsSiSyDialog::diagcross_clicked()
{
    emit settingsChanged();

}


void QgsSiSyDialog::dense5_clicked()
{
    emit settingsChanged();

}


void QgsSiSyDialog::vertical_clicked()
{
    emit settingsChanged();

}


void QgsSiSyDialog::dense1_clicked()
{

    emit settingsChanged();
}


void QgsSiSyDialog::dense6_clicked()
{
    emit settingsChanged();

}


void QgsSiSyDialog::cross_clicked()
{
    emit settingsChanged();

}


void QgsSiSyDialog::dense2_clicked()
{
    emit settingsChanged();

}


void QgsSiSyDialog::dense7_clicked()
{
    emit settingsChanged();

}


void QgsSiSyDialog::bdiag_clicked()
{
    emit settingsChanged();

}


void QgsSiSyDialog::dense3_clicked()
{
    emit settingsChanged();

}


void QgsSiSyDialog::nopen_clicked()
{
    emit settingsChanged();

}


void QgsSiSyDialog::pbnLineSolid_clicked()
{
    emit settingsChanged();

}


void QgsSiSyDialog::pbnLineDashDot_clicked()
{
    emit settingsChanged();

}


void QgsSiSyDialog::pbnLineDash_clicked()
{
    emit settingsChanged();

}


void QgsSiSyDialog::pbnLineDashDotDot_clicked()
{
    emit settingsChanged();

}


void QgsSiSyDialog::pbnLineDot_clicked()
{
    emit settingsChanged();

}


void QgsSiSyDialog::pbnLineNoPen_clicked()
{
    emit settingsChanged();

}
