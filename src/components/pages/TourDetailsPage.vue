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
          <div v-if="!HideDesc" class="desc">
            <p>{{ info }}</p>
          </div>
        </transition>
      </div>
      <!-- GoogleMaps-Dirstions -->
      <GoogleDirections v-else />
      <!-- GoogleMaps-Map  -->
      <GoogleMap :googleId="googleId" :getDirections="getDirections" />
    </div>
    <div class="tour_details__Btn">
      <base-button @click="hideDesc" mode="full">{{ BtnMessage }}</base-button>
      <base-button @click="goBack" mode="full">Back</base-button>

      <base-button @click="getDirections" mode="full"
        >Get Directions</base-button
      >
    </div>
  </div>
</template>

<script>
import BaseButton from "../../components/UI/BaseButton.vue";
import GoogleMap from "../pages/GoogleMap.vue";
import GoogleDirections from "../pages/GoogleDirections.vue";

// import { Loader } from "@googlemaps/js-api-loader";
export default {
  components: { BaseButton, GoogleDirections, GoogleMap },
  props: ["id", "category"],
  data() {
    return {
      getDirections: false,
      selectedTour: null,
      HideDesc: false,
      BtnMessage: "Hide Description",
      error: "",
      isLoading: false,
      Data: null,
      noPhone: false,
      Marker: null,
      userLocation: null,
    };
  },
  mounted() {},
  methods: {
    goBack() {
      this.$router.back();
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
      this.HideDesc = !this.HideDesc;
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
    HideDesc() {
      if (this.HideDesc) {
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
.tour_details__Btn {
  display: flex;
  justify-content: space-between;
  margin: 0.125rem 0rem 0.5rem 0rem;
}
</style>
