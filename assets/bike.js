var cityInputEl = document.querySelector('#city-input')
var bikeShareBoxEl = document.querySelector('#bikeShareLocationBox')

function currentBikeLocation() {
    var cityInputValue = cityInputEl.value 
    var queryURL = "https://bikeshare-research.org/api/v1/systems/" + cityInputValue 
// API not functioning correctly.  Can't pull data.  Research other options.
// Can pull data with an extension to work around CORS, how unsure how to filter
console.log(queryURL)

    // This appears to be a workable function, but need to test with a different api
    fetch(queryURL)
        .then(response => response.json())
        .then(data => {
         //Need to determine how to display the data we need, just displays
         //an object array in box
            console.log(data)
            console.log(data.name)
            
             
            var cityNameEl = document.createElement('h2')
            cityNameEl.setAttribute("class", "")
            var stationLocationEl = document.createElement('p')

            cityNameEl.textContent = data.base
            stationLocationEl.textContent = data.name

            bikeShareBoxEl.appendChild(cityNameEl)
            bikeShareBoxEl.appendChild(stationLocationEl)

            localStorage.setItem("city", data.bssid)
            localStorage.setItem("location", data.name)
        })    
        
}
// Attached the event listener to same button as weather, hoping to 
// cut two search tabs, works but still need to display data
var WeatherBtn = document.querySelector('#WeatherBtn')
WeatherBtn.addEventListener('click', function (event) {
    event.preventDefault();


    currentBikeLocation();
})