var cityInputEl = document.querySelector('#city-input')
// city variable
var city = document.querySelector('.city-name');
// current weather variables
var tempCurrent = document.querySelector('#temp-current')
var humidityCurrent = document.querySelector('#humid-current')
var windCurrent = document.querySelector('#wind-current');
var visibilityCurrent = document.querySelector('#visibility-current');
var currentWeatherBoxEl = document.querySelector('#currentWeatherBox')
// Forecast variables
var tempForecast = document.querySelector('#temp-forecast')
var humidityForecast = document.querySelector('#humid-forecast')
var windForecast = document.querySelector('#wind-forecast');
var visibilityForecast = document.querySelector('#visibility-forecast');

// city input variable for weather api
var cityInputWeather = document.querySelector('.city-input-weather');

var cityNameHistory = []; // array
// weather api key 
var WeatherKey = "c171672f4bbc8048bf259a3ea61decb1";



// event listener to search button for weather in city
// const searchButtonWeather = document.querySelector('#weather-button')
// searchButtonWeather.addEventListener('click,' function () {
//     var cityWeather = cityInputWeather;
//     cityDataWeather(cityWeather);
// })
// API Function for City
function CityData (){
    var currentWeatherURL = "http://api.openweathermap.org/geo/1.0/direct?q=c171672f4bbc8048bf259a3ea61decb1"
    fetch(currentWeatherURL)
    .then((response) => response.json())
    .then((data) =>  {
        console.log(data)
        currentWeatherData(data[0].lat, data[0].lon);
    });

}
// API Function for  displaying current Weather
function currentWeatherData() {
    var cityInputValue = cityInputEl.value
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityInputValue + "&appid=c171672f4bbc8048bf259a3ea61decb1"
    console.log(queryURL)

    fetch(queryURL)
        .then(response => response.json()) 
        .then(data => {
           console.log(data.visibility)
           console.log(data.main.temp)
           console.log(data.main.humidity)
           console.log(data.wind.speed)
            //tags to data 
            var cityNameEl = document.createElement('h2')
            cityNameEl.setAttribute("class", "")
            var currentTempEl = document.createElement('p')
            var currentWindEl = document.createElement('p')
            var currentHumidityEl = document.createElement('p')
            var currentVisibiltyEl = document.createElement('p')
            
            cityNameEl.textContent = data.name
            // convert temp from Kelvin to Fahrenheit F = 1.8*(K-273) + 32.
            var pTempF = 1.8*(Number(data.main.temp) -273) + 32
            pTempF = Math.round(pTempF *10 )/10
           currentTempEl.textContent = pTempF + " " + "°F"
           currentWindEl.textContent = data.wind.speed + " " + "mph"
           currentHumidityEl.textContent = data.main.humidity + "%"
           currentVisibiltyEl.textContent = data.visibility + " " + "ft"
            currentWeatherBoxEl.appendChild(cityNameEl)
            currentWeatherBoxEl.appendChild(currentTempEl) 
            currentWeatherBoxEl.appendChild(currentHumidityEl)
            currentWeatherBoxEl.appendChild(currentVisibiltyEl)
            currentWeatherBoxEl.appendChild(currentWindEl)

         
            // storing data in local storage

                localStorage.setItem("tempF", pTempF)
                localStorage.setItem("windMph", data.wind.speed)
                localStorage.setItem("humidity", data.main.humidity)
                localStorage.setItem("visibility", data.visibility)
                localStorage.setItem("cityNameEl", data.main.humidity)
                
         })
            
        }
        
        // keeps data on page
        var WeatherBtn = document.querySelector('#WeatherBtn')
WeatherBtn.addEventListener('click', function (event) {
    event.preventDefault();


    currentWeatherData();
})
//     getWeather();
// })
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

// const searchButtonBike = document.querySelector('#XX')
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