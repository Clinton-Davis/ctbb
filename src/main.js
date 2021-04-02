import App from "./App.vue";
import { createApp } from "vue";
import { datadogLogs } from "@datadog/browser-logs";
datadogLogs.init({
  clientToken: "pub57efe2b0b0807d6695e98bc096123a2b",
  site: "datadoghq.eu",
  forwardErrorsToLogs: true,
  sampleRate: 100,
});
import { init } from "emailjs-com";
import router from "./router";
import store from "./store/index.js";

import NavBar from "./components/UI/NavBar.vue";
import Footer from "./components/UI/Footer.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import ListCard from "./components/UI/ListCard.vue";
import Modal from "./components/UI/Modal.vue";

const app = createApp(App);
init("user_8kWmsIvOjmHcCs7cRI6uz");
app.component("nav-bar", NavBar);
app.component("foot-er", Footer);
app.component("base-button", BaseButton);
app.component("list-card", ListCard);
app.component("weather-modal", Modal);

app.use(store);
app.use(router);

router.isReady().then(function() {
  app.mount("#app");
});
