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

  console.log("SEARCH RESULTS", searchResult);

  // use filtered businesses after user selects filter options
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    const searchBusinesses = async () => {
      await dispatch(searchBusinessesThunk(searchString));
    };
    searchBusinesses();
  }, [dispatch, searchString]);

  // guard against empty render - no businesses found
  if (searchResult === null || searchResult.length === 0) return null;

  // handle user submitting filter options
  const onSubmit = async (e) => {
    e.preventDefault();

    setUserFiltered(true);

    // price filtering
    let filterApplied = searchResult.filter((restaurant) => {
      if (priceFilter > 0 && restaurant.price === priceFilter) {
        return restaurant;
      }
    });
    setFilteredRestaurants(filterApplied);
  };

  // clear filter
  const clearFilter = (e) => {
    e.preventDefault();
    setUserFiltered(false);
    setPriceFilter(0);
    setHover(0);
    setCategoryFilter("");
  };

  return (
    <div className="business-search-container">
      <div className="business-search-filters">
        <form onSubmit={onSubmit}>
          <h4>Filters</h4>
          {userFiltered ? (
            <span
              className="business-search-clear-filter"
              onClick={clearFilter}
            >
              Clear all
              <br></br>
            </span>
          ) : (
            ""
          )}
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
        {userFiltered ? (
          filteredRestaurants.map((business) => {
            return <BusinessSearchCard business={business} key={business.id} />;
          })
        ) : userFiltered && filteredRestaurants.length > 0 ? (
          <p>No results for {searchString}</p>
        ) : (
          searchResult.map((business) => {
            return <BusinessSearchCard business={business} key={business.id} />;
          })
        )}
      </div>
      <div className="business-search-map">
        <MapPage searchString={searchString} />
      </div>
    </div>
  );
};

export default BusinessSearched;
