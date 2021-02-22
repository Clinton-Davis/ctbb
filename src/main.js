import App from "./App.vue";
import { createApp } from "vue";

import router from "./router";
import store from "./store/index.js";

import NavBar from "./components/UI/NavBar.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import ListCard from "./components/UI/ListCard.vue";
import WeatherModal from "./components/UI/WeatherModal.vue";

const app = createApp(App);

app.component("nav-bar", NavBar);
app.component("base-button", BaseButton);
app.component("list-card", ListCard);
app.component("weather-modal", WeatherModal);

app.use(router);
app.use(store);

app.mount("#app");
