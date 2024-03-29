import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getActivitiesThunk } from "../../../store/activity";
import ReviewCard from "../ActivityCards/ReviewCard";
import BusinessCard from "../ActivityCards/BusinessCard";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";


import banner from "../../../assets/bannerphoto.jpeg";

import "./ActivityIndex.css";

const images = [
  "https://lh3.googleusercontent.com/p/AF1QipNiq_d4WYqKcBFxdeD7Bcwef9GAxooKFuy4U_xw=s680-w680-h510",
  "https://s.hdnux.com/photos/01/31/51/50/23501360/5/rawImage.jpg",
  "https://images.otstatic.com/prod/26238986/3/huge.jpg"
];

const ActivityIndex = () => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities.activities);
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    const activityRestore = async () => {
      await dispatch(getActivitiesThunk());
    };
    activityRestore();
  }, [dispatch]);

  if (!activities) return null;

  activities?.sort(
    (a, b) => Date.parse(b.created_at) - Date.parse(a.created_at)
  );

  return (
    <div>
    <div className="carousel-container">
  <Carousel
    showStatus={false}
    showThumbs={false}
    showIndicators={false}
    infiniteLoop
    autoPlay
    interval={5000}
    transitionTime={1000}
  >
    <div>
      <img src="https://assets3.thrillist.com/v1/image/2994209/1200x630/flatten;crop_down;webp=auto;jpeg_quality=70" alt="image1" />
    </div>
    <div>
      <img src="https://s.hdnux.com/photos/01/31/51/50/23501360/5/rawImage.jpg" alt="image2" />
    </div>
    <div>
      <img src="https://images.otstatic.com/prod/26238986/3/huge.jpg" alt="image3" />
    </div>
  </Carousel>
</div>
    <div className="root-activities-container">

      <br></br>
      <br></br>
      <h2>Recent Activity</h2>
      <br></br>
      <br></br>
      <div className="activities-container">
        {activities.map((item) => {
          if (item.stars) {
            return <ReviewCard item={item} key={item.id.toString()} />;
          } else {
            return (
              <BusinessCard
                item={item}
                key={item.id.toString() + item.zipcode.toString()}
              />
              
            );
          }
        })}
      </div>
    </div>
    </div>
  );
};

export default ActivityIndex;
