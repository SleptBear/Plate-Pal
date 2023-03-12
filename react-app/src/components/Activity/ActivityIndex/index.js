import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getActivitiesThunk } from "../../../store/activity";
import ReviewCard from "../ActivityCards/ReviewCard";
import BusinessCard from "../ActivityCards/BusinessCard";

import banner from "../../../assets/bannerphoto.jpeg";

import "./ActivityIndex.css";

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
    (a, b) => Date.parse(b.updated_at) - Date.parse(a.updated_at)
  );

  return (
    <div className="root-activities-container">
      <img className="banner-image" src={banner} alt="logo"></img>
      <h2>Recent Activity</h2>
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
  );
};

export default ActivityIndex;
