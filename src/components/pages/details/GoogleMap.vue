<template>
  <div class="map">{{ googleId }}</div>
</template>

<script>
export default {
  props: ["googleId"],
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
