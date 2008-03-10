<!DOCTYPE TS><TS>
<context>
    <name>@default</name>
    <message>
        <source>OGR Driver Manager</source>
        <translation>OGR Driver Manager
</translation>
    </message>
    <message>
        <source>unable to get OGRDriverManager</source>
        <translation>nem tudom elérni az OGRDriverManager-t</translation>
    </message>
</context>
<context>
    <name>Dialog</name>
    <message>
        <source>QGIS Plugin Installer</source>
        <translation>QGIS modul installáló</translation>
    </message>
    <message>
        <source>Select repository, retrieve the list of available plugins, select one and install it</source>
        <translation>Válaszd ki a tárházat, kérd le a modulok listáját, válassz egyet és installáld</translation>
    </message>
    <message>
        <source>Repository</source>
        <translation>Tárház</translation>
    </message>
    <message>
        <source>Active repository:</source>
        <translation>Aktív tárház:</translation>
    </message>
    <message>
        <source>Get List</source>
        <translation>Lista</translation>
    </message>
    <message>
        <source>Add</source>
        <translation>Hozzáad</translation>
    </message>
    <message>
        <source>Edit</source>
        <translation>Szerkeszt</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Töröl</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Név</translation>
    </message>
    <message>
        <source>Version</source>
        <translation>Verzió</translation>
    </message>
    <message>
        <source>Description</source>
        <translation>Leírás</translation>
    </message>
    <message>
        <source>Author</source>
        <translation>Szerző</translation>
    </message>
    <message>
        <source>Name of plugin to install</source>
        <translation>Installálandó modul neve</translation>
    </message>
    <message>
        <source>Install Plugin</source>
        <translation>Modul installálás</translation>
    </message>
    <message>
        <source>The plugin will be installed to ~/.qgis/python/plugins</source>
        <translation>A modult a ~/.qgis/python/plugins könyvtárba installálom</translation>
    </message>
    <message>
        <source>Done</source>
        <translation>Kész</translation>
    </message>
</context>
<context>
    <name>Gui</name>
    <message>
        <source>Welcome to your automatically generated plugin!</source>
        <translation>Üdvözlünk a automatikusan generált modulodban!</translation>
    </message>
    <message>
        <source>This is just a starting point. You now need to modify the code to make it do something useful....read on for a more information to get yourself started.</source>
        <translation>Ez egy kezdőpont. Most módosítanod kell a kódot, hogy valami hasznosat csináljon... olvasd tovább, hogy felkészítsd magad.</translation>
    </message>
    <message>
        <source>Documentation:</source>
        <translation>Dokumentáció:</translation>
    </message>
    <message>
        <source>You really need to read the QGIS API Documentation now at:</source>
        <translation>Valóban el kell most olvasnod a QGIS API dokumentáció itt:</translation>
    </message>
    <message>
        <source>In particular look at the following classes:</source>
        <translation>Különösen a következő osztályokat nézd meg:</translation>
    </message>
    <message>
        <source>QgsPlugin is an ABC that defines required behaviour your plugin must provide. See below for more details.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>What are all the files in my generated plugin directory for?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This is the generated CMake file that builds the plugin. You should add you application specific dependencies and source files to this file.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This is the class that provides the &apos;glue&apos; between your custom application logic and the QGIS application. You will see that a number of methods are already implemented for you - including some examples of how to add a raster or vector layer to the main application map canvas. This class is a concrete instance of the QgisPlugin interface which defines required behaviour for a plugin. In particular, a plugin has a number of static methods and members so that the QgsPluginManager and plugin loader logic can identify each plugin, create an appropriate menu entry for it etc. Note there is nothing stopping you creating multiple toolbar icons and menu entries for a single plugin. By default though a single menu entry and toolbar button is created and its pre-configured to call the run() method in this class when selected. This default implementation provided for you by the plugin builder is well documented, so please refer to the code for further advice.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This is a Qt designer &apos;ui&apos; file. It defines the look of the default plugin dialog without implementing any application logic. You can modify this form to suite your needs or completely remove it if your plugin does not need to display a user form (e.g. for custom MapTools).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This is the concrete class where application logic for the above mentioned dialog should go. The world is your oyster here really....</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This is the Qt4 resources file for your plugin. The Makefile generated for your plugin is all set up to compile the resource file so all you need to do is add your additional icons etc using the simple xml file format. Note the namespace used for all your resources e.g. (&apos;:/Homann/&apos;). It is important to use this prefix for all your resources. We suggest you include any other images and run time data in this resurce file too.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This is the icon that will be used for your plugin menu entry and toolbar icon. Simply replace this icon with your own icon to make your plugin disctinctive from the rest.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This file contains the documentation you are reading now!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Getting developer help:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>For Questions and Comments regarding the plugin builder template and creating your features in QGIS using the plugin interface please contact us via:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;li&gt; the QGIS developers mailing list, or &lt;/li&gt;&lt;li&gt; IRC (#qgis on freenode.net)&lt;/li&gt;</source>
        <translation>&lt;li&gt; a QGIS fejlesztői levelező lista vagy&lt;/li&gt;&lt;li&gt; IRC (#qgis on freenode.net)&lt;/li&gt;</translation>
    </message>
    <message>
        <source>QGIS is distributed under the Gnu Public License. If you create a useful plugin please consider contributing it back to the community.</source>
        <translation>A QGIS-t a Gnu Public License alapján terjesztjük. Ha egy hasznos modult készítesz, gondolj arra, hogy visszajuttasd a közösségnek.</translation>
    </message>
    <message>
        <source>Have fun and thank you for choosing QGIS.</source>
        <translation>Élvezd és köszönjük, hogy a QGIS-t választottad.</translation>
    </message>
</context>
<context>
    <name>MapCoordsDialogBase</name>
    <message>
        <source>Enter map coordinates</source>
        <translation>Add meg a térkép koordinátákat</translation>
    </message>
    <message>
        <source>Enter X and Y coordinates which correspond with the selected point on the image. Alternatively, click the button with icon of a pencil and then click a corresponding point on map canvas of QGIS to fill in coordinates of that point.</source>
        <translation>Add meg a képen kiválaszott pont X és Y koordinátáit vagy a ceruza eszközzel jelöld ki a pontot a térképen a koordináták kitöltéséhez.</translation>
    </message>
    <message>
        <source>X:</source>
        <translation>X:</translation>
    </message>
    <message>
        <source>Y:</source>
        <translation>Y:</translation>
    </message>
    <message>
        <source> from map canvas</source>
        <translation>a térképről</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Mégsem</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
</context>
<context>
    <name>QFileDialog</name>
    <message>
        <source>Load layer properties from style file (.qml)</source>
        <translation>Réteg tulajdonságok betöltése stílus fájlból (.qml)</translation>
    </message>
    <message>
        <source>Save layer properties as style file (.qml)</source>
        <translation>Réteg tulajdonságok mentése stílus fájlba (.qml)</translation>
    </message>
    <message>
        <source>Save experiment report to portable document format (.pdf)</source>
        <translation>Jelentés mentése hordozható dokumentum formátumba (.pdf)</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <source>Where is &apos;</source>
        <translation type="unfinished">Hol van &apos;</translation>
    </message>
    <message>
        <source>original location: </source>
        <translation>eredeti hely:</translation>
    </message>
    <message>
        <source>QGis files (*.qgs)</source>
        <translation>QGIS fájlok (*.qgs)</translation>
    </message>
    <message>
        <source>Not a vector layer</source>
        <translation>Nem vektor réteg</translation>
    </message>
    <message>
        <source>The current layer is not a vector layer</source>
        <translation>Az aktuális réteg nem vektor réteg</translation>
    </message>
    <message>
        <source>2.5D shape type not supported</source>
        <translation>2.5D-s shape típus nem támogatott</translation>
    </message>
    <message>
        <source>Adding features to 2.5D shapetypes is not supported yet</source>
        <translation>A 2.5D-s shape típushoz még nem lehet új elemet hozzáadni</translation>
    </message>
    <message>
        <source>Layer cannot be added to</source>
        <translation>Réteg nem adható ehhez</translation>
    </message>
    <message>
        <source>The data provider for this layer does not support the addition of features.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Layer not editable</source>
        <translation>A réteg nem szerkeszthető</translation>
    </message>
    <message>
        <source>Cannot edit the vector layer. To make it editable, go to the file item of the layer, right click and check &apos;Allow Editing&apos;.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Wrong editing tool</source>
        <translation>Rossz szerkesztőeszköz</translation>
    </message>
    <message>
        <source>Cannot apply the &apos;capture point&apos; tool on this vector layer</source>
        <translation>Nem használhatod a pont digitalizálás eszközt ezen a vektor rétegen</translation>
    </message>
    <message>
        <source>Coordinate transform error</source>
        <translation>Koordináta transzformáció hiba</translation>
    </message>
    <message>
        <source>Cannot transform the point to the layers coordinate system</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot apply the &apos;capture line&apos; tool on this vector layer</source>
        <translation>Nem használhatod a vonal digitalizálás eszközt ezen a vektor rétegen</translation>
    </message>
    <message>
        <source>Cannot apply the &apos;capture polygon&apos; tool on this vector layer</source>
        <translation>Nem használhatod a felület digitalizálás eszközt ezen a vektor rétegen</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>Hiba</translation>
    </message>
    <message>
        <source>Cannot add feature. Unknown WKB type</source>
        <translation>Nem tudom hozzáadni az elemet. Ismeretlen WKB típus</translation>
    </message>
    <message>
        <source>Could not remove polygon intersection</source>
        <translation>Nem tudom megszüntetni a felületek metszését</translation>
    </message>
    <message>
        <source>Error, could not add island</source>
        <translation>Hiba, nem tudom a szigetet hozzáadni</translation>
    </message>
    <message>
        <source>A problem with geometry type occured</source>
        <translation>Probléma a geometria elem típussal</translation>
    </message>
    <message>
        <source>The inserted Ring is not closed</source>
        <translation>A beillesztett gyűrű nem zárt</translation>
    </message>
    <message>
        <source>The inserted Ring is not a valid geometry</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The inserted Ring crosses existing rings</source>
        <translation>A beillesztett gyűrű metsz egy korábbit</translation>
    </message>
    <message>
        <source>The inserted Ring is not contained in a feature</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>An unknown error occured</source>
        <translation>Ismeretlen hiba fordult elő</translation>
    </message>
    <message>
        <source>Error, could not add ring</source>
        <translation>Hiba, nem sikerült a gyűrűt hozzáadni</translation>
    </message>
    <message>
        <source>No active layer</source>
        <translation>Nincs aktív réteg</translation>
    </message>
    <message>
        <source>To identify features, you must choose an active layer by clicking on its name in the legend</source>
        <translation>Egy elem azonosításához egy aktív réteget kell kijelölnöd a nevére kattintva a jelkulcsban </translation>
    </message>
    <message>
        <source>Band</source>
        <translation>Sáv</translation>
    </message>
    <message>
        <source>Length</source>
        <translation>Hossz</translation>
    </message>
    <message>
        <source>Area</source>
        <translation>Terület</translation>
    </message>
    <message>
        <source>action</source>
        <translation>művelet</translation>
    </message>
    <message>
        <source> features found</source>
        <translation>elemet találtam</translation>
    </message>
    <message>
        <source> 1 feature found</source>
        <translation>1 elemet találtam</translation>
    </message>
    <message>
        <source>No features found</source>
        <translation>Nem találtam elemet</translation>
    </message>
    <message>
        <source>No features were found in the active layer at the point you clicked</source>
        <translation>Az aktív rétegen a megadott pontban nem találtam elemeket</translation>
    </message>
    <message>
        <source>Could not identify objects on</source>
        <translation>Nem sikerült elemeket azonosítani ezen</translation>
    </message>
    <message>
        <source>because</source>
        <translation>mert</translation>
    </message>
    <message>
        <source>To select features, you must choose a vector layer by clicking on its name in the legend</source>
        <translation>Az elemek kiválasztásához egy aktív vektor réteget kell kijelölnöd a nevére kattintva a jelkulcsban</translation>
    </message>
    <message>
        <source>Python error</source>
        <translation>Phyton hiba</translation>
    </message>
    <message>
        <source>Couldn&apos;t load SIP module.
Python support will be disabled.</source>
        <translation>Nerm tudom betölteni a SIP modult. A Phyton támogatást kikapcsolom.</translation>
    </message>
    <message>
        <source>Couldn&apos;t load PyQt bindings.
Python support will be disabled.</source>
        <translation>Nerm tudom betölteni a PyQt kötéseket. A Phyton támogatást kikapcsolom.</translation>
    </message>
    <message>
        <source>Couldn&apos;t load QGIS bindings.
Python support will be disabled.</source>
        <translation>Nerm tudom betölteni a QGIS kötéseket. A Phyton támogatást kikapcsolom.</translation>
    </message>
    <message>
        <source>Couldn&apos;t load plugin </source>
        <translation>Nem tudom betölteni a modult</translation>
    </message>
    <message>
        <source> due an error when calling its classFactory() method</source>
        <translation>egy hiba miatt, amikor a ClassFactory() metodusát hívtam</translation>
    </message>
    <message>
        <source> due an error when calling its initGui() method</source>
        <translation>egy hiba miatt, amikor az initGui() metodusát hívtam</translation>
    </message>
    <message>
        <source>Error while unloading plugin </source>
        <translation>Hiba a modul kivétele során</translation>
    </message>
    <message>
        <source>Caught a coordinate system exception while trying to transform a point. Unable to calculate line length.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Caught a coordinate system exception while trying to transform a point. Unable to calculate polygon area.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> km2</source>
        <translation>km2</translation>
    </message>
    <message>
        <source> ha</source>
        <translation>ha</translation>
    </message>
    <message>
        <source> m2</source>
        <translation>m2</translation>
    </message>
    <message>
        <source> m</source>
        <translation>m</translation>
    </message>
    <message>
        <source> km</source>
        <translation>km</translation>
    </message>
    <message>
        <source> mm</source>
        <translation>mm</translation>
    </message>
    <message>
        <source> cm</source>
        <translation>cm</translation>
    </message>
    <message>
        <source> sq mile</source>
        <translation>mérföld2</translation>
    </message>
    <message>
        <source> sq ft</source>
        <translation>láb2</translation>
    </message>
    <message>
        <source> mile</source>
        <translation>mérföld</translation>
    </message>
    <message>
        <source> foot</source>
        <translation>láb</translation>
    </message>
    <message>
        <source> feet</source>
        <translation>láb</translation>
    </message>
    <message>
        <source> sq.deg.</source>
        <translation type="unfinished">fok2</translation>
    </message>
    <message>
        <source> degree</source>
        <translation>fok</translation>
    </message>
    <message>
        <source> degrees</source>
        <translation>fok</translation>
    </message>
    <message>
        <source> unknown</source>
        <translation>ismeretlen</translation>
    </message>
    <message>
        <source>Received %1 of %2 bytes</source>
        <translation>%1 bájtot fogadtam a %2 bájtból</translation>
    </message>
    <message>
        <source>Received %1 bytes (total unknown)</source>
        <translation>%1 bájtot fogadtam (összes ismeretlen)</translation>
    </message>
    <message>
        <source>Not connected</source>
        <translation>Nincs kapcsolat</translation>
    </message>
    <message>
        <source>Looking up &apos;%1&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Connecting to &apos;%1&apos;</source>
        <translation>Kapcsolódás &apos;%1&apos;-hez</translation>
    </message>
    <message>
        <source>Sending request &apos;%1&apos;</source>
        <translation>&apos;%1&apos; kérés küldése</translation>
    </message>
    <message>
        <source>Receiving reply</source>
        <translation>Válasz fogadása</translation>
    </message>
    <message>
        <source>Response is complete</source>
        <translation>Válasz kész</translation>
    </message>
    <message>
        <source>Closing down connection</source>
        <translation>Kapcsolat lezárása</translation>
    </message>
    <message>
        <source>Label</source>
        <translation>Cimke</translation>
    </message>
    <message>
        <source>Currently only filebased datasets are supported</source>
        <translation>Aktuálisan csak a fájl alapú adathalmazokat támogatom</translation>
    </message>
    <message>
        <source>Loaded default style file from </source>
        <translation>Alapértelmezett stílus betöltése ebből a fájlból</translation>
    </message>
    <message>
        <source>The directory containing your dataset needs to be writeable!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Created default style file as </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>ERROR: Failed to created default style file as </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unable to open </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Project file read error: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> at line </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> column </source>
        <translation type="unfinished">oszlop</translation>
    </message>
    <message>
        <source> for file </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unable to save to file </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No Data Provider Plugins</source>
        <comment>No QGIS data provider plugins found in:</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No vector layers can be loaded. Check your QGIS installation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No Data Providers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No data provider plugins are available. No vector layers can be loaded</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Regular expressions on numeric values don&apos;t make sense. Use comparison instead.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Referenced column wasn&apos;t found: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Division by zero.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>CopyrightLabel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Draws copyright information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Version 0.1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Version 0.2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Loads and displays delimited text files containing x,y coordinates</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add Delimited Text Layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PostgreSQL Geoprocessing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Geoprocessing functions for working with PostgreSQL/PostGIS layers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Georeferencer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Adding projection info to rasters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fit to a linear transform requires at least 2 points.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fit to a Helmert transform requires at least 2 points.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fit to an affine transform requires at least 4 points.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>GPS Tools</source>
        <translation>GPS eszközök</translation>
    </message>
    <message>
        <source>Tools for loading and importing GPS data</source>
        <translation>GPS adat betöltő és importáló eszközök</translation>
    </message>
    <message>
        <source>New centroid</source>
        <translation>Új centrális</translation>
    </message>
    <message>
        <source>New point</source>
        <translation>Új pont</translation>
    </message>
    <message>
        <source>New vertex</source>
        <translation>Új töréspont</translation>
    </message>
    <message>
        <source>Undo last point</source>
        <translation>Utolsó pont visszavonása</translation>
    </message>
    <message>
        <source>Close line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select vertex</source>
        <translation>Válassz töréspontot</translation>
    </message>
    <message>
        <source>Select new position</source>
        <translation>Válassz új pozíciót</translation>
    </message>
    <message>
        <source>Select line segment</source>
        <translation>Válassz vonalszakaszt</translation>
    </message>
    <message>
        <source>New vertex position</source>
        <translation>Új töréspont pozíció</translation>
    </message>
    <message>
        <source>Release</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete vertex</source>
        <translation>Töréspont törlés</translation>
    </message>
    <message>
        <source>Release vertex</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select element</source>
        <translation>Elem választás</translation>
    </message>
    <message>
        <source>New location</source>
        <translation>Új hely</translation>
    </message>
    <message>
        <source>Release selected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete selected / select next</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select position on line</source>
        <translation>Válassz pozíciót a vonalon</translation>
    </message>
    <message>
        <source>Split the line</source>
        <translation>Vonal darabolás</translation>
    </message>
    <message>
        <source>Release the line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select point on line</source>
        <translation>Válassz egy pontot a vonalon</translation>
    </message>
    <message>
        <source>Location: </source>
        <comment>Metadata in GRASS Browser</comment>
        <translation>Hely:</translation>
    </message>
    <message>
        <source>&lt;br&gt;Mapset: </source>
        <comment>Metadata in GRASS Browser</comment>
        <translation>&lt;br&gt;Térkép halmaz:</translation>
    </message>
    <message>
        <source>Location: </source>
        <translation>Hely:</translation>
    </message>
    <message>
        <source>&lt;br&gt;Mapset: </source>
        <translation>&lt;br&gt;Térkép halmaz:</translation>
    </message>
    <message>
        <source>&lt;b&gt;Raster&lt;/b&gt;</source>
        <translation>&lt;b&gt;Raszter&lt;/b&gt;</translation>
    </message>
    <message>
        <source>Cannot open raster header</source>
        <translation>Nem tudom megnyitni a raszterfejlécet</translation>
    </message>
    <message>
        <source>Rows</source>
        <translation>Sorok</translation>
    </message>
    <message>
        <source>Columns</source>
        <translation>Oszlopok</translation>
    </message>
    <message>
        <source>N-S resolution</source>
        <translation>É-D felbontás</translation>
    </message>
    <message>
        <source>E-W resolution</source>
        <translation>K-NY felbontás</translation>
    </message>
    <message>
        <source>North</source>
        <translation>Észak</translation>
    </message>
    <message>
        <source>South</source>
        <translation>Dél</translation>
    </message>
    <message>
        <source>East</source>
        <translation>Kelet</translation>
    </message>
    <message>
        <source>West</source>
        <translation>Nyugat</translation>
    </message>
    <message>
        <source>Format</source>
        <translation>Formátum</translation>
    </message>
    <message>
        <source>Minimum value</source>
        <translation>Minimális érték</translation>
    </message>
    <message>
        <source>Maximum value</source>
        <translation>Maximális érték</translation>
    </message>
    <message>
        <source>Data source</source>
        <translation>Adatforrás</translation>
    </message>
    <message>
        <source>Data description</source>
        <translation>Adat leírás</translation>
    </message>
    <message>
        <source>Comments</source>
        <translation>Megjegyzések</translation>
    </message>
    <message>
        <source>Categories</source>
        <translation>Kategóriák</translation>
    </message>
    <message>
        <source>&lt;b&gt;Vector&lt;/b&gt;</source>
        <translation>&lt;b&gt;Vektor&lt;/b&gt;</translation>
    </message>
    <message>
        <source>Points</source>
        <translation>Pontok</translation>
    </message>
    <message>
        <source>Lines</source>
        <translation>Vonalak</translation>
    </message>
    <message>
        <source>Boundaries</source>
        <translation>Határok</translation>
    </message>
    <message>
        <source>Centroids</source>
        <translation>Centrálisok</translation>
    </message>
    <message>
        <source>Faces</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Kernels</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Areas</source>
        <translation>Területek</translation>
    </message>
    <message>
        <source>Islands</source>
        <translation>Szigetek</translation>
    </message>
    <message>
        <source>Top</source>
        <translation>Felül</translation>
    </message>
    <message>
        <source>Bottom</source>
        <translation>Alul</translation>
    </message>
    <message>
        <source>yes</source>
        <translation>igen</translation>
    </message>
    <message>
        <source>no</source>
        <translation>nem</translation>
    </message>
    <message>
        <source>History&lt;br&gt;</source>
        <translation>Előzmények</translation>
    </message>
    <message>
        <source>&lt;b&gt;Layer&lt;/b&gt;</source>
        <translation>&lt;b&gt;Réteg&lt;/b&gt;</translation>
    </message>
    <message>
        <source>Features</source>
        <translation>Elem</translation>
    </message>
    <message>
        <source>Driver</source>
        <translation type="unfinished">Meghajtó</translation>
    </message>
    <message>
        <source>Database</source>
        <translation type="unfinished">Adatbázis</translation>
    </message>
    <message>
        <source>Table</source>
        <translation type="unfinished">Tábla</translation>
    </message>
    <message>
        <source>Key column</source>
        <translation>Kulcs oszlop</translation>
    </message>
    <message>
        <source>GRASS</source>
        <translation>GRASS</translation>
    </message>
    <message>
        <source>GRASS layer</source>
        <translation>GRASS réteg</translation>
    </message>
    <message>
        <source>Graticule Creator</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Builds a graticule</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>NorthArrow</source>
        <translation type="unfinished">Észak jel</translation>
    </message>
    <message>
        <source>Displays a north arrow overlayed onto the map</source>
        <translation>Észak jel megjelenítése a térképen</translation>
    </message>
    <message>
        <source>[menuitemname]</source>
        <translation>[menuitemname]</translation>
    </message>
    <message>
        <source>[plugindescription]</source>
        <translation>[plugindescription]</translation>
    </message>
    <message>
        <source>Quick Print</source>
        <translation>Gyors nyomtatás</translation>
    </message>
    <message>
        <source>Quick Print is a plugin to quickly print a map with minimal effort.</source>
        <translation>A gyors nyomtatás egy modul a térkép legkisebb erőfeszítéssel történő nyomtatásához.</translation>
    </message>
    <message>
        <source>ScaleBar</source>
        <translation type="unfinished">Lépték</translation>
    </message>
    <message>
        <source>Draws a scale bar</source>
        <translation>Lépték rajzolás</translation>
    </message>
    <message>
        <source>SPIT</source>
        <translation>SPIT</translation>
    </message>
    <message>
        <source>Shapefile to PostgreSQL/PostGIS Import Tool</source>
        <translation>Shape fálj importáló eszköz PostgeSQL/PostGIS-hez</translation>
    </message>
    <message>
        <source>WFS plugin</source>
        <translation>WFS modul</translation>
    </message>
    <message>
        <source>Adds WFS layers to the QGIS canvas</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Couldn&apos;t open the data source: </source>
        <translation>Nem tudom megnyitni ezt az adatforrást:</translation>
    </message>
    <message>
        <source>Parse error at line </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>GPS eXchange format provider</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>GRASS plugin</source>
        <translation>GRASS modul</translation>
    </message>
    <message>
        <source>QGIS couldn&apos;t find your GRASS installation.
Would you like to specify path (GISBASE) to your GRASS installation?</source>
        <translation>A QGIS nem találja a GRASS-t. Meg szeretnéd adni a könyvtárat (GISBASE) a GRASS installációdhoz?</translation>
    </message>
    <message>
        <source>Choose GRASS installation path (GISBASE)</source>
        <translation>Válaszd ki a GRASS telepítési könyvtárat (GISBASE)</translation>
    </message>
    <message>
        <source>GRASS data won&apos;t be available if GISBASE is not specified.</source>
        <translation>GRASS adatok nem érhetők el, ha a GISBASE nincs beállítva.</translation>
    </message>
    <message>
        <source>GISBASE is not set.</source>
        <translation>GISBASE nincs beállítva.</translation>
    </message>
    <message>
        <source> is not a GRASS mapset.</source>
        <translation type="unfinished">nem GRASS térkép halmaz</translation>
    </message>
    <message>
        <source>Cannot start </source>
        <translation>Nem tudom elindítani</translation>
    </message>
    <message>
        <source>Mapset is already in use.</source>
        <translation type="unfinished">A térkép halmazt használja valaki.</translation>
    </message>
    <message>
        <source>Temporary directory </source>
        <translation>Ideiglenes könyvtár</translation>
    </message>
    <message>
        <source> exist but is not writable</source>
        <translation>létezik, de nem írható</translation>
    </message>
    <message>
        <source>Cannot create temporary directory </source>
        <translation>Nem tudom létrehozni az ideiglenes könyvtárat</translation>
    </message>
    <message>
        <source>Cannot create </source>
        <translation>Nem tudom létrehozni</translation>
    </message>
    <message>
        <source>Cannot remove mapset lock: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Figyelmeztetés</translation>
    </message>
    <message>
        <source>Cannot read raster map region</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot read vector map region</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot read region</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgisApp</name>
    <message>
        <source>Quantum GIS - </source>
        <translation>Quantum GIS -</translation>
    </message>
    <message>
        <source>Checking database</source>
        <translation>Adatbázis ellenőrzés</translation>
    </message>
    <message>
        <source>Reading settings</source>
        <translation>Beállítások beolvasása</translation>
    </message>
    <message>
        <source>Setting up the GUI</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Checking provider plugins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Starting Python</source>
        <translation>Python indítása</translation>
    </message>
    <message>
        <source>Restoring loaded plugins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Initializing file filters</source>
        <translation>Fájl szűrők inicializálása</translation>
    </message>
    <message>
        <source>Restoring window state</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>QGIS Ready!</source>
        <translation type="unfinished">QGIS kész!</translation>
    </message>
    <message>
        <source>&amp;New Project</source>
        <translation type="unfinished">Új projekt</translation>
    </message>
    <message>
        <source>Ctrl+N</source>
        <comment>New Project</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Project</source>
        <translation>Új projekt</translation>
    </message>
    <message>
        <source>&amp;Open Project...</source>
        <translation type="unfinished">Projekt nyitás</translation>
    </message>
    <message>
        <source>Ctrl+O</source>
        <comment>Open a Project</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open a Project</source>
        <translation>Projekt nyitás</translation>
    </message>
    <message>
        <source>&amp;Save Project</source>
        <translation type="unfinished">Projekt mentés</translation>
    </message>
    <message>
        <source>Ctrl+S</source>
        <comment>Save Project</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save Project</source>
        <translation>Projekt mentés</translation>
    </message>
    <message>
        <source>Save Project &amp;As...</source>
        <translation type="unfinished">Projekt mentés másként</translation>
    </message>
    <message>
        <source>Ctrl+A</source>
        <comment>Save Project under a new name</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save Project under a new name</source>
        <translation type="unfinished">Projekt mentése más néven</translation>
    </message>
    <message>
        <source>&amp;Print...</source>
        <translation type="unfinished">Nyomtatás</translation>
    </message>
    <message>
        <source>Ctrl+P</source>
        <comment>Print</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Print</source>
        <translation>Nyomtatás</translation>
    </message>
    <message>
        <source>Save as Image...</source>
        <translation type="unfinished">Mentés képként</translation>
    </message>
    <message>
        <source>Ctrl+I</source>
        <comment>Save map as image</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save map as image</source>
        <translation>Térkép mentése képként</translation>
    </message>
    <message>
        <source>Exit</source>
        <translation>Kilépés</translation>
    </message>
    <message>
        <source>Ctrl+Q</source>
        <comment>Exit QGIS</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Exit QGIS</source>
        <translation>Kilépés a QGIS-ből</translation>
    </message>
    <message>
        <source>Add a Vector Layer...</source>
        <translation type="unfinished">Vektor réteg hozzáadása</translation>
    </message>
    <message>
        <source>V</source>
        <comment>Add a Vector Layer</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add a Vector Layer</source>
        <translation>Vektor réteg hozááadása</translation>
    </message>
    <message>
        <source>Add a Raster Layer...</source>
        <translation type="unfinished">Raszter réteg hozzáadása</translation>
    </message>
    <message>
        <source>R</source>
        <comment>Add a Raster Layer</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add a Raster Layer</source>
        <translation>Raszter réteg hozzáadása</translation>
    </message>
    <message>
        <source>Add a PostGIS Layer...</source>
        <translation type="unfinished">PostGIS réteg hozzáadása</translation>
    </message>
    <message>
        <source>D</source>
        <comment>Add a PostGIS Layer</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add a PostGIS Layer</source>
        <translation>PostGIS réteg hozzáadása</translation>
    </message>
    <message>
        <source>New Vector Layer...</source>
        <translation type="unfinished">Új vektor réteg</translation>
    </message>
    <message>
        <source>N</source>
        <comment>Create a New Vector Layer</comment>
        <translation type="unfinished">É</translation>
    </message>
    <message>
        <source>Create a New Vector Layer</source>
        <translation>Új vektor réteg létrehozása</translation>
    </message>
    <message>
        <source>Remove Layer</source>
        <translation>Réteg törlés</translation>
    </message>
    <message>
        <source>Ctrl+D</source>
        <comment>Remove a Layer</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Remove a Layer</source>
        <translation>Egy réteg törlése</translation>
    </message>
    <message>
        <source>Add All To Overview</source>
        <translation>Mindent hozzáad az áttekintőhöz</translation>
    </message>
    <message>
        <source>+</source>
        <comment>Show all layers in the overview map</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show all layers in the overview map</source>
        <translation>Minden réteg megjelenítése az áttekintő térképen</translation>
    </message>
    <message>
        <source>Remove All From Overview</source>
        <translation>Mindent kivesz az áttekintőből</translation>
    </message>
    <message>
        <source>-</source>
        <comment>Remove all layers from overview map</comment>
        <translation type="unfinished">-</translation>
    </message>
    <message>
        <source>Remove all layers from overview map</source>
        <translation>Minden réteg kivétele az áttekintő térképből</translation>
    </message>
    <message>
        <source>Show All Layers</source>
        <translation>Minden réteget mutat</translation>
    </message>
    <message>
        <source>S</source>
        <comment>Show all layers</comment>
        <translation type="unfinished">D</translation>
    </message>
    <message>
        <source>Show all layers</source>
        <translation>Minden réteget mutat</translation>
    </message>
    <message>
        <source>Hide All Layers</source>
        <translation>Minden réteget elrejt</translation>
    </message>
    <message>
        <source>H</source>
        <comment>Hide all layers</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hide all layers</source>
        <translation>Minden réteget elrejt</translation>
    </message>
    <message>
        <source>Project Properties...</source>
        <translation>Projekt tulajdonságok...</translation>
    </message>
    <message>
        <source>P</source>
        <comment>Set project properties</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set project properties</source>
        <translation>Projekt tulajdonságok beállítása</translation>
    </message>
    <message>
        <source>Options...</source>
        <translation>Opciók...</translation>
    </message>
    <message>
        <source>Change various QGIS options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Custom Projection...</source>
        <translation type="unfinished">Egyedi vetület</translation>
    </message>
    <message>
        <source>Manage custom projections</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Help Contents</source>
        <translation>Súgó tartalom</translation>
    </message>
    <message>
        <source>Ctrl+?</source>
        <comment>Help Documentation (Mac)</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>F1</source>
        <comment>Help Documentation</comment>
        <translation type="unfinished">F1</translation>
    </message>
    <message>
        <source>Help Documentation</source>
        <translation>Súgó</translation>
    </message>
    <message>
        <source>Qgis Home Page</source>
        <translation>Qgis honlap</translation>
    </message>
    <message>
        <source>Ctrl+H</source>
        <comment>QGIS Home Page</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>QGIS Home Page</source>
        <translation>QGIS honlap</translation>
    </message>
    <message>
        <source>About</source>
        <translation>Névjegy</translation>
    </message>
    <message>
        <source>About QGIS</source>
        <translation>QGIS névjegye</translation>
    </message>
    <message>
        <source>Check Qgis Version</source>
        <translation>Qgis verzió ellenőrzés</translation>
    </message>
    <message>
        <source>Check if your QGIS version is up to date (requires internet access)</source>
        <translation>QGIS verzió aktualitásának ellenőrzése (internet kapcsolat szükséges)</translation>
    </message>
    <message>
        <source>Refresh</source>
        <translation>Firssítés</translation>
    </message>
    <message>
        <source>Ctrl+R</source>
        <comment>Refresh Map</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Refresh Map</source>
        <translation type="unfinished">Térkép újrarajzolás</translation>
    </message>
    <message>
        <source>Zoom In</source>
        <translation>Nagyítás</translation>
    </message>
    <message>
        <source>Ctrl++</source>
        <comment>Zoom In</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Zoom Out</source>
        <translation>Kicsinyítés</translation>
    </message>
    <message>
        <source>Ctrl+-</source>
        <comment>Zoom Out</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Zoom Full</source>
        <translation>Teljes nagyítás</translation>
    </message>
    <message>
        <source>F</source>
        <comment>Zoom to Full Extents</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Zoom to Full Extents</source>
        <translation>Teljes terjedelemre nagyítás</translation>
    </message>
    <message>
        <source>Zoom To Selection</source>
        <translation>Szelekcióra nagyítás</translation>
    </message>
    <message>
        <source>Ctrl+F</source>
        <comment>Zoom to selection</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Zoom to selection</source>
        <translation type="unfinished">Szelekcióra nagyítás</translation>
    </message>
    <message>
        <source>Pan Map</source>
        <translation type="unfinished">Térkép eltolás</translation>
    </message>
    <message>
        <source>Pan the map</source>
        <translation>A térkép eltolása</translation>
    </message>
    <message>
        <source>Zoom Last</source>
        <translation>Előző nagyítás</translation>
    </message>
    <message>
        <source>Zoom to Last Extent</source>
        <translation type="unfinished">Nagyítás az utolsó kiterjedésre</translation>
    </message>
    <message>
        <source>Zoom To Layer</source>
        <translation>Rétegre nagyítás</translation>
    </message>
    <message>
        <source>Zoom to Layer</source>
        <translation>Rétegre nagyítás</translation>
    </message>
    <message>
        <source>Identify Features</source>
        <translation>Elem azonosítás</translation>
    </message>
    <message>
        <source>I</source>
        <comment>Click on features to identify them</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Click on features to identify them</source>
        <translation>Katiins az elemre az azonosításhoz</translation>
    </message>
    <message>
        <source>Select Features</source>
        <translation>Elem szelektálás</translation>
    </message>
    <message>
        <source>Open Table</source>
        <translation type="unfinished">Tábla nyitás</translation>
    </message>
    <message>
        <source>Measure Line </source>
        <translation type="unfinished">Hosszmérés</translation>
    </message>
    <message>
        <source>Ctrl+M</source>
        <comment>Measure a Line</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Measure a Line</source>
        <translation>Hosszmérés</translation>
    </message>
    <message>
        <source>Measure Area</source>
        <translation>Területmérés</translation>
    </message>
    <message>
        <source>Ctrl+J</source>
        <comment>Measure an Area</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Measure an Area</source>
        <translation>Egy terület lemérése</translation>
    </message>
    <message>
        <source>Show Bookmarks</source>
        <translation>Könyvjelzők megjelenítése</translation>
    </message>
    <message>
        <source>B</source>
        <comment>Show Bookmarks</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show most toolbars</source>
        <translation>Eszköztárak megjelenítése</translation>
    </message>
    <message>
        <source>T</source>
        <comment>Show most toolbars</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hide most toolbars</source>
        <translation>Eszköztárak elrejtése</translation>
    </message>
    <message>
        <source>Ctrl+T</source>
        <comment>Hide most toolbars</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Bookmark...</source>
        <translation>Új könyvjelző...</translation>
    </message>
    <message>
        <source>Ctrl+B</source>
        <comment>New Bookmark</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Bookmark</source>
        <translation>Új könyvjelző</translation>
    </message>
    <message>
        <source>Add WMS Layer...</source>
        <translation type="unfinished">WMS réteg hozzáadás</translation>
    </message>
    <message>
        <source>W</source>
        <comment>Add Web Mapping Server Layer</comment>
        <translation type="unfinished">Ny</translation>
    </message>
    <message>
        <source>Add Web Mapping Server Layer</source>
        <translation>Réteg hozzáadás webes térképszerverről</translation>
    </message>
    <message>
        <source>In Overview</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>O</source>
        <comment>Add current layer to overview map</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add current layer to overview map</source>
        <translation type="unfinished">Aktuális réteg hozzáadás az áttekintő térképhez</translation>
    </message>
    <message>
        <source>Plugin Manager...</source>
        <translation type="unfinished">Modul menedzser</translation>
    </message>
    <message>
        <source>Open the plugin manager</source>
        <translation>Modul menedzser megnyitása</translation>
    </message>
    <message>
        <source>Toggle editing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Toggles the editing state of the current layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Capture Point</source>
        <translation>Pont digitalizálás</translation>
    </message>
    <message>
        <source>.</source>
        <comment>Capture Points</comment>
        <translation type="unfinished">.</translation>
    </message>
    <message>
        <source>Capture Points</source>
        <translation>Pont digitalizálás</translation>
    </message>
    <message>
        <source>Capture Line</source>
        <translation>Vonal digitalizálás</translation>
    </message>
    <message>
        <source>/</source>
        <comment>Capture Lines</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Capture Lines</source>
        <translation>Vonal digitalizálás</translation>
    </message>
    <message>
        <source>Capture Polygon</source>
        <translation>Felület digitalizálás</translation>
    </message>
    <message>
        <source>Ctrl+/</source>
        <comment>Capture Polygons</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Capture Polygons</source>
        <translation>Felület digitalizálás</translation>
    </message>
    <message>
        <source>Delete Selected</source>
        <translation>Szelektáltak törlése</translation>
    </message>
    <message>
        <source>Move Feature</source>
        <translation>Elem mozgatása</translation>
    </message>
    <message>
        <source>Split Features</source>
        <translation>Elemek darabolása</translation>
    </message>
    <message>
        <source>Add Vertex</source>
        <translation>Töréspont hozzáadás</translation>
    </message>
    <message>
        <source>Delete Vertex</source>
        <translation>Töréspont törlés</translation>
    </message>
    <message>
        <source>Move Vertex</source>
        <translation>Töréspont mozgatás</translation>
    </message>
    <message>
        <source>Add Ring</source>
        <translation>Gyűrű hozzáadás</translation>
    </message>
    <message>
        <source>Add Island</source>
        <translation>Sziiget hozzáadás</translation>
    </message>
    <message>
        <source>Add Island to multipolygon</source>
        <translation>Sziget hozzáadása összetett felülethez</translation>
    </message>
    <message>
        <source>Cut Features</source>
        <translation>Elemek vágólapra mozgatása</translation>
    </message>
    <message>
        <source>Cut selected features</source>
        <translation>Szelektált elemek vágólapra mozgatása</translation>
    </message>
    <message>
        <source>Copy Features</source>
        <translation>Elemek másolása vágólapra</translation>
    </message>
    <message>
        <source>Copy selected features</source>
        <translation>Szelektált elemek másolása vágólapra</translation>
    </message>
    <message>
        <source>Paste Features</source>
        <translation>Elemek beillesztése vágólapról</translation>
    </message>
    <message>
        <source>Paste selected features</source>
        <translation>Szelektált elemek beillesztése vágólapról</translation>
    </message>
    <message>
        <source>Map Tips</source>
        <translation>Térkép tippek</translation>
    </message>
    <message>
        <source>Show information about a feature when the mouse is hovered over it</source>
        <translation>Információ mergjelenítése az elemről amikor az egér felette áll</translation>
    </message>
    <message>
        <source>Python console</source>
        <translation>Phyton konzol</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Fájl</translation>
    </message>
    <message>
        <source>&amp;Open Recent Projects</source>
        <translation>K&amp;orábbi projektel megnyitása</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Layer</source>
        <translation type="unfinished">Réteg</translation>
    </message>
    <message>
        <source>&amp;Settings</source>
        <translation type="unfinished">Beállítások</translation>
    </message>
    <message>
        <source>&amp;Plugins</source>
        <translation type="unfinished">Modulok</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation type="unfinished">Súgó</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Fájl</translation>
    </message>
    <message>
        <source>Manage Layers</source>
        <translation>Réteg kezelés</translation>
    </message>
    <message>
        <source>Help</source>
        <translation>Súgó</translation>
    </message>
    <message>
        <source>Digitizing</source>
        <translation>Digitalizálás</translation>
    </message>
    <message>
        <source>Map Navigation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Attributes</source>
        <translation type="unfinished">Attribútumok</translation>
    </message>
    <message>
        <source>Plugins</source>
        <translation>Modulok</translation>
    </message>
    <message>
        <source>Toolbar Visibility...</source>
        <translation>Eszköztár láthatóság...</translation>
    </message>
    <message>
        <source>Progress bar that displays the status of rendering layers and other time-intensive operations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scale </source>
        <translation>Méretarány</translation>
    </message>
    <message>
        <source>Current map scale</source>
        <translation>Aktuális térképi méretarány</translation>
    </message>
    <message>
        <source>Displays the current map scale</source>
        <translation>Aktuális térképi méretarány megjelenítése</translation>
    </message>
    <message>
        <source>Current map scale (formatted as x:y)</source>
        <translation>Aktuális térképi méretarány (x:y formában)</translation>
    </message>
    <message>
        <source>Shows the map coordinates at the current cursor position. The display is continuously updated as the mouse is moved.</source>
        <translation>Az aktuális egér pozíció koordinátáinak megjelenítése. A megjelenítés folyamatosan változik, ahogy az egér mozog.</translation>
    </message>
    <message>
        <source>Map coordinates at mouse cursor position</source>
        <translation>Tréképi koordináták az egér pozícióban</translation>
    </message>
    <message>
        <source>Render</source>
        <translation type="unfinished">Megjelenít</translation>
    </message>
    <message>
        <source>When checked, the map layers are rendered in response to map navigation commands and other events. When not checked, no rendering is done. This allows you to add a large number of layers and symbolize them before rendering.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Toggle map rendering</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This icon shows whether on the fly projection is enabled or not. Click the icon to bring up the project properties dialog to alter this behaviour.</source>
        <translation type="unfinished">Ez az ikon jelzi, hogy a röptében vetítés engedélyezett-e. Kattints az ikonra a projekt tulajdonságok megjelenítéséhez és ennek a viselkedésnek a módosításához.</translation>
    </message>
    <message>
        <source>Projection status - Click to open projection dialog</source>
        <translation type="unfinished">Vetület állapot - Kattints ide a vetület párbeszédablak megnyitásához</translation>
    </message>
    <message>
        <source>Ready</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Map canvas. This is where raster and vector layers are displayed when added to the map</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Map overview canvas. This canvas can be used to display a locator map that shows the current extent of the map canvas. The current extent is shown as a red rectangle. Any layer on the map can be added to the overview canvas.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Map legend that displays all the layers currently on the map canvas. Click on the check box to turn a layer on or off. Double click on a layer in the legend to customize its appearance and set other properties.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Version </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> with PostgreSQL support</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> (no PostgreSQL support)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>
Compiled against Qt </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>, running against Qt </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Quantum GIS is licensed under the GNU General Public License</source>
        <translation type="unfinished">A Quantum GIS-re a GNU General Public License érvényes</translation>
    </message>
    <message>
        <source>http://www.gnu.org/licenses</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Version</source>
        <translation>Verzió</translation>
    </message>
    <message>
        <source>New features</source>
        <translation>Új elemek</translation>
    </message>
    <message>
        <source>This release candidate includes over 40 bug fixes and enchancements over the QGIS 0.9.1 release. In addition we have added the following new features:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Imrovements to digitising capabilities.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Supporting default and defined styles (.qml) files for file based vector layers. With styles you can save the symbolisation and other settings associated with a vector layer and they will be loaded whenever you load that layer.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Improved support for transparency and contrast stretching in raster layers. Support for color ramps in raster layers. Support for non-north up rasters. Many other raster improvements &apos;under the hood&apos;.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Available Data Provider Plugins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Python error</source>
        <translation type="unfinished">Phyton hiba</translation>
    </message>
    <message>
        <source>Error when reading metadata of plugin </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open an OGR Supported Vector Layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>is not a valid or recognized data source</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Invalid Data Source</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Invalid Layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>%1 is an invalid layer and cannot be loaded.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save As</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose a QGIS project file to open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>QGIS Project Read Error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Try to find missing layers?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unable to open project</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose a QGIS project file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Saved project to:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unable to save project</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unable to save project to </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unable to save project </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose a filename to save the QGIS project file as</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>QGIS: Unable to load project</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unable to load project </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose a filename to save the map image as</source>
        <translation type="unfinished">Válassz egy fájlnevet a kép elmentéséhez</translation>
    </message>
    <message>
        <source>Saved map image to</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No Layer Selected</source>
        <translation type="unfinished">Nincs szelektált réteg</translation>
    </message>
    <message>
        <source>To delete features, you must select a vector layer in the legend</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No Vector Layer Selected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Deleting features only works on vector layers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Provider does not support deletion</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Data provider does not support deleting features</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Layer not editable</source>
        <translation type="unfinished">A réteg nem szerkeszthető</translation>
    </message>
    <message>
        <source>The current layer is not editable. Choose &apos;Start editing&apos; in the digitizing toolbar.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Problem deleting features</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A problem occured during deletion of features</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Invalid scale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error Loading Plugin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>There was an error loading %1.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No MapLayer Plugins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No MapLayer plugins in ../plugins/maplayer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No Plugins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No plugins found in ../plugins. To test plugins, start qgis from the src directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished">Név</translation>
    </message>
    <message>
        <source>Plugin %1 is named %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Plugin Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>QGis loaded the following plugin:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Version: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Description: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unable to Load Plugin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>QGIS was unable to load the plugin from: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>There is a new version of QGIS available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>You are running a development version of QGIS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>You are running the current version of QGIS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Would you like more information?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>QGIS Version Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>QGIS - Changes in SVN Since Last Release</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unable to get current version information from server</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Connection refused - server may be down</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>QGIS server was not found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Network error while communicating with server</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unknown network socket error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unable to communicate with QGIS Version server</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Layer is not valid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The layer is not a valid layer and can not be added to the map</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do you want to save the current project?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Extents: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Clipboard contents set to: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open a GDAL Supported Raster Data Source</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> is not a valid or recognized raster data source</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> is not a supported raster data source</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unsupported Data Source</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enter a name for the new bookmark:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error</source>
        <translation type="unfinished">Hiba</translation>
    </message>
    <message>
        <source>Unable to create the bookmark. Your user database may be missing or corrupted</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Project file is older</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;p&gt;This project file was saved by an older version of QGIS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> When saving this project file, QGIS will update it to the latest version, possibly rendering it useless for older versions of QGIS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;p&gt;Even though QGIS developers try to maintain backwards compatibility, some of the information from the old project file might be lost.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> To improve the quality of QGIS, we appreciate if you file a bug report at %3.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> Be sure to include the old project file, and state the version of QGIS you used to discover the error.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;p&gt;To remove this warning when opening an older project file, uncheck the box &apos;%5&apos; in the %4 menu.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;p&gt;Version of the project file: %1&lt;br&gt;Current version of QGIS: %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;tt&gt;Settings:Options:General&lt;/tt&gt;</source>
        <comment>Menu path to setting options</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Warn me when opening a project file saved with an older version of QGIS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Toggle full screen mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ctrl-F</source>
        <comment>Toggle fullscreen mode</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Toggle fullscreen mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source></source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgisAppBase</name>
    <message>
        <source>MainWindow</source>
        <translation>Fő ablak</translation>
    </message>
    <message>
        <source>Legend</source>
        <translation>Jelmagyarázat</translation>
    </message>
    <message>
        <source>Map View</source>
        <translation>Térkép</translation>
    </message>
</context>
<context>
    <name>QgsAbout</name>
    <message>
        <source>Quantum GIS is licensed under the GNU General Public License</source>
        <translation type="obsolete">A Quantum GIS-re a GNU General Public License érvényes</translation>
    </message>
    <message>
        <source>QGIS Sponsors</source>
        <translation type="obsolete">QGIS szponzorok</translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="obsolete">Név</translation>
    </message>
    <message>
        <source>Website</source>
        <translation type="obsolete">Honlap</translation>
    </message>
    <message>
        <source>QGIS Browser Selection</source>
        <translation type="obsolete">QGIS böngésző szelektálás</translation>
    </message>
    <message>
        <source>Enter the name of a web browser to use (eg. konqueror).
Enter the full path if the browser is not in your PATH.
You can change this option later by selection Options from the Settings menu (Help Browser tab).</source>
        <translation type="obsolete">Add meg a használandó böngésző program nevét (pl. konqueror). A teljes elérési utat add meg, ha a böngészó program nincs a PATH-on. Később a Beállítások menü Opciók pontjával módosíthatod ezt.</translation>
    </message>
    <message>
        <source>About Quantum GIS</source>
        <translation>Quantum GIS névjegy</translation>
    </message>
    <message>
        <source>About</source>
        <translation>Névjegy</translation>
    </message>
    <message>
        <source>&lt;h2&gt;Quantum GIS (qgis)&lt;/h2&gt;</source>
        <translation>&lt;h2&gt;Quantum GIS (qgis)&lt;/h2&gt;</translation>
    </message>
    <message>
        <source>Version</source>
        <translation>Verzió</translation>
    </message>
    <message>
        <source>QGIS Home Page</source>
        <translation>QGIS honlap</translation>
    </message>
    <message>
        <source>Subscribe to the QGIS-User mailing list</source>
        <translation>QGIS-User levelező listára feliratkozás</translation>
    </message>
    <message>
        <source>What&apos;s New</source>
        <translation>Mi az újdonság</translation>
    </message>
    <message>
        <source>Developers</source>
        <translation>Fejlesztők</translation>
    </message>
    <message>
        <source>&lt;h2&gt;QGIS Developers&lt;/h2&gt;</source>
        <translation>&lt;h2&gt;QGIS fejlesztők&lt;/h2&gt;</translation>
    </message>
    <message>
        <source>Providers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sponsors</source>
        <translation>Szponzorok</translation>
    </message>
    <message>
        <source>Ok</source>
        <translation>Ok</translation>
    </message>
</context>
<context>
    <name>QgsAddAttrDialogBase</name>
    <message>
        <source>Add Attribute</source>
        <translation>Attribútum hozzáadás</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Mégsem</translation>
    </message>
    <message>
        <source>Type:</source>
        <translation>Típus:</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation>Név:</translation>
    </message>
</context>
<context>
    <name>QgsAttributeActionDialog</name>
    <message>
        <source>Name</source>
        <translation>Név</translation>
    </message>
    <message>
        <source>Action</source>
        <translation>Művelet</translation>
    </message>
    <message>
        <source>Capture</source>
        <translation>Digitalizál</translation>
    </message>
    <message>
        <source>Select an action</source>
        <comment>File dialog window title</comment>
        <translation>Válassz egy műveletet</translation>
    </message>
</context>
<context>
    <name>QgsAttributeActionDialogBase</name>
    <message>
        <source>Form1</source>
        <translation type="unfinished">Form1</translation>
    </message>
    <message>
        <source>Remove the selected action</source>
        <translation>Szelektált művelet törlése</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Törlés</translation>
    </message>
    <message>
        <source>Move the selected action down</source>
        <translation>A szelektált művelet mozgatása lefelé</translation>
    </message>
    <message>
        <source>Move down</source>
        <translation type="unfinished">Mozgatás lefelé</translation>
    </message>
    <message>
        <source>Move the selected action up</source>
        <translation type="unfinished">Szelektált művelet mozgatása felfelé</translation>
    </message>
    <message>
        <source>Move up</source>
        <translation>Mozgatás felfelé</translation>
    </message>
    <message>
        <source>This list contains all actions that have been defined for the current layer. Add actions by entering the details in the controls below and then pressing the Insert action button. Actions can be edited here by double clicking on the item.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The valid attribute names for this layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Browse for action commands</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Browse</source>
        <translation>Tallóz</translation>
    </message>
    <message>
        <source>Inserts the selected field into the action, prepended with a %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Insert field</source>
        <translation type="unfinished">Mező beillsztés</translation>
    </message>
    <message>
        <source>Update the selected action</source>
        <translation>A szelektált művelet frissítése</translation>
    </message>
    <message>
        <source>Update action</source>
        <translation>Művelet frissítése</translation>
    </message>
    <message>
        <source>Inserts the action into the list above</source>
        <translation>Művelet beillesztése a fenti listába</translation>
    </message>
    <message>
        <source>Insert action</source>
        <translation>Művelet beillesztés</translation>
    </message>
    <message>
        <source>Captures any output from the action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Captures the standard output or error generated by the action and displays it in a dialog box</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Capture output</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enter the action command here</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enter the action here. This can be any program, script or command that is available on your system. When the action is invoked any set of characters that start with a % and then have the name of a field will be replaced by the value of that field. The special characters %% will be replaced by the value of the field that was selected. Double quote marks group text into single arguments to the program, script or command. Double quotes will be ignored if preceeded by a backslash</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Action:</source>
        <translation>Művelet:</translation>
    </message>
    <message>
        <source>Enter the action name here</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enter the name of an action here. The name should be unique (qgis will make it unique if necessary).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name:</source>
        <translation>Név:</translation>
    </message>
</context>
<context>
    <name>QgsAttributeDialogBase</name>
    <message>
        <source>Enter Attribute Values</source>
        <translation>Add meg az attribútum értékeket</translation>
    </message>
    <message>
        <source>1</source>
        <translation>1</translation>
    </message>
    <message>
        <source>Attribute</source>
        <translation>Attribútum</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Érték</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished">Mégsem</translation>
    </message>
</context>
<context>
    <name>QgsAttributeTable</name>
    <message>
        <source>Run action</source>
        <translation>Művelet futtatása</translation>
    </message>
</context>
<context>
    <name>QgsAttributeTableBase</name>
    <message>
        <source>Attribute Table</source>
        <translation type="unfinished">Attribútum tábla</translation>
    </message>
    <message>
        <source>Remove selection</source>
        <translation>Szelekció megszüntetése</translation>
    </message>
    <message>
        <source>Move selected to top</source>
        <translation>Szelektált legfelülre mozgatása</translation>
    </message>
    <message>
        <source>Ctrl+T</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Invert selection</source>
        <translation>Szelekció megfordítsa</translation>
    </message>
    <message>
        <source>Ctrl+S</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy selected rows to clipboard (Ctrl+C)</source>
        <translation>Szelektált sorok másolása a vágólapra (Ctrl+C)</translation>
    </message>
    <message>
        <source>Copies the selected rows to the clipboard</source>
        <translation>Szelektált sorok másolása a vágólapra</translation>
    </message>
    <message>
        <source>Ctrl+C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Zoom map to the selected rows (Ctrl-F)</source>
        <translation>Térkép nagyítás a szelektált sorokra</translation>
    </message>
    <message>
        <source>Zoom map to the selected rows</source>
        <translation>Térkép nagyítás a szelektált sorokra</translation>
    </message>
    <message>
        <source>Ctrl+F</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New column</source>
        <translation>Új oszlop</translation>
    </message>
    <message>
        <source>Ctrl+N</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete column</source>
        <translation>Oszlop törlés</translation>
    </message>
    <message>
        <source>Ctrl+X</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Start editing</source>
        <translation>Szerkesztés kezdése</translation>
    </message>
    <message>
        <source>Stop editin&amp;g</source>
        <translation type="unfinished">Szerkesztés lezárása</translation>
    </message>
    <message>
        <source>Alt+G</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation type="unfinished">Súgó</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="unfinished">Alt+C</translation>
    </message>
    <message>
        <source>Search for:</source>
        <translation>Keresett:</translation>
    </message>
    <message>
        <source>in</source>
        <translation type="unfinished">ebben</translation>
    </message>
    <message>
        <source>Search</source>
        <translation>Keres</translation>
    </message>
    <message>
        <source>Adva&amp;nced...</source>
        <translation type="unfinished">Haladó</translation>
    </message>
    <message>
        <source>Alt+N</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished">Lezár</translation>
    </message>
</context>
<context>
    <name>QgsAttributeTableDisplay</name>
    <message>
        <source>select</source>
        <translation>szelektál</translation>
    </message>
    <message>
        <source>select and bring to top</source>
        <translation>szelektál és előre hoz</translation>
    </message>
    <message>
        <source>show only matching</source>
        <translation>csak az egyezőket mutasd</translation>
    </message>
    <message>
        <source>Name conflict</source>
        <translation>Név ütközés</translation>
    </message>
    <message>
        <source>The attribute could not be inserted. The name already exists in the table.</source>
        <translation type="unfinished">Az attribútumot nem tudom beszúrni. A név már szerepel a táblában.</translation>
    </message>
    <message>
        <source>Stop editing</source>
        <translation>Szerkesztés vége</translation>
    </message>
    <message>
        <source>Do you want to save the changes?</source>
        <translation>Akarod menteni a változásokat?</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>Hiba</translation>
    </message>
    <message>
        <source>Could not commit changes</source>
        <translation>Nem tudom menteni a változásokat</translation>
    </message>
    <message>
        <source>Search string parsing error</source>
        <translation>Keresési minta hibás</translation>
    </message>
    <message>
        <source>Search results</source>
        <translation>Keresés eredmények</translation>
    </message>
    <message>
        <source>You&apos;ve supplied an empty search string.</source>
        <translation>Üres keresési mintát adtál meg.</translation>
    </message>
    <message>
        <source>Error during search</source>
        <translation>Hiba a keresés közben</translation>
    </message>
    <message>
        <source>Found %d matching features.</source>
        <translation type="obsolete">%d megfelelő elemet találtam.</translation>
    </message>
    <message>
        <source>No matching features found.</source>
        <translation>Nem találtam megfelelő elemet.</translation>
    </message>
</context>
<context>
    <name>QgsBookmarks</name>
    <message>
        <source>Really Delete?</source>
        <translation>Valóban törlöd?</translation>
    </message>
    <message>
        <source>Are you sure you want to delete the </source>
        <translation>Biztos, hogy törölni akarod ezt</translation>
    </message>
    <message>
        <source> bookmark?</source>
        <translation>könyvjelző?</translation>
    </message>
    <message>
        <source>Error deleting bookmark</source>
        <translation>Hiba a könyvjelző törlése során</translation>
    </message>
    <message>
        <source>Failed to delete the </source>
        <translation>Nem sikerült törölni</translation>
    </message>
    <message>
        <source> bookmark from the database. The database said:
</source>
        <translation type="unfinished">könyvjelzőt az adatbázisból. Adatbázis válasza:</translation>
    </message>
</context>
<context>
    <name>QgsBookmarksBase</name>
    <message>
        <source>Geospatial Bookmarks</source>
        <translation>Térinformatikai könyvjelző</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Név</translation>
    </message>
    <message>
        <source>Project</source>
        <translation>Projekt</translation>
    </message>
    <message>
        <source>Extent</source>
        <translation>Terjedelem</translation>
    </message>
    <message>
        <source>Id</source>
        <translation type="unfinished">Id</translation>
    </message>
    <message>
        <source>Help</source>
        <translation>Súgó</translation>
    </message>
    <message>
        <source>Close the dialog</source>
        <translation>Párbeszédablak lezárása</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Lezár</translation>
    </message>
    <message>
        <source>Delete the currently selected bookmark</source>
        <translation>A szelektált könyvjelző törlése</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Törlés</translation>
    </message>
    <message>
        <source>Zoom to the currently selected bookmark</source>
        <translation>Nagyítás a szelektált könyvjelzőre</translation>
    </message>
    <message>
        <source>Zoom To</source>
        <translation>Nagyítás erre</translation>
    </message>
</context>
<context>
    <name>QgsComposer</name>
    <message>
        <source>QGIS - print composer</source>
        <translation>QGIS - nyomtatás vezérlő</translation>
    </message>
    <message>
        <source>Map 1</source>
        <translation>1. Térkép</translation>
    </message>
    <message>
        <source>Couldn&apos;t open </source>
        <translation>Nem tudom megnyitni</translation>
    </message>
    <message>
        <source> for read/write</source>
        <translation>olvasásra/irásra</translation>
    </message>
    <message>
        <source>Error in Print</source>
        <translation>Hiba a nyomtatás közben</translation>
    </message>
    <message>
        <source>Cannot seek</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot overwrite BoundingBox</source>
        <translation>Nem tudom felülírni a befoglaló téglalapot</translation>
    </message>
    <message>
        <source>Cannot find BoundingBox</source>
        <translation>Nem találom a befoglaló téglalapot</translation>
    </message>
    <message>
        <source>Cannot overwrite translate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot find translate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>File IO Error</source>
        <translation>Fájl IO hiba</translation>
    </message>
    <message>
        <source>Paper does not match</source>
        <translation>Papír nem egyezik</translation>
    </message>
    <message>
        <source>The selected paper size does not match the composition size</source>
        <translation>A kiválasztott papírméret nem egyezik az összeállítás méretével</translation>
    </message>
    <message>
        <source>Big image</source>
        <translation>Nagy kép</translation>
    </message>
    <message>
        <source>To create image </source>
        <translation>A kép létrehozása</translation>
    </message>
    <message>
        <source> requires circa </source>
        <translation type="unfinished">szükséges kb.</translation>
    </message>
    <message>
        <source> MB of memory</source>
        <translation>MB memória</translation>
    </message>
    <message>
        <source>format</source>
        <translation>formátum</translation>
    </message>
    <message>
        <source>Choose a filename to save the map image as</source>
        <translation>Válassz egy fájlnevet a kép elmentéséhez</translation>
    </message>
    <message>
        <source>SVG warning</source>
        <translation>SVG figyelmeztetés</translation>
    </message>
    <message>
        <source>Don&apos;t show this message again</source>
        <translation>Ne mutasd többé ezt az üzenetet</translation>
    </message>
    <message>
        <source>&lt;p&gt;The SVG export function in Qgis has several problems due to bugs and deficiencies in the Qt4 svg code. Of note, text does not appear in the SVG file and there are problems with the map bounding box clipping other items such as the legend or scale bar.&lt;/p&gt;If you require a vector-based output file from Qgis it is suggested that you try printing to PostScript if the SVG output is not satisfactory.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose a filename to save the map as</source>
        <translation>Válassz egy fájlnevet a térkép másként mentéséhez</translation>
    </message>
    <message>
        <source>SVG Format</source>
        <translation>SVG formátum</translation>
    </message>
</context>
<context>
    <name>QgsComposerBase</name>
    <message>
        <source>MainWindow</source>
        <translation>Fő ablak</translation>
    </message>
    <message>
        <source>General</source>
        <translation>Általános</translation>
    </message>
    <message>
        <source>Composition</source>
        <translation>Összeállítás</translation>
    </message>
    <message>
        <source>Item</source>
        <translation>Elem</translation>
    </message>
    <message>
        <source>Help</source>
        <translation>Súgó</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Lezár</translation>
    </message>
    <message>
        <source>&amp;Open Template ...</source>
        <translation type="unfinished">Sablon nyitás</translation>
    </message>
    <message>
        <source>Save Template &amp;As...</source>
        <translation type="unfinished">Sablon mentés másként ...</translation>
    </message>
    <message>
        <source>&amp;Print...</source>
        <translation type="unfinished">Nyomtatás</translation>
    </message>
    <message>
        <source>Zoom All</source>
        <translation>Nagyítás terjedelemre</translation>
    </message>
    <message>
        <source>Zoom In</source>
        <translation>Nagyítás</translation>
    </message>
    <message>
        <source>Zoom Out</source>
        <translation>Kicsinyítés</translation>
    </message>
    <message>
        <source>Add new map</source>
        <translation>Új térkép hozzáadás</translation>
    </message>
    <message>
        <source>Add new label</source>
        <translation>Új címke hozzáadás</translation>
    </message>
    <message>
        <source>Add new vect legend</source>
        <translation>Új vektor jelmagyarázat</translation>
    </message>
    <message>
        <source>Select/Move item</source>
        <translation>Elem szelektálás és mozgatás</translation>
    </message>
    <message>
        <source>Export as image</source>
        <translation>Képként exportálás</translation>
    </message>
    <message>
        <source>Export as SVG</source>
        <translation>SVG-ként exportálás</translation>
    </message>
    <message>
        <source>Add new scalebar</source>
        <translation type="unfinished">Új lépték vonalzó</translation>
    </message>
    <message>
        <source>Refresh view</source>
        <translation>Ablak frissítés</translation>
    </message>
    <message>
        <source>Add Image</source>
        <translation>Kép hozzáadás</translation>
    </message>
</context>
<context>
    <name>QgsComposerLabelBase</name>
    <message>
        <source>Label Options</source>
        <translation>Cimke beállítások</translation>
    </message>
    <message>
        <source>Font</source>
        <translation>Betükészlet</translation>
    </message>
    <message>
        <source>Box</source>
        <translation>Téglalap</translation>
    </message>
</context>
<context>
    <name>QgsComposerMap</name>
    <message>
        <source>Map %1</source>
        <translation>%1 térkép</translation>
    </message>
    <message>
        <source>Extent (calculate scale)</source>
        <translation>Terjedelem (méretarány számítás)</translation>
    </message>
    <message>
        <source>Scale (calculate extent)</source>
        <translation>Méretarány (terjedelem számítás)</translation>
    </message>
    <message>
        <source>Cache</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Render</source>
        <translation>Megjelenít</translation>
    </message>
    <message>
        <source>Rectangle</source>
        <translation>Téglalap</translation>
    </message>
</context>
<context>
    <name>QgsComposerMapBase</name>
    <message>
        <source>Map options</source>
        <translation>Térkép beállítások</translation>
    </message>
    <message>
        <source>Set map extent to current extent in QGIS map canvas</source>
        <translation>Térkép terjedelem beállítása az aktuális QGIS térkép terjedelmére</translation>
    </message>
    <message>
        <source>Set Extent</source>
        <translation>Terjedelem beállítás</translation>
    </message>
    <message>
        <source>1:</source>
        <translation>1:</translation>
    </message>
    <message>
        <source>Scale:</source>
        <translation>Méretarány:</translation>
    </message>
    <message>
        <source>Width of one unit in millimeters</source>
        <translation>Egy egység szélessége milliméterben</translation>
    </message>
    <message>
        <source>Set</source>
        <translation>Beállít</translation>
    </message>
    <message>
        <source>&lt;b&gt;Map&lt;/b&gt;</source>
        <translation>&lt;b&gt;Térkép&lt;/b&gt;</translation>
    </message>
    <message>
        <source>Height</source>
        <translation>Magasság</translation>
    </message>
    <message>
        <source>Width</source>
        <translation>Szélesség</translation>
    </message>
    <message>
        <source>Line width scale</source>
        <translation>Vonal szélesség szorzó</translation>
    </message>
    <message>
        <source>Symbol scale</source>
        <translation>Szimbólum szorzó</translation>
    </message>
    <message>
        <source>Font size scale</source>
        <translation>Betű méret szorzó</translation>
    </message>
    <message>
        <source>Frame</source>
        <translation>Keret</translation>
    </message>
    <message>
        <source>Preview</source>
        <translation>Előnézet</translation>
    </message>
</context>
<context>
    <name>QgsComposerPicture</name>
    <message>
        <source>Warning</source>
        <translation>Figyelmeztetés</translation>
    </message>
    <message>
        <source>Cannot load picture.</source>
        <translation>Nem tudom a képet betölteni.</translation>
    </message>
    <message>
        <source>Pictures (</source>
        <translation>Képek (</translation>
    </message>
    <message>
        <source>Choose a file</source>
        <translation>Válassz egy fájlt</translation>
    </message>
</context>
<context>
    <name>QgsComposerPictureBase</name>
    <message>
        <source>Picture Options</source>
        <translation>Kép beállítások</translation>
    </message>
    <message>
        <source>Browse</source>
        <translation>Tallóz</translation>
    </message>
    <message>
        <source>Width</source>
        <translation>Szélesség</translation>
    </message>
    <message>
        <source>Height</source>
        <translation>Magasság</translation>
    </message>
    <message>
        <source>Angle</source>
        <translation>Szög</translation>
    </message>
    <message>
        <source>Frame</source>
        <translation>Keret</translation>
    </message>
</context>
<context>
    <name>QgsComposerScalebarBase</name>
    <message>
        <source>Barscale Options</source>
        <translation>Lépték vonalzó beállítások</translation>
    </message>
    <message>
        <source>Line width</source>
        <translation>Vonalvastagság</translation>
    </message>
    <message>
        <source>Unit label</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Map</source>
        <translation>Térkép</translation>
    </message>
    <message>
        <source>Segment size</source>
        <translation>Szegmens méret</translation>
    </message>
    <message>
        <source>Map units per scalebar unit</source>
        <translation type="unfinished">Térkép egységek léptékvonalzó egységenként</translation>
    </message>
    <message>
        <source>Number of segments</source>
        <translation>Szegmensek száma</translation>
    </message>
    <message>
        <source>Font</source>
        <translation>Betűkészlet</translation>
    </message>
</context>
<context>
    <name>QgsComposerVectorLegend</name>
    <message>
        <source>Legend</source>
        <translation>Jelmagyarázat</translation>
    </message>
    <message>
        <source>Layers</source>
        <translation>Rétegek</translation>
    </message>
    <message>
        <source>Group</source>
        <translation>Csoport</translation>
    </message>
    <message>
        <source>Combine selected layers</source>
        <translation>Szelektált rétegek kombinálása</translation>
    </message>
    <message>
        <source>Cache</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Render</source>
        <translation type="unfinished">Megjelenít</translation>
    </message>
    <message>
        <source>Rectangle</source>
        <translation>Téglalap</translation>
    </message>
</context>
<context>
    <name>QgsComposerVectorLegendBase</name>
    <message>
        <source>Vector Legend Options</source>
        <translation>Vektor jelkulcs beállítások</translation>
    </message>
    <message>
        <source>Preview</source>
        <translation>Előnézet</translation>
    </message>
    <message>
        <source>Map</source>
        <translation>Térkép</translation>
    </message>
    <message>
        <source>Title</source>
        <translation>Cím</translation>
    </message>
    <message>
        <source>Column 1</source>
        <translation>1. oszlop</translation>
    </message>
    <message>
        <source>Box</source>
        <translation>Doboz</translation>
    </message>
    <message>
        <source>Font</source>
        <translation>Betűkészlet</translation>
    </message>
</context>
<context>
    <name>QgsComposition</name>
    <message>
        <source>Custom</source>
        <translation>Egyéni</translation>
    </message>
    <message>
        <source>A5 (148x210 mm)</source>
        <translation>A5 (148x210 mm)</translation>
    </message>
    <message>
        <source>A4 (210x297 mm)</source>
        <translation>A4 (210x297 mm)</translation>
    </message>
    <message>
        <source>A3 (297x420 mm)</source>
        <translation>A3 (297x420 mm)</translation>
    </message>
    <message>
        <source>A2 (420x594 mm)</source>
        <translation>A2 (420x594 mm)</translation>
    </message>
    <message>
        <source>A1 (594x841 mm)</source>
        <translation>A1 (594x841 mm)</translation>
    </message>
    <message>
        <source>A0 (841x1189 mm)</source>
        <translation>A0 (841x1189 mm)</translation>
    </message>
    <message>
        <source>B5 (176 x 250 mm)</source>
        <translation>B5 (176x250 mm)</translation>
    </message>
    <message>
        <source>B4 (250 x 353 mm)</source>
        <translation>B4 (250x353 mm)</translation>
    </message>
    <message>
        <source>B3 (353 x 500 mm)</source>
        <translation>B3 (353x500 mm)</translation>
    </message>
    <message>
        <source>B2 (500 x 707 mm)</source>
        <translation>B2 (500x707 mm)</translation>
    </message>
    <message>
        <source>B1 (707 x 1000 mm)</source>
        <translation>B1 (707x1000 mm)</translation>
    </message>
    <message>
        <source>B0 (1000 x 1414 mm)</source>
        <translation>B0 (1000x1414 mm)</translation>
    </message>
    <message>
        <source>Letter (8.5x11 inches)</source>
        <translation>Letter (8.5x11inches)</translation>
    </message>
    <message>
        <source>Legal (8.5x14 inches)</source>
        <translation>Legal (8.5x14 inches)</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Álló</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Fekvő</translation>
    </message>
    <message>
        <source>Out of memory</source>
        <translation>Kévés a memória</translation>
    </message>
    <message>
        <source>Qgis is unable to resize the paper size due to insufficient memory.
 It is best that you avoid using the map composer until you restart qgis.
</source>
        <translation>A QGIS nem tudja átméretezni a papírt mert kevés a memória.
A legjobb, ha nem használod a térkép összeállítót a QGIS újraindításáig.</translation>
    </message>
    <message>
        <source>Label</source>
        <translation>Címke</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Figyelmeztetés</translation>
    </message>
    <message>
        <source>Cannot load picture.</source>
        <translation>Nem tudom betölteni a képet.</translation>
    </message>
</context>
<context>
    <name>QgsCompositionBase</name>
    <message>
        <source>Composition</source>
        <translation>Összeállítás</translation>
    </message>
    <message>
        <source>Paper</source>
        <translation>Papír</translation>
    </message>
    <message>
        <source>Orientation</source>
        <translation>Tájolás</translation>
    </message>
    <message>
        <source>Height</source>
        <translation>Magasság</translation>
    </message>
    <message>
        <source>Width</source>
        <translation>Szélesség</translation>
    </message>
    <message>
        <source>Units</source>
        <translation>Egységek</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Méret</translation>
    </message>
    <message>
        <source>Resolution (dpi)</source>
        <translation>Felbontás (dpi)</translation>
    </message>
</context>
<context>
    <name>QgsConnectionDialog</name>
    <message>
        <source>Test connection</source>
        <translation>Kapcsolat tesztelés</translation>
    </message>
    <message>
        <source>Connection to </source>
        <translation>Kapcsolat ehhez</translation>
    </message>
    <message>
        <source> was successfull</source>
        <translation>sikeres</translation>
    </message>
    <message>
        <source>Connection failed - Check settings and try again </source>
        <translation>Sikertelen kapcsolat - ellenőrizd a beállításokat és próbáld újra</translation>
    </message>
    <message>
        <source>General Interface Help:

</source>
        <translation>Általános interfész súgó:
</translation>
    </message>
</context>
<context>
    <name>QgsConnectionDialogBase</name>
    <message>
        <source>Create a New PostGIS connection</source>
        <translation>Új PostGIS kapcsolat létrehozása</translation>
    </message>
    <message>
        <source>Connection Information</source>
        <translation>Kapcsolat információk</translation>
    </message>
    <message>
        <source>Save Password</source>
        <translation>Jelszó mentése</translation>
    </message>
    <message>
        <source>Test Connect</source>
        <translation>Kapcsolat teszt</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Név</translation>
    </message>
    <message>
        <source>Host</source>
        <translation>Gép</translation>
    </message>
    <message>
        <source>Database</source>
        <translation type="unfinished">Adatbázis</translation>
    </message>
    <message>
        <source>Port</source>
        <translation>Port</translation>
    </message>
    <message>
        <source>Username</source>
        <translation>Felhasználó név</translation>
    </message>
    <message>
        <source>Password</source>
        <translation>Jelszó</translation>
    </message>
    <message>
        <source>Name of the new connection</source>
        <translation>Az új kapcsolat neve</translation>
    </message>
    <message>
        <source>5432</source>
        <translation>5432</translation>
    </message>
</context>
<context>
    <name>QgsContinuousColorDialogBase</name>
    <message>
        <source>Continuous color</source>
        <translation>Folytonos szín</translation>
    </message>
    <message>
        <source>Draw polygon outline</source>
        <translation>Felület körvonal rajzolás</translation>
    </message>
    <message>
        <source>Classification Field:</source>
        <translation>Osztályozás mező:</translation>
    </message>
    <message>
        <source>Minimum Value:</source>
        <translation>Minimum érték:</translation>
    </message>
    <message>
        <source>Outline Width:</source>
        <translation>Körvonal vastagság:</translation>
    </message>
    <message>
        <source>Maximum Value:</source>
        <translation>Maximum érték:</translation>
    </message>
</context>
<context>
    <name>QgsCoordinateTransform</name>
    <message>
        <source>The source spatial reference system (SRS) is not valid. </source>
        <translation>A kiinduló vetületi rendszer (SRS) érvénytelen.</translation>
    </message>
    <message>
        <source>The coordinates can not be reprojected. The SRS is: </source>
        <translation>Nem tudom a koordinátákat átszámítani. Az SRS:</translation>
    </message>
    <message>
        <source>The destination spatial reference system (SRS) is not valid. </source>
        <translation>A cél vetületi rendszer (SRS) érvénytelen.</translation>
    </message>
    <message>
        <source>Failed</source>
        <translation>Sikertelen</translation>
    </message>
    <message>
        <source>transform of</source>
        <translation>transzformáció</translation>
    </message>
    <message>
        <source>with error: </source>
        <translation>hiba:</translation>
    </message>
</context>
<context>
    <name>QgsCopyrightLabelPlugin</name>
    <message>
        <source>Bottom Left</source>
        <translation>Bal alsó</translation>
    </message>
    <message>
        <source>Top Left</source>
        <translation>Bal felső</translation>
    </message>
    <message>
        <source>Top Right</source>
        <translation>Jobb felső</translation>
    </message>
    <message>
        <source>Bottom Right</source>
        <translation>Jobb alsó</translation>
    </message>
    <message>
        <source>&amp;Copyright Label</source>
        <translation type="unfinished">Szerzői jog címke</translation>
    </message>
    <message>
        <source>Creates a copyright label that is displayed on the map canvas.</source>
        <translation>A térképen megjelenített szerzői jog címke létrehozása.</translation>
    </message>
    <message>
        <source>&amp;Decorations</source>
        <translation>&amp;Dekorációk</translation>
    </message>
</context>
<context>
    <name>QgsCopyrightLabelPluginGuiBase</name>
    <message>
        <source>Copyright Label Plugin</source>
        <translation>Szerzői jog címke modul</translation>
    </message>
    <message>
        <source>Color</source>
        <translation>Szín</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-size:12pt;&quot;&gt;Description&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Enter your copyright label below. This plugin supports basic html markup tags for formatting the label. For example:&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;&amp;lt;B&amp;gt; Bold text &amp;lt;/B&amp;gt; &lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-weight:600;&quot;&gt;&lt;span style=&quot; font-weight:400; font-style:italic;&quot;&gt;&amp;lt;I&amp;gt; Italics &amp;lt;/I&amp;gt;&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-style:italic;&quot;&gt;&lt;span style=&quot; font-style:normal;&quot;&gt;(note: &amp;amp;copy; gives a copyright symbol)&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable Copyright Label</source>
        <translation>Szerzői jog címke bekapcsolás</translation>
    </message>
    <message encoding="UTF-8">
        <source>© QGIS 2008</source>
        <translation>(c) QGIS 2008</translation>
    </message>
    <message>
        <source>Placement</source>
        <translation>Elhelyezés</translation>
    </message>
    <message>
        <source>Bottom Left</source>
        <translation>Bal alsó</translation>
    </message>
    <message>
        <source>Top Left</source>
        <translation>Bal felső</translation>
    </message>
    <message>
        <source>Bottom Right</source>
        <translation>Jobb alsó</translation>
    </message>
    <message>
        <source>Top Right</source>
        <translation>Jobb felső</translation>
    </message>
    <message>
        <source>Orientation</source>
        <translation>Tájolás</translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation>Vízszintes</translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation>Függőleges</translation>
    </message>
</context>
<context>
    <name>QgsCustomProjectionDialog</name>
    <message>
        <source>Delete Projection Definition?</source>
        <translation type="unfinished">Vetület definíció törlése?</translation>
    </message>
    <message>
        <source>Deleting a projection definition is not reversable. Do you want to delete it?</source>
        <translation type="unfinished">A vetület definíció törlés nem visszefordítható. Törölni akarod?</translation>
    </message>
    <message>
        <source>Abort</source>
        <translation>Megszakít</translation>
    </message>
    <message>
        <source>New</source>
        <translation>Új</translation>
    </message>
    <message>
        <source>QGIS Custom Projection</source>
        <translation>QGIS egyéni vetület</translation>
    </message>
    <message>
        <source>This proj4 projection definition is not valid. Please give the projection a name before pressing save.</source>
        <translation>Ez a proj4 vetület definíció érvénytelen. Adj a vetületnek nevet a mentés előtt.</translation>
    </message>
    <message>
        <source>This proj4 projection definition is not valid. Please add the parameters before pressing save.</source>
        <translation>Ez a proj4 vetület definíció érvénytelen. Add meg a paramétereket a mentés előtt.</translation>
    </message>
    <message>
        <source>This proj4 projection definition is not valid. Please add a proj= clause before pressing save.</source>
        <translation>Ez a proj4 vetület definíció érvénytelen. Adj meg egy proj= kifejezést a mentés előtt.</translation>
    </message>
    <message>
        <source>This proj4 ellipsoid definition is not valid. Please add a ellips= clause before pressing save.</source>
        <translation>Ez a proj4 ellipszoid definíció érvénytelen. Adj meg egy ellips= kifejezést a mentés előtt.</translation>
    </message>
    <message>
        <source>This proj4 projection definition is not valid. Please correct before pressing save.</source>
        <translation>Ez a proj4 vetület definíció érvénytelen. Javítsd a mentés előtt.</translation>
    </message>
    <message>
        <source>This proj4 projection definition is not valid.</source>
        <translation>Ez a proj4 vetület definíció érvénytelen.</translation>
    </message>
    <message>
        <source>Northing and Easthing must be in decimal form.</source>
        <translation>X és Y szám formában kell.</translation>
    </message>
    <message>
        <source>Internal Error (source projection invalid?)</source>
        <translation>Belső hiba (kiinduló vetület érvénytelen?)</translation>
    </message>
</context>
<context>
    <name>QgsCustomProjectionDialogBase</name>
    <message>
        <source>Custom Projection Definition</source>
        <translation>Egyeni vetület definíció</translation>
    </message>
    <message>
        <source>Define</source>
        <translation>Definiál</translation>
    </message>
    <message>
        <source>You can define your own custom projection here. The definition must conform to the proj4 format for specifying a Spatial Reference System.</source>
        <translation>Az egyéni vetületi rendszeredet definiálhatod itt. A térbeli referencia rendszer definíciójának meg kell felelnie a proj4 formátumnak.</translation>
    </message>
    <message>
        <source>Parameters:</source>
        <translation>Paraméterek:</translation>
    </message>
    <message>
        <source>|&lt;</source>
        <translation>|&lt;</translation>
    </message>
    <message>
        <source>&lt;</source>
        <translation>&lt;</translation>
    </message>
    <message>
        <source>1 of 1</source>
        <translation>1/1</translation>
    </message>
    <message>
        <source>&gt;</source>
        <translation>&gt;</translation>
    </message>
    <message>
        <source>&gt;|</source>
        <translation>&gt;|</translation>
    </message>
    <message>
        <source>New</source>
        <translation>Új</translation>
    </message>
    <message>
        <source>Save</source>
        <translation>Ment</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Töröl</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Lezár</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation>Név:</translation>
    </message>
    <message>
        <source>Test</source>
        <translation>Teszt</translation>
    </message>
    <message>
        <source>Transform from WGS84 to the chosen projection</source>
        <translation>Transzformáció a WGS84-ből a válaszott vetületbe</translation>
    </message>
    <message>
        <source>Use the text boxes below to test the projection definition you are creating. Enter a coordinate where both the lat/long and the projected result are known (for example by reading off a map). Then press the calculate button to see if the projection definition you are creating is accurate.</source>
        <translation>Használd az alábbi mezőket a létrehozott vetület ellenőrzésére. Adj meg egy pontot, ahol a szélesség/hosszúság és a vetületi koordináták ismertek (például olvasd le egy térképről). Utána nyomd meg a számítás gombot és ellenőrizd, hogy pontos a vetület definíció.</translation>
    </message>
    <message>
        <source>Projected Coordinate System</source>
        <translation>Vetületi koordinátarendszer</translation>
    </message>
    <message>
        <source>Geographic / WGS84</source>
        <translation>Földrajzi/WGS84</translation>
    </message>
    <message>
        <source>East:</source>
        <translation>Kelet:</translation>
    </message>
    <message>
        <source>North:</source>
        <translation>Észak:</translation>
    </message>
    <message>
        <source>Calculate</source>
        <translation>Számít</translation>
    </message>
</context>
<context>
    <name>QgsDbSourceSelect</name>
    <message>
        <source>Wildcard</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>RegExp</source>
        <translation>Szabályos kifejezés</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Mind</translation>
    </message>
    <message>
        <source>Schema</source>
        <translation>Séma</translation>
    </message>
    <message>
        <source>Table</source>
        <translation>Tábla</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Típus</translation>
    </message>
    <message>
        <source>Geometry column</source>
        <translation>Geometria oszlop</translation>
    </message>
    <message>
        <source>Sql</source>
        <translation>SQL</translation>
    </message>
    <message>
        <source>Are you sure you want to remove the </source>
        <translation>Biztos, hogy törlöd</translation>
    </message>
    <message>
        <source> connection and all associated settings?</source>
        <translation>Kapcsolat és minden hozzátartozó beállítást?</translation>
    </message>
    <message>
        <source>Confirm Delete</source>
        <translation>Törlés megerősítése</translation>
    </message>
    <message>
        <source>Select Table</source>
        <translation>Válassz táblát</translation>
    </message>
    <message>
        <source>You must select a table in order to add a Layer.</source>
        <translation>Ki kell választanod egy táblát, hogy egy réteget hozzá tudjál adni.</translation>
    </message>
    <message>
        <source>Password for </source>
        <translation>Jelszó</translation>
    </message>
    <message>
        <source>Please enter your password:</source>
        <translation>Add meg a jelszavad:</translation>
    </message>
    <message>
        <source>Connection failed</source>
        <translation>Sikertelen kapcsolódás</translation>
    </message>
    <message>
        <source>Connection to %1 on %2 failed. Either the database is down or your settings are incorrect.%3Check your username and password and try again.%4The database said:%5%6</source>
        <translation>Kapcsolódás a %1-hez a %2-n sikertelen. Vagy az adatbáziskezelő nem fut vagy a beállítások hibásak.%3Ellenőrizd a felhasználó nevet és jelszót és próbáld újra.%4Az adatbázis üzenete:%5%6</translation>
    </message>
</context>
<context>
    <name>QgsDbSourceSelectBase</name>
    <message>
        <source>Add PostGIS Table(s)</source>
        <translation>PostGIS tábla hozzáadás</translation>
    </message>
    <message>
        <source>PostgreSQL Connections</source>
        <translation>PostgraSQL kapcsolat</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Töröl</translation>
    </message>
    <message>
        <source>Edit</source>
        <translation>Szerkeszt</translation>
    </message>
    <message>
        <source>New</source>
        <translation>Új</translation>
    </message>
    <message>
        <source>Connect</source>
        <translation>Kapcsolódás</translation>
    </message>
    <message>
        <source>Help</source>
        <translation>Súgó</translation>
    </message>
    <message>
        <source>F1</source>
        <translation>F1</translation>
    </message>
    <message>
        <source>Add</source>
        <translation>Hozzáad</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Lezár</translation>
    </message>
    <message>
        <source>Search:</source>
        <translation>Keres:</translation>
    </message>
    <message>
        <source>Search mode:</source>
        <translation>Keresési mód:</translation>
    </message>
    <message>
        <source>Search in columns:</source>
        <translation>Keresés az oszlopban:</translation>
    </message>
    <message>
        <source>Search options...</source>
        <translation>Keresési beállítások...</translation>
    </message>
</context>
<context>
    <name>QgsDbTableModel</name>
    <message>
        <source>Schema</source>
        <translation>Séma</translation>
    </message>
    <message>
        <source>Table</source>
        <translation>Tábla</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Típus</translation>
    </message>
    <message>
        <source>Geometry column</source>
        <translation>Geometria oszlop</translation>
    </message>
    <message>
        <source>Sql</source>
        <translation>SQL</translation>
    </message>
    <message>
        <source>Point</source>
        <translation>Pont</translation>
    </message>
    <message>
        <source>Multipoint</source>
        <translation>Multipont</translation>
    </message>
    <message>
        <source>Line</source>
        <translation>Vonal</translation>
    </message>
    <message>
        <source>Multiline</source>
        <translation>Multivonal</translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation>Felület</translation>
    </message>
    <message>
        <source>Multipolygon</source>
        <translation>Multifelület</translation>
    </message>
</context>
<context>
    <name>QgsDelAttrDialogBase</name>
    <message>
        <source>Delete Attributes</source>
        <translation>Attribútumok törlése</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Mégsem</translation>
    </message>
</context>
<context>
    <name>QgsDelimitedTextPlugin</name>
    <message>
        <source>DelimitedTextLayer</source>
        <translation>Tagolt szöveg réteg</translation>
    </message>
    <message>
        <source>&amp;Add Delimited Text Layer</source>
        <translation type="unfinished">Tagolt szöveg réteg hozzáadás</translation>
    </message>
    <message>
        <source>Add a delimited text file as a map layer. </source>
        <translation>Egy tagolt szövegfájl hozzáadása mint térképi réteg.</translation>
    </message>
    <message>
        <source>The file must have a header row containing the field names. </source>
        <translation>A fájlban kell lenni egy fejléc sornak a mezők neveivel.</translation>
    </message>
    <message>
        <source>X and Y fields are required and must contain coordinates in decimal units.</source>
        <translation>Az Y és Y mezők kötelezők és a koordinátákat kell tartalmaznia.</translation>
    </message>
    <message>
        <source>&amp;Delimited text</source>
        <translation type="unfinished">Tagolt szöveg</translation>
    </message>
</context>
<context>
    <name>QgsDelimitedTextPluginGui</name>
    <message>
        <source>Parse</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Description</source>
        <translation type="unfinished">Leírás</translation>
    </message>
    <message>
        <source>Select a delimited text file containing a header row and one or more rows of x and y coordinates that you would like to use as a point layer and this plugin will do the job for you!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use the layer name box to specify the legend name for the new layer. Use the delimiter box to specify what delimeter is used in your file (e.g. space, comma, tab or a regular expression in Perl style). After choosing a delimiter, press the parse button and select the columns containing the x and y values for the layer.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No layer name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Please enter a layer name before adding the layer to the map</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No delimiter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Please specify a delimiter prior to parsing the file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose a delimited text file to open</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsDelimitedTextPluginGuiBase</name>
    <message>
        <source>Create a Layer from a Delimited Text File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delimited Text Layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;p align=&quot;right&quot;&gt;X field&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name of the field containing x values</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name of the field containing x values. Choose a field from the list. The list is generated by parsing the header row of the delimited text file.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;p align=&quot;right&quot;&gt;Y field&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name of the field containing y values</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name of the field containing y values. Choose a field from the list. The list is generated by parsing the header row of the delimited text file.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delimited text file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Full path to the delimited text file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Full path to the delimited text file. In order to properly parse the fields in the file, the delimiter must be defined prior to entering the file name. Use the Browse button to the right of this field to choose the input file.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Browse to find the delimited text file to be processed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use this button to browse to the location of the delimited text file. This button will not be enabled until a delimiter has been entered in the &lt;i&gt;Delimiter&lt;/i&gt; box. Once a file is chosen, the X and Y field drop-down boxes will be populated with the fields from the delimited text file.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Browse...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Layer name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name to display in the map legend</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name displayed in the map legend</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sample text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delimiter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delimiter to use when splitting fields in the text file. The delimiter can be more than one character.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delimiter to use when splitting fields in the delimited text file. The delimiter can be 1 or more characters in length.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The delimiter is taken as is</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Plain characters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The delimiter is a regular expression</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Regular expression</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsDelimitedTextProvider</name>
    <message>
        <source>Error</source>
        <translation type="unfinished">Hiba</translation>
    </message>
    <message>
        <source>Note: the following lines were not loaded because Qgis was unable to determine values for the x and y coordinates:
</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsDlgPgBufferBase</name>
    <message>
        <source>Buffer features</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Parameters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Geometry column:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add the buffered layer to the map?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Spatial reference ID:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Schema:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unique field to use as feature id:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Table name for the buffered layer:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create unique object id</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>public</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Buffer distance in map units:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;h2&gt;Buffer the features in layer: &lt;/h2&gt;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsEditReservedWordsBase</name>
    <message>
        <source>Edit Reserved Words</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;/head&gt;&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Double click the Column Name column to change the name of the column.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Status</source>
        <translation type="unfinished">Állapot</translation>
    </message>
    <message>
        <source>Column Name</source>
        <translation type="unfinished">Oszlopnév</translation>
    </message>
    <message>
        <source>Index</source>
        <translation type="unfinished">Index</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;/head&gt;&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;This shapefile contains reserved words. These may affect the import into PostgreSQL. Edit the column names so none of the reserved words listed at the right are used (click on a Column Name entry to edit). You may also change any other column name if desired.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reserved Words</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsEditReservedWordsDialog</name>
    <message>
        <source>Status</source>
        <translation>Állapot</translation>
    </message>
    <message>
        <source>Column Name</source>
        <translation>Oszlopnév</translation>
    </message>
    <message>
        <source>Index</source>
        <translation>Index</translation>
    </message>
</context>
<context>
    <name>QgsEncodingFileDialog</name>
    <message>
        <source>Encoding:</source>
        <translation>Kódolás:</translation>
    </message>
</context>
<context>
    <name>QgsFillStyleWidgetBase</name>
    <message>
        <source>Form1</source>
        <translation>Form1</translation>
    </message>
    <message>
        <source>Fill Style</source>
        <translation>Kitöltési minta</translation>
    </message>
    <message>
        <source>col</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Colour:</source>
        <translation type="unfinished">Szín:</translation>
    </message>
    <message>
        <source>PolyStyleWidget</source>
        <translation>PolyStyleWidget</translation>
    </message>
</context>
<context>
    <name>QgsGPSDeviceDialog</name>
    <message>
        <source>New device %1</source>
        <translation>Új eszköz %1</translation>
    </message>
    <message>
        <source>Are you sure?</source>
        <translation>Biztos vagy benne?</translation>
    </message>
    <message>
        <source>Are you sure that you want to delete this device?</source>
        <translation>Biztos, hogy törölni akarod ezt az eszközt?</translation>
    </message>
</context>
<context>
    <name>QgsGPSDeviceDialogBase</name>
    <message>
        <source>GPS Device Editor</source>
        <translation>GPS eszköz szerkesztő</translation>
    </message>
    <message>
        <source>New device</source>
        <translation>Új eszköz</translation>
    </message>
    <message>
        <source>Delete device</source>
        <translation>Eszköz törlés</translation>
    </message>
    <message>
        <source>Update device</source>
        <translation>Eszköz frissítés</translation>
    </message>
    <message>
        <source>Device name:</source>
        <translation>Eszköz név:</translation>
    </message>
    <message>
        <source>This is the name of the device as it will appear in the lists</source>
        <translation>Az eszköz neve, ahogy a listában meg fog jelenni</translation>
    </message>
    <message>
        <source>Commands</source>
        <translation>Parancsok</translation>
    </message>
    <message>
        <source>Track download:</source>
        <translation>Track letöltés:</translation>
    </message>
    <message>
        <source>Route upload:</source>
        <translation>Útvonal feltöltés:</translation>
    </message>
    <message>
        <source>Waypoint download:</source>
        <translation>Útpont letöltés:</translation>
    </message>
    <message>
        <source>The command that is used to download routes from the device</source>
        <translation>Az eszközből az útvonalak letöltéséhez használt parancs </translation>
    </message>
    <message>
        <source>Route download:</source>
        <translation>Útvonal letöltés:</translation>
    </message>
    <message>
        <source>The command that is used to upload waypoints to the device</source>
        <translation>Az eszközbe az útpontok feltöltéséhez használt parancs</translation>
    </message>
    <message>
        <source>Track upload:</source>
        <translation>Track feltöltés:</translation>
    </message>
    <message>
        <source>The command that is used to download tracks from the device</source>
        <translation>Az eszközből a trackek letöltéséhez használt parancs</translation>
    </message>
    <message>
        <source>The command that is used to upload routes to the device</source>
        <translation>Az eszközbe az útvonalak feltöltéséhez használt parancs</translation>
    </message>
    <message>
        <source>The command that is used to download waypoints from the device</source>
        <translation>Az eszközből az útpontok letöltéséhez használt parancs</translation>
    </message>
    <message>
        <source>The command that is used to upload tracks to the device</source>
        <translation>Az eszközbe a trackek feltöltésére használt parancs</translation>
    </message>
    <message>
        <source>Waypoint upload:</source>
        <translation>Útpont feltöltés:</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;/head&gt;&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;In the download and upload commands there can be special words that will be replaced by QGIS when the commands are used. These words are:&lt;span style=&quot; font-style:italic;&quot;&gt;%babel&lt;/span&gt; - the path to GPSBabel&lt;br /&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;%in&lt;/span&gt; - the GPX filename when uploading or the port when downloading&lt;br /&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;%out&lt;/span&gt; - the port when uploading or the GPX filename when downloading&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Lezár</translation>
    </message>
</context>
<context>
    <name>QgsGPSPlugin</name>
    <message>
        <source>&amp;Gps Tools</source>
        <translation>&amp;GPS eszközök</translation>
    </message>
    <message>
        <source>&amp;Create new GPX layer</source>
        <translation type="unfinished">Új GPX réteg létrehozás</translation>
    </message>
    <message>
        <source>Creates a new GPX layer and displays it on the map canvas</source>
        <translation>Új GPX réteg létrehozás és megjelenítés a térképen</translation>
    </message>
    <message>
        <source>&amp;Gps</source>
        <translation>&amp;GPS</translation>
    </message>
    <message>
        <source>Save new GPX file as...</source>
        <translation>GPX fájl mentés másként...</translation>
    </message>
    <message>
        <source>GPS eXchange file (*.gpx)</source>
        <translation>GPS adatcsere fájl (*.gpx)</translation>
    </message>
    <message>
        <source>Could not create file</source>
        <translation>Nem tudom létrehozni a fájlt</translation>
    </message>
    <message>
        <source>Unable to create a GPX file with the given name. </source>
        <translation>A megadott névvel nem tudom létrehozni a GPX fájlt.</translation>
    </message>
    <message>
        <source>Try again with another name or in another </source>
        <translation type="unfinished">Próbált újra egy másik névvel vagy egy másik</translation>
    </message>
    <message>
        <source>directory.</source>
        <translation>könyvtárban.</translation>
    </message>
    <message>
        <source>GPX Loader</source>
        <translation>GPX betöltés</translation>
    </message>
    <message>
        <source>Unable to read the selected file.
</source>
        <translation>Nem tudom olvasni a megadott fájlt.
</translation>
    </message>
    <message>
        <source>Please reselect a valid file.</source>
        <translation>Kérem válassz egy megfelelő fájlt.</translation>
    </message>
    <message>
        <source>Could not start process</source>
        <translation>Nem tudom elkjezdeni a feldolgozást</translation>
    </message>
    <message>
        <source>Could not start GPSBabel!</source>
        <translation>Nem tudom elindítani a GPSBabel programot!</translation>
    </message>
    <message>
        <source>Importing data...</source>
        <translation>Adatok importálása...</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Mégsem</translation>
    </message>
    <message>
        <source>Could not import data from %1!

</source>
        <translation>Nem tudom importálni az adatokat ebből %1!</translation>
    </message>
    <message>
        <source>Error importing data</source>
        <translation>Adat import hiba</translation>
    </message>
    <message>
        <source>Could not convert data from %1!

</source>
        <translation>Nem tudom konvertálni az adatokat ebből %1!</translation>
    </message>
    <message>
        <source>Error converting data</source>
        <translation>Adat konverzió hiba</translation>
    </message>
    <message>
        <source>Not supported</source>
        <translation>Nem támogatott</translation>
    </message>
    <message>
        <source>This device does not support downloading </source>
        <translation>Ez az eszköz nem támogatja a letöltést</translation>
    </message>
    <message>
        <source>of </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Downloading data...</source>
        <translation>Adatletöltés...</translation>
    </message>
    <message>
        <source>Could not download data from GPS!

</source>
        <translation>Nem tudom letölteni az adatokat a GPS-ből!

</translation>
    </message>
    <message>
        <source>Error downloading data</source>
        <translation>Hiba az adatletöltésben</translation>
    </message>
    <message>
        <source>This device does not support uploading of </source>
        <translation>Az eszköz nem támogatja a feltöltést</translation>
    </message>
    <message>
        <source>Uploading data...</source>
        <translation>Adatfeltöltés...</translation>
    </message>
    <message>
        <source>Error while uploading data to GPS!

</source>
        <translation>Hiba az adatfeltöltés közben a GPS-be!

</translation>
    </message>
    <message>
        <source>Error uploading data</source>
        <translation>Hiba az adatfeltöltésben</translation>
    </message>
</context>
<context>
    <name>QgsGPSPluginGui</name>
    <message>
        <source>Waypoints</source>
        <translation>Útpontok</translation>
    </message>
    <message>
        <source>Routes</source>
        <translation>Útvonalak</translation>
    </message>
    <message>
        <source>Tracks</source>
        <translation>Trackek</translation>
    </message>
    <message>
        <source>Choose a filename to save under</source>
        <translation>Válassz egy fájlnevet</translation>
    </message>
    <message>
        <source>GPS eXchange format (*.gpx)</source>
        <translation>GPS adatcsere fájl (*.gpx)</translation>
    </message>
    <message>
        <source>Select GPX file</source>
        <translation>Válassz GPX fájlt</translation>
    </message>
    <message>
        <source>Select file and format to import</source>
        <translation>Válassz fájlt és formátumot az importhoz</translation>
    </message>
    <message>
        <source>GPX is the %1, which is used to store information about waypoints, routes, and tracks.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>GPS eXchange file format</source>
        <translation>GPS adatcsere fájl formátum</translation>
    </message>
    <message>
        <source>Select a GPX file and then select the feature types that you want to load.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This tool will help you download data from a GPS device.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose your GPS device, the port it is connected to, the feature type you want to download, a name for your new layer, and the GPX file where you want to store the data.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>If your device isn&apos;t listed, or if you want to change some settings, you can also edit the devices.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This tool uses the program GPSBabel (%1) to transfer the data.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This requires that you have GPSBabel installed where QGIS can find it.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This tool will help you upload data from a GPX layer to a GPS device.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose the layer you want to upload, the device you want to upload it to, and the port your device is connected to.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>QGIS can only load GPX files by itself, but many other formats can be converted to GPX using GPSBabel (%1).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select a GPS file format and the file that you want to import, the feature type that you want to use, a GPX filename that you want to save the converted file as, and a name for the new layer.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All file formats can not store waypoints, routes, and tracks, so some feature types may be disabled for some file formats.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>QGIS can perform conversions of GPX files, by using GPSBabel (%1) to perform the conversions.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select a GPX input file name, the type of conversion you want to perform, a GPX filename that you want to save the converted file as, and a name for the new layer created from the result.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsGPSPluginGuiBase</name>
    <message>
        <source>GPS Tools</source>
        <translation type="unfinished">GPS eszközök</translation>
    </message>
    <message>
        <source>Load GPX file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>File:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Browse...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Feature types:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Waypoints</source>
        <translation type="unfinished">Útpontok</translation>
    </message>
    <message>
        <source>Routes</source>
        <translation type="unfinished">Útvonalak</translation>
    </message>
    <message>
        <source>Tracks</source>
        <translation type="unfinished">Trackek</translation>
    </message>
    <message>
        <source>Import other file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Layer name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save As...</source>
        <translation type="unfinished">Mentés másként...</translation>
    </message>
    <message>
        <source>GPX output file:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Feature type:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>(Note: Selecting correct file type in browser dialog important!)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>File to import:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Download from GPS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Port:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Output file:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>GPS device:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit devices</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Upload to GPS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Data layer:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>GPX Conversions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Conversion:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>GPX input file:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsGPXProvider</name>
    <message>
        <source>Bad URI - you need to specify the feature type.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>GPS eXchange file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Digitized in QGIS</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsGeomTypeDialog</name>
    <message>
        <source>Name</source>
        <translation>Név</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Típus</translation>
    </message>
</context>
<context>
    <name>QgsGeomTypeDialogBase</name>
    <message>
        <source>New Vector Layer</source>
        <translation type="unfinished">Új vektor réteg</translation>
    </message>
    <message>
        <source>File Format:</source>
        <translation>Fájl formátum:</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Töröl</translation>
    </message>
    <message>
        <source>Attributes:</source>
        <translation>Attribútumok:</translation>
    </message>
    <message>
        <source>Add</source>
        <translation>Hozzáad</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Típus</translation>
    </message>
    <message>
        <source>Point</source>
        <translation>Pont</translation>
    </message>
    <message>
        <source>Line</source>
        <translation>Vonal</translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation>Felület</translation>
    </message>
    <message>
        <source>Column 1</source>
        <translation>1. oszlop</translation>
    </message>
</context>
<context>
    <name>QgsGeorefDescriptionDialogBase</name>
    <message>
        <source>Description georeferencer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:12pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-size:11pt; font-weight:600;&quot;&gt;Description&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:9pt;&quot;&gt;This plugin can generate world files for rasters. You select points on the raster and give their world coordinates, and the plugin will compute the world file parameters. The more coordinates you can provide the better the result will be.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsGeorefPlugin</name>
    <message>
        <source>&amp;Georeferencer</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsGeorefPluginGui</name>
    <message>
        <source>Choose a raster file</source>
        <translation>Válassz egy raszter fájlt</translation>
    </message>
    <message>
        <source>Raster files (*.*)</source>
        <translation>Raszter fájlok (*.*)</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>Hiba</translation>
    </message>
    <message>
        <source>The selected file is not a valid raster file.</source>
        <translation>A kiválaszott fájl nem megfelelő raszter fájl.</translation>
    </message>
    <message>
        <source>World file exists</source>
        <translation>World fájl létezik</translation>
    </message>
    <message>
        <source>&lt;p&gt;The selected file already seems to have a </source>
        <translation>&lt;p&gt;Úgy tűnik a  kiválasztott fájl már rendelkezik </translation>
    </message>
    <message>
        <source>world file! Do you want to replace it with the </source>
        <translation>World fájllal! Le akarod cserélni az új</translation>
    </message>
    <message>
        <source>new world file?&lt;/p&gt;</source>
        <translation>az új world fájllal?&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>QgsGeorefPluginGuiBase</name>
    <message>
        <source>Georeferencer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Arrange plugin windows</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Raster file:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Description...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Close</source>
        <translation type="unfinished">Lezár</translation>
    </message>
</context>
<context>
    <name>QgsGeorefWarpOptionsDialog</name>
    <message>
        <source>unstable</source>
        <translation>instabil</translation>
    </message>
</context>
<context>
    <name>QgsGeorefWarpOptionsDialogBase</name>
    <message>
        <source>Warp options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Compression:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Resampling method:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Nearest neighbour</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Linear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cubic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use 0 for transparency when needed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">OK</translation>
    </message>
</context>
<context>
    <name>QgsGraduatedSymbolDialog</name>
    <message>
        <source>Equal Interval</source>
        <translation>Egyenlő intervallumok</translation>
    </message>
    <message>
        <source>Quantiles</source>
        <translation>Egyenló számú</translation>
    </message>
    <message>
        <source>Empty</source>
        <translation>Üres</translation>
    </message>
</context>
<context>
    <name>QgsGraduatedSymbolDialogBase</name>
    <message>
        <source>graduated Symbol</source>
        <translation type="unfinished">növekvő szimbólumok</translation>
    </message>
    <message>
        <source>Classification Field:</source>
        <translation>Osztályzás mező:</translation>
    </message>
    <message>
        <source>Mode:</source>
        <translation>Mód:</translation>
    </message>
    <message>
        <source>Number of Classes:</source>
        <translation>Osztrályok száma:</translation>
    </message>
    <message>
        <source>Delete class</source>
        <translation>Osztály törlés</translation>
    </message>
    <message>
        <source>Classify</source>
        <translation>Osztályoz</translation>
    </message>
</context>
<context>
    <name>QgsGrassAttributes</name>
    <message>
        <source>Column</source>
        <translation>Oszlop</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Érték</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Típus</translation>
    </message>
    <message>
        <source>Layer</source>
        <translation>Réteg</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Figyelmeztetés</translation>
    </message>
    <message>
        <source>ERROR</source>
        <translation>Hiba</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
</context>
<context>
    <name>QgsGrassAttributesBase</name>
    <message>
        <source>GRASS Attributes</source>
        <translation>GRASS attribútumok</translation>
    </message>
    <message>
        <source>Tab 1</source>
        <translation>TAB 1</translation>
    </message>
    <message>
        <source>result</source>
        <translation>eredmény</translation>
    </message>
    <message>
        <source>Update database record</source>
        <translation>Adatbázis rekord frissítés</translation>
    </message>
    <message>
        <source>Update</source>
        <translation>Aktualizálás</translation>
    </message>
    <message>
        <source>Add new category using settings in GRASS Edit toolbox</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New</source>
        <translation></translation>
    </message>
    <message>
        <source>Delete selected category</source>
        <translation>Kivlasztott kategória törlése</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Törlés</translation>
    </message>
</context>
<context>
    <name>QgsGrassBrowser</name>
    <message>
        <source>Tools</source>
        <translation type="unfinished">Eszközök</translation>
    </message>
    <message>
        <source>Add selected map to canvas</source>
        <translation>Szelektált térkép hozzáadása</translation>
    </message>
    <message>
        <source>Copy selected map</source>
        <translation>Szelektált térkép másolása</translation>
    </message>
    <message>
        <source>Rename selected map</source>
        <translation>Szeletált térkép átnevezése</translation>
    </message>
    <message>
        <source>Delete selected map</source>
        <translation>Szelektált térkép törlése</translation>
    </message>
    <message>
        <source>Set current region to selected map</source>
        <translation>Aktuális terjedelem beállítása a szelektált térképre</translation>
    </message>
    <message>
        <source>Refresh</source>
        <translation>Frissítés</translation>
    </message>
    <message>
        <source>New name</source>
        <translation>Új név</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Figyelmeztetés</translation>
    </message>
    <message>
        <source>Cannot copy map </source>
        <translation>Nem tudom másolni a térképet</translation>
    </message>
    <message>
        <source>&lt;br&gt;command: </source>
        <translation>&lt;br&gt;parancs:</translation>
    </message>
    <message>
        <source>Cannot rename map </source>
        <translation>Nem tudom átnevezni a térképet</translation>
    </message>
    <message>
        <source>Delete map &lt;b&gt;</source>
        <translation>Térkép törlés &lt;b&gt;</translation>
    </message>
    <message>
        <source>Cannot delete map </source>
        <translation>Nem tudom töröln i a térképet</translation>
    </message>
    <message>
        <source>Cannot write new region</source>
        <translation>Nem tudom az új terjedelmet kiírni</translation>
    </message>
</context>
<context>
    <name>QgsGrassEdit</name>
    <message>
        <source>Warning</source>
        <translation>Figyelmeztetés</translation>
    </message>
    <message>
        <source>You are not owner of the mapset, cannot open the vector for editing.</source>
        <translation type="unfinished">Nem vagy a tulajdonosa, nem nyithatod meg a módosításra</translation>
    </message>
    <message>
        <source>Cannot open vector for update.</source>
        <translation type="unfinished">Nem tudok módosításra megnyitni a vektort</translation>
    </message>
    <message>
        <source>Edit tools</source>
        <translation>Szerkesztő eszközök</translation>
    </message>
    <message>
        <source>New point</source>
        <translation>Új pont</translation>
    </message>
    <message>
        <source>New line</source>
        <translation>Új vonal</translation>
    </message>
    <message>
        <source>New boundary</source>
        <translation>Új határ</translation>
    </message>
    <message>
        <source>New centroid</source>
        <translation>Új centrális</translation>
    </message>
    <message>
        <source>Move vertex</source>
        <translation>Töréspont mozgatás</translation>
    </message>
    <message>
        <source>Add vertex</source>
        <translation>Töréspont hozzáadás</translation>
    </message>
    <message>
        <source>Delete vertex</source>
        <translation>Töréspont törlés</translation>
    </message>
    <message>
        <source>Move element</source>
        <translation>Elem mozgatás</translation>
    </message>
    <message>
        <source>Split line</source>
        <translation>Vonal darabolás</translation>
    </message>
    <message>
        <source>Delete element</source>
        <translation>Elem törlés</translation>
    </message>
    <message>
        <source>Edit attributes</source>
        <translation>Attribútumok szerkesztése</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Lezár</translation>
    </message>
    <message>
        <source>Background</source>
        <translation>Háttér</translation>
    </message>
    <message>
        <source>Highlight</source>
        <translation>Kiemel</translation>
    </message>
    <message>
        <source>Dynamic</source>
        <translation>Dinamikus</translation>
    </message>
    <message>
        <source>Point</source>
        <translation>Pont</translation>
    </message>
    <message>
        <source>Line</source>
        <translation>Vonal</translation>
    </message>
    <message>
        <source>Boundary (no area)</source>
        <translation>Határ (nem terület)</translation>
    </message>
    <message>
        <source>Boundary (1 area)</source>
        <translation>Határ (1 terület)</translation>
    </message>
    <message>
        <source>Boundary (2 areas)</source>
        <translation>Határ (2 terület)</translation>
    </message>
    <message>
        <source>Centroid (in area)</source>
        <translation>Centrális (területben)</translation>
    </message>
    <message>
        <source>Centroid (outside area)</source>
        <translation>Centrális (területen kívül)</translation>
    </message>
    <message>
        <source>Centroid (duplicate in area)</source>
        <translation>Centrális (dupla a területben)</translation>
    </message>
    <message>
        <source>Node (1 line)</source>
        <translation>Csomópont (1 vonal)</translation>
    </message>
    <message>
        <source>Node (2 lines)</source>
        <translation>Csomópont (2 vonal)</translation>
    </message>
    <message>
        <source>Disp</source>
        <comment>Column title</comment>
        <translation>Megj</translation>
    </message>
    <message>
        <source>Color</source>
        <comment>Column title</comment>
        <translation>Szín</translation>
    </message>
    <message>
        <source>Type</source>
        <comment>Column title</comment>
        <translation>Típus</translation>
    </message>
    <message>
        <source>Index</source>
        <comment>Column title</comment>
        <translation>Index</translation>
    </message>
    <message>
        <source>Column</source>
        <translation>Oszlop</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Típus</translation>
    </message>
    <message>
        <source>Length</source>
        <translation>Hossz</translation>
    </message>
    <message>
        <source>Next not used</source>
        <translation>Következő nem használt</translation>
    </message>
    <message>
        <source>Manual entry</source>
        <translation>Kézi bevitel</translation>
    </message>
    <message>
        <source>No category</source>
        <translation>Nincs kategória</translation>
    </message>
    <message>
        <source>Info</source>
        <translation>Info</translation>
    </message>
    <message>
        <source>The table was created</source>
        <translation>A táblát létrehoztam</translation>
    </message>
    <message>
        <source>Tool not yet implemented.</source>
        <translation>Még nem implementált eszköz.</translation>
    </message>
    <message>
        <source>Cannot check orphan record: </source>
        <translation>Nem tudom ellenőrizni az árva rekordot:</translation>
    </message>
    <message>
        <source>Orphan record was left in attribute table. &lt;br&gt;Delete the record?</source>
        <translation>Árva rekord maradt a táblában. &lt;br&gt;Töröljem?</translation>
    </message>
    <message>
        <source>Cannot delete orphan record: </source>
        <translation>Nem tudom törölni az árva rekordot:</translation>
    </message>
    <message>
        <source>Cannot describe table for field </source>
        <translation type="unfinished">Nem tudom a mezőhöz tartozó táblát leírni</translation>
    </message>
    <message>
        <source>Left: </source>
        <translation>Bal:</translation>
    </message>
    <message>
        <source>Middle: </source>
        <translation>Közép:</translation>
    </message>
    <message>
        <source>Right: </source>
        <translation>Jobb:</translation>
    </message>
</context>
<context>
    <name>QgsGrassEditBase</name>
    <message>
        <source>GRASS Edit</source>
        <translation>GRASS szerkesztés</translation>
    </message>
    <message>
        <source>Category</source>
        <translation>Kategória</translation>
    </message>
    <message>
        <source>Mode</source>
        <translation>Mód</translation>
    </message>
    <message>
        <source>Layer</source>
        <translation>Réteg</translation>
    </message>
    <message>
        <source>Settings</source>
        <translation>Beállítások</translation>
    </message>
    <message>
        <source>Snapping in screen pixels</source>
        <translation>Raszter képpontokban</translation>
    </message>
    <message>
        <source>Symbology</source>
        <translation>Megjelenés</translation>
    </message>
    <message>
        <source>Column 1</source>
        <translation>Oszlop 1</translation>
    </message>
    <message>
        <source>Line width</source>
        <translation>Vonalvastagság</translation>
    </message>
    <message>
        <source>Marker size</source>
        <translation>Jelméret</translation>
    </message>
    <message>
        <source>Table</source>
        <translation>Tábla</translation>
    </message>
    <message>
        <source>Add Column</source>
        <translation>Oszlop hozzáadás</translation>
    </message>
    <message>
        <source>Create / Alter Table</source>
        <translation>Tábla létrehozás/módosítás</translation>
    </message>
</context>
<context>
    <name>QgsGrassElementDialog</name>
    <message>
        <source>Cancel</source>
        <translation>Mégsem</translation>
    </message>
    <message>
        <source>Ok</source>
        <translation>Ok</translation>
    </message>
    <message>
        <source>&lt;font color=&apos;red&apos;&gt;Enter a name!&lt;/font&gt;</source>
        <translation>&lt;font color=&apos;red&apos;&gt;Add meg a nevet!&lt;/font&gt;</translation>
    </message>
    <message>
        <source>&lt;font color=&apos;red&apos;&gt;This is name of the source!&lt;/font&gt;</source>
        <translation type="unfinished">&lt;font color=&apos;red&apos;&gt;Add meg a nevet!&lt;/font&gt;</translation>
    </message>
    <message>
        <source>&lt;font color=&apos;red&apos;&gt;Exists!&lt;/font&gt;</source>
        <translation>&lt;font color=&apos;red&apos;&gt;Létezik!&lt;/font&gt;</translation>
    </message>
    <message>
        <source>Overwrite</source>
        <translation>Felülír</translation>
    </message>
</context>
<context>
    <name>QgsGrassMapcalc</name>
    <message>
        <source>Mapcalc tools</source>
        <translation>Mapcalc eszköz</translation>
    </message>
    <message>
        <source>Add map</source>
        <translation>Térkép hozzáadás</translation>
    </message>
    <message>
        <source>Add constant value</source>
        <translation>Konstans érték hozzáadás</translation>
    </message>
    <message>
        <source>Add operator or function</source>
        <translation>Művelet vagy függvény hozzáadás</translation>
    </message>
    <message>
        <source>Add connection</source>
        <translation>Kapcsolat hozzáadás</translation>
    </message>
    <message>
        <source>Select item</source>
        <translation>Válssz elemet</translation>
    </message>
    <message>
        <source>Delete selected item</source>
        <translation>Szelektált elemek törlése</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Megnyitás</translation>
    </message>
    <message>
        <source>Save</source>
        <translation>Mentés</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Mentés másként</translation>
    </message>
    <message>
        <source>Addition</source>
        <translation>Összeadás</translation>
    </message>
    <message>
        <source>Subtraction</source>
        <translation>Kivonás</translation>
    </message>
    <message>
        <source>Multiplication</source>
        <translation>Szorzás</translation>
    </message>
    <message>
        <source>Division</source>
        <translation>Osztás</translation>
    </message>
    <message>
        <source>Modulus</source>
        <translation>Maradék</translation>
    </message>
    <message>
        <source>Exponentiation</source>
        <translation>Exponenciális</translation>
    </message>
    <message>
        <source>Equal</source>
        <translation>Egyenlő</translation>
    </message>
    <message>
        <source>Not equal</source>
        <translation>Nem egyenlő</translation>
    </message>
    <message>
        <source>Greater than</source>
        <translation>Nagyobb mint</translation>
    </message>
    <message>
        <source>Greater than or equal</source>
        <translation>Nagyobb vagy egyenlő</translation>
    </message>
    <message>
        <source>Less than</source>
        <translation>Kisebb mint</translation>
    </message>
    <message>
        <source>Less than or equal</source>
        <translation>Kisebb vagy egyenlő</translation>
    </message>
    <message>
        <source>And</source>
        <translation>És</translation>
    </message>
    <message>
        <source>Or</source>
        <translation>Vagy</translation>
    </message>
    <message>
        <source>Absolute value of x</source>
        <translation>x abszolút értéke</translation>
    </message>
    <message>
        <source>Inverse tangent of x (result is in degrees)</source>
        <translation>x arc tangense (eredmény fokokban)</translation>
    </message>
    <message>
        <source>Inverse tangent of y/x (result is in degrees)</source>
        <translation>y/x arc tangense (eredmény fokokban)</translation>
    </message>
    <message>
        <source>Current column of moving window (starts with 1)</source>
        <translation></translation>
    </message>
    <message>
        <source>Cosine of x (x is in degrees)</source>
        <translation>x koszinusza (x fokokban)</translation>
    </message>
    <message>
        <source>Convert x to double-precision floating point</source>
        <translation>x konvertálása duplapontos lebegőpontos számmá</translation>
    </message>
    <message>
        <source>Current east-west resolution</source>
        <translation>Aktuális kelet-nyugat felbontás</translation>
    </message>
    <message>
        <source>Exponential function of x</source>
        <translation>x exponenciális függvénye</translation>
    </message>
    <message>
        <source>x to the power y</source>
        <translation>x az y hatványon</translation>
    </message>
    <message>
        <source>Convert x to single-precision floating point</source>
        <translation>x konvertálása szimplapontos lebegőpontos számmá</translation>
    </message>
    <message>
        <source>Decision: 1 if x not zero, 0 otherwise</source>
        <translation>Döntés: 1 ha x nem nulla, különben 0</translation>
    </message>
    <message>
        <source>Decision: a if x not zero, 0 otherwise</source>
        <translation>Döntés: a ha x nem nulla, különben 0</translation>
    </message>
    <message>
        <source>Decision: a if x not zero, b otherwise</source>
        <translation>Döntés: a ha x nem nulla, különben b</translation>
    </message>
    <message>
        <source>Decision: a if x &gt; 0, b if x is zero, c if x &lt; 0</source>
        <translation>Döntés: a ha x &gt; 0, b ha x nulla, c ha x &lt; 0</translation>
    </message>
    <message>
        <source>Convert x to integer [ truncates ]</source>
        <translation>x egésszé konvertálása (csonkítás)</translation>
    </message>
    <message>
        <source>Check if x = NULL</source>
        <translation>Ellenőrzés x = NULL</translation>
    </message>
    <message>
        <source>Natural log of x</source>
        <translation>x természetes logaritmusa</translation>
    </message>
    <message>
        <source>Log of x base b</source>
        <translation>x b alapú logaritmusa</translation>
    </message>
    <message>
        <source>Largest value</source>
        <translation>Legnagyobb érték</translation>
    </message>
    <message>
        <source>Median value</source>
        <translation>Medián érték</translation>
    </message>
    <message>
        <source>Smallest value</source>
        <translation>Legkisebb érték</translation>
    </message>
    <message>
        <source>Mode value</source>
        <translation>Mód érték</translation>
    </message>
    <message>
        <source>1 if x is zero, 0 otherwise</source>
        <translation>1 ha x nulla, különben 0</translation>
    </message>
    <message>
        <source>Current north-south resolution</source>
        <translation>Aktuális észak-dél felbontás</translation>
    </message>
    <message>
        <source>NULL value</source>
        <translation>NULL érték</translation>
    </message>
    <message>
        <source>Random value between a and b</source>
        <translation>Véletlenszám a és b között</translation>
    </message>
    <message>
        <source>Round x to nearest integer</source>
        <translation>x kerekítése a legközelebbi egészre</translation>
    </message>
    <message>
        <source>Current row of moving window (Starts with 1)</source>
        <translation></translation>
    </message>
    <message>
        <source>Sine of x (x is in degrees)</source>
        <comment>sin(x)</comment>
        <translation>x szinusza (x fokokban)</translation>
    </message>
    <message>
        <source>Square root of x</source>
        <comment>sqrt(x)</comment>
        <translation>x négyzetgyöke</translation>
    </message>
    <message>
        <source>Tangent of x (x is in degrees)</source>
        <comment>tan(x)</comment>
        <translation>x tangense (x fokokban)</translation>
    </message>
    <message>
        <source>Current x-coordinate of moving window</source>
        <translation></translation>
    </message>
    <message>
        <source>Current y-coordinate of moving window</source>
        <translation></translation>
    </message>
    <message>
        <source>Output</source>
        <translation>Eredmény</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Figyelmeztetés</translation>
    </message>
    <message>
        <source>Cannot get current region</source>
        <translation>Nem tudom megszerezni az aktuális terjedelmet</translation>
    </message>
    <message>
        <source>Cannot check region of map </source>
        <translation>Nem tudom ellenőrizni a térkép terjedelmét</translation>
    </message>
    <message>
        <source>Cannot get region of map </source>
        <translation>Nem tudom megszerezni a térkép terjedelmét</translation>
    </message>
    <message>
        <source>No GRASS raster maps currently in QGIS</source>
        <translation>Nincs GRASS raszter térkép a QGIS-ben</translation>
    </message>
    <message>
        <source>Cannot create &apos;mapcalc&apos; directory in current mapset.</source>
        <translation>Nem tudom létrehozni a &apos;mapcalc&apos; mappát az aktuális térkép készletben.</translation>
    </message>
    <message>
        <source>New mapcalc</source>
        <translation>Uj mapcalc</translation>
    </message>
    <message>
        <source>Enter new mapcalc name:</source>
        <translation>Add meg az új mapcalc nevét:</translation>
    </message>
    <message>
        <source>Enter vector name</source>
        <translation>Add meg a vektor nevét</translation>
    </message>
    <message>
        <source>The file already exists. Overwrite? </source>
        <translation>A fájl már létezik. Felülirhatom?</translation>
    </message>
    <message>
        <source>Save mapcalc</source>
        <translation>mapcalc mentés</translation>
    </message>
    <message>
        <source>File name empty</source>
        <translation>Fájlnév üres</translation>
    </message>
    <message>
        <source>Cannot open mapcalc file</source>
        <translation>Nem tudom megnyíitni a mapcalc fájlt</translation>
    </message>
    <message>
        <source>The mapcalc schema (</source>
        <translation>A mapcalc séma (</translation>
    </message>
    <message>
        <source>) not found.</source>
        <translation>) nem találom.</translation>
    </message>
    <message>
        <source>Cannot open mapcalc schema (</source>
        <translation>Nem tudom megnyitni a mapcalc sémát (</translation>
    </message>
    <message>
        <source>Cannot read mapcalc schema (</source>
        <translation>Nem tudom olvasni a mapcalc sémát (</translation>
    </message>
    <message>
        <source>
at line </source>
        <translation>
sorban</translation>
    </message>
    <message>
        <source> column </source>
        <translation>oszlop</translation>
    </message>
</context>
<context>
    <name>QgsGrassMapcalcBase</name>
    <message>
        <source>MainWindow</source>
        <translation>Fő ablak</translation>
    </message>
    <message>
        <source>Output</source>
        <translation>Eredmény</translation>
    </message>
</context>
<context>
    <name>QgsGrassModule</name>
    <message>
        <source>Module</source>
        <translation>Modul</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Figyelmeztetés</translation>
    </message>
    <message>
        <source>The module file (</source>
        <translation>A modul fájl (</translation>
    </message>
    <message>
        <source>) not found.</source>
        <translation>) nem találom.</translation>
    </message>
    <message>
        <source>Cannot open module file (</source>
        <translation>Nem tudom megnyitni a modul fájlt (</translation>
    </message>
    <message>
        <source>)</source>
        <translation>)</translation>
    </message>
    <message>
        <source>Cannot read module file (</source>
        <translation>Nem tudom olvasni a modul fájlt (</translation>
    </message>
    <message>
        <source>):
</source>
        <translation>):
</translation>
    </message>
    <message>
        <source>
at line </source>
        <translation>
sorban</translation>
    </message>
    <message>
        <source>Module </source>
        <translation>Modul</translation>
    </message>
    <message>
        <source> not found</source>
        <translation>nem találom</translation>
    </message>
    <message>
        <source>Cannot find man page </source>
        <translation>Nem találom a kézikönyv oldalt</translation>
    </message>
    <message>
        <source>Not available, description not found (</source>
        <translation>Nem érhető el, a leírást nem találom (</translation>
    </message>
    <message>
        <source>Not available, cannot open description (</source>
        <translation>Nem érhető el, nem tudom megnyitni a leírást (</translation>
    </message>
    <message>
        <source> column </source>
        <translation>oszlop</translation>
    </message>
    <message>
        <source>Not available, incorrect description (</source>
        <translation>Nem érhető el, hibás leírás (</translation>
    </message>
    <message>
        <source>Run</source>
        <translation>Futtatás</translation>
    </message>
    <message>
        <source>Cannot get input region</source>
        <translation>Nem tudom beszerezni az input terjedelemet</translation>
    </message>
    <message>
        <source>Use Input Region</source>
        <translation>Az input terjedelmet használom</translation>
    </message>
    <message>
        <source>Cannot find module </source>
        <translation>Nem találom a modult</translation>
    </message>
    <message>
        <source>Cannot start module: </source>
        <translation>Nem tudom elindítani a modult:</translation>
    </message>
    <message>
        <source>Stop</source>
        <translation>Megállít</translation>
    </message>
    <message>
        <source>&lt;B&gt;Successfully finished&lt;/B&gt;</source>
        <translation>&lt;B&gt;Sikeresen befejeztem&lt;/B&gt;</translation>
    </message>
    <message>
        <source>&lt;B&gt;Finished with error&lt;/B&gt;</source>
        <translation>&lt;B&gt;Hibával fejeztem be&lt;/B&gt;</translation>
    </message>
    <message>
        <source>&lt;B&gt;Module crashed or killed&lt;/B&gt;</source>
        <translation>&lt;B&gt;A modul összeomlott vagy kilőtték&lt;/B&gt;</translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleBase</name>
    <message>
        <source>GRASS Module</source>
        <translation>GRASS modul</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Opciók</translation>
    </message>
    <message>
        <source>Output</source>
        <translation>Eredmény</translation>
    </message>
    <message>
        <source>Manual</source>
        <translation>Manuális</translation>
    </message>
    <message>
        <source>TextLabel</source>
        <translation>Szöveg cimke</translation>
    </message>
    <message>
        <source>Run</source>
        <translation>Futtatás</translation>
    </message>
    <message>
        <source>View output</source>
        <translation>Eredmény megjelenítése</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Lezár</translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleField</name>
    <message>
        <source>Attribute field</source>
        <translation>Attribútum mező</translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleFile</name>
    <message>
        <source>File</source>
        <translation>Fájl</translation>
    </message>
    <message>
        <source>:&amp;nbsp;missing value</source>
        <translation>:&amp;nbsp;hiányzó érték</translation>
    </message>
    <message>
        <source>:&amp;nbsp;directory does not exist</source>
        <translation>:&amp;nbsp;a mappa nem létezik</translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleGdalInput</name>
    <message>
        <source>Warning</source>
        <translation>Figyelmeztetés</translation>
    </message>
    <message>
        <source>Cannot find layeroption </source>
        <translation>Nem találom a réteg beállításokat</translation>
    </message>
    <message>
        <source>Cannot find whereoption </source>
        <translation>Nem találom a where paramétert</translation>
    </message>
    <message>
        <source>PostGIS driver in OGR does not support schemas!&lt;br&gt;Only the table name will be used.&lt;br&gt;It can result in wrong input if more tables of the same name&lt;br&gt;are present in the database.</source>
        <translation>Az OGR PostGIS meghajtó nem támogatja a sémát!&lt;br&gt;Csak a táblanevet használom.&lt;br&gt;Ez hibás eredményre vezethet, ha azonos nevű tábla&lt;br&gt;van az adatbázisban.</translation>
    </message>
    <message>
        <source>:&amp;nbsp;no input</source>
        <translation>:&amp;nbsp;nincs input</translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleInput</name>
    <message>
        <source>Warning</source>
        <translation>Figyelmeztetés</translation>
    </message>
    <message>
        <source>Cannot find typeoption </source>
        <translation>Nem találom a típus beállításokat</translation>
    </message>
    <message>
        <source>Cannot find values for typeoption </source>
        <translation>Nem találom a típus beállításhoz tartozó értéket</translation>
    </message>
    <message>
        <source>Cannot find layeroption </source>
        <translation>Nem találom a réteg beállításokat</translation>
    </message>
    <message>
        <source>GRASS element </source>
        <translation>GRASS elem</translation>
    </message>
    <message>
        <source> not supported</source>
        <translation>nem támogatott</translation>
    </message>
    <message>
        <source>Use region of this map</source>
        <translation>Ennek a térképnek a terjedelmét használom</translation>
    </message>
    <message>
        <source>:&amp;nbsp;no input</source>
        <translation>:&amp;nbsp;nincs input</translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleOption</name>
    <message>
        <source>:&amp;nbsp;missing value</source>
        <translation>:&amp;nbsp;hiányzó érték</translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleSelection</name>
    <message>
        <source>Attribute field</source>
        <translation>Attribútum mező</translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleStandardOptions</name>
    <message>
        <source>Warning</source>
        <translation>Figyelmeztetés</translation>
    </message>
    <message>
        <source>Cannot find module </source>
        <translation>Nem találom a modult</translation>
    </message>
    <message>
        <source>Cannot start module </source>
        <translation>Nem tudom elindítani a modult</translation>
    </message>
    <message>
        <source>Cannot read module description (</source>
        <translation>Nem tudom olvasni a modul leírást (</translation>
    </message>
    <message>
        <source>):
</source>
        <translation>):
</translation>
    </message>
    <message>
        <source>
at line </source>
        <translation>sorban</translation>
    </message>
    <message>
        <source> column </source>
        <translation>oszlop</translation>
    </message>
    <message>
        <source>Cannot find key </source>
        <translation>Nem találom a kulcsot</translation>
    </message>
    <message>
        <source>Item with id </source>
        <translation>Elem azonosító</translation>
    </message>
    <message>
        <source> not found</source>
        <translation>nem találom</translation>
    </message>
    <message>
        <source>Cannot get current region</source>
        <translation>Nem tudom megszerezni az aktuális terjedelmet</translation>
    </message>
    <message>
        <source>Cannot check region of map </source>
        <translation type="unfinished">Nem tudom ellenőrizni a térkép terjedelmét</translation>
    </message>
    <message>
        <source>Cannot set region of map </source>
        <translation>Nem tudom beállítani a térkép terjedelmét</translation>
    </message>
</context>
<context>
    <name>QgsGrassNewMapset</name>
    <message>
        <source>GRASS database</source>
        <translation>GRASS adatbázis</translation>
    </message>
    <message>
        <source>GRASS location</source>
        <translation>GRASS munkaterület</translation>
    </message>
    <message>
        <source>Projection</source>
        <translation>Vetület</translation>
    </message>
    <message>
        <source>Default GRASS Region</source>
        <translation>Alapértelmezett GRASS terjedelem</translation>
    </message>
    <message>
        <source>Mapset</source>
        <translation>Térkép halmaz</translation>
    </message>
    <message>
        <source>Create New Mapset</source>
        <translation>Új térkép halmaz létrehozása</translation>
    </message>
    <message>
        <source>Tree</source>
        <translation>Fa</translation>
    </message>
    <message>
        <source>Comment</source>
        <translation>Megjegyzés</translation>
    </message>
    <message>
        <source>Database</source>
        <translation>Adatbázis</translation>
    </message>
    <message>
        <source>Location 2</source>
        <translation>Munkaterület 2</translation>
    </message>
    <message>
        <source>User&apos;s mapset</source>
        <translation>Felhasználói térkép készlet</translation>
    </message>
    <message>
        <source>System mapset</source>
        <translation>Rendszer térkép halmaz</translation>
    </message>
    <message>
        <source>Location 1</source>
        <translation>Munkaterület 1</translation>
    </message>
    <message>
        <source>Owner</source>
        <translation>Tulajdonos</translation>
    </message>
    <message>
        <source>Enter path to GRASS database</source>
        <translation>Add meg az elérési utat a GASS adatbázishoz</translation>
    </message>
    <message>
        <source>The directory doesn&apos;t exist!</source>
        <translation>A mappa nem létezik!</translation>
    </message>
    <message>
        <source>No writable locations, the database not writable!</source>
        <translation>Nem írható munkaterület, az adatbázis nem írható!</translation>
    </message>
    <message>
        <source>Enter location name!</source>
        <translation>Add meg a munkaterület nevét!</translation>
    </message>
    <message>
        <source>The location exists!</source>
        <translation>A munkaterület létezik!</translation>
    </message>
    <message>
        <source>Selected projection is not supported by GRASS!</source>
        <translation>A kiválasztott vetületet a GRASS nem támogatja!</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Figyelmeztetés</translation>
    </message>
    <message>
        <source>Cannot create projection.</source>
        <translation>Nem tudok vetületet létrehozni.</translation>
    </message>
    <message>
        <source>Cannot reproject previously set region, default region set.</source>
        <translation>Nem tudom átvetíteni a korábban beállított terjedelmet, az alapértelmezett terjedelmet használom.</translation>
    </message>
    <message>
        <source>North must be greater than south</source>
        <translation>Észak értéknek nagyobbnak kell lennie mint a délnek</translation>
    </message>
    <message>
        <source>East must be greater than west</source>
        <translation>Kelet értéknek nagyobbnak kell lennie mint a nyugatnak</translation>
    </message>
    <message>
        <source>Regions file (</source>
        <translation>Terjedelmek fájl (</translation>
    </message>
    <message>
        <source>) not found.</source>
        <translation>) nem találom.</translation>
    </message>
    <message>
        <source>Cannot open locations file (</source>
        <translation>Nem tudom megnyitni a munkaterület fájlt (</translation>
    </message>
    <message>
        <source>)</source>
        <translation>)</translation>
    </message>
    <message>
        <source>Cannot read locations file (</source>
        <translation>Nem tudom olvasni a munkaterület fájlt (</translation>
    </message>
    <message>
        <source>):
</source>
        <translation>):
</translation>
    </message>
    <message>
        <source>
at line </source>
        <translation>
sorban</translation>
    </message>
    <message>
        <source> column </source>
        <translation>oszlop</translation>
    </message>
    <message>
        <source>Cannot create QgsSpatialRefSys</source>
        <translation>Nem tudok létrehozni QgsSpatialRefSys-t</translation>
    </message>
    <message>
        <source>Cannot reproject selected region.</source>
        <translation>Nem tudom átvetíteni a kiválasztott terjedelmet.</translation>
    </message>
    <message>
        <source>Cannot reproject region</source>
        <translation>Nem tudom átvetíteni a terjedelmet</translation>
    </message>
    <message>
        <source>Enter mapset name.</source>
        <translation>Add meg a térkép halmaz nevét.</translation>
    </message>
    <message>
        <source>The mapset already exists</source>
        <translation>A térkép halmaz már létezik</translation>
    </message>
    <message>
        <source>Database: </source>
        <translation>Adatbázis:</translation>
    </message>
    <message>
        <source>Location: </source>
        <translation>Munkaterület:</translation>
    </message>
    <message>
        <source>Mapset: </source>
        <translation>Térkép halmaz:</translation>
    </message>
    <message>
        <source>Create location</source>
        <translation>Munkaterület létrehozása</translation>
    </message>
    <message>
        <source>Cannot create new location: </source>
        <translation>Nem tudok új munkaterületet létrehozni:</translation>
    </message>
    <message>
        <source>Create mapset</source>
        <translation>Térkép halmaz létrehozása</translation>
    </message>
    <message>
        <source>Cannot create new mapset directory</source>
        <translation>Nem tudok új térkép készlet mappát létrehozni</translation>
    </message>
    <message>
        <source>Cannot open DEFAULT_WIND</source>
        <translation>Nem tudom megnyitni a DEFAULT_WIND-et</translation>
    </message>
    <message>
        <source>Cannot open WIND</source>
        <translation>Nem tudom megnyitni a WIND-et</translation>
    </message>
    <message>
        <source>New mapset</source>
        <translation>Új térkép halmaz</translation>
    </message>
    <message>
        <source>New mapset successfully created, but cannot be opened: </source>
        <translation>Az új térkép halmazt sikeresen létrehoztam, de nem tudom megnyitni:</translation>
    </message>
    <message>
        <source>New mapset successfully created and set as current working mapset.</source>
        <translation>Az új térkép halmazt sikeresen létrehoztam és beállítottam mint aktuális munka térkép halmazt.</translation>
    </message>
</context>
<context>
    <name>QgsGrassNewMapsetBase</name>
    <message>
        <source>Column 1</source>
        <translation>1. oszlop</translation>
    </message>
    <message>
        <source>Example directory tree:</source>
        <translation>Minta mappa fa:</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;/head&gt;&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;GRASS data are stored in tree directory structure.&lt;/p&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;The GRASS database is the top-level directory in this tree structure.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Database Error</source>
        <translation>Adatbázis hiba</translation>
    </message>
    <message>
        <source>Database:</source>
        <translation>Adatbázis:</translation>
    </message>
    <message>
        <source>...</source>
        <translation type="unfinished">...</translation>
    </message>
    <message>
        <source>Select existing directory or create a new one:</source>
        <translation>Válassz egy létező mappát vagy hozz létre egyet:</translation>
    </message>
    <message>
        <source>Location</source>
        <translation>Munkaterület</translation>
    </message>
    <message>
        <source>Select location</source>
        <translation>Válassz munkaterületet</translation>
    </message>
    <message>
        <source>Create new location</source>
        <translation>Új munkaterület létrehozása</translation>
    </message>
    <message>
        <source>Location Error</source>
        <translation>Munkaterület hiba</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;/head&gt;&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;The GRASS location is a collection of maps for a particular territory or project.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Projection Error</source>
        <translation>Vetületi hiba</translation>
    </message>
    <message>
        <source>Coordinate system</source>
        <translation>Koordinátarendszer</translation>
    </message>
    <message>
        <source>Projection</source>
        <translation>Vetület</translation>
    </message>
    <message>
        <source>Not defined</source>
        <translation>Nem definiált</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;/head&gt;&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;The GRASS region defines a workspace for raster modules. The default region is valid for one location. It is possible to set a different region in each mapset. &lt;/p&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;It is possible to change the default location region later.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set current QGIS extent</source>
        <translation>Aktuális QGIS terjedelem beállítása</translation>
    </message>
    <message>
        <source>Set</source>
        <translation>Halmaz</translation>
    </message>
    <message>
        <source>Region Error</source>
        <translation>Terjedelem hiba</translation>
    </message>
    <message>
        <source>S</source>
        <translation>D</translation>
    </message>
    <message>
        <source>W</source>
        <translation>Ny</translation>
    </message>
    <message>
        <source>E</source>
        <translation>K</translation>
    </message>
    <message>
        <source>N</source>
        <translation>É</translation>
    </message>
    <message>
        <source>New mapset:</source>
        <translation>Új térkép halmaz:</translation>
    </message>
    <message>
        <source>Mapset Error</source>
        <translation>Térkép halmaz hiba</translation>
    </message>
    <message>
        <source>&lt;p align=&quot;center&quot;&gt;Existing masets&lt;/p&gt;</source>
        <translation>&lt;p align=&quot;center&quot;&gt;Létező térkép halmazok&lt;/p&gt;</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;/head&gt;&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;The GRASS mapset is a collection of maps used by one user. &lt;/p&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;A user can read maps from all mapsets in the location but &lt;/p&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;he can open for writing only his mapset (owned by user).&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Location:</source>
        <translation>Munkaterület:</translation>
    </message>
    <message>
        <source>Mapset:</source>
        <translation>Térkép halmaz:</translation>
    </message>
</context>
<context>
    <name>QgsGrassPlugin</name>
    <message>
        <source>GrassVector</source>
        <translation>GrassVector</translation>
    </message>
    <message>
        <source>0.1</source>
        <translation>0.1</translation>
    </message>
    <message>
        <source>GRASS layer</source>
        <translation>GRASS réteg</translation>
    </message>
    <message>
        <source>Open mapset</source>
        <translation>Térkép halmaz megnyitása</translation>
    </message>
    <message>
        <source>New mapset</source>
        <translation>Új térkép halmaz</translation>
    </message>
    <message>
        <source>Close mapset</source>
        <translation>Térkép halmaz lezárása</translation>
    </message>
    <message>
        <source>Add GRASS vector layer</source>
        <translation>GRASS vektor réteg hozzáadása</translation>
    </message>
    <message>
        <source>Add GRASS raster layer</source>
        <translation>GRASS raszter réteg hozzáadása</translation>
    </message>
    <message>
        <source>Open GRASS tools</source>
        <translation>GRASS eszközök megnyitása</translation>
    </message>
    <message>
        <source>Display Current Grass Region</source>
        <translation>Aktuális GRASS terjedelem megjelenítése</translation>
    </message>
    <message>
        <source>Edit Current Grass Region</source>
        <translation>Aktuális GRASS terjedelem módosítása</translation>
    </message>
    <message>
        <source>Edit Grass Vector layer</source>
        <translation>GRASS vektor réteg szerkesztése</translation>
    </message>
    <message>
        <source>Create new Grass Vector</source>
        <translation>Új GRASS vektor létrehozása</translation>
    </message>
    <message>
        <source>Adds a GRASS vector layer to the map canvas</source>
        <translation>GRASS vektor réteg hozzáadása a térképhez</translation>
    </message>
    <message>
        <source>Adds a GRASS raster layer to the map canvas</source>
        <translation>GRASS raszter réteg hozzáadása a térképhez</translation>
    </message>
    <message>
        <source>Displays the current GRASS region as a rectangle on the map canvas</source>
        <translation>Aktuális GRASS terjedelem megjelenítése a térképen mint egy négyzet</translation>
    </message>
    <message>
        <source>Edit the current GRASS region</source>
        <translation>Aktuális GRASS terjedelem módosítása</translation>
    </message>
    <message>
        <source>Edit the currently selected GRASS vector layer.</source>
        <translation>Aktuális GRASS vektor réteg szerkesztése.</translation>
    </message>
    <message>
        <source>&amp;GRASS</source>
        <translation>&amp;GRASS</translation>
    </message>
    <message>
        <source>GRASS</source>
        <translation>GRASS</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Figyelmeztetés</translation>
    </message>
    <message>
        <source>GRASS Edit is already running.</source>
        <translation>A GRASS szerkesztés már folyamatban van.</translation>
    </message>
    <message>
        <source>New vector name</source>
        <translation>Új vektor név</translation>
    </message>
    <message>
        <source>Cannot create new vector: </source>
        <translation>Nem tudom az új vektort létrehozni:</translation>
    </message>
    <message>
        <source>New vector created but cannot be opened by data provider.</source>
        <translation>Az új vektort létrehoztam, de nem lehet megnyitni.</translation>
    </message>
    <message>
        <source>Cannot start editing.</source>
        <translation>Nem tudom elkezdeni a szerkesztést.</translation>
    </message>
    <message>
        <source>GISDBASE, LOCATION_NAME or MAPSET is not set, cannot display current region.</source>
        <translation>GISDBASE, LOCATION_NAME vagy MAPSET nincs beállítva, nem tudom megjelenítteni az aktuális terjedelmet.</translation>
    </message>
    <message>
        <source>Cannot read current region: </source>
        <translation>Nem tudom olvasni az aktuális terjedelmet:</translation>
    </message>
    <message>
        <source>Cannot open the mapset. </source>
        <translation>Nem tudom megnyitnni a térkép halmazt.</translation>
    </message>
    <message>
        <source>Cannot close mapset. </source>
        <translation>Nem tudom lezárni a térkép halmazt.</translation>
    </message>
    <message>
        <source>Cannot close current mapset. </source>
        <translation>Nem tudom lezárni az aktuális térkép halmazt.</translation>
    </message>
    <message>
        <source>Cannot open GRASS mapset. </source>
        <translation>Nem tudom megnyitni a GRASS térkép halmazt.</translation>
    </message>
</context>
<context>
    <name>QgsGrassRegion</name>
    <message>
        <source>Warning</source>
        <translation>Figyelmeztetés</translation>
    </message>
    <message>
        <source>GISDBASE, LOCATION_NAME or MAPSET is not set, cannot display current region.</source>
        <translation>GISDBASE, LOCATION_NAME vagy MAPSET nincs beállítva, nem tudom megjelenítteni az aktuális terjedelmet.</translation>
    </message>
    <message>
        <source>Cannot read current region: </source>
        <translation>Nem tudom olvasni az aktuális terjedelmet:</translation>
    </message>
    <message>
        <source>Cannot write region</source>
        <translation>Nem tudom a terjedelmet kiírni</translation>
    </message>
</context>
<context>
    <name>QgsGrassRegionBase</name>
    <message>
        <source>GRASS Region Settings</source>
        <translation>GRASS terjedelem beállítások</translation>
    </message>
    <message>
        <source>N</source>
        <translation>É</translation>
    </message>
    <message>
        <source>W</source>
        <translation>Ny</translation>
    </message>
    <message>
        <source>E</source>
        <translation>K</translation>
    </message>
    <message>
        <source>S</source>
        <translation>D</translation>
    </message>
    <message>
        <source>N-S Res</source>
        <translation>É-D felbontás</translation>
    </message>
    <message>
        <source>Rows</source>
        <translation>Sorok</translation>
    </message>
    <message>
        <source>Cols</source>
        <translation>Oszl</translation>
    </message>
    <message>
        <source>E-W Res</source>
        <translation>K-Ny felbontás</translation>
    </message>
    <message>
        <source>Color</source>
        <translation>Szín</translation>
    </message>
    <message>
        <source>Width</source>
        <translation>Szélesség</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Mégsem</translation>
    </message>
</context>
<context>
    <name>QgsGrassSelect</name>
    <message>
        <source>Select GRASS Vector Layer</source>
        <translation>Válassz GRASS vektor réteget</translation>
    </message>
    <message>
        <source>Select GRASS Raster Layer</source>
        <translation>Válassz GRASS raszter réteget</translation>
    </message>
    <message>
        <source>Select GRASS mapcalc schema</source>
        <translation>Válassz GRASS mapcalc sémát</translation>
    </message>
    <message>
        <source>Select GRASS Mapset</source>
        <translation>Válassz GRASS térkép halmazt</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Figyelmeztetés</translation>
    </message>
    <message>
        <source>Cannot open vector on level 2 (topology not available).</source>
        <translation>Nem tudom megnyitbni a vektor a 2. szinten (nincs topológia).</translation>
    </message>
    <message>
        <source>Choose existing GISDBASE</source>
        <translation>Válassz egy létező GISDBASE-t</translation>
    </message>
    <message>
        <source>Wrong GISDBASE, no locations available.</source>
        <translation>Rossz GISDBASE, nincs munkaterület.</translation>
    </message>
    <message>
        <source>Wrong GISDBASE</source>
        <translation>Rossz GISDBASE</translation>
    </message>
    <message>
        <source>Select a map.</source>
        <translation>Válassz egy térképet.</translation>
    </message>
    <message>
        <source>No map</source>
        <translation>Nincs térkép</translation>
    </message>
    <message>
        <source>No layer</source>
        <translation>Nincs réteg</translation>
    </message>
    <message>
        <source>No layers available in this map</source>
        <translation>Nincsaenek rétegek ebben a térképben</translation>
    </message>
</context>
<context>
    <name>QgsGrassSelectBase</name>
    <message>
        <source>Add GRASS Layer</source>
        <translation>Raszter réteg hozzáadása</translation>
    </message>
    <message>
        <source>Gisdbase</source>
        <translation>Gisdbase</translation>
    </message>
    <message>
        <source>Location</source>
        <translation>Munkaterület</translation>
    </message>
    <message>
        <source>Mapset</source>
        <translation>Térkép halmaz</translation>
    </message>
    <message>
        <source>Select or type map name (wildcards &apos;*&apos; and &apos;?&apos; accepted for rasters)</source>
        <translation>Válassz vagy írj be térkép nevet (joker karakterek &apos;*&apos; és &apos;?&apos;  használható raszterekhez)</translation>
    </message>
    <message>
        <source>Map name</source>
        <translation>Térkép név</translation>
    </message>
    <message>
        <source>Layer</source>
        <translation>Réteg</translation>
    </message>
    <message>
        <source>Browse</source>
        <translation>Tallózás</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Mégsem</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
</context>
<context>
    <name>QgsGrassShellBase</name>
    <message>
        <source>GRASS Shell</source>
        <translation>GRASS burok</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Lezár</translation>
    </message>
</context>
<context>
    <name>QgsGrassTools</name>
    <message>
        <source>GRASS Tools</source>
        <translation>GRASS eszközök</translation>
    </message>
    <message>
        <source>Modules</source>
        <translation>Modulok</translation>
    </message>
    <message>
        <source>GRASS Tools: </source>
        <translation>GRASS eszközök:</translation>
    </message>
    <message>
        <source>Browser</source>
        <translation>Böngésző</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Figyelmeztetés</translation>
    </message>
    <message>
        <source>Cannot find MSYS (</source>
        <translation>MSYS-t nem találom (</translation>
    </message>
    <message>
        <source>GRASS Shell is not compiled.</source>
        <translation>A GRASS burokot nem fordították le.</translation>
    </message>
    <message>
        <source>The config file (</source>
        <translation>A konfigurációs fájl (</translation>
    </message>
    <message>
        <source>) not found.</source>
        <translation>) nem találom.</translation>
    </message>
    <message>
        <source>Cannot open config file (</source>
        <translation>Nem tudom megnyitni a konfigurációs fájlt (</translation>
    </message>
    <message>
        <source>)</source>
        <translation>)</translation>
    </message>
    <message>
        <source>Cannot read config file (</source>
        <translation>Nem tudom olvasni a konfigurációs fájlt (</translation>
    </message>
    <message>
        <source>
at line </source>
        <translation>sorban</translation>
    </message>
    <message>
        <source> column </source>
        <translation type="unfinished">oszlop</translation>
    </message>
</context>
<context>
    <name>QgsGridMakerPlugin</name>
    <message>
        <source>&amp;Graticule Creator</source>
        <translation>&amp;Rács létrehozása</translation>
    </message>
    <message>
        <source>Creates a graticule (grid) and stores the result as a shapefile</source>
        <translation>Rács létrehozása és tárolása mint shape fájl</translation>
    </message>
    <message>
        <source>&amp;Graticules</source>
        <translation>&amp;Rácsok</translation>
    </message>
</context>
<context>
    <name>QgsGridMakerPluginGui</name>
    <message>
        <source>QGIS - Grid Maker</source>
        <translation>QGIS - Rács készítő</translation>
    </message>
    <message>
        <source>Please enter the file name before pressing OK!</source>
        <translation>Add meg a fájlnevet az OK megnyomása előtt!</translation>
    </message>
    <message>
        <source>Longitude Interval is invalid - please correct and try again.</source>
        <translation type="obsolete">Hosszúság intervallum hibás - korrigáld és próbáld újra.</translation>
    </message>
    <message>
        <source>Latitude Interval is invalid - please correct and try again.</source>
        <translation type="obsolete">Szélesség intervallum hibás - korrigáld és próbáld újra.</translation>
    </message>
    <message>
        <source>Longitude Origin is invalid - please correct and try again..</source>
        <translation type="obsolete">Hosszúság origó hibás - korrigáld és próbáld újra.</translation>
    </message>
    <message>
        <source>Latitude Origin is invalid - please correct and try again.</source>
        <translation type="obsolete">Szélesség origó hibás - korrigáld és próbáld újra.</translation>
    </message>
    <message>
        <source>End Point Longitude is invalid - please correct and try again.</source>
        <translation type="obsolete">A végpont hosszúsága hibás - korrigáld és próbáld újra.</translation>
    </message>
    <message>
        <source>End Point Latitude is invalid - please correct and try again.</source>
        <translation type="obsolete">A végpont szélessége hibás - korrigáld és próbáld újra.</translation>
    </message>
    <message>
        <source>Choose a filename to save under</source>
        <translation>Válassz egy fájlnevet a mentéshez</translation>
    </message>
    <message>
        <source>ESRI Shapefile (*.shp)</source>
        <translation>ESRI shape fájl (*.shp)</translation>
    </message>
</context>
<context>
    <name>QgsGridMakerPluginGuiBase</name>
    <message>
        <source>QGIS Plugin Template</source>
        <translation type="obsolete">QGIS modul sablon</translation>
    </message>
    <message>
        <source>Graticule Builder</source>
        <translation>Rács készítő</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Típus</translation>
    </message>
    <message>
        <source>Point</source>
        <translation>Pont</translation>
    </message>
    <message>
        <source>Line</source>
        <translation type="obsolete">Vonal</translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation>Felület</translation>
    </message>
    <message>
        <source>Origin (lower left)</source>
        <translation>Origó (bal alsó)</translation>
    </message>
    <message>
        <source>Latitude:</source>
        <translation type="obsolete">Szélesség:</translation>
    </message>
    <message>
        <source>#000.00000; </source>
        <translation type="obsolete">#000.00000;</translation>
    </message>
    <message>
        <source>Longitude:</source>
        <translation type="obsolete">Hosszúság:</translation>
    </message>
    <message>
        <source>End point (upper right)</source>
        <translation>Végpont (jobb felső)</translation>
    </message>
    <message>
        <source>Graticle size (units in degrees)</source>
        <translation type="obsolete">Rács méret (fokokban)</translation>
    </message>
    <message>
        <source>Latitude Interval:</source>
        <translation type="obsolete">Szélesség intervallum:</translation>
    </message>
    <message>
        <source>Longitude Interval:</source>
        <translation type="obsolete">Hosszúság intervallum:</translation>
    </message>
    <message>
        <source>Output (shape) file</source>
        <translation>Eredmény (shape) fájl</translation>
    </message>
    <message>
        <source>Save As...</source>
        <translation>Mentés másként...</translation>
    </message>
    <message>
        <source>QGIS Graticule Creator</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Graticle size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Y Interval:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>X Interval:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Y</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>X</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Arial&apos;; font-size:11pt;&quot;&gt;&lt;span style=&quot; font-size:10pt;&quot;&gt;This plugin will help you to build a graticule shapefile that you can use as an overlay within your qgis map viewer.&lt;/span&gt;&lt;/p&gt;
&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Arial&apos;; font-size:10pt;&quot;&gt;Please enter all units in decimal degrees&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsHelpViewer</name>
    <message>
        <source>This help file does not exist for your language</source>
        <translation>Ez a súgó fájl nem áll rendelkezésre a te nyelveden</translation>
    </message>
    <message>
        <source>If you would like to create it, contact the QGIS development team</source>
        <translation>Ha létre akarod hozni fordulj a QGIS fejlesztő csapathoz</translation>
    </message>
    <message>
        <source>Quantum GIS Help</source>
        <translation>Quantum GIS súgó</translation>
    </message>
    <message>
        <source>Quantum GIS Help - </source>
        <translation>Quantum GIS súgó -</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>Hiba</translation>
    </message>
    <message>
        <source>Failed to get the help text from the database</source>
        <translation>Nem sikerült a súgó szöveget beszerezni az adatbázisból</translation>
    </message>
    <message>
        <source>The QGIS help database is not installed</source>
        <translation>Quantum GIS súgó adatbázist nem installálták</translation>
    </message>
</context>
<context>
    <name>QgsHelpViewerBase</name>
    <message>
        <source>QGIS Help</source>
        <translation>QGIS súgó</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Lezár</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
    </message>
    <message>
        <source>&amp;Home</source>
        <translation>&amp;Home</translation>
    </message>
    <message>
        <source>Alt+H</source>
        <translation>Alt+H</translation>
    </message>
    <message>
        <source>&amp;Forward</source>
        <translation>&amp;Tovább</translation>
    </message>
    <message>
        <source>Alt+F</source>
        <translation>Alt+F</translation>
    </message>
    <message>
        <source>&amp;Back</source>
        <translation>&amp;Vissza</translation>
    </message>
    <message>
        <source>Alt+B</source>
        <translation>Alt+B</translation>
    </message>
</context>
<context>
    <name>QgsHttpTransaction</name>
    <message>
        <source>WMS Server responded unexpectedly with HTTP Status Code %1 (%2)</source>
        <translation>A WMS szerver nem várt válasza ezzel a HHTP státusz kóddal %1 (%2)</translation>
    </message>
    <message>
        <source>HTTP response completed, however there was an error: %1</source>
        <translation>A HTTP válasz megérkezett, bár volt egy hiba: %1</translation>
    </message>
    <message>
        <source>HTTP transaction completed, however there was an error: %1</source>
        <translation>A HTTP tranzakció befejeződött, bár volt egy hiba: %1</translation>
    </message>
    <message>
        <source>Network timed out after %1 seconds of inactivity.
This may be a problem in your network connection or at the WMS server.</source>
        <translation type="obsolete">Hálózati időtúllépés %1 másodperc után.
A hiba a hálózati kapcsolatodban vagy a WMS szervernél lehet.</translation>
    </message>
</context>
<context>
    <name>QgsIdentifyResults</name>
    <message>
        <source>Feature</source>
        <translation>Elem</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Érték</translation>
    </message>
    <message>
        <source>Run action</source>
        <translation>Művelet futtatása</translation>
    </message>
    <message>
        <source>(Derived)</source>
        <translation>(Levezetett)</translation>
    </message>
    <message>
        <source>Identify Results - </source>
        <translation>Azonosítás eredmények -</translation>
    </message>
</context>
<context>
    <name>QgsIdentifyResultsBase</name>
    <message>
        <source>Identify Results</source>
        <translation>Azonosítás eredmények</translation>
    </message>
    <message>
        <source>Help</source>
        <translation>Súgó</translation>
    </message>
    <message>
        <source>F1</source>
        <translation>F1</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Lezár</translation>
    </message>
</context>
<context>
    <name>QgsLUDialogBase</name>
    <message>
        <source>Enter class bounds</source>
        <translation>Add meg az osztályok határait</translation>
    </message>
    <message>
        <source>Lower value</source>
        <translation>Alsó érték</translation>
    </message>
    <message>
        <source>-</source>
        <translation>-</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Mégsem</translation>
    </message>
    <message>
        <source>Upper value</source>
        <translation>Felső érték</translation>
    </message>
</context>
<context>
    <name>QgsLabelDialogBase</name>
    <message>
        <source>Form1</source>
        <translation>Form1</translation>
    </message>
    <message>
        <source>Preview:</source>
        <translation>Előnézet:</translation>
    </message>
    <message>
        <source>QGIS Rocks!</source>
        <translation>QGIS Rocks!</translation>
    </message>
    <message>
        <source>Font Style</source>
        <translation>Betű stílus</translation>
    </message>
    <message>
        <source>Font size units</source>
        <translation>Betűméret egységek</translation>
    </message>
    <message>
        <source>Map units</source>
        <translation>Térkép egységek</translation>
    </message>
    <message>
        <source>Points</source>
        <translation>Pontok</translation>
    </message>
    <message>
        <source>Transparency:</source>
        <translation>Átlátszóság:</translation>
    </message>
    <message>
        <source>Font</source>
        <translation>Betűkészlet</translation>
    </message>
    <message>
        <source>Colour</source>
        <translation>Szín</translation>
    </message>
    <message>
        <source>%</source>
        <translation>%</translation>
    </message>
    <message>
        <source>Font Alignment</source>
        <translation>Igazítás</translation>
    </message>
    <message>
        <source>Placement</source>
        <translation>Elhelyezés</translation>
    </message>
    <message>
        <source>Below Right</source>
        <translation>Jobb alul</translation>
    </message>
    <message>
        <source>Right</source>
        <translation>Jobb</translation>
    </message>
    <message>
        <source>Below</source>
        <translation>Alul</translation>
    </message>
    <message>
        <source>Over</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Above</source>
        <translation>Felül</translation>
    </message>
    <message>
        <source>Left</source>
        <translation>Bal</translation>
    </message>
    <message>
        <source>Below Left</source>
        <translation>Bal alul</translation>
    </message>
    <message>
        <source>Above Right</source>
        <translation>Jobb felül</translation>
    </message>
    <message>
        <source>Above Left</source>
        <translation>Bal felül</translation>
    </message>
    <message encoding="UTF-8">
        <source>°</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Angle (deg):</source>
        <translation>Szög (fok):</translation>
    </message>
    <message>
        <source>Buffer</source>
        <translation>Zóna</translation>
    </message>
    <message>
        <source>Buffer size units</source>
        <translation>Zóna méret egységek</translation>
    </message>
    <message>
        <source>Size is in map units</source>
        <translation>Méret térképi egységekben</translation>
    </message>
    <message>
        <source>Size is in points</source>
        <translation>Méret pontokban</translation>
    </message>
    <message>
        <source>Size:</source>
        <translation>Méret:</translation>
    </message>
    <message>
        <source>Buffer Labels?</source>
        <translation>Cimke zóna?</translation>
    </message>
    <message>
        <source>Position</source>
        <translation>Pozició</translation>
    </message>
    <message>
        <source>Offset units</source>
        <translation>Eltolás egységek</translation>
    </message>
    <message>
        <source>X Offset (pts):</source>
        <translation>X offset (pontok):</translation>
    </message>
    <message>
        <source>Y Offset (pts):</source>
        <translation>Y eltolás (pontok):</translation>
    </message>
    <message>
        <source>Data Defined Style</source>
        <translation>Adat szerinti stílus</translation>
    </message>
    <message>
        <source>&amp;Italic:</source>
        <translation>&amp;Dölt:</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>&amp;Méret:</translation>
    </message>
    <message>
        <source>&amp;Bold:</source>
        <translation>&amp;Félkövér:</translation>
    </message>
    <message>
        <source>&amp;Underline:</source>
        <translation>&amp;Aláhúzás:</translation>
    </message>
    <message>
        <source>Size Units:</source>
        <translation>Méret egységek:</translation>
    </message>
    <message>
        <source>&amp;Font family:</source>
        <translation>&amp;Betűkészlet:</translation>
    </message>
    <message>
        <source>Data Defined Alignment</source>
        <translation>Adat szerinti igazítás</translation>
    </message>
    <message>
        <source>Placement:</source>
        <translation>Elhelyezés:</translation>
    </message>
    <message>
        <source>Data Defined Buffer</source>
        <translation>Adat szerinti zóna</translation>
    </message>
    <message>
        <source>Data Defined Position</source>
        <translation>Adat szerinti pozició</translation>
    </message>
    <message>
        <source>X Coordinate:</source>
        <translation>X koordináta:</translation>
    </message>
    <message>
        <source>Y Coordinate:</source>
        <translation>Y koordináta:</translation>
    </message>
    <message>
        <source>Source</source>
        <translation>Forrás</translation>
    </message>
    <message>
        <source>Field containing label:</source>
        <translation>Cimkét tartalmazó mező:</translation>
    </message>
    <message>
        <source>Default label:</source>
        <translation>Alapértelmezett cimke:</translation>
    </message>
</context>
<context>
    <name>QgsLayerProjectionSelector</name>
    <message>
        <source>Define this layer&apos;s projection:</source>
        <translation>Add ennek a rétegnek a vetületét:</translation>
    </message>
    <message>
        <source>This layer appears to have no projection specification.</source>
        <translation>Nincs vetületi beállítás ehhez a réteghez.</translation>
    </message>
    <message>
        <source>By default, this layer will now have its projection set to that of the project, but you may override this by selecting a different projection below.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsLayerProjectionSelectorBase</name>
    <message>
        <source>Layer Projection Selector</source>
        <translation>Réteg vetület kiválasztás</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
</context>
<context>
    <name>QgsLegend</name>
    <message>
        <source>group</source>
        <translation>csoport</translation>
    </message>
    <message>
        <source>&amp;Make to toplevel item</source>
        <translation>&amp;Legfelső elemmé tesz</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation>&amp;Töröl</translation>
    </message>
    <message>
        <source>Re&amp;name</source>
        <translation>&amp;Átnevez</translation>
    </message>
    <message>
        <source>&amp;Add group</source>
        <translation>&amp;Csoport hozzáadás</translation>
    </message>
    <message>
        <source>&amp;Expand all</source>
        <translation>&amp;Mindent kinyit</translation>
    </message>
    <message>
        <source>&amp;Collapse all</source>
        <translation>&amp;Mindent összezár</translation>
    </message>
    <message>
        <source>Show file groups</source>
        <translation>Fájl csoport megjelenítés</translation>
    </message>
    <message>
        <source>No Layer Selected</source>
        <translation>Nincs szelektált réteg</translation>
    </message>
    <message>
        <source>To open an attribute table, you must select a vector layer in the legend</source>
        <translation>Az attribútum tábla megnyitásához egy vektor réteget kell szelektálnod a jelmagyarázatban</translation>
    </message>
</context>
<context>
    <name>QgsLegendLayer</name>
    <message>
        <source>&amp;Zoom to layer extent</source>
        <translation>&amp;Nagyítás a réteg terjedelemre</translation>
    </message>
    <message>
        <source>&amp;Zoom to best scale (100%)</source>
        <translation>&amp;Nagyítás a legjobb méretarányra (100%)</translation>
    </message>
    <message>
        <source>&amp;Show in overview</source>
        <translation>&amp;Megjelenítés az áttekintő térképen</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation>&amp;Töröl</translation>
    </message>
    <message>
        <source>&amp;Open attribute table</source>
        <translation>&amp;Attribútum tábla megnyitása</translation>
    </message>
    <message>
        <source>Save as shapefile...</source>
        <translation>Mentés mint shape fájl...</translation>
    </message>
    <message>
        <source>Save selection as shapefile...</source>
        <translation>Szelekció mentése mint shape fájl...</translation>
    </message>
    <message>
        <source>&amp;Properties</source>
        <translation>&amp;Tulajdonságok</translation>
    </message>
    <message>
        <source>More layers</source>
        <translation>További rétegek</translation>
    </message>
    <message>
        <source>This item contains more layer files. Displaying more layers in table is not supported.</source>
        <translation>Ez az elem több réteg fájlt tartalmaz. Több réteg táblában megjelenítése nem lehetséges.</translation>
    </message>
</context>
<context>
    <name>QgsLegendLayerFile</name>
    <message>
        <source>Not a vector layer</source>
        <translation>Nem vektor réteg</translation>
    </message>
    <message>
        <source>To open an attribute table, you must select a vector layer in the legend</source>
        <translation>Az attribútum tábla megnyitásához egy réteget kell szelektálnod a jelmagyarázatban</translation>
    </message>
    <message>
        <source>bad_alloc exception</source>
        <translation>bad_alloc exception</translation>
    </message>
    <message>
        <source>Filling the attribute table has been stopped because there was no more virtual memory left</source>
        <translation>Az attribútum tábla kitöltését magszakítottam, mert elfogyott a virtuális memória</translation>
    </message>
    <message>
        <source>Attribute table - </source>
        <translation>Attribútum tábla -</translation>
    </message>
    <message>
        <source>Save layer as...</source>
        <translation>Layer mentés másként...</translation>
    </message>
    <message>
        <source>Saving done</source>
        <translation>Mentés kész</translation>
    </message>
    <message>
        <source>Export to Shapefile has been completed</source>
        <translation>Kész az shape fájl export</translation>
    </message>
    <message>
        <source>Driver not found</source>
        <translation>A meghajtót nem találom</translation>
    </message>
    <message>
        <source>ESRI Shapefile driver is not available</source>
        <translation>Nincs ESRI shape fájl meghajtó</translation>
    </message>
    <message>
        <source>Error creating shapefile</source>
        <translation>Hiba a shape fájl létrehozásában</translation>
    </message>
    <message>
        <source>The shapefile could not be created (</source>
        <translation>A shape fájlt nem tudom létrehozni (</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>Hiba</translation>
    </message>
    <message>
        <source>Layer creation failed</source>
        <translation>A réteg létrehozás nem sikerült</translation>
    </message>
    <message>
        <source>Layer attribute table contains unsupported datatype(s)</source>
        <translation>A réteg attribútum tábla nem támogatott adattípus(oka)t tartalmaz</translation>
    </message>
    <message>
        <source>Start editing failed</source>
        <translation>Sikertelen szerkesztés kezdés</translation>
    </message>
    <message>
        <source>Provider cannot be opened for editing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Stop editing</source>
        <translation>Szerkesztés vége</translation>
    </message>
    <message>
        <source>Do you want to save the changes?</source>
        <translation>Akarod menteni a változásokat?</translation>
    </message>
    <message>
        <source>Could not commit changes</source>
        <translation>Nem tudom menteni a változásokat</translation>
    </message>
    <message>
        <source>Problems during roll back</source>
        <translation>Probléma a visszavonás közben</translation>
    </message>
    <message>
        <source>&amp;Zoom to layer extent</source>
        <translation>&amp;Nagyítás a réteg terjedelemre</translation>
    </message>
    <message>
        <source>&amp;Show in overview</source>
        <translation>&amp;Megjelenítés az áttekintő térképen</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation>&amp;Töröl</translation>
    </message>
    <message>
        <source>&amp;Open attribute table</source>
        <translation>&amp;Attribútum tábla megnyitása</translation>
    </message>
    <message>
        <source>Save as shapefile...</source>
        <translation>Mentés mint shape fájl...</translation>
    </message>
    <message>
        <source>Save selection as shapefile...</source>
        <translation>Szelekció mentése mint shape fájl...</translation>
    </message>
    <message>
        <source>&amp;Properties</source>
        <translation>&amp;Tulajdonságok</translation>
    </message>
</context>
<context>
    <name>QgsLineStyleDialogBase</name>
    <message>
        <source>Select a line style</source>
        <translation>Válassz vonalstílust</translation>
    </message>
    <message>
        <source>Styles</source>
        <translation>Stílusok</translation>
    </message>
    <message>
        <source>Ok</source>
        <translation>Ok</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Mégsem</translation>
    </message>
</context>
<context>
    <name>QgsLineStyleWidgetBase</name>
    <message>
        <source>Form2</source>
        <translation type="unfinished">Form2</translation>
    </message>
    <message>
        <source>Outline Style</source>
        <translation>Körvonal stílus</translation>
    </message>
    <message>
        <source>Width:</source>
        <translation>Szélesség:</translation>
    </message>
    <message>
        <source>Colour:</source>
        <translation>Szín:</translation>
    </message>
    <message>
        <source>LineStyleWidget</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>col</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsMapCanvas</name>
    <message>
        <source>Could not draw</source>
        <translation>Nem lehet kirajzolni</translation>
    </message>
    <message>
        <source>because</source>
        <translation type="unfinished">mert</translation>
    </message>
</context>
<context>
    <name>QgsMapLayer</name>
    <message>
        <source> Check file permissions and retry.</source>
        <translation>Ellenőrizd a fájl jogokat és próbáld újra.</translation>
    </message>
</context>
<context>
    <name>QgsMapToolIdentify</name>
    <message>
        <source>(clicked coordinate)</source>
        <translation>(megjelőlt koordináta)</translation>
    </message>
    <message>
        <source>WMS identify result for %1
%2</source>
        <translation>WMS azonosítás eredmény %1
%2</translation>
    </message>
    <message>
        <source>- %1 features found</source>
        <comment>Identify results window title</comment>
        <translation type="obsolete">- %1 elemet találtam</translation>
    </message>
    <message>
        <source>No features found</source>
        <translation>Nem találtam elemeket</translation>
    </message>
    <message>
        <source>&lt;p&gt;No features were found within the search radius. Note that it is currently not possible to use the identify tool on unsaved features.&lt;/p&gt;</source>
        <translation>&lt;p&gt;A keresési sugáron belül nem találtam elemeket. Vigyázz a nem mentett elemekre nem használhatod az azonosítás eszközt.&lt;/p&gt;</translation>
    </message>
</context>
<context>
    <name>QgsMapToolSplitFeatures</name>
    <message>
        <source>Split error</source>
        <translation>Felosztás hiba</translation>
    </message>
    <message>
        <source>An error occured during feature splitting</source>
        <translation>Hiba az elem felosztása során </translation>
    </message>
</context>
<context>
    <name>QgsMapToolVertexEdit</name>
    <message>
        <source>Snap tolerance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Don&apos;t show this message again</source>
        <translation type="unfinished">Ne mutasd többé ezt az üzenetet</translation>
    </message>
    <message>
        <source>Could not snap segment.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Have you set the tolerance in Settings &gt; Project Properties &gt; General?</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsMapserverExport</name>
    <message>
        <source>Overwrite File?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> exists. 
Do you want to overwrite it?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name for the map file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>MapServer map files (*.map);;All files (*.*)</source>
        <comment>Filter list for selecting files from a dialog box</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose the QGIS project file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>QGIS Project Files (*.qgs);;All files (*.*)</source>
        <comment>Filter list for selecting files from a dialog box</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> exists. 
Do you want to overwrite it?</source>
        <comment>a filename is prepended to this text, and appears in a dialog box</comment>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsMapserverExportBase</name>
    <message>
        <source>Export to Mapserver</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Web Interface Definition</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Template</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Path to the MapServer template file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Browse...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Header</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Footer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Map</source>
        <translation type="unfinished">Térkép</translation>
    </message>
    <message>
        <source>Units</source>
        <translation type="unfinished">Egységek</translation>
    </message>
    <message>
        <source>dd</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>feet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>meters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>miles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>inches</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>kilometers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Image type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>gif</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>gtiff</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>jpeg</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>png</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>swf</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>userdefined</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>wbmp</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Width</source>
        <translation type="unfinished">Szélesség</translation>
    </message>
    <message>
        <source>Height</source>
        <translation type="unfinished">Magasság</translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished">Név</translation>
    </message>
    <message>
        <source>Prefix attached to map, scalebar and legend GIF filenames created using this MapFile</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Map file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name for the map file to be created from the QGIS project file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Full path to the QGIS project file to export to MapServer map format</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>QGIS project file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save As...</source>
        <translation type="unfinished">Mentés másként...</translation>
    </message>
    <message>
        <source>If checked, only the layer information will be processed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Export LAYER information only</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>F1</source>
        <translation type="unfinished">F1</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished">&amp;Mégsem</translation>
    </message>
    <message>
        <source>...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>MinScale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>MaxScale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Prefix attached to map, scalebar and legend GIF filenames created using this MapFile. It should be kept short.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsMarkerDialogBase</name>
    <message>
        <source>Choose a marker symbol</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ok</source>
        <translation type="unfinished">Ok</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">Mégsem</translation>
    </message>
    <message>
        <source>New Item</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsMeasureBase</name>
    <message>
        <source>Measure</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Total:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Help</source>
        <translation type="unfinished">Súgó</translation>
    </message>
    <message>
        <source>New</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cl&amp;ose</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsMeasureDialog</name>
    <message>
        <source>Segments (in meters)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Segments (in feet)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Segments (in degrees)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Segments</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsMeasureTool</name>
    <message>
        <source>Incorrect measure results</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;p&gt;This map is defined with a geographic coordinate system (latitude/longitude) but the map extents suggests that it is actually a projected coordinate system (e.g., Mercator). If so, the results from line or area measurements will be incorrect.&lt;/p&gt;&lt;p&gt;To fix this, explicitly set an appropriate map coordinate system using the &lt;tt&gt;Settings:Project Properties&lt;/tt&gt; menu.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsMessageViewer</name>
    <message>
        <source>QGIS Message</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Don&apos;t show this message again</source>
        <translation type="unfinished">Ne mutasd többé ezt az üzenetet</translation>
    </message>
    <message>
        <source>Close</source>
        <translation type="unfinished">Lezár</translation>
    </message>
</context>
<context>
    <name>QgsMySQLProvider</name>
    <message>
        <source>Unable to access relation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unable to access the </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> relation.
The error message from the database was:
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No GEOS Support!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Your PostGIS installation has no GEOS support.
Feature selection and identification will not work properly.
Please install PostGIS with GEOS support (http://geos.refractions.net)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save layer as...</source>
        <translation type="unfinished">Layer mentés másként...</translation>
    </message>
    <message>
        <source>Error</source>
        <translation type="unfinished">Hiba</translation>
    </message>
    <message>
        <source>Error creating field </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Layer creation failed</source>
        <translation type="unfinished">A réteg létrehozás nem sikerült</translation>
    </message>
    <message>
        <source>Error creating shapefile</source>
        <translation type="unfinished">Hiba a shape fájl létrehozásában</translation>
    </message>
    <message>
        <source>The shapefile could not be created (</source>
        <translation type="unfinished">A shape fájlt nem tudom létrehozni (</translation>
    </message>
    <message>
        <source>Driver not found</source>
        <translation type="unfinished">A meghajtót nem találom</translation>
    </message>
    <message>
        <source> driver is not available</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsNewConnection</name>
    <message>
        <source>Test connection</source>
        <translation type="unfinished">Kapcsolat tesztelés</translation>
    </message>
    <message>
        <source>Connection to %1 was successful</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Connection failed - Check settings and try again.

Extended error information:
</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsNewConnectionBase</name>
    <message>
        <source>Create a New PostGIS connection</source>
        <translation type="unfinished">Új PostGIS kapcsolat létrehozása</translation>
    </message>
    <message>
        <source>Connection Information</source>
        <translation type="unfinished">Kapcsolat információk</translation>
    </message>
    <message>
        <source>Restrict the search to the public schema for spatial tables not in the geometry_columns table</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>When searching for spatial tables that are not in the geometry_columns tables, restrict the search to tables that are in the public schema (for some databases this can save lots of time)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Only look in the &apos;public&apos; schema</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Restrict the displayed tables to those that are in the geometry_columns table</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Restricts the displayed tables to those that are in the geometry_columns table. This can speed up the initial display of spatial tables.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Only look in the geometry_columns table</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save Password</source>
        <translation type="unfinished">Jelszó mentése</translation>
    </message>
    <message>
        <source>Test Connect</source>
        <translation type="unfinished">Kapcsolat teszt</translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished">Név</translation>
    </message>
    <message>
        <source>Host</source>
        <translation type="unfinished">Gép</translation>
    </message>
    <message>
        <source>Database</source>
        <translation type="unfinished">Adatbázis</translation>
    </message>
    <message>
        <source>Port</source>
        <translation type="unfinished">Port</translation>
    </message>
    <message>
        <source>Username</source>
        <translation type="unfinished">Felhasználó név</translation>
    </message>
    <message>
        <source>Password</source>
        <translation type="unfinished">Jelszó</translation>
    </message>
    <message>
        <source>Name of the new connection</source>
        <translation type="unfinished">Az új kapcsolat neve</translation>
    </message>
    <message>
        <source>5432</source>
        <translation type="unfinished">5432</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">OK</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">Mégsem</translation>
    </message>
    <message>
        <source>Help</source>
        <translation type="unfinished">Súgó</translation>
    </message>
    <message>
        <source>F1</source>
        <translation type="unfinished">F1</translation>
    </message>
</context>
<context>
    <name>QgsNewHttpConnectionBase</name>
    <message>
        <source>Create a New WMS connection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Connection Information</source>
        <translation type="unfinished">Kapcsolat információk</translation>
    </message>
    <message>
        <source>Name of the new connection</source>
        <translation type="unfinished">Az új kapcsolat neve</translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished">Név</translation>
    </message>
    <message>
        <source>URL</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Proxy Host</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Proxy Port</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Proxy User</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Proxy Password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Your user name for the HTTP proxy (optional)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Password for your HTTP proxy (optional)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>HTTP address of the Web Map Server</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name of your HTTP proxy (optional)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Port number of your HTTP proxy (optional)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="unfinished">OK</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">Mégsem</translation>
    </message>
    <message>
        <source>Help</source>
        <translation type="unfinished">Súgó</translation>
    </message>
    <message>
        <source>F1</source>
        <translation type="unfinished">F1</translation>
    </message>
</context>
<context>
    <name>QgsNorthArrowPlugin</name>
    <message>
        <source>Bottom Left</source>
        <translation type="unfinished">Bal alsó</translation>
    </message>
    <message>
        <source>Top Left</source>
        <translation type="unfinished">Bal felső</translation>
    </message>
    <message>
        <source>Top Right</source>
        <translation type="unfinished">Jobb felső</translation>
    </message>
    <message>
        <source>Bottom Right</source>
        <translation type="unfinished">Jobb alsó</translation>
    </message>
    <message>
        <source>&amp;North Arrow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Creates a north arrow that is displayed on the map canvas</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Decorations</source>
        <translation type="unfinished">&amp;Dekorációk</translation>
    </message>
    <message>
        <source>North arrow pixmap not found</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsNorthArrowPluginGui</name>
    <message>
        <source>Pixmap not found</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsNorthArrowPluginGuiBase</name>
    <message>
        <source>North Arrow Plugin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Angle</source>
        <translation type="unfinished">Szög</translation>
    </message>
    <message>
        <source>Placement</source>
        <translation type="unfinished">Elhelyezés</translation>
    </message>
    <message>
        <source>Set direction automatically</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enable North Arrow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Placement on screen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Top Left</source>
        <translation type="unfinished">Bal felső</translation>
    </message>
    <message>
        <source>Top Right</source>
        <translation type="unfinished">Jobb felső</translation>
    </message>
    <message>
        <source>Bottom Left</source>
        <translation type="unfinished">Bal alsó</translation>
    </message>
    <message>
        <source>Bottom Right</source>
        <translation type="unfinished">Jobb alsó</translation>
    </message>
    <message>
        <source>Preview of north arrow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Icon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Browse...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New Item</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsOGRFactory</name>
    <message>
        <source>Wrong Path/URI</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The provided path for the dataset is not valid.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsOptions</name>
    <message>
        <source>Detected active locale on your system: </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsOptionsBase</name>
    <message>
        <source>QGIS Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;General</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>General</source>
        <translation type="unfinished">Általános</translation>
    </message>
    <message>
        <source>Ask to save project changes when required</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Warn me when opening a project file saved with an older version of QGIS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Appearance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Splash screen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hide splash screen at startup</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Icon Theme</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Note: &lt;/b&gt;Theme changes take effect the next time QGIS is started</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Theme</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default Map Appearance (Overridden by project properties)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Selection Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Background Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Appearance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Capitalise layer name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Rendering</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Update during drawing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>features</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Map display will be updated (drawn) after this many features have been read from the data source</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Update display after reading</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>(Set to 0 to not update the display until all features have been read)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Initial Visibility</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>By default new la&amp;yers added to the map should be displayed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rendering</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Make lines appear less jagged at the expense of some drawing performance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Selecting this will unselect the &apos;make lines less&apos; jagged toggle</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fix problems with incorrectly filled polygons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Continuously redraw the map when dragging the legend/map divider</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Map tools</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Panning and zooming</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Zoom</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Zoom and recenter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Nothing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Zoom factor:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mouse wheel action:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Measure tool</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rubberband color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ellipsoid for distance calculations:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Search radius</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>(Specify the search radius as a percentage of the map width)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Search Radius for Identifying Features and displaying Map Tips</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>%</source>
        <translation type="unfinished">%</translation>
    </message>
    <message>
        <source>Digitizing</source>
        <translation type="unfinished">Digitalizálás</translation>
    </message>
    <message>
        <source>Rubberband</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line Width:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line width in pixels</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line Colour:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Snapping</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default Snapping Tolerance (in layer units):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Search radius for vertex edits (in layer units):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Pro&amp;jection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select Global Default ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>When layer is loaded that has no projection information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Prompt for projection.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Project wide default projection will be used.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Global default projection displa&amp;yed below will be used.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Locale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Force Override System Locale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Locale to use instead</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Note: Enabling / changing overide on local requires an application restart.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Additional Info</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Detected active locale on your system:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsPasteTransformationsBase</name>
    <message>
        <source>Paste Transformations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Note: This function is not useful yet!&lt;/b&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Source</source>
        <translation type="unfinished">Forrás</translation>
    </message>
    <message>
        <source>Destination</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>F1</source>
        <translation type="unfinished">F1</translation>
    </message>
    <message>
        <source>Add New Transfer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="unfinished">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="unfinished">&amp;Mégsem</translation>
    </message>
</context>
<context>
    <name>QgsPatternDialogBase</name>
    <message>
        <source>Select a fill pattern</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No Fill</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">Mégsem</translation>
    </message>
    <message>
        <source>Ok</source>
        <translation type="unfinished">Ok</translation>
    </message>
</context>
<context>
    <name>QgsPgGeoprocessing</name>
    <message>
        <source>&amp;Buffer features</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>A new layer is created in the database with the buffered features.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Geoprocessing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Buffer features in layer %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unable to add geometry column</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unable to add geometry column to the output table </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unable to create table</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Failed to create the output table </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error connecting to the database</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No GEOS support</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Buffer function requires GEOS support in PostGIS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Not a PostgreSQL/PostGIS Layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> is not a PostgreSQL/PostGIS layer.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Geoprocessing functions are only available for PostgreSQL/PostGIS Layers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No Active Layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>You must select a layer in the legend to buffer</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsPgQueryBuilder</name>
    <message>
        <source>Table &lt;b&gt;%1&lt;/b&gt; in database &lt;b&gt;%2&lt;/b&gt; on host &lt;b&gt;%3&lt;/b&gt;, user &lt;b&gt;%4&lt;/b&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Connection Failed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Connection to the database failed:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Database error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;p&gt;Failed to get sample of field values using SQL:&lt;/p&gt;&lt;p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No Query</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>You must create a query before you can test it</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Query Result</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The where clause returned </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> rows.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Query Failed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>An error occurred when executing the query:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error in Query</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No Records</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The query you specified results in zero records being returned. Valid PostgreSQL layers must have at least one feature.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsPgQueryBuilderBase</name>
    <message>
        <source>PostgreSQL Query Builder</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Operators</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>=</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;</source>
        <translation type="unfinished">&lt;</translation>
    </message>
    <message>
        <source>NOT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>OR</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>AND</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>%</source>
        <translation type="unfinished">%</translation>
    </message>
    <message>
        <source>IN</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>NOT IN</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>!=</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&gt;</source>
        <translation type="unfinished">&gt;</translation>
    </message>
    <message>
        <source>LIKE</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>ILIKE</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&gt;=</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;=</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Clear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Test</source>
        <translation type="unfinished">Teszt</translation>
    </message>
    <message>
        <source>Ok</source>
        <translation type="unfinished">Ok</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">Mégsem</translation>
    </message>
    <message>
        <source>Values</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Retrieve &lt;span style=&quot; font-weight:600;&quot;&gt;all&lt;/span&gt; the record in the vector file (&lt;span style=&quot; font-style:italic;&quot;&gt;if the table is big, the operation can consume some time&lt;/span&gt;)&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All</source>
        <translation type="unfinished">Mind</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Take a &lt;span style=&quot; font-weight:600;&quot;&gt;sample&lt;/span&gt; of records in the vector file&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sample</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;List of values for the current field.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fields</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;List of fields in this vector file&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Datasource:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>SQL where clause</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsPluginManager</name>
    <message>
        <source>Name</source>
        <translation type="unfinished">Név</translation>
    </message>
    <message>
        <source>Version</source>
        <translation type="unfinished">Verzió</translation>
    </message>
    <message>
        <source>Description</source>
        <translation type="unfinished">Leírás</translation>
    </message>
    <message>
        <source>Library name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No Plugins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No QGIS plugins found in </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsPluginManagerBase</name>
    <message>
        <source>QGIS Plugin Manager</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Plugin Directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>To load a plugin, click the checkbox next to the plugin and click Ok</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Select All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+S</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;lear All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Ok</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="unfinished">&amp;Lezár</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="unfinished">Alt+C</translation>
    </message>
</context>
<context>
    <name>QgsPointDialog</name>
    <message>
        <source>Linear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose a name for the world file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Helmert</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>-modified</source>
        <comment>Georeferencer:QgsPointDialog.cpp - used to modify a user given filename</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Figyelmeztetés</translation>
    </message>
    <message>
        <source>&lt;p&gt;A Helmert transform requires modifications in the raster layer.&lt;/p&gt;&lt;p&gt;The modified raster will be saved in a new file and a world file will be generated for this new file instead.&lt;/p&gt;&lt;p&gt;Are you sure that this is what you want?&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Currently all modified files will be written in TIFF format.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Affine</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Not implemented!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;p&gt;An affine transform requires changing the original raster file. This is not yet supported.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;p&gt;The </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> transform is not yet supported.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error</source>
        <translation type="unfinished">Hiba</translation>
    </message>
    <message>
        <source>Could not write to </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Zoom In</source>
        <translation type="unfinished">Nagyítás</translation>
    </message>
    <message>
        <source>z</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Zoom Out</source>
        <translation type="unfinished">Kicsinyítés</translation>
    </message>
    <message>
        <source>Z</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Zoom To Layer</source>
        <translation type="unfinished">Rétegre nagyítás</translation>
    </message>
    <message>
        <source>Zoom to Layer</source>
        <translation type="unfinished">Rétegre nagyítás</translation>
    </message>
    <message>
        <source>Pan Map</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Pan the map</source>
        <translation type="unfinished">A térkép eltolása</translation>
    </message>
    <message>
        <source>Add Point</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Capture Points</source>
        <translation type="unfinished">Pont digitalizálás</translation>
    </message>
    <message>
        <source>Delete Point</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete Selected</source>
        <translation type="unfinished">Szelektáltak törlése</translation>
    </message>
</context>
<context>
    <name>QgsPointDialogBase</name>
    <message>
        <source>Reference points</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Modified raster:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>World file:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Transform type:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add points</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete points</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Zoom in</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Zoom out</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Zoom to the raster extents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Pan</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create and load layer</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsPointStyleWidgetBase</name>
    <message>
        <source>Form3</source>
        <translation type="unfinished">Form3</translation>
    </message>
    <message>
        <source>Symbol Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scale</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsPostgresProvider</name>
    <message>
        <source>Unable to access relation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unable to access the </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> relation.
The error message from the database was:
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No GEOS Support!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Your PostGIS installation has no GEOS support.
Feature selection and identification will not work properly.
Please install PostGIS with GEOS support (http://geos.refractions.net)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No suitable key column in table</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The table has no column suitable for use as a key.

Qgis requires that the table either has a column of type
int4 with a unique constraint on it (which includes the
primary key) or has a PostgreSQL oid column.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The unique index on column</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>is unsuitable because Qgis does not currently support non-int4 type columns as a key into the table.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>and </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The unique index based on columns </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> is unsuitable because Qgis does not currently support multiple columns as a key into the table.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unable to find a key column</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> derives from </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>and is suitable.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>and is not suitable </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>type is </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> and has a suitable constraint)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> and does not have a suitable constraint)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Note: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>initially appeared suitable but does not contain unique data, so is not suitable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The view you selected has the following columns, none of which satisfy the above conditions:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Qgis requires that the view has a column that can be used as a unique key. Such a column should be derived from a table column of type int4 and be a primary key, have a unique constraint on it, or be a PostgreSQL oid column. To improve performance the column should also be indexed.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The view </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>has no column suitable for use as a unique key.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No suitable key column in view</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>INSERT error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>An error occured during feature insertion</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>DELETE error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>An error occured during deletion from disk</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PostGIS error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>An error occured contacting the PostgreSQL database</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The PostgreSQL database returned: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>When trying: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unknown geometry type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Column </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> in </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> has a geometry type of </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>, which Qgis does not currently support.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>. The database communication log was:
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unable to get feature type and srid</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsProjectPropertiesBase</name>
    <message>
        <source>Project Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>General</source>
        <translation type="unfinished">Általános</translation>
    </message>
    <message>
        <source>Project Title</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Descriptive project name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default project title</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Precision</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Automatically sets the number of decimal places in the mouse position display</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The number of decimal places that are used when displaying the mouse position is automatically set to be enough so that moving the mouse by one pixel gives a change in the position display</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sets the number of decimal places to use for the mouse position display</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Manual</source>
        <translation type="unfinished">Manuális</translation>
    </message>
    <message>
        <source>The number of decimal places for the manual option</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>decimal places</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Map Appearance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Selection Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Background Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Digitizing</source>
        <translation type="unfinished">Digitalizálás</translation>
    </message>
    <message>
        <source>Enable topological editing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Snapping options...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Avoid intersections of new polygons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Map Units</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Meters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Feet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Decimal degrees</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Projection</source>
        <translation type="unfinished">Vetület</translation>
    </message>
    <message>
        <source>Enable on the fly projection</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsProjectionSelector</name>
    <message>
        <source>QGIS SRSID: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PostGIS SRID: </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsProjectionSelectorBase</name>
    <message>
        <source>Projection Selector</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Projection</source>
        <translation type="unfinished">Vetület</translation>
    </message>
    <message>
        <source>Search</source>
        <translation type="unfinished">Keres</translation>
    </message>
    <message>
        <source>Find</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished">Név</translation>
    </message>
    <message>
        <source>QGIS SRSID</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>EPSG ID</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Postgis SRID</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Spatial Reference System</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Id</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsPythonDialog</name>
    <message>
        <source>Python console</source>
        <translation type="unfinished">Phyton konzol</translation>
    </message>
    <message>
        <source>To access Quantum GIS environment from this python console use object from global scope which is an instance of QgisInterface class.&lt;br&gt;Usage e.g.: iface.zoomFull()</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&gt;&gt;&gt;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsQuickPrint</name>
    <message>
        <source> km</source>
        <translation type="unfinished">km</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="unfinished">mm</translation>
    </message>
    <message>
        <source> cm</source>
        <translation type="unfinished">cm</translation>
    </message>
    <message>
        <source> m</source>
        <translation type="unfinished">m</translation>
    </message>
    <message>
        <source> miles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> mile</source>
        <translation type="unfinished">mérföld</translation>
    </message>
    <message>
        <source> inches</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> foot</source>
        <translation type="unfinished">láb</translation>
    </message>
    <message>
        <source> feet</source>
        <translation type="unfinished">láb</translation>
    </message>
    <message>
        <source> degree</source>
        <translation type="unfinished">fok</translation>
    </message>
    <message>
        <source> degrees</source>
        <translation type="unfinished">fok</translation>
    </message>
    <message>
        <source> unknown</source>
        <translation type="unfinished">ismeretlen</translation>
    </message>
</context>
<context>
    <name>QgsRasterLayer</name>
    <message>
        <source>and all other files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Raster Extent: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Clipped area: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Driver:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dataset Description</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dimensions:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>X: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> Y: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> Bands: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No Data Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>NoDataValue not set</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Data Type:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>GDT_Byte - Eight bit unsigned integer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>GDT_UInt16 - Sixteen bit unsigned integer </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>GDT_Int16 - Sixteen bit signed integer </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>GDT_UInt32 - Thirty two bit unsigned integer </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>GDT_Int32 - Thirty two bit signed integer </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>GDT_Float32 - Thirty two bit floating point </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>GDT_Float64 - Sixty four bit floating point </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>GDT_CInt16 - Complex Int16 </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>GDT_CInt32 - Complex Int32 </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>GDT_CFloat32 - Complex Float32 </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>GDT_CFloat64 - Complex Float64 </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Could not determine raster data type.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Pyramid overviews:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Layer Spatial Reference System: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Origin:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Pixel Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Property</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Value</source>
        <translation type="unfinished">Érték</translation>
    </message>
    <message>
        <source>Band</source>
        <translation type="unfinished">Sáv</translation>
    </message>
    <message>
        <source>Band No</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No Stats</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No stats collected yet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Min Val</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Max Val</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mean</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sum of squares</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Standard Deviation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sum of all cells</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cell Count</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Average Magphase</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Average</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>out of extent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>null (no data)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Not Set</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsRasterLayerProperties</name>
    <message>
        <source>Grayscale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Pseudocolor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Freak Out</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Custom Colormap</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No Stretch</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Stretch To MinMax</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Stretch And Clip To MinMax</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Clip To MinMax</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Discrete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Linearly</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Equal interval</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Quantiles</source>
        <translation type="unfinished">Egyenló számú</translation>
    </message>
    <message>
        <source>Palette</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Description</source>
        <translation type="unfinished">Leírás</translation>
    </message>
    <message>
        <source>Large resolution raster layers can slow navigation in QGIS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>By creating lower resolution copies of the data (pyramids) performance can be considerably improved as QGIS selects the most suitable resolution to use depending on the level of zoom.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>You must have write access in the directory where the original data is stored to build pyramids.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Please note that building pyramids may alter the original data file and once created they cannot be removed!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Please note that building pyramids could corrupt your image - always make a backup of your data first!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Red</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Green</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Blue</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Percent Transparent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Gray</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Indexed Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>User Defined</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No Scaling</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Columns: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rows: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No-Data Value: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No-Data Value: Not Set</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>n/a</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Write access denied</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Write access denied. Adjust the file permissions and try again.

</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Building pyramids failed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The file was not writeable. Some formats can not be written to, only read. You can also try to check the permissions and then try again.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Building pyramid overviews is not supported on this type of raster.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Textfile (*.txt)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>QGIS Generated Transparent Pixel Value Export File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import Error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The following lines contained errors

</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Read access denied</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Read access denied. Adjust the file permissions and try again.

</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color Ramp</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsRasterLayerPropertiesBase</name>
    <message>
        <source>Raster Layer Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Symbology</source>
        <translation type="unfinished">Megjelenés</translation>
    </message>
    <message>
        <source>Grayscale Band Scaling</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Max</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Std Deviation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Custom Min Max Values:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Min</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Contrast Enhancement</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Load Min Max Values From Band(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>RGB Scaling</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;&lt;font color=&apos;blue&apos;&gt;Max&lt;/font&gt;&lt;/b&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Custom Min Max Values</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;&lt;font color=&apos;green&apos;&gt;Min&lt;/font&gt;&lt;/b&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;&lt;font color=&apos;green&apos;&gt;Max&lt;/font&gt;&lt;/b&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;&lt;font color=&apos;red&apos;&gt;Min&lt;/font&gt;&lt;/b&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;&lt;font color=&apos;red&apos;&gt;Max&lt;/font&gt;&lt;/b&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;&lt;font color=&apos;blue&apos;&gt;Min&lt;/font&gt;&lt;/b&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Grayscale Band Selection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Gray</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>RGB Mode Band Selection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;&lt;font color=&apos;blue&apos;&gt;Blue&lt;/font&gt;&lt;/b&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;&lt;font color=&apos;green&apos;&gt;Green&lt;/font&gt;&lt;/b&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;&lt;font color=&apos;red&apos;&gt;Red&lt;/font&gt;&lt;/b&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color Map</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Invert Color Map</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Global Transparency</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> 00%</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>None</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;p align=&quot;right&quot;&gt;Full&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Render as</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Single Band Gray</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Three Band Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Transparent Pixels</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Transparent Band:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Custom Transparency List</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Transparency Layer;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add Values Manually</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add Values From Display</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Remove Selected Row</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default Values</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import From File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Export To File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No Data Value:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reset No Data Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Colormap</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Number of entries:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete entry</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Classify</source>
        <translation type="unfinished">Osztályoz</translation>
    </message>
    <message>
        <source>1</source>
        <translation type="unfinished">1</translation>
    </message>
    <message>
        <source>2</source>
        <translation type="unfinished">2</translation>
    </message>
    <message>
        <source>Color interpolation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Classification mode:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>General</source>
        <translation type="unfinished">Általános</translation>
    </message>
    <message>
        <source>Spatial Reference System</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Change</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scale Dependent Visibility</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Maximum scale at which this layer will be displayed. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Maximum 1:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Minimum scale at which this layer will be displayed. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Minimum 1:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>DebugInfo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Columns:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rows:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No Data:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Layer Source:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Display Name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Thumbnail</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Legend:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Palette:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Metadata</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Pyramids</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Pyramid Resolutions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Resampling Method</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Average</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Nearest Neighbour</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Build Pyramids</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Histogram</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Chart Type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line Graph</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bar Chart</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Refresh</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Options</source>
        <translation type="unfinished">Opciók</translation>
    </message>
    <message>
        <source>Column Count:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Out Of Range OK?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Allow Approximation</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsRunProcess</name>
    <message>
        <source>Starting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Done</source>
        <translation type="unfinished">Kész</translation>
    </message>
    <message>
        <source>Unable to run command</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsScaleBarPlugin</name>
    <message>
        <source>Bottom Left</source>
        <translation type="unfinished">Bal alsó</translation>
    </message>
    <message>
        <source>Top Left</source>
        <translation type="unfinished">Bal felső</translation>
    </message>
    <message>
        <source>Top Right</source>
        <translation type="unfinished">Jobb felső</translation>
    </message>
    <message>
        <source>Bottom Right</source>
        <translation type="unfinished">Jobb alsó</translation>
    </message>
    <message>
        <source>Tick Down</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Tick Up</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bar</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Box</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Scale Bar</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Creates a scale bar that is displayed on the map canvas</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Decorations</source>
        <translation type="unfinished">&amp;Dekorációk</translation>
    </message>
    <message>
        <source> metres/km</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> feet/miles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> degrees</source>
        <translation type="unfinished">fok</translation>
    </message>
    <message>
        <source> km</source>
        <translation type="unfinished">km</translation>
    </message>
    <message>
        <source> mm</source>
        <translation type="unfinished">mm</translation>
    </message>
    <message>
        <source> cm</source>
        <translation type="unfinished">cm</translation>
    </message>
    <message>
        <source> m</source>
        <translation type="unfinished">m</translation>
    </message>
    <message>
        <source> miles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> mile</source>
        <translation type="unfinished">mérföld</translation>
    </message>
    <message>
        <source> inches</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> foot</source>
        <translation type="unfinished">láb</translation>
    </message>
    <message>
        <source> feet</source>
        <translation type="unfinished">láb</translation>
    </message>
    <message>
        <source> degree</source>
        <translation type="unfinished">fok</translation>
    </message>
    <message>
        <source> unknown</source>
        <translation type="unfinished">ismeretlen</translation>
    </message>
</context>
<context>
    <name>QgsScaleBarPluginGuiBase</name>
    <message>
        <source>Scale Bar Plugin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Click to select the colour</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Size of bar:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Automatically snap to round number on resize</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Colour of bar:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Top Left</source>
        <translation type="unfinished">Bal felső</translation>
    </message>
    <message>
        <source>Top Right</source>
        <translation type="unfinished">Jobb felső</translation>
    </message>
    <message>
        <source>Bottom Left</source>
        <translation type="unfinished">Bal alsó</translation>
    </message>
    <message>
        <source>Bottom Right</source>
        <translation type="unfinished">Jobb alsó</translation>
    </message>
    <message>
        <source>Enable scale bar</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scale bar style:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select the style of the scale bar</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Tick Down</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Tick Up</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Box</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bar</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Placement:</source>
        <translation type="unfinished">Elhelyezés:</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;/head&gt;&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;This plugin draws a scale bar on the map. Please note the size option below is a &apos;preferred&apos; size and may have to be altered by QGIS depending on the level of zoom.  The size is measured according to the map units specified in the project properties.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsSearchQueryBuilder</name>
    <message>
        <source>Search query builder</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No matching features found.</source>
        <translation type="unfinished">Nem találtam megfelelő elemet.</translation>
    </message>
    <message>
        <source>Search results</source>
        <translation type="unfinished">Keresés eredmények</translation>
    </message>
    <message>
        <source>Search string parsing error</source>
        <translation type="unfinished">Keresési minta hibás</translation>
    </message>
    <message>
        <source>No Records</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The query you specified results in zero records being returned.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsServerSourceSelect</name>
    <message>
        <source>Are you sure you want to remove the </source>
        <translation type="unfinished">Biztos, hogy törlöd</translation>
    </message>
    <message>
        <source> connection and all associated settings?</source>
        <translation type="unfinished">Kapcsolat és minden hozzátartozó beállítást?</translation>
    </message>
    <message>
        <source>Confirm Delete</source>
        <translation type="unfinished">Törlés megerősítése</translation>
    </message>
    <message>
        <source>WMS Provider</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Could not open the WMS Provider</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select Layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>You must select at least one layer first.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Coordinate Reference System</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>There are no available coordinate reference system for the set of layers you&apos;ve selected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Could not understand the response.  The</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>provider said</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>WMS proxies</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;p&gt;Several WMS servers have been added to the server list. Note that the proxy fields have been left blank and if you access the internet via a web proxy, you will need to individually set the proxy fields with appropriate values.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsServerSourceSelectBase</name>
    <message>
        <source>Add Layer(s) from a Server</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Server Connections</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Adds a few example WMS servers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add default servers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>C&amp;onnect</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit</source>
        <translation type="unfinished">Szerkeszt</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Coordinate Reference System</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Change ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ready</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Layers</source>
        <translation type="unfinished">Rétegek</translation>
    </message>
    <message>
        <source>ID</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished">Név</translation>
    </message>
    <message>
        <source>Title</source>
        <translation type="unfinished">Cím</translation>
    </message>
    <message>
        <source>Abstract</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Image encoding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Help</source>
        <translation type="unfinished">Súgó</translation>
    </message>
    <message>
        <source>F1</source>
        <translation type="unfinished">F1</translation>
    </message>
    <message>
        <source>C&amp;lose</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsShapeFile</name>
    <message>
        <source>The database gave an error while executing this SQL:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The error was:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>... (rest of SQL trimmed)</source>
        <comment>is appended to a truncated SQL statement</comment>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsSingleSymbolDialog</name>
    <message>
        <source>Solid Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dash Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dot Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dash Dot Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dash Dot Dot Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No Pen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Solid Pattern</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hor Pattern</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ver Pattern</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cross Pattern</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>BDiag Pattern</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>FDiag Pattern</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Diag Cross Pattern</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dense1 Pattern</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dense2 Pattern</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dense3 Pattern</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dense4 Pattern</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dense5 Pattern</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dense6 Pattern</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dense7 Pattern</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No Brush</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Texture Pattern</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsSingleSymbolDialogBase</name>
    <message>
        <source>Single Symbol</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Point Symbol</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Size</source>
        <translation type="unfinished">Méret</translation>
    </message>
    <message>
        <source>Area scale field</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rotation field</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Style Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Outline style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Outline color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Outline width</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fill color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fill style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Label</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsSnappingDialog</name>
    <message>
        <source>to vertex</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>to segment</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>to vertex and segment</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsSnappingDialogBase</name>
    <message>
        <source>Snapping options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Layer</source>
        <translation type="unfinished">Réteg</translation>
    </message>
    <message>
        <source>Mode</source>
        <translation type="unfinished">Mód</translation>
    </message>
    <message>
        <source>Tolerance</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsSpit</name>
    <message>
        <source>File Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Feature Class</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Features</source>
        <translation type="unfinished">Elem</translation>
    </message>
    <message>
        <source>DB Relation Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Schema</source>
        <translation type="unfinished">Séma</translation>
    </message>
    <message>
        <source>New Connection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Are you sure you want to remove the [</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>] connection and all associated settings?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Confirm Delete</source>
        <translation type="unfinished">Törlés megerősítése</translation>
    </message>
    <message>
        <source>Add Shapefiles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shapefiles (*.shp);;All files (*.*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> - Edit Column Names</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The following Shapefile(s) could not be loaded:

</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>REASON: File cannot be opened</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>REASON: One or both of the Shapefile files (*.dbf, *.shx) missing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>General Interface Help:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PostgreSQL Connections:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>[New ...] - create a new connection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>[Edit ...] - edit the currently selected connection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>[Remove] - remove the currently selected connection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>-you need to select a connection that works (connects properly) in order to import files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>-when changing connections Global Schema also changes accordingly</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shapefile List:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>[Add ...] - open a File dialog and browse to the desired file(s) to import</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>[Remove] - remove the currently selected file(s) from the list</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>[Remove All] - remove all the files in the list</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>[SRID] - Reference ID for the shapefiles to be imported</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>[Use Default (SRID)] - set SRID to -1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>[Geometry Column Name] - name of the geometry column in the database</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>[Use Default (Geometry Column Name)] - set column name to &apos;the_geom&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>[Glogal Schema] - set the schema for all files to be imported into</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>[Import] - import the current shapefiles in the list</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>[Quit] - quit the program
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>[Help] - display this help dialog</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import Shapefiles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>You need to specify a Connection first</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Connection failed - Check settings and try again</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PostGIS not available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;p&gt;The chosen database does not have PostGIS installed, but this is required for storage of spatial data.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>You need to add shapefiles to the list first</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Importing files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">Mégsem</translation>
    </message>
    <message>
        <source>Progress</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Problem inserting features from file:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Invalid table name.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No fields detected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Checking to see if </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The following fields are duplicates:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;p&gt;Error while executing the SQL:&lt;/p&gt;&lt;p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;/p&gt;&lt;p&gt;The database said:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import Shapefiles - Relation Exists</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The Shapefile:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>will use [</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>] relation for its data,</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>which already exists and possibly contains data.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>To avoid data loss change the &quot;DB Relation Name&quot;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>for this Shapefile in the main dialog file list.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Do you want to overwrite the [</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>] relation?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use the table below to edit column names. Make sure that none of the columns are named using a PostgreSQL reserved word</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsSpitBase</name>
    <message>
        <source>SPIT - Shapefile to PostGIS Import Tool</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shapefile to PostGIS Import Tool</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shapefile List</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add a shapefile to the list of files to be imported</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add</source>
        <translation type="unfinished">Hozzáad</translation>
    </message>
    <message>
        <source>Remove the selected shapefile from the import list</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Remove</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Remove all the shapefiles from the import list</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Remove All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>SRID</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set the SRID to the default value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use Default SRID</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set the geometry column name to the default value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use Default Geometry Column Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Geometry Column Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Global Schema</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PostgreSQL Connections</source>
        <translation type="unfinished">PostgraSQL kapcsolat</translation>
    </message>
    <message>
        <source>Create a new PostGIS connection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Remove the current PostGIS connection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Connect</source>
        <translation type="unfinished">Kapcsolódás</translation>
    </message>
    <message>
        <source>Edit the current PostGIS connection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit</source>
        <translation type="unfinished">Szerkeszt</translation>
    </message>
</context>
<context>
    <name>QgsSpitPlugin</name>
    <message>
        <source>&amp;Import Shapefiles to PostgreSQL</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import shapefiles into a PostGIS-enabled PostgreSQL database. The schema and field names can be customized on import</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Spit</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsUniqueValueDialogBase</name>
    <message>
        <source>Form1</source>
        <translation type="unfinished">Form1</translation>
    </message>
    <message>
        <source>Classification Field:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete class</source>
        <translation type="unfinished">Osztály törlés</translation>
    </message>
    <message>
        <source>Classify</source>
        <translation type="unfinished">Osztályoz</translation>
    </message>
</context>
<context>
    <name>QgsVectorLayer</name>
    <message>
        <source>Could not commit the added features.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No other types of changes will be committed at this time.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Could not commit the changed attributes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>However, the added features were committed OK.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Could not commit the changed geometries.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>However, the changed attributes were committed OK.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Could not commit the deleted features.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>However, the changed geometries were committed OK.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsVectorLayerProperties</name>
    <message>
        <source>Transparency: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Single Symbol</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Graduated Symbol</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Continuous Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unique Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This button opens the PostgreSQL query builder and allows you to create a subset of features to display on the map canvas rather than displaying all features in the layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The query used to limit the features in the layer is shown here. This is currently only supported for PostgreSQL layers. To enter or modify the query, click on the Query Builder button</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Spatial Index</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Creation of spatial index successfull</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Creation of spatial index failed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>General:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Layer comment: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Storage type of this layer : </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Source for this layer : </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Geometry type of the features in this layer : </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The number of features in this layer : </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Editing capabilities of this layer : </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Extents:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>In layer spatial reference system units : </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>xMin,yMin </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> : xMax,yMax </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Layer Spatial Reference System:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>In project spatial reference system units : </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Attribute field info:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Field</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="unfinished">Típus</translation>
    </message>
    <message>
        <source>Length</source>
        <translation type="unfinished">Hossz</translation>
    </message>
    <message>
        <source>Precision</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Comment</source>
        <translation type="unfinished">Megjegyzés</translation>
    </message>
    <message>
        <source>Default Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>QGIS Layer Style File (*.qml)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>QGIS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unknown style format: </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsVectorLayerPropertiesBase</name>
    <message>
        <source>Layer Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Symbology</source>
        <translation type="unfinished">Megjelenés</translation>
    </message>
    <message>
        <source>Transparency:</source>
        <translation type="unfinished">Átlátszóság:</translation>
    </message>
    <message>
        <source>Legend type:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>General</source>
        <translation type="unfinished">Általános</translation>
    </message>
    <message>
        <source>Display name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Display field for the Identify Results dialog box</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This sets the display field for the Identify Results dialog box</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Display field</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use this control to set which field is placed at the top level of the Identify Results dialog box.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use scale dependent rendering</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Maximum 1:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Minimum 1:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Minimum scale at which this layer will be displayed. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Maximum scale at which this layer will be displayed. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Spatial Index</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create Spatial Index</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Spatial Reference System</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Change</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Subset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Query Builder</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Metadata</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Labels</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Display labels</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Actions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Restore Default Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save As Default</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Load Style ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save Style ...</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsVectorSymbologyWidgetBase</name>
    <message>
        <source>Form2</source>
        <translation type="unfinished">Form2</translation>
    </message>
    <message>
        <source>Label</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Min</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Max</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Symbol Classes:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Count:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mode:</source>
        <translation type="unfinished">Mód:</translation>
    </message>
    <message>
        <source>Field:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsWFSPlugin</name>
    <message>
        <source>&amp;Add WFS layer</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsWFSProvider</name>
    <message>
        <source>unknown</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>received %1 bytes from %2</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsWFSSourceSelect</name>
    <message>
        <source>Are you sure you want to remove the </source>
        <translation type="unfinished">Biztos, hogy törlöd</translation>
    </message>
    <message>
        <source> connection and all associated settings?</source>
        <translation type="unfinished">Kapcsolat és minden hozzátartozó beállítást?</translation>
    </message>
    <message>
        <source>Confirm Delete</source>
        <translation type="unfinished">Törlés megerősítése</translation>
    </message>
</context>
<context>
    <name>QgsWFSSourceSelectBase</name>
    <message>
        <source>Add WFS Layer from a Server</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Title</source>
        <translation type="unfinished">Cím</translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished">Név</translation>
    </message>
    <message>
        <source>Abstract</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Coordinate Reference System</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Change ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Server Connections</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit</source>
        <translation type="unfinished">Szerkeszt</translation>
    </message>
    <message>
        <source>C&amp;onnect</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsWmsProvider</name>
    <message>
        <source>Tried URL: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>HTTP Exception</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>WMS Service Exception</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>DOM Exception</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Could not get WMS capabilities: %1 at line %2 column %3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This is probably due to an incorrect WMS Server URL.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Could not get WMS capabilities in the expected format (DTD): no %1 or %2 found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Could not get WMS Service Exception at %1: %2 at line %3 column %4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Request contains a Format not offered by the server.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Request contains a CRS not offered by the server for one or more of the Layers in the request.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Request contains a SRS not offered by the server for one or more of the Layers in the request.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>GetMap request is for a Layer not offered by the server, or GetFeatureInfo request is for a Layer not shown on the map.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Request is for a Layer in a Style not offered by the server.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>GetFeatureInfo request is applied to a Layer which is not declared queryable.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>GetFeatureInfo request contains invalid X or Y value.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Value of (optional) UpdateSequence parameter in GetCapabilities request is equal to current value of service metadata update sequence number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Value of (optional) UpdateSequence parameter in GetCapabilities request is greater than current value of service metadata update sequence number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Request does not include a sample dimension value, and the server did not declare a default value for that dimension.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Request contains an invalid sample dimension value.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Request is for an optional operation that is not supported by the server.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>(Unknown error code from a post-1.3 WMS server)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The WMS vendor also reported: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This is probably due to a bug in the QGIS program.  Please report this error.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Server Properties:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Property</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Value</source>
        <translation type="unfinished">Érték</translation>
    </message>
    <message>
        <source>WMS Version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Title</source>
        <translation type="unfinished">Cím</translation>
    </message>
    <message>
        <source>Abstract</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Keywords</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Online Resource</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Contact Person</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fees</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Access Constraints</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Image Formats</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Identify Formats</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Layer Count</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Layer Properties: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Selected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Yes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Visibility</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Visible</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Hidden</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>n/a</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Can Identify</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Can be Transparent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Can Zoom In</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cascade Count</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fixed Width</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fixed Height</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>WGS 84 Bounding Box</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Available in CRS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Available in style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished">Név</translation>
    </message>
    <message>
        <source>Layer cannot be queried.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QuickPrintGui</name>
    <message>
        <source>Portable Document Format (*.pdf)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>quickprint</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unknown format: </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QuickPrintGuiBase</name>
    <message>
        <source>QGIS Quick Print Plugin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Quick Print</source>
        <translation type="unfinished">Gyors nyomtatás</translation>
    </message>
    <message>
        <source>Map Title e.g. ACME inc.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Map Name e.g. Water Features</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copyright</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Output</source>
        <translation type="unfinished">Eredmény</translation>
    </message>
    <message>
        <source>Use last filename but incremented.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>last used filename but incremented will be shown here</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Prompt for file name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Note: If you want more control over the map layout please use the map composer function in QGIS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Page Size</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QuickPrintPlugin</name>
    <message>
        <source>Quick Print</source>
        <translation type="unfinished">Gyors nyomtatás</translation>
    </message>
    <message>
        <source>Replace this with a short description of the what the plugin does</source>
        <translation type="unfinished">Cseréld le ezt a modul rövid leírásával</translation>
    </message>
    <message>
        <source>&amp;Quick Print</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>RepositoryDetailsDialog</name>
    <message>
        <source>Repository details</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name:</source>
        <translation type="unfinished">Név:</translation>
    </message>
    <message>
        <source>URL:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>http://</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>[pluginname]GuiBase</name>
    <message>
        <source>QGIS Plugin Template</source>
        <translation>QGIS modul sablon</translation>
    </message>
    <message>
        <source>Plugin Template</source>
        <translation>Modul sablon</translation>
    </message>
</context>
<context>
    <name>pluginname</name>
    <message>
        <source>[menuitemname]</source>
        <translation>[menuitemname]</translation>
    </message>
    <message>
        <source>Replace this with a short description of the what the plugin does</source>
        <translation>Cseréld le ezt a modul rövid leírásával</translation>
    </message>
    <message>
        <source>&amp;[menuname]</source>
        <translation>&amp;[nemuname]</translation>
    </message>
</context>
</TS>
