import React from "react";
import { showDataOnMap } from "../Util/Util";
import "./Map.css";
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  marginTop: '20px',
  width: '100%',
  height: '500px'
};

function Map({ zoom, center, countries, casesType }) {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDn_VUwN2dzgxjzdrGazNkE4S3QLLIj9TM"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={zoom}
      >
        {showDataOnMap(countries, casesType)}
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(Map)
