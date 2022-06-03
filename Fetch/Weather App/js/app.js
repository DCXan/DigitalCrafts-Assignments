const button = document.getElementById("submitButton");
const textbox = document.getElementById("textbox");
const display = document.getElementById("display");
const currentLocation = document.getElementById('currentLocation')
const apiKey = "8c74b0c5b416442ac3a8424226a28d7c";

getCurrentLocationWeather(displayCurrentLocationWeather)

button.addEventListener("click", function () {
  getWeather(displayWeather);
});

function getWeather(displayWeatherCallback) {
  let city = textbox.value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (weatherData) {
      console.log(weatherData);
      displayWeatherCallback(weatherData);
    });
}

function displayWeather(weather) {
  display.innerHTML = `
    <h2 id="locationDisplay">Selected Location:</div>
    <h3>${weather.name}</h3>
    <div id="tempDisplay">
        <div>Current Temperature: ${weather.main.temp} °F</div>
        <div>Low: ${weather.main.temp_min} °F</div>
        <div>High: ${weather.main.temp_max} °F</div>
        <div>Air Pressure: ${weather.main.pressure} psi</div>
    </div>
    `;
}

function getCurrentLocationWeather(displayWeatherCallback) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (pos) {
      let lat = pos.coords.latitude.toFixed(4);
      let lon = pos.coords.longitude.toFixed(4);
      let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

      fetch(url)
        .then(function (response) {
          return response.json();
        })
        .then(function (weather) {
            displayWeatherCallback(weather)
        });
    });
  }
}

function displayCurrentLocationWeather(weather){
    currentLocation.innerHTML = `
            <h2 id="locationDisplay">Current Location:</div>
            <h3>${weather.name}</h3>
            <div id="tempDisplay">
                <div>Current Temperature: ${weather.main.temp} °F</div>
                <div>Low: ${weather.main.temp_min} °F</div>
                <div>High: ${weather.main.temp_max} °F</div>
                <div>Air Pressure: ${weather.main.pressure} psi</div>
            </div>
            `;
}
