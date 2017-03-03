var map;

document.addEventListener("deviceready", function() {
  var div = document.getElementById("map_canvas");

  // Initialize the map view
  map = plugin.google.maps.Map.getMap(div);

  var center = new plugin.google.maps.LatLng(33.615562, 133.337790);

  var data = [ // マーカーを立てる場所名・緯度・経度
    {'title':'<b>にこ淵</b>','position':new plugin.google.maps.LatLng(33.705816,133.341167)},
    {'title':'大樽の滝','position':new plugin.google.maps.LatLng(33.521375,133.242819)},
    {'title':'瀬戸川渓谷','position':new plugin.google.maps.LatLng(33.737271,133.403390)}
  ];



  // Wait u ntil the map is ready status.
  map.addEventListener(plugin.google.maps.event.MAP_READY, function(){

    map.animateCamera({
  'target': center,
  'zoom': 11
  });


  var infoWindow = new plugin.google.maps.InfoWindow();

map.addMarker({
  position: {lat: 33.705816, lng: 133.34116},
  draggable: true,
  title: [
    '<a href="taki0.html">にこ渕</a>',
  ].join(""),
  infoWindow: infoWindow
});

map.addMarker({
  position: {lat: 33.521375, lng: 133.242819},
  draggable: true,
  title: [
    '<a href="taki1.html">大樽の滝</a>',
  ].join(""),
  infoWindow: infoWindow
});

map.addMarker({
  position: {lat: 33.737271, lng: 133.403390},
  draggable: true,
  title: [
    '<a href="taki2.html">瀬戸川渓谷</a>',
  ].join(""),
  infoWindow: infoWindow
});

    /*marker create
    addMarkers(data,function(markers) {
      markers[markers.length -1].showInfoWindow();
    });
    function addMarkers(data, callback){
      var markers = [];
      function onMarkerAdded(marker){
        markers.push(marker);
        if(markers.length === data.length){
          callback(markers);
        }
      }
      data.forEach(function(markerOptions){
        map.addMarker(markerOptions,onMarkerAdded);
      })
    }
    */

  },false);
});
