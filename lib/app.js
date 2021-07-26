
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


const fetchAPI = (long, lat) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${apiKey}`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      const long = data.features[0].geometry.coordinates[0];
      const lat = data.features[0].geometry.coordinates[1];
      const gpsCoordinates = document.getElementById("gps-coordinates");
      gpsCoordinates.innerHTML = "";
      insertGPSCoordToTheDom(long, lat);
    });
};



