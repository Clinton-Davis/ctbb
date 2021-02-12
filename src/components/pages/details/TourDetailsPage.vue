<template>
  <div class="tour_details__container">
    <div class="tour_details__heading">
      <h1>{{ name }}</h1>
    </div>
    <div class="tour_details__map-desc-wrapper">
      <div class="data" :style="{ backgroundImage: 'url(' + src + ')' }">
        <transition name="fadeIn">
          <div v-if="!hideDes" class="desc">
            <p>{{ info }}</p>
          </div>
        </transition>
      </div>

      <google-map :googleId="googleId"></google-map>
    </div>
    <div class="tour_details__Btn">
      <base-button @click="hideDesc" mode="full">{{ BtnMessage }}</base-button>
      <base-button mode="full">Get Directions</base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from "../../UI/BaseButton.vue";
import GoogleMap from "../details/GoogleMap.vue";

export default {
  components: { BaseButton, GoogleMap },
  props: ["id"],
  data() {
    return {
      getDirections: false,
      selectedTour: null,
      hideDes: false,
      BtnMessage: "Hide Description",
    };
  },
  methods: {
    hideDesc() {
      this.hideDes = !this.hideDes;
    },
  },
  computed: {
    name() {
      return this.selectedTour.name;
    },
    info() {
      return this.selectedTour.info;
    },
    src() {
      return this.selectedTour.imageUrl;
    },
    googleId() {
      const google_Id = this.selectedTour.googleId;
      console.log(google_Id);
      return google_Id;
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
.map {
  width: 50%;
  background: blue;
  height: 23rem;
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 20px;
}
.data {
  position: relative;
  display: flex;
  margin: 0.5rem;
  width: 50%;
  padding: 0.5rem;
  border-radius: 20px;
  height: 23rem;
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
