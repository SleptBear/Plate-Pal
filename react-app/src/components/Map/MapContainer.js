import React, { useState, useEffect } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { useSelector, useDispatch } from "react-redux";
import { getAllBusinessesThunk } from '../../store/businesses';

// const businesses = useSelector((state) => state.businesses.businesses);


const MapContainer = ({google}) => {

    let businesses = useSelector((state) => state.businesses.businesses);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllBusinessesThunk())
    },[dispatch])
    // const { google } = this.props;
    console.log('BUSINESSES')
    if(!businesses){
        return null
    }
    businesses = Object.values(businesses)
    console.log(businesses)

    return(

          <Map
            google={google}
            zoom={10}
            initialCenter={{ lat: 37.7749, lng: -122.4194 }} // San Francisco coordinates
          >
            {businesses.map(business => (
              <Marker
                key={business.id}
                title={business.name}
                name={business.name}
                position={{ lat: business.lat, lng: business.lng }}
              />
            ))}
          </Map>

    )
}



export default GoogleApiWrapper({
  apiKey: 'AIzaSyA6ife8wuqn_mX_9ig0Nyh9ZjfyQoXPsgw'
})(MapContainer);
