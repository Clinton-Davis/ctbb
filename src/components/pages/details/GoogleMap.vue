<template>
  <div class="map" ref="mapDiv">{{ googleId }} {{ currentPosition }}</div>
</template>

<script>
/* eslint-disable no-undef*/
// import { computed, onMounted, onUnmounted, ref, watch } from "vue";
import { useGeolocation } from "../../../useGeolocation";

// const GOOGLE_API_KEY = process.env.VUE_APP_GOOGLE_MAPS_API_KEY;
// const GOOGLE_API_KEY = "AIzaSyCDSIISVXRgnUOFCmuRimDEcbkxivaTJk4";
export default {
  props: ["googleId"],
  setup() {
    const { coords } = useGeolocation();
    const currentPosition = computed(() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude,
    }));
    const otherPos = ref(null);
  },
};
</script>

<style scoped>
.map {
  background: pink;
  width: 50%;
  height: 25rem;
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 20px;
}
</style>
