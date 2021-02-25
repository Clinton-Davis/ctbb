<template>
  <header>
    <nav>
      <ul class="headerUL">
        <router-link to="/">
          <img
            src="../../assets/image/newLogo2.svg"
            id="tableIcon"
            title="'Click' Back to Main Page"
            alt="table Mountain Icons"
            class="pointer"
          />
        </router-link>
        <li v-if="!haveWeather">Checking the Weather...</li>
        <li v-else>
          <small>Feels Like </small>{{ getWeatherData.feels_like }}˚C
        </li>

        <img
          v-if="haveWeather"
          id="windsock"
          src="../../assets/image/icons8-wind-sock20.png"
          alt=""
        />
        <li v-if="haveWeather">
          {{ getWeatherData.wind }}
          <small>Kph</small>
        </li>

        <li v-if="haveWeather">{{ getWindDirection }}</li>
        <li>
          <div class="weather" @click="openWeather">
            <img src="../../assets/image/CloudWeather.svg" alt="" />
          </div>
        </li>
      </ul>
      <modal :open="openWeatherModal" @close="closeWeather">
        <template v-slot:header>
          <h3>
            Today Weather Report
          </h3>
        </template>
        <template v-slot:temp>
          <ul class="modalUl">
            <li>Current Temp: <br />{{ getWeatherData.temp }}˚C</li>
            <li>
              Feels Like: <br />
              {{ getWeatherData.feels_like }}˚C
            </li>
            <!-- <li>Max: <br />{{ getWeatherData.tempsMax }}˚C</li> -->
            <li>Min: <br />{{ getWeatherData.tempMin }}˚C</li>
          </ul>
        </template>
        <template v-slot:wind>
          <ul class="modalUl">
            <li>
              SunRise <br />
              {{ getSunRise }}
            </li>
            <li>
              SunSet <br />
              {{ getSunSet }}
            </li>
            <li>Wind Streanth: <br />{{ getWeatherData.wind }} Kph</li>
            <li>Wind Direction: <br />{{ getWindDirection }}</li>
          </ul>
        </template>
        <template v-slot:cloud>
          <ul class="modalUl " :class="{ nav_active: navActive }">
            <li>Humidity: <br />{{ getWeatherData.humidity }}%</li>
            <li>
              Atmospheric pressure: <br />{{ getWeatherData.pressure }}
              <small> hPa</small>
            </li>
            <li>Cloud: <br />{{ getWeatherData.cloudDiscrition }}</li>
          </ul>
        </template>
      </modal>
      <ul class="headerUL underBurger">
        <li class="pointer" id="about">
          <router-link to="/about">About Us</router-link>
        </li>
        <li class="pointer links">
          <router-link to="/contact" id="contact">Contact Us</router-link>
        </li>
      </ul>
      <div class="burger" @click="OpenBurger">
        <img src="../../assets/image/QuoteBurgerWhite.svg" alt="" />
      </div>
      <modal :open="openBurger" @close="closeBurger">
        <template v-slot:header>
          <h2>Menu</h2>
        </template>
        <template v-slot:temp>
          <div class="burgerModal">
            <router-link to="/">
              <h2 class="menu">Home</h2>
            </router-link>
            <router-link to="/about">
              <h2 class="menu">About Us</h2>
            </router-link>
            <router-link to="/contact">
              <h2 class="menu">Contact Us</h2>
            </router-link>
          </div>
        </template>
      </modal>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import Modal from "./Modal.vue";
export default {
  components: { Modal },
  data() {
    return {
      haveWeather: false,
      feels_like: null,
      openWeatherModal: false,
      openBurger: false,
      sunRise: null,
    };
  },
  created() {
    this.loadWeather();
  },
  methods: {
    openWeather() {
      this.openWeatherModal = true;
    },
    closeWeather() {
      this.openWeatherModal = false;
    },
    OpenBurger() {
      this.openBurger = true;
    },
    closeBurger() {
      this.openBurger = false;
    },
    loadWeather() {
      this.$store.dispatch("weather/loadWeather");
    },
  },
  computed: {
    ...mapGetters("weather", [
      "getWeatherData",
      "getWindDirection",
      "getSunRise",
      "getSunSet",
    ]),
  },
  watch: {
    getWeatherData() {
      this.haveWeather = false;
      if (this.getWeatherData !== "") {
        this.haveWeather = true;
      }
    },
  },
};
</script>

<style scoped>
header {
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.3);
  background-color: transparent;
  font-size: 1.3rem;
}
nav {
  min-height: 10vh;
  margin: auto;
  width: 100%;
  display: flex;
  /* flex-direction: row; */
  align-items: center;
  justify-content: space-between;
  color: var(--white);
}
img {
  vertical-align: super;
}
#tableIcon {
  margin: 0 0.5rem;
  height: 5rem;
}
.headerUL {
  display: flex;
  justify-content: space-around;
  margin: 0.2rem 5rem 0.2rem 0;
}
.underBurger {
  display: flex;
}
.modalUl {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  text-align: center;
}
.burgerModal {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  text-align: center;
  margin-top: 10%;
}
.menu {
  text-shadow: 3px 5px 2px #09587c;
}

li {
  font-family: var(--Goldman);
  list-style: none;
  margin: auto 0.5rem;
  text-transform: capitalize;
}
a {
  text-decoration: none;
  color: var(--white);
  font-family: inherit;
  cursor: pointer;
}
#windsock {
  height: 2rem;
  margin-top: 1rem;
}
.burger {
  display: none;
  cursor: pointer;
  transition: all 0.5s ease-in;
  -webkit-transition: all 0.5s ease-in;
  -moz-transition: all 0.5s ease-in;
  -ms-transition: all 0.5s ease-in;
  -o-transition: all 0.5s ease-in;
}
.burger img {
  height: 2.5rem;
  margin-right: 1rem;
}
.weather img {
  width: 100%;
  height: 2.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}
.weather:active {
  transform: scale(0.8);
}

@media screen and (max-width: 980px) {
  body {
    overflow-x: hidden;
  }

  .burger {
    display: block;
  }
  .underBurger {
    display: none;
  }
}
@media screen and (max-width: 780px) {
  .headerUL {
    margin: 1rem 1rem 1rem 0;
  }
}
@media screen and (max-width: 640px) {
  #tableIcon {
    display: none;
  }
}
@media screen and (max-width: 540px) {
  small {
    display: none;
  }
}
@media screen and (max-width: 477px) {
  .header {
    font-size: 1rem;
  }
}
template ul {
  width: 100%;
}
</style>
