import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken =
  'pk.eyJ1IjoibWFzbG92YXJzIiwiYSI6ImNrdXF5ZXV3dTJsenAyd282aHBzdTUxcHQifQ.T4fiehpdSudBKAd0wV3H2w';

export function getMap(lng: number, lat: number) {
  try {
    new mapboxgl.Map({
      container: 'map__field', // container ID
      center: [lng, lat], // starting position [lng, lat]
      zoom: 10, // starting zoom
    });
  } catch (error) {
    console.log(error);
  }
}

// getMap(27.56, 53.9);
