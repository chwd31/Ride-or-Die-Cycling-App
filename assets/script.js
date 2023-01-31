// 1. Create var for html button
var weatherSubmitButton = document.getElementById("WeatherBtn");
var weatherInput = document.getElementById("city-input");
var currentWeatherTemp = document.getElementById("current-weather-temp");
var currentWeatherWind = document.getElementById("current-weather-wind");
var currentWeatherHumidity = document.getElementById("current-weather-humidity");

var day1Temp = document.getElementById("day-1-temp");
var day1Wind = document.getElementById("day-1-wind");
var day1Humidity = document.getElementById("day-1-humidity");
var day2Temp = document.getElementById("day-2-temp");
var day2Wind = document.getElementById("day-2-wind");
var day2Humidity = document.getElementById("day-2-humidity");
var day3Temp = document.getElementById("day-3-temp");
var day3Wind = document.getElementById("day-3-wind");
var day3Humidity = document.getElementById("day-3-humidity");

import * as dateFns from 'https://esm.run/date-fns';
var { startOfTomorrow, addDays } = dateFns;

// 2. Setup an event listener
weatherSubmitButton.addEventListener('click', function (event) {
    // code that we want to run when the button is clicked...
    event.preventDefault(); // prevent refresh
    console.log(weatherInput.value); // printing the content of the box
    console.log("Fetching weather info...");
    fetchWeather(weatherInput.value);
});


function fetchWeather(location) {

    var currentWeatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c171672f4bbc8048bf259a3ea61decb1&units=imperial`;

    fetch(currentWeatherURL)
        .then(response => response.json())
        .then(data => {
            currentWeatherTemp.innerHTML = data.main.temp;
            currentWeatherWind.innerHTML = data.wind.speed;
            currentWeatherHumidity.innerHTML = data.main.humidity;
            // tempCurrent.innerHTML = currentWeatherData.main.temp + " " + "°F"
            // humidityCurrent.innerHTML = currentWeatherData.main.humidity
            // windCurrent.innerHTML = currentWeatherData.wind.speed
            // visibilityCurrent.innerHTML = currentWeatherData.sys.visibility + " "
            // localStorage.setItem("cityInput", currentWeatherData);
            // console.log(currentWeatherData);
        });

    var fiveDayForecastURL = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=c171672f4bbc8048bf259a3ea61decb1&units=imperial`;

    fetch(fiveDayForecastURL)
        .then(response => response.json())
        .then(data => {

            // Create object that stores all 3-hour forecasts
            var allForecasts = {};
            data.list.map((threeHourForecast) => {
                var date = new Date(threeHourForecast.dt * 1000);
                allForecasts[date] = threeHourForecast;
            });


            // Grab 
            var day1 = allForecasts[startOfTomorrow()];
            var day2 = allForecasts[addDays(startOfTomorrow(), 1)];
            var day3 = allForecasts[addDays(startOfTomorrow(), 2)];

            day1Temp.innerHTML = day1.main.temp;
            day1Humidity.innerHTML = day1.main.humidity;
            day1Wind.innerHTML = day1.wind.speed;

            day2Temp.innerHTML = day2.main.temp;
            day2Humidity.innerHTML = day2.main.humidity;
            day2Wind.innerHTML = day2.wind.speed;

            day3Temp.innerHTML = day3.main.temp;
            day3Humidity.innerHTML = day3.main.humidity;
            day3Wind.innerHTML = day3.wind.speed;
        });
    return "Weather info";
}

var cityNameHistory = []; // array
var WeatherKey = "c171672f4bbc8048bf259a3ea61decb1";

// event listener to search button for weather in city
// var searchButtonWeather = document.querySelector('#weather-button')
// searchButtonWeather.addEventListener('click,' function () {
//     var cityWeather = cityInputWeather;
//     cityDataWeather(cityWeather);
// })

// API Function for City
function CityData() {
    var currentWeatherURL = "http://api.openweathermap.org/geo/1.0/direct?q=c171672f4bbc8048bf259a3ea61decb1"
    function currentWeatherData() {
        var currentWindEl = document.createElement('p')
        var currentHumidityEl = document.createElement('p')
        var currentVisibiltyEl = document.createElement('p')

        // display city input name on html
        cityNameEl.textContent = data.name
        // convert temp from Kelvin to Fahrenheit F = 1.8*(K-273) + 32.
        var pTempF = 1.8 * (Number(data.main.temp) - 273) + 32
        pTempF = Math.round(pTempF * 10) / 10
        // display data on html
        currentTempEl.textContent = pTempF + " " + "°F"
        currentWindEl.textContent = data.wind.speed + " " + "mph"
        currentHumidityEl.textContent = data.main.humidity + "%"
        WeatherBtn.addEventListener('click', function (event) {
            currentWeatherData();
        })
    };
};

// // WEATHER API
// function displayCurrentWeatherData(currentWeatherData) {
//     var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=c171672f4bbc8048bf259a3ea61decb1"
//     console.log(queryURL)

//     fetch(queryURL)
//         .then(response => response.json())
//         .then(data => {
//     tempCurrent.innerHTML = currentWeatherData.main.temp + " " + "°F"
//     humidityCurrent.innerHTML = currentWeatherData.main.humidity
//     windCurrent.innerHTML = currentWeatherData.wind.speed
//     visibilityCurrent.innerHTML = currentWeatherData.sys.visibility + " "
//     localStorage.setItem("cityInput", currentWeatherData);
//     console.log(currentWeatherData);
//     })

// // WEATHER API
// // API Function for City
// // API Function for WeatherForecast
// function displayForecastWeatherData(weatherDataForecast) {
//     tempForecast.innerHTML = weatherDataForecast.main.temp + " " + "°F"
//     humidityForecast.innerHTML = weatherDataForecast.main.humidity + "%"
//     windForecast.innerHTML = weatherDataForecast.wind.speed + " " + "mph"
//     localStorage.setItem("cityInput", weatherDataForecast);
//     console.log(weatherData);
// }

// var searchButtonBike = document.querySelector('#XX')
// searchButtonBike.addEventListener('click,' function () {
//     var cityBike = cityInputBike;
//     cityDataBike(cityBike);
// })


// // BIKE API
// // API Function for City
// // API Function for Bikes
// function displayBikeData(bikeData) {
//     bikeVariableOne.innerHTML = bikeData.XX.XX
//     bikeVariableTwo.innerHTML = bikeData.XX.XX
//     bikeVariableThree.innerHTML = bikeData.XX.XX
//     localStorage.setItem("XX", bikeData);
//     console.log(bikeData);
// }