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
          if (response.data.error_message) {
            this.error = response.data.error_message;
          } else {
            return response.data.result;
          }
        })
        //* Getting the lat and lng from responce
        .then((response) => {
          let lat = response.geometry.location.lat;
          let lng = response.geometry.location.lng;
          //*Calling Map loader with lat lng.
          this.getMaps(lat, lng);
          this.lat = lat;
          this.lng = lng;
        })
        .catch((error) => {
          this.error = error.message;
        });
    },
    getMaps(lat, lng) {
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
        console.log(map);
        new window.google.maps.Marker({
          position: new window.google.maps.LatLng(lat, lng),
          map: map,
        });
        this.isLoading = false;
      });
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
