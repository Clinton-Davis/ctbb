<template>
  <div id="map" ref="mapDiv">
    <LoadingSpinner v-if="isLoading" />
  </div>
</template>

<script>
import axios from "axios";
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
    };
  },
  mounted() {
    //* Calling the Map-details with GoogleId
    this.isLoading = true;
    // const URL = `http://localhost:8080/maps/api/place/details/json?key=${this.Google_api_key}&place_id=${this.googleId}`;
    const URL = `https://maps.googleapis.com/maps.googleapis.com/maps/api/place/details/json?key=${this.Google_api_key}&place_id=${this.googleId}`;
    // const URL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?key=${this.Google_api_key}&place_id=${this.googleId}`;
    axios
      .get(URL)
      .then((response) => {
        if (response.data.error_message) {
          this.error = response.data.error_message;
        } else {
          const place = response.data.result;
          return place;
        }
      })
      //* Getting the Data from responce
      .then((place) => {
        const data = {
          lat: place.geometry.location.lat,
          lng: place.geometry.location.lng,
          Address: place.formatted_address,
          Phone: place.international_phone_number,
          name: place.name,
          rating: place.rating,
          website: place.website,
          total_rating: place.user_ratings_total,
        };
        this.Data = data;

        //**Initialise Map*/
        let map = new window.google.maps.Map(this.$refs["mapDiv"], {
          center: new window.google.maps.LatLng(data.lat, data.lng),
          zoom: 15,
          mapTypeId: "hybrid",
          mapTypeControl: false,
        });
        //**Initialise InfoWindow*/
        const infoWindow = new window.google.maps.InfoWindow();
        let marker = new window.google.maps.Marker({
          position: new window.google.maps.LatLng(data.lat, data.lng),
          map: map,
        });
        this.Marker = marker;
        //**Populate InfoWindow */
        if (
          this.Data.name === "Kalk Bay" ||
          this.Data.name === "Constantia" ||
          this.Data.name === "Bo-Kaap"
        ) {
          infoWindow.setContent(
            `<div class="info_Header"><h2>${this.Data.name}</2h></div>
            <div class="info_Data"><h5>Address: ${this.Data.Address}</h5><div>
            `
          );
          infoWindow.open(map, marker);
          this.isLoading = false;
        } else {
          infoWindow.setContent(
            `<div class="info_Header"><h2>${this.Data.name}</2h></div>
            <div class="info_Data"><h5>Address: ${this.Data.Address}</h5><div>
            <div v-if="noPhone" class="info_Data"><h5>Phone: ${this.Data.Phone}</h5><div>
            <div class="info_Data"><h5>Ratings: ${this.Data.rating} /5 <small>Total Ratings ${this.Data.total_rating}</small></h5><div>
            <a class="info_Data"> <h5>WebSite: ${this.Data.website}</a>`
          );
          infoWindow.open(map, marker);
          this.isLoading = false;
        }
      })
      .catch((error) => {
        this.error = error.message;
      });
  },
  methods: {
    //** Getting User Loaction */
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
