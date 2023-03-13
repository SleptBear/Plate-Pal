import React, { useState, useEffect } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { getAllBusinessesThunk } from "../../store/businesses";

const MapContainer = ({ google }) => {
  let businesses = useSelector((state) => state.businesses.businesses);
  const dispatch = useDispatch();
  const [redirectId, setRedirectId] = useState(null);

  useEffect(() => {
    dispatch(getAllBusinessesThunk());
  }, [dispatch]);

  const handleMarkerClick = (businessId) => {
    setRedirectId(businessId);
  };

  if (!businesses) {
    return null;
  }

  businesses = Object.values(businesses)

  return (
    <>
      <Map
        google={google}
        zoom={3}
        initialCenter={{ lat: 37.7749, lng: -122.4194 }} // San Francisco coordinates
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
      {redirectId && <Redirect to={`/businesses/${redirectId}`} />}
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(MapContainer);
