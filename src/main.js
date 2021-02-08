import { createApp } from "vue";
import App from "./App.vue";

import NavBar from "./components/UI/NavBar.vue";
const app = createApp(App);

app.component("nav-bar", NavBar);
app.mount("#app");
