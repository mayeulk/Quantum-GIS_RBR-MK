/***************************************************************************
                         qgscomposerlabel.cpp
                             -------------------
    begin                : January 2005
    copyright            : (C) 2005 by Radim Blazek
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

#include "qgscomposerlabel.h"
#include <QPainter>

QgsComposerLabel::QgsComposerLabel( QgsComposition *composition): QgsComposerItem(composition), mMargin(0.0)
{
}

QgsComposerLabel::~QgsComposerLabel()
{
}

void QgsComposerLabel::paint(QPainter* painter, const QStyleOptionGraphicsItem* itemStyle, QWidget* pWidget)
{
  if(!painter)
    {
      return;
    }

  painter->setFont(mFont);

  QFontMetricsF fontSize(mFont);
  painter->drawText(mMargin, mMargin + fontSize.height(), mText);

  drawFrame(painter);
  if(isSelected())
    {
      drawSelectionBoxes(painter);
    }
}

void QgsComposerLabel::setText(const QString& text)
{
  mText = text;
  adjustSizeToText();
}

void QgsComposerLabel::setFont(const QFont& f)
{
  mFont = f;
  adjustSizeToText();
}

void QgsComposerLabel::adjustSizeToText()
{
  QFontMetricsF fontInfo(mFont);
  setSceneRect(QRectF(transform().dx(), transform().dy(), fontInfo.width(mText) + 2 * mMargin, fontInfo.ascent() + 2 * mMargin));
}


