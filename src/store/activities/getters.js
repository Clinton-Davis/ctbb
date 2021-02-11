export default {
  loadCatogerys(state) {
    const cat = state.category;
    console.log(cat);
    return cat;
  },
  loadActivities(state, getters) {
    const allActivities = state.activities;
    const selectedCategory = getters.loadCatogerys;
    const filteredActivities = allActivities.filter(
      (allActivities) => allActivities.category === selectedCategory
    );
    console.log(allActivities);
    console.log(selectedCategory);
    console.log(filteredActivities);
    return filteredActivities;
  },
};
