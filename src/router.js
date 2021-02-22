import { createRouter, createWebHistory } from "vue-router";

import InputForm from "./components/pages/InputForm.vue";
import TheHero from "./components/pages/TheHero.vue";
import TheList from "./components/pages/TheList.vue";
import TourDetailsPage from "./components/pages/TourDetailsPage.vue";
import GoogleDirections from "./components/pages/GoogleDirections.vue";
import GoogleMap from "./components/pages/GoogleMap.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: TheHero },
    { path: "/inputform", name: "InputForm", component: InputForm },
    { path: "/list/:category", component: TheList, props: true },
    {
      path: "/details/:category/:id",
      component: TourDetailsPage,
      GoogleDirections,
      GoogleMap,
      props: true,
    },
  ],
});

export default router;
