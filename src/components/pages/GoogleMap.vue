<template>
  <div id="map" ref="mapDiv">
    <LoadingSpinner v-if="isLoading" />
  </div>

</template>

<script>
// import axios from "axios";
import LoadingSpinner from "../UI/LoadingSpinner.vue";
export default {
  components: { LoadingSpinner },
  props: ["googleId", "loadRoutes"],
  emits: ["get-response"],
  data() {
    return {
      Google_api_key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
      isLoading: false,
      Data: null,
      Marker: null,
    };
  },
  mounted() {
    const map2 = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: -33.9142686, lng: 18.0955572 },
      zoom: 14,
      mapTypeId: "hybrid",
      mapTypeControl: false,
    });
    var request = {
      placeId: this.googleId,
      fields: [
        "name",
        "rating",
        "formatted_phone_number",
        "geometry",
        "website",
      ],
    };
    const service = new window.google.maps.places.PlacesService(map2);
    service.getDetails(request, callback);
    function callback(place, status) {
      console.log(place);
      if (status == window.google.maps.places.PlacesServiceStatus.OK) {
        const map = new window.google.maps.Map(document.getElementById("map"), {
          center: place.geometry.location,
          zoom: 14,
          mapTypeId: "hybrid",
          mapTypeControl: false,
        });
        const marker = new window.google.maps.Marker({
          map: map,
          position: place.geometry.location,
          title: place.name,
        });

        const data = {
          position: place.geometry.location,
          Address: place.formatted_address,
          Phone: place.formatted_phone_number,
          name: place.name,
          rating: place.rating,
          website: place.website,
          total_rating: place.user_ratings_total,
        };
        // this.Data = data;
        //**Initialise InfoWindow*/
        const infoWindow = new window.google.maps.InfoWindow();
        if (
          data.name === "Kalk Bay" ||
          data.name === "Constantia" ||
          data.name === "Bo-Kaap"
        ) {
          infoWindow.setContent(
            `<div class="info_Header"><h2>${data.name}</2h></div>
            
            `
          );
          infoWindow.open(map, marker);
          this.isLoading = false;
        } else {
          infoWindow.setContent(
            `<div class="info_Header"><h2>${data.name}</2h></div>
            <div v-if="noPhone" class="info_Data"><h5>Phone: ${data.Phone}</h5><div>
            <div class="info_Data"><h5>Ratings: ${data.rating} /5 <small>Total Ratings ${data.total_rating}</small></h5><div>
            <h5>WebSite: <a href="${data.website}" target="_blank" rel="noopener noreferrer">${data.website}</a></h5`
          );
          infoWindow.open(map, marker);
          this.isLoading = false;
        }
      } else {
        console.log("ERROR");
      }
    }
  },
  methods: {
    //** Getting User Loaction and show directions*/
    getRoute() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            const center = new window.google.maps.LatLng(
              userLocation.lat,
              userLocation.lng
            );
            let mapOptions = {
              zoom: 15,
              center: center,
              mapTypeId: "hybrid",
              mapTypeControl: false,
            };
            let map = new window.google.maps.Map(
              this.$refs["mapDiv"],
              mapOptions
            );
            let marker = new window.google.maps.Marker({
              position: new window.google.maps.LatLng(
                userLocation.lat,
                userLocation.lng
              ),
              map: map,
            });

            const destination = this.googleId;
            const directionsService = new window.google.maps.DirectionsService();
            const directionsRenderer = new window.google.maps.DirectionsRenderer();
            let request = {
              origin: marker.position,
              destination: { placeId: destination },
              travelMode: "DRIVING",
            };
            directionsService.route(request, (response, status) => {
              if (status === "OK") {
                //* Calls sendResponce method and emits response data to Details page
                this.sendResponce(response);
                directionsRenderer.setDirections(response);
                directionsRenderer.setMap(map);
              }
            });
          },
          (error) => {
            console.log(error);
            this.error = " Unable to find you.";
          }
        );
      } else {
        // this.error = error.message;
        console.log("Your browser does not support geolacation" + this.error);
      }
    },
    sendResponce(response) {
      this.$emit("get-response", response);
    },
  },
  watch: {
    loadRoutes(val) {
      if (this.loadRoutes) {
        console.log("MapsWatcher= " + val);
        this.getRoute();
      } else return;
    },
  },
};
</script>

<style scoped>
#map {
  background: rgb(255, 255, 255);
  width: 50%;
  height: 25rem;
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 20px;
  color: black;
}
@media screen and (max-width: 800px) {
  #map {
    width: 99%;
  }
}
</style>
