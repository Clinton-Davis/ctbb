<template>
  <router-link :to="detailsLink">
    <div class="list__backdrop">
      <div class="card__wrapper" title="Click for details">
        <div class="card__content">
          <img :src="src" :alt="name" />
          <div class="name">
            <h3>{{ name }}</h3>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["name", "category", "info", "src", "id"],
  computed: {
    detailsLink() {
      return "/details/" + this.category + "/" + this.id;
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
  transition: all 0.2s ease;
}
.card__wrapper:hover {
  box-shadow: 0px 2px 21px -1px rgba(0, 0, 0, 1),
    0px 2px 21px -1px rgba(0, 0, 0, 1) inset;
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
