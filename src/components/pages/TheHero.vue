<template>
  <div class="hero__wrapper">
    <div class="hero__content">
      <h1 id="capeTown">CAPE TOWNS</h1>
      <h2 id="bestBits">BEST BITS</h2>
      <h3 id="diy">Do It Your Self</h3>
      <h4>Pick your Pleasure</h4>
      <div class="hero_btn_btns-wrapper">
        <base-button>Sights Seeing</base-button>
        <base-button>Adventure</base-button>
        <base-button>Foodies</base-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
  text-shadow: 3px 5px 2px #050505;
}
.hero_btn_btns-wrapper {
  width: 80%;
  margin: 2rem;
  display: flex;
  justify-content: space-evenly;
}

#capeTown {
  font-size: 8rem;
  font-family: var(--Bangers);
  color: transparent;
  letter-spacing: 0.5rem;
  background-size: 150%;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: url("../../assets/image/sunnyBackgroundCrop.jpg");
  animation: bg-animation 60s linear infinite alternate;
  -webkit-animation: bg-animation 60s linear infinite alternate;
}
@keyframes bg-animation {
  0% {
    background-position: left;
  }
  50% {
    background-position: right;
  }
  100% {
    background-position: left;
  }
}
#bestBits {
  font-size: 6rem;
  letter-spacing: 0.4rem;
  font-family: var(--Bangers);
  color: transparent;
  background-size: 100%;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: url("../../assets/image/orangeYelloSunSetNarrow.jpg");
  animation: bg-animationTB 60s linear infinite alternate;
  -webkit-animation: bg-animationTB 60s linear infinite alternate;
}
@keyframes bg-animationTB {
  0% {
    background-position: bottom;
  }

  100% {
    background-position: top;
  }
}
#diy {
  font-size: 3.5rem;
  color: transparent;
  background-size: 200%;
  background-clip: text;
  -webkit-background-clip: text;
  background-image: url("../../assets/image/BigBlueOceanLiternt.jpg");
  animation: bg-animation 60s linear infinite alternate;
  -webkit-animation: bg-animation 60s linear infinite alternate;
}
</style>
