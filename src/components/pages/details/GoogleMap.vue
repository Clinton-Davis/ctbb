<template>
  <div class="map" ref="mapDiv">{{ googleId }} {{ currentPosition }}</div>
</template>

<script>
/* eslint-disable no-undef*/
import { computed, onMounted, ref } from "vue";
import { useGeolocation } from "../../../useGeolocation";
import { Loader } from "@googlemaps/js-api-loader";
export default {
  props: ["googleId"],
  setup() {
    const { coords } = useGeolocation();
    const currentPosition = computed(() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude,
    }));

    const GOOGLE_API_KEY = process.env.VUE_APP_GOOGLE_MAPS_API_KEY;

    const loader = new Loader({
      apikey: `${GOOGLE_API_KEY}`,
    });
    const mapDiv = ref(null);
    onMounted(async () => {
      await loader.load();
      new google.maps.Map(mapDiv.value, {
        center: currentPosition.value,
        zoom: 7,
      });
    });

    return { currentPosition, mapDiv };
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
