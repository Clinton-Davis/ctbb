import { createRouter, createWebHistory } from "vue-router";

import InputForm from "./components/pages/InputForm.vue";
import TheHero from "./components/pages/TheHero.vue";
import TheList from "./components/pages/TheList.vue";
import ContactForm from "./components/pages/ContactForm.vue";
import AboutUs from "./components/pages/AboutUs.vue";
import TourDetailsPage from "./components/pages/TourDetailsPage.vue";
import GoogleDirections from "./components/pages/GoogleDirections.vue";
import GoogleMap from "./components/pages/GoogleMap.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: TheHero },
    { path: "/inputform", name: "InputForm", component: InputForm },
    { path: "/contact", name: "contact", component: ContactForm },
    { path: "/about", name: "about", component: AboutUs },
    { path: "/list/:category", component: TheList, props: true },
    {
      path: "/details/:category/:id",
      component: TourDetailsPage,
      GoogleDirections,
      GoogleMap,
      props: true,
    },
    { path: "/:notFound(.*)", redirect: "/" },
  ],
});

export default router;
