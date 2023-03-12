import { Link } from "react-router-dom";
import "./ReviewCard.css";

const ReviewCard = ({ item }) => {
  return (
    <div className="review-card-container">
      <span>{`${item.owner_firstname} ${item.owner_lastname[0]}.`}</span>
      <span>Wrote a review</span>
      <img className="review-card-image" src={item.business_image}></img>
      <Link to={`/businesses/${item.business_id}`}>
        <span>{item.business_name}</span>
      </Link>
      <span>{item.stars}</span>
      <span className="review-card-text">
        {item.review.length < 76
          ? item.review
          : `${item.review.slice(0, 76)}...`}
      </span>
    </div>
  );
};

export default ReviewCard;
