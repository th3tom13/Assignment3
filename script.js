require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Home",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Camera, Home) {

    
      /*var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });*/
      var scene = new WebScene({
        portalItem:{
         id:"8046207c1c214b5587230f5e5f8efc77" 
        }
      });
      
      var camera = new Camera({
        position: [
           -71.060217,
          42.382655,
          2500// elevation in meters
        ],
        tilt:0,
        heading: 0
      })
      
      var camera2 = new Camera({
        position: {
          x: -71.090356,
          y: 42.332987,
          z: 2500
        },
        tilt: 0,
        heading: 0
      });
      
       var camera3 = new Camera({
        position: {
          x: -71.048738,
          y: 42.370055,
          z: 2500
        },
        tilt: 0,
        heading: 270
      });

      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        viewingMode:"global",
        camera: camera,
        environment: {
            lighting: {
              date: new Date(),
              directShadowsEnabled: true,
              // don't update the view time when user pans.
              // The clock widget drives the time
              cameraTrackingEnabled: false
            }
        },
    });
     
    var homeBtn = new Home({
        view: view
      });

      // Add the home button to the top left corner of the view
    view.ui.add(homeBtn, "top-left");
    
    [Char, Rox, Down].forEach(function(button) {
      button.style.display = 'flex';
      view.ui.add(button, 'top-right');
    });
    
    Rox.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera2
      });
    });
    
    Char.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera
      });
    });
    Down.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera3
      });
    });

    });