import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getSingleBusinessThunk } from "../../../store/businesses";
import { getBusinessReviewsThunk } from "../../../store/reviews";
import ReviewCard from "../../Review/ReviewCard";
import OpenImageModalButton from "../../OpenImageModalButton";
import ImageModal from "../../Images/ImageModal";
import { getImagesAction } from "../../../store/images";
// import css
import "./BusinessDetail.css";
import CreateImageFormModal from "../../CreateImageFormModal";

const BusinessDetail = () => {
  const dispatch = useDispatch();
  const { businessId } = useParams();
  const business = useSelector((state) => state.businesses.singleBusiness);
  const reviews = useSelector((state) => state.reviews.businessReviews);
  const user = useSelector((state) => state.session.user)

  useEffect(() => {
    const businessRestore = async () => {
      await dispatch(getSingleBusinessThunk(businessId));
      await dispatch(getBusinessReviewsThunk(businessId));
    };
    businessRestore();
  }, [dispatch, businessId]);

  const handleButtonClick = async (e) => {
    const images = {}
    business.images.forEach(business => {
      images[business.id] = business;
    });
    await dispatch(getImagesAction({ "images": images }))
  }

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
        <img src={business.images ? business.images[0]?.url : ""} />
        {/* city, state */}
        <span>{`${business.city}, ${business.state}`}</span>
        <OpenImageModalButton
          modalComponent={<CreateImageFormModal business_id={business.id} />}
        >
        </OpenImageModalButton>
        <Link to={`/businesses/${business.id}/images`} >
          <button>{`See all ${business.images ? business.images.length : ""} images`}</button>
        </Link>
        <Link to={`/businesses/${business.id}/reviews/new`}>
          <button>Write a Review</button>
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
