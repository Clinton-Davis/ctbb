import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      activities: [
        {
          name: "Table Mountain",
          category: "sight_seeing",
          googleId: "ChIJdeCOYqJnzB0Rm5YhSFRUI2w",
          imageUrl:
            "https://res.cloudinary.com/dayietcj3/image/upload/v1612884542/CTBB/sights/TM50x50_s1ajkd.jpg",
          info: `Mountain with a distinctive flat plateau, popular for hiking, climbing, biking & wildlife viewing.
        There is the Table Mountain Aerial Cableway Company has been providing visitors with a world-class experience since October 4, 1929. 
        The company operates in a National Park and World Heritage Site.`,
        },
        {
          name: "Cape point",
          category: "sight_seeing",
          googleId: "ChIJdeCOYqJnzB0Rm5YhSFRUI2w",
          imageUrl:
            "https://res.cloudinary.com/dayietcj3/image/upload/v1612884542/CTBB/sights/TM50x50_s1ajkd.jpg",
          info: `Mountain with a distinctive flat plateau, popular for hiking, climbing, biking & wildlife viewing.
        There is the Table Mountain Aerial Cableway Company has been providing visitors with a world-class experience since October 4, 1929. 
        The company operates in a National Park and World Heritage Site.`,
        },
        {
          name: "Something else",
          category: "adventure",
          googleId: "ChIJdeCOYqJnzB0Rm5YhSFRUI2w",
          imageUrl:
            "https://res.cloudinary.com/dayietcj3/image/upload/v1612884542/CTBB/sights/TM50x50_s1ajkd.jpg",
          info: `Mountain with a distinctive flat plateau, popular for hiking, climbing, biking & wildlife viewing.
        There is the Table Mountain Aerial Cableway Company has been providing visitors with a world-class experience since October 4, 1929. 
        The company operates in a National Park and World Heritage Site.`,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
