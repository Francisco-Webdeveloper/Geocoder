import { displayMap } from './init_mapbox';

const form = document.getElementById("search-locations");
const apiKey = config.MY_API_TOKEN;

const insertGPSCoordToTheDom = (long, lat) => {
  const gpsCoordinates = document.getElementById("gps-coordinates");
  const gpsHTML = `
    <p>Longitude: ${long}</p>
    <p>Latitude: ${lat}</p>
  `
  gpsCoordinates.insertAdjacentHTML('beforeend', gpsHTML );
};


const fetchAPI = (location) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${apiKey}`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      const long = data.features[0].geometry.coordinates[0];
      const lat = data.features[0].geometry.coordinates[1];
      const gpsCoordinates = document.getElementById("gps-coordinates");
      gpsCoordinates.innerHTML = "";
      insertGPSCoordToTheDom(long, lat);
      displayMap(long, lat);
    });
};

form.addEventListener("submit", (event) => {
  event.preventDefault(); // to prevent the reloading behavior
  const input = document.getElementById("location");
  const searchLocation = input.value;
  fetchAPI(searchLocation);
})



