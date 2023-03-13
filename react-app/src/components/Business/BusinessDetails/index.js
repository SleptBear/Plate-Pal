import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getSingleBusinessThunk } from "../../../store/businesses";
import { getBusinessReviewsThunk } from "../../../store/reviews";
import ReviewCard from "../../Review/ReviewCard";
// import css
import "./BusinessDetail.css";

const BusinessDetail = () => {
  const dispatch = useDispatch();
  const { businessId } = useParams();
  const business = useSelector((state) => state.businesses.singleBusiness);
  const reviews = useSelector((state) => state.reviews.businessReviews);

  useEffect(() => {
    const businessRestore = async () => {
      await dispatch(getSingleBusinessThunk(businessId));
      await dispatch(getBusinessReviewsThunk(businessId));
    };
    businessRestore();
  }, [dispatch, businessId]);

  if (!business || !reviews) {
    return null;
  }
  return (
    <>
      <div className="business-detail">
        {/* business name */}
        <span>{business.name}</span>
        {/* new business open */}
        <span>New Business Open</span>
        <img src={business.images[0]?.url} />
        {/* city, state */}
        <span>{`${business.city}, ${business.state}`}</span>
        <Link to={`/businesses/${business.id}/images/new`}>
          <button>Add Photo</button>
        </Link>
      </div>

      <div>
        {Object.values(reviews).map((review) => {
          return (
            <ReviewCard
              review={review}
              key={review.id}
            />
          );
        })}
      </div>

    </>
  );
};

export default BusinessDetail;
