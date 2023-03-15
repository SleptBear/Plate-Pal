import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { postReviewThunk } from "../../../store/reviews";
import { getSingleBusinessThunk } from "../../../store/businesses";

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

  // star rating hover
  const [stars, setStars] = useState(0);
  const [hover, setHover] = useState(0);

  const onSubmit = async (e) => {
    e.preventDefault();

    const newReview = {
      review: "test review text",
      stars,
    };

    let createdReview = await dispatch(
      postReviewThunk(newReview, businessId, user)
    );

    if (createdReview) {
      history.push(`/businesses/${businessId}`);
    }
  };

  if (!business) return null;

  return (
    <div>
      <form className="create-review-container" onSubmit={onSubmit}>
        <br></br>
        <h3>{business.name}</h3>
        <br></br>
        <ul>{/* map errors */}</ul>
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
            className="create-review-textarea"
            placeholder="Leave a review here"
          ></textarea>
        </div>
        <span>Attach Photos</span>
        <span>URL - needs functionality</span>
        <input></input>
        <br></br>
        <button className="create-review-post-button">Post Review</button>
      </form>
    </div>
  );
};

export default ReviewCreate;
