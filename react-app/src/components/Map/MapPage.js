import React from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import MapContainer from './MapContainer';
import os from 'os';

const MapPage = (props) => {
  return (
    <div>
      <MapContainer
        google={props.google}
        apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      />
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(MapPage);
