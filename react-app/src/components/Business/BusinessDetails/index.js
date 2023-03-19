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
import StarCalculator from "../BusinessSearched/StarCalculator";
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

  const priceChecker = () => {
    if (business.price === 1) {
      return '$'
    }
    if (business.price === 2) {
      return '$$'
    }
    if (business.price === 3) {
      return '$$$'
    }
    if (business.price === 4) {
      return '$$$$'
    }
  }



  if (!business || !reviews) {
    return null;
  }

  const hoursChecker = () => {
    let isOpen
    console.log(business.hours_of_operation.split(", "))
    let businessDayHours = business.hours_of_operation.split(", ")
    const d = new Date();
    let dayIndex = d.getDay();
    console.log(d)
    console.log(dayIndex)
    let days = ["S  ", "M", "T ", "W", "R ", "F ", "S "]
    console.log(days[dayIndex])
    console.log(businessDayHours.find(day => day.startsWith(days[dayIndex] + ":")))
    let todaysHours = businessDayHours.find(day => day.startsWith(days[dayIndex] + ":"))
    console.log(todaysHours.split(": "))

    if (todaysHours.split(": ")[1] === "Closed") {
      isOpen = false
      console.log([isOpen, "Business is not open today"])
      return [isOpen, "Business is not open today"]
    }

    todaysHours = todaysHours.split(": ")[1]
    console.log(todaysHours.split("-"))

    let openTime = todaysHours.split("-")[0]
    let closeTime = todaysHours.split("-")[1]

    function convertTo24Hour(time) {
      // Check if the time is in the format of "Xpm" or "Xam", where X is a number
      if (/^\d+[ap]m$/i.test(time)) {
        // Extract the hours, minutes, and AM/PM indicator from the time string
        const hours = parseInt(time.match(/^\d+/)[0]);
        const minutes = "00";
        const indicator = time.slice(-2);

        // Convert the hours to 24-hour format
        let hour = hours;
        if (indicator === "pm" && hour !== 12) {
          hour += 12;
        } else if (indicator === "am" && hour === 12) {
          hour = 0;
        }

        // Pad the hour value with a leading zero if necessary
        const formattedHour = hour.toString().padStart(2, "0");

        // Return the formatted time string in 24-hour form
        return `${formattedHour}:${minutes}`;
      } else if (/^\d{1,2}:\d{2}[ap]m$/i.test(time)) {
        // Extract the hours, minutes, and AM/PM indicator from the time string
        const [hours, minutesAndIndicator] = time.split(":");
        const minutes = minutesAndIndicator.slice(0, 2);
        const indicator = minutesAndIndicator.slice(-2);

        // Convert the hours to 24-hour format
        let hour = parseInt(hours, 10);
        if (indicator === "pm" && hour !== 12) {
          hour += 12;
        } else if (indicator === "am" && hour === 12) {
          hour = 0;
        }

        // Pad the hour and minute values with leading zeros if necessary
        const formattedHour = hour.toString().padStart(2, "0");
        const formattedMinutes = minutes.toString().padStart(2, "0");

        // Return the formatted time string in 24-hour form
        return `${formattedHour}:${formattedMinutes}`;
      } else {
        // If the time is not in the format of "Xpm" or "Xam" or "hh:mmXM", assume it's already in 24-hour format and return it as is
        return time;
      }
    }

    console.log(convertTo24Hour("1:30am"))
    console.log(convertTo24Hour(openTime))
    console.log(convertTo24Hour(closeTime))

    openTime = convertTo24Hour(openTime)
    closeTime = convertTo24Hour(closeTime)

    console.log(d.getHours())
    console.log(d.getMinutes())

    function getTimeString() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      return `${hours}:${minutes}`;
    }

    console.log(getTimeString())

    function isTimeInRange(timeString, startTimeString, endTimeString) {
      const time = new Date(`2023-01-01T${timeString}`);
      const startTime = new Date(`2023-01-01T${startTimeString}`);
      const endTime = new Date(`2023-01-01T${endTimeString}`);

      return time >= startTime && time <= endTime;
    }

    isOpen = isTimeInRange(getTimeString(), openTime, closeTime)
    console.log([isOpen, todaysHours])
    return [isOpen, todaysHours]

  }

  let isOpen
  let hours
  if (hoursChecker()[0]) {
    isOpen = <span style={{ color: "rgba(4,197,133,1)" }}>Open</span>
    hours = hoursChecker()[1]
  } else {
    isOpen = <span style={{ color: "rgba(255,139,135,1)" }}>Closed</span>
    hours = hoursChecker()[1]
  }

  let columns
  business.images?.length === 1 ? columns = "1fr" : columns = columns
  business.images?.length === 2 ? columns = "1fr 1fr" : columns = columns
  business.images?.length === 3 ? columns = "1fr 1fr 1fr" : columns = columns
  business.images?.length >= 4 ? columns = "1fr 1fr 1fr 1fr" : columns = columns
  return (
    <>
      <div className="business-detail-title-background-wrapper">
        <div className="business-detail-title-background"
          style={{ display: "grid", gridTemplateColumns: columns }}
        >
          {business.images && business.images[0] ? (
            <>
              <div className="business-detail-image-wrapper">
                <img src={business.images[0].url}></img>
                <img src={business.images[0].url}></img>
              </div>
            </>
          ) : (
            <>
            </>
          )}
          {business.images && business.images[1] ? (
            <>
              <div className="business-detail-image-wrapper">
                <img src={business.images[1].url}></img>
                <img src={business.images[1].url}></img>
              </div>
            </>
          ) : (
            <>
            </>
          )}
          {business.images && business.images[2] ? (
            <>
              <div className="business-detail-image-wrapper">
                <img src={business.images[2].url}></img>
                <img src={business.images[2].url}></img>
              </div>
            </>
          ) : (
            <>
            </>
          )}
          {business.images && business.images[3] ? (
            <>
              <div className="business-detail-image-wrapper">
                <img src={business.images[3].url}></img>
                <img src={business.images[3].url}></img>
              </div>
            </>
          ) : (
            <>
            </>
          )}
        </div>
      </div>

      <div className="business-detail-title-card-wrapper">
        <div className="business-detail-title-card">
          <h1>{business.name}</h1>
          <br></br>
          <div className="business-detail-reviews-information">
            {StarCalculator(business.avg_rating)}
            {`${business.number_of_reviews} reviews`}
          </div>
          <br></br>
          <div className="business-detail-related-information">
            <span style={{ "color": "rgba(88,180,255,1)" }}>
              <i className="fa-solid fa-circle-check"></i>{` Claimed`}
            </span>
            &nbsp;
            &bull;
            &nbsp;
            {priceChecker()}
            &nbsp;
            &bull;
            &nbsp;
            {business.category}

          </div>
          <br></br>
          <div className="business-detail-hours-images-container">
            <div>{isOpen} &nbsp; {hours}</div>
            <Link to={`/businesses/${business.id}/images`} >
              <button>{`See all ${business.images ? business.images.length : ""} images`}</button>
            </Link>
          </div>
          <br></br>
        </div>
      </div>



      <br></br>
      <br></br>
      <br></br>
      <br></br>

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
