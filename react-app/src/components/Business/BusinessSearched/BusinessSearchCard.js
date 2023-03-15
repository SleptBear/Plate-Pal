import { Link } from "react-router-dom";
import "./BusinessSearchCard.css";
import StarCalculator from "./StarCalculator.js";

const BusinessSearchCard = ({ business }) => {
  if (!business) return null;


  // handle hours of operations closed vs open
  // conditionally render it onto the card
  // const today = new Date()
  // console.log("TODAAAAY", today)
  // console.log("HOURS OF OPS", business.hours_of_operation)

  return (
    <div className="business-search-card-container">
      <div className="business-search-img">
        <img src={business.images[0]?.url}></img>
      </div>
      <div className="business-search-text">
        <div className="business-search-text-reviews">
          <Link className="business-search-name" to={`/businesses/${business.id}`}>
            <span>{business.name}</span>
          </Link>
          {business.number_of_reviews ? (
            <span>
              {StarCalculator(business.avg_rating)}
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
