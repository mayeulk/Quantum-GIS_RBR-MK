/***************************************************************************
                         qgslabeldialog.cpp  -  render vector labels
                             -------------------
    begin                : August 2004
    copyright            : (C) 2004 by Radim Blazek & Tim Sutton
    email                : blazek@itc.it
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
#include "qgslabeldialog.h"
#include "qgsfield.h"
#include "qgslabel.h"
#include "qgslabelattributes.h"

#include <QColorDialog>
#include <QFontDialog>
#include <QTabWidget>


const int PIXMAP_WIDTH = 200;
const int PIXMAP_HEIGHT = 20;

QgsLabelDialog::QgsLabelDialog ( QgsLabel *label,  QWidget *parent ) 
    : QWidget(parent),
      mLabel(label),
      mFontColor(Qt::black),
      mBufferColor(Qt::black),
      mFont("Helvetica")
{
    setupUi(this);
#ifdef QGISDEBUG
    std::cerr << __FILE__ << ":" << __LINE__
              << "QgsLabelDialog::QgsLabelDialog()\n";
#endif

    Q_ASSERT( label );

    init();

    connect( sliderFontTransparency, SIGNAL(sliderMoved(int)),
        spinFontTransparency, SLOT(setValue(int)) );
    connect( spinFontTransparency, SIGNAL(valueChanged(int)),
        sliderFontTransparency, SLOT(setValue(int)) );
    connect( sliderAngle, SIGNAL(valueChanged(int)),
        spinAngle, SLOT(setValue(int)) );
    connect( spinAngle, SIGNAL(valueChanged(int)),
        sliderAngle, SLOT(setValue(int)) );
    connect( sliderBufferTransparency, SIGNAL(sliderMoved(int)),
        spinBufferTransparency, SLOT(setValue(int)) );
    connect( spinBufferTransparency, SIGNAL(valueChanged(int)),
        sliderBufferTransparency, SLOT(setValue(int)) );
    connect( btnDefaultFont, SIGNAL(clicked()),
        this, SLOT(changeFont()) );
    connect( pbnDefaultBufferColor_2, SIGNAL(clicked()),
        this, SLOT(changeBufferColor()) );
    connect( pbnDefaultFontColor, SIGNAL(clicked()),
        this, SLOT(changeFontColor()) );
    //added by Tim to force scrolling of tab bar on Mac
    tabWidget2->setUsesScrollButtons(true);
}


void QgsLabelDialog::init ( )
{
#ifdef QGISDEBUG
    std::cerr << __FILE__ << ":" << __LINE__ 
              << "QgsLabelDialog::init()\n";
#endif
  QgsLabelAttributes * myLabelAttributes = mLabel->layerAttributes();
  //populate a string list with all the field names which will be used to set up the 
  //data bound combos
  std::vector<QgsField> myFieldsVector = mLabel->fields();
  QStringList myFieldStringList;
  myFieldStringList.append ( "" );
  for (unsigned int i = 0; i < myFieldsVector.size(); i++ ) 
  {
    myFieldStringList.append ( myFieldsVector[i].name() );
  }
  //
  //now set all the combos that need field lists using the string list
  //
  cboLabelField->clear();
  cboLabelField->insertStringList(myFieldStringList);
  cboLabelField->setCurrentItem(itemNoForField(mLabel->labelField(QgsLabel::Text),myFieldStringList));


  cboFontField->clear();
  cboFontField->insertStringList(myFieldStringList); 
  cboFontField->setCurrentItem(itemNoForField(mLabel->labelField(QgsLabel::Family),myFieldStringList));

  cboBoldField->clear();
  cboBoldField->insertStringList(myFieldStringList); 
  cboBoldField->setCurrentItem(itemNoForField(mLabel->labelField(QgsLabel::Bold),myFieldStringList));


  cboItalicField->clear();
  cboItalicField->insertStringList(myFieldStringList); 
  cboItalicField->setCurrentItem(itemNoForField(mLabel->labelField(QgsLabel::Italic),myFieldStringList));

  cboUnderlineField->clear();
  cboUnderlineField->insertStringList(myFieldStringList); 
  cboUnderlineField->setCurrentItem(itemNoForField(mLabel->labelField(QgsLabel::Underline),myFieldStringList));

  cboFontSizeField->clear();
  cboFontSizeField->insertStringList(myFieldStringList); 
  cboFontSizeField->setCurrentItem(itemNoForField(mLabel->labelField(QgsLabel::Size),myFieldStringList));

  cboFontTransparencyField->clear();
  cboFontTransparencyField->insertStringList(myFieldStringList); 
  //cboFontTransparencyField->setCurrentItem(itemNoForField(mLabel->labelField(QgsLabel::FontTransparency),myFieldStringList));

  cboBufferSizeField->clear();
  cboBufferSizeField->insertStringList(myFieldStringList); 
  cboBufferSizeField->setCurrentItem(itemNoForField(mLabel->labelField(QgsLabel::BufferSize),myFieldStringList));

  cboBufferTransparencyField->clear();
  cboBufferTransparencyField->insertStringList(myFieldStringList); 
  //cboBufferTransparencyField->setCurrentItem(itemNoForField(mLabel->labelField(QgsLabel::BufferTransparency),myFieldStringList));

  cboXCoordinateField->clear();
  cboXCoordinateField->insertStringList(myFieldStringList); 
  cboXCoordinateField->setCurrentItem(itemNoForField(mLabel->labelField(QgsLabel::XCoordinate),myFieldStringList));

  cboYCoordinateField->clear();
  cboYCoordinateField->insertStringList(myFieldStringList); 
  cboYCoordinateField->setCurrentItem(itemNoForField(mLabel->labelField(QgsLabel::YCoordinate),myFieldStringList));

  cboXOffsetField->clear();
  cboXOffsetField->insertStringList(myFieldStringList); 
  cboXOffsetField->setCurrentItem(itemNoForField(mLabel->labelField(QgsLabel::XOffset),myFieldStringList));

  cboYOffsetField->clear();
  cboYOffsetField->insertStringList(myFieldStringList); 
  cboYOffsetField->setCurrentItem(itemNoForField(mLabel->labelField(QgsLabel::YOffset),myFieldStringList));

  cboAlignmentField->clear();
  cboAlignmentField->insertStringList(myFieldStringList); 
  cboAlignmentField->setCurrentItem(itemNoForField(mLabel->labelField(QgsLabel::Alignment),myFieldStringList));

  cboAngleField->clear();
  cboAngleField->insertStringList(myFieldStringList); 
  cboAngleField->setCurrentItem(itemNoForField(mLabel->labelField(QgsLabel::Angle),myFieldStringList));


  //
  //set the non-databound fields up now
  //
  leDefaultLabel->setText(myLabelAttributes->text());
  mFont.setFamily(myLabelAttributes->family());
  if (myLabelAttributes->sizeIsSet())
  {
    mFont.setPointSize(static_cast<int>(myLabelAttributes->size()));

    int myTypeInt = myLabelAttributes->sizeType();
    if (myTypeInt == QgsLabelAttributes::PointUnits)
    {
      radioFontSizeUnitsPoints->setChecked(true);
    }
    else //assume map units is checked
    { 
      radioFontSizeUnitsMap->setChecked(true);
    }
  }
  else //defaults for when no size has been set
  {
    mFont.setPointSize(static_cast<int>(myLabelAttributes->size()));
    radioFontSizeUnitsPoints->setChecked(true);
  }

  if (myLabelAttributes->boldIsSet())
  {
     mFont.setBold(myLabelAttributes->bold());
  }
  else
  {
     mFont.setBold(false);
  }
  if (myLabelAttributes->italicIsSet())
  {
     mFont.setItalic(myLabelAttributes->italic());
  }
  else
  {
     mFont.setItalic(false);
  }
  mFont.setUnderline(myLabelAttributes->underline());
  mFontColor= myLabelAttributes->color(); 
  
  if (myLabelAttributes->offsetIsSet())
  {
    int myTypeInt = myLabelAttributes->offsetType();
    if ( myTypeInt == QgsLabelAttributes::PointUnits )
    {
      radioOffsetUnitsPoints->setChecked(true);
    } 
    else 
    { 
      radioOffsetUnitsMap->setChecked(true);
    }
    spinXOffset->setValue(static_cast<int>(myLabelAttributes->xOffset()));
    spinYOffset->setValue(static_cast<int>(myLabelAttributes->yOffset()));
  }
  else //defaults for when no offset is defined
  {
    spinXOffset->setValue(0);
    spinYOffset->setValue(0);
  }
  spinAngle->setValue(static_cast<int>(myLabelAttributes->angle())); 

  //the values here may seem a bit counterintuitive - basically everything 
  //is the reverse of the way you think it should be...
  //TODO investigate in QgsLabel why this needs to be the case
  //TODO add support for corners (e.g. bottom right) to xml serialiser
  
  if ( myLabelAttributes->alignment() == (Qt::AlignRight | Qt::AlignBottom  )) radioAboveLeft->setChecked(true)   ;
  if ( myLabelAttributes->alignment() == (Qt::AlignRight | Qt::AlignTop     )) radioBelowLeft->setChecked(true)   ; 
  if ( myLabelAttributes->alignment() == (Qt::AlignLeft  | Qt::AlignBottom  )) radioAboveRight->setChecked(true)  ;
  if ( myLabelAttributes->alignment() == (Qt::AlignLeft  | Qt::AlignTop     )) radioBelowRight->setChecked(true)  ;
  if ( myLabelAttributes->alignment() == (Qt::AlignRight | Qt::AlignVCenter )) radioLeft->setChecked(true)        ;
  if ( myLabelAttributes->alignment() == (Qt::AlignLeft  | Qt::AlignVCenter )) radioRight->setChecked(true)       ;
  if ( myLabelAttributes->alignment() == (Qt::AlignBottom| Qt::AlignHCenter )) radioAbove->setChecked(true)       ; 
  if ( myLabelAttributes->alignment() == (Qt::AlignTop   | Qt::AlignHCenter )) radioBelow->setChecked(true)       ; 
  if ( myLabelAttributes->alignment() == Qt::AlignCenter                   ) radioOver->setChecked(true)        ;  

  mBufferColor = myLabelAttributes->bufferColor(); 
  //note that it could be that buffer properties are set, but the bufer is disabled
  if (myLabelAttributes->bufferSizeIsSet() )
  {
    int myTypeInt = myLabelAttributes->bufferSizeType();
    if ( myTypeInt == QgsLabelAttributes::PointUnits )
    {
      radioBufferUnitsPoints->setChecked(true);
    } 
    else 
    { 
      radioBufferUnitsMap->setChecked(true);
    }
    spinBufferSize->setValue(static_cast<int>(myLabelAttributes->bufferSize()));
  }
  else //defaults for when no offset is defined
  {
    spinBufferSize->setValue(1);
  }
  //set the state of the buffer enabled checkbox
  chkUseBuffer->setChecked(myLabelAttributes->bufferEnabled());   
  
  //NOTE: do we need this line too? TS
  spinBufferSize->setValue(static_cast<int>(myLabelAttributes->bufferSize()));
  //TODO - transparency attributes for buffers

}



void QgsLabelDialog::changeFont ( void )
{
#ifdef QGISDEBUG
    std::cerr << "QgsLabelDialog::changeFont()" << std::endl;
#endif
    bool resultFlag;
    mFont = QFontDialog::getFont(&resultFlag, mFont, this );
    if ( resultFlag ) 
    {
        // font is set to the font the user selected
    } else 
    {
        // the user cancelled the dialog; font is set to the initial
        // value, in this case Helvetica [Cronyx], 10
    }
    lblSample->setFont(mFont);
}

void QgsLabelDialog::changeFontColor(void)
{
#ifdef QGISDEBUG
    std::cerr << "QgsLabelDialog::changeFontColor()" << std::endl;
#endif
    mFontColor = QColorDialog::getColor ( mFontColor );
    QPalette palette = lblSample->palette();
    palette.setColor(lblSample->foregroundRole(), mFontColor);
    lblSample->setPalette(palette);
}

void QgsLabelDialog::changeBufferColor(void)
{
#ifdef QGISDEBUG
    std::cerr << "QgsLabelDialog::changeBufferColor()" << std::endl;
#endif
    mBufferColor = QColorDialog::getColor ( mBufferColor );
    QPalette palette = lblSample->palette();
    palette.setColor(lblSample->backgroundRole(), mBufferColor);
    lblSample->setPalette(palette);
}


int QgsLabelDialog::itemNoForField(QString theFieldName, QStringList theFieldList)
{
    int myItemInt=0;
    for ( QStringList::Iterator it = theFieldList.begin(); it != theFieldList.end(); ++it ) 
    {
        if (theFieldName == *it) return myItemInt;
        ++myItemInt;
    }
    //if no matches assume first item in list is blank and return that
    return 0;
}

QgsLabelDialog::~QgsLabelDialog()
{
#ifdef QGISDEBUG
    std::cerr << "QgsLabelDialog::~QgsLabelDialog()" << std::endl;
#endif
}

void QgsLabelDialog::apply()
{
#ifdef QGISDEBUG
    std::cerr << "QgsLabelDialog::apply()" << std::endl;
#endif

    //set the label props that are NOT bound to a field in the attributes tbl
    //All of these are set in the layerAttributes member of the layer
    QgsLabelAttributes * myLabelAttributes = mLabel->layerAttributes();
    myLabelAttributes->setText(leDefaultLabel->text()); 
    myLabelAttributes->setFamily(mFont.family());
    int myTypeInt = 0;
    if ( radioFontSizeUnitsPoints->isChecked())
    {
       myTypeInt = QgsLabelAttributes::PointUnits; 
    } 
    else //assume map units is checked
    { 
       myTypeInt = QgsLabelAttributes::MapUnits;
    }
    myLabelAttributes->setSize(mFont.pointSize() , myTypeInt);
    myLabelAttributes->setBold(mFont.bold());
    myLabelAttributes->setItalic(mFont.italic());
    myLabelAttributes->setUnderline(mFont.underline());
    myLabelAttributes->setColor(mFontColor); 
    myTypeInt = 0;
    if ( radioOffsetUnitsPoints->isChecked() )
    {
       myTypeInt = QgsLabelAttributes::PointUnits; 
    } 
    else 
    { 
       myTypeInt = QgsLabelAttributes::MapUnits;
    }
    myLabelAttributes->setOffset(spinXOffset->value() ,spinYOffset->value(), myTypeInt);
    myLabelAttributes->setAngle(spinAngle->value()); 

    //the values here may seem a bit counterintuitive - basically everything 
    //is the reverse of the way you think it should be...
    //TODO investigate in QgsLabel why this needs to be the case
    if (radioAboveLeft->isChecked())   myLabelAttributes->setAlignment(Qt::AlignRight | Qt::AlignBottom);
    if (radioBelowLeft->isChecked())   myLabelAttributes->setAlignment(Qt::AlignRight | Qt::AlignTop);
    if (radioAboveRight->isChecked())  myLabelAttributes->setAlignment(Qt::AlignLeft  | Qt::AlignBottom);
    if (radioBelowRight->isChecked())  myLabelAttributes->setAlignment(Qt::AlignLeft  | Qt::AlignTop);
    if (radioLeft->isChecked())        myLabelAttributes->setAlignment(Qt::AlignRight | Qt::AlignVCenter);
    if (radioRight->isChecked())       myLabelAttributes->setAlignment(Qt::AlignLeft  | Qt::AlignVCenter);
    if (radioAbove->isChecked())       myLabelAttributes->setAlignment(Qt::AlignBottom| Qt::AlignHCenter); 
    if (radioBelow->isChecked())       myLabelAttributes->setAlignment(Qt::AlignTop   | Qt::AlignHCenter); 
    if (radioOver->isChecked())        myLabelAttributes->setAlignment(Qt::AlignCenter);
      
    myLabelAttributes->setBufferEnabled(chkUseBuffer->isChecked());
    myLabelAttributes->setBufferColor(mBufferColor); 
    myTypeInt = 0;
    if ( radioBufferUnitsPoints->isChecked() )
    {
       myTypeInt = QgsLabelAttributes::PointUnits; 
    } 
    else 
    { 
       myTypeInt = QgsLabelAttributes::MapUnits;
    }
    myLabelAttributes->setBufferSize(spinBufferSize->value(), myTypeInt);
    //TODO - transparency attributes for buffers
    
    //set the label props that are data bound to a field in the attributes tbl
    mLabel->setLabelField( QgsLabel::Text,  cboLabelField->currentText() );
    mLabel->setLabelField( QgsLabel::Family, cboFontField->currentText() );
    mLabel->setLabelField( QgsLabel::Bold,  cboBoldField->currentText() );
    mLabel->setLabelField( QgsLabel::Italic,  cboItalicField->currentText() );
    mLabel->setLabelField( QgsLabel::Underline,  cboUnderlineField->currentText() );
    mLabel->setLabelField( QgsLabel::Size,  cboFontSizeField->currentText() );
    mLabel->setLabelField( QgsLabel::BufferSize,  cboBufferSizeField->currentText() );
    //mLabel->setLabelField( QgsLabel::BufferTransparency,  cboBufferTransparencyField->currentText() );
    mLabel->setLabelField( QgsLabel::XCoordinate,  cboXCoordinateField->currentText() );
    mLabel->setLabelField( QgsLabel::YCoordinate,  cboYCoordinateField->currentText() );
    mLabel->setLabelField( QgsLabel::XOffset,  cboXOffsetField->currentText() );
    mLabel->setLabelField( QgsLabel::YOffset,  cboYOffsetField->currentText() );
    mLabel->setLabelField( QgsLabel::Alignment,  cboAlignmentField->currentText() );
    mLabel->setLabelField( QgsLabel::Angle,  cboAngleField->currentText() );

}

