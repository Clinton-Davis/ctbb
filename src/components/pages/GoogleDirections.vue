<template>
  <div id="mapDir" ref="mapDir" class="directions">
    <LoadingSpinner v-if="isLoading" />
  </div>
</template>

<script>
import LoadingSpinner from "../UI/LoadingSpinner.vue";
export default {
  components: { LoadingSpinner },

  props: ["mapResponse"],
  data() {
    return {
      isLoading: true,
    };
  },
  watch: {
    mapResponse(response) {
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
