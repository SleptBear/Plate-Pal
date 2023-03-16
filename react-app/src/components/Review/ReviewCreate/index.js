import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { postReviewThunk } from "../../../store/reviews";
import { getSingleBusinessThunk } from "../../../store/businesses";
import { postReviewImageThunk } from "../../../store/reviews";

import "./ReviewCreate.css";

const ReviewCreate = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const { businessId } = useParams();

  const user = useSelector((state) => state.session.user);
  const business = useSelector((state) => state.businesses.singleBusiness);

  useEffect(() => {
    dispatch(getSingleBusinessThunk(businessId));
  }, [dispatch]);

  const [review, setReview] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [imageCaption, setImageCaption] = useState("");

  // star rating hover
  const [stars, setStars] = useState(0);
  const [hover, setHover] = useState(0);

  const onSubmit = async (e) => {
    e.preventDefault();

    const newReview = {
      review,
      stars,
    };

    let response = await dispatch(postReviewThunk(newReview, businessId, user));

    // all error responses for this backend route return as arrays
    if (Array.isArray(response)) setErrors(response);

    // handle image add after business has been created
    const imageContent = { url: imageURL, caption: imageCaption };
    if (!Array.isArray(response) && imageURL)
      await dispatch(postReviewImageThunk(imageContent, response.id));

    if (!Array.isArray(response)) {
      history.push(`/businesses/${businessId}`);
    }
  };

  if (!business) return null;

  return (
    <div>
      <form className="create-review-container" onSubmit={onSubmit}>
        <br></br>
        <h3>{business.name}</h3>
        <ul>
          {errors.map((error, idx) => (
            <li style={{ color: "red" }} key={idx}>
              {error}
            </li>
          ))}
        </ul>
        <span style={{ color: "red" }}></span>
        <br></br>
        <div className="review-form-stars-container">
          {/* Each star value 1-5
            On hover/click, set stars value to appropriate number */}
          <span>{`Select your rating: `}</span>
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
        </div>
        <br></br>
        <div>
          <textarea
            value={review}
            onChange={(e) => setReview(e.target.value)}
            className="create-review-textarea"
            placeholder="Leave a review here"
          ></textarea>
        </div>
        <span style={{ color: "red" }}></span>
        <br></br>
        <h4>Attach Images</h4>
        <input
          type="text"
          className="create-review-image-url"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
          placeholder="Image URL (Optional)"
        ></input>

        <textarea
          type="textarea"
          className="create-review-textarea-caption"
          value={imageCaption}
          onChange={(e) => setImageCaption(e.target.value)}
          placeholder="Caption (Optional)"
        ></textarea>
        <br></br>
        <button className="create-review-post-button">Post Review</button>
      </form>
    </div>
  );
};

export default ReviewCreate;
