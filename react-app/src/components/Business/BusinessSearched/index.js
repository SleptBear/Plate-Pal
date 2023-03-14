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

  // price hover
  const [priceFilter, setPriceFilter] = useState(0);
  const [hover, setHover] = useState(0);

  let searchResult = useSelector((state) => state.businesses.businesses);
  if (searchResult !== null) searchResult = Object.values(searchResult);

  useEffect(() => {
    const searchBusinesses = async () => {
      await dispatch(searchBusinessesThunk(searchString));
    };
    searchBusinesses();
  }, [dispatch, searchString]);

  const onSubmit = async (e) => {
    e.preventDefault();

    setUserFiltered(true);

    // perform frontend filtering of business state with user's input
    // conditionally render with filter if "userFiltered" is true
    // eg setFilteredBusinsesses
    // in jsx setFilteredBusinesses.map(business => ...)
    
  };

  if (searchResult === null || searchResult.length === 0) return null;

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
          <div>
            <label>
              <input type="checkbox"></input>
              American
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox"></input>
              Californian
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox"></input>
              Farm-to-Table
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox"></input>
              Molecular Gastronomy
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox"></input>
              French
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox"></input>
              Italian
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox"></input>
              Seafood
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox"></input>
              Southern
            </label>
          </div>
          <div>
            <label>
              <input type="checkbox"></input>
              Steakhouse
            </label>
          </div>
          <br></br>
          <hr></hr>
          <br></br>
          <button>Filter</button>
        </form>
      </div>

      <div className="business-search-results">
        {searchResult.map((business) => {
          return <BusinessSearchCard business={business} key={business.id} />;
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
