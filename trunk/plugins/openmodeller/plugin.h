/***************************************************************************
                          qgsworldmapimporter.h 
 Functions:
   Buffer
                             -------------------
    begin                : Jan 21, 2004
    copyright            : (C) 2004 by Tim Sutton
    email                : tim@linfiniti.com
  
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
#ifndef PLUGIN
#define PLUGIN
#include <qwidget.h>

#include <qgisapp.h>
#include <qgisplugin.h>

/**
* \class Plugin
* \brief OpenModeller plugin for QGIS
*
*/
class Plugin:public QObject, public QgisPlugin
{
  Q_OBJECT public:
      /** 
       * Constructor for a plugin. The QgisApp and QgisIface pointers are passed by 
       * QGIS when it attempts to instantiate the plugin.
       * @param qgis Pointer to the QgisApp object
       * @param qI Pointer to the QgisIface object. 
       */
      Plugin(QgisApp * , QgisIface * );

  virtual void initGui();
  //! Destructor
  virtual ~ Plugin();
  public slots:
  //! Show the dialog box
  void run();
  //!draw a raster layer in the qui
  void drawRasterLayer(QString);
  //! unload the plugin
  void unload();
  //! show the help document
  void help();
    private:
  ////////////////////////////////////////////////////////////////////
  //
  // MANDATORY PLUGIN MEMBER DECLARATIONS  .....
  //
  ////////////////////////////////////////////////////////////////////
  
  int mPluginType;
  //! Id of the plugin's menu. Used for unloading
  int mMenuId;
  //! Pointer to our toolbar
  QToolBar *mToolBarPointer;
  //! Pointer to our menu
  QMenuBar *mMenuBarPointer;
  //! Pionter to QGIS main application object
  QgisApp *mQGisApp;
  //! Pointer to the QGIS interface object
  QgisIface *mQGisIface;

  ////////////////////////////////////////////////////////////////////
  //
  // ADD YOUR OWN MEMBER DECLARATIONS AFTER THIS POINT.....
  //
  ////////////////////////////////////////////////////////////////////

};

#endif
