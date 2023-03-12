import { Link } from "react-router-dom";
// import css

const ReviewCard = ({ review }) => {
  return (
    <>
      {/* review name */}
      <Link to={`/reviews/${review.id}/delete`}>
        <button>Delete Review</button>
      </Link>
      {/* new review open */}
      <img src={review.images[0]?.url}></img>
      {/* category */}
      <span>{review.review}</span>
      {/* stars */}
      <span>{review.stars}</span>
    </>
  );
};

export default ReviewCard;
