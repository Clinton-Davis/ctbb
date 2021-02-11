import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      feels_like: null,
      wind: null,
      direction: null,
      temp: null,
      tempsMax: null,
      tempMin: null,
      humidity: null,
      cloudDiscrition: "",
      pressure: null,
    };
  },
  mutations,
  actions,
  getters,
};
