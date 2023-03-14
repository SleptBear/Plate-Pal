import React, { useState, useEffect } from "react";
import { Map, GoogleApiWrapper, Marker, InfoWindow } from "google-maps-react-17";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { searchBusinessesThunk } from "../../store/businesses";
import "./mapcontainer.css";

// const businesses = useSelector((state) => state.businesses.businesses);

const MapContainer = ({ google, searchString }) => {
  let businesses = useSelector((state) => state.businesses.businesses);
  const dispatch = useDispatch();
  const history = useHistory();
  const [selected, setSelected] = useState(null)


  useEffect(() => {
    dispatch(searchBusinessesThunk(searchString));
  }, [dispatch]);

  const handleMarkerClick = (businessId) => {
    history.push(`/businesses/${businessId}`);
  };

  // const { google } = this.props;

  if (!businesses) {
    return null;
  }

  businesses = Object.values(businesses);



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
            onMouseover={() => {setSelected(business)}}
          />
        ))}
        {console.log(selected)}
        {selected ? (<InfoWindow position={{lat: selected.lat, lng:selected.lng}} visible={true} onCloseClick={() =>{
          setSelected(null)
        }}
        onMouseover={false}>
          <div onClick={history.push(`/businesses/${businessId}`)}>
            <h2>{selected.name}</h2>
           {/* <button onClick={ history.push(`/businesses/${selected.id}`)}>CLICK</button> */}
            <h4>{selected.category}</h4>
            <br></br>
            <h3>{selected.avg_rating.toFixed(2)} ⭐</h3>
            <br></br>
            <img src={selected.images[0].url} width="120" height="100" ></img>
            <br></br>
            <br></br>

          </div>
          </InfoWindow>) : console.log('nothing selected')}
      </Map>
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(MapContainer);

export { MapContainer };
