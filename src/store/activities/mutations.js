export default {
  loadActivities(state, payload) {
    state.activities = payload;
  },
  getCategory(state, category) {
    state.category = category;
  },
};
