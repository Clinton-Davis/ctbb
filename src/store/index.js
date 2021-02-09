import { createStore } from "vuex";

import activitiesModule from "./activities/index.js";

const store = createStore({
  modules: {
    activites: activitiesModule,
  },
  state() {
    return {};
  },
});

export default store;
