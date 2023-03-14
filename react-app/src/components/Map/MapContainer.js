import React, { useState, useEffect } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react-17";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { searchBusinessesThunk } from "../../store/businesses";
import './mapcontainer.css'

// const businesses = useSelector((state) => state.businesses.businesses);

const MapContainer = ({ google, searchString }) => {
  let businesses = useSelector((state) => state.businesses.businesses);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(searchBusinessesThunk(searchString));
  }, [dispatch]);

  const handleMarkerClick = (businessId) => {
    history.push(`/businesses/${businessId}`);
  };

  // const { google } = this.props;
  console.log("BUSINESSES");

  if (!businesses) {
    return null;
  }

  businesses = Object.values(businesses);
  console.log(businesses);

  return (
    <>

      <Map
        google={google}
        zoom={3}
        initialCenter={{ lat: businesses[0].lat, lng: businesses[0].lng }} // San Francisco coordinates
      >
        {businesses.map((business) => (
          <Marker
            key={business.id}
            title={business.name}
            name={business.name}
            position={{ lat: business.lat, lng: business.lng }}
            onClick={() => handleMarkerClick(business.id)}
          />
        ))}
      </Map>
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(MapContainer);

export { MapContainer };
