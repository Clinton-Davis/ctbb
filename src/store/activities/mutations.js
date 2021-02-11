export default {
  loadActivities(state, payload) {
    state.activities = payload;
    // console.log("Mutations " + state);
  },
  getCategory(state, category) {
    state.category = category;
    console.log(state);
  },
};
