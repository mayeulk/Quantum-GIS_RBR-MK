<!DOCTYPE TS><TS>
<defaultcodec></defaultcodec>
<context>
    <name>Dialog</name>
    <message>
        <source>QGIS Plugin Installer</source>
        <translation>Instalator wtyczek QGIS</translation>
    </message>
    <message>
        <source>Name of plugin to install</source>
        <translation>Nazwa instalowanej wtyczki</translation>
    </message>
    <message>
        <source>Get List</source>
        <translation>Pobierz listę</translation>
    </message>
    <message>
        <source>Done</source>
        <translation>Zamknij</translation>
    </message>
    <message>
        <source>Install Plugin</source>
        <translation>Instaluj wtyczkę</translation>
    </message>
    <message>
        <source>The plugin will be installed to ~/.qgis/python/plugins</source>
        <translation>Wtyczka zostanie zainstalowana w katalogu ~/.qgis/python/plugins</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nazwa</translation>
    </message>
    <message>
        <source>Version</source>
        <translation>Wersja</translation>
    </message>
    <message>
        <source>Description</source>
        <translation>Opis</translation>
    </message>
    <message>
        <source>Author</source>
        <translation>Autor</translation>
    </message>
    <message>
        <source>Select repository, retrieve the list of available plugins, select one and install it</source>
        <translation>Wybierz repozytorium, pobierz listę dostępnych wtyczek, a następnie znajdź i zainstaluj nową wtyczkę</translation>
    </message>
    <message>
        <source>Repository</source>
        <translation>Repozytorium</translation>
    </message>
    <message>
        <source>Active repository:</source>
        <translation>Aktywne repozytorium:</translation>
    </message>
    <message>
        <source>Add</source>
        <translation>Dodaj</translation>
    </message>
    <message>
        <source>Edit</source>
        <translation>Edytuj</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Usuń</translation>
    </message>
</context>
<context>
    <name>Gui</name>
    <message>
        <source>Welcome to your automatically generated plugin!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This is just a starting point. You now need to modify the code to make it do something useful....read on for a more information to get yourself started.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Documentation:</source>
        <translation type="unfinished">Dokumentacja:</translation>
    </message>
    <message>
        <source>You really need to read the QGIS API Documentation now at:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>In particular look at the following classes:</source>
        <translation type="unfinished"></translation>
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
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>QGIS is distributed under the Gnu Public License. If you create a useful plugin please consider contributing it back to the community.</source>
        <translation>QGIS jest rozpowszechniany na zasadach Powszechnej Licencji Publicznej GNU. Jeżeli stworzysz użyteczną wtyczkę, rozważ proszę jej udostępnienie społeczności użytkowników QGIS.</translation>
    </message>
    <message>
        <source>Have fun and thank you for choosing QGIS.</source>
        <translation>Dziękujemy za wybranie QGIS i życzymy miłej pracy.</translation>
    </message>
</context>
<context>
    <name>MapCoordsDialogBase</name>
    <message>
        <source>Enter map coordinates</source>
        <translation>Wpisz współrzędne mapy</translation>
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
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Anuluj</translation>
    </message>
    <message>
        <source>Enter X and Y coordinates which correspond with the selected point on the image. Alternatively, click the button with icon of a pencil and then click a corresponding point on map canvas of QGIS to fill in coordinates of that point.</source>
        <translation>Wpisz współrzędne XY, odpowiadające wskazanemu punktowi na obrazie. Ewentualnie możesz kliknąć na przycisku z ikoną ołówka, a następnie na odpowiadającym punkcie na kompozycji mapy w oknie QGIS aby pobrać współrzędne tego punktu.</translation>
    </message>
    <message>
        <source> from map canvas</source>
        <translation> pobierz z okna mapy</translation>
    </message>
</context>
<context>
    <name>QFileDialog</name>
    <message>
        <source>Save experiment report to portable document format (.pdf)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Load layer properties from style file (.qml)</source>
        <translation>Wczytaj właściwości warstwy z pliku stylu (.qml)</translation>
    </message>
    <message>
        <source>Save layer properties as style file (.qml)</source>
        <translation>Zapisz właściwości warstwy do pliku stylu (.qml)</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <source>QGis files (*.qgs)</source>
        <translation>Pliki QGIS (*.qgs)</translation>
    </message>
    <message>
        <source>No Data Provider Plugins</source>
        <comment>No QGIS data provider plugins found in:</comment>
        <translation>Brak wtyczek źródeł danych</translation>
    </message>
    <message>
        <source>No vector layers can be loaded. Check your QGIS installation</source>
        <translation>Warstwy wektorowe nie mogą zostać wczytane. Spawdź swoją instalację QGIS</translation>
    </message>
    <message>
        <source>No Data Providers</source>
        <translation>Brak źródeł danych</translation>
    </message>
    <message>
        <source>No data provider plugins are available. No vector layers can be loaded</source>
        <translation>Nie są dostępne żadne wtyczki źródeł danych. Nie można wczytać wartstw wektorowych</translation>
    </message>
    <message>
        <source> at line </source>
        <translation>przy linii</translation>
    </message>
    <message>
        <source> column </source>
        <translation>kolumna</translation>
    </message>
    <message>
        <source> for file </source>
        <translation type="unfinished">dla pliku</translation>
    </message>
    <message>
        <source>Unable to save to file </source>
        <translation>Nie mogę zapisać pliku</translation>
    </message>
    <message>
        <source>Referenced column wasn&apos;t found: </source>
        <translation>Kolumna referencyjna nie została odnaleziona: </translation>
    </message>
    <message>
        <source>Division by zero.</source>
        <translation>Dzielenie przez zero.</translation>
    </message>
    <message>
        <source>No active layer</source>
        <translation>Brak aktywnej warstwy</translation>
    </message>
    <message>
        <source>Band</source>
        <translation>Kanał</translation>
    </message>
    <message>
        <source>action</source>
        <translation>akcja</translation>
    </message>
    <message>
        <source> features found</source>
        <translation>znalezione obiekty</translation>
    </message>
    <message>
        <source> 1 feature found</source>
        <translation>1 znaleziony obiekt</translation>
    </message>
    <message>
        <source>No features found</source>
        <translation>Nie znaleziono obiektów</translation>
    </message>
    <message>
        <source>No features were found in the active layer at the point you clicked</source>
        <translation>Nie znaleziono żadnych obiektów na aktywnej warstwie w miejscu kliknięcia</translation>
    </message>
    <message>
        <source>Could not identify objects on</source>
        <translation>Nie mogę zidentyfikować obiektu</translation>
    </message>
    <message>
        <source>because</source>
        <translation> ponieważ</translation>
    </message>
    <message>
        <source>New centroid</source>
        <translation>Nowy centroid</translation>
    </message>
    <message>
        <source>New point</source>
        <translation>Nowy punkt</translation>
    </message>
    <message>
        <source>New vertex</source>
        <translation>Nowy wierzchołek</translation>
    </message>
    <message>
        <source>Undo last point</source>
        <translation>Cofnij ostatni punkt</translation>
    </message>
    <message>
        <source>Close line</source>
        <translation>Zakończ linię</translation>
    </message>
    <message>
        <source>Select vertex</source>
        <translation>Wybierz wierzchołek</translation>
    </message>
    <message>
        <source>Select new position</source>
        <translation>Wybierz nową pozycję</translation>
    </message>
    <message>
        <source>Select line segment</source>
        <translation>Wybierz segment linii</translation>
    </message>
    <message>
        <source>New vertex position</source>
        <translation>Nowa pozycja wierzchołka</translation>
    </message>
    <message>
        <source>Release</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete vertex</source>
        <translation>Usuń wierzchołek</translation>
    </message>
    <message>
        <source>Release vertex</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select element</source>
        <translation>Zaznacz element</translation>
    </message>
    <message>
        <source>New location</source>
        <translation>Nowa lokalizacja</translation>
    </message>
    <message>
        <source>Release selected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete selected / select next</source>
        <translation>Usuń zaznaczone / zaznacz następne</translation>
    </message>
    <message>
        <source>Select position on line</source>
        <translation>Zaznacz pozycję na linii</translation>
    </message>
    <message>
        <source>Split the line</source>
        <translation>Podziel linię</translation>
    </message>
    <message>
        <source>Release the line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select point on line</source>
        <translation>Zaznacz punkt na linii</translation>
    </message>
    <message>
        <source>Label</source>
        <translation>Etykieta</translation>
    </message>
    <message>
        <source>Length</source>
        <translation>Długość</translation>
    </message>
    <message>
        <source>Area</source>
        <translation>Powierzchnia</translation>
    </message>
    <message>
        <source>Project file read error: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Fit to a linear transform requires at least 2 points.</source>
        <translation type="unfinished">Transformacja liniowa wymaga wskazania minimum 2 punktów.</translation>
    </message>
    <message>
        <source>Fit to a Helmert transform requires at least 2 points.</source>
        <translation type="unfinished">Transformacja Helmerta wymaga wskazania minimum 2 punktów.</translation>
    </message>
    <message>
        <source>Fit to an affine transform requires at least 4 points.</source>
        <translation type="unfinished">Transformacja afiniczna wymaga wskazania minimum 4 punktów.</translation>
    </message>
    <message>
        <source>Couldn&apos;t open the data source: </source>
        <translation>Nie można otworzyć źródła danych: </translation>
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
        <source>Caught a coordinate system exception while trying to transform a point. Unable to calculate line length.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Caught a coordinate system exception while trying to transform a point. Unable to calculate polygon area.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>GRASS plugin</source>
        <translation>Wtyczka GRASS</translation>
    </message>
    <message>
        <source>QGIS couldn&apos;t find your GRASS installation.
Would you like to specify path (GISBASE) to your GRASS installation?</source>
        <translation>QGIS nie może znaleźć instalacji GRASS.
Czy chcesz wskazać ścieżkę (GISBASE) do Twojej instalacji GRASS?</translation>
    </message>
    <message>
        <source>Choose GRASS installation path (GISBASE)</source>
        <translation>Wskaż ściężkę do instalacji GRASS (GISBASE)</translation>
    </message>
    <message>
        <source>GRASS data won&apos;t be available if GISBASE is not specified.</source>
        <translation>Dane GRASS nie będą dostępne, jeśli nie wskażesz GISBASE.</translation>
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
        <translation>Wersja 0.1</translation>
    </message>
    <message>
        <source>Version 0.2</source>
        <translation>Wersja 0.2</translation>
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
        <source>Georeferencer</source>
        <translation>Georeferencer</translation>
    </message>
    <message>
        <source>Adding projection info to rasters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>GPS Tools</source>
        <translation>Narzędzia GPS</translation>
    </message>
    <message>
        <source>Tools for loading and importing GPS data</source>
        <translation>Narzędzia do importu i eksportu danych GPS</translation>
    </message>
    <message>
        <source>GRASS</source>
        <translation>GRASS</translation>
    </message>
    <message>
        <source>GRASS layer</source>
        <translation>Warstwa GRASS</translation>
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
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Displays a north arrow overlayed onto the map</source>
        <translation type="unfinished">Wyświetla strzałkę północy w oknie mapy</translation>
    </message>
    <message>
        <source>[menuitemname]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>[plugindescription]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>ScaleBar</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Draws a scale bar</source>
        <translation>Wyświetla podziałkę</translation>
    </message>
    <message>
        <source>SPIT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shapefile to PostgreSQL/PostGIS Import Tool</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>WFS plugin</source>
        <translation type="unfinished">Wtyczka WFS</translation>
    </message>
    <message>
        <source>Adds WFS layers to the QGIS canvas</source>
        <translation type="unfinished">Dodaje warstwy WFS do projektu QGIS</translation>
    </message>
    <message>
        <source>Not a vector layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The current layer is not a vector layer</source>
        <translation>Aktywna warstwa nie jest warstwą wektorową</translation>
    </message>
    <message>
        <source>Layer cannot be added to</source>
        <translation type="unfinished">Nie można dodać warstwy do</translation>
    </message>
    <message>
        <source>The data provider for this layer does not support the addition of features.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Layer not editable</source>
        <translation type="unfinished">Warstwa nie jest w trybie edycji</translation>
    </message>
    <message>
        <source>Cannot edit the vector layer. To make it editable, go to the file item of the layer, right click and check &apos;Allow Editing&apos;.</source>
        <translation type="unfinished">Nie można edytować warstwy wektorowej. Aby rozpocząć edycję, kliknij prawym przyciskiem myszy na jej nazwie w legendzie i wybierz &apos;Tryb edycji&apos;.</translation>
    </message>
    <message>
        <source>To select features, you must choose a vector layer by clicking on its name in the legend</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Python error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Couldn&apos;t load plugin </source>
        <translation>Nie można wczytać wtyczki</translation>
    </message>
    <message>
        <source> due an error when calling its classFactory() method</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> due an error when calling its initGui() method</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error while unloading plugin </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>2.5D shape type not supported</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Adding features to 2.5D shapetypes is not supported yet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Wrong editing tool</source>
        <translation type="unfinished">Nieprawidłowe narzędzie do edycji</translation>
    </message>
    <message>
        <source>Cannot apply the &apos;capture point&apos; tool on this vector layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Coordinate transform error</source>
        <translation>Błąd transformacji współrzędnych</translation>
    </message>
    <message>
        <source>Cannot transform the point to the layers coordinate system</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot apply the &apos;capture line&apos; tool on this vector layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot apply the &apos;capture polygon&apos; tool on this vector layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error</source>
        <translation>Błąd</translation>
    </message>
    <message>
        <source>Cannot add feature. Unknown WKB type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error, could not add island</source>
        <translation>Błąd, nie można dodać wyspy</translation>
    </message>
    <message>
        <source>A problem with geometry type occured</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The inserted Ring is not closed</source>
        <translation type="unfinished">Dodany pierścień jest niezamknięty</translation>
    </message>
    <message>
        <source>The inserted Ring is not a valid geometry</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The inserted Ring crosses existing rings</source>
        <translation type="unfinished">Dodany pierścień przecina istniejące pierścienie</translation>
    </message>
    <message>
        <source>The inserted Ring is not contained in a feature</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>An unknown error occured</source>
        <translation>Wystąpił nieznany błąd</translation>
    </message>
    <message>
        <source>Error, could not add ring</source>
        <translation>Błąd, nie można dodać pierścienia</translation>
    </message>
    <message>
        <source> km2</source>
        <translation>km2</translation>
    </message>
    <message>
        <source> ha</source>
        <translation> ha</translation>
    </message>
    <message>
        <source> m2</source>
        <translation>m2</translation>
    </message>
    <message>
        <source> m</source>
        <translation> m</translation>
    </message>
    <message>
        <source> km</source>
        <translation> km</translation>
    </message>
    <message>
        <source> mm</source>
        <translation> mm</translation>
    </message>
    <message>
        <source> cm</source>
        <translation> cm</translation>
    </message>
    <message>
        <source> sq mile</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> sq ft</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> mile</source>
        <translation type="unfinished">mila</translation>
    </message>
    <message>
        <source> foot</source>
        <translation> stopa</translation>
    </message>
    <message>
        <source> feet</source>
        <translation type="unfinished">stopa</translation>
    </message>
    <message>
        <source> sq.deg.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> degree</source>
        <translation>stopień</translation>
    </message>
    <message>
        <source> degrees</source>
        <translation type="unfinished">stopnie</translation>
    </message>
    <message>
        <source> unknown</source>
        <translation type="unfinished">nieznany</translation>
    </message>
    <message>
        <source>Received %1 of %2 bytes</source>
        <translation>Odebrano %1 z %2 bajtów</translation>
    </message>
    <message>
        <source>Received %1 bytes (total unknown)</source>
        <translation>Odebrano %1 bajtów (całkowity rozmiar nieznany)</translation>
    </message>
    <message>
        <source>Not connected</source>
        <translation>Nie podłączony</translation>
    </message>
    <message>
        <source>Looking up &apos;%1&apos;</source>
        <translation>Wyszukiwanie &apos;%1&apos;</translation>
    </message>
    <message>
        <source>Connecting to &apos;%1&apos;</source>
        <translation>Podłączanie do &apos;%1&apos;</translation>
    </message>
    <message>
        <source>Sending request &apos;%1&apos;</source>
        <translation>Wysyłanie żądania &apos;%1&apos;</translation>
    </message>
    <message>
        <source>Receiving reply</source>
        <translation>Otrzymywanie odpowiedzi</translation>
    </message>
    <message>
        <source>Response is complete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Closing down connection</source>
        <translation>Zamykanie połączenia</translation>
    </message>
    <message>
        <source>Unable to open </source>
        <translation>Nie można otworzyć</translation>
    </message>
    <message>
        <source>Regular expressions on numeric values don&apos;t make sense. Use comparison instead.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Geoprocessing functions for working with PostgreSQL/PostGIS layers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Location: </source>
        <comment>Metadata in GRASS Browser</comment>
        <translation>Lokalizacja: </translation>
    </message>
    <message>
        <source>&lt;br&gt;Mapset: </source>
        <comment>Metadata in GRASS Browser</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Location: </source>
        <translation>Lokalizacja: </translation>
    </message>
    <message>
        <source>&lt;br&gt;Mapset: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Raster&lt;/b&gt;</source>
        <translation>&lt;b&gt;Raster&lt;/b&gt;</translation>
    </message>
    <message>
        <source>Cannot open raster header</source>
        <translation>Nie można otworzyć nagłówka pliku rastrowego</translation>
    </message>
    <message>
        <source>Rows</source>
        <translation>Wiersze</translation>
    </message>
    <message>
        <source>Columns</source>
        <translation type="unfinished">Kolumny</translation>
    </message>
    <message>
        <source>N-S resolution</source>
        <translation>Rozdzielczość N-S</translation>
    </message>
    <message>
        <source>E-W resolution</source>
        <translation>Rozdzielczość E-W</translation>
    </message>
    <message>
        <source>North</source>
        <translation>Północ</translation>
    </message>
    <message>
        <source>South</source>
        <translation>Południe</translation>
    </message>
    <message>
        <source>East</source>
        <translation>Wschód</translation>
    </message>
    <message>
        <source>West</source>
        <translation>Zachód</translation>
    </message>
    <message>
        <source>Format</source>
        <translation>Format</translation>
    </message>
    <message>
        <source>Minimum value</source>
        <translation>Wartość minimalna</translation>
    </message>
    <message>
        <source>Maximum value</source>
        <translation>Wartość maksymalna</translation>
    </message>
    <message>
        <source>Data source</source>
        <translation>Źródło danych</translation>
    </message>
    <message>
        <source>Data description</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Comments</source>
        <translation>Komentarze</translation>
    </message>
    <message>
        <source>Categories</source>
        <translation>Kategorie</translation>
    </message>
    <message>
        <source>&lt;b&gt;Vector&lt;/b&gt;</source>
        <translation>&lt;b&gt;Wektor&lt;/b&gt;</translation>
    </message>
    <message>
        <source>Points</source>
        <translation type="unfinished">Punkty</translation>
    </message>
    <message>
        <source>Lines</source>
        <translation type="unfinished">Linie</translation>
    </message>
    <message>
        <source>Boundaries</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Centroids</source>
        <translation type="unfinished"></translation>
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
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Islands</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Top</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bottom</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>yes</source>
        <translation>tak</translation>
    </message>
    <message>
        <source>no</source>
        <translation>nie</translation>
    </message>
    <message>
        <source>History&lt;br&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;b&gt;Layer&lt;/b&gt;</source>
        <translation>&lt;b&gt;Warstwa&lt;/b&gt;</translation>
    </message>
    <message>
        <source>Features</source>
        <translation type="unfinished">Obiekty</translation>
    </message>
    <message>
        <source>Driver</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Database</source>
        <translation>Baza danych</translation>
    </message>
    <message>
        <source>Table</source>
        <translation>Tabela</translation>
    </message>
    <message>
        <source>Key column</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>GISBASE is not set.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> is not a GRASS mapset.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot start </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mapset is already in use.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Temporary directory </source>
        <translation>Katalog tymczasowy</translation>
    </message>
    <message>
        <source> exist but is not writable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot create temporary directory </source>
        <translation>Nie można utworzyć katalogu tymczasowego</translation>
    </message>
    <message>
        <source>Cannot create </source>
        <translation>Nie można utworzyć</translation>
    </message>
    <message>
        <source>Cannot remove mapset lock: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Ostrzeżenie</translation>
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
    <message>
        <source>Where is &apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>original location: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>To identify features, you must choose an active layer by clicking on its name in the legend</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PostgreSQL Geoprocessing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Quick Print</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Quick Print is a plugin to quickly print a map with minimal effort.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Could not remove polygon intersection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Currently only filebased datasets are supported</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Loaded default style file from </source>
        <translation type="unfinished"></translation>
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
        <source>File could not been opened.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Couldn&apos;t load SIP module.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Python support will be disabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Couldn&apos;t load PyQt4.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Couldn&apos;t load PyQGIS.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>An error occured during execution of following code:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error details:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Type:</source>
        <translation type="unfinished">Typ:</translation>
    </message>
    <message>
        <source>Value:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> is not writeable.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Please adjust permissions (if possible) and try again.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Uncatched fatal GRASS error</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgisApp</name>
    <message>
        <source>Quantum GIS - </source>
        <translation>Quantum GIS - </translation>
    </message>
    <message>
        <source>Map legend that displays all the layers currently on the map canvas. Click on the check box to turn a layer on or off. Double click on a layer in the legend to customize its appearance and set other properties.</source>
        <translation>Legenda mapy zawiera wszystkie aktualnie wyświetlane warstwy mapy. Zaznacz pole wyboru przy nazwie, aby włączyć lub wyłączyć warstwę. Podwójne kliknięcie otwiera okno do edycji parametrów wyświetlania i innych właściwości warstwy.</translation>
    </message>
    <message>
        <source>Map overview canvas. This canvas can be used to display a locator map that shows the current extent of the map canvas. The current extent is shown as a red rectangle. Any layer on the map can be added to the overview canvas.</source>
        <translation>Okno podglądu mapy. W oknie tym wyświetlana jest lokalizacja i zasięg aktualnie prezentowanego fragmentu mapy. Bieżący zasięg zaznaczony jest czerwonym prostokątem. Do okna podglądu można dodać każdą warstę z mapy.</translation>
    </message>
    <message>
        <source>Map canvas. This is where raster and vector layers are displayed when added to the map</source>
        <translation type="obsolete">Okno mapy. Tutaj wyświetlane są warstwy rastrowe i wektorowe, które zostały dodane do mapy</translation>
    </message>
    <message>
        <source>Progress bar that displays the status of rendering layers and other time-intensive operations</source>
        <translation type="obsolete">Pasek postępu informuje o postępie rysowania warstw oraz innych czasochłonnych operacji</translation>
    </message>
    <message>
        <source>Displays the current map scale</source>
        <translation>Wyświetla bieżącą skalę mapy</translation>
    </message>
    <message>
        <source>Render</source>
        <translation>Renderuj</translation>
    </message>
    <message>
        <source>When checked, the map layers are rendered in response to map navigation commands and other events. When not checked, no rendering is done. This allows you to add a large number of layers and symbolize them before rendering.</source>
        <translation>Jeśli pole jest zaznaczone, to warstwy są odrysowywane na bieżąco w odpowiedzi na użycie narzędzi nawigacyjnych i inne zdarzenia. Umożliwia to dodanie wielu warstw i określenie dla nich symboli przed odrysowaniem.</translation>
    </message>
    <message>
        <source>Version </source>
        <translation type="obsolete">Wersja </translation>
    </message>
    <message>
        <source> with PostgreSQL support</source>
        <translation type="obsolete"> z obsługą PostgreSQL</translation>
    </message>
    <message>
        <source> (no PostgreSQL support)</source>
        <translation type="obsolete"> (bez obsługi PostgreSQL)</translation>
    </message>
    <message>
        <source>Quantum GIS is licensed under the GNU General Public License</source>
        <translation type="obsolete">Quantum GIS jest rozpowszechniany na zasadach określonych w Powszechnej Licencji Publicznej GNU</translation>
    </message>
    <message>
        <source>http://www.gnu.org/licenses</source>
        <translation type="obsolete">http://www.gnu.org/licenses</translation>
    </message>
    <message>
        <source>Version</source>
        <translation>Wersja</translation>
    </message>
    <message>
        <source>Available Data Provider Plugins</source>
        <translation type="obsolete">Dostępne wtyczki źródeł danych</translation>
    </message>
    <message>
        <source>is not a valid or recognized data source</source>
        <translation>nie jest poprawnym lub rozpoznawanym źródłem danych</translation>
    </message>
    <message>
        <source>Invalid Data Source</source>
        <translation>Niepoprawne źródło danych</translation>
    </message>
    <message>
        <source>Invalid Layer</source>
        <translation>Niepoprawna warstwa</translation>
    </message>
    <message>
        <source>%1 is an invalid layer and cannot be loaded.</source>
        <translation>%1 nie jest poprawną warstwą i nie może zostać wczytana.</translation>
    </message>
    <message>
        <source>Choose a QGIS project file</source>
        <translation>Podaj nazwę pliku projektu QGIS</translation>
    </message>
    <message>
        <source>Unable to save project</source>
        <translation>Nie można zapisać projektu</translation>
    </message>
    <message>
        <source>Unable to save project to </source>
        <translation>Nie można zapisać projektu w </translation>
    </message>
    <message>
        <source>Choose a filename to save the map image as</source>
        <translation>Podaj nazwę pliku do którego zapisać obraz mapy</translation>
    </message>
    <message>
        <source>Saved map image to</source>
        <translation>Obraz mapy zapisany do</translation>
    </message>
    <message>
        <source>No Layer Selected</source>
        <translation>Nie wybrano warstwy</translation>
    </message>
    <message>
        <source>Problem deleting features</source>
        <translation>Problem podczas usuwania obiektów</translation>
    </message>
    <message>
        <source>A problem occured during deletion of features</source>
        <translation>Wystąpił problem podczas usuwania obiektów</translation>
    </message>
    <message>
        <source>No Vector Layer Selected</source>
        <translation>Nie wybrano warstwy wektorowej</translation>
    </message>
    <message>
        <source>Deleting features only works on vector layers</source>
        <translation>Usuwanie obiektów jest możliwe tylko z warstw wektorowych</translation>
    </message>
    <message>
        <source>To delete features, you must select a vector layer in the legend</source>
        <translation>Aby usunąć obiekt, najpierw należy wybrać warstwę wektorową z legendy</translation>
    </message>
    <message>
        <source>Error Loading Plugin</source>
        <translation>Błąd podczas wczytywania wtyczki</translation>
    </message>
    <message>
        <source>There was an error loading %1.</source>
        <translation>Wystąpił błąd podczas wczytywania %1.</translation>
    </message>
    <message>
        <source>No MapLayer Plugins</source>
        <translation type="unfinished">Brak wtyczek MapLayers</translation>
    </message>
    <message>
        <source>No MapLayer plugins in ../plugins/maplayer</source>
        <translation type="unfinished">Nie znaleziono wtyczek MapLayer w ../plugins/maplayer</translation>
    </message>
    <message>
        <source>No Plugins</source>
        <translation>Brak wtyczek</translation>
    </message>
    <message>
        <source>No plugins found in ../plugins. To test plugins, start qgis from the src directory</source>
        <translation>Nie znaleziono wtyczek w ../plugins. Aby przetestować wtyczki, uruchom qgis z katalogu src</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nazwa</translation>
    </message>
    <message>
        <source>Plugin %1 is named %2</source>
        <translation type="unfinished">Wtyczka %1 jest nazwana %2</translation>
    </message>
    <message>
        <source>Plugin Information</source>
        <translation>Informacje o wtyczce</translation>
    </message>
    <message>
        <source>QGis loaded the following plugin:</source>
        <translation>QGIS wczytał następującą wtyczkę:</translation>
    </message>
    <message>
        <source>Name: %1</source>
        <translation>Nazwa: %1</translation>
    </message>
    <message>
        <source>Version: %1</source>
        <translation>Wersja: %1</translation>
    </message>
    <message>
        <source>Description: %1</source>
        <translation>Opis: %1</translation>
    </message>
    <message>
        <source>Unable to Load Plugin</source>
        <translation>Nie można wczytać wtyczki</translation>
    </message>
    <message>
        <source>QGIS was unable to load the plugin from: %1</source>
        <translation>QGIS nie może wczytać wtyczki z: %1</translation>
    </message>
    <message>
        <source>There is a new version of QGIS available</source>
        <translation>Dostępna jest nowa wersja QGIS</translation>
    </message>
    <message>
        <source>You are running a development version of QGIS</source>
        <translation type="unfinished">Pracujesz z wersją rozwojową QGIS</translation>
    </message>
    <message>
        <source>You are running the current version of QGIS</source>
        <translation type="unfinished">Pracujesz z aktualną wersją QGIS</translation>
    </message>
    <message>
        <source>Would you like more information?</source>
        <translation type="unfinished">Czy chcesz otrzymać więcej informacji?</translation>
    </message>
    <message>
        <source>QGIS Version Information</source>
        <translation>Informacje o wersji QGIS</translation>
    </message>
    <message>
        <source>Unable to get current version information from server</source>
        <translation>Nie można pobrać z serwera informacji o aktualnej wersji</translation>
    </message>
    <message>
        <source>Connection refused - server may be down</source>
        <translation>Połączenie odrzucone - serwer może być wyłączony</translation>
    </message>
    <message>
        <source>QGIS server was not found</source>
        <translation>Nie można odnaleźć serwera QGIS</translation>
    </message>
    <message>
        <source>Extents: </source>
        <translation>Zasięg: </translation>
    </message>
    <message>
        <source>&amp;Plugins</source>
        <translation>&amp;Wtyczki</translation>
    </message>
    <message>
        <source>Toggle map rendering</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This icon shows whether on the fly projection is enabled or not. Click the icon to bring up the project properties dialog to alter this behaviour.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Projection status - Click to open projection dialog</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open an OGR Supported Vector Layer</source>
        <translation type="unfinished">Otwórz warstwę wektorową OGR</translation>
    </message>
    <message>
        <source>Save As</source>
        <translation>Zapisz jako</translation>
    </message>
    <message>
        <source>Choose a QGIS project file to open</source>
        <translation>Wybierz plik projektu QGIS do otwarcia</translation>
    </message>
    <message>
        <source>QGIS Project Read Error</source>
        <translation>Błąd wczytywania projektu QGIS</translation>
    </message>
    <message>
        <source>Try to find missing layers?</source>
        <translation>Próbować znaleźć brakujące warstwy?</translation>
    </message>
    <message>
        <source>Open a GDAL Supported Raster Data Source</source>
        <translation type="unfinished">Otwórz rastrowe źródło danych GDAL</translation>
    </message>
    <message>
        <source>Reading settings</source>
        <translation>Czytam ustawienia</translation>
    </message>
    <message>
        <source>Setting up the GUI</source>
        <translation>Ustawienia GUI</translation>
    </message>
    <message>
        <source>Checking database</source>
        <translation>Sprawdzanie bazy danych</translation>
    </message>
    <message>
        <source>Restoring loaded plugins</source>
        <translation>Przywracanie wczytanych wtyczek</translation>
    </message>
    <message>
        <source>Initializing file filters</source>
        <translation>Inicjalizacja filtrów plików</translation>
    </message>
    <message>
        <source>Restoring window state</source>
        <translation>Przywracanie stanu okna</translation>
    </message>
    <message>
        <source>QGIS Ready!</source>
        <translation>QGIS gotowy!</translation>
    </message>
    <message>
        <source>&amp;New Project</source>
        <translation>&amp;Nowy projekt</translation>
    </message>
    <message>
        <source>Ctrl+N</source>
        <comment>New Project</comment>
        <translation>Ctrl+N</translation>
    </message>
    <message>
        <source>New Project</source>
        <translation>Nowy projekt</translation>
    </message>
    <message>
        <source>&amp;Open Project...</source>
        <translation>&amp;Otwórz projekt...</translation>
    </message>
    <message>
        <source>Ctrl+O</source>
        <comment>Open a Project</comment>
        <translation>Ctrl+O</translation>
    </message>
    <message>
        <source>Open a Project</source>
        <translation>Otwórz projekt</translation>
    </message>
    <message>
        <source>&amp;Save Project</source>
        <translation>&amp;Zapisz projekt</translation>
    </message>
    <message>
        <source>Ctrl+S</source>
        <comment>Save Project</comment>
        <translation>Ctrl+S</translation>
    </message>
    <message>
        <source>Save Project</source>
        <translation>Zapisz projekt</translation>
    </message>
    <message>
        <source>Save Project &amp;As...</source>
        <translation>Z&amp;apisz projekt jako...</translation>
    </message>
    <message>
        <source>Ctrl+A</source>
        <comment>Save Project under a new name</comment>
        <translation>Ctrl+A

Zapisz projekt pod nową nazwą</translation>
    </message>
    <message>
        <source>Save Project under a new name</source>
        <translation>Zapisz projekt pod nową nazwą</translation>
    </message>
    <message>
        <source>&amp;Print...</source>
        <translation>&amp;Drukuj...</translation>
    </message>
    <message>
        <source>Ctrl+P</source>
        <comment>Print</comment>
        <translation>Ctrl+P</translation>
    </message>
    <message>
        <source>Print</source>
        <translation>Drukuj</translation>
    </message>
    <message>
        <source>Save as Image...</source>
        <translation>Zapisz jako obraz...</translation>
    </message>
    <message>
        <source>Ctrl+I</source>
        <comment>Save map as image</comment>
        <translation>Ctrl+I</translation>
    </message>
    <message>
        <source>Save map as image</source>
        <translation>Zapisz mapę jako obraz</translation>
    </message>
    <message>
        <source>Exit</source>
        <translation>Zakończ</translation>
    </message>
    <message>
        <source>Ctrl+Q</source>
        <comment>Exit QGIS</comment>
        <translation>Ctrl+Q</translation>
    </message>
    <message>
        <source>Exit QGIS</source>
        <translation>Wyjdź z QGIS</translation>
    </message>
    <message>
        <source>Add a Vector Layer...</source>
        <translation>Dodaj warstwę wektorową...</translation>
    </message>
    <message>
        <source>V</source>
        <comment>Add a Vector Layer</comment>
        <translation>V</translation>
    </message>
    <message>
        <source>Add a Vector Layer</source>
        <translation>Dodaj warstwę wektorową</translation>
    </message>
    <message>
        <source>Add a Raster Layer...</source>
        <translation>Dodaj warstwę rastrową...</translation>
    </message>
    <message>
        <source>R</source>
        <comment>Add a Raster Layer</comment>
        <translation>R</translation>
    </message>
    <message>
        <source>Add a Raster Layer</source>
        <translation>Dodaj warstwę rastrową</translation>
    </message>
    <message>
        <source>Add a PostGIS Layer...</source>
        <translation>Dodaj warstwę PostGIS...</translation>
    </message>
    <message>
        <source>D</source>
        <comment>Add a PostGIS Layer</comment>
        <translation>D</translation>
    </message>
    <message>
        <source>Add a PostGIS Layer</source>
        <translation>Dodaj warstwę PostGIS</translation>
    </message>
    <message>
        <source>New Vector Layer...</source>
        <translation>Nowa warstwa wektorowa...</translation>
    </message>
    <message>
        <source>N</source>
        <comment>Create a New Vector Layer</comment>
        <translation>N</translation>
    </message>
    <message>
        <source>Create a New Vector Layer</source>
        <translation>Utwórz nową warstwę wektorową</translation>
    </message>
    <message>
        <source>Remove Layer</source>
        <translation>Usuń warstwę</translation>
    </message>
    <message>
        <source>Ctrl+D</source>
        <comment>Remove a Layer</comment>
        <translation>Ctrl+D</translation>
    </message>
    <message>
        <source>Remove a Layer</source>
        <translation>Usuń warstwę</translation>
    </message>
    <message>
        <source>Add All To Overview</source>
        <translation>Dodaj wszystkie do podglądu</translation>
    </message>
    <message>
        <source>+</source>
        <comment>Show all layers in the overview map</comment>
        <translation>+</translation>
    </message>
    <message>
        <source>Show all layers in the overview map</source>
        <translation>Pokaż wszystkie warstwy w podglądzie</translation>
    </message>
    <message>
        <source>Remove All From Overview</source>
        <translation>Usuń wszystkie z podglądu</translation>
    </message>
    <message>
        <source>-</source>
        <comment>Remove all layers from overview map</comment>
        <translation>-</translation>
    </message>
    <message>
        <source>Remove all layers from overview map</source>
        <translation>Usuń wszystkie warstwy z podglądu</translation>
    </message>
    <message>
        <source>Show All Layers</source>
        <translation>Pokaż wszystkie</translation>
    </message>
    <message>
        <source>S</source>
        <comment>Show all layers</comment>
        <translation>S</translation>
    </message>
    <message>
        <source>Show all layers</source>
        <translation>Pokaż wszystkie</translation>
    </message>
    <message>
        <source>Hide All Layers</source>
        <translation>Ukryj wszystkie</translation>
    </message>
    <message>
        <source>H</source>
        <comment>Hide all layers</comment>
        <translation>H</translation>
    </message>
    <message>
        <source>Hide all layers</source>
        <translation>Ukryj wszystkie</translation>
    </message>
    <message>
        <source>Project Properties...</source>
        <translation>Właściwości projektu...</translation>
    </message>
    <message>
        <source>P</source>
        <comment>Set project properties</comment>
        <translation>P</translation>
    </message>
    <message>
        <source>Set project properties</source>
        <translation>Ustaw właściwości projektu</translation>
    </message>
    <message>
        <source>Options...</source>
        <translation>Opcje...</translation>
    </message>
    <message>
        <source>Change various QGIS options</source>
        <translation>Zmień opcje QGIS</translation>
    </message>
    <message>
        <source>Custom Projection...</source>
        <translation>Własny układ współrzędnych...</translation>
    </message>
    <message>
        <source>Manage custom projections</source>
        <translation>Zarządzanie własnymi układami współrzędnych</translation>
    </message>
    <message>
        <source>Help Contents</source>
        <translation>Zawartość pliku pomocy</translation>
    </message>
    <message>
        <source>F1</source>
        <comment>Help Documentation</comment>
        <translation>F1</translation>
    </message>
    <message>
        <source>Help Documentation</source>
        <translation>Pomoc</translation>
    </message>
    <message>
        <source>Qgis Home Page</source>
        <translation>Strona domowa QGIS</translation>
    </message>
    <message>
        <source>Ctrl+H</source>
        <comment>QGIS Home Page</comment>
        <translation>Ctrl+H</translation>
    </message>
    <message>
        <source>QGIS Home Page</source>
        <translation>Strona domowa QGIS</translation>
    </message>
    <message>
        <source>About</source>
        <translation>O QGIS</translation>
    </message>
    <message>
        <source>About QGIS</source>
        <translation>O QGIS</translation>
    </message>
    <message>
        <source>Check Qgis Version</source>
        <translation>Sprawdź wersję Qgis</translation>
    </message>
    <message>
        <source>Check if your QGIS version is up to date (requires internet access)</source>
        <translation>Sprawdź aktualność Twojej wersji QGIS (wymagane połączenie internetowe)</translation>
    </message>
    <message>
        <source>Refresh</source>
        <translation>Odśwież</translation>
    </message>
    <message>
        <source>Ctrl+R</source>
        <comment>Refresh Map</comment>
        <translation>Ctrl+R</translation>
    </message>
    <message>
        <source>Refresh Map</source>
        <translation>Odśwież mapę</translation>
    </message>
    <message>
        <source>Zoom In</source>
        <translation>Powiększ</translation>
    </message>
    <message>
        <source>Ctrl++</source>
        <comment>Zoom In</comment>
        <translation>Ctrl++</translation>
    </message>
    <message>
        <source>Zoom Out</source>
        <translation>Pomniejsz</translation>
    </message>
    <message>
        <source>Ctrl+-</source>
        <comment>Zoom Out</comment>
        <translation>Ctrl+-</translation>
    </message>
    <message>
        <source>Zoom Full</source>
        <translation>Cały zasięg</translation>
    </message>
    <message>
        <source>F</source>
        <comment>Zoom to Full Extents</comment>
        <translation>F</translation>
    </message>
    <message>
        <source>Zoom to Full Extents</source>
        <translation>Powiększ do pełnego zasięgu</translation>
    </message>
    <message>
        <source>Zoom To Selection</source>
        <translation>Powiększ do zaznaczonych</translation>
    </message>
    <message>
        <source>Ctrl+F</source>
        <comment>Zoom to selection</comment>
        <translation>Ctrl+</translation>
    </message>
    <message>
        <source>Zoom to selection</source>
        <translation>Powiększ do zaznaczonych</translation>
    </message>
    <message>
        <source>Pan Map</source>
        <translation>Przesuwanie</translation>
    </message>
    <message>
        <source>Pan the map</source>
        <translation>Przesuwanie mapy</translation>
    </message>
    <message>
        <source>Zoom Last</source>
        <translation>Poprzedni widok</translation>
    </message>
    <message>
        <source>Zoom to Last Extent</source>
        <translation>Przejdź do ostatniego widoku</translation>
    </message>
    <message>
        <source>Zoom To Layer</source>
        <translation>Powiększ do zasięgu warstwy</translation>
    </message>
    <message>
        <source>Zoom to Layer</source>
        <translation>Powiększ do zasięgu warstwy</translation>
    </message>
    <message>
        <source>Identify Features</source>
        <translation>Informacje o obiekcie</translation>
    </message>
    <message>
        <source>I</source>
        <comment>Click on features to identify them</comment>
        <translation>I</translation>
    </message>
    <message>
        <source>Click on features to identify them</source>
        <translation>Kliknij na obiekcie by uzyskać o nim informacje</translation>
    </message>
    <message>
        <source>Select Features</source>
        <translation>Wybierz obiekty</translation>
    </message>
    <message>
        <source>Open Table</source>
        <translation>Otwórz tabelę</translation>
    </message>
    <message>
        <source>Measure Line </source>
        <translation>Pomiar odległości</translation>
    </message>
    <message>
        <source>Ctrl+M</source>
        <comment>Measure a Line</comment>
        <translation>Ctrl+M</translation>
    </message>
    <message>
        <source>Measure a Line</source>
        <translation>Pomiar odległości</translation>
    </message>
    <message>
        <source>Measure Area</source>
        <translation>Pomiar powierzchni</translation>
    </message>
    <message>
        <source>Ctrl+J</source>
        <comment>Measure an Area</comment>
        <translation>Ctrl+J</translation>
    </message>
    <message>
        <source>Measure an Area</source>
        <translation>Pomiar powierzchni</translation>
    </message>
    <message>
        <source>Show Bookmarks</source>
        <translation>Pokaż zakładki</translation>
    </message>
    <message>
        <source>B</source>
        <comment>Show Bookmarks</comment>
        <translation>B</translation>
    </message>
    <message>
        <source>New Bookmark...</source>
        <translation>Nowa zakładka...</translation>
    </message>
    <message>
        <source>Ctrl+B</source>
        <comment>New Bookmark</comment>
        <translation>Ctrl+B</translation>
    </message>
    <message>
        <source>New Bookmark</source>
        <translation>Nowa zakładka</translation>
    </message>
    <message>
        <source>Add WMS Layer...</source>
        <translation>Dodaj warstwę WMS...</translation>
    </message>
    <message>
        <source>W</source>
        <comment>Add Web Mapping Server Layer</comment>
        <translation>W</translation>
    </message>
    <message>
        <source>Add Web Mapping Server Layer</source>
        <translation>Dodaj warstwę Web Mapping Server</translation>
    </message>
    <message>
        <source>In Overview</source>
        <translation>Podgląd</translation>
    </message>
    <message>
        <source>O</source>
        <comment>Add current layer to overview map</comment>
        <translation>O</translation>
    </message>
    <message>
        <source>Add current layer to overview map</source>
        <translation>Dodaj aktualną warstwę do podglądu</translation>
    </message>
    <message>
        <source>Plugin Manager...</source>
        <translation>Menedżer wtyczek...</translation>
    </message>
    <message>
        <source>Open the plugin manager</source>
        <translation>Otwórz menedżer wtyczek</translation>
    </message>
    <message>
        <source>Capture Point</source>
        <translation>Dodaj punkt</translation>
    </message>
    <message>
        <source>.</source>
        <comment>Capture Points</comment>
        <translation>.</translation>
    </message>
    <message>
        <source>Capture Points</source>
        <translation>Dodaj punkt</translation>
    </message>
    <message>
        <source>Capture Line</source>
        <translation>Dodaj linię</translation>
    </message>
    <message>
        <source>/</source>
        <comment>Capture Lines</comment>
        <translation>/</translation>
    </message>
    <message>
        <source>Capture Lines</source>
        <translation>Dodaj linie</translation>
    </message>
    <message>
        <source>Capture Polygon</source>
        <translation>Dodaj poligon</translation>
    </message>
    <message>
        <source>Ctrl+/</source>
        <comment>Capture Polygons</comment>
        <translation>Ctrl+/</translation>
    </message>
    <message>
        <source>Capture Polygons</source>
        <translation>Dodaj poligony</translation>
    </message>
    <message>
        <source>Delete Selected</source>
        <translation>Usuń zaznaczone</translation>
    </message>
    <message>
        <source>Add Vertex</source>
        <translation>Dodaj wierzchołek</translation>
    </message>
    <message>
        <source>Delete Vertex</source>
        <translation>Usuń wierzchołek</translation>
    </message>
    <message>
        <source>Move Vertex</source>
        <translation>Przesuń wierzchołek</translation>
    </message>
    <message>
        <source>&amp;File</source>
        <translation>&amp;Plik</translation>
    </message>
    <message>
        <source>&amp;Open Recent Projects</source>
        <translation>&amp;Otwórz ostatnie projekty</translation>
    </message>
    <message>
        <source>&amp;View</source>
        <translation>&amp;Widok</translation>
    </message>
    <message>
        <source>&amp;Layer</source>
        <translation>W&amp;arstwa</translation>
    </message>
    <message>
        <source>&amp;Settings</source>
        <translation>&amp;Ustawienia</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation>&amp;Pomoc</translation>
    </message>
    <message>
        <source>File</source>
        <translation>Plik</translation>
    </message>
    <message>
        <source>Manage Layers</source>
        <translation>Zarządzaj warstwami</translation>
    </message>
    <message>
        <source>Help</source>
        <translation>Pomoc</translation>
    </message>
    <message>
        <source>Digitizing</source>
        <translation>Digitalizacja</translation>
    </message>
    <message>
        <source>Map Navigation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Attributes</source>
        <translation>Atrybuty</translation>
    </message>
    <message>
        <source>Plugins</source>
        <translation>Wtyczki</translation>
    </message>
    <message>
        <source>Ready</source>
        <translation>Gotowe</translation>
    </message>
    <message>
        <source>New features</source>
        <translation>Nowe obiekty</translation>
    </message>
    <message>
        <source>Unable to open project</source>
        <translation>Nie można otworzyć projektu</translation>
    </message>
    <message>
        <source>Unable to save project </source>
        <translation>Nie można zapisać projektu</translation>
    </message>
    <message>
        <source>Choose a filename to save the QGIS project file as</source>
        <translation type="unfinished">Wybierz nazwę by zapisać projekt QGIS jako</translation>
    </message>
    <message>
        <source>QGIS: Unable to load project</source>
        <translation>QGIS: Nie mogę wczytać projektu</translation>
    </message>
    <message>
        <source>Unable to load project </source>
        <translation>Nie mogę wczytać projektu</translation>
    </message>
    <message>
        <source>QGIS - Changes in SVN Since Last Release</source>
        <translation>QGIS - zmiany w SVN od ostatniego wydania</translation>
    </message>
    <message>
        <source>Layer is not valid</source>
        <translation type="unfinished">Warstwa jest nieobsługiwana</translation>
    </message>
    <message>
        <source>The layer is not a valid layer and can not be added to the map</source>
        <translation type="unfinished">Warstwa jest nieobsługiwana i nie może być dodana do mapy</translation>
    </message>
    <message>
        <source>Save?</source>
        <translation>Zapisać?</translation>
    </message>
    <message>
        <source>Clipboard contents set to: </source>
        <translation>Zawartość schowka ustawiona na: </translation>
    </message>
    <message>
        <source> is not a valid or recognized raster data source</source>
        <translation> jest nieprawidłowym lub nierozpoznanym rastrowym źródłem danych</translation>
    </message>
    <message>
        <source> is not a supported raster data source</source>
        <translation> jest nieobsługiwanym rastrowym źródłem danych</translation>
    </message>
    <message>
        <source>Unsupported Data Source</source>
        <translation>Nieobsługiwane źródło danych</translation>
    </message>
    <message>
        <source>Enter a name for the new bookmark:</source>
        <translation>Wpisz nazwę nowej zakładki:</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>Błąd</translation>
    </message>
    <message>
        <source>Unable to create the bookmark. Your user database may be missing or corrupted</source>
        <translation type="unfinished">Nie mogę stworzyć zakładki. Twoja baza danych użytkownika nie istnieje lub jest uszkodzona</translation>
    </message>
    <message>
        <source>Ctrl+?</source>
        <comment>Help Documentation (Mac)</comment>
        <translation>Ctrl+?</translation>
    </message>
    <message>
        <source>Show most toolbars</source>
        <translation>Pokaż paski narzędzi</translation>
    </message>
    <message>
        <source>Hide most toolbars</source>
        <translation>Ukryj paski narzędzi</translation>
    </message>
    <message>
        <source>Cut Features</source>
        <translation>Kasuj obiekty</translation>
    </message>
    <message>
        <source>Cut selected features</source>
        <translation>Kasuj zaznaczone obiekty</translation>
    </message>
    <message>
        <source>Copy Features</source>
        <translation>Kopiuj obiekty</translation>
    </message>
    <message>
        <source>Copy selected features</source>
        <translation>Kopiuj zaznaczone obiekty</translation>
    </message>
    <message>
        <source>Paste Features</source>
        <translation>Wklej obiekty</translation>
    </message>
    <message>
        <source>Paste selected features</source>
        <translation>Wklej zaznaczone obiekty</translation>
    </message>
    <message>
        <source>T</source>
        <comment>Show most toolbars</comment>
        <translation>T</translation>
    </message>
    <message>
        <source>Ctrl+T</source>
        <comment>

Hide most toolbars</comment>
        <translation type="obsolete">Ctrl+T</translation>
    </message>
    <message>
        <source>Checking provider plugins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Starting Python</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Python console</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Python error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error when reading metadata of plugin </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Provider does not support deletion</source>
        <translation type="unfinished">Źródło danych nie obsługuje operacji usuwania</translation>
    </message>
    <message>
        <source>Data provider does not support deleting features</source>
        <translation type="unfinished">Źródło danych nie obsługuje operacji usuwania</translation>
    </message>
    <message>
        <source>Layer not editable</source>
        <translation>Warstwa nie jest w trybie edycji</translation>
    </message>
    <message>
        <source>Toggle editing</source>
        <translation>Tryb edycji</translation>
    </message>
    <message>
        <source>Toggles the editing state of the current layer</source>
        <translation>Włącza/wyłącza tryb edycji aktywnej warstwy</translation>
    </message>
    <message>
        <source>Add Ring</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add Island</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add Island to multipolygon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Toolbar Visibility...</source>
        <translation>Paski narzędzi...</translation>
    </message>
    <message>
        <source>Scale </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Current map scale (formatted as x:y)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Map coordinates at mouse cursor position</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Saved project to:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The current layer is not editable. Choose &apos;Start editing&apos; in the digitizing toolbar.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Invalid scale</source>
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
        <source>Do you want to save the current project?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Move Feature</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Split Features</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Map Tips</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show information about a feature when the mouse is hovered over it</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Current map scale</source>
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
        <translation type="unfinished">Przełącz tryb pełnoekranowy</translation>
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
        <source></source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This release candidate includes over 120 bug fixes and enchancements over the QGIS 0.9.1 release. In addition we have added the following new features:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Updated icons for improved visual consistancy.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Support for migration of old projects to work in newer QGIS versions.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ctrl+T</source>
        <comment>Hide most toolbars</comment>
        <translation type="unfinished">Ctrl+T</translation>
    </message>
    <message>
        <source>Progress bar that displays the statusof rendering layers and other time-intensive operations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Shows the map coordinates at thecurrent cursor position. The display is continuously updated as the mouse is moved.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Resource Location Error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error reading icon resources from: 
 %1
 Quitting...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Map canvas. This is where raster and vectorlayers are displayed when added to the map</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Overview</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Legend</source>
        <translation type="unfinished">Legenda</translation>
    </message>
    <message>
        <source>You are using QGIS version %1 built against code revision %2.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> This copy of QGIS has been built with PostgreSQL support.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> This copy of QGIS has been built without PostgreSQL support.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>
This binary was compiled against Qt %1,and is currently running against Qt %2</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgisAppBase</name>
    <message>
        <source>MainWindow</source>
        <translation type="unfinished">Okno główne</translation>
    </message>
    <message>
        <source>Legend</source>
        <translation>Legenda</translation>
    </message>
    <message>
        <source>Map View</source>
        <translation>Mapa</translation>
    </message>
</context>
<context>
    <name>QgsAbout</name>
    <message>
        <source>About Quantum GIS</source>
        <translation>O Quantum GIS</translation>
    </message>
    <message>
        <source>Ok</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>About</source>
        <translation>O QGIS</translation>
    </message>
    <message>
        <source>QGIS Home Page</source>
        <translation>Strona domowa QGIS</translation>
    </message>
    <message>
        <source>Subscribe to the QGIS-User mailing list</source>
        <translation type="obsolete">Subskrybuj listę QGIS-User</translation>
    </message>
    <message>
        <source>Version</source>
        <translation>Wersja</translation>
    </message>
    <message>
        <source>What&apos;s New</source>
        <translation>Co nowego</translation>
    </message>
    <message>
        <source>Providers</source>
        <translation>Źródła danych</translation>
    </message>
    <message>
        <source>&lt;h2&gt;Quantum GIS (qgis)&lt;/h2&gt;</source>
        <translation type="obsolete">&lt;h2&gt;Quantum GIS (qgis)&lt;/h2&gt;</translation>
    </message>
    <message>
        <source>Developers</source>
        <translation>Programiści</translation>
    </message>
    <message>
        <source>&lt;h2&gt;QGIS Developers&lt;/h2&gt;</source>
        <translation type="obsolete">&lt;h2&gt;Programiści QGIS&lt;/h2&gt;</translation>
    </message>
    <message>
        <source>Sponsors</source>
        <translation>Sponsorzy</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Lucida Grande&apos;; font-size:13pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:16px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-size:x-large; font-weight:600;&quot;&gt;&lt;span style=&quot; font-size:x-large;&quot;&gt;Quantum GIS (QGIS)&lt;/span&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Quantum GIS is licensed under the GNU General Public License</source>
        <translation type="unfinished">Quantum GIS jest rozpowszechniany na zasadach określonych w Powszechnej Licencji Publicznej GNU</translation>
    </message>
    <message>
        <source>http://www.gnu.org/licenses</source>
        <translation type="unfinished">http://www.gnu.org/licenses</translation>
    </message>
    <message>
        <source>Join our user mailing list</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsAddAttrDialogBase</name>
    <message>
        <source>Add Attribute</source>
        <translation>Dodaj atrybut</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation>Nazwa:</translation>
    </message>
    <message>
        <source>Type:</source>
        <translation>Typ:</translation>
    </message>
    <message>
        <source>OK</source>
        <translation type="obsolete">OK</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation type="obsolete">Anuluj</translation>
    </message>
</context>
<context>
    <name>QgsAttributeActionDialog</name>
    <message>
        <source>Name</source>
        <translation type="obsolete">Nazwa</translation>
    </message>
    <message>
        <source>Action</source>
        <translation type="obsolete">Akcja</translation>
    </message>
    <message>
        <source>Select an action</source>
        <comment>File dialog window title</comment>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsAttributeActionDialogBase</name>
    <message>
        <source>Form1</source>
        <translation type="obsolete">Form1</translation>
    </message>
    <message>
        <source>This list contains all actions that have been defined for the current layer. Add actions by entering the details in the controls below and then pressing the Insert action button. Actions can be edited here by double clicking on the item.</source>
        <translation>Lista zawiera wszystkie akcje zdefiniowane dla bieżącej warstwy. Dodaj akcje wprowadzając szczegóły w kontrolkach poniżej, a następnie kliknij przycisk Dodaj. Akcje mogą być edytowane po dwukrotnym kliknięciu na jedną z nich.</translation>
    </message>
    <message>
        <source>Move up</source>
        <translation>Przesuń w górę</translation>
    </message>
    <message>
        <source>Move the selected action up</source>
        <translation>Przesuń wybraną akcję wyżej</translation>
    </message>
    <message>
        <source>Move down</source>
        <translation>Przesuń w dół</translation>
    </message>
    <message>
        <source>Move the selected action down</source>
        <translation>Przesuń wybraną akcję niżej</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Usuń</translation>
    </message>
    <message>
        <source>Remove the selected action</source>
        <translation>Usuń wybraną akcję</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation type="obsolete">Nazwa:</translation>
    </message>
    <message>
        <source>Enter the action name here</source>
        <translation>Wpisz tutaj nazwę akcji</translation>
    </message>
    <message>
        <source>Action:</source>
        <translation type="obsolete">Akcja:</translation>
    </message>
    <message>
        <source>Enter the action command here</source>
        <translation>Wpisz tutaj polecenie akcji</translation>
    </message>
    <message>
        <source>Browse</source>
        <translation type="obsolete">Przeglądaj</translation>
    </message>
    <message>
        <source>Insert action</source>
        <translation>Wstaw akcję</translation>
    </message>
    <message>
        <source>Insert field</source>
        <translation>Dodaj pole</translation>
    </message>
    <message>
        <source>The valid attribute names for this layer</source>
        <translation>Poprawne nazwy dla atrybutu warstwy</translation>
    </message>
    <message>
        <source>Inserts the selected field into the action, prepended with a %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enter the name of an action here. The name should be unique (qgis will make it unique if necessary).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Inserts the action into the list above</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Update action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Update the selected action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Capture output</source>
        <translation type="unfinished"></translation>
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
        <source>Enter the action here. This can be any program, script or command that is available on your system. When the action is invoked any set of characters that start with a % and then have the name of a field will be replaced by the value of that field. The special characters %% will be replaced by the value of the field that was selected. Double quote marks group text into single arguments to the program, script or command. Double quotes will be ignored if preceeded by a backslash</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Attribute Actions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Action properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished">Nazwa</translation>
    </message>
    <message>
        <source>Action</source>
        <translation type="unfinished">Akcja</translation>
    </message>
    <message>
        <source>Browse for action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Click to browse for an action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Clicking the buttone will let you select an application to use as the action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>...</source>
        <translation type="unfinished">...</translation>
    </message>
    <message>
        <source>Capture</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsAttributeDialogBase</name>
    <message>
        <source>Enter Attribute Values</source>
        <translation>Wprowadź wartość atrybutu</translation>
    </message>
    <message>
        <source>1</source>
        <translation>1</translation>
    </message>
    <message>
        <source>Attribute</source>
        <translation>Atrybut</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Wartość</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation type="obsolete">&amp;Anuluj</translation>
    </message>
</context>
<context>
    <name>QgsAttributeTable</name>
    <message>
        <source>Run action</source>
        <translation>Uruchom akcję</translation>
    </message>
</context>
<context>
    <name>QgsAttributeTableBase</name>
    <message>
        <source>Attribute Table</source>
        <translation>Tabela atrybutów</translation>
    </message>
    <message>
        <source>Start editing</source>
        <translation>Rozpocznij edycję</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Zamknij</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
    </message>
    <message>
        <source>Ctrl+X</source>
        <translation>Ctrl+X</translation>
    </message>
    <message>
        <source>Ctrl+N</source>
        <translation>Ctrl+N</translation>
    </message>
    <message>
        <source>Ctrl+S</source>
        <translation>Ctrl+S</translation>
    </message>
    <message>
        <source>Invert selection</source>
        <translation>Odwróć zaznaczenie</translation>
    </message>
    <message>
        <source>Ctrl+T</source>
        <translation>Ctrl+T</translation>
    </message>
    <message>
        <source>Move selected to top</source>
        <translation>Przesuń zaznaczone na górę</translation>
    </message>
    <message>
        <source>Remove selection</source>
        <translation>Usuń zaznaczenie</translation>
    </message>
    <message>
        <source>Copy selected rows to clipboard (Ctrl+C)</source>
        <translation>Kopiuj zaznaczone wiersze do schowka (Ctrl+C)</translation>
    </message>
    <message>
        <source>Copies the selected rows to the clipboard</source>
        <translation>Kopiuje zaznaczone wiersze do schowka</translation>
    </message>
    <message>
        <source>Ctrl+C</source>
        <translation>Ctrl+C</translation>
    </message>
    <message>
        <source>Stop editin&amp;g</source>
        <translation>Zatrzymaj edycję</translation>
    </message>
    <message>
        <source>Alt+G</source>
        <translation>Alt+G</translation>
    </message>
    <message>
        <source>Search for:</source>
        <translation>Szukaj:</translation>
    </message>
    <message>
        <source>in</source>
        <translation> w</translation>
    </message>
    <message>
        <source>Search</source>
        <translation>Szukaj</translation>
    </message>
    <message>
        <source>Adva&amp;nced...</source>
        <translation>Zaawansowa&amp;ne...</translation>
    </message>
    <message>
        <source>Alt+N</source>
        <translation>Alt+N</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation>&amp;Pomoc</translation>
    </message>
    <message>
        <source>New column</source>
        <translation>Nowa kolumna</translation>
    </message>
    <message>
        <source>Delete column</source>
        <translation>Usuń kolumnę</translation>
    </message>
    <message>
        <source>Zoom map to the selected rows (Ctrl-F)</source>
        <translation>Kadruj mapę do zasięgu wybranych wierszy (Ctrl-F)</translation>
    </message>
    <message>
        <source>Zoom map to the selected rows</source>
        <translation>Kadruj mapę do zasięgu wybranych wierszy</translation>
    </message>
    <message>
        <source>Ctrl+F</source>
        <translation>Ctrl+F</translation>
    </message>
</context>
<context>
    <name>QgsAttributeTableDisplay</name>
    <message>
        <source>select</source>
        <translation>zaznacz</translation>
    </message>
    <message>
        <source>select and bring to top</source>
        <translation>zaznacz i przenieś na górę</translation>
    </message>
    <message>
        <source>show only matching</source>
        <translation>pokaż tylko zaznaczone</translation>
    </message>
    <message>
        <source>Search string parsing error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Search results</source>
        <translation>Rezultaty wyszukiwania</translation>
    </message>
    <message>
        <source>You&apos;ve supplied an empty search string.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error during search</source>
        <translation>Błąd wyszukiwania</translation>
    </message>
    <message>
        <source>No matching features found.</source>
        <translation>Nie znaleziono pasujących obiektów.</translation>
    </message>
    <message>
        <source>Name conflict</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Stop editing</source>
        <translation>Zakończ edycję</translation>
    </message>
    <message>
        <source>Do you want to save the changes?</source>
        <translation>Czy chcesz zapisać zmiany?</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>Błąd</translation>
    </message>
    <message>
        <source>The attribute could not be inserted. The name already exists in the table.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Could not commit changes - changes are still pending</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsBookmarks</name>
    <message>
        <source>Really Delete?</source>
        <translation>Czy na pewno usunąć?</translation>
    </message>
    <message>
        <source>Are you sure you want to delete the </source>
        <translation>Czy jesteś pewien, że mam usunąć zakładkę </translation>
    </message>
    <message>
        <source> bookmark?</source>
        <translation> ?</translation>
    </message>
    <message>
        <source>Error deleting bookmark</source>
        <translation>Błąd podczas usuwania zakładki</translation>
    </message>
    <message>
        <source>Failed to delete the </source>
        <translation>Nie powiodło się usunięcie zakładki </translation>
    </message>
    <message>
        <source> bookmark from the database. The database said:
</source>
        <translation> z bazy danych. Komunikat bazy danych:</translation>
    </message>
    <message>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Zoom to</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsBookmarksBase</name>
    <message>
        <source>Geospatial Bookmarks</source>
        <translation>Zakładki</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nazwa</translation>
    </message>
    <message>
        <source>Project</source>
        <translation>Projekt</translation>
    </message>
    <message>
        <source>Extent</source>
        <translation>Zasięg</translation>
    </message>
    <message>
        <source>Id</source>
        <translation>Id</translation>
    </message>
    <message>
        <source>Zoom To</source>
        <translation type="obsolete">Powiększ do</translation>
    </message>
    <message>
        <source>Zoom to the currently selected bookmark</source>
        <translation type="obsolete">Powiększ do wybranej zakładki</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation type="obsolete">Usuń</translation>
    </message>
    <message>
        <source>Delete the currently selected bookmark</source>
        <translation type="obsolete">Usuń wybraną zakładkę</translation>
    </message>
    <message>
        <source>Close</source>
        <translation type="obsolete">Zamknij</translation>
    </message>
    <message>
        <source>Close the dialog</source>
        <translation type="obsolete">Zamknij okno</translation>
    </message>
    <message>
        <source>Help</source>
        <translation type="obsolete">Pomoc</translation>
    </message>
</context>
<context>
    <name>QgsComposer</name>
    <message>
        <source> for read/write</source>
        <translation>do odczytu/zapisu</translation>
    </message>
    <message>
        <source>Choose a filename to save the map image as</source>
        <translation>Podaj nazwę pliku do którego zapisać obraz mapy</translation>
    </message>
    <message>
        <source>Choose a filename to save the map as</source>
        <translation>Podaj nazwę pliku do którego zapisać mapę</translation>
    </message>
    <message>
        <source>Error in Print</source>
        <translation>Błąd druku</translation>
    </message>
    <message>
        <source>Cannot seek</source>
        <translation>Nie mogę wyszukać</translation>
    </message>
    <message>
        <source>Cannot overwrite BoundingBox</source>
        <translation type="unfinished">Nie mogę nadpisać BoundingBox</translation>
    </message>
    <message>
        <source>Cannot find BoundingBox</source>
        <translation type="unfinished">Nie mogę znaleźć BoundingBox</translation>
    </message>
    <message>
        <source>Cannot overwrite translate</source>
        <translation>Nie mogę nadpisać tłumaczenia</translation>
    </message>
    <message>
        <source>Cannot find translate</source>
        <translation>Nie mogę znaleźć tłumaczenia</translation>
    </message>
    <message>
        <source>File IO Error</source>
        <translation>Błąd wejścia/wyjścia</translation>
    </message>
    <message>
        <source>Paper does not match</source>
        <translation>Niewłaściwy papier </translation>
    </message>
    <message>
        <source>The selected paper size does not match the composition size</source>
        <translation>Wybrany rozmiar papieru nie odpowiada rozmiarowi kompozycji</translation>
    </message>
    <message>
        <source>Big image</source>
        <translation>Duży obraz</translation>
    </message>
    <message>
        <source>To create image </source>
        <translation>Aby stworzyć obraz</translation>
    </message>
    <message>
        <source> requires circa </source>
        <translation>potrzeba około</translation>
    </message>
    <message>
        <source> MB of memory</source>
        <translation>MB pamięci</translation>
    </message>
    <message>
        <source>QGIS - print composer</source>
        <translation type="unfinished">QGIS - kompozytor wydruku</translation>
    </message>
    <message>
        <source>Map 1</source>
        <translation>Mapa 1</translation>
    </message>
    <message>
        <source>Couldn&apos;t open </source>
        <translation>Nie mogę otworzyć</translation>
    </message>
    <message>
        <source>format</source>
        <translation>format</translation>
    </message>
    <message>
        <source>SVG warning</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Don&apos;t show this message again</source>
        <translation>Nie pokazuj tego komunikatu ponownie</translation>
    </message>
    <message>
        <source>SVG Format</source>
        <translation>Format SVG</translation>
    </message>
</context>
<context>
    <name>QgsComposerBase</name>
    <message>
        <source>General</source>
        <translation>Ogólne</translation>
    </message>
    <message>
        <source>Composition</source>
        <translation>Kompozycja</translation>
    </message>
    <message>
        <source>Item</source>
        <translation>Obiekt</translation>
    </message>
    <message>
        <source>&amp;Open Template ...</source>
        <translation>&amp;Otwórz szablon ...</translation>
    </message>
    <message>
        <source>Save Template &amp;As...</source>
        <translation>Zapisz szablon j&amp;ako...</translation>
    </message>
    <message>
        <source>&amp;Print...</source>
        <translation>&amp;Drukuj...</translation>
    </message>
    <message>
        <source>Add new map</source>
        <translation>Dodaj nową mapę</translation>
    </message>
    <message>
        <source>Add new label</source>
        <translation>Dodaj nową etykietę</translation>
    </message>
    <message>
        <source>Add new vect legend</source>
        <translation>Dodaj nową legendę</translation>
    </message>
    <message>
        <source>Select/Move item</source>
        <translation>Wybierz/przesuń obiekt</translation>
    </message>
    <message>
        <source>Export as image</source>
        <translation>Eksportuj jako obraz</translation>
    </message>
    <message>
        <source>Export as SVG</source>
        <translation>Eksportuj jako SVG</translation>
    </message>
    <message>
        <source>Add new scalebar</source>
        <translation>Dodaj podziałkę</translation>
    </message>
    <message>
        <source>Refresh view</source>
        <translation>Odśwież widok</translation>
    </message>
    <message>
        <source>MainWindow</source>
        <translation>Okno główne</translation>
    </message>
    <message>
        <source>Zoom All</source>
        <translation>Pełny zasięg</translation>
    </message>
    <message>
        <source>Zoom In</source>
        <translation>Powiększ</translation>
    </message>
    <message>
        <source>Zoom Out</source>
        <translation>Pomniejsz</translation>
    </message>
    <message>
        <source>Add Image</source>
        <translation>Dodaj obraz</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Zamknij</translation>
    </message>
    <message>
        <source>Help</source>
        <translation>Pomoc</translation>
    </message>
</context>
<context>
    <name>QgsComposerLabelBase</name>
    <message>
        <source>Label Options</source>
        <translation>Opcje etykiety</translation>
    </message>
    <message>
        <source>Font</source>
        <translation>Czcionka</translation>
    </message>
    <message>
        <source>Box</source>
        <translation>Prostokąt</translation>
    </message>
</context>
<context>
    <name>QgsComposerMap</name>
    <message>
        <source>Map %1</source>
        <translation>Mapa %1</translation>
    </message>
    <message>
        <source>Extent (calculate scale)</source>
        <translation>Zasięg (przelicz skalę)</translation>
    </message>
    <message>
        <source>Scale (calculate extent)</source>
        <translation>Skala (przelicz powiększenie)</translation>
    </message>
    <message>
        <source>Cache</source>
        <translation>Cache</translation>
    </message>
    <message>
        <source>Render</source>
        <translation>Renderuj</translation>
    </message>
    <message>
        <source>Rectangle</source>
        <translation>Prostokąt</translation>
    </message>
</context>
<context>
    <name>QgsComposerMapBase</name>
    <message>
        <source>Map options</source>
        <translation>Opcje mapy</translation>
    </message>
    <message>
        <source>&lt;b&gt;Map&lt;/b&gt;</source>
        <translation>&lt;b&gt;Mapa&lt;/b&gt;</translation>
    </message>
    <message>
        <source>Set</source>
        <translation>Ustaw</translation>
    </message>
    <message>
        <source>Width</source>
        <translation>Szerokość</translation>
    </message>
    <message>
        <source>Height</source>
        <translation>Wysokość</translation>
    </message>
    <message>
        <source>Set Extent</source>
        <translation>Ustaw zasięg</translation>
    </message>
    <message>
        <source>Set map extent to current extent in QGIS map canvas</source>
        <translation>Ustaw zasięg mapy do bieżącego zasięgu w oknie mapy QGIS</translation>
    </message>
    <message>
        <source>Line width scale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Width of one unit in millimeters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Symbol scale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font size scale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Frame</source>
        <translation>Ramka</translation>
    </message>
    <message>
        <source>Preview</source>
        <translation>Podgląd</translation>
    </message>
    <message>
        <source>1:</source>
        <translation>1:</translation>
    </message>
    <message>
        <source>Scale:</source>
        <translation>Skala:</translation>
    </message>
</context>
<context>
    <name>QgsComposerPicture</name>
    <message>
        <source>Warning</source>
        <translation>Ostrzeżenie</translation>
    </message>
    <message>
        <source>Cannot load picture.</source>
        <translation>Nie można wczytać obrazu.</translation>
    </message>
    <message>
        <source>Choose a file</source>
        <translation>Wybierz plik</translation>
    </message>
    <message>
        <source>Pictures (</source>
        <translation>Obrazy (</translation>
    </message>
</context>
<context>
    <name>QgsComposerPictureBase</name>
    <message>
        <source>Picture Options</source>
        <translation>Opcje obrazu</translation>
    </message>
    <message>
        <source>Frame</source>
        <translation>Ramka</translation>
    </message>
    <message>
        <source>Angle</source>
        <translation>Kąt</translation>
    </message>
    <message>
        <source>Width</source>
        <translation>Szerokość</translation>
    </message>
    <message>
        <source>Height</source>
        <translation>Wysokość</translation>
    </message>
    <message>
        <source>Browse</source>
        <translation>Przeglądaj</translation>
    </message>
</context>
<context>
    <name>QgsComposerScalebarBase</name>
    <message>
        <source>Barscale Options</source>
        <translation>Opcje podziałki</translation>
    </message>
    <message>
        <source>Segment size</source>
        <translation>Rozmiar segmentu</translation>
    </message>
    <message>
        <source>Number of segments</source>
        <translation>Liczba segmentów</translation>
    </message>
    <message>
        <source>Map units per scalebar unit</source>
        <translation>Jednostki mapy na podziałce</translation>
    </message>
    <message>
        <source>Unit label</source>
        <translation>Etykieta jednostki</translation>
    </message>
    <message>
        <source>Map</source>
        <translation>Mapa</translation>
    </message>
    <message>
        <source>Font</source>
        <translation>Czcionka</translation>
    </message>
    <message>
        <source>Line width</source>
        <translation>Szerokość linii</translation>
    </message>
</context>
<context>
    <name>QgsComposerVectorLegend</name>
    <message>
        <source>Layers</source>
        <translation type="obsolete">Warstwy</translation>
    </message>
    <message>
        <source>Group</source>
        <translation type="obsolete">Grupa</translation>
    </message>
    <message>
        <source>Combine selected layers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cache</source>
        <translation>Cache</translation>
    </message>
    <message>
        <source>Render</source>
        <translation>Renderuj</translation>
    </message>
    <message>
        <source>Rectangle</source>
        <translation>Prostokąt</translation>
    </message>
    <message>
        <source>Legend</source>
        <translation>Legenda</translation>
    </message>
</context>
<context>
    <name>QgsComposerVectorLegendBase</name>
    <message>
        <source>Vector Legend Options</source>
        <translation>Opcje legendy</translation>
    </message>
    <message>
        <source>Title</source>
        <translation>Tytuł</translation>
    </message>
    <message>
        <source>Map</source>
        <translation>Mapa</translation>
    </message>
    <message>
        <source>Font</source>
        <translation>Czcionka</translation>
    </message>
    <message>
        <source>Box</source>
        <translation>Prostokąt</translation>
    </message>
    <message>
        <source>Column 1</source>
        <translation type="obsolete">Kolumna 1</translation>
    </message>
    <message>
        <source>Preview</source>
        <translation>Podgląd</translation>
    </message>
    <message>
        <source>Layers</source>
        <translation type="unfinished">Warstwy</translation>
    </message>
    <message>
        <source>Group</source>
        <translation type="unfinished">Grupa</translation>
    </message>
    <message>
        <source>ID</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsComposition</name>
    <message>
        <source>Custom</source>
        <translation>Własny</translation>
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
        <translation>B5 (176 x 250 mm)</translation>
    </message>
    <message>
        <source>B4 (250 x 353 mm)</source>
        <translation>B4 (250 x 353 mm)</translation>
    </message>
    <message>
        <source>B3 (353 x 500 mm)</source>
        <translation>B3 (353 x 500 mm)</translation>
    </message>
    <message>
        <source>B2 (500 x 707 mm)</source>
        <translation>B2 (500 x 707 mm)</translation>
    </message>
    <message>
        <source>B1 (707 x 1000 mm)</source>
        <translation>B1 (707 x 1000 mm)</translation>
    </message>
    <message>
        <source>B0 (1000 x 1414 mm)</source>
        <translation>B0 (1000 x 1414 mm)</translation>
    </message>
    <message>
        <source>Letter (8.5x11 inches)</source>
        <translation>Letter (8.5x11 inches)</translation>
    </message>
    <message>
        <source>Legal (8.5x14 inches)</source>
        <translation>Legal (8.5x14 inches)</translation>
    </message>
    <message>
        <source>Portrait</source>
        <translation>Pionowo</translation>
    </message>
    <message>
        <source>Landscape</source>
        <translation>Poziomo</translation>
    </message>
    <message>
        <source>Out of memory</source>
        <translation>Brak pamięci</translation>
    </message>
    <message>
        <source>Qgis is unable to resize the paper size due to insufficient memory.
 It is best that you avoid using the map composer until you restart qgis.
</source>
        <translation>Qgis nie może zmienić rozmiaru papieru z powodu braku pamięci.
Przed ponownym użyciem kompozytora mapy zaleca się restart qgis.
  </translation>
    </message>
    <message>
        <source>Label</source>
        <translation>Etykieta</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Ostrzeżenie</translation>
    </message>
    <message>
        <source>Cannot load picture.</source>
        <translation>Nie można wczytać obrazu.</translation>
    </message>
</context>
<context>
    <name>QgsCompositionBase</name>
    <message>
        <source>Composition</source>
        <translation>Kompozycja</translation>
    </message>
    <message>
        <source>Paper</source>
        <translation>Papier</translation>
    </message>
    <message>
        <source>Size</source>
        <translation>Rozmiar</translation>
    </message>
    <message>
        <source>Units</source>
        <translation>Jednostki</translation>
    </message>
    <message>
        <source>Width</source>
        <translation>Szerokość</translation>
    </message>
    <message>
        <source>Height</source>
        <translation>Wysokość</translation>
    </message>
    <message>
        <source>Orientation</source>
        <translation>Orientacja</translation>
    </message>
    <message>
        <source>Resolution (dpi)</source>
        <translation>Rozdzielczość (dpi)</translation>
    </message>
</context>
<context>
    <name>QgsContinuousColorDialogBase</name>
    <message>
        <source>Continuous color</source>
        <translation>Ciągły kolor</translation>
    </message>
    <message>
        <source>Maximum Value:</source>
        <translation>Wartość maksymalna:</translation>
    </message>
    <message>
        <source>Outline Width:</source>
        <translation>Szerokość obrysu:</translation>
    </message>
    <message>
        <source>Minimum Value:</source>
        <translation>Wartość minimalna:</translation>
    </message>
    <message>
        <source>Classification Field:</source>
        <translation>Pole klasyfikacji:</translation>
    </message>
    <message>
        <source>Draw polygon outline</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsCoordinateTransform</name>
    <message>
        <source>Failed</source>
        <translation>Nieudana</translation>
    </message>
    <message>
        <source>transform of</source>
        <translation>transformacja</translation>
    </message>
    <message>
        <source>with error: </source>
        <translation>z błędem: </translation>
    </message>
    <message>
        <source>The source spatial reference system (SRS) is not valid. </source>
        <translation>Źródłowy system referencyjny (SRS) jest nieprawidłowy. </translation>
    </message>
    <message>
        <source>The coordinates can not be reprojected. The SRS is: </source>
        <translation>Współrzędne nie mogą być przeliczone. Aktualny SRS: </translation>
    </message>
    <message>
        <source>The destination spatial reference system (SRS) is not valid. </source>
        <translation>Docelowy system referencyjny (SRS) jest nieprawidłowy. </translation>
    </message>
</context>
<context>
    <name>QgsCopyrightLabelPlugin</name>
    <message>
        <source>Bottom Left</source>
        <translation>Lewy dolny</translation>
    </message>
    <message>
        <source>Top Left</source>
        <translation>Lewy górny</translation>
    </message>
    <message>
        <source>Top Right</source>
        <translation>Prawy górny</translation>
    </message>
    <message>
        <source>Bottom Right</source>
        <translation>Prawy dolny</translation>
    </message>
    <message>
        <source>&amp;Copyright Label</source>
        <translation>Informa&amp;cja o prawach autorskich</translation>
    </message>
    <message>
        <source>Creates a copyright label that is displayed on the map canvas.</source>
        <translation>Tworzy etykietę o prawach autorskich wyświetlaną na mapie.</translation>
    </message>
    <message>
        <source>&amp;Decorations</source>
        <translation>&amp;Dekoracje</translation>
    </message>
</context>
<context>
    <name>QgsCopyrightLabelPluginGuiBase</name>
    <message>
        <source>Copyright Label Plugin</source>
        <translation>Informacja o prawach autorskich</translation>
    </message>
    <message>
        <source>Placement</source>
        <translation>Umiejscowienie</translation>
    </message>
    <message>
        <source>Bottom Left</source>
        <translation>Lewy dolny</translation>
    </message>
    <message>
        <source>Top Left</source>
        <translation>Lewy górny</translation>
    </message>
    <message>
        <source>Bottom Right</source>
        <translation>Prawy dolny</translation>
    </message>
    <message>
        <source>Top Right</source>
        <translation>Prawy górny</translation>
    </message>
    <message>
        <source>Orientation</source>
        <translation>Orientacja</translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation>Poziomo</translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation>Pionowo</translation>
    </message>
    <message>
        <source>Enable Copyright Label</source>
        <translation>Włącz etykietę o prawach autorskich</translation>
    </message>
    <message>
        <source>Color</source>
        <translation type="unfinished">Kolor</translation>
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
        <source>&#xa9; QGIS 2008</source>
        <translation type="obsolete">© QGIS 2008</translation>
    </message>
    <message encoding="UTF-8">
        <source>© QGIS 2008</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsCustomProjectionDialog</name>
    <message>
        <source>Delete Projection Definition?</source>
        <translation>Usunąć definicję układu współrzędnych?</translation>
    </message>
    <message>
        <source>Deleting a projection definition is not reversable. Do you want to delete it?</source>
        <translation>Usunięcie definicji układu współrzędnych jest nieodwracalne. Czy chcesz ją usunąć?</translation>
    </message>
    <message>
        <source>Abort</source>
        <translation>Anuluj</translation>
    </message>
    <message>
        <source>New</source>
        <translation>Nowy</translation>
    </message>
    <message>
        <source>QGIS Custom Projection</source>
        <translation>Własny układ współrzędnych QGIS</translation>
    </message>
    <message>
        <source>This proj4 projection definition is not valid. Please give the projection a name before pressing save.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This proj4 projection definition is not valid. Please add the parameters before pressing save.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This proj4 projection definition is not valid. Please add a proj= clause before pressing save.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This proj4 ellipsoid definition is not valid. Please add a ellips= clause before pressing save.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This proj4 projection definition is not valid. Please correct before pressing save.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This proj4 projection definition is not valid.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Northing and Easthing must be in decimal form.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Internal Error (source projection invalid?)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsCustomProjectionDialogBase</name>
    <message>
        <source>Custom Projection Definition</source>
        <translation>Definicja własnego układu współrzędnych</translation>
    </message>
    <message>
        <source>Define</source>
        <translation>Definiuj</translation>
    </message>
    <message>
        <source>Parameters:</source>
        <translation type="obsolete">Parametry:</translation>
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
        <translation>1 z 1</translation>
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
        <translation type="obsolete">Nowy</translation>
    </message>
    <message>
        <source>Save</source>
        <translation type="obsolete">Zapisz</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation type="obsolete">Usuń</translation>
    </message>
    <message>
        <source>Close</source>
        <translation type="obsolete">Zamknij</translation>
    </message>
    <message>
        <source>Name:</source>
        <translation type="obsolete">Nazwa:</translation>
    </message>
    <message>
        <source>Test</source>
        <translation>Testuj</translation>
    </message>
    <message>
        <source>Transform from WGS84 to the chosen projection</source>
        <translation type="obsolete">Przekształć z WGS84 do wybranego układu współrzędnych</translation>
    </message>
    <message>
        <source>Calculate</source>
        <translation>Przelicz</translation>
    </message>
    <message>
        <source>Geographic / WGS84</source>
        <translation>Geograficzny /WGS84</translation>
    </message>
    <message>
        <source>North:</source>
        <translation type="obsolete">Północ:</translation>
    </message>
    <message>
        <source>East:</source>
        <translation type="obsolete">Wschód:</translation>
    </message>
    <message>
        <source>You can define your own custom projection here. The definition must conform to the proj4 format for specifying a Spatial Reference System.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use the text boxes below to test the projection definition you are creating. Enter a coordinate where both the lat/long and the projected result are known (for example by reading off a map). Then press the calculate button to see if the projection definition you are creating is accurate.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Projected Coordinate System</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished">Nazwa</translation>
    </message>
    <message>
        <source>Parameters</source>
        <translation type="unfinished">Parametry</translation>
    </message>
    <message>
        <source>*</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>S</source>
        <translation type="unfinished">S</translation>
    </message>
    <message>
        <source>X</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>North</source>
        <translation type="unfinished">Północ</translation>
    </message>
    <message>
        <source>East</source>
        <translation type="unfinished">Wschód</translation>
    </message>
</context>
<context>
    <name>QgsDbSourceSelect</name>
    <message>
        <source>Are you sure you want to remove the </source>
        <translation>Czy na pewno chcesz usunąć </translation>
    </message>
    <message>
        <source> connection and all associated settings?</source>
        <translation>połączenie i wszystkie związane z nim ustawienia?</translation>
    </message>
    <message>
        <source>Confirm Delete</source>
        <translation>Zatwierdź usunięcie</translation>
    </message>
    <message>
        <source>Select Table</source>
        <translation>Wybierz Tabelę</translation>
    </message>
    <message>
        <source>You must select a table in order to add a Layer.</source>
        <translation>Musisz wybrać tabelę aby dodać warstwę.</translation>
    </message>
    <message>
        <source>Password for </source>
        <translation>Hasło dla</translation>
    </message>
    <message>
        <source>Please enter your password:</source>
        <translation>Proszę podać hasło:</translation>
    </message>
    <message>
        <source>Connection failed</source>
        <translation>Połączenie nie powiodło się</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Typ</translation>
    </message>
    <message>
        <source>Sql</source>
        <translation>Sql</translation>
    </message>
    <message>
        <source>Connection to %1 on %2 failed. Either the database is down or your settings are incorrect.%3Check your username and password and try again.%4The database said:%5%6</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Wildcard</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>RegExp</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>All</source>
        <translation type="unfinished">Wszystko</translation>
    </message>
    <message>
        <source>Schema</source>
        <translation type="unfinished">Schemat</translation>
    </message>
    <message>
        <source>Table</source>
        <translation type="unfinished">Tabela</translation>
    </message>
    <message>
        <source>Geometry column</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Accessible tables could not be determined</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Database connection was successful, but the accessible tables could not be determined.

The error message from the database was:
%1
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No accessible tables found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Database connection was successful, but no accessible tables were found.

Please verify that you have SELECT privilege on a table carrying PostGIS
geometry.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsDbSourceSelectBase</name>
    <message>
        <source>Add PostGIS Table(s)</source>
        <translation>Dodaj tabelę PostGIS</translation>
    </message>
    <message>
        <source>PostgreSQL Connections</source>
        <translation>Połączenie PostgreSQL</translation>
    </message>
    <message>
        <source>Connect</source>
        <translation>Połącz</translation>
    </message>
    <message>
        <source>New</source>
        <translation>Nowy</translation>
    </message>
    <message>
        <source>Edit</source>
        <translation>Edytuj</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Usuń</translation>
    </message>
    <message>
        <source>Help</source>
        <translation>Pomoc</translation>
    </message>
    <message>
        <source>F1</source>
        <translation>F1</translation>
    </message>
    <message>
        <source>Add</source>
        <translation>Dodaj</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Zamknij</translation>
    </message>
    <message>
        <source>Search:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Search mode:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Search in columns:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Search options...</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsDbTableModel</name>
    <message>
        <source>Schema</source>
        <translation type="unfinished">Schemat</translation>
    </message>
    <message>
        <source>Table</source>
        <translation type="unfinished">Tabela</translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="unfinished">Typ</translation>
    </message>
    <message>
        <source>Geometry column</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sql</source>
        <translation type="unfinished">Sql</translation>
    </message>
    <message>
        <source>Point</source>
        <translation type="unfinished">Punkt</translation>
    </message>
    <message>
        <source>Multipoint</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line</source>
        <translation type="unfinished">Linia</translation>
    </message>
    <message>
        <source>Multiline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation type="unfinished">Poligon</translation>
    </message>
    <message>
        <source>Multipolygon</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsDelAttrDialogBase</name>
    <message>
        <source>Delete Attributes</source>
        <translation>Usuń atrybuty</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Anuluj</translation>
    </message>
</context>
<context>
    <name>QgsDelimitedTextPlugin</name>
    <message>
        <source>&amp;Add Delimited Text Layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add a delimited text file as a map layer. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The file must have a header row containing the field names. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>X and Y fields are required and must contain coordinates in decimal units.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Delimited text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>DelimitedTextLayer</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsDelimitedTextPluginGui</name>
    <message>
        <source>No layer name</source>
        <translation>Brak nazwy warstwy</translation>
    </message>
    <message>
        <source>Please enter a layer name before adding the layer to the map</source>
        <translation>Proszę wprowadzić nazwę warstwy przed dodaniem jej do mapy</translation>
    </message>
    <message>
        <source>No delimiter</source>
        <translation>Brak separatora</translation>
    </message>
    <message>
        <source>Please specify a delimiter prior to parsing the file</source>
        <translation>Proszę zdefiniować separator przez rozpoczęciem przetwarzania pliku</translation>
    </message>
    <message>
        <source>Choose a delimited text file to open</source>
        <translation>Wybierz do otwarcia plik rozdzielany separatorem</translation>
    </message>
    <message>
        <source>Parse</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Description</source>
        <translation type="unfinished">Opis</translation>
    </message>
    <message>
        <source>Select a delimited text file containing a header row and one or more rows of x and y coordinates that you would like to use as a point layer and this plugin will do the job for you!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use the layer name box to specify the legend name for the new layer. Use the delimiter box to specify what delimeter is used in your file (e.g. space, comma, tab or a regular expression in Perl style). After choosing a delimiter, press the parse button and select the columns containing the x and y values for the layer.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsDelimitedTextPluginGuiBase</name>
    <message>
        <source>Create a Layer from a Delimited Text File</source>
        <translation>Utwórz warstwę na podstawie pliku rozdzielanego separatorem</translation>
    </message>
    <message>
        <source>&lt;p align=&quot;right&quot;&gt;X field&lt;/p&gt;</source>
        <translation>&lt;p align=&quot;right&quot;&gt;X pole&lt;/p&gt;</translation>
    </message>
    <message>
        <source>Name of the field containing x values</source>
        <translation>Nazwa pola zawierającego wartość x</translation>
    </message>
    <message>
        <source>Name of the field containing x values. Choose a field from the list. The list is generated by parsing the header row of the delimited text file.</source>
        <translation>Nazwa pola zawierającego wartość x. Wybierz pole z listy. Lista generowana jest na podstawie pierwszego wiersza pliku rozdzielanego separatorem.</translation>
    </message>
    <message>
        <source>&lt;p align=&quot;right&quot;&gt;Y field&lt;/p&gt;</source>
        <translation>&lt;p align=&quot;right&quot;&gt;Y pole&lt;/p&gt;</translation>
    </message>
    <message>
        <source>Name of the field containing y values</source>
        <translation>Nazwa pola zawierającego wartość y</translation>
    </message>
    <message>
        <source>Name of the field containing y values. Choose a field from the list. The list is generated by parsing the header row of the delimited text file.</source>
        <translation>Nazwa pola zawierającego wartość y. Wybierz pole z listy. Lista generowana jest na podstawie pierwszego wiersza pliku rozdzielanego separatorem.</translation>
    </message>
    <message>
        <source>Sample text</source>
        <translation>Przykładowy tekst</translation>
    </message>
    <message>
        <source>Delimited Text Layer</source>
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
        <source>Layer name</source>
        <translation>Nazwa warstwy</translation>
    </message>
    <message>
        <source>Name to display in the map legend</source>
        <translation>Nazwa do wyświetlenia w legendzie mapy</translation>
    </message>
    <message>
        <source>Name displayed in the map legend</source>
        <translation>Nazwa wyświetlana w legendzie mapy</translation>
    </message>
    <message>
        <source>Delimiter</source>
        <translation>Separator</translation>
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
        <source>Browse...</source>
        <translation type="unfinished">Przeglądaj...</translation>
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
        <source>Note: the following lines were not loaded because Qgis was unable to determine values for the x and y coordinates:
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error</source>
        <translation>Błąd</translation>
    </message>
</context>
<context>
    <name>QgsDetailedItemWidgetBase</name>
    <message>
        <source>Form</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Heading Label</source>
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
        <source>Buffer distance in map units:</source>
        <translation>Odległość bufora w jednostkach mapy:</translation>
    </message>
    <message>
        <source>Table name for the buffered layer:</source>
        <translation>Nazwa tabeli dla buforowanej warstwy:</translation>
    </message>
    <message>
        <source>Create unique object id</source>
        <translation>Utwórz unikalny id obiektu</translation>
    </message>
    <message>
        <source>public</source>
        <translation>publiczny</translation>
    </message>
    <message>
        <source>Geometry column:</source>
        <translation>Kolumna geometrii:</translation>
    </message>
    <message>
        <source>Spatial reference ID:</source>
        <translation>ID powiązania przestrzennego:</translation>
    </message>
    <message>
        <source>Unique field to use as feature id:</source>
        <translation>Pole unikalne do użycia jako id obiektu:</translation>
    </message>
    <message>
        <source>Schema:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add the buffered layer to the map?</source>
        <translation>Czy dodać buforowaną warstwę do mapy?</translation>
    </message>
    <message>
        <source>&lt;h2&gt;Buffer the features in layer: &lt;/h2&gt;</source>
        <translation>&lt;h2&gt;Buforuj obiekty na warstwie: &lt;/h2&gt;</translation>
    </message>
    <message>
        <source>Parameters</source>
        <translation>Parametry</translation>
    </message>
</context>
<context>
    <name>QgsEncodingFileDialog</name>
    <message>
        <source>Encoding:</source>
        <translation>Kodowanie:</translation>
    </message>
</context>
<context>
    <name>QgsFillStyleWidgetBase</name>
    <message>
        <source>Form1</source>
        <translation type="unfinished">Form1</translation>
    </message>
    <message>
        <source>Fill Style</source>
        <translation>Styl wypełnienia</translation>
    </message>
    <message>
        <source>PolyStyleWidget</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Colour:</source>
        <translation>Kolor:</translation>
    </message>
    <message>
        <source>col</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsGPSDeviceDialog</name>
    <message>
        <source>New device %1</source>
        <translation>Nowe urządzenie %1</translation>
    </message>
    <message>
        <source>Are you sure?</source>
        <translation>Czy jesteś pewien?</translation>
    </message>
    <message>
        <source>Are you sure that you want to delete this device?</source>
        <translation>Czy jesteś pewien, że chcesz usunąć to urządzenie?</translation>
    </message>
</context>
<context>
    <name>QgsGPSDeviceDialogBase</name>
    <message>
        <source>GPS Device Editor</source>
        <translation>Edytor urządzenia GPS</translation>
    </message>
    <message>
        <source>Device name:</source>
        <translation>Nazwa urządzenia:</translation>
    </message>
    <message>
        <source>This is the name of the device as it will appear in the lists</source>
        <translation>Nazwa urządzenia, która będzie wyświetlana w liście</translation>
    </message>
    <message>
        <source>Update device</source>
        <translation>Aktualizuj urządzenie</translation>
    </message>
    <message>
        <source>Delete device</source>
        <translation>Usuń urządzenie</translation>
    </message>
    <message>
        <source>New device</source>
        <translation>Nowe urządzenie</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Zamknij</translation>
    </message>
    <message>
        <source>Commands</source>
        <translation>Komendy</translation>
    </message>
    <message>
        <source>Waypoint download:</source>
        <translation>Import punktów (waypoint):</translation>
    </message>
    <message>
        <source>Waypoint upload:</source>
        <translation>Eksport punktów (waypoint):</translation>
    </message>
    <message>
        <source>Route download:</source>
        <translation>Import tras (route):</translation>
    </message>
    <message>
        <source>Route upload:</source>
        <translation>Eksport tras (route):</translation>
    </message>
    <message>
        <source>Track download:</source>
        <translation>Import śladów (tracków):</translation>
    </message>
    <message>
        <source>The command that is used to upload tracks to the device</source>
        <translation>Komenda używana do eksportu śladów (tracków) do urządzenia</translation>
    </message>
    <message>
        <source>Track upload:</source>
        <translation>Eksport śladów (tracków):</translation>
    </message>
    <message>
        <source>The command that is used to download tracks from the device</source>
        <translation>Komenda używana do importu śladów (tracków) z urządzenia</translation>
    </message>
    <message>
        <source>The command that is used to upload routes to the device</source>
        <translation>Komenda używana do eksportu tras (route) do urządzenia</translation>
    </message>
    <message>
        <source>The command that is used to download routes from the device</source>
        <translation>Komenda używana do importu tras (route) z urządzenia</translation>
    </message>
    <message>
        <source>The command that is used to upload waypoints to the device</source>
        <translation>Komenda używana do eksportu punktów (waypoint) do urządzenia</translation>
    </message>
    <message>
        <source>The command that is used to download waypoints from the device</source>
        <translation>Komenda używana do importu punktów (waypoint) z urządzenia</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;/head&gt;&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;In the download and upload commands there can be special words that will be replaced by QGIS when the commands are used. These words are:&lt;span style=&quot; font-style:italic;&quot;&gt;%babel&lt;/span&gt; - the path to GPSBabel&lt;br /&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;%in&lt;/span&gt; - the GPX filename when uploading or the port when downloading&lt;br /&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;%out&lt;/span&gt; - the port when uploading or the GPX filename when downloading&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;/head&gt;&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:12px; margin-bottom:12px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;W poleceniach do wysyłania i pobierania można użyć specjalnych wyrażeń, które zostaną odpowiednio zastąpione podczas użycia tych poleceń. Te wyrażenia to:&lt;span style=&quot; font-style:italic;&quot;&gt;%babel&lt;/span&gt; - ścieżka do GPSBabel&lt;br /&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;%in&lt;/span&gt; - nazwa pliku GPX podczas eksportu lub port podczas importu&lt;br /&gt;&lt;span style=&quot; font-style:italic;&quot;&gt;%out&lt;/span&gt; - port podczas eksportu lub nazwa pliku GPX podczas importu&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
</context>
<context>
    <name>QgsGPSPlugin</name>
    <message>
        <source>&amp;Gps Tools</source>
        <translation>Narzędzie &amp;GPS</translation>
    </message>
    <message>
        <source>&amp;Create new GPX layer</source>
        <translation>&amp;Utwórz nową warstwę GPX</translation>
    </message>
    <message>
        <source>Creates a new GPX layer and displays it on the map canvas</source>
        <translation>Tworzy nową warstwę GPX i pokazuje ją w oknie mapy</translation>
    </message>
    <message>
        <source>&amp;Gps</source>
        <translation>&amp;GPS</translation>
    </message>
    <message>
        <source>Save new GPX file as...</source>
        <translation>Zapisz nowy plik GPX jako...</translation>
    </message>
    <message>
        <source>GPS eXchange file (*.gpx)</source>
        <translation>plik wymiany z GPS (*.gpx)</translation>
    </message>
    <message>
        <source>Could not create file</source>
        <translation>Nie mogę utworzyć pliku</translation>
    </message>
    <message>
        <source>Unable to create a GPX file with the given name. </source>
        <translation>Nie mogę utworzyć plku GPX z nadaną nazwą. </translation>
    </message>
    <message>
        <source>Try again with another name or in another </source>
        <translation>Spróbuj ponownie z inną nazwą lub w innym</translation>
    </message>
    <message>
        <source>directory.</source>
        <translation>katalogu.</translation>
    </message>
    <message>
        <source>GPX Loader</source>
        <translation>Import GPX</translation>
    </message>
    <message>
        <source>Unable to read the selected file.
</source>
        <translation>Nie mogę odczytać zaznaczonego pliku.</translation>
    </message>
    <message>
        <source>Please reselect a valid file.</source>
        <translation>Zaznacz proszę prawidłowy plik.</translation>
    </message>
    <message>
        <source>Could not start process</source>
        <translation>Nie mogę uruchomić procesu</translation>
    </message>
    <message>
        <source>Could not start GPSBabel!</source>
        <translation>Nie mogę uruchomić GPSBabel!</translation>
    </message>
    <message>
        <source>Importing data...</source>
        <translation>Importuję dane...</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Anuluj</translation>
    </message>
    <message>
        <source>Could not import data from %1!

</source>
        <translation>Nie mogę zaimportować danych z %1!</translation>
    </message>
    <message>
        <source>Error importing data</source>
        <translation>Błąd pobierania danych</translation>
    </message>
    <message>
        <source>Not supported</source>
        <translation>Nieobsługiwane</translation>
    </message>
    <message>
        <source>This device does not support downloading </source>
        <translation>To urządzenie nie umożliwia pobierania danych</translation>
    </message>
    <message>
        <source>of </source>
        <translation>z</translation>
    </message>
    <message>
        <source>Downloading data...</source>
        <translation>Pobieram dane...</translation>
    </message>
    <message>
        <source>Could not download data from GPS!

</source>
        <translation>Nie mogę pobrać danych z GPS!

</translation>
    </message>
    <message>
        <source>Error downloading data</source>
        <translation>Błąd pobierania danych</translation>
    </message>
    <message>
        <source>This device does not support uploading of </source>
        <translation>To urządzenie nie umożliwia wgrywania </translation>
    </message>
    <message>
        <source>Uploading data...</source>
        <translation>Eksportuję dane...</translation>
    </message>
    <message>
        <source>Error while uploading data to GPS!

</source>
        <translation>Błąd podczas eksportowania danych do GPS!

</translation>
    </message>
    <message>
        <source>Error uploading data</source>
        <translation>Błąd eksportu danych</translation>
    </message>
    <message>
        <source>Could not convert data from %1!

</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error converting data</source>
        <translation>Błąd podczas konwersji danych</translation>
    </message>
</context>
<context>
    <name>QgsGPSPluginGui</name>
    <message>
        <source>Choose a filename to save under</source>
        <translation>Wybierz nazwę pliku pod jaką mam zapisać</translation>
    </message>
    <message>
        <source>GPS eXchange format (*.gpx)</source>
        <translation>Format wymiany z GPS (*.gpx)</translation>
    </message>
    <message>
        <source>Select GPX file</source>
        <translation>Wybierz plik GPX</translation>
    </message>
    <message>
        <source>Select file and format to import</source>
        <translation>Wybierz plik i format do zaimportowania </translation>
    </message>
    <message>
        <source>Waypoints</source>
        <translation type="unfinished">Punkty tras</translation>
    </message>
    <message>
        <source>Routes</source>
        <translation type="unfinished">Trasy</translation>
    </message>
    <message>
        <source>Tracks</source>
        <translation>Ślady</translation>
    </message>
    <message>
        <source>QGIS can perform conversions of GPX files, by using GPSBabel (%1) to perform the conversions.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This requires that you have GPSBabel installed where QGIS can find it.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select a GPX input file name, the type of conversion you want to perform, a GPX filename that you want to save the converted file as, and a name for the new layer created from the result.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>GPX is the %1, which is used to store information about waypoints, routes, and tracks.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>GPS eXchange file format</source>
        <translation type="unfinished"></translation>
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
</context>
<context>
    <name>QgsGPSPluginGuiBase</name>
    <message>
        <source>GPS Tools</source>
        <translation>Narzędzia GPS</translation>
    </message>
    <message>
        <source>Load GPX file</source>
        <translation>Załaduj plik GPX</translation>
    </message>
    <message>
        <source>File:</source>
        <translation>Plik:</translation>
    </message>
    <message>
        <source>Feature types:</source>
        <translation>Typy obiektów:</translation>
    </message>
    <message>
        <source>Waypoints</source>
        <translation>Punkty tras</translation>
    </message>
    <message>
        <source>Routes</source>
        <translation>Trasy</translation>
    </message>
    <message>
        <source>Tracks</source>
        <translation>Ślady</translation>
    </message>
    <message>
        <source>Import other file</source>
        <translation>Zaimportuj inny plik</translation>
    </message>
    <message>
        <source>File to import:</source>
        <translation>Plik do zaimportowania:</translation>
    </message>
    <message>
        <source>Feature type:</source>
        <translation>Typ obiektu:</translation>
    </message>
    <message>
        <source>GPX output file:</source>
        <translation>Wyjściowy plik GPX:</translation>
    </message>
    <message>
        <source>Layer name:</source>
        <translation>Nazwa warstwy:</translation>
    </message>
    <message>
        <source>Download from GPS</source>
        <translation>Pobierz z GPS</translation>
    </message>
    <message>
        <source>Edit devices</source>
        <translation>Edytuj urządzenia</translation>
    </message>
    <message>
        <source>GPS device:</source>
        <translation>Urządzenie GPS:</translation>
    </message>
    <message>
        <source>Output file:</source>
        <translation>Plik wyjściowy:</translation>
    </message>
    <message>
        <source>Port:</source>
        <translation>Port:</translation>
    </message>
    <message>
        <source>Upload to GPS</source>
        <translation>Załaduj do GPS</translation>
    </message>
    <message>
        <source>Data layer:</source>
        <translation>Warstwa danych:</translation>
    </message>
    <message>
        <source>Browse...</source>
        <translation>Przeglądaj...</translation>
    </message>
    <message>
        <source>Save As...</source>
        <translation>Zapisz jako...</translation>
    </message>
    <message>
        <source>(Note: Selecting correct file type in browser dialog important!)</source>
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
        <translation>Błąd - musisz określić typ danych.</translation>
    </message>
    <message>
        <source>GPS eXchange file</source>
        <translation>Plik wymiany GPS</translation>
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
        <translation type="obsolete">Nazwa</translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="obsolete">Typ</translation>
    </message>
</context>
<context>
    <name>QgsGeomTypeDialogBase</name>
    <message>
        <source>Type</source>
        <translation>Typ</translation>
    </message>
    <message>
        <source>Point</source>
        <translation>Punkt</translation>
    </message>
    <message>
        <source>Line</source>
        <translation>Linia</translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation>Poligon</translation>
    </message>
    <message>
        <source>New Vector Layer</source>
        <translation>Nowa warstwa wektorowa</translation>
    </message>
    <message>
        <source>Attributes:</source>
        <translation type="obsolete">Atrybuty:</translation>
    </message>
    <message>
        <source>Add</source>
        <translation>Dodaj</translation>
    </message>
    <message>
        <source>Column 1</source>
        <translation type="obsolete">Kolumna 1</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Usuń</translation>
    </message>
    <message>
        <source>File Format:</source>
        <translation type="obsolete">Format pliku:</translation>
    </message>
    <message>
        <source>File format</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Attributes</source>
        <translation type="unfinished">Atrybuty</translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="unfinished">Nazwa</translation>
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
        <translation>Wybiesz plik rastrowy</translation>
    </message>
    <message>
        <source>Raster files (*.*)</source>
        <translation>Rastry (*.*)</translation>
    </message>
    <message>
        <source>Error</source>
        <translation>Błąd</translation>
    </message>
    <message>
        <source>The selected file is not a valid raster file.</source>
        <translation>Wybrany plik nie jest prawidłowym plikiem rastrowym.</translation>
    </message>
    <message>
        <source>World file exists</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;p&gt;The selected file already seems to have a </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>world file! Do you want to replace it with the </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>new world file?&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsGeorefPluginGuiBase</name>
    <message>
        <source>Georeferencer</source>
        <translation type="unfinished">Georeferencer</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Zamknij</translation>
    </message>
    <message>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <source>Raster file:</source>
        <translation>Raster:</translation>
    </message>
    <message>
        <source>Arrange plugin windows</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Description...</source>
        <translation>Opis...</translation>
    </message>
</context>
<context>
    <name>QgsGeorefWarpOptionsDialog</name>
    <message>
        <source>unstable</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsGeorefWarpOptionsDialogBase</name>
    <message>
        <source>Warp options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Resampling method:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Nearest neighbour</source>
        <translation>Najbliższe sąsiedztwo</translation>
    </message>
    <message>
        <source>Linear</source>
        <translation>Liniowa</translation>
    </message>
    <message>
        <source>Cubic</source>
        <translation>Sześcienna</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Use 0 for transparency when needed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Compression:</source>
        <translation>Kompresja:</translation>
    </message>
</context>
<context>
    <name>QgsGraduatedSymbolDialog</name>
    <message>
        <source>Equal Interval</source>
        <translation>Równe przedziały</translation>
    </message>
    <message>
        <source>Quantiles</source>
        <translation>Kwantyle</translation>
    </message>
    <message>
        <source>Empty</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsGraduatedSymbolDialogBase</name>
    <message>
        <source>graduated Symbol</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Classification Field:</source>
        <translation type="obsolete">Pole klasyfikacji:</translation>
    </message>
    <message>
        <source>Mode:</source>
        <translation type="obsolete">Tryb:</translation>
    </message>
    <message>
        <source>Number of Classes:</source>
        <translation type="obsolete">Liczba klas:</translation>
    </message>
    <message>
        <source>Delete class</source>
        <translation>Usuń klasę</translation>
    </message>
    <message>
        <source>Classify</source>
        <translation>Klasyfikuj</translation>
    </message>
    <message>
        <source>Classification field</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mode</source>
        <translation type="unfinished">Tryb</translation>
    </message>
    <message>
        <source>Number of classes</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsGrassAttributes</name>
    <message>
        <source>Warning</source>
        <translation>Ostrzeżenie</translation>
    </message>
    <message>
        <source>Column</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Wartość</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Typ</translation>
    </message>
    <message>
        <source>ERROR</source>
        <translation>BŁĄD</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Layer</source>
        <translation>Warstwa</translation>
    </message>
</context>
<context>
    <name>QgsGrassAttributesBase</name>
    <message>
        <source>GRASS Attributes</source>
        <translation>Atrybuty GRASS</translation>
    </message>
    <message>
        <source>Tab 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>result</source>
        <translation>wynik</translation>
    </message>
    <message>
        <source>Update</source>
        <translation>Aktualizuj</translation>
    </message>
    <message>
        <source>Update database record</source>
        <translation>Aktualizuj rekord w bazie danych</translation>
    </message>
    <message>
        <source>New</source>
        <translation>Nowy</translation>
    </message>
    <message>
        <source>Add new category using settings in GRASS Edit toolbox</source>
        <translation>Dodaj nową kategorię używając ustawień w GRASS Edit toolbox</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Usuń</translation>
    </message>
    <message>
        <source>Delete selected category</source>
        <translation>Usuń wybraną kategorię</translation>
    </message>
</context>
<context>
    <name>QgsGrassBrowser</name>
    <message>
        <source>Tools</source>
        <translation>Narzędzia</translation>
    </message>
    <message>
        <source>Add selected map to canvas</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Copy selected map</source>
        <translation>Kopiuj zaznaczoną mapę</translation>
    </message>
    <message>
        <source>Rename selected map</source>
        <translation>Zmień nazwę zaznaczonej mapy</translation>
    </message>
    <message>
        <source>Delete selected map</source>
        <translation>Usuń zaznaczoną mapę</translation>
    </message>
    <message>
        <source>Set current region to selected map</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Refresh</source>
        <translation>Odśwież</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Ostrzeżenie</translation>
    </message>
    <message>
        <source>Cannot copy map </source>
        <translation>Nie mogę skopiować mapy</translation>
    </message>
    <message>
        <source>&lt;br&gt;command: </source>
        <translation>&lt;br&gt;komenda: </translation>
    </message>
    <message>
        <source>Cannot rename map </source>
        <translation>Nie mogę zmienić nazwy mapy</translation>
    </message>
    <message>
        <source>Delete map &lt;b&gt;</source>
        <translation>Usuń mapę &lt;b&gt;</translation>
    </message>
    <message>
        <source>Cannot delete map </source>
        <translation>Nie mogę usunąć mapy</translation>
    </message>
    <message>
        <source>Cannot write new region</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New name</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsGrassEdit</name>
    <message>
        <source>New point</source>
        <translation>Nowy punkt</translation>
    </message>
    <message>
        <source>New centroid</source>
        <translation>Nowy centroid</translation>
    </message>
    <message>
        <source>Delete vertex</source>
        <translation>Usuń wierzchołek</translation>
    </message>
    <message>
        <source>Left: </source>
        <translation>Lewy: </translation>
    </message>
    <message>
        <source>Middle: </source>
        <translation>Środkowy: </translation>
    </message>
    <message>
        <source>Edit tools</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New line</source>
        <translation>Nowa linia</translation>
    </message>
    <message>
        <source>New boundary</source>
        <translation>Nowy zasięg</translation>
    </message>
    <message>
        <source>Move vertex</source>
        <translation>Przesuń wierzchołek</translation>
    </message>
    <message>
        <source>Add vertex</source>
        <translation>Dodaj wierzchołek</translation>
    </message>
    <message>
        <source>Move element</source>
        <translation>Przesuń element</translation>
    </message>
    <message>
        <source>Split line</source>
        <translation>Podziel linię</translation>
    </message>
    <message>
        <source>Delete element</source>
        <translation>Usuń element</translation>
    </message>
    <message>
        <source>Edit attributes</source>
        <translation>Edytuj atrybuty</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Zamknij</translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Ostrzeżenie</translation>
    </message>
    <message>
        <source>You are not owner of the mapset, cannot open the vector for editing.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot open vector for update.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Info</source>
        <translation>Informacje</translation>
    </message>
    <message>
        <source>The table was created</source>
        <translation>Tabela została stworzona</translation>
    </message>
    <message>
        <source>Tool not yet implemented.</source>
        <translation>Narzędzie jeszcze niedostępne.</translation>
    </message>
    <message>
        <source>Cannot check orphan record: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Orphan record was left in attribute table. &lt;br&gt;Delete the record?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot delete orphan record: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot describe table for field </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Background</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Highlight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dynamic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Point</source>
        <translation type="unfinished">Punkt</translation>
    </message>
    <message>
        <source>Line</source>
        <translation type="unfinished">Linia</translation>
    </message>
    <message>
        <source>Boundary (no area)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Boundary (1 area)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Boundary (2 areas)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Centroid (in area)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Centroid (outside area)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Centroid (duplicate in area)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Node (1 line)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Node (2 lines)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Disp</source>
        <comment>Column title</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color</source>
        <comment>


Column title</comment>
        <translation type="obsolete">Kolor</translation>
    </message>
    <message>
        <source>Type</source>
        <comment>


Column title</comment>
        <translation type="obsolete">Typ</translation>
    </message>
    <message>
        <source>Index</source>
        <comment>


Column title</comment>
        <translation type="obsolete">Indeks</translation>
    </message>
    <message>
        <source>Column</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Type</source>
        <translation type="unfinished">Typ</translation>
    </message>
    <message>
        <source>Length</source>
        <translation type="unfinished">Długość</translation>
    </message>
    <message>
        <source>Next not used</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Manual entry</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No category</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Right: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color</source>
        <comment>Column title</comment>
        <translation type="unfinished">Kolor</translation>
    </message>
    <message>
        <source>Type</source>
        <comment>Column title</comment>
        <translation type="unfinished">Typ</translation>
    </message>
    <message>
        <source>Index</source>
        <comment>Column title</comment>
        <translation type="unfinished">Indeks</translation>
    </message>
</context>
<context>
    <name>QgsGrassEditBase</name>
    <message>
        <source>GRASS Edit</source>
        <translation>Edytor GRASS</translation>
    </message>
    <message>
        <source>Category</source>
        <translation>Kategoria</translation>
    </message>
    <message>
        <source>Mode</source>
        <translation>Tryb</translation>
    </message>
    <message>
        <source>Settings</source>
        <translation>Ustawienia</translation>
    </message>
    <message>
        <source>Snapping in screen pixels</source>
        <translation>Dociąganie w pikselach ekranowych</translation>
    </message>
    <message>
        <source>Symbology</source>
        <translation>Symblika</translation>
    </message>
    <message>
        <source>Column 1</source>
        <translation>Kolumna 1</translation>
    </message>
    <message>
        <source>Table</source>
        <translation>Tabela</translation>
    </message>
    <message>
        <source>Add Column</source>
        <translation>Dodaj kolumnę</translation>
    </message>
    <message>
        <source>Create / Alter Table</source>
        <translation>Utwórz / Zmień tabelę</translation>
    </message>
    <message>
        <source>Line width</source>
        <translation>Szerokość linii</translation>
    </message>
    <message>
        <source>Marker size</source>
        <translation>Rozmiar markera</translation>
    </message>
    <message>
        <source>Layer</source>
        <translation type="unfinished">Warstwa</translation>
    </message>
</context>
<context>
    <name>QgsGrassElementDialog</name>
    <message>
        <source>Cancel</source>
        <translation type="unfinished">Anuluj</translation>
    </message>
    <message>
        <source>Ok</source>
        <translation type="unfinished">OK</translation>
    </message>
    <message>
        <source>&lt;font color=&apos;red&apos;&gt;Enter a name!&lt;/font&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;font color=&apos;red&apos;&gt;This is name of the source!&lt;/font&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;font color=&apos;red&apos;&gt;Exists!&lt;/font&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Overwrite</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsGrassMapcalc</name>
    <message>
        <source>Mapcalc tools</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add map</source>
        <translation>Dodaj mapę</translation>
    </message>
    <message>
        <source>Add constant value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add operator or function</source>
        <translation>Dodaj operator lub funkcję</translation>
    </message>
    <message>
        <source>Add connection</source>
        <translation>Dodaj połączenie</translation>
    </message>
    <message>
        <source>Select item</source>
        <translation>Zaznacz obiekt</translation>
    </message>
    <message>
        <source>Delete selected item</source>
        <translation>Usuń zaznaczony obiekt</translation>
    </message>
    <message>
        <source>Open</source>
        <translation>Otwórz</translation>
    </message>
    <message>
        <source>Save</source>
        <translation>Zapisz</translation>
    </message>
    <message>
        <source>Save as</source>
        <translation>Zapisz jako</translation>
    </message>
    <message>
        <source>Addition</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Subtraction</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Multiplication</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Division</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Modulus</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Exponentiation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Equal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Not equal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Greater than</source>
        <translation>Większy niż</translation>
    </message>
    <message>
        <source>Greater than or equal</source>
        <translation>Większy niż lub równy</translation>
    </message>
    <message>
        <source>Less than</source>
        <translation>Mniejszy niż</translation>
    </message>
    <message>
        <source>Less than or equal</source>
        <translation>Mniejszy niż lub równy</translation>
    </message>
    <message>
        <source>And</source>
        <translation>I</translation>
    </message>
    <message>
        <source>Or</source>
        <translation>Lub</translation>
    </message>
    <message>
        <source>Absolute value of x</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Inverse tangent of x (result is in degrees)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Inverse tangent of y/x (result is in degrees)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Current column of moving window (starts with 1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cosine of x (x is in degrees)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Convert x to double-precision floating point</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Current east-west resolution</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Exponential function of x</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>x to the power y</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Convert x to single-precision floating point</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Decision: 1 if x not zero, 0 otherwise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Decision: a if x not zero, 0 otherwise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Decision: a if x not zero, b otherwise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Decision: a if x &gt; 0, b if x is zero, c if x &lt; 0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Convert x to integer [ truncates ]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Check if x = NULL</source>
        <translation>Sprawdź czy x = NULL</translation>
    </message>
    <message>
        <source>Natural log of x</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Log of x base b</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Largest value</source>
        <translation>Największa wartość</translation>
    </message>
    <message>
        <source>Median value</source>
        <translation>Średnia wartość</translation>
    </message>
    <message>
        <source>Smallest value</source>
        <translation>Najniższa wartość</translation>
    </message>
    <message>
        <source>Mode value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>1 if x is zero, 0 otherwise</source>
        <translation>1 jeśli x jest zerem, w przeciwnym razie 0</translation>
    </message>
    <message>
        <source>Current north-south resolution</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>NULL value</source>
        <translation>wartość NULL</translation>
    </message>
    <message>
        <source>Random value between a and b</source>
        <translation>Losowa wartość między a i b</translation>
    </message>
    <message>
        <source>Round x to nearest integer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Current row of moving window (Starts with 1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Sine of x (x is in degrees)</source>
        <comment>sin(x)</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Square root of x</source>
        <comment>sqrt(x)</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Tangent of x (x is in degrees)</source>
        <comment>tan(x)</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Current x-coordinate of moving window</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Current y-coordinate of moving window</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Ostrzeżenie</translation>
    </message>
    <message>
        <source>Cannot get current region</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot check region of map </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot get region of map </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No GRASS raster maps currently in QGIS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot create &apos;mapcalc&apos; directory in current mapset.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New mapcalc</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enter new mapcalc name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enter vector name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The file already exists. Overwrite? </source>
        <translation>Plik istnieje. Nadpisać? </translation>
    </message>
    <message>
        <source>Save mapcalc</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>File name empty</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot open mapcalc file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The mapcalc schema (</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>) not found.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot open mapcalc schema (</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot read mapcalc schema (</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>
at line </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> column </source>
        <translation>kolumna</translation>
    </message>
    <message>
        <source>Output</source>
        <translation type="unfinished">Wyjście</translation>
    </message>
</context>
<context>
    <name>QgsGrassMapcalcBase</name>
    <message>
        <source>MainWindow</source>
        <translation type="unfinished">Okno główne</translation>
    </message>
    <message>
        <source>Output</source>
        <translation type="unfinished">Wyjście</translation>
    </message>
</context>
<context>
    <name>QgsGrassModule</name>
    <message>
        <source>Run</source>
        <translation>Uruchom</translation>
    </message>
    <message>
        <source>Stop</source>
        <translation>Zatrzymaj</translation>
    </message>
    <message>
        <source>Module</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Ostrzeżenie</translation>
    </message>
    <message>
        <source>The module file (</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>) not found.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot open module file (</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot read module file (</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>):
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>
at line </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Module </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> not found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot find man page </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Not available, cannot open description (</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> column </source>
        <translation type="unfinished">kolumna</translation>
    </message>
    <message>
        <source>Not available, incorrect description (</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot get input region</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use Input Region</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot find module </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot start module: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;B&gt;Successfully finished&lt;/B&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;B&gt;Finished with error&lt;/B&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;B&gt;Module crashed or killed&lt;/B&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Not available, description not found (</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleBase</name>
    <message>
        <source>GRASS Module</source>
        <translation>Moduł GRASS</translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Opcje</translation>
    </message>
    <message>
        <source>Output</source>
        <translation>Wyjście</translation>
    </message>
    <message>
        <source>Manual</source>
        <translation>Podręcznik</translation>
    </message>
    <message>
        <source>Run</source>
        <translation type="unfinished">Uruchom</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Zamknij</translation>
    </message>
    <message>
        <source>View output</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>TextLabel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleField</name>
    <message>
        <source>Attribute field</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleFile</name>
    <message>
        <source>File</source>
        <translation type="unfinished">Plik</translation>
    </message>
    <message>
        <source>:&amp;nbsp;missing value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>:&amp;nbsp;directory does not exist</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleGdalInput</name>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Ostrzeżenie</translation>
    </message>
    <message>
        <source>Cannot find layeroption </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>PostGIS driver in OGR does not support schemas!&lt;br&gt;Only the table name will be used.&lt;br&gt;It can result in wrong input if more tables of the same name&lt;br&gt;are present in the database.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>:&amp;nbsp;no input</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot find whereoption </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleInput</name>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Ostrzeżenie</translation>
    </message>
    <message>
        <source>Cannot find typeoption </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot find values for typeoption </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot find layeroption </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>GRASS element </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> not supported</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use region of this map</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>:&amp;nbsp;no input</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleOption</name>
    <message>
        <source>:&amp;nbsp;missing value</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleSelection</name>
    <message>
        <source>Attribute field</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsGrassModuleStandardOptions</name>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Ostrzeżenie</translation>
    </message>
    <message>
        <source>Cannot find module </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot start module </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot read module description (</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>):
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>
at line </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> column </source>
        <translation type="unfinished">kolumna</translation>
    </message>
    <message>
        <source>Cannot find key </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Item with id </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> not found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot get current region</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot check region of map </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot set region of map </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsGrassNewMapset</name>
    <message>
        <source>GRASS database</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>GRASS location</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Projection</source>
        <translation type="unfinished">Układ współrzędnych</translation>
    </message>
    <message>
        <source>Default GRASS Region</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mapset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create New Mapset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Tree</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Comment</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Database</source>
        <translation type="unfinished">Baza danych</translation>
    </message>
    <message>
        <source>Location 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>User&apos;s mapset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>System mapset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Location 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Owner</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enter path to GRASS database</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The directory doesn&apos;t exist!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No writable locations, the database not writable!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enter location name!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The location exists!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Selected projection is not supported by GRASS!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Ostrzeżenie</translation>
    </message>
    <message>
        <source>Cannot create projection.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot reproject previously set region, default region set.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>North must be greater than south</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>East must be greater than west</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Regions file (</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>) not found.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot open locations file (</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot read locations file (</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>):
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>
at line </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> column </source>
        <translation type="unfinished">kolumna</translation>
    </message>
    <message>
        <source>Cannot create QgsSpatialRefSys</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot reproject selected region.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot reproject region</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Enter mapset name.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The mapset already exists</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Database: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Location: </source>
        <translation type="unfinished">Lokalizacja: </translation>
    </message>
    <message>
        <source>Mapset: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create location</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot create new location: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create mapset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot open DEFAULT_WIND</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot open WIND</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New mapset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New mapset successfully created, but cannot be opened: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New mapset successfully created and set as current working mapset.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot create new mapset directory</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsGrassNewMapsetBase</name>
    <message>
        <source>Column 1</source>
        <translation>Kolumna 1</translation>
    </message>
    <message>
        <source>Example directory tree:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;/head&gt;&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;GRASS data are stored in tree directory structure.&lt;/p&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;The GRASS database is the top-level directory in this tree structure.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Database Error</source>
        <translation>Błąd bazy danych</translation>
    </message>
    <message>
        <source>Database:</source>
        <translation>Baza danych:</translation>
    </message>
    <message>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <source>Select existing directory or create a new one:</source>
        <translation>Wybierz istniejący katalog lub utwórz nowy:</translation>
    </message>
    <message>
        <source>Location</source>
        <translation type="unfinished">Lokalizacja</translation>
    </message>
    <message>
        <source>Select location</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create new location</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Location Error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;/head&gt;&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;The GRASS location is a collection of maps for a particular territory or project.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Projection Error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Coordinate system</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Projection</source>
        <translation type="unfinished">Układ współrzędnych</translation>
    </message>
    <message>
        <source>Not defined</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;/head&gt;&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;The GRASS region defines a workspace for raster modules. The default region is valid for one location. It is possible to set a different region in each mapset. &lt;/p&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;It is possible to change the default location region later.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set current QGIS extent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Set</source>
        <translation type="unfinished">Ustaw</translation>
    </message>
    <message>
        <source>Region Error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>S</source>
        <translation>S</translation>
    </message>
    <message>
        <source>W</source>
        <translation>W</translation>
    </message>
    <message>
        <source>E</source>
        <translation>E</translation>
    </message>
    <message>
        <source>N</source>
        <translation>N</translation>
    </message>
    <message>
        <source>New mapset:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mapset Error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;p align=&quot;center&quot;&gt;Existing masets&lt;/p&gt;</source>
        <translation type="unfinished">&lt;p align=&quot;center&quot;&gt;Istniejące mapsety&lt;/p&gt;</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;/head&gt;&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;The GRASS mapset is a collection of maps used by one user. &lt;/p&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;A user can read maps from all mapsets in the location but &lt;/p&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;he can open for writing only his mapset (owned by user).&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Location:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mapset:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsGrassPlugin</name>
    <message>
        <source>GRASS</source>
        <translation>GRASS</translation>
    </message>
    <message>
        <source>&amp;GRASS</source>
        <translation>&amp;GRASS</translation>
    </message>
    <message>
        <source>Open mapset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New mapset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Close mapset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add GRASS vector layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add GRASS raster layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Open GRASS tools</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Display Current Grass Region</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit Current Grass Region</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit Grass Vector layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Adds a GRASS vector layer to the map canvas</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Adds a GRASS raster layer to the map canvas</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Displays the current GRASS region as a rectangle on the map canvas</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit the current GRASS region</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Edit the currently selected GRASS vector layer.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>GrassVector</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>0.1</source>
        <translation type="unfinished">0.1</translation>
    </message>
    <message>
        <source>GRASS layer</source>
        <translation type="unfinished">Warstwa GRASS</translation>
    </message>
    <message>
        <source>Create new Grass Vector</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Ostrzeżenie</translation>
    </message>
    <message>
        <source>GRASS Edit is already running.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New vector name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot create new vector: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>New vector created but cannot be opened by data provider.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot start editing.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>GISDBASE, LOCATION_NAME or MAPSET is not set, cannot display current region.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot read current region: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot open the mapset. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot close mapset. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot close current mapset. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot open GRASS mapset. </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsGrassRegion</name>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Ostrzeżenie</translation>
    </message>
    <message>
        <source>GISDBASE, LOCATION_NAME or MAPSET is not set, cannot display current region.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot read current region: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot write region</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsGrassRegionBase</name>
    <message>
        <source>GRASS Region Settings</source>
        <translation>Ustawienia regionu GRASS</translation>
    </message>
    <message>
        <source>N</source>
        <translation>N</translation>
    </message>
    <message>
        <source>W</source>
        <translation>W</translation>
    </message>
    <message>
        <source>E</source>
        <translation>E</translation>
    </message>
    <message>
        <source>S</source>
        <translation>S</translation>
    </message>
    <message>
        <source>N-S Res</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rows</source>
        <translation>Rekordy</translation>
    </message>
    <message>
        <source>Cols</source>
        <translation>Kolumny</translation>
    </message>
    <message>
        <source>E-W Res</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color</source>
        <translation>Kolor</translation>
    </message>
    <message>
        <source>Width</source>
        <translation>Szerokość</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Anuluj</translation>
    </message>
</context>
<context>
    <name>QgsGrassSelect</name>
    <message>
        <source>Select GRASS Vector Layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select GRASS Raster Layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select GRASS mapcalc schema</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select GRASS Mapset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Ostrzeżenie</translation>
    </message>
    <message>
        <source>Cannot open vector on level 2 (topology not available).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose existing GISDBASE</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Wrong GISDBASE, no locations available.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Wrong GISDBASE</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Select a map.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No map</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No layers available in this map</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsGrassSelectBase</name>
    <message>
        <source>Add GRASS Layer</source>
        <translation>Dodaj warstwę GRASS</translation>
    </message>
    <message>
        <source>Gisdbase</source>
        <translation type="unfinished">Gisdbase</translation>
    </message>
    <message>
        <source>Location</source>
        <translation>Położenie</translation>
    </message>
    <message>
        <source>Mapset</source>
        <translation type="unfinished">Mapset</translation>
    </message>
    <message>
        <source>Select or type map name (wildcards &apos;*&apos; and &apos;?&apos; accepted for rasters)</source>
        <translation>Wybierz lub wpisz nazwę mapy (znaki wieloznaczne &apos;*&apos; i &apos;?&apos; akceptowane są dla rastrów)</translation>
    </message>
    <message>
        <source>Map name</source>
        <translation>Nazwa mapy</translation>
    </message>
    <message>
        <source>Layer</source>
        <translation>Warstwa</translation>
    </message>
    <message>
        <source>Browse</source>
        <translation>Przeglądaj</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Anuluj</translation>
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
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Close</source>
        <translation type="unfinished">Zamknij</translation>
    </message>
</context>
<context>
    <name>QgsGrassTools</name>
    <message>
        <source>Modules</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Browser</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>GRASS Tools</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>GRASS Tools: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Warning</source>
        <translation type="unfinished">Ostrzeżenie</translation>
    </message>
    <message>
        <source>Cannot find MSYS (</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>GRASS Shell is not compiled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The config file (</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>) not found.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot open config file (</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cannot read config file (</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>
at line </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> column </source>
        <translation type="unfinished">kolumna</translation>
    </message>
</context>
<context>
    <name>QgsGridMakerPlugin</name>
    <message>
        <source>&amp;Graticule Creator</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Creates a graticule (grid) and stores the result as a shapefile</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Graticules</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsGridMakerPluginGui</name>
    <message>
        <source>Choose a filename to save under</source>
        <translation type="unfinished">Wybierz nazwę pliku pod jaką mam zapisać</translation>
    </message>
    <message>
        <source>ESRI Shapefile (*.shp)</source>
        <translation type="unfinished">Pliki ESRI shape (*.shp)</translation>
    </message>
    <message>
        <source>QGIS - Grid Maker</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Please enter the file name before pressing OK!</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsGridMakerPluginGuiBase</name>
    <message>
        <source>Graticule Builder</source>
        <translation>Generator siatki kartograficznej</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Typ</translation>
    </message>
    <message>
        <source>Point</source>
        <translation>Punkt</translation>
    </message>
    <message>
        <source>Polygon</source>
        <translation>Poligon</translation>
    </message>
    <message>
        <source>Origin (lower left)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>End point (upper right)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Output (shape) file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save As...</source>
        <translation type="unfinished">Zapisz jako...</translation>
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
        <source>Quantum GIS Help - </source>
        <translation>Pomoc Quantum GIS - </translation>
    </message>
    <message>
        <source>Failed to get the help text from the database</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error</source>
        <translation>Błąd</translation>
    </message>
    <message>
        <source>The QGIS help database is not installed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This help file does not exist for your language</source>
        <translation>Plik pomocy dla Twojego języka nie istnieje</translation>
    </message>
    <message>
        <source>If you would like to create it, contact the QGIS development team</source>
        <translation>Jeśli chciałbyś go stworzyć skontaktuj się z zespołem twórców QGIS</translation>
    </message>
    <message>
        <source>Quantum GIS Help</source>
        <translation>Pomoc Quantum GIS</translation>
    </message>
</context>
<context>
    <name>QgsHelpViewerBase</name>
    <message>
        <source>QGIS Help</source>
        <translation>Pomoc QGIS</translation>
    </message>
    <message>
        <source>&amp;Home</source>
        <translation>&amp;Początek</translation>
    </message>
    <message>
        <source>Alt+H</source>
        <translation>Alt+H</translation>
    </message>
    <message>
        <source>&amp;Forward</source>
        <translation>&amp;Naprzód</translation>
    </message>
    <message>
        <source>Alt+F</source>
        <translation>Alt+F</translation>
    </message>
    <message>
        <source>&amp;Back</source>
        <translation>&amp;Wstecz</translation>
    </message>
    <message>
        <source>Alt+B</source>
        <translation>Alt+B</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation>&amp;Zamknij</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation>Alt+C</translation>
    </message>
</context>
<context>
    <name>QgsHttpTransaction</name>
    <message>
        <source>WMS Server responded unexpectedly with HTTP Status Code %1 (%2)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>HTTP response completed, however there was an error: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>HTTP transaction completed, however there was an error: %1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsIdentifyResults</name>
    <message>
        <source>Identify Results - </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Feature</source>
        <translation>Obiekt</translation>
    </message>
    <message>
        <source>Value</source>
        <translation>Wartość</translation>
    </message>
    <message>
        <source>Run action</source>
        <translation>Uruchom akcję</translation>
    </message>
    <message>
        <source>(Derived)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsIdentifyResultsBase</name>
    <message>
        <source>Identify Results</source>
        <translation>Wynik identyfikacji</translation>
    </message>
    <message>
        <source>Help</source>
        <translation>Pomoc</translation>
    </message>
    <message>
        <source>F1</source>
        <translation>F1</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Zamknij</translation>
    </message>
</context>
<context>
    <name>QgsLUDialogBase</name>
    <message>
        <source>Enter class bounds</source>
        <translation>Podaj przedział klasy</translation>
    </message>
    <message>
        <source>Lower value</source>
        <translation>Niższa wartość</translation>
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
        <translation>Anuluj</translation>
    </message>
    <message>
        <source>Upper value</source>
        <translation>Wyższa wartość</translation>
    </message>
</context>
<context>
    <name>QgsLabelDialogBase</name>
    <message>
        <source>Form1</source>
        <translation>Form1</translation>
    </message>
    <message>
        <source>Field containing label:</source>
        <translation>Pole dla etykiety:</translation>
    </message>
    <message>
        <source>Default label:</source>
        <translation>Domyślna etykieta:</translation>
    </message>
    <message>
        <source>Font Style</source>
        <translation>Styl czcionki</translation>
    </message>
    <message>
        <source>Font</source>
        <translation>Czcionka</translation>
    </message>
    <message>
        <source>Points</source>
        <translation>punktach</translation>
    </message>
    <message>
        <source>Map units</source>
        <translation>jednostkach mapy</translation>
    </message>
    <message>
        <source>%</source>
        <translation>%</translation>
    </message>
    <message>
        <source>Transparency:</source>
        <translation>Przezroczystość:</translation>
    </message>
    <message>
        <source>Colour</source>
        <translation>Kolor</translation>
    </message>
    <message>
        <source>Above</source>
        <translation>Powyżej</translation>
    </message>
    <message>
        <source>Over</source>
        <translation>Nad</translation>
    </message>
    <message>
        <source>Left</source>
        <translation>Z lewej</translation>
    </message>
    <message>
        <source>Below</source>
        <translation>Poniżej</translation>
    </message>
    <message>
        <source>Right</source>
        <translation>Z prawej</translation>
    </message>
    <message>
        <source>Above Right</source>
        <translation>Górny prawy</translation>
    </message>
    <message>
        <source>Below Right</source>
        <translation>Dolny prawy</translation>
    </message>
    <message>
        <source>Above Left</source>
        <translation>Górny lewy</translation>
    </message>
    <message>
        <source>Below Left</source>
        <translation>Dolny lewy</translation>
    </message>
    <message>
        <source>Angle (deg):</source>
        <translation>Kąt (stopnie):</translation>
    </message>
    <message>
        <source>&#xb0;</source>
        <translation type="obsolete">°</translation>
    </message>
    <message>
        <source>Buffer Labels?</source>
        <translation>Buforować etykiety?</translation>
    </message>
    <message>
        <source>Size:</source>
        <translation>Rozmiar:</translation>
    </message>
    <message>
        <source>Size is in map units</source>
        <translation>jednostkach mapy</translation>
    </message>
    <message>
        <source>Size is in points</source>
        <translation>punktach</translation>
    </message>
    <message>
        <source>Position</source>
        <translation>Pozycja</translation>
    </message>
    <message>
        <source>X Offset (pts):</source>
        <translation>Przesunięcie X (pts):</translation>
    </message>
    <message>
        <source>Y Offset (pts):</source>
        <translation>Przesunięcie Y (pts):</translation>
    </message>
    <message>
        <source>Data Defined Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Font family:</source>
        <translation>Krój &amp;czcionki:</translation>
    </message>
    <message>
        <source>&amp;Italic:</source>
        <translation>&amp;Kursywa:</translation>
    </message>
    <message>
        <source>&amp;Underline:</source>
        <translation>&amp;Podkreślona:</translation>
    </message>
    <message>
        <source>&amp;Bold:</source>
        <translation>Pogru&amp;biona:</translation>
    </message>
    <message>
        <source>&amp;Size:</source>
        <translation>&amp;Rozmiar:</translation>
    </message>
    <message>
        <source>Placement:</source>
        <translation>Umiejscowienie:</translation>
    </message>
    <message>
        <source>X Coordinate:</source>
        <translation>Współrzędna X:</translation>
    </message>
    <message>
        <source>Y Coordinate:</source>
        <translation>Współrzędna Y:</translation>
    </message>
    <message>
        <source>Preview:</source>
        <translation>Podgląd:</translation>
    </message>
    <message>
        <source>QGIS Rocks!</source>
        <translation>QGIS rządzi!</translation>
    </message>
    <message>
        <source>Font size units</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Font Alignment</source>
        <translation>Wyrównanie</translation>
    </message>
    <message>
        <source>Placement</source>
        <translation>Umiejscowienie</translation>
    </message>
    <message>
        <source>Buffer</source>
        <translation type="unfinished">Bufor</translation>
    </message>
    <message>
        <source>Buffer size units</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Offset units</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Data Defined Alignment</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Data Defined Buffer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Data Defined Position</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Source</source>
        <translation>Żródło</translation>
    </message>
    <message>
        <source>Size Units:</source>
        <translation type="unfinished"></translation>
    </message>
    <message encoding="UTF-8">
        <source>°</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsLayerProjectionSelector</name>
    <message>
        <source>Define this layer&apos;s projection:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This layer appears to have no projection specification.</source>
        <translation type="unfinished"></translation>
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
        <translation type="unfinished"></translation>
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
        <translation>grupa</translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation>&amp;Usuń</translation>
    </message>
    <message>
        <source>&amp;Make to toplevel item</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Re&amp;name</source>
        <translation>Zmień &amp;nazwę</translation>
    </message>
    <message>
        <source>&amp;Add group</source>
        <translation>Dod&amp;aj grupę</translation>
    </message>
    <message>
        <source>&amp;Expand all</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Collapse all</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show file groups</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No Layer Selected</source>
        <translation type="unfinished">Nie wybrano warstwy</translation>
    </message>
    <message>
        <source>To open an attribute table, you must select a vector layer in the legend</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsLegendLayer</name>
    <message>
        <source>&amp;Zoom to layer extent</source>
        <translation type="unfinished">Powięks&amp;z do zasięgu warstwy</translation>
    </message>
    <message>
        <source>&amp;Zoom to best scale (100%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Show in overview</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation type="unfinished">&amp;Usuń</translation>
    </message>
    <message>
        <source>&amp;Open attribute table</source>
        <translation type="unfinished">&amp;Otwórz tabelę atrybutów</translation>
    </message>
    <message>
        <source>Save as shapefile...</source>
        <translation type="unfinished">Zapisz jako shapefile...</translation>
    </message>
    <message>
        <source>Save selection as shapefile...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Properties</source>
        <translation type="unfinished">&amp;Właściwości</translation>
    </message>
    <message>
        <source>More layers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>This item contains more layer files. Displaying more layers in table is not supported.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsLegendLayerFile</name>
    <message>
        <source>Attribute table - </source>
        <translation type="unfinished">Tabela atrybutów - </translation>
    </message>
    <message>
        <source>Save layer as...</source>
        <translation type="unfinished">Zapisz warstwę jako...</translation>
    </message>
    <message>
        <source>Start editing failed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Provider cannot be opened for editing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Stop editing</source>
        <translation type="unfinished">Zakończ edycję</translation>
    </message>
    <message>
        <source>Do you want to save the changes?</source>
        <translation type="unfinished">Czy chcesz zapisać zmiany?</translation>
    </message>
    <message>
        <source>Error</source>
        <translation type="unfinished">Błąd</translation>
    </message>
    <message>
        <source>Could not commit changes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Problems during roll back</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Not a vector layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>To open an attribute table, you must select a vector layer in the legend</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Saving done</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Export to Shapefile has been completed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Driver not found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>ESRI Shapefile driver is not available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error creating shapefile</source>
        <translation type="unfinished">Błąd tworzenia pliku shape</translation>
    </message>
    <message>
        <source>The shapefile could not be created (</source>
        <translation type="unfinished">Plik shape nie może być utworzony (</translation>
    </message>
    <message>
        <source>Layer creation failed</source>
        <translation type="unfinished">Błąd tworzenia warstwy</translation>
    </message>
    <message>
        <source>&amp;Zoom to layer extent</source>
        <translation type="unfinished">Powięks&amp;z do zasięgu warstwy</translation>
    </message>
    <message>
        <source>&amp;Show in overview</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Remove</source>
        <translation type="unfinished">&amp;Usuń</translation>
    </message>
    <message>
        <source>&amp;Open attribute table</source>
        <translation type="unfinished">&amp;Otwórz tabelę atrybutów</translation>
    </message>
    <message>
        <source>Save as shapefile...</source>
        <translation type="unfinished">Zapisz jako shapefile...</translation>
    </message>
    <message>
        <source>Save selection as shapefile...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Properties</source>
        <translation type="unfinished">&amp;Właściwości</translation>
    </message>
    <message>
        <source>bad_alloc exception</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Filling the attribute table has been stopped because there was no more virtual memory left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Layer attribute table contains unsupported datatype(s)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsLineStyleDialogBase</name>
    <message>
        <source>Select a line style</source>
        <translation>Wybierz styl linii</translation>
    </message>
    <message>
        <source>Styles</source>
        <translation>Style</translation>
    </message>
    <message>
        <source>Ok</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Anuluj</translation>
    </message>
</context>
<context>
    <name>QgsLineStyleWidgetBase</name>
    <message>
        <source>Form2</source>
        <translation>Form2</translation>
    </message>
    <message>
        <source>Outline Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Width:</source>
        <translation>Szerokość:</translation>
    </message>
    <message>
        <source>Colour:</source>
        <translation>Kolor:</translation>
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
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>because</source>
        <translation type="unfinished"> ponieważ</translation>
    </message>
</context>
<context>
    <name>QgsMapLayer</name>
    <message>
        <source> Check file permissions and retry.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsMapToolIdentify</name>
    <message>
        <source>No features found</source>
        <translation>Nie znaleziono obiektów</translation>
    </message>
    <message>
        <source>&lt;p&gt;No features were found within the search radius. Note that it is currently not possible to use the identify tool on unsaved features.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>(clicked coordinate)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>WMS identify result for %1
%2</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsMapToolSplitFeatures</name>
    <message>
        <source>Split error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>An error occured during feature splitting</source>
        <translation type="unfinished"></translation>
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
        <translation type="unfinished">Nie pokazuj tego komunikatu ponownie</translation>
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
        <source>Name for the map file</source>
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
        <source>Overwrite File?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> exists. 
Do you want to overwrite it?</source>
        <comment>a filename is prepended to this text, and appears in a dialog box</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source> exists. 
Do you want to overwrite it?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>MapServer map files (*.map);;All files (*.*)</source>
        <comment>Filter list for selecting files from a dialog box</comment>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsMapserverExportBase</name>
    <message>
        <source>Export to Mapserver</source>
        <translation>Eksport do formatu Mapserver</translation>
    </message>
    <message>
        <source>Map file</source>
        <translation>Plik mapy</translation>
    </message>
    <message>
        <source>Export LAYER information only</source>
        <translation>Eksportuj tylko informację o warstwie</translation>
    </message>
    <message>
        <source>Map</source>
        <translation>Mapa</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nazwa</translation>
    </message>
    <message>
        <source>Height</source>
        <translation>Wysokość</translation>
    </message>
    <message>
        <source>Width</source>
        <translation>Szerokość</translation>
    </message>
    <message>
        <source>dd</source>
        <translation>stopnie</translation>
    </message>
    <message>
        <source>feet</source>
        <translation>stopy</translation>
    </message>
    <message>
        <source>meters</source>
        <translation>metry</translation>
    </message>
    <message>
        <source>miles</source>
        <translation>mile</translation>
    </message>
    <message>
        <source>inches</source>
        <translation>cale</translation>
    </message>
    <message>
        <source>kilometers</source>
        <translation>kilometry</translation>
    </message>
    <message>
        <source>Units</source>
        <translation>Jednostki</translation>
    </message>
    <message>
        <source>Image type</source>
        <translation>Obraz</translation>
    </message>
    <message>
        <source>gif</source>
        <translation>gif</translation>
    </message>
    <message>
        <source>gtiff</source>
        <translation>gtiff</translation>
    </message>
    <message>
        <source>jpeg</source>
        <translation>jpeg</translation>
    </message>
    <message>
        <source>png</source>
        <translation>png</translation>
    </message>
    <message>
        <source>swf</source>
        <translation>swf</translation>
    </message>
    <message>
        <source>userdefined</source>
        <translation>użytkownika</translation>
    </message>
    <message>
        <source>wbmp</source>
        <translation>wbmp</translation>
    </message>
    <message>
        <source>MinScale</source>
        <translation>Skala min</translation>
    </message>
    <message>
        <source>MaxScale</source>
        <translation>Skala maks</translation>
    </message>
    <message>
        <source>Prefix attached to map, scalebar and legend GIF filenames created using this MapFile. It should be kept short.</source>
        <translation>Prefiks dodany do nazw plików mapy, podziałki i legendy tworzonych podczas eksportu. Powinien być krótki.</translation>
    </message>
    <message>
        <source>Web Interface Definition</source>
        <translation>Web Interface Definition</translation>
    </message>
    <message>
        <source>Header</source>
        <translation>Nagłówek</translation>
    </message>
    <message>
        <source>Footer</source>
        <translation>Stopka</translation>
    </message>
    <message>
        <source>Template</source>
        <translation>Szablon</translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation>&amp;Pomoc</translation>
    </message>
    <message>
        <source>F1</source>
        <translation>F1</translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Anuluj</translation>
    </message>
    <message>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <source>Name for the map file to be created from the QGIS project file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>If checked, only the layer information will be processed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Path to the MapServer template file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Prefix attached to map, scalebar and legend GIF filenames created using this MapFile</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Full path to the QGIS project file to export to MapServer map format</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>QGIS project file</source>
        <translation>Plik projektu QGIS</translation>
    </message>
    <message>
        <source>Browse...</source>
        <translation type="unfinished">Przeglądaj...</translation>
    </message>
    <message>
        <source>Save As...</source>
        <translation type="unfinished">Zapisz jako...</translation>
    </message>
</context>
<context>
    <name>QgsMarkerDialogBase</name>
    <message>
        <source>Choose a marker symbol</source>
        <translation>Wybierz symbol znacznika</translation>
    </message>
    <message>
        <source>Directory</source>
        <translation>Katalog</translation>
    </message>
    <message>
        <source>...</source>
        <translation>...</translation>
    </message>
    <message>
        <source>Ok</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Anuluj</translation>
    </message>
    <message>
        <source>New Item</source>
        <translation>Nowy</translation>
    </message>
</context>
<context>
    <name>QgsMeasureBase</name>
    <message>
        <source>Measure</source>
        <translation>Miara</translation>
    </message>
    <message>
        <source>Help</source>
        <translation>Pomoc</translation>
    </message>
    <message>
        <source>New</source>
        <translation>Nowy</translation>
    </message>
    <message>
        <source>Cl&amp;ose</source>
        <translation>Zamknij</translation>
    </message>
    <message>
        <source>Total:</source>
        <translation>Ogółem:</translation>
    </message>
    <message>
        <source>Segments</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsMeasureDialog</name>
    <message>
        <source>Segments (in meters)</source>
        <translation type="unfinished">Segmenty (w metrach)</translation>
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
        <translation>Wiadomość QGIS</translation>
    </message>
    <message>
        <source>Close</source>
        <translation>Zamknij</translation>
    </message>
    <message>
        <source>Don&apos;t show this message again</source>
        <translation>Nie pokazuj tego komunikatu ponownie</translation>
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
</context>
<context>
    <name>QgsNewConnection</name>
    <message>
        <source>Test connection</source>
        <translation>Test połączenia</translation>
    </message>
    <message>
        <source>Connection failed - Check settings and try again.

Extended error information:
</source>
        <translation>Połączenie nie powiodło się. Sprawdź ustawienia i spróbuj ponownie.

Rozszerzona informacja o błędzie:
</translation>
    </message>
    <message>
        <source>Connection to %1 was successful</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsNewConnectionBase</name>
    <message>
        <source>Create a New PostGIS connection</source>
        <translation>Utwórz nowe połączenie dla PostGIS</translation>
    </message>
    <message>
        <source>OK</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Anuluj</translation>
    </message>
    <message>
        <source>Help</source>
        <translation>Pomoc</translation>
    </message>
    <message>
        <source>F1</source>
        <translation>F1</translation>
    </message>
    <message>
        <source>Connection Information</source>
        <translation>Informacja o połączeniu</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nazwa</translation>
    </message>
    <message>
        <source>Host</source>
        <translation>Host</translation>
    </message>
    <message>
        <source>Database</source>
        <translation>Baza danych</translation>
    </message>
    <message>
        <source>Port</source>
        <translation>Port</translation>
    </message>
    <message>
        <source>Username</source>
        <translation>Użytkownik</translation>
    </message>
    <message>
        <source>Password</source>
        <translation>Hasło</translation>
    </message>
    <message>
        <source>Name of the new connection</source>
        <translation>Nazwa dla nowego połączenia</translation>
    </message>
    <message>
        <source>5432</source>
        <translation>5432</translation>
    </message>
    <message>
        <source>Save Password</source>
        <translation>Zapisz hasło</translation>
    </message>
    <message>
        <source>Test Connect</source>
        <translation>Test połączenia</translation>
    </message>
    <message>
        <source>Only look in the &apos;public&apos; schema</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Only look in the geometry_columns table</source>
        <translation type="unfinished"></translation>
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
        <source>Restrict the displayed tables to those that are in the geometry_columns table</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Restricts the displayed tables to those that are in the geometry_columns table. This can speed up the initial display of spatial tables.</source>
        <translation type="unfinished"></translation>
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
        <translation type="unfinished">Informacja o połączeniu</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nazwa</translation>
    </message>
    <message>
        <source>URL</source>
        <translation>URL</translation>
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
        <source>Name of the new connection</source>
        <translation>Nazwa dla nowego połączenia</translation>
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
        <translation>OK</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Anuluj</translation>
    </message>
    <message>
        <source>Help</source>
        <translation>Pomoc</translation>
    </message>
    <message>
        <source>F1</source>
        <translation>F1</translation>
    </message>
</context>
<context>
    <name>QgsNorthArrowPlugin</name>
    <message>
        <source>Bottom Left</source>
        <translation>Lewy dolny</translation>
    </message>
    <message>
        <source>Top Right</source>
        <translation>Prawy górny</translation>
    </message>
    <message>
        <source>Bottom Right</source>
        <translation>Prawy dolny</translation>
    </message>
    <message>
        <source>Top Left</source>
        <translation>Lewy górny</translation>
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
        <translation type="unfinished">&amp;Dekoracje</translation>
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
        <translation>Właściwości</translation>
    </message>
    <message>
        <source>Angle</source>
        <translation>Kąt</translation>
    </message>
    <message>
        <source>Placement</source>
        <translation>Umiejscowienie</translation>
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
        <source>Top Left</source>
        <translation>Lewy górny</translation>
    </message>
    <message>
        <source>Top Right</source>
        <translation>Prawy górny</translation>
    </message>
    <message>
        <source>Bottom Left</source>
        <translation>Lewy dolny</translation>
    </message>
    <message>
        <source>Bottom Right</source>
        <translation>Prawy dolny</translation>
    </message>
    <message>
        <source>Placement on screen</source>
        <translation>Umiejscowienie na ekranie</translation>
    </message>
    <message>
        <source>Preview of north arrow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Icon</source>
        <translation>Ikona</translation>
    </message>
    <message>
        <source>New Item</source>
        <translation type="obsolete">Nowy</translation>
    </message>
    <message>
        <source>Browse...</source>
        <translation type="unfinished">Przeglądaj...</translation>
    </message>
</context>
<context>
    <name>QgsOptions</name>
    <message>
        <source>Detected active locale on your system: </source>
        <translation type="unfinished"></translation>
    </message>
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
    <message>
        <source>Semi transparent circle</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cross</source>
        <translation type="unfinished">Krzyż</translation>
    </message>
</context>
<context>
    <name>QgsOptionsBase</name>
    <message>
        <source>QGIS Options</source>
        <translation>Ustawienia QGIS</translation>
    </message>
    <message>
        <source>&amp;Appearance</source>
        <translation type="obsolete">&amp;Wygląd</translation>
    </message>
    <message>
        <source>Hide splash screen at startup</source>
        <translation>Nie pokazuj ekranu powitalnego przy starcie</translation>
    </message>
    <message>
        <source>&amp;Icon Theme</source>
        <translation type="obsolete">&amp;Temat ikon</translation>
    </message>
    <message>
        <source>Theme</source>
        <translation type="obsolete">Temat</translation>
    </message>
    <message>
        <source>&lt;b&gt;Note: &lt;/b&gt;Theme changes take effect the next time QGIS is started</source>
        <translation>&lt;b&gt;Uwaga: &lt;/b&gt;Zmiany dla tematu zostaną zastosowane po ponownym uruchomieniu QGIS</translation>
    </message>
    <message>
        <source>&amp;Rendering</source>
        <translation>&amp;Rysowywanie</translation>
    </message>
    <message>
        <source>Update display after reading</source>
        <translation type="obsolete">Odśwież mapę po odczytaniu</translation>
    </message>
    <message>
        <source>Map display will be updated (drawn) after this many features have been read from the data source</source>
        <translation>Ekran mapy będzie odświeżany po wczytaniu podanej tu ilości obiektów</translation>
    </message>
    <message>
        <source>features</source>
        <translation type="obsolete">obiektów</translation>
    </message>
    <message>
        <source>(Set to 0 to not update the display until all features have been read)</source>
        <translation type="obsolete">(Podanie wartości 0 sprawi, że ekran nie będzie aktualizowany aż do zakończenia
odczytu ze źródła danych)</translation>
    </message>
    <message>
        <source>Initial Visibility</source>
        <translation type="obsolete">Widoczność początkowa</translation>
    </message>
    <message>
        <source>Select Global Default ...</source>
        <translation>Wskaż domyślne globalnie...</translation>
    </message>
    <message>
        <source>Prompt for projection.</source>
        <translation type="obsolete">Pytaj o układ współrzędnych.</translation>
    </message>
    <message>
        <source>Project wide default projection will be used.</source>
        <translation type="obsolete">Użyj domyślnego układu współrzędnych projektu.</translation>
    </message>
    <message>
        <source>&amp;Splash screen</source>
        <translation type="obsolete">&amp;Ekran powitalny</translation>
    </message>
    <message>
        <source>Default Map Appearance (Overridden by project properties)</source>
        <translation type="obsolete">Domyślny wygląd mapy (podrzędny do właściwości projektu)</translation>
    </message>
    <message>
        <source>Background Color:</source>
        <translation type="obsolete">Kolor tła:</translation>
    </message>
    <message>
        <source>Selection Color:</source>
        <translation type="obsolete">Kolor zaznaczenia:</translation>
    </message>
    <message>
        <source>Appearance</source>
        <translation type="obsolete">Wygląd</translation>
    </message>
    <message>
        <source>Capitalise layer name</source>
        <translation type="obsolete">Nazwa warstwy od dużej litery</translation>
    </message>
    <message>
        <source>Make lines appear less jagged at the expense of some drawing performance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>By default new la&amp;yers added to the map should be displayed</source>
        <translation>Domyślnie nowo dodawane warstw&amp;y są wyświetlane</translation>
    </message>
    <message>
        <source>&amp;Update during drawing</source>
        <translation type="obsolete">&amp;Odświeżanie podczas rysowania</translation>
    </message>
    <message>
        <source>Measure tool</source>
        <translation>Narzędzie pomiaru</translation>
    </message>
    <message>
        <source>Ellipsoid for distance calculations:</source>
        <translation type="obsolete">Elipsoida do kalkulacji odległości:</translation>
    </message>
    <message>
        <source>Search radius</source>
        <translation>Promień wyszukiwania</translation>
    </message>
    <message>
        <source>Pro&amp;jection</source>
        <translation>Układ &amp;współrzędnych</translation>
    </message>
    <message>
        <source>When layer is loaded that has no projection information</source>
        <translation>Gdy dodawana warstwa nie posiada informacji o układzie współrzędnych</translation>
    </message>
    <message>
        <source>Global default projection displa&amp;yed below will be used.</source>
        <translation type="obsolete">Użyj globalnego dom&amp;yślnego układu współrzędnych, wyświetlonego poniżej.</translation>
    </message>
    <message>
        <source>Rendering</source>
        <translation type="obsolete">Renderowanie</translation>
    </message>
    <message>
        <source>Fix problems with incorrectly filled polygons</source>
        <translation>Napraw problemy związane z nieprawidłowo wypełnionymi poligonami</translation>
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
        <source>%</source>
        <translation>%</translation>
    </message>
    <message>
        <source>Panning and zooming</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Zoom</source>
        <translation>Powiększ</translation>
    </message>
    <message>
        <source>Zoom and recenter</source>
        <translation>Powiększ i wycentruj</translation>
    </message>
    <message>
        <source>Nothing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;General</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>General</source>
        <translation type="obsolete">Ogólne</translation>
    </message>
    <message>
        <source>Locale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Locale to use instead</source>
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
    <message>
        <source>Selecting this will unselect the &apos;make lines less&apos; jagged toggle</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Digitizing</source>
        <translation type="unfinished">Digitalizacja</translation>
    </message>
    <message>
        <source>Rubberband</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line Width:</source>
        <translation type="obsolete">Szerokość linii:</translation>
    </message>
    <message>
        <source>Line width in pixels</source>
        <translation type="unfinished">Szerokość linii w pikselach</translation>
    </message>
    <message>
        <source>Line Colour:</source>
        <translation type="obsolete">Kolor linii:</translation>
    </message>
    <message>
        <source>Snapping</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Zoom to mouse cursor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Vertex markers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Project files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Prompt to save project changes when required</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Warn when opening a project file saved with an older version of QGIS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default Map Appearance (overridden by project properties)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Selection color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Background color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Application</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Icon theme</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Capitalise layer names in legend</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rendering behavior</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Number of features to draw before updating the display</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Lucida Grande&apos;; font-size:13pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Note:&lt;/span&gt; Use zero to prevent display updates until all features have been rendered&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rendering quality</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Zoom factor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Mouse wheel action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Rubberband color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ellipsoid for distance calculations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Lucida Grande&apos;; font-size:13pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Note:&lt;/span&gt; Specify the search radius as a percentage of the map width&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Search radius for identifying features and displaying map tips</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line width</source>
        <translation type="unfinished">Szerokość linii</translation>
    </message>
    <message>
        <source>Line colour</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default snap mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default snapping tolerance in layer units</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Search radius for vertex edits in layer units</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Marker style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Prompt for projection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Project wide default projection will be used</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Global default projection displa&amp;yed below will be used</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Override system locale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Lucida Grande&apos;; font-size:13pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Note:&lt;/span&gt; Enabling / changing overide on local requires an application restart&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
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
        <translation>&lt;b&gt;Uwaga: Ta funkcja jeszcze nie działa!&lt;/b&gt;</translation>
    </message>
    <message>
        <source>Source</source>
        <translation>Źródło</translation>
    </message>
    <message>
        <source>Destination</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Help</source>
        <translation>Pomoc</translation>
    </message>
    <message>
        <source>F1</source>
        <translation>F1</translation>
    </message>
    <message>
        <source>Add New Transfer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;OK</source>
        <translation>&amp;OK</translation>
    </message>
    <message>
        <source>&amp;Cancel</source>
        <translation>&amp;Anuluj</translation>
    </message>
</context>
<context>
    <name>QgsPatternDialogBase</name>
    <message>
        <source>Select a fill pattern</source>
        <translation>Wybierz szablon wypełnienia</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Anuluj</translation>
    </message>
    <message>
        <source>Ok</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>No Fill</source>
        <translation>Bez wypełnienia</translation>
    </message>
</context>
<context>
    <name>QgsPgGeoprocessing</name>
    <message>
        <source>Buffer features in layer %1</source>
        <translation>Buforuj obiekty w warstwie %1</translation>
    </message>
    <message>
        <source>Error connecting to the database</source>
        <translation>Błąd podczas połączenia z bazą danych</translation>
    </message>
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
        <source>No GEOS support</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Buffer function requires GEOS support in PostGIS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No Active Layer</source>
        <translation>Brak aktywnej warstwy</translation>
    </message>
    <message>
        <source>You must select a layer in the legend to buffer</source>
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
        <source>Create a buffer for a PostgreSQL layer. </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsPgQueryBuilder</name>
    <message>
        <source>Table &lt;b&gt;%1&lt;/b&gt; in database &lt;b&gt;%2&lt;/b&gt; on host &lt;b&gt;%3&lt;/b&gt;, user &lt;b&gt;%4&lt;/b&gt;</source>
        <translation>Tabela &lt;b&gt;%1&lt;/b&gt; w bazie danych &lt;b&gt;%2&lt;/b&gt; na serwerze &lt;b&gt;%3&lt;/b&gt;, użytkownik &lt;b&gt;%4&lt;/b&gt;</translation>
    </message>
    <message>
        <source>Connection Failed</source>
        <translation>Połączenie nie powiodło się</translation>
    </message>
    <message>
        <source>Connection to the database failed:</source>
        <translation>Połączenie z bazą danych nie powiodło się:</translation>
    </message>
    <message>
        <source>Database error</source>
        <translation>Błąd bazy danych</translation>
    </message>
    <message>
        <source>Query Result</source>
        <translation>Wyniki zapytania</translation>
    </message>
    <message>
        <source>The where clause returned </source>
        <translation>Klauzula where zwróciła</translation>
    </message>
    <message>
        <source> rows.</source>
        <translation>rekordów.</translation>
    </message>
    <message>
        <source>Query Failed</source>
        <translation>Zapytanie nie powiodło się</translation>
    </message>
    <message>
        <source>An error occurred when executing the query:</source>
        <translation>Wystąpił błąd podczas wykonywania zapytania:</translation>
    </message>
    <message>
        <source>No Records</source>
        <translation>Brak rekordów</translation>
    </message>
    <message>
        <source>The query you specified results in zero records being returned. Valid PostgreSQL layers must have at least one feature.</source>
        <translation>Zapytanie nie zwróciło rekordów. Poprawna warstwa w PostgreSQL musi posiadać przynajmniej jeden obiekt.</translation>
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
        <source>Error in Query</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsPgQueryBuilderBase</name>
    <message>
        <source>PostgreSQL Query Builder</source>
        <translation>Kreator zapytań PostgreSQL</translation>
    </message>
    <message>
        <source>Clear</source>
        <translation>Wyczyść</translation>
    </message>
    <message>
        <source>Test</source>
        <translation>Testuj</translation>
    </message>
    <message>
        <source>Ok</source>
        <translation>OK</translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Anuluj</translation>
    </message>
    <message>
        <source>Values</source>
        <translation>Wartości</translation>
    </message>
    <message>
        <source>All</source>
        <translation>Wszystko</translation>
    </message>
    <message>
        <source>Sample</source>
        <translation>Przykład</translation>
    </message>
    <message>
        <source>Fields</source>
        <translation>Pola</translation>
    </message>
    <message>
        <source>Datasource:</source>
        <translation type="obsolete">Źródło danych:</translation>
    </message>
    <message>
        <source>Operators</source>
        <translation>Operatory</translation>
    </message>
    <message>
        <source>=</source>
        <translation>=</translation>
    </message>
    <message>
        <source>IN</source>
        <translation>IN</translation>
    </message>
    <message>
        <source>NOT IN</source>
        <translation>NOT IN</translation>
    </message>
    <message>
        <source>&lt;</source>
        <translation>&lt;</translation>
    </message>
    <message>
        <source>&gt;</source>
        <translation>&gt;</translation>
    </message>
    <message>
        <source>%</source>
        <translation>%</translation>
    </message>
    <message>
        <source>&lt;=</source>
        <translation>&lt;=</translation>
    </message>
    <message>
        <source>&gt;=</source>
        <translation>&gt;=</translation>
    </message>
    <message>
        <source>!=</source>
        <translation>!=</translation>
    </message>
    <message>
        <source>LIKE</source>
        <translation>LIKE</translation>
    </message>
    <message>
        <source>AND</source>
        <translation>AND</translation>
    </message>
    <message>
        <source>ILIKE</source>
        <translation>ILIKE</translation>
    </message>
    <message>
        <source>OR</source>
        <translation>OR</translation>
    </message>
    <message>
        <source>NOT</source>
        <translation>NOT</translation>
    </message>
    <message>
        <source>SQL where clause</source>
        <translation>Klauzula where</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Retrieve &lt;span style=&quot; font-weight:600;&quot;&gt;all&lt;/span&gt; the record in the vector file (&lt;span style=&quot; font-style:italic;&quot;&gt;if the table is big, the operation can consume some time&lt;/span&gt;)&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;Take a &lt;span style=&quot; font-weight:600;&quot;&gt;sample&lt;/span&gt; of records in the vector file&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
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
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Sans Serif&apos;; font-size:9pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;List of fields in this vector file&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Datasource</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsPluginManager</name>
    <message>
        <source>No Plugins</source>
        <translation>Brak wtyczek</translation>
    </message>
    <message>
        <source>No QGIS plugins found in </source>
        <translation>Nie znaleziono wtyczek QGIS</translation>
    </message>
    <message>
        <source>Name</source>
        <translation type="obsolete">Nazwa</translation>
    </message>
    <message>
        <source>Version</source>
        <translation type="obsolete">Wersja</translation>
    </message>
    <message>
        <source>Description</source>
        <translation type="obsolete">Opis</translation>
    </message>
    <message>
        <source>&amp;Select All</source>
        <translation type="unfinished">&amp;Zaznacz wszystko</translation>
    </message>
    <message>
        <source>&amp;Clear All</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsPluginManagerBase</name>
    <message>
        <source>Plugin Directory</source>
        <translation type="obsolete">Katalog wtyczek</translation>
    </message>
    <message>
        <source>To load a plugin, click the checkbox next to the plugin and click Ok</source>
        <translation type="obsolete">Aby wczytać wtyczkę, zaznacz pole wyboru obok nazwy wtyczki i kliknij OK</translation>
    </message>
    <message>
        <source>&amp;Select All</source>
        <translation type="obsolete">&amp;Zaznacz wszystko</translation>
    </message>
    <message>
        <source>Alt+S</source>
        <translation type="obsolete">Alt+S</translation>
    </message>
    <message>
        <source>C&amp;lear All</source>
        <translation type="obsolete">&amp;Odznacz wszystko</translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation type="obsolete">Alt+L</translation>
    </message>
    <message>
        <source>&amp;Ok</source>
        <translation type="obsolete">&amp;OK</translation>
    </message>
    <message>
        <source>Alt+O</source>
        <translation type="obsolete">Alt+O</translation>
    </message>
    <message>
        <source>&amp;Close</source>
        <translation type="obsolete">&amp;Zamknij</translation>
    </message>
    <message>
        <source>Alt+C</source>
        <translation type="obsolete">Alt+C</translation>
    </message>
    <message>
        <source>QGIS Plugin Manager</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>To enable / disable a plugin, click its checkbox or description</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Filter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Plugin Directory:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Directory</source>
        <translation type="unfinished">Katalog</translation>
    </message>
</context>
<context>
    <name>QgsPointDialog</name>
    <message>
        <source>Zoom In</source>
        <translation>Powiększ</translation>
    </message>
    <message>
        <source>z</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Zoom Out</source>
        <translation>Pomniejsz</translation>
    </message>
    <message>
        <source>Z</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Zoom To Layer</source>
        <translation>Powiększ do warstwy</translation>
    </message>
    <message>
        <source>Zoom to Layer</source>
        <translation>Powiększ do warstwy</translation>
    </message>
    <message>
        <source>Pan Map</source>
        <translation>Przesuń mapę</translation>
    </message>
    <message>
        <source>Pan the map</source>
        <translation>Przesuń mapę</translation>
    </message>
    <message>
        <source>Add Point</source>
        <translation>Dodaj punkt</translation>
    </message>
    <message>
        <source>.</source>
        <translation>.</translation>
    </message>
    <message>
        <source>Capture Points</source>
        <translation type="unfinished">Dodaj punkt</translation>
    </message>
    <message>
        <source>Delete Point</source>
        <translation>Usuń punkt</translation>
    </message>
    <message>
        <source>Delete Selected</source>
        <translation>Usuń zaznaczony</translation>
    </message>
    <message>
        <source>Linear</source>
        <translation type="unfinished">Liniowa</translation>
    </message>
    <message>
        <source>Helmert</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Choose a name for the world file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>-modified</source>
        <comment>Georeferencer:QgsPointDialog.cpp - used to modify a user given filename</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Warning</source>
        <translation>Ostrzeżenie</translation>
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
        <translation>Błąd</translation>
    </message>
    <message>
        <source>Could not write to </source>
        <translation>Nie mogę zapisać do</translation>
    </message>
    <message>
        <source>Currently all modified files will be written in TIFF format.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;p&gt;A Helmert transform requires modifications in the raster layer.&lt;/p&gt;&lt;p&gt;The modified raster will be saved in a new file and a world file will be generated for this new file instead.&lt;/p&gt;&lt;p&gt;Are you sure that this is what you want?&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsPointDialogBase</name>
    <message>
        <source>Transform type:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Zoom in</source>
        <translation>Powiększ</translation>
    </message>
    <message>
        <source>Zoom out</source>
        <translation>Pomniejsz</translation>
    </message>
    <message>
        <source>Zoom to the raster extents</source>
        <translation>Powiększ do zasięgu rastra</translation>
    </message>
    <message>
        <source>Pan</source>
        <translation>Przesuń</translation>
    </message>
    <message>
        <source>Add points</source>
        <translation>Dodaj punkty</translation>
    </message>
    <message>
        <source>Delete points</source>
        <translation>Usuń punkty</translation>
    </message>
    <message>
        <source>World file:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>...</source>
        <translation type="unfinished">...</translation>
    </message>
    <message>
        <source>Modified raster:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reference points</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Create</source>
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
        <translation>Form3</translation>
    </message>
    <message>
        <source>Symbol Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scale</source>
        <translation>Skala</translation>
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
        <source>Unable to determine table access privileges for the </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error while adding features</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error while deleting features</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error while adding attributes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error while deleting attributes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error while changing attributes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Error while changing geometry values</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>unexpected PostgreSQL error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Qgis was unable to determine the type and srid of column </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsProjectPropertiesBase</name>
    <message>
        <source>Project Properties</source>
        <translation>Właściwości projektu</translation>
    </message>
    <message>
        <source>Default project title</source>
        <translation>Domyślna nazwa projektu</translation>
    </message>
    <message>
        <source>Map Units</source>
        <translation type="obsolete">Jednostki mapy</translation>
    </message>
    <message>
        <source>Meters</source>
        <translation>Metry</translation>
    </message>
    <message>
        <source>Feet</source>
        <translation>Stopy</translation>
    </message>
    <message>
        <source>Decimal degrees</source>
        <translation>Stopnie dziesiętne</translation>
    </message>
    <message>
        <source>General</source>
        <translation>Ogólne</translation>
    </message>
    <message>
        <source>Automatic</source>
        <translation>Automatyczna</translation>
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
        <source>Manual</source>
        <translation>Ręczna</translation>
    </message>
    <message>
        <source>Sets the number of decimal places to use for the mouse position display</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>The number of decimal places for the manual option</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>decimal places</source>
        <translation>miejsca dziesiętne</translation>
    </message>
    <message>
        <source>Map Appearance</source>
        <translation type="obsolete">Wygląd mapy</translation>
    </message>
    <message>
        <source>Selection Color:</source>
        <translation type="obsolete">Kolor zaznaczenia:</translation>
    </message>
    <message>
        <source>Project Title</source>
        <translation type="obsolete">Tytuł projektu</translation>
    </message>
    <message>
        <source>Projection</source>
        <translation>Układ współrzędnych</translation>
    </message>
    <message>
        <source>Enable on the fly projection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Background Color:</source>
        <translation type="obsolete">Kolor tła:</translation>
    </message>
    <message>
        <source>Precision</source>
        <translation>Precyzja</translation>
    </message>
    <message>
        <source>Digitizing</source>
        <translation type="unfinished">Digitalizacja</translation>
    </message>
    <message>
        <source>Descriptive project name</source>
        <translation type="unfinished"></translation>
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
        <source>Title and colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Project title</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Selection color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Background color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Map units</source>
        <translation type="unfinished">jednostkach mapy</translation>
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
        <translation type="unfinished">Układ współrzędnych</translation>
    </message>
    <message>
        <source>Search</source>
        <translation>Szukaj</translation>
    </message>
    <message>
        <source>Find</source>
        <translation type="unfinished">Szukaj</translation>
    </message>
    <message>
        <source>Postgis SRID</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>EPSG ID</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>QGIS SRSID</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nazwa</translation>
    </message>
    <message>
        <source>Spatial Reference System</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Id</source>
        <translation>Id</translation>
    </message>
</context>
<context>
    <name>QgsPythonDialog</name>
    <message>
        <source>Python console</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&gt;&gt;&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>To access Quantum GIS environment from this python console use object from global scope which is an instance of QgisInterface class.&lt;br&gt;Usage e.g.: iface.zoomFull()</source>
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
        <translation type="unfinished"></translation>
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
        <translation type="unfinished">mile</translation>
    </message>
    <message>
        <source> mile</source>
        <translation type="unfinished">mila</translation>
    </message>
    <message>
        <source> inches</source>
        <translation type="unfinished">cale</translation>
    </message>
    <message>
        <source> foot</source>
        <translation type="unfinished">stopa</translation>
    </message>
    <message>
        <source> feet</source>
        <translation type="unfinished">stopy</translation>
    </message>
    <message>
        <source> degree</source>
        <translation type="unfinished">stopień</translation>
    </message>
    <message>
        <source> degrees</source>
        <translation type="unfinished">stopnie</translation>
    </message>
    <message>
        <source> unknown</source>
        <translation type="unfinished">nieznany</translation>
    </message>
</context>
<context>
    <name>QgsRasterLayer</name>
    <message>
        <source>Not Set</source>
        <translation>Brak</translation>
    </message>
    <message>
        <source>Raster Extent: </source>
        <translation>Zasięg rastra:</translation>
    </message>
    <message>
        <source>Clipped area: </source>
        <translation>Obszar przycięcia:</translation>
    </message>
    <message>
        <source>Driver:</source>
        <translation>Sterownik:</translation>
    </message>
    <message>
        <source>Dimensions:</source>
        <translation>Wymiar:</translation>
    </message>
    <message>
        <source>X: </source>
        <translation>X: </translation>
    </message>
    <message>
        <source> Y: </source>
        <translation> Y: </translation>
    </message>
    <message>
        <source> Bands: </source>
        <translation>Kanały:</translation>
    </message>
    <message>
        <source>Data Type:</source>
        <translation>Typ danych:</translation>
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
        <translation>Nie można rozpoznać typu rastra.</translation>
    </message>
    <message>
        <source>Pyramid overviews:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Origin:</source>
        <translation>Początek:</translation>
    </message>
    <message>
        <source>Pixel Size:</source>
        <translation>Rozmiar piksela:</translation>
    </message>
    <message>
        <source>Property</source>
        <translation type="obsolete">Właściwość</translation>
    </message>
    <message>
        <source>Value</source>
        <translation type="obsolete">Wartość</translation>
    </message>
    <message>
        <source>Band</source>
        <translation>Kanał</translation>
    </message>
    <message>
        <source>Band No</source>
        <translation>Kanał nr</translation>
    </message>
    <message>
        <source>No Stats</source>
        <translation>Brak statystyk</translation>
    </message>
    <message>
        <source>No stats collected yet</source>
        <translation>Statystyki jeszcze nie zostały zebrane</translation>
    </message>
    <message>
        <source>Min Val</source>
        <translation>Minimum</translation>
    </message>
    <message>
        <source>Max Val</source>
        <translation>Maksimum</translation>
    </message>
    <message>
        <source>Range</source>
        <translation>Zakres</translation>
    </message>
    <message>
        <source>Mean</source>
        <translation>Średnia</translation>
    </message>
    <message>
        <source>Sum of squares</source>
        <translation>Suma kwadratów</translation>
    </message>
    <message>
        <source>Standard Deviation</source>
        <translation>Odchylenie standardowe</translation>
    </message>
    <message>
        <source>Sum of all cells</source>
        <translation>Suma wszystkich cel</translation>
    </message>
    <message>
        <source>Cell Count</source>
        <translation>Liczba cel</translation>
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
        <source>Layer Spatial Reference System: </source>
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
        <source>Dataset Description</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No Data Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>and all other files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>NoDataValue not set</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Band %1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsRasterLayerProperties</name>
    <message>
        <source>Grayscale</source>
        <translation>Skala szarości</translation>
    </message>
    <message>
        <source>Pseudocolor</source>
        <translation>Pseudokolor</translation>
    </message>
    <message>
        <source>Freak Out</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Palette</source>
        <translation>Paleta</translation>
    </message>
    <message>
        <source>Columns: </source>
        <translation>Kolumny:</translation>
    </message>
    <message>
        <source>Rows: </source>
        <translation>Wiersze:</translation>
    </message>
    <message>
        <source>No-Data Value: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>n/a</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Write access denied</source>
        <translation type="unfinished">Brak dostępu do zapisu</translation>
    </message>
    <message>
        <source>Write access denied. Adjust the file permissions and try again.

</source>
        <translation type="unfinished">Brak dostępu do zapisu. Dostosuj uprawnienia do pliku i spróbuj ponownie.</translation>
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
        <translation>Kwantyle</translation>
    </message>
    <message>
        <source>Description</source>
        <translation type="unfinished">Opis</translation>
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
        <translation type="unfinished">Czerwony</translation>
    </message>
    <message>
        <source>Green</source>
        <translation type="unfinished">Zielony</translation>
    </message>
    <message>
        <source>Blue</source>
        <translation type="unfinished">Niebieski</translation>
    </message>
    <message>
        <source>Percent Transparent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Gray</source>
        <translation type="unfinished">Szary</translation>
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
        <source>No-Data Value: Not Set</source>
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
    <message>
        <source>Not Set</source>
        <translation type="unfinished">Brak</translation>
    </message>
</context>
<context>
    <name>QgsRasterLayerPropertiesBase</name>
    <message>
        <source>Raster Layer Properties</source>
        <translation>Właściwości warstwy rastrowej</translation>
    </message>
    <message>
        <source>Symbology</source>
        <translation>Symbolika</translation>
    </message>
    <message>
        <source>&lt;p align=&quot;right&quot;&gt;Full&lt;/p&gt;</source>
        <translation>&lt;p align=&quot;right&quot;&gt;Pełny&lt;/p&gt;</translation>
    </message>
    <message>
        <source>None</source>
        <translation>Brak</translation>
    </message>
    <message>
        <source>Gray</source>
        <translation>Szary</translation>
    </message>
    <message>
        <source>General</source>
        <translation>Ogólne</translation>
    </message>
    <message>
        <source>Thumbnail</source>
        <translation>Miniatura</translation>
    </message>
    <message>
        <source>Columns:</source>
        <translation>Kolumny:</translation>
    </message>
    <message>
        <source>No Data:</source>
        <translation>Brak danych:</translation>
    </message>
    <message>
        <source>Rows:</source>
        <translation>Rekordy:</translation>
    </message>
    <message>
        <source>Legend:</source>
        <translation>Legenda:</translation>
    </message>
    <message>
        <source>Palette:</source>
        <translation>Paleta:</translation>
    </message>
    <message>
        <source>Maximum 1:</source>
        <translation type="obsolete">Maksymalna 1:</translation>
    </message>
    <message>
        <source>Maximum scale at which this layer will be displayed. </source>
        <translation>Maksymalna skala, dla której wartstwa będzie wyświetlana.</translation>
    </message>
    <message>
        <source>Minimum 1:</source>
        <translation type="obsolete">Minimalna 1:</translation>
    </message>
    <message>
        <source>Minimum scale at which this layer will be displayed. </source>
        <translation>Minimalna skala, dla której wartstwa będzie wyświetlana.</translation>
    </message>
    <message>
        <source>Layer Source:</source>
        <translation type="obsolete">Źródło warstwy:</translation>
    </message>
    <message>
        <source>Display Name:</source>
        <translation type="obsolete">Nazwa wyświetlana:</translation>
    </message>
    <message>
        <source>Metadata</source>
        <translation>Metadane</translation>
    </message>
    <message>
        <source>Pyramids</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Average</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Nearest Neighbour</source>
        <translation>Najbliższe sąsiedztwo</translation>
    </message>
    <message>
        <source>Change</source>
        <translation>Zmień</translation>
    </message>
    <message>
        <source>Histogram</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Options</source>
        <translation>Opcje</translation>
    </message>
    <message>
        <source>Out Of Range OK?</source>
        <translation type="obsolete">Poza zakresem OK?</translation>
    </message>
    <message>
        <source>Chart Type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Refresh</source>
        <translation type="unfinished">Odśwież</translation>
    </message>
    <message>
        <source>Max</source>
        <translation type="unfinished">Max</translation>
    </message>
    <message>
        <source>Min</source>
        <translation type="unfinished">Min</translation>
    </message>
    <message>
        <source>&lt;b&gt;&lt;font color=&apos;blue&apos;&gt;Max&lt;/font&gt;&lt;/b&gt;</source>
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
        <source> 00%</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Render as</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>...</source>
        <translation type="unfinished">...</translation>
    </message>
    <message>
        <source>Colormap</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete entry</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Classify</source>
        <translation type="unfinished">Klasyfikuj</translation>
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
        <source>Three band color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Single band gray</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color map</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Invert color map</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>RGB mode band selection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Grayscale band selection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>RGB scaling</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Std. deviation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Custom min / max values</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Grayscale band scaling</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Load min / max values from band</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Estimate (faster)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Load</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Actual (slower)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Contrast enhancement</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Current</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Save current contrast enhancement algorithm as default. This setting will be persistent between QGIS sessions.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Saves current contrast enhancement algorithm as a default. This setting will be persistent between QGIS sessions.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>TextLabel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Transparency</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Global transparency</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No data value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reset no data value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Custom transparency options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Transparency band</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Transparency layer;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Transparent pixel list</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add values manually</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add Values from display</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Remove selected row</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Default values</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Import from file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Export to file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Number of entries</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Color interpolation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Classification mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Spatial reference system</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Scale dependent visibility</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Maximum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Minimum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Show debug info</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Layer source</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Display name</source>
        <translation type="unfinished">Nazwa wyświetlana</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;style type=&quot;text/css&quot;&gt;
p, li { white-space: pre-wrap; }
&lt;/style&gt;&lt;/head&gt;&lt;body style=&quot; font-family:&apos;Lucida Grande&apos;; font-size:13pt; font-weight:400; font-style:normal;&quot;&gt;
&lt;p style=&quot;-qt-paragraph-type:empty; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px; font-family:&apos;Sans Serif&apos;; font-size:9pt;&quot;&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Pyramid resolutions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Resampling method</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Build pyramids</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Line graph</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Bar chart</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Column count</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Out of range OK?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Allow approximation</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsRunProcess</name>
    <message>
        <source>Unable to run command</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Starting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Done</source>
        <translation type="unfinished">Zamknij</translation>
    </message>
</context>
<context>
    <name>QgsScaleBarPlugin</name>
    <message>
        <source> metres/km</source>
        <translation> metry/km</translation>
    </message>
    <message>
        <source> feet</source>
        <translation>stopy</translation>
    </message>
    <message>
        <source> degrees</source>
        <translation>stopnie</translation>
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
        <source> m</source>
        <translation>m</translation>
    </message>
    <message>
        <source> foot</source>
        <translation>stopa</translation>
    </message>
    <message>
        <source> degree</source>
        <translation>stopień</translation>
    </message>
    <message>
        <source> unknown</source>
        <translation>nieznany</translation>
    </message>
    <message>
        <source>Top Left</source>
        <translation>Lewy górny</translation>
    </message>
    <message>
        <source>Bottom Left</source>
        <translation>Lewy dolny</translation>
    </message>
    <message>
        <source>Top Right</source>
        <translation>Prawy górny</translation>
    </message>
    <message>
        <source>Bottom Right</source>
        <translation>Prawy dolny</translation>
    </message>
    <message>
        <source>Tick Down</source>
        <translation>Dolny</translation>
    </message>
    <message>
        <source>Tick Up</source>
        <translation>Górny</translation>
    </message>
    <message>
        <source>Bar</source>
        <translation>Pasek</translation>
    </message>
    <message>
        <source>Box</source>
        <translation>Prostokąt</translation>
    </message>
    <message>
        <source>&amp;Scale Bar</source>
        <translation>Podziałka</translation>
    </message>
    <message>
        <source>Creates a scale bar that is displayed on the map canvas</source>
        <translation>Tworzy podziałkę, która będzie widoczna na mapie</translation>
    </message>
    <message>
        <source>&amp;Decorations</source>
        <translation>&amp;Dekoracje</translation>
    </message>
    <message>
        <source> feet/miles</source>
        <translation>stopy/mile</translation>
    </message>
    <message>
        <source> miles</source>
        <translation>mile</translation>
    </message>
    <message>
        <source> mile</source>
        <translation>mila</translation>
    </message>
    <message>
        <source> inches</source>
        <translation>cale</translation>
    </message>
</context>
<context>
    <name>QgsScaleBarPluginGuiBase</name>
    <message>
        <source>Scale Bar Plugin</source>
        <translation>Podziałka</translation>
    </message>
    <message>
        <source>Top Left</source>
        <translation>Lewy górny</translation>
    </message>
    <message>
        <source>Top Right</source>
        <translation>Prawy górny</translation>
    </message>
    <message>
        <source>Bottom Left</source>
        <translation>Lewy dolny</translation>
    </message>
    <message>
        <source>Bottom Right</source>
        <translation>Prawy dolny</translation>
    </message>
    <message>
        <source>Size of bar:</source>
        <translation>Rozmiar paska:</translation>
    </message>
    <message>
        <source>Placement:</source>
        <translation>Umiejscowienie:</translation>
    </message>
    <message>
        <source>Tick Down</source>
        <translation>Dolny</translation>
    </message>
    <message>
        <source>Tick Up</source>
        <translation>Górny</translation>
    </message>
    <message>
        <source>Box</source>
        <translation>Prostokąt</translation>
    </message>
    <message>
        <source>Bar</source>
        <translation>Pasek</translation>
    </message>
    <message>
        <source>Select the style of the scale bar</source>
        <translation>Wybierz styl dla podziałki</translation>
    </message>
    <message>
        <source>Colour of bar:</source>
        <translation>Kolor podziałki:</translation>
    </message>
    <message>
        <source>Scale bar style:</source>
        <translation>Styl podziałki:</translation>
    </message>
    <message>
        <source>Enable scale bar</source>
        <translation>Włącz podziałkę</translation>
    </message>
    <message>
        <source>Automatically snap to round number on resize</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Click to select the colour</source>
        <translation>Kliknij by wybrać kolor</translation>
    </message>
    <message>
        <source>&lt;html&gt;&lt;head&gt;&lt;meta name=&quot;qrichtext&quot; content=&quot;1&quot; /&gt;&lt;/head&gt;&lt;body style=&quot; white-space: pre-wrap; font-family:Sans Serif; font-size:9pt; font-weight:400; font-style:normal; text-decoration:none;&quot;&gt;&lt;p style=&quot; margin-top:0px; margin-bottom:0px; margin-left:0px; margin-right:0px; -qt-block-indent:0; text-indent:0px;&quot;&gt;This plugin draws a scale bar on the map. Please note the size option below is a &apos;preferred&apos; size and may have to be altered by QGIS depending on the level of zoom.  The size is measured according to the map units specified in the project properties.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsSearchQueryBuilder</name>
    <message>
        <source>No matching features found.</source>
        <translation type="unfinished">Nie znaleziono pasujących obiektów.</translation>
    </message>
    <message>
        <source>Search results</source>
        <translation>Rezultaty wyszukiwania</translation>
    </message>
    <message>
        <source>Search string parsing error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>No Records</source>
        <translation>Brak rekordów</translation>
    </message>
    <message>
        <source>The query you specified results in zero records being returned.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Search query builder</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsServerSourceSelect</name>
    <message>
        <source>Are you sure you want to remove the </source>
        <translation>Czy na pewno chcesz usunąć </translation>
    </message>
    <message>
        <source> connection and all associated settings?</source>
        <translation>połączenie i wszystkie związane z nim ustawienia?</translation>
    </message>
    <message>
        <source>Confirm Delete</source>
        <translation>Zatwierdź usunięcie</translation>
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
        <translation>Wybierz warstwę</translation>
    </message>
    <message>
        <source>You must select at least one layer first.</source>
        <translation>Musisz najpierw wybrać co najmniej jedną warstwę.</translation>
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
    <message>
        <source>Coordinate Reference System</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>There are no available coordinate reference system for the set of layers you&apos;ve selected.</source>
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
        <source>C&amp;lose</source>
        <translation>Zamknij</translation>
    </message>
    <message>
        <source>Alt+L</source>
        <translation>Alt+L</translation>
    </message>
    <message>
        <source>Help</source>
        <translation>Pomoc</translation>
    </message>
    <message>
        <source>F1</source>
        <translation>F1</translation>
    </message>
    <message>
        <source>Image encoding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Layers</source>
        <translation>Warstwy</translation>
    </message>
    <message>
        <source>ID</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nazwa</translation>
    </message>
    <message>
        <source>Title</source>
        <translation>Tytuł</translation>
    </message>
    <message>
        <source>Abstract</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;Add</source>
        <translation>Dodaj</translation>
    </message>
    <message>
        <source>Alt+A</source>
        <translation>Alt+A</translation>
    </message>
    <message>
        <source>Server Connections</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation>&amp;Nowy</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Usuń</translation>
    </message>
    <message>
        <source>Edit</source>
        <translation>Edytuj</translation>
    </message>
    <message>
        <source>C&amp;onnect</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Ready</source>
        <translation>Gotowe</translation>
    </message>
    <message>
        <source>Coordinate Reference System</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Change ...</source>
        <translation>Zmień ...</translation>
    </message>
    <message>
        <source>Adds a few example WMS servers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add default servers</source>
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
        <source>No Brush</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Solid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Horizontal</source>
        <translation type="unfinished">Poziomo</translation>
    </message>
    <message>
        <source>Vertical</source>
        <translation type="unfinished">Pionowo</translation>
    </message>
    <message>
        <source>Cross</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>BDiagonal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>FDiagonal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Diagonal X</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dense1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dense2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dense3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dense4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dense5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dense6</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Dense7</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Texture</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsSingleSymbolDialogBase</name>
    <message>
        <source>Single Symbol</source>
        <translation>Symbol pojedynczy</translation>
    </message>
    <message>
        <source>Size</source>
        <translation type="unfinished">Rozmiar</translation>
    </message>
    <message>
        <source>...</source>
        <translation type="unfinished">...</translation>
    </message>
    <message>
        <source>Point Symbol</source>
        <translation type="unfinished"></translation>
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
        <translation type="unfinished">Etykieta</translation>
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
        <translation type="unfinished">Warstwa</translation>
    </message>
    <message>
        <source>Mode</source>
        <translation type="unfinished">Tryb</translation>
    </message>
    <message>
        <source>Tolerance</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsSpit</name>
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
        <translation>Zatwierdź usunięcie</translation>
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
        <source>You need to add shapefiles to the list first</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Importing files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Cancel</source>
        <translation>Anuluj</translation>
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
        <source>The following fields are duplicates:</source>
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
        <source>File Name</source>
        <translation>Nazwa pliku</translation>
    </message>
    <message>
        <source>Feature Class</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Features</source>
        <translation>Obiekty</translation>
    </message>
    <message>
        <source>DB Relation Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Schema</source>
        <translation>Schemat</translation>
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
        <source>PostGIS not available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&lt;p&gt;The chosen database does not have PostGIS installed, but this is required for storage of spatial data.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Checking to see if </source>
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
        <source>%1 of %2 shapefiles could not be imported.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Password for </source>
        <translation type="unfinished">Hasło dla</translation>
    </message>
    <message>
        <source>Please enter your password:</source>
        <translation type="unfinished">Proszę podać hasło:</translation>
    </message>
</context>
<context>
    <name>QgsSpitBase</name>
    <message>
        <source>SPIT - Shapefile to PostGIS Import Tool</source>
        <translation>SPIT - Import z PostGIS do pliku shapefile</translation>
    </message>
    <message>
        <source>Add</source>
        <translation>Dodaj</translation>
    </message>
    <message>
        <source>Add a shapefile to the list of files to be imported</source>
        <translation>Dodaj plik shapefile do listy importowanych plików</translation>
    </message>
    <message>
        <source>Remove</source>
        <translation>Usuń</translation>
    </message>
    <message>
        <source>Remove the selected shapefile from the import list</source>
        <translation>Usuń plik shapefile z listy importowanych plików</translation>
    </message>
    <message>
        <source>Remove All</source>
        <translation>Usuń wszystko</translation>
    </message>
    <message>
        <source>Remove all the shapefiles from the import list</source>
        <translation>Usuń wszystkie pliki shapefile z listy</translation>
    </message>
    <message>
        <source>Global Schema</source>
        <translation>Główny schemat</translation>
    </message>
    <message>
        <source>Set the SRID to the default value</source>
        <translation>Ustaw domyślną wartość dla SRID</translation>
    </message>
    <message>
        <source>Set the geometry column name to the default value</source>
        <translation>Ustaw domyślną wartość dla nazwy kolumny z geometrią</translation>
    </message>
    <message>
        <source>PostgreSQL Connections</source>
        <translation>Połączenia PostgreSQL</translation>
    </message>
    <message>
        <source>New</source>
        <translation>Nowy</translation>
    </message>
    <message>
        <source>Create a new PostGIS connection</source>
        <translation>Utwórz nowe połączenie z PostGIS</translation>
    </message>
    <message>
        <source>Remove the current PostGIS connection</source>
        <translation>Usuń bieżące połączenie z PostGIS</translation>
    </message>
    <message>
        <source>Connect</source>
        <translation type="unfinished">Połącz</translation>
    </message>
    <message>
        <source>Edit</source>
        <translation>Edytuj</translation>
    </message>
    <message>
        <source>Edit the current PostGIS connection</source>
        <translation>Edytuj bieżące połączenie z PostGIS</translation>
    </message>
    <message>
        <source>Import options and shapefile list</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use Default SRID or specify here</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Use Default Geometry Column Name or specify here</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Primary Key Column Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Connect to PostGIS</source>
        <translation type="unfinished"></translation>
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
        <translation>Form1</translation>
    </message>
    <message>
        <source>Classification Field:</source>
        <translation type="obsolete">Pole klasyfikacji:</translation>
    </message>
    <message>
        <source>Delete class</source>
        <translation type="obsolete">Usuń klasę</translation>
    </message>
    <message>
        <source>Classify</source>
        <translation>Klasyfikuj</translation>
    </message>
    <message>
        <source>Classification field</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add class</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Delete classes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Randomize Colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Reset Colors</source>
        <translation type="unfinished"></translation>
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
        <translation>Przeźroczystość:</translation>
    </message>
    <message>
        <source>Single Symbol</source>
        <translation>Symbol pojedynczy</translation>
    </message>
    <message>
        <source>Graduated Symbol</source>
        <translation>Symbol stopniowy</translation>
    </message>
    <message>
        <source>Continuous Color</source>
        <translation>Kolor ciągły</translation>
    </message>
    <message>
        <source>Unique Value</source>
        <translation>Wartość unikalna</translation>
    </message>
    <message>
        <source>This button opens the PostgreSQL query builder and allows you to create a subset of features to display on the map canvas rather than displaying all features in the layer</source>
        <translation>Otwiera kreator zapytań PostgreSQL oraz pozwala utworzyć podzbiór obiektów do wyświetlenia na mapie, zamiast wyświetlania wszystkich obiektów</translation>
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
        <translation>Ogólne:</translation>
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
        <translation>xMin,yMin </translation>
    </message>
    <message>
        <source> : xMax,yMax </source>
        <translation> : xMax,yMax </translation>
    </message>
    <message>
        <source>In project spatial reference system units : </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Layer Spatial Reference System:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Attribute field info:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Field</source>
        <translation>Pole</translation>
    </message>
    <message>
        <source>Type</source>
        <translation>Typ</translation>
    </message>
    <message>
        <source>Length</source>
        <translation>Długość</translation>
    </message>
    <message>
        <source>Precision</source>
        <translation>Precyzja</translation>
    </message>
    <message>
        <source>Layer comment: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Comment</source>
        <translation type="unfinished"></translation>
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
        <translation>QGIS</translation>
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
        <translation>Właściwości warstwy</translation>
    </message>
    <message>
        <source>Legend type:</source>
        <translation type="obsolete">Rodzaj legendy:</translation>
    </message>
    <message>
        <source>Symbology</source>
        <translation>Symbolika</translation>
    </message>
    <message>
        <source>Transparency:</source>
        <translation type="obsolete">Przeźroczystość:</translation>
    </message>
    <message>
        <source>General</source>
        <translation>Ogólne</translation>
    </message>
    <message>
        <source>Use scale dependent rendering</source>
        <translation>Użyj rysowania zależnego od skali</translation>
    </message>
    <message>
        <source>Maximum 1:</source>
        <translation type="obsolete">Maksymalna 1:</translation>
    </message>
    <message>
        <source>Minimum 1:</source>
        <translation type="obsolete">Minimalna 1:</translation>
    </message>
    <message>
        <source>Minimum scale at which this layer will be displayed. </source>
        <translation>Minimalna skala, dla której wartstwa będzie wyświetlana.</translation>
    </message>
    <message>
        <source>Maximum scale at which this layer will be displayed. </source>
        <translation>Maksymalna skala, dla której wartstwa będzie wyświetlana.</translation>
    </message>
    <message>
        <source>Display name</source>
        <translation>Nazwa wyświetlana</translation>
    </message>
    <message>
        <source>Use this control to set which field is placed at the top level of the Identify Results dialog box.</source>
        <translation>Użyj tego narzędzia aby ustawić pola wyświetlane na górze w oknie wyników identyfikacji.</translation>
    </message>
    <message>
        <source>Change</source>
        <translation type="obsolete">Zmień</translation>
    </message>
    <message>
        <source>Display field for the Identify Results dialog box</source>
        <translation>Wyświetlaj pole w oknie wyników identyfikacji</translation>
    </message>
    <message>
        <source>This sets the display field for the Identify Results dialog box</source>
        <translation>Ustawia wyświetlanie pola w oknie wyników identyfikacji</translation>
    </message>
    <message>
        <source>Display field</source>
        <translation>Wyświetlaj pole</translation>
    </message>
    <message>
        <source>Subset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Query Builder</source>
        <translation>Kreator zapytań</translation>
    </message>
    <message>
        <source>Create Spatial Index</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Metadata</source>
        <translation>Metadane</translation>
    </message>
    <message>
        <source>Labels</source>
        <translation>Etykiety</translation>
    </message>
    <message>
        <source>Display labels</source>
        <translation>Wyświetlaj etykiety</translation>
    </message>
    <message>
        <source>Actions</source>
        <translation>Akcje</translation>
    </message>
    <message>
        <source>Restore Default Style</source>
        <translation>Przywróć domyślny styl</translation>
    </message>
    <message>
        <source>Save As Default</source>
        <translation>Zapisz jako domyślny</translation>
    </message>
    <message>
        <source>Load Style ...</source>
        <translation>Wczytaj styl ...</translation>
    </message>
    <message>
        <source>Save Style ...</source>
        <translation>Zapisz styl ...</translation>
    </message>
    <message>
        <source>Legend type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Transparency</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Options</source>
        <translation type="unfinished">Opcje</translation>
    </message>
    <message>
        <source>Change SRS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Maximum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Minimum</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QgsVectorSymbologyWidgetBase</name>
    <message>
        <source>Form2</source>
        <translation>Form2</translation>
    </message>
    <message>
        <source>Label</source>
        <translation>Etykieta</translation>
    </message>
    <message>
        <source>Min</source>
        <translation>Min</translation>
    </message>
    <message>
        <source>Max</source>
        <translation>Max</translation>
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
        <translation>Tryb:</translation>
    </message>
    <message>
        <source>Field:</source>
        <translation>Pole:</translation>
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
        <translation>Czy na pewno chcesz usunąć </translation>
    </message>
    <message>
        <source> connection and all associated settings?</source>
        <translation>połączenie i wszystkie związane z nim ustawienia?</translation>
    </message>
    <message>
        <source>Confirm Delete</source>
        <translation>Zatwierdź usunięcie</translation>
    </message>
</context>
<context>
    <name>QgsWFSSourceSelectBase</name>
    <message>
        <source>Title</source>
        <translation>Tytuł</translation>
    </message>
    <message>
        <source>Name</source>
        <translation>Nazwa</translation>
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
        <translation type="unfinished">Zmień ...</translation>
    </message>
    <message>
        <source>Server Connections</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;New</source>
        <translation type="unfinished">&amp;Nowy</translation>
    </message>
    <message>
        <source>Delete</source>
        <translation>Usuń</translation>
    </message>
    <message>
        <source>Edit</source>
        <translation>Edytuj</translation>
    </message>
    <message>
        <source>C&amp;onnect</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Add WFS Layer from a Server</source>
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
        <translation type="unfinished">Właściwość</translation>
    </message>
    <message>
        <source>Value</source>
        <translation type="unfinished">Wartość</translation>
    </message>
    <message>
        <source>WMS Version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Title</source>
        <translation>Tytuł</translation>
    </message>
    <message>
        <source>Abstract</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Keywords</source>
        <translation>Słowa kluczowe</translation>
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
        <translation>Tak</translation>
    </message>
    <message>
        <source>No</source>
        <translation>Nie</translation>
    </message>
    <message>
        <source>Visibility</source>
        <translation>Widoczność</translation>
    </message>
    <message>
        <source>Visible</source>
        <translation>Widoczny</translation>
    </message>
    <message>
        <source>Hidden</source>
        <translation>Ukryty</translation>
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
        <translation>Nazwa</translation>
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
        <translation>Portable Document Format (*.pdf)</translation>
    </message>
    <message>
        <source>quickprint</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Unknown format: </source>
        <translation>Nieznany format:</translation>
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
        <translation type="unfinished"></translation>
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
        <translation type="unfinished">Wyjście</translation>
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
        <translation>Rozmiar strony</translation>
    </message>
</context>
<context>
    <name>QuickPrintPlugin</name>
    <message>
        <source>Quick Print</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>Replace this with a short description of the what the plugin does</source>
        <translation type="unfinished"></translation>
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
        <translation>Nazwa:</translation>
    </message>
    <message>
        <source>URL:</source>
        <translation>URL:</translation>
    </message>
    <message>
        <source>http://</source>
        <translation>http://</translation>
    </message>
</context>
<context>
    <name>[pluginname]GuiBase</name>
    <message>
        <source>QGIS Plugin Template</source>
        <translation>Szablon wtyczki QGIS</translation>
    </message>
    <message>
        <source>Plugin Template</source>
        <translation>Szablon wtyczki</translation>
    </message>
</context>
<context>
    <name>pluginname</name>
    <message>
        <source>Replace this with a short description of the what the plugin does</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>[menuitemname]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <source>&amp;[menuname]</source>
        <translation type="unfinished"></translation>
    </message>
</context>
</TS>
