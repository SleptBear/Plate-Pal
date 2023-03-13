import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { searchBusinessesThunk } from "../../../store/businesses";
import BusinessSearchCard from "./BusinessSearchCard";
import { MapPage } from "../../Map/MapPage";

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
  }, [dispatch, searchString]);

  if (searchResult === null || searchResult.length === 0) return null;

  return (
    <div className="business-search-container">
      <div>
        Filters
        <div>Price filter buttons</div>
        <div>Categories</div>
      </div>
      <div>
        {searchResult.map((business) => {
          return <BusinessSearchCard business={business} key={business.id} />;
        })}
      </div>
      <div>
        <MapPage searchString={searchString} />
      </div>
    </div>
  );
};

export default BusinessSearched;

// filter column // result restaurants // map //
