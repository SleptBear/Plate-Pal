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
        <Link className="business-search-name" to={`/businesses/${business.id}`}>
          <span>{business.name}</span>
        </Link>
        {business.number_of_reviews ? (
          <div className="business-search-card-rating-container">
            <span>{StarCalculator(business.avg_rating)}</span>
            &nbsp;
            <span>{` ${business.number_of_reviews}`}</span>
          </div>
        ) : (
          <div>New</div>
        )}
        <div>{business.category}</div>
        <div>Hours</div>
        <div className="business-search-card-review-container">
          <span className="business-search-card-review">really long review really long review really long review really long review really long review really long review really long review really long receassdsdsd</span>
        </div>

      </div>
    </div>
  );
};

export default BusinessSearchCard;
