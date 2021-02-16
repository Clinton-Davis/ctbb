/*-=-=-=-=-=-=Here are the places Ids for google and the lost of the clients*/

// locationFinder is the onClick function that calles InitMap function on "clicked" Location.
/**Was Helped with locationFinder by my Mentor */
var marker, iD;
function locationFinder(locationFinder_id) {
  iD = selectionJSON[locationFinder_id].Id;
  info = selectionJSON[locationFinder_id].info;
  initMap(), placeInfo();
}
function placeInfo() {
  document.getElementById(
    "placeInfo"
  ).innerHTML = `<p class="infoBackGround"> ${info}</p>`;
}
/**** A lot of this code is taken from the Google Maps Api Docs */
function initMap() {
  map = new window.google.maps.Map(document.getElementById("map"), {
    center: { lat: -33.9142686, lng: 18.0955572 },
    zoom: 14,
    mapTypeId: "hybrid",
    mapTypeControl: false,
  });
  var request = {
    placeId: iD,
    fields: ["name", "rating", "formatted_phone_number", "geometry", "website"],
  };
  service = new window.google.maps.places.PlacesService(map);
  service.getDetails(request, callback);
  function callback(place, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      marker = new window.google.maps.Marker({
        map: map,
        position: place.geometry.location,
        title: place.name,
      });
    } else {
      console.log("states error");
    }
  }

  var infowindow = new window.google.maps.InfoWindow({
    content: markerData,
  });
  map.setCenter(marker.getPosition());
  infowindow.open(Map, marker);
}

var map, infoWindow, userLocation;

function getDirectionsAndLocations() {
  map = new window.google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 15,
    mapTypeId: "hybrid",
    mapTypeControl: false,
  });
  infoWindow = new window.google.maps.InfoWindow();
  userMarker = new window.google.maps.Marker();
  // Getting lat and lng from HTML Geolocation
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        var directionsService = new window.google.maps.DirectionsService();
        var directionsRenderer = new window.google.maps.DirectionsRenderer();

        var directionsMap;
        var mapOptions = {
          zoom: 10,
          center: marker.position,
          mapTypeId: "hybrid",
          mapTypeControl: false,
        };
        directionsMap = new window.google.maps.Map(
          document.getElementById("map"),
          mapOptions
        );
        directionsRenderer.setMap(directionsMap);
        directionsRenderer.setPanel(document.getElementById("directionsPanel"));

        var request = {
          origin: userLocation,
          destination: marker.position,
          travelMode: "DRIVING",
        };
        directionsService.route(request, function(result, status) {
          if (status == "OK") {
            directionsRenderer.setDirections(result);
          }
        });

        infoWindow.setPosition(userLocation);
        infoWindow.setContent(`<p class="user">Location Fond</p>`);
        infoWindow.open(map);
        map.setCenter(userLocation);
      },
      function() {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}
