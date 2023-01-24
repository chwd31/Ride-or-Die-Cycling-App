var city = document.querySelector('.XX');

var tempCurrent = document.querySelector('#XX')
var humidityCurrent = document.querySelector('#hXX')
var windCurrent = document.querySelector('#XX');

var tempForecast = document.querySelector('.XX');
var humidityForecast = document.querySelector('.XX');
var windForecast = document.querySelector('.XX');

var cityInputWeather = document.querySelector('.XX');

var cityNameHistory = []; // array

var bikeVariableOne = document.querySelector('.XX');
var bikeVariableTwo = document.querySelector('.XX');
var bikeVariableThree = document.querySelector('.XX');

var apiKey = "XX";

const searchButtonWeather = document.querySelector('#XX')
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