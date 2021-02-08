const url =
  "https://api.openweathermap.org/data/2.5/weather?id=1085599&APPID=93fc6b46edd4b57ed1e18af04d5ead0c&units=metric";

const my_id = "&APPID=93fc6b46edd4b57ed1e18af04d5ead0c";
var unit = "&units=metric";
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    var obj = JSON.parse(this.responseText);
    var city = obj.name;
    var tempsMax = Math.ceil(obj.main.temp_max);
    var tempMin = Math.floor(obj.main.temp_min);
    var feels_like = Math.floor(obj.main.feels_like);
    var humidity = Math.floor(obj.main.humidity);
    var cloud = obj.weather[0].main;
    var cloudDiscrition = obj.weather[0].description;
    var pressure = Math.floor(obj.main.pressure);
    var wind = obj.wind.speed;
    var direction = obj.wind.deg;
    //This If statment to turn Wind degrees into a Direction String
    if (direction > 349 || direction <= 12) {
      var dir = "N";
    } else if (direction > 12 && direction <= 34) {
      var dir = "Nne";
    } else if (direction > 34 && direction <= 56) {
      var dir = "NE";
    } else if (direction > 56 && direction <= 78) {
      var dir = "Ene";
    } else if (direction > 78 && direction <= 101) {
      var dir = "E";
    } else if (direction > 101 && direction <= 123) {
      var dir = "Ese";
    } else if (direction > 123 && direction <= 146) {
      var dir = "Se";
    } else if (direction > 146 && direction <= 168) {
      var dir = "Sse";
    } else if (direction > 168 && direction <= 191) {
      var dir = "S";
    } else if (direction > 191 && direction <= 213) {
      var dir = "Ssw";
    } else if (direction > 213 && direction <= 236) {
      var dir = "Sw";
    } else if (direction > 236 && direction <= 258) {
      var dir = "Wsw";
    } else if (direction > 258 && direction <= 281) {
      var dir = "W";
    } else if (direction > 281 && direction <= 303) {
      var dir = "Wnw";
    } else if (direction > 303 && direction <= 326) {
      var dir = "Nw";
    } else if (direction > 326 && direction <= 348) {
      var dir = "Nnw";
    } else {
      var dir = "N";
    }
    /*This code is from https://stackoverflow.com/convert-a-unix-timestamp-to-time-in-javascript 
		made to work with my code base*/
    /**This code gives the sunrise time stanp and converts it into a time sting */
    let unix_timestampSunrise = obj.sys.sunrise;
    var rdate = new Date(unix_timestampSunrise * 1000);
    var rh = rdate.getHours();
    var rhours = rh + 2;
    var rminutes = "0" + rdate.getMinutes();
    var sunRise = rhours + ":" + rminutes.substr(-2);

    let unix_timestampSunset = obj.sys.sunset;
    var sdate = new Date(unix_timestampSunset * 1000);
    var sh = sdate.getHours();
    var shours = sh + 2;
    var sminutes = "0" + sdate.getMinutes();
    var sunSet = shours + ":" + sminutes.substr(-2);

    writeToPage(), detailWeather();
  }

  //This function sets the Temps and wind speed and direction to nav.
  function writeToPage() {
    document.getElementById(
      "temp-api"
    ).innerHTML = `<a href="#" class="links link-hov" title="Feels Like ${feels_like}˚C. 'Click' for Details">${feels_like}˚C`;

    document.getElementById(
      "wind-api"
    ).innerHTML = `<img id="windsock" src="./assets/images/icons/pageIcons/icons8-wind-indicator-arrows-20.png" 
			alt="windIcon"><a href="#" class="links link-hov" title="'Click' for Weather Details"> ${wind}<p class="kph">Kph</p>  ${dir}`;
  }
  /**This function sets the deatiled weather data into the weatherdeatils div */
  function detailWeather() {
    document.getElementById(
      "info"
    ).innerHTML = `<ul id="weatherDetails" class="hide">
			<h2> ${city}</h2>
			<li>Feels Like: ${feels_like}˚C</li>
			<li>Max Temp: ${tempsMax}˚C</li>
			<li>Min Temp: ${tempMin}˚C</li>
			<li>${cloud}  : ${cloudDiscrition}</li>
			<li>Sun Rise: ${sunRise}</li>
			<li>Sun Set: ${sunSet}</li>
			<li>Humidity  : ${humidity}%</li>
			<li>Air Pressure  : ${pressure}pha</li>
		</ul>`;
  }
};
xhr.open("GET", url + my_id + unit);
xhr.send();
