

#############################################################
# sources

SET(QGIS_CORE_SRCS

  gps/qextserialport/qextserialport.cpp
  gps/qextserialport/qextserialenumerator.cpp

  gps/qgsgpsconnection.cpp
  gps/qgsgpsconnectionregistry.cpp
  gps/qgsnmeaconnection.cpp
  gps/qgsgpsdconnection.cpp
  gps/qgsgpsdetector.cpp
  gps/parse.c
  gps/sentence.c
  gps/info.c
  gps/time.c
  gps/gmath.c
  gps/tok.c
  gps/context.c

  symbology-ng/qgssymbolv2.cpp
  symbology-ng/qgssymbollayerv2.cpp
  symbology-ng/qgssymbollayerv2registry.cpp
  symbology-ng/qgssymbollayerv2utils.cpp
  symbology-ng/qgslinesymbollayerv2.cpp
  symbology-ng/qgsmarkersymbollayerv2.cpp
  symbology-ng/qgsfillsymbollayerv2.cpp
  symbology-ng/qgsrendererv2.cpp
  symbology-ng/qgsrendererv2registry.cpp
  symbology-ng/qgssinglesymbolrendererv2.cpp
  symbology-ng/qgscategorizedsymbolrendererv2.cpp
  symbology-ng/qgsgraduatedsymbolrendererv2.cpp
  symbology-ng/qgsrulebasedrendererv2.cpp
  symbology-ng/qgsvectorcolorrampv2.cpp
  symbology-ng/qgsstylev2.cpp
  symbology-ng/qgssymbologyv2conversion.cpp

  qgis.cpp
  qgsapplication.cpp
  qgsattributeaction.cpp
  qgscentralpointpositionmanager.cpp
  qgsclipper.cpp
  qgscontexthelp.cpp
  qgscoordinatetransform.cpp
  qgsdatasourceuri.cpp
  qgsdiagram.cpp
  qgsdiagramrendererv2.cpp
  qgsdistancearea.cpp
  qgsfeature.cpp
  qgsfield.cpp
  qgsgeometry.cpp
  qgshttptransaction.cpp
  qgslabel.cpp
  qgslabelattributes.cpp
  qgslabelsearchtree.cpp
  qgslogger.cpp
  qgsmaplayer.cpp
  qgsmaplayerregistry.cpp
  qgsmaprenderer.cpp
  qgsmaptopixel.cpp
  qgsmessageoutput.cpp
  qgscredentials.cpp
  qgsoverlayobject.cpp
  qgspalgeometry.cpp
  qgspallabeling.cpp
  qgspalobjectpositionmanager.cpp
  qgspluginlayer.cpp
  qgspluginlayerregistry.cpp
  qgspoint.cpp
  qgsproject.cpp
  qgsprojectfiletransform.cpp
  qgsprojectversion.cpp
  qgsprojectproperty.cpp
  qgsprovidercountcalcevent.cpp
  qgsproviderextentcalcevent.cpp
  qgsprovidermetadata.cpp
  qgsproviderregistry.cpp
  qgsrasterprojector.cpp
  qgsrasterdataprovider.cpp
  qgsrendercontext.cpp
  qgsrectangle.cpp
  qgsrunprocess.cpp
  qgsscalecalculator.cpp
  qgssearchstring.cpp
  qgssearchtreenode.cpp
  qgssnapper.cpp
  qgscoordinatereferencesystem.cpp
  qgstolerance.cpp
  qgsvectordataprovider.cpp
  qgsvectorfilewriter.cpp
  qgsvectorlayer.cpp
  qgsvectorlayerjoinbuffer.cpp
  qgsvectorlayerundocommand.cpp
  qgsvectoroverlay.cpp

  qgsnetworkaccessmanager.cpp

  composer/qgsaddremoveitemcommand.cpp
  composer/qgscomposerarrow.cpp
  composer/qgscomposeritem.cpp
  composer/qgscomposeritemcommand.cpp
  composer/qgscomposeritemgroup.cpp
  composer/qgscomposerlabel.cpp
  composer/qgscomposerlegenditem.cpp
  composer/qgscomposerpicture.cpp
  composer/qgscomposermap.cpp
  composer/qgscomposertable.cpp
  composer/qgscomposerattributetable.cpp
  composer/qgscomposertexttable.cpp
  composer/qgscomposerscalebar.cpp
  composer/qgscomposershape.cpp
  composer/qgslegendmodel.cpp
  composer/qgscomposerlegend.cpp
  composer/qgspaperitem.cpp
  composer/qgsscalebarstyle.cpp
  composer/qgsdoubleboxscalebarstyle.cpp
  composer/qgsnumericscalebarstyle.cpp
  composer/qgssingleboxscalebarstyle.cpp
  composer/qgsticksscalebarstyle.cpp
  composer/qgscomposition.cpp

  pal/costcalculator.cpp
  pal/feature.cpp
  pal/geomfunction.cpp
  pal/labelposition.cpp
  pal/layer.cpp
  pal/pal.cpp
  pal/palstat.cpp
  pal/pointset.cpp
  pal/priorityqueue.cpp
  pal/problem.cpp
  pal/util.cpp
  pal/linkedlist.hpp
  pal/hashtable.hpp
  pal/rtree.hpp

  raster/qgscliptominmaxenhancement.cpp
  raster/qgscolorrampshader.cpp
  raster/qgscontrastenhancement.cpp
  raster/qgscontrastenhancementfunction.cpp
  raster/qgsfreakoutshader.cpp
  raster/qgslinearminmaxenhancement.cpp
  raster/qgslinearminmaxenhancementwithclip.cpp
  raster/qgspseudocolorshader.cpp
  raster/qgsrasterlayer.cpp
  raster/qgsrastertransparency.cpp
  raster/qgsrastershader.cpp
  raster/qgsrastershaderfunction.cpp

  renderer/qgscontinuouscolorrenderer.cpp
  renderer/qgsgraduatedsymbolrenderer.cpp
  renderer/qgsrenderer.cpp
  renderer/qgssinglesymbolrenderer.cpp
  renderer/qgsuniquevaluerenderer.cpp

  symbology/qgsmarkercatalogue.cpp
  symbology/qgssymbol.cpp
  symbology/qgssymbologyutils.cpp

  spatialindex/qgsspatialindex.cpp
  
  )

IF(WIN32)
    SET(QGIS_CORE_SRCS
        ${QGIS_CORE_SRCS}
        gps/qextserialport/win_qextserialport.cpp
        )
    ADD_DEFINITIONS(-D_TTY_WIN_)
ELSE(WIN32)
    SET(QGIS_CORE_SRCS
        ${QGIS_CORE_SRCS}
        gps/qextserialport/posix_qextserialport.cpp
    )
    ADD_DEFINITIONS(-D_TTY_POSIX_)
ENDIF(WIN32)

IF (WITH_INTERNAL_SPATIALITE)
  IF (WIN32 OR APPLE)
    INCLUDE_DIRECTORIES(${ICONV_INCLUDE_DIR})
  ENDIF (WIN32 OR APPLE)
  IF (WIN32)
    ADD_DEFINITIONS(-DDLL_EXPORT)
  ENDIF (WIN32)

#
# sqlite3 requires some extraflags to be defined
# in order to support:
# - huge database > 2 GB
# - RTree Spatial Index
#
  ADD_DEFINITIONS(-D_LARGE_FILE=1 -D_FILE_OFFSET_BITS=64 -D_LARGEFILE_SOURCE=1)
  ADD_DEFINITIONS(-DSQLITE_ENABLE_RTREE=1)

  SET(QGIS_CORE_SRCS
    ${QGIS_CORE_SRCS}
    spatialite/sqlite3.c
    spatialite/spatialite.c
    )

  IF(MSVC)
    # dirty code
    SET_SOURCE_FILES_PROPERTIES(spatialite/sqlite3.c spatialite/spatialite.c PROPERTIES COMPILE_FLAGS /W0)
  ELSE(MSVC)
    SET_SOURCE_FILES_PROPERTIES(spatialite/sqlite3.c spatialite/spatialite.c PROPERTIES COMPILE_FLAGS -w)
  ENDIF(MSVC)

  INCLUDE_DIRECTORIES(BEFORE spatialite/headers/spatialite)
ENDIF (WITH_INTERNAL_SPATIALITE)

ADD_FLEX_FILES(QGIS_CORE_SRCS qgssearchstringlexer.ll)

ADD_BISON_FILES(QGIS_CORE_SRCS qgssearchstringparser.yy)

SET(QGIS_CORE_MOC_HDRS
  qgsapplication.h
  qgscontexthelp.h
  qgscoordinatetransform.h
  qgsdataprovider.h
  qgshttptransaction.h
  qgsmaplayer.h
  qgsmaplayerregistry.h
  qgsmaprenderer.h
  qgsmessageoutput.h
  qgscredentials.h
  qgspluginlayer.h
  qgsproject.h
  qgsrunprocess.h
  qgsvectorlayer.h
  qgsrasterdataprovider.h
  qgsnetworkaccessmanager.h
  qgsvectordataprovider.h

  composer/qgsaddremoveitemcommand.h
  composer/qgscomposerlegend.h
  composer/qgscomposermap.h
  composer/qgscomposerpicture.h
  composer/qgscomposerscalebar.h
  composer/qgscomposeritem.h
  composer/qgscomposeritemgroup.h
  composer/qgscomposershape.h
  composer/qgscomposerattributetable.h
  composer/qgscomposition.h

  composer/qgslegendmodel.h
  symbology/qgsmarkercatalogue.h
  raster/qgsrasterlayer.h

  gps/qgsgpsconnection.h
  gps/qgsgpsdetector.h
  gps/qgsnmeaconnection.h
  gps/qgsgpsdconnection.h
  gps/qextserialport/qextserialport.h
  gps/qextserialport/qextserialenumerator.h
)

QT4_WRAP_CPP(QGIS_CORE_MOC_SRCS ${QGIS_CORE_MOC_HDRS})

INCLUDE_DIRECTORIES(
  ${CMAKE_CURRENT_SOURCE_DIR} 
  composer
  pal
  raster 
  renderer 
  symbology
  spatialindex/include
  symbology-ng
  gps/qextserialport
  ${PROJ_INCLUDE_DIR}
  ${GEOS_INCLUDE_DIR}
  ${GDAL_INCLUDE_DIR}
)

IF (NOT WITH_INTERNAL_SPATIALITE)
  INCLUDE_DIRECTORIES(${SQLITE3_INCLUDE_DIR})
ENDIF (NOT WITH_INTERNAL_SPATIALITE)

IF (WIN32)
  IF (MSVC)
    ADD_DEFINITIONS("-DCORE_EXPORT=__declspec(dllexport)")
  ELSE (MSVC)
    ADD_DEFINITIONS("-UCORE_EXPORT \"-DCORE_EXPORT=__declspec(dllexport)\"")
  ENDIF (MSVC)
ENDIF (WIN32)

#for PAL classes
IF (WIN32)
    ADD_DEFINITIONS("-D_HAVE_WINDOWS_H_")
ELSE (WIN32)
    ADD_DEFINITIONS("-D_HAVE_PTHREAD_")
ENDIF (WIN32)

#############################################################
# spatial indexing library

# add path prefix to every specified file
MACRO(PATH_PREFIX OUTPUT PREFIX)
  FOREACH(F ${ARGN})
    SET(${OUTPUT} ${${OUTPUT}} ${PREFIX}/${F})
  ENDFOREACH(F)
ENDMACRO(PATH_PREFIX)

# tools library
PATH_PREFIX(TOOLS_SRC tools   ExternalSort.cc ExternalSort.h TemporaryFile.cc Tools.cc)
PATH_PREFIX(GEOM_SRC geometry LineSegment.cc Point.cc Region.cc)

# spatial index library
PATH_PREFIX(SPINDEX_SRC spatialindex SpatialIndexImpl.cc)
PATH_PREFIX(STMAN_SRC storagemanager Buffer.cc DiskStorageManager.cc MemoryStorageManager.cc RandomEvictionsBuffer.cc)
PATH_PREFIX(RTREE_SRC rtree BulkLoader.cc Index.cc Leaf.cc Node.cc RTree.cc Statistics.cc)

SET(SPINDEX_SRC ${TOOLS_SRC} ${GEOM_SRC} ${SPINDEX_SRC} ${STMAN_SRC} ${RTREE_SRC})

PATH_PREFIX(INDEX_SRC spatialindex ${SPINDEX_SRC})

#############################################################
# qgis_core library

ADD_LIBRARY(qgis_core SHARED ${QGIS_CORE_SRCS} ${QGIS_CORE_MOC_SRCS} ${INDEX_SRC})

SET_TARGET_PROPERTIES(qgis_core PROPERTIES VERSION ${COMPLETE_VERSION} SOVERSION ${COMPLETE_VERSION})

# make sure to create qgssvnversion.h before compiling
ADD_DEPENDENCIES(qgis_core svnversion)

# because of htonl
IF (WIN32)
  FIND_LIBRARY(SETUPAPI_LIBRARY NAMES setupapi PATHS $ENV{LIB})
  TARGET_LINK_LIBRARIES(qgis_core wsock32 ${SETUPAPI_LIBRARY})
ENDIF (WIN32)

IF(APPLE)
  TARGET_LINK_LIBRARIES(qgis_core "-framework CoreFoundation -framework IOKit")
ENDIF(APPLE)

TARGET_LINK_LIBRARIES(qgis_core
  ${QT_QTMAIN_LIBRARY} 
  ${QT_QTXML_LIBRARY} 
  ${QT_QTCORE_LIBRARY} 
  ${QT_QTGUI_LIBRARY} 
  ${QT_QTNETWORK_LIBRARY} 
  ${QT_QTSVG_LIBRARY} 

  ${PROJ_LIBRARY}
  ${GEOS_LIBRARY}
  ${GDAL_LIBRARY}
)

IF (WITH_INTERNAL_SPATIALITE)
  IF (WIN32 OR APPLE)
    TARGET_LINK_LIBRARIES(qgis_core ${ICONV_LIBRARY})
  ENDIF (WIN32 OR APPLE)
  IF (UNIX)
    TARGET_LINK_LIBRARIES(qgis_core pthread ${CMAKE_DL_LIBS})
  ENDIF (UNIX)
ELSE (WITH_INTERNAL_SPATIALITE)
  TARGET_LINK_LIBRARIES(qgis_core ${SQLITE3_LIBRARY})
ENDIF (WITH_INTERNAL_SPATIALITE)

IF (APPLE)
  SET_TARGET_PROPERTIES(qgis_core PROPERTIES BUILD_WITH_INSTALL_RPATH TRUE )
ENDIF (APPLE)

INSTALL(TARGETS qgis_core
  RUNTIME DESTINATION ${QGIS_BIN_DIR}
  LIBRARY DESTINATION ${QGIS_LIB_DIR}
  ARCHIVE DESTINATION ${QGIS_LIB_DIR})


# Added by Tim to install headers

SET(QGIS_CORE_HDRS
  qgis.h
  qgsapplication.h
  qgsattributeaction.h
  qgscentralpointpositionmanager.h
  qgsclipper.h
  qgscontexthelp.h
  qgscoordinatetransform.h
  qgsdatasourceuri.h
  qgsdistancearea.h
  qgscsexception.h
  qgsexception.h
  qgsfeature.h
  qgsfield.h
  qgsgeometry.h
  qgshttptransaction.h
  qgslabel.h
  qgslabelattributes.h
  qgslogger.h
  qgsmaplayer.h
  qgsmaplayerregistry.h
  qgsmaprenderer.h
  qgsmaptopixel.h
  qgsmessageoutput.h
  qgscredentials.h
  qgsoverlayobjectpositionmanager.h
  qgspallabeling.h
  qgspalobjectpositionmanager.h
  qgspluginlayer.h
  qgspluginlayerregistry.h
  qgspoint.h
  qgsproject.h
  qgsprojectfiletransform.h
  qgsprojectproperty.h
  qgsprojectversion.h
  qgsprovidercountcalcevent.h
  qgsproviderextentcalcevent.h
  qgsprovidermetadata.h
  qgsproviderregistry.h
  qgsrasterprojector.h
  qgsrasterdataprovider.h
  qgsrectangle.h
  qgsrendercontext.h
  qgsrunprocess.h
  qgsscalecalculator.h
  qgssearchstring.h
  qgssearchtreenode.h
  qgssnapper.h
  qgscoordinatereferencesystem.h
  qgsvectordataprovider.h
  qgsvectorfilewriter.h
  qgsvectorlayer.h
  qgsvectoroverlay.h
  qgstolerance.h

  composer/qgslegendmodel.h
  composer/qgscomposerlegenditem.h

  raster/qgscliptominmaxenhancement.h
  raster/qgscolorrampshader.h
  raster/qgscolorrampshader.h
  raster/qgscontrastenhancement.h
  raster/qgscontrastenhancementfunction.h
  raster/qgsfreakoutshader.h
  raster/qgslinearminmaxenhancement.h
  raster/qgslinearminmaxenhancementwithclip.h
  raster/qgspseudocolorshader.h
  raster/qgsrasterpyramid.h
  raster/qgsrasterbandstats.h
  raster/qgsrasterlayer.h
  raster/qgsrastertransparency.h
  raster/qgsrastershader.h
  raster/qgsrastershaderfunction.h
  raster/qgsrasterviewport.h
  
  renderer/qgscontinuouscolorrenderer.h
  renderer/qgsgraduatedsymbolrenderer.h
  renderer/qgsrenderer.h
  renderer/qgssinglesymbolrenderer.h
  renderer/qgsuniquevaluerenderer.h

  symbology/qgsmarkercatalogue.h
  symbology/qgssymbol.h
  symbology/qgssymbologyutils.h

  symbology-ng/qgscategorizedsymbolrendererv2.h
  symbology-ng/qgscolorbrewerpalette.h
  symbology-ng/qgsfillsymbollayerv2.h
  symbology-ng/qgsgraduatedsymbolrendererv2.h
  symbology-ng/qgslinesymbollayerv2.h
  symbology-ng/qgsmarkersymbollayerv2.h
  symbology-ng/qgsrendererv2.h
  symbology-ng/qgsrendererv2registry.h
  symbology-ng/qgssinglesymbolrendererv2.h
  symbology-ng/qgsstylev2.h
  symbology-ng/qgssymbollayerv2.h
  symbology-ng/qgssymbollayerv2registry.h
  symbology-ng/qgssymbollayerv2utils.h
  symbology-ng/qgssymbologyv2conversion.h
  symbology-ng/qgssymbolv2.h
  symbology-ng/qgsvectorcolorrampv2.h
  qgsdiagramrendererv2.h

  spatialindex/qgsspatialindex.h
)

INSTALL(CODE "MESSAGE(\"Installing CORE headers...\")")
INSTALL(FILES ${QGIS_CORE_HDRS} ${QGIS_CORE_MOC_HDRS} DESTINATION ${QGIS_INCLUDE_DIR}) 
