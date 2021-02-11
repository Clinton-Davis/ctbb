export default {
  loadCatogerys(state) {
    return state.category;
  },
  loadActivities(state, getters) {
    const allActivities = state.activities;
    const selectedCategory = getters.loadCatogerys;
    const filteredActivities = allActivities.filter(
      (allActivities) => allActivities.category === selectedCategory
    );
    return filteredActivities;
  },
};
