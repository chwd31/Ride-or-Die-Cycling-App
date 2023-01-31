var submitButton = document.querySelector('#WeatherBtn')
var cityInputEl = document.querySelector('#city-input')
var bikeShareList = document.querySelector('#bike-share-list')

// holds all bike networks from api
var allBikeNetworks = null;

function fetchAllBikeSharingNetworks() {
  let url = 'http://api.citybik.es/v2/networks'

  fetch(url)
    .then(resp => resp.json())
    .then(function (data) {
      allBikeNetworks = data.networks;
    })
}

fetchAllBikeSharingNetworks(); // called when pages loads

// Attached the event listener to same button as weather, hoping to 
// cut two search tabs, works but still need to display data
submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  var location = cityInputEl.value
  fetchBikeSharingInformation(location);
});

// called when submit button is clicked
function fetchBikeSharingInformation(location) {

  const bikeNetworksAtLocation = allBikeNetworks.filter((network) => {
    const city = network.location.city.toLowerCase();
    const name = network.name.toLowerCase();
    const lowerCaseLocation = location.toLowerCase();
    return city.includes(lowerCaseLocation) || name.includes(lowerCaseLocation);
  });

  console.log({ bikeNetworksAtLocation })

  bikeShareList.innerHTML = ""; // clear bike list

  // filling the bike list on the page...
  bikeNetworksAtLocation.forEach((network) => {
    // for each network, make an api call to get more details... (station info)
    let url = `http://api.citybik.es/v2/networks/${network.id}`
    fetch(url)
      .then(resp => resp.json())
      .then((data) => {
        const stations = data.network.stations.slice(0, 10); // 10 stations
        console.log(stations);

        const li = document.createElement("li");
        li.innerHTML = `<h4>${network.name}</h4>`;

        const stationsList = document.createElement("ul");

        stations.forEach(station => {
          const stationLi = document.createElement("li")
          stationLi.innerHTML = `${station.extra.address || station.name} - ${station.free_bikes} available bike(s)`;
          stationsList.appendChild(stationLi);
        })

        li.appendChild(stationsList);

        bikeShareList.appendChild(li);
      })
  })

}
