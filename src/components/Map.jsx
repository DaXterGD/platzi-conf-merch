import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const Map = ({ data }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDOHBkhq90T9S1KinRl8ATWgKQEojPTSoM",
  });

  const mapStyles = {
    height: "50vh",
    with: "100%",
    border: "5px solid #000",
  };

  const defaultCenter = {
    lat: data.lat,
    lng: data.lng,
  };

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapStyles}
      center={defaultCenter}
      zoom={17}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default Map;
