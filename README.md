## Background & Objectives

The goal of this project is to put into practice the AJAX capabilities. Here we'll use the [MapBox Geocoding API](https://www.mapbox.com/search/) to build a tool where we can input an address, hit a button, and get the **GPS Coordinates** back and display a map.


<div class="text-center">
  <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/frontend/mapbox_ajax_geocoder.gif" alt="MapBox Geocoding demo" width="100%">
</div>

## Specs

Go to the Terminal, choose a directory where we wish to clone the repository and run:
```bash
git clone git@github.com:Francisco-Webdeveloper/geocoder.git
yarn install
```
Launch local webserver with:

```bash
rake webpack
```
Then open [`localhost:8080`](http://localhost:8080) to test the code in the browser

### Geocoding

First, we will need to create an account with MapBox and get and API key (it's free to sign up!) Then, read the [MapBox Geocoding API documentation](https://www.mapbox.com/api-documentation/#geocoding). It boils down to doing an HTTP `GET` request with an address as a query string parameter.

```js
'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=YOUR-API-KEY'
```

NOTE: The request to the MapBox API will require the API key as one of the parameters in the request. The key can be found in the [account page](https://www.mapbox.com/account/) after the account is created and sign in.

Next we add a form to the HTML page. It should contain an `input` of type `"text"` where a user can type an address in, and an `input` of type `"submit"` to display a button.

Once that's done, we use the `submit` event to catch the moment the form is posted by the user. That's when we'll want to trigger the AJAX query to the MapBox Geocoding service using `fetch`).

We want to fetch data from an API to figure out where the GPS coordinates are buried and display them on screen.


### Displaying the map

To display a MapBox Map with a marker at the specified address, we'll use a second API, the [MapBox JavaScript API](https://www.mapbox.com/mapbox-gl-js/api/).

To use it, we add this line in the `head` of your HTML file, so we can use MapBox's stylesheet for the map:

```html
<link href='https://api.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl.css' rel='stylesheet' />
```

To add a map, you'll need an empty supporting HTML element. For instance:

```html
<div id="map" style="height: 300px; width: 600px"></div>
```

To easily build the map and add a marker to it, we'll use [npm's mapbox-gl package](https://yarnpkg.com/en/package/mapbox-gl).

We need to create a `package.json` in order to add the package: `yarn add mapbox-gl` to download it locally in the `node_modules`.

To display a map in the `#map` with the `mapbox-gl` package we can use these lines:

```js
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'yourApiKey';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v9',
  center: [ -0.077, 51.533 ],
  zoom: 12
});
```

To add a marker to the map, if the variable `map` holds the `mapboxgl` object, we run:

```js
new mapboxgl.Marker()
  .setLngLat([ -0.077, 51.533 ])
  .addTo(map);
```

