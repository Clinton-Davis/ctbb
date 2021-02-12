<template>
  <div class="tour_details__container">
    <div class="tour_details__heading">
      <h1>Tour Name</h1>
    </div>
    <div class="tour_details__map-desc-wrapper">
      <div class="desc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem odio a
        molestias illum perspiciatis explicabo nobis aut atque! Pariatur,
        officia. Deserunt dolor rem maxime quis temporibus nisi asperiores
        necessitatibus fuga!
      </div>
      <div class="map"></div>
    </div>
    <div class="tour_details__Btn">
      <base-button mode="full">Get Directions</base-button>
    </div>
  </div>
</template>

<script>
export default {};
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
  margin: 1rem;
  padding: 0.5rem;
  border-radius: 20px;
}
.desc {
  padding: 0.5rem;
  width: 50%;
  margin: 1rem;
  background: rgb(252, 252, 252);
  height: 20rem;
  width: 50%;
  border-radius: 20px;
}
.tour_details__Btn {
  margin: 2rem auto;
}
</style>
