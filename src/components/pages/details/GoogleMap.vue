<template>
  <div class="map">{{ googleId }} {{ currentPosition }}</div>
</template>

<script>
import { computed } from "vue";
import { useGeolocation } from "../../../useGeolocation";
export default {
  props: ["googleId"],
  setup() {
    const { coords } = useGeolocation();
    const currentPosition = computed(() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude,
    }));

    return { currentPosition };
  },
};
</script>

<style scoped>
.map {
  background: pink;
  width: 50%;
  height: 20rem;
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 20px;
}
</style>
