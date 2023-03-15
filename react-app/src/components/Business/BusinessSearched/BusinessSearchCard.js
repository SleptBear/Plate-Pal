import { Link } from "react-router-dom";
import "./BusinessSearchCard.css";
import starCalculator from "./StarCalculator.js";

const BusinessSearchCard = ({ business }) => {
  if (!business) return null;
  
  return (
    <div className="business-search-card-container">
      <div className="business-search-img">
        <img src={business.images[0]?.url}></img>
      </div>
      <div className="business-search-text">
        <div className="business-search-text-reviews">
          <span>{business.name}</span>
          {business.number_of_reviews ? (
            <span>
              {starCalculator(business.avg_rating)}
              {` ${business.number_of_reviews} reviews`}
            </span>
          ) : (
            <span>New</span>
          )}
        </div>
        <span>{business.category}</span>
        <span>Hours</span>
        <span>Snippet of review</span>
      </div>
    </div>
  );
};

export default BusinessSearchCard;
