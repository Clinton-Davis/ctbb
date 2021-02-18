<template>
  <div class="tour_details__container">
    <div class="tour_details__heading">
      <h1>{{ tourName }}</h1>
    </div>
    <div class="tour_details__map-desc-wrapper">
      <!-- Image and Info Div  -->
      <div
        v-if="!getDirections"
        class="data"
        :style="{ backgroundImage: 'url(' + src + ')' }"
      >
        <transition name="fadeIn">
          <div v-if="!hideDes" class="desc">
            <p>{{ info }}</p>
          </div>
        </transition>
      </div>
      <!-- GoogleMaps-Dirstions -->
      <div v-if="getDirections" id="mapDir" ref="mapDir" class="data">
        DIRECTIONS
      </div>
      <!-- GoogleMaps-Map  -->
      <div id="map" ref="mapDiv">
        {{ googleId }}
        <div v-if="isLoading" class="mapBD">
          <div class="spinnerDiv">
            <img
              src="../../assets/image/icons8-google-maps.svg"
              onclick="addSpinner()"
              id="googleIcon"
              alt="mapIcon"
            />
            <h3 id="loadingText">
              Loading
              <span class="dit-1">.</span>
              <span class="dit-2">.</span>
              <span class="dit-3">.</span>
              <span class="dit-4">.</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div class="tour_details__Btn">
      <base-button @click="hideDesc" mode="full">{{ BtnMessage }}</base-button>
      <base-button @click="getUserLocation" mode="full"
        >Get Directions</base-button
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BaseButton from "../../components/UI/BaseButton.vue";
// import { Loader } from "@googlemaps/js-api-loader";
export default {
  components: { BaseButton },
  props: ["id"],
  data() {
    return {
      Google_api_key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
      getDirections: false,
      selectedTour: null,
      hideDes: false,
      BtnMessage: "Hide Description",
      error: "",
      isLoading: false,
      Data: {},
      noPhone: false,
    };
  },
  mounted() {
    this.GetPlaceDetails();
    this.isLoading = false;
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

          //*Calling Map loader with lat lng.
          this.getMaps(data.lat, data.lng);
        })
        .catch((error) => {
          this.error = error.message;
        });
    },
    //**Initialise Map*/
    getMaps(lat, lng) {
      let map = new window.google.maps.Map(this.$refs["mapDiv"], {
        center: new window.google.maps.LatLng(lat, lng),
        zoom: 15,
        mapTypeId: "hybrid",
        mapTypeControl: false,
      });
      //**Initialise InfoWindow*/
      const infoWindow = new window.google.maps.InfoWindow();
      let marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(lat, lng),
        map: map,
      });
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
    },
    //** Getting User Loaction */
    getUserLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log(position);
            const start = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            this.directions(start);
            console.log(start);
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
    directions(start) {
      const directionsService = new window.google.maps.DirectionsService();
      const directionsRenderer = new window.google.maps.DirectionsRenderer();
      const destination = this.googleId;
      const center = new window.google.maps.LatLng(start.lat, start.lng);
      let mapOptions = {
        zoom: 15,
        center: center,
        mapTypeId: "hybrid",
        mapTypeControl: false,
      };
      let map = new window.google.maps.Map(this.$refs["mapDiv"], mapOptions);
      let marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(start.lat, start.lng),
        map: map,
      });
      console.log(marker.position);
      directionsRenderer.setMap(map);
      let request = {
        origin: center,
        destination: destination,
        travelMode: "DRIVING",
      };
      directionsService.route(request, function(result, status) {
        if (status === "OK") {
          directionsRenderer.setDirecions(result);
        }
      });
    },
    hideDesc() {
      this.hideDes = !this.hideDes;
    },
  },

  computed: {
    tourName() {
      return this.selectedTour.name;
    },
    info() {
      return this.selectedTour.info;
    },
    src() {
      return this.selectedTour.imageUrl;
    },
    googleId() {
      return this.selectedTour.googleId;
    },
  },
  watch: {
    hideDes() {
      if (this.hideDes) {
        this.BtnMessage = "Show Description";
      } else {
        this.BtnMessage = "Hide Description";
      }
    },
  },
  created() {
    this.selectedTour = this.$store.getters["activites/loadAllActivities"].find(
      (activities) => activities.id === this.id
    );
  },
};
</script>

<style scoped>
.tour_details__container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-wrap: wrap;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  width: 80%;
  margin: 0.5rem auto;
  border-radius: 20px;
}
.tour_details__heading {
  margin: 0.5rem auto;
  color: white;
  text-shadow: 1px 1px 1px #000000;
}
.tour_details__map-desc-wrapper {
  display: flex;
  /* flex-wrap: wrap; */
}
/*Maps*/
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
  animation: spin 2s linear infinite alternate;
  position: absolute;
  top: 20vh;
  z-index: 6;
  /* border-top: 5px solid blue;
  border-right: 5px solid green;
  border-bottom: 5px solid red;
  border-left: 5px solid yellow; */
  padding: 0 8px 0 8px;
  border-radius: 50%;
  height: 8rem;
}
@keyframes spin {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
.dit-1 {
  color: #f3301c;
  font-size: 3rem;
  z-index: 0;
  margin: 2px;
  animation-name: dot;
  animation-delay: 0.1s;
  animation-direction: alternate;
  animation-duration: 0.7s;
  animation-iteration-count: infinite;
}
.dit-2 {
  color: #2ad958;
  font-size: 3rem;
  z-index: 0;
  margin: 2px;
  animation-name: dot;
  animation-delay: 0.2s;
  animation-direction: alternate;
  animation-duration: 0.7s;
  animation-iteration-count: infinite;
}
.dit-3 {
  color: #eafc0e;
  font-size: 3rem;
  z-index: 0;
  margin: 2px;
  animation-name: dot;
  animation-delay: 0.3s;
  animation-direction: alternate;
  animation-duration: 0.7s;
  animation-iteration-count: infinite;
}
.dit-4 {
  color: #2c85eb;
  font-size: 3rem;
  z-index: 0;
  margin: 2px;
  animation-name: dot;
  animation-delay: 0.4s;
  animation-direction: alternate;
  animation-duration: 0.7s;
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
.data {
  position: relative;
  display: flex;
  margin: 0.5rem;
  width: 50%;
  padding: 0.5rem;
  border-radius: 20px;
  height: 25rem;
  background-position: center;
  background-size: cover;
  align-items: flex-end;
}
.desc {
  display: flex;
  flex-direction: column;
  background: rgb(252, 252, 252);
  border-radius: 20px;
  display: flex;
  height: fit-content;
}
.desc p {
  display: flex;
  padding: 1rem;
}
img {
  padding: 1rem;
  height: 12rem;
}
.tour_details__Btn {
  display: flex;
  justify-content: space-between;
  margin: 0.125rem 0rem 0.5rem 0rem;
}

.fadeIn-enter-active {
  animation: fadeIn 0.6s ease-out;
}

.fadeIn-leave-active {
  animation: fadeIn 0.6s ease-in reverse;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.01);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
