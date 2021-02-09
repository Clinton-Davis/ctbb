import { createRouter, createWebHistory } from "vue-router";

import InputForm from "./components/pages/InputForm.vue";
import TheHero from "./components/pages/TheHero.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: TheHero },
    { path: "/inputform", name: "InputForm", component: InputForm },
  ],
});

export default router;
