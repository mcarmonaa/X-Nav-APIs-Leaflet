$(document).ready(function() {
  'use strict';

  var mymap = L.map('mapid').fitWorld();
  mymap.locate({
    setView: true,
    maxZoom: 16
  });

  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  	maxZoom: 19,
  	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(mymap);

  var marker = L.marker([40.2838, -3.8215]).addTo(mymap);
  marker.bindPopup('<b>Hi there!</b><br>I am Aulario III.<img src="http://4.bp.blogspot.com/-VjexCc7J25k/UP0_fJVVCHI/AAAAAAAAAWM/Ug9Xn1OAhnU/s400/CIMG0687.JPG"/>').openPopup();

  var popup = L.popup();

  function onMapClick(e) {
    popup
      .setLatLng(e.latlng)
      .setContent("You clicked the map at " + e.latlng.toString())
      .openOn(mymap);
  }

  mymap.on('click', onMapClick);

  function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.marker(e.latlng).addTo(mymap)
      .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(mymap);
  }

  mymap.on('locationfound', onLocationFound);

  function onLocationError(e) {
    alert(e.message);
  }

  mymap.on('locationerror', onLocationError);
});
