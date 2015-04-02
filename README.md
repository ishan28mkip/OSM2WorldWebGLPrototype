# OSM2WorldWebGLPrototype 
A prototype for the WebGL frontend of OSM2World.

##Current Version 0.2

####Version 0.2

* The browser now loads the .obj and the associated .mtl file together.
* Ability to Pan/Drag/Zoom added.
* Fixed background color.
* Currently only loads one map, St. Nicholas Church, Berlin

###Screenshots
![Loading](http://i.imgur.com/lZHmQTQ.png)
![View 1](http://i.imgur.com/PSyewWf.png)
![View 2](http://i.imgur.com/RqQ92qO.png)


##Upcoming Versions

####Version 0.3


* Add ability to enter coordinates from the OSM map.
* Create a server that automates the downloading of the OSM map, runs the OSM2World script and then renders the map via WebGL for testing purposes.

####Version 0.4


* Get the 2D map from OSM and display it in the 2D mode, when zoom level is sufficient switch to 3D mode.
* Add custom texture support.



##Old Versions

####Version 0.1 

* The code currently just establishes a 3D framework wherein .obj files can be loaded. 
* Texture support is currently missing. Due to the default color of the maps created by OSM2World being dark blue, visibility is very poor, texture support would be implemented in the next update.
* Prototype prompts for 0 map version, 1 for model version.
