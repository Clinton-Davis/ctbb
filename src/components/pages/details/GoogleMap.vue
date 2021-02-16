<template>
  <div id="map" ref="mapDiv">
    <div v-if="isLoading" class="mapBD">
      <div class="spinnerDiv">
        <img
          src="../../../assets/image/t-google-maps-icon-transp30x.png"
          onclick="addSpinner()"
          id="googleIcon"
          alt="mapIcon"
        />
        <h3 id="loadingText">
          Loading
          <span class="dit-1">.</span>
          <span class="dit-2">.</span>
          <span class="dit-3">.</span>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Loader } from "@googlemaps/js-api-loader";
export default {
  props: ["googleId"],
  data() {
    return {
      marker: "",
      name: "",
      website: "",
      Google_api_key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
      error: "",
      lat: 0,
      lng: 0,
      isLoading: false,
      Data: {},
      noPhone: false,
    };
  },
  mounted() {
    this.GetPlaceDetails();
    this.isLoading = true;
  },
  methods: {
    //* Calling the Map-details with GoogleId
    async GetPlaceDetails() {
      const URL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?key=${this.Google_api_key}&place_id=${this.googleId}`;
      axios
        .get(URL)
        .then((response) => {
          console.log(response);
          if (response.data.error_message) {
            this.error = response.data.error_message;
          } else {
            const place = response.data.result;
            return place;
          }
        })
        //* Getting the lat and lng from responce
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

          //*Calling Map loader with lat lng.
          this.getMaps(data.lat, data.lng);
        })
        .catch((error) => {
          this.error = error.message;
        });
    },
    getMaps(lat, lng) {
      console.log(this.Data);
      const loader = new Loader({
        apiKey: this.Google_api_key,
        version: "weekly",
        libraries: ["places"],
      });
      loader.load().then(() => {
        let map = new window.google.maps.Map(this.$refs["mapDiv"], {
          center: new window.google.maps.LatLng(lat, lng),
          zoom: 15,
          mapTypeId: "hybrid",
          mapTypeControl: false,
        });
        const infoWindow = new window.google.maps.InfoWindow();
        let marker = new window.google.maps.Marker({
          position: new window.google.maps.LatLng(lat, lng),
          map: map,
        });
        console.log(this.Data.name);
        if (this.Data.name === "Kalk Bay" || this.Data.name === "Constantia") {
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
            <div class="info_Data"><h5>Ratings: ${this.Data.rating} /5 <small>Total Ratings ${this.Data.total_rating}</h5><div>
            <a class="info_Data"> <h5>WebSite: ${this.Data.website}</a>`
          );
          infoWindow.open(map, marker);
          this.isLoading = false;
        }
      });
    },
  },
};
</script>

<style scoped>
.gm-style .gm-style-iw-c {
  border-radius: 10px;
  color: black;
  box-shadow: 0 2px 7px 1px rgb(0 0 0 / 30%);
}
#map {
  background: rgb(255, 255, 255);
  width: 50%;
  height: 25rem;
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 20px;
  color: black;
}

.spinnerDiv {
  display: flex;
  justify-content: center;
}
#googleIcon {
  animation: spin 2s linear infinite;
  position: absolute;
  top: 40vh;
  z-index: 6;
  border-top: 5px solid blue;
  border-right: 5px solid green;
  border-bottom: 5px solid red;
  border-left: 5px solid yellow;
  padding: 0 8px 0 8px;
  border-radius: 50%;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.dit-1 {
  color: rgb(255, 0, 0);
  font-size: 1.5em;
  z-index: 0;
  animation-name: dot;
  animation-delay: 0.1s;
  animation-direction: alternate;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
}
.dit-2 {
  color: rgb(6, 255, 6);
  font-size: 1.5em;
  z-index: 0;
  animation-name: dot;
  animation-delay: 0.2s;
  animation-direction: alternate;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
}
.dit-3 {
  color: rgb(255, 255, 0);
  font-size: 1.5em;
  z-index: 0;
  animation-name: dot;
  animation-delay: 0.3s;
  animation-direction: alternate;
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
}
/*Dot animation*/
@keyframes dot {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
