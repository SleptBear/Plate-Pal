import { Link } from "react-router-dom";
import "./ReviewCard.css";

const ReviewCard = ({ item }) => {
  // console.log(item)
  return (
    <>
      <div>
        <span>{`${item.owner_firstname} ${item.owner_lastname[0]}.`}</span>
        <span>Wrote a review</span>
        <img src={item.business_image}></img>
        <Link to={`/businesses/${item.business_id}`}>
          <span>{item.business_name}</span>
        </Link>
        <span>{item.stars}</span>
        <span>{item.review}</span>
      </div>
    </>
  );
};

export default ReviewCard;
