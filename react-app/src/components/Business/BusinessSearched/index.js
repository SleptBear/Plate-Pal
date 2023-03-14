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

  // frontend filtering
  const [userFiltered, setUserFiltered] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState("");

  // price hover
  const [priceFilter, setPriceFilter] = useState(0);
  const [hover, setHover] = useState(0);

  // get business state initial render
  let searchResult = useSelector((state) => state.businesses.businesses);
  if (searchResult !== null) searchResult = Object.values(searchResult);

  // use filtered businesses after user selects filter options
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);

  useEffect(() => {
    const searchBusinesses = async () => {
      await dispatch(searchBusinessesThunk(searchString));
    };
    searchBusinesses();
  }, [dispatch, searchString]);

  if (searchResult === null || searchResult.length === 0) return null;

  const onSubmit = async (e) => {
    e.preventDefault();

    setUserFiltered(true);

    const filterApplied = searchResult.filter((restaurant) => {
      if (priceFilter > 0 && restaurant.price === priceFilter) {
        return restaurant;
      }
    });
    console.log("FILTER APPLIED", filterApplied);
    setfilteredRestaurants(filterApplied);
  };

  console.log("FILTERED RESTAURANT", filteredRestaurants);

  return (
    <div className="business-search-container">
      <div className="business-search-filters">
        <form onSubmit={onSubmit}>
          <h4>Filters</h4>
          <br></br>
          <div className="business-search-price-filter">
            {[...Array(5)].map((x, index) => {
              index += 1;
              return (
                <button
                  type="button"
                  key={index}
                  className={index <= (hover || priceFilter) ? "on" : "off"}
                  onClick={() => setPriceFilter(index)}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(priceFilter)}
                >
                  <span className="price-rating">$</span>
                </button>
              );
            })}
          </div>
          <br></br>
          <hr></hr>
          <br></br>
          <h4>Categories</h4>
          {/* convert to fitleredBUsinesses */}
          {searchResult.map((business) => (
            <div>
              <label>
                <input
                  type="checkbox"
                  value={categoryFilter}
                  onClick={(e) => setCategoryFilter(e.target.value)}
                ></input>
                {business.category}
              </label>
            </div>
          ))}
          <br></br>
          <hr></hr>
          <br></br>
          <button>Filter</button>
        </form>
      </div>

      <div className="business-search-results">
        {userFiltered
          ? filteredRestaurants.map((business) => {
              <BusinessSearchCard business={business} key={business.id} />;
            })
          : searchResult.map((business) => {
              return (
                <BusinessSearchCard business={business} key={business.id} />
              );
            })}
      </div>
      <div className="business-search-map">
        <MapPage searchString={searchString} />
      </div>
    </div>
  );
};

export default BusinessSearched;

// filter column // result restaurants // map //
