import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchBusinessesThunk } from "../../../store/businesses";

import "./BusinessSearched.css";

const BusinessSearched = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { searchString } = useParams();
  const [userSearchString, setUserSearchString] = useState("");

  let searchResult = useSelector((state) => state.businesses.businesses);
  if (searchResult !== null) searchResult = Object.values(searchResult);

  useEffect(() => {
    const searchBusinesses = async () => {
      await dispatch(searchBusinessesThunk(searchString));
    };
    searchBusinesses();
  }, [dispatch]);

  if (searchResult === null || searchResult.length === 0) return null;

  return (
    <div className="business-search-container">
      <div>
        Filters
        <div>Price filter buttons</div>
        <div>Categories</div>
      </div>
      <div>Results</div>
      {searchResult.map((business) => business.name)}
    </div>
  );
};

export default BusinessSearched;

// filter column // result restaurants // map //
