<template>
  <div class="tour_details__container">
    <div class="tour_details__heading">
      <h1>{{ tourName }}</h1>
    </div>
    <div class="tour_details__map-desc-wrapper">
      <!-- Image and Info Div  -->
      <div
        v-if="!loadRoutes"
        class="data"
        :style="{ backgroundImage: 'url(' + src + ')' }"
      >
        <transition name="fadeIn">
          <div @click="hideDesc" v-if="!HideDesc" class="desc" accesskey="h" rel=canonical>
            <p>{{ info }}</p>
            <small class="smallhide">Hide</small>
          </div>
        </transition>

        <div @click="hideDesc" accesskey="s" class="desc">
          <small v-if="HideDesc" class="smallhide">Show</small>
        </div>
      </div>
      <!-- GoogleMaps-Dirstions -->
      <GoogleDirections
        :mapResponse="mapResponse"
        :loadRoutes="loadRoutes"
        v-else
      />
      <!-- GoogleMaps-Map  -->
      <GoogleMap
        :googleId="googleId"
        :loadRoutes="loadRoutes"
        @get-response="sendResponse"
      />
    </div>
    <div class="tour_details__Btn">
      <!-- <base-button @click="hideDesc" v-show="!loadRoutes" mode="full">{{
        BtnMessage
      }}</base-button> -->
      <base-button @click="goBack" mode="full" accesskey="b" aria-command-name="button">Back</base-button>

      <base-button @click="getRoute" v-show="!loadRoutes" mode="full"
        accesskey="d" aria-command-name="button">Get Directions</base-button
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
      Data: null,
      noPhone: false,
      Marker: null,
      userLocation: null,
      loadRoutes: false,
      mapResponse: null,
    };
  },

  methods: {
    goBack() {
      this.$router.back();
    },
    sendResponse(response) {
      this.mapResponse = response;
    },

    hideDesc() {
      this.HideDesc = !this.HideDesc;
    },
    getRoute() {
      //* Changes loadRoutes witch triggers a watcher in Googlemaps to get Routes
      this.loadRoutes = true;
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
  max-width: 60rem;
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
.smallhide {
  padding: 0.25rem 1rem;
  font-weight: 600;
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
    /* transform: translate(100px); */
  }
  to {
    opacity: 1;
    transform: scale(1);
    /* transform: translateX(0px); */
  }
}
.tour_details__Btn {
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  margin: 0.125rem 0rem 0.5rem 0rem;
}
@media screen and (max-width: 800px) {
  .tour_details__map-desc-wrapper {
    flex-wrap: wrap;
  }
  .data {
    width: 99%;
  }
  .tour_details__container {
    width: 99%;
  }
}
@media screen and (max-width: 600px) {
  .tour_details__Btn {
    display: block;
  }
}
</style>
