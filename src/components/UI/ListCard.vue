<template>
  <router-link :to="detailsLink">
    <div class="list__backdrop">
      <div class="card__wrapper" title="Click for details">
        <div class="card__content">
          <img :src="src" :alt="name" />
          <div class="name">
            <h3>{{ name }}</h3>
          </div>
          <!-- <div class="info">
        <h3>Description</h3>
        {{ info }}
      </div> -->
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["name", "category", "info", "src", "id"],
  data() {
    return {};
  },
  methods: {},
  computed: {
    detailsLink() {
      return "/details/" + this.id;
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.card__wrapper {
  width: 20rem;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  margin: 1rem;
  cursor: pointer;
}
.card__wrapper:hover {
  transform: scale(1.01);
}
h3 {
  text-align: center;
  color: white;
  text-shadow: 1px 1px black;
}
img {
  width: 20rem;
  height: 20rem;
  object-fit: cover;
}
.info {
  overflow-y: hidden;
  /* transform: translateY(100%); */
  transition: 0.3s all ease-in-out;
  padding: 1rem;
  border-radius: 20px;
  background-color: var(--white);
}
.name p {
  text-transform: capitalize;
}
</style>
