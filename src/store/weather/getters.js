export default {
  getWeatherData(state) {
    const weather = {
      feels_like: state.feels_like,
      wind: state.wind,
      temp: state.temp,
      tempMin: state.tempMin,
      humidity: state.humidity,
      cloudDiscrition: state.cloudDiscrition,
      pressure: state.pressure,
      direction: state.direction,
      sunrise: state.sunrise,
      sunset: state.sunset,
    };
    return weather;
  },

  getWindDirection(state) {
    const direction = state.direction;
    if (direction > 349 || direction <= 12) {
      return "N";
    } else if (direction > 12 && direction <= 34) {
      return "Nne";
    } else if (direction > 34 && direction <= 56) {
      return "NE";
    } else if (direction > 56 && direction <= 78) {
      return "Ene";
    } else if (direction > 78 && direction <= 101) {
      return "E";
    } else if (direction > 101 && direction <= 123) {
      return "Ese";
    } else if (direction > 123 && direction <= 146) {
      return "Se";
    } else if (direction > 146 && direction <= 168) {
      return "Sse";
    } else if (direction > 168 && direction <= 191) {
      return "S";
    } else if (direction > 191 && direction <= 213) {
      return "Ssw";
    } else if (direction > 213 && direction <= 236) {
      return "Sw";
    } else if (direction > 236 && direction <= 258) {
      return "Wsw";
    } else if (direction > 258 && direction <= 281) {
      return "W";
    } else if (direction > 281 && direction <= 303) {
      return "Wnw";
    } else if (direction > 303 && direction <= 326) {
      return "Nw";
    } else if (direction > 326 && direction <= 348) {
      return "Nnw";
    } else {
      return "N";
    }
  },
};
