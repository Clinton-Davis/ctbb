<template>
  <div class="card__wrapper">
    <div class="card__content">
      <img :src="src" alt="" />
      <div class="name">
        <h3>{{ name }}</h3>
      </div>
      <div class="info">
        <h3>Description</h3>
        {{ info }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "category", "info", "src"],
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
.card__wrapper {
  width: 20rem;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  margin: 1rem;
}
h3 {
  text-align: center;
}
.info {
  overflow-y: hidden;
  /* transform: translateY(100%); */
  transition: 0.3s all ease-in-out;
  padding: 1rem;
  border-radius: 20px;
  background-color: var(--white);
}
/* .info:hover {
  transform: translateY(0);
} */
</style>
