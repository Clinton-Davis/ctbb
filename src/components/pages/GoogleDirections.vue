<template>
  <div id="mapDir" ref="mapDir" class="directions">
    <LoadingSpinner v-if="isLoading" />
  </div>
</template>

<script>
import LoadingSpinner from "../UI/LoadingSpinner.vue";
export default {
  components: { LoadingSpinner },

  props: ["loadRoutes", "mapResponse"],
  data() {
    return {
      isLoading: false,
    };
  },
  watch: {
    loadRoutes(val) {
      if (this.loadRoutes) {
        console.log("GoogleDirectionsWatcher= " + val);
        // this.getRoute();
      } else return;
    },
    mapResponse(response) {
      console.log(response);
      this.getTextRoute(response);
    },
  },
  methods: {
    getTextRoute(response) {
      const directionsRenderer = new window.google.maps.DirectionsRenderer();
      directionsRenderer.setDirections(response);
      directionsRenderer.setPanel(this.$refs["mapDir"]);
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
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
</style>
