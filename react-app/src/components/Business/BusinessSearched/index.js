import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchBusinessesThunk } from "../../../store/businesses";

import "./BusinessSearched.css";

const BusinessSearched = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // businesses/search?query=string
  // after nick implements backend route, can dispatch
  useEffect(() => {
    const searchBusinesses = async () => {
      await dispatch(searchBusinessesThunk());
    };
    searchBusinesses();
  }, [dispatch]);

  return (
    <div className="business-search-container">
      <div>
        Filters
        <div>Price filter buttons</div>
        <div>Categories</div>
      </div>
      <div>Results</div>
    </div>
  );
};

export default BusinessSearched;

// filter column // result restaurants // map //
