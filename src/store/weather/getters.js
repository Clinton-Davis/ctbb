export default {
  getWeatherData(state) {
    return state.weather;
  },

  getWindDirection(state) {
    const direction = state.direction;
    let dir;
    console.log(dir);
    if (direction > 349 || direction <= 12) {
      return (dir = "N");
    } else if (direction > 12 && direction <= 34) {
      return (dir = "Nne");
    } else if (direction > 34 && direction <= 56) {
      return (dir = "NE");
    } else if (direction > 56 && direction <= 78) {
      return (dir = "Ene");
    } else if (direction > 78 && direction <= 101) {
      return (dir = "E");
    } else if (direction > 101 && direction <= 123) {
      return (dir = "Ese");
    } else if (direction > 123 && direction <= 146) {
      return (dir = "Se");
    } else if (direction > 146 && direction <= 168) {
      return (dir = "Sse");
    } else if (direction > 168 && direction <= 191) {
      return (dir = "S");
    } else if (direction > 191 && direction <= 213) {
      return (dir = "Ssw");
    } else if (direction > 213 && direction <= 236) {
      return (dir = "Sw");
    } else if (direction > 236 && direction <= 258) {
      return (dir = "Wsw");
    } else if (direction > 258 && direction <= 281) {
      return (dir = "W");
    } else if (direction > 281 && direction <= 303) {
      return (dir = "Wnw");
    } else if (direction > 303 && direction <= 326) {
      return (dir = "Nw");
    } else if (direction > 326 && direction <= 348) {
      return (dir = "Nnw");
    } else {
      return (dir = "N");
    }
  },
};
