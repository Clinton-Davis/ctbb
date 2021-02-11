<template>
  <header>
    <nav>
      <ul class="weather_api">
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
      </ul>

      <ul class="nav">
        <li class="pointer" id="about">About Us</li>
        <li class="pointer links">
          <a href="./form.html" id="contact" class="banger">Get In Touch</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      haveWeather: false,
      feels_like: null,
    };
  },
  created() {
    this.loadWeather();
  },
  methods: {
    loadWeather() {
      this.$store.dispatch("weather/loadWeather");
    },
  },
  computed: {
    ...mapGetters("weather", ["getWeatherData", "getWindDirection"]),
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
  align-items: center;
  justify-content: space-between;
  color: var(--white);
}
img {
  margin: 1rem;
  vertical-align: super;
}
ul {
  display: flex;
  margin: 1rem 5rem 1rem 0;
}
li {
  font-family: var(--Goldman);
  list-style: none;
  margin: auto 0.5rem;
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
</style>
