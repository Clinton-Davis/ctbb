<template>
  <header>
    <nav>
      <ul class="headerUL">
        <router-link to="/">
          <img
            src="../../assets/image/tableMountainIconsmalltranparntRounded.png"
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
          <base-button @click="openWeather" mode="small"
            >Weather Report</base-button
          >
        </li>
      </ul>
      <ul class="headerUL">
        <li class="pointer" id="about">About Us</li>
        <li class="pointer links">
          <a href="./form.html" id="contact" class="banger">Get In Touch</a>
        </li>
      </ul>
    </nav>
  </header>
  <weather-modal :open="openModal" @close="closeModal">
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
      <ul class="modalUl">
        <li>Humidity: <br />{{ getWeatherData.humidity }}%</li>
        <li>
          Atmospheric pressure: <br />{{ getWeatherData.pressure }}
          <small> hPa</small>
        </li>
        <li>Cloud: <br />{{ getWeatherData.cloudDiscrition }}</li>
      </ul>
    </template>
  </weather-modal>
</template>

<script>
import { mapGetters } from "vuex";
import WeatherModal from "./WeatherModal.vue";
export default {
  components: { WeatherModal },
  data() {
    return {
      haveWeather: false,
      feels_like: null,
      openModal: false,
      sunRise: null,
    };
  },
  created() {
    this.loadWeather();
  },
  methods: {
    openWeather() {
      this.openModal = true;
    },
    closeModal() {
      this.openModal = false;
    },
    loadWeather() {
      this.$store.dispatch("weather/loadWeather");
    },
    // sunUps(getSunRise) {
    // console.log(getSunRise);
    // let rdate = new Date(getSunRise * 1000);
    // let rh = rdate.getHours();
    // let rhours = rh + 2;
    // let rminutes = "0" + rdate.getMinutes();
    // let sunRise = rhours + ":" + rminutes.substr(-2);
    // console.log(sunRise);
    // return sunRise;
    // },
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
  margin: 1rem;
  vertical-align: super;
}

.headerUL {
  display: flex;
  margin: 1rem 5rem 1rem 0;
}
.modalUl {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  text-align: center;
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
}
#windsock {
  margin-right: -0.1rem;
  padding-bottom: 11px;
}
template ul {
  width: 100%;
}
</style>
