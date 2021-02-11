import { createStore } from "vuex";

import activitiesModule from "./activities/index.js";
import weathersModule from "./weather/index.js";

const store = createStore({
  modules: {
    activites: activitiesModule,
    weather: weathersModule,
  },
  state() {
    return {};
  },
});

export default store;
