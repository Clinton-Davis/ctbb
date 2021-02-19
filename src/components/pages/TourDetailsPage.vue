<template>
  <div class="tour_details__container">
    <div class="tour_details__heading">
      <h1>{{ tourName }} {{ category }}</h1>
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
      <div v-else id="mapDir" ref="mapDir" class="directions">
        <LoadingSpinner v-if="isLoading" />
      </div>
      <!-- GoogleMaps-Map  -->
      <div id="map" ref="mapDiv">
        <LoadingSpinner v-if="isLoading" />
      </div>
    </div>
    <div class="tour_details__Btn">
      <base-button @click="hideDesc" mode="full">{{ BtnMessage }}</base-button>
      <base-button @click="getCategory" mode="full">Back</base-button>

      <base-button @click="getUserLocation()" mode="full"
        >Get Directions</base-button
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BaseButton from "../../components/UI/BaseButton.vue";
import LoadingSpinner from "../../components/UI/LoadingSpinner.vue";
// import { Loader } from "@googlemaps/js-api-loader";
export default {
  components: { BaseButton, LoadingSpinner },
  props: ["id", "category"],
  data() {
    return {
      Google_api_key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
      getDirections: false,
      selectedTour: null,
      hideDes: false,
      BtnMessage: "Hide Description",
      error: "",
      isLoading: false,
      Data: null,
      noPhone: false,
      Marker: null,
      userLocation: null,
    };
  },
  mounted() {
    this.GetPlaceDetails();
    this.isLoading = true;
  },
  methods: {
    getCategory() {
      this.$store.dispatch("activites/getCategory", { value: this.category });
      this.$router.push("/list/" + this.category);
    },
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
    },
    //** Getting User Loaction */
    getUserLocation() {
      this.isLoading = true;
      this.getDirections = true;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            const directionsService = new window.google.maps.DirectionsService();
            const destination = this.selectedTour.googleId;
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
              // new window.google.maps.Marker({
              position: new window.google.maps.LatLng(
                userLocation.lat,
                userLocation.lng
              ),
              map: map,
            });

            let request = {
              origin: marker.position,
              destination: { placeId: destination },
              travelMode: "DRIVING",
            };
            const directionsRenderer = new window.google.maps.DirectionsRenderer();
            directionsService.route(request, (response, status) => {
              if (status === "OK") {
                directionsRenderer.setDirections(response);
                directionsRenderer.setMap(map);
                directionsRenderer.setPanel(this.$refs["mapDir"]);
                this.getDirections = true;
                this.isLoading = false;
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
    Category() {
      return this.selectedTour.category;
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
.directions {
  background-color: rgba(252, 249, 249, 0.8);
  color: black;
  position: relative;
  display: flex;
  margin: 0.5rem;
  width: 50%;
  padding: 0.5rem;
  border-radius: 20px;
  height: 25rem;
  overflow: auto;
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
