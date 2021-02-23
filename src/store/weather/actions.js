export default {
  async loadWeather(context) {
    const weather_api_key = process.env.VUE_APP_WEATHER_API_KEY;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=1085599&APPID=${weather_api_key}&units=metric`
    );
    const responseData = await response.json();
    if (!response.ok) {
      const error = new Error(responseData.message || "Failed Load Weather");
      throw error;
    }
    const weatherData = {
      feels_like: Math.floor(responseData.main.feels_like),
      temp: Math.floor(responseData.main.temp),
      tempsMax: Math.ceil(responseData.main.temp_max),
      tempMin: Math.floor(responseData.main.temp_min),
      humidity: Math.floor(responseData.main.humidity),
      cloudDiscrition: responseData.weather[0].description,
      pressure: Math.floor(responseData.main.pressure),
      wind: responseData.wind.speed,
      direction: responseData.wind.deg,
      sunrise: responseData.sys.sunrise,
      sunset: responseData.sys.sunset,
    };
    context.commit("loadWeather", weatherData);
  },
};
