import React from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import MapContainer from './MapContainer';

const MapPage = (props) => {
  return (
    <div>
      <MapContainer
        google={props.google}
        apiKey={'AIzaSyA6ife8wuqn_mX_9ig0Nyh9ZjfyQoXPsgw'}
      />
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA6ife8wuqn_mX_9ig0Nyh9ZjfyQoXPsgw'
})(MapPage);
