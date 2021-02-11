<template>
  <div class="hero__wrapper">
    <div class="hero__content">
      <h1 id="capeTown">CAPE TOWNS</h1>
      <h2 id="bestBits">BEST BITS</h2>
      <h3 id="diy">Self Guided Tours</h3>
      <h4>Pick your Pleasure</h4>
      <div class="hero_btn_btns-wrapper">
        <base-button mode="full" @click="getCategory('sight_seeing')"
          >Sights Seeing</base-button
        >
        <base-button mode="full" @click="getCategory('adventure')"
          >Adventure</base-button
        >
        <base-button mode="full" @click="getCategory('foodie')"
          >Foodies</base-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["category"],
  data() {
    return {};
  },
  methods: {
    getCategory(category) {
      this.$store.dispatch("activites/getCategory", { value: category });
      this.$router.push("/list");
    },
  },
};
</script>

<style scoped>
.hero__wrapper {
  margin-top: 1rem;
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.hero__content {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
}

.hero__content h4 {
  margin: 1rem 0 -1rem 0;
  font-size: 2rem;
  text-shadow: 3px 5px 2px #09587c;
}
.hero_btn_btns-wrapper {
  width: 80%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-evenly;
}

#capeTown {
  font-size: 8rem;
  font-family: var(--Goldman);

  color: transparent;
  font-weight: 700;
  background-size: 100%;
  background-clip: text;
  background-position: 100% 100%;
  -webkit-background-clip: text;
  background-image: url("../../assets/image/sunnyBackgroundCrop.jpg");
}

#bestBits {
  font-size: 6rem;
  font-weight: 700;
  margin-top: -1rem;
  font-family: var(--Goldman);
  color: transparent;
  background-size: 100%;
  background-clip: text;
  background-position: 100% 100%;
  -webkit-background-clip: text;
  background-image: url("../../assets/image/orangeYelloSunSetNarrow.jpg");
}

#diy {
  font-size: 3.5rem;
  color: white;
  text-shadow: 3px 5px 2px #09587c;
  background-size: 100%;
  background-clip: text;
  background-position: 100% 20%;
  -webkit-background-clip: text;
  background-image: url("../../assets/image/BigBlueOceanLiternt.jpg");
}
</style>
