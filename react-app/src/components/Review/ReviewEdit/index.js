import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
// import postNewImageThunk? may need in onSubmit after editedReview returned
import { getSingleReviewThunk, editReviewThunk } from "../../../store/reviews";

import "./ReviewEdit.css";

const ReviewEdit = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { reviewId } = useParams();

  const currentUser = useSelector((state) => state.session.user);
  const singleReview = useSelector((state) => state.reviews.singleReview);

  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [review, setReview] = useState("");

  // star rating hover
  const [stars, setStars] = useState(0);
  const [hover, setHover] = useState(0);

  // repopulating input fields
  useEffect(() => {
    dispatch(getSingleReviewThunk(reviewId));

    const restoreReview = async () => {
      let restoreReview = await dispatch(getSingleReviewThunk(reviewId));

      // redirect user to 404 custom page like Yelp's
      // if (!restoreReview) return history.push("/");
      // if (restoreReview?.owner_id !== currentUser.id) history.push("/");

      // if review was not found, then state for reviews.singleReview won't be updated, would return null
      setReview(restoreReview?.review);
      setStars(restoreReview?.stars);
    };

    restoreReview();
  }, [dispatch]);

  // handle submit
  const onSubmit = async (e) => {
    e.preventDefault();

    setHasSubmitted(true);

    if (Object.values(errors).length > 0) return;

    const reviewContent = {
      review,
      stars,
    };

    let editedReview = await dispatch(editReviewThunk(reviewId, reviewContent));

    if (editedReview) {
      history.push(`/businesses/${editedReview.business_id}`);
    }
  };

  // handle frontend error validations
  useEffect(() => {
    const valErrors = {};

    if (review?.length < 1) valErrors.review = "Review description is required";
    if (stars < 1 || stars > 5)
      valErrors.stars = "Star ratings must be between 1-5";

    setErrors(valErrors);
  }, [review, stars]);

  if (!singleReview) return "Review not found";
  if (singleReview.owner_id !== currentUser.id) history.push("/");

  return (
    <div>
      <form onSubmit={onSubmit}>
        <ul>{/* map errors */}</ul>
        <div className="review-form-stars-container">
          {/* Each star value 1-5
            On hover/click, set stars value to appropriate number */}
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <button
                type="button"
                key={index}
                className={index <= (hover || stars) ? "on" : "off"}
                onClick={() => setStars(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(stars)}
              >
                <span className="star-rating">&#9733;</span>
              </button>
            );
          })}
          <span>{` Select your rating`}</span>
          <span style={{ color: "red" }}>{hasSubmitted && errors.stars}</span>
        </div>
        <div>
          <textarea
            placeholder="Leave a review here"
            type="textarea"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          ></textarea>
        </div>
        <span style={{ color: "red" }}>{hasSubmitted && errors.review}</span>
        <div>
          <span>Attach Photos</span>
        </div>
        <button>Update Review</button>
      </form>
    </div>
  );
};

export default ReviewEdit;
