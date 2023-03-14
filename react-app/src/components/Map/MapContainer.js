import React, { useState, useEffect } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react-17";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { searchBusinessesThunk } from "../../store/businesses";
import "./mapcontainer.css";

const blueIcon = {
  url: "https://media.discordapp.net/attachments/533035859214073877/1085299587079745646/25624562456.png",
};

const MapContainer = ({ google, searchString }) => {
  let businesses = useSelector((state) => state.businesses.businesses);
  const dispatch = useDispatch();
  const history = useHistory();
  const [selected, setSelected] = useState(null);
  const [cursorPosition, setCursorPosition] = useState(null);

  useEffect(() => {
    dispatch(searchBusinessesThunk(searchString));
  }, [dispatch]);

  const handleMarkerClick = (businessId) => {
    history.push(`/businesses/${businessId}`);
  };


  if (!businesses) {
    return null;
  }

  businesses = Object.values(businesses);

  return (
    <>
    <div></div>
      <Map
        google={google}
        zoom={3}
        initialCenter={{ lat: businesses[0].lat, lng: businesses[0].lng }}
        width="800" height="800"
      >
        {businesses.map((business) => (
          <Marker
            key={business.id}
            title={business.name}
            name={business.name}
            position={{ lat: business.lat, lng: business.lng }}
            icon={selected && selected.id === business.id ? blueIcon : null}
            onMouseover={() => {
              setSelected(business);
            }}
          />
        ))}
        {console.log(selected)}
        {/* {selected && (
          <InfoWindow
            position={{ lat: selected.lat, lng: selected.lng }}
            visible={true}
            onCloseClick={() => {
              setSelected(null);
            }}
            onMouseover={false}
          >
            <div
              onClick={() => {
                history.push(`/businesses/${selected.id}`);
              }}
              style={{
                position: "relative",
                zIndex: 1,
                cursor: "pointer",
              }}
            >
              <h2>{selected.name}</h2>
              <h4>{selected.category}</h4>
              <br />
              <h3>{selected.avg_rating.toFixed(2)} ⭐</h3>
              <br />
              <img src={selected.images[0].url} width="120" height="100" />
              <br />
              <br />
            </div>
          </InfoWindow>
        )} */}
       {selected && (
  <div
    style={{
      position: "fixed",
      color: "black",
      top: "17%",
      left: "30%",
      zIndex: 2,
      backgroundColor: "white",
      padding: "10px",
      borderRadius: "5px",
      boxShadow: "0 0 5px rgba(0, 0, 0, 0.3)",
      cursor: "pointer",
    }}
    onClick={() => {
      history.push(`/businesses/${selected.id}`);
    }}
  >
    <h2>{selected.name}</h2>

              <h4>{selected.category}</h4>
              <br />
              <h3>{selected.avg_rating.toFixed(2)} ⭐</h3>
              <br />
              <img src={selected.images[0].url} width="120" height="100" />
              <br />
              <br />
  </div>
)}
      </Map>
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(MapContainer);

export { MapContainer };
