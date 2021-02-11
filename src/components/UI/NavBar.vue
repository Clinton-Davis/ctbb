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
        <li v-if="!haveWeather">Looking at the Weather...</li>
        <li v-else><small>Feels Like </small>{{ feels_like }}˚C</li>

        <img
          v-if="haveWeather"
          id="windsock"
          src="../../assets/image/icons8-wind-sock20.png"
          alt=""
        />
        <li v-if="haveWeather">
          {{ wind }}
          <small>Kph</small>
        </li>

        <li>{{ dir }}</li>
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
export default {
  data() {
    return {
      haveWeather: false,
      feels_like: null,
      temp: null,
      wind_deg: null,
      tempsMax: null,
      tempMin: null,
      humidity: null,
      cloud: null,
      cloudDiscrition: null,
      pressure: null,
      wind: null,
      direction: null,
      sunrise: null,
      sunset: null,
      dir: "",
    };
  },
  // mounted() {
  //   this.loadWeather();
  // },
  methods: {
    // async loadWeather() {
    //   const weather_api_key = process.env.VUE_APP_WEATHER_API_KEY;
    //   await fetch(
    //     `https://api.openweathermap.org/data/2.5/weather?id=1085599&APPID=${weather_api_key}&units=metric`
    //   )
    //     .then((response) => {
    //       if (response.ok) {
    //         return response.json();
    //       }
    //     })
    //     .then((data) => {
    //       this.feels_like = Math.floor(data.main.feels_like);
    //       this.temp = Math.floor(data.main.temp);
    //       this.tempsMax = Math.ceil(data.main.temp_max);
    //       this.tempMin = Math.floor(data.main.temp_min);
    //       this.humidity = Math.floor(data.main.humidity);
    //       this.cloudDiscrition = data.weather[0].description;
    //       this.pressure = Math.floor(data.main.pressure);
    //       this.wind = data.wind.speed;
    //       this.direction = data.wind.deg;
    //       this.getWindDirection(this.direction);
    //     });
    // },
    // getWindDirection(direction) {
    //   if (direction > 349 || direction <= 12) {
    //     return (this.dir = "N");
    //   } else if (direction > 12 && direction <= 34) {
    //     return (this.dir = "Nne");
    //   } else if (direction > 34 && direction <= 56) {
    //     return (this.dir = "NE");
    //   } else if (direction > 56 && direction <= 78) {
    //     return (this.dir = "Ene");
    //   } else if (direction > 78 && direction <= 101) {
    //     return (this.dir = "E");
    //   } else if (direction > 101 && direction <= 123) {
    //     return (this.dir = "Ese");
    //   } else if (direction > 123 && direction <= 146) {
    //     return (this.dir = "Se");
    //   } else if (direction > 146 && direction <= 168) {
    //     return (this.dir = "Sse");
    //   } else if (direction > 168 && direction <= 191) {
    //     return (this.dir = "S");
    //   } else if (direction > 191 && direction <= 213) {
    //     return (this.dir = "Ssw");
    //   } else if (direction > 213 && direction <= 236) {
    //     return (this.dir = "Sw");
    //   } else if (direction > 236 && direction <= 258) {
    //     return (this.dir = "Wsw");
    //   } else if (direction > 258 && direction <= 281) {
    //     return (this.dir = "W");
    //   } else if (direction > 281 && direction <= 303) {
    //     return (this.dir = "Wnw");
    //   } else if (direction > 303 && direction <= 326) {
    //     return (this.dir = "Nw");
    //   } else if (direction > 326 && direction <= 348) {
    //     return (this.dir = "Nnw");
    //   } else {
    //     return (this.dir = "N");
    //   }
    // },
  },

  // getPos() {
  //   navigator.geolocation.getCurrentPosition((position) => {
  //     const userLocation = {
  //       lat: position.coords.latitude,
  //       lng: position.coords.longitude,
  //     };
  //     // console.log(userLocation);
  //   });
  // },
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
