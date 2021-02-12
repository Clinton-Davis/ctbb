export default {
  loadCatogerys(state) {
    return state.category;
  },
  loadAllActivities(state) {
    return state.activities;
  },
  loadActivities(_, getters) {
    const allActivities = getters.loadAllActivities;
    const selectedCategory = getters.loadCatogerys;
    const filteredActivities = allActivities.filter(
      (allActivities) => allActivities.category === selectedCategory
    );
    return filteredActivities;
  },
};
