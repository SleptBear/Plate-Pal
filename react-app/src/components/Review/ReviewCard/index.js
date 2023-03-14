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
    await dispatch(getImagesAction({"images": images}))
  }

  return (
    <div className="review-card">
      {/* review name */}
      <Link to={`/reviews/${review.id}/delete`}>
        <button>Delete Review</button>
      </Link>
      {/* new review open */}
      <div>
        <OpenModalImage
          imageUrl={review.images[0]?.url}
          modalComponent={<ImageModal imageId={review.images[0]?.id} />}
          onImageClick={() => {handleImageClick()}}
        >
        </OpenModalImage>
        <OpenModalImage
          imageUrl={review.images[1]?.url}
          modalComponent={<ImageModal imageId={review.images[1]?.id} />}
          onImageClick={() => {handleImageClick()}}
        >
        </OpenModalImage>
        <OpenModalImage
          imageUrl={review.images[2]?.url}
          modalComponent={<ImageModal imageId={review.images[2]?.id} />}
          onImageClick={() => {handleImageClick()}}
        >
        </OpenModalImage>
        <OpenModalImage
          imageUrl={review.images[3]?.url}
          modalComponent={<ImageModal imageId={review.images[3]?.id} />}
          onImageClick={() => {handleImageClick()}}
        >
        </OpenModalImage>
      </div>

      {/* category */}
      <p>{review.review}</p>
      {/* stars */}
      <span>{review.stars}</span>
    </div>
  );
};

export default ReviewCard;
