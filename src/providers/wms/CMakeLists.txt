
SET (WMS_SRCS      qgswmsprovider.cpp)
SET (WMS_MOC_HDRS  qgswmsprovider.h)

QT4_WRAP_CPP (WMS_MOC_SRCS ${WMS_MOC_HDRS})

INCLUDE_DIRECTORIES( . ../../core ../../core/raster )

ADD_LIBRARY(wmsprovider MODULE ${WMS_SRCS} ${WMS_MOC_SRCS})

TARGET_LINK_LIBRARIES(wmsprovider
  qgis_core
)

INSTALL (TARGETS wmsprovider
  RUNTIME DESTINATION ${QGIS_PLUGIN_DIR}
  LIBRARY DESTINATION ${QGIS_PLUGIN_DIR}) 
