import App from "./App.vue";
import { createApp } from "vue";

import router from "./router";

import NavBar from "./components/UI/NavBar.vue";
import BaseButton from "./components/UI/BaseButton.vue";

const app = createApp(App);

app.component("nav-bar", NavBar);
app.component("base-button", BaseButton);
app.use(router);
app.mount("#app");
