<template>
  <div class="container">
    <div class="form__wrapper">
      <div class="backBtn" @click="goBack">
        <img
          src="../../assets/image/BackBtn.svg"
          alt="back Buttom"
          title="Back Buttom"
        />
      </div>
      <div class="form-control">
        <div v-if="invalidInput" class="Error">
          <p>Error Please Check inputs</p>
        </div>
        <form @submit.prevent="formValidaty">
          <div class="form-control">
            <label for="name">Your Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              v-model.trim="name"
              title="Your Name"
            />
          </div>
          <div class="form-control">
            <label for="name">Your Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              v-model.trim="email"
              title="Your Email"
            />
          </div>
          <div class="form-control">
            <label for="message">Your Message:</label>
            <textarea
              name="message"
              id="message"
              v-model="message"
              title="Your Message"
            />
          </div>
          <base-button mode="form" title="Send Message">Send</base-button>
        </form>
        <!-- <div  class="success"></div> -->
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
  display: flex;
  justify-content: center;
}
.form__wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  width: 50%;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
}
form {
  margin: 2rem auto;
  max-width: 36rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-image: url("../../assets/image/sunnyBackgroundCrop.jpg");
  background-size: cover;
  background-position: center;
  box-shadow: 0px 2px 21px -1px rgba(0, 0, 0, 1),
    0px 2px 21px -1px rgba(0, 0, 0, 1) inset;
}

.form-control {
  margin: 0.5rem 0;
  position: relative;
}
.form-control.invalid input {
  border-color: red;
}
.form-control.invalid label {
  color: red;
}
.form-control.invalid p {
  color: red;
}
.clips {
  text-align: center;
  cursor: pointer;
}
h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input {
  transition: 0.2s all ease;
  display: block;
  width: 100%;
  font: inherit;
  border-radius: 4px;
}
input:hover,
input:active {
  -webkit-box-shadow: 0px 10px 13px -7px #00000088,
    5px 21px 15px -1px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #00000088, 5px 21px 15px -1px rgba(0, 0, 0, 0);
}
textarea {
  transition: 0.2s all ease;
  display: block;
  width: 100%;
  font: inherit;
  border-radius: 4px;
}
textarea:hover,
textarea:active {
  -webkit-box-shadow: 0px 10px 13px -7px #00000088,
    5px 21px 15px -1px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #00000088, 5px 21px 15px -1px rgba(0, 0, 0, 0);
}
label {
  font-family: var(--Goldman);
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
