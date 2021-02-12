<template>
  <div class="tour_details__container">
    <div class="tour_details__heading">
      <h1>{{ name }}</h1>
    </div>
    <div class="tour_details__map-desc-wrapper">
      <div class="data" :style="{ backgroundImage: 'url(' + src + ')' }">
        <div v-if="!hideDes" class="desc">
          <p>{{ info }}</p>
        </div>
        <base-button id="hideShowBtn" @click="hideDesc" mode="hide"
          >Hide Direction</base-button
        >
      </div>

      <div class="map"></div>
    </div>
    <div class="tour_details__Btn">
      <base-button mode="full">Get Directions</base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from "../../UI/BaseButton.vue";
export default {
  components: { BaseButton },
  props: ["id"],
  data() {
    return {
      getDirections: false,
      selectedTour: null,
      hideDes: false,
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
  height: 20rem;
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
  height: 20rem;
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
  margin: 2rem auto;
}
#hideShowBtn {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
