import React from "react";
import { GoogleApiWrapper } from "google-maps-react-17";
import MapContainer from "./MapContainer";
import os from "os";
import "./mapcontainer.css";

export const MapPage = (props) => {
  return (
    <div>
      <MapContainer
        google={props.google}
        apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
        searchString={props.searchString}
      />
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(MapPage);
