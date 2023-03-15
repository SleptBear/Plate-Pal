import { Link } from "react-router-dom";
import OpenModalImage from "../../OpenModalImage";
import ImageModal from "../../Images/ImageModal";
import { useDispatch } from "react-redux";
import { getImagesAction } from "../../../store/images";
import StarCalculator from "../../Business/BusinessSearched/StarCalculator"
import * as camera from "./camera.png"
import './ReviewCard.css'
import * as trash from "../../Images/ImageModal/trash.png"
import * as imageIcon from "./image.png"
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const ReviewCard = ({ review }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const user = useSelector(state => state.session.user)
  const handleImageClick = async (e) => {
    const images = {}
    review.images.forEach(review => {
      images[review.id] = review;
    });
    await dispatch(getImagesAction({ "images": images }))
  }



  function formattedDate(d) {
    d = new Date(d)
    let month = String(d.getMonth() + 1);
    let day = String(d.getDate());
    const year = String(d.getFullYear());
    return `${month}/${day}/${year}`;
  }

  const date = formattedDate(review.created_at)
  if (!review) {
    return null
  }

  const handleRedirect = () => {
    history.push(`/reviews/${review.id}/delete`)
  }

  const deleteRender = () => {
    console.log(user.id === review.owner_id)
    console.log(user)
    if (user.id === review.owner_id) {
      return (
        <div className="image-modal-delete-button-container">
          <img src={trash.default}></img>
          <div><span className={"image-modal-delete-button"} onClick={handleRedirect}> Delete Review</span></div>
        </div>
      )
    }
  }

  return (
    <div className="review-card">

      <div className="review-card-owner-container">
        <div className="review-card-owner-image">
          <i className="fas fa-user-circle" />
        </div>
        <div className="review-card-owner-information">
          <div className="review-card-owner-name">{`${review.owner_first_name} ${review.owner_last_name[0]}.`}</div>
          <div className="review-card-owner-image-count">
            <img src={imageIcon.default}></img>
            &nbsp;<div>{review.owner_images_count}</div>
          </div>
          {deleteRender()}
        </div>
      </div>

      <br></br>

      <div className="review-card-rating-and-date-container">
        <div className="review-card-rating">{StarCalculator(review.stars)}</div>
        <div className="review-card-date">{date}</div>
      </div>

      <br></br>

      <div className="review-card-photos-link-container">
        <img src={camera.default}></img>
        <div className="review-card-photos-link-text">{review.images_length} photos</div>
      </div>


      <br></br>
      <div className="review-card-photos-review">{review.review}</div>
      <br></br>
      <div className="review-card-photos-container">
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
      <br></br>
    </div>
  );
};

export default ReviewCard;
