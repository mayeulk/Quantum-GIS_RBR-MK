######################################################################
# Automatically generated by qmake (1.06c) Fri Jul 16 17:05:20 2004
######################################################################

TEMPLATE = lib
INCLUDEPATH += . ..\..\src \
          $(GEOS)\include
LIBS += ..\..\src\libqgis.lib \
        $(GDAL)\lib\gdal_i.lib \
        $(GEOS)\lib\geos.lib \
        $(POSTGRESQL)\src\interfaces\libpq\Release\libpq.lib 

DLLDESTDIR= ..\..\win_build\lib\qgis
CONFIG += qt dll thread rtti

# Input

HEADERS +=    qgsgpsplugin.h \
              qgsbabelformat.h \
              qgsgpsplugingui.h \
              qgsgpsdevicedialog.h
INTERFACES += qgsgpspluginguibase.ui \
              qgsgpsdevicedialogbase.ui
SOURCES +=    qgsgpsplugin.cpp \
              qgsbabelformat.h \
              qgsbabelformat.cpp \
              qgsgpsplugingui.cpp \
              qgsgpsdevicedialog.cpp 

           
