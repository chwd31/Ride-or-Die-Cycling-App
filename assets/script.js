// city variable
var city = document.querySelector('.city-name');
// current weather variables
var tempCurrent = document.querySelector('#temp-current')
var humidityCurrent = document.querySelector('#humid-current')
var windCurrent = document.querySelector('#wind-current');
var visibilityCurrent = document.querySelector('#visibility-current');

// Forecast variables
var tempForecast = document.querySelector('#temp-forecast')
var humidityForecast = document.querySelector('#humid-forecast')
var windForecast = document.querySelector('#wind-forecast');
var visibilityForecast = document.querySelector('#visibility-forecast');

// city input variable for weather api
var cityInputWeather = document.querySelector('.city-input-weather');

var cityNameHistory = []; // array
// wethaer api key 
var WeatherKey = "c171672f4bbc8048bf259a3ea61decb1";

// event listener to search button for weather in city
const searchButtonWeather = document.querySelector('#weather-button')
searchButtonWeather.addEventListener('click,' function () {
    var cityWeather = cityInputWeather;
    cityDataWeather(cityWeather);
})

// WEATHER API
// API Function for City
// API Function for Weather
function displayCurrentWeatherData(currentWeatherData) {
    tempCurrent.innerHTML = currentWeatherData.main.temp + " " + "°F"
    humidityCurrent.innerHTML = currentWeatherData.main.humidity + "%"
    windCurrent.innerHTML = currentWeatherData.wind.speed + " " + "mph"
    visibilityCurrent.innerHTML = currentWeatherData.sys.visibility + " "
    localStorage.setItem("cityInput", currentWeatherData);
    console.log(currentWeatherData);
}

// WEATHER API
// API Function for City
// API Function for WeatherForecast
function displayForecastWeatherData(weatherDataForecast) {
    tempForecast.innerHTML = weatherDataForecast.main.temp + " " + "°F"
    humidityForecast.innerHTML = weatherDataForecast.main.humidity + "%"
    windForecast.innerHTML = weatherDataForecast.wind.speed + " " + "mph"
    localStorage.setItem("cityInput", weatherDataForecast);
    console.log(weatherData);
}

const searchButtonBike = document.querySelector('#XX')
searchButtonBike.addEventListener('click,' function () {
    var cityBike = cityInputBike;
    cityDataBike(cityBike);
})

// BIKE API
// API Function for City
// API Function for Bikes
function displayBikeData(bikeData) {
    bikeVariableOne.innerHTML = bikeData.XX.XX
    bikeVariableTwo.innerHTML = bikeData.XX.XX
    bikeVariableThree.innerHTML = bikeData.XX.XX
    localStorage.setItem("XX", bikeData);
    console.log(bikeData);
}