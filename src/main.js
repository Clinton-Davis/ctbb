import App from "./App.vue";
import { createApp } from "vue";

import router from "./router";
import store from "./store/index.js";

import NavBar from "./components/UI/NavBar.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import ListCard from "./components/UI/ListCard.vue";

const app = createApp(App);

app.component("nav-bar", NavBar);
app.component("base-button", BaseButton);
app.component("list-card", ListCard);

app.use(store);
app.use(router);
app.mount("#app");