<template>
  <div class="container">
    <div class="form__wrapper">
      <div class="about__info">
        <h2>Cape Towns Best Bits</h2>
        <p class="modal-p">
          This Website has lists of some of the Best Bits to see, do and eat in
          Cape Town.<br />
          Chosen by locals and past explores, it's known for its natural beauty
          and fantastic foods.<br />
          Because of the way the land lies, It gives plenty of opportunities for
          some heart-stopping activities and breathtaking views.<br />
          This Website is made for People that like to adventure on their own,
          in their time and personal way.<br />
          Sure, Tours are great, but DIYers have the most fun.<br /><br />
          At the bottom of the page where are three buttons.<br />Sights,
          Adventure and Foodies.<br />
          Click on them to get a list of the best bits in the different
          category.<br />
          Click on the Map Icon to get directions from your location to the
          selected one.<br /><br />

          Sight: is a list of some stunning views and places of interest.<br />
          Adventure: is for the more adventurous travels how like some
          heart-stopping fun.<br />
          Foodies: Let you moths fall in love with the local cuisine.
        </p>
      </div>
      <div class="backBtn" @click="goBack">
        <img
          src="../../assets/image/BackBtn.svg"
          alt="back Buttom"
          title="Back Buttom"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.backBtn {
  position: absolute;
  top: 0;
  right: 0.5rem;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  z-index: 10;
}
.backBtn img:hover {
  transform: scale(1.2);
}
.backBtn img {
  width: 3rem;
  height: 3rem;
}

.container {
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.form__wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  width: 70%;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
}
.about__info {
  margin: 1rem;
  padding: 1rem;
  color: rgb(255, 255, 255);
  background-image: url("../../assets/image/sunnyBackgroundCrop.jpg");
  background-size: cover;
  background-position: center;
  box-shadow: 0px 2px 21px -1px rgba(0, 0, 0, 1),
    0px 2px 21px -1px rgba(0, 0, 0, 1) inset;
  background-size: cover;
  border-radius: 20px;
}
.about__info h2 {
  text-align: center;
  margin: 1rem;
  color: black;
  text-shadow: 3px 3px 2px #09587c;
}
.about__info p {
  color: black;
  font-size: 1.1rem;
}
@media screen and (max-width: 800px) {
  .form__wrapper {
    width: 85%;
  }
}
@media screen and (max-width: 600px) {
  .form__wrapper {
    width: 99%;
  }
}
</style>
