import { createRouter, createWebHistory } from "vue-router";

import InputForm from "./components/pages/InputForm.vue";
import TheHero from "./components/pages/TheHero.vue";
import TheList from "./components/pages/TheList.vue";
import TourDetails from "./components/pages/TourDetails.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: TheHero },
    { path: "/inputform", name: "InputForm", component: InputForm },
    { path: "/list", name: "TheList", component: TheList },
    { path: "/details", name: "Details", component: TourDetails, props: true },
  ],
});

export default router;
