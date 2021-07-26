import mapboxgl from 'mapbox-gl';

const apiKey = config.MY_API_TOKEN;

mapboxgl.accessToken = `${apiKey}`;

const displayMap = (long, lat) => {
  const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [ long, lat ],
    zoom: 12
  });
  new mapboxgl.Marker()
    .setLngLat([ long, lat ])
    .addTo(map);
};

export { displayMap };
