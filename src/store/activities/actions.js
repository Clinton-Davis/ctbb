export default {
  getCategory(context, data) {
    const category = data.value;
    context.commit("getCategory", category);
  },
  async loadActivities(context) {
    const response = await fetch(
      "https://tours-305210-default-rtdb.firebaseio.com/activities.json"
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed to fetch!");
      throw error;
    }
    const activities = [];
    for (const key in responseData) {
      const tour = {
        id: key,
        category: responseData[key].category,
        name: responseData[key].name,
        googleId: responseData[key].googleId,
        imageUrl: responseData[key].imageUrl,
        info: responseData[key].info,
      };
      activities.push(tour);
    }
    context.commit("loadActivities", activities);
  },
};
