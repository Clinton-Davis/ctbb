export default {
  loadWeather(state, payload) {
    state.feels_like = payload.feels_like;
    state.wind = payload.wind;
    state.direction = payload.direction;
    state.temp = payload.temp;
    state.tempsMax = payload;
    state.tempMin = payload.tempMin;
    state.humidity = payload.humidity;
    state.cloudDiscrition = payload.cloudDiscrition;
    state.pressure = payload.pressure;
    state.sunset = payload.sunset;
    state.sunrise = payload.sunrise;
  },
};
