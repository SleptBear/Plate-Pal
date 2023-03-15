import { Link } from "react-router-dom";
import OpenModalImage from "../../OpenModalImage";
import ImageModal from "../../Images/ImageModal";
import { useDispatch } from "react-redux";
import { getImagesAction } from "../../../store/images";
import './ReviewCard.css'

const ReviewCard = ({ review }) => {
  const dispatch = useDispatch()

  const handleImageClick = async (e) => {
    const images = {}
    review.images.forEach(review => {
      images[review.id] = review;
    });
    await dispatch(getImagesAction({ "images": images }))
  }

  return (
    <div className="review-card">
      {/* review name */}
      <Link to={`/reviews/${review.id}/delete`}>
        <button>Delete Review</button>
      </Link>
      {/* new review open */}
      <div>
        <Link to={`/reviews/${review.id}/images`}>
          <img src={review.images[0]?.url}></img>
        </Link>
        <Link to={`/reviews/${review.id}/images`}>
          <img src={review.images[1]?.url}></img>
        </Link>
        <Link to={`/reviews/${review.id}/images`}>
          <img src={review.images[2]?.url}></img>
        </Link>
        <Link to={`/reviews/${review.id}/images`}>
          <img src={review.images[3]?.url}></img>
        </Link>
      </div>

      {/* category */}
      <p>{review.review}</p>
      {/* stars */}
      <span>{review.stars}</span>
    </div>
  );
};

export default ReviewCard;
