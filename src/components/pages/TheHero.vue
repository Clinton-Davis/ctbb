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
  methods: {
    getCategory(category) {
      this.$store.dispatch("activites/getCategory", { value: category });
      this.$router.push("/list/" + category);
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
@media screen and (min-width: 600px) and (max-width: 1000px) {
  #capeTown {
    font-size: 6rem;
    margin: 2rem auto 1rem auto;
  }
  #bestBits {
    font-size: 5rem;
    margin: 0 auto 2rem auto;
  }
  #diy {
    font-size: 2rem;
  }
}
@media screen and (min-width: 400px) and (max-width: 600px) {
  #capeTown {
    font-size: 4rem;
    margin: 3rem 0 0 0;
  }
  #bestBits {
    font-size: 4rem;
    margin: 0 0 2rem 0;
  }
  #diy {
    font-size: 2rem;
  }
  .hero_btn_btns-wrapper {
    width: 60%;
    margin: 2rem auto;
    display: block;
  }
}
@media screen and (max-width: 400px) {
  #capeTown {
    font-size: 3rem;
    margin: 3rem 0 0 0;
  }
  #bestBits {
    font-size: 3rem;
    margin: 0 0 2rem 0;
  }
  #diy {
    font-size: 2rem;
  }
  .hero_btn_btns-wrapper {
    width: 80%;
    margin: 2rem auto;
    display: block;
  }
}
</style>
