import * as React from 'react';
import Map from 'react-map-gl/mapbox';
// If using with mapbox-gl v1:
// import Map from 'react-map-gl/mapbox-legacy';
import 'mapbox-gl/dist/mapbox-gl.css';

function MapCanvas() {
  return (
    <Map
      mapboxAccessToken="pk.eyJ1IjoiYWJydXNhYyIsImEiOiJja2p5cTMxMnowMDFzMnFtZjA0aW12ajE4In0.h-Iany3pRtfayOuz910S8Q"
      initialViewState={{
        longitude: -122.4,
        latitude: 37.8,
        zoom: 14
      }}
      style={{width: 600, height: 400}}
      mapStyle="mapbox://styles/abrusac/ckuvp1hd51lds18o6rs3szsie"
    />
  );
}
export default MapCanvas;