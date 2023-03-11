import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import getActivitiesThunk from "../../../store/activity"

import "./ActivityIndex.css";

// import BusinessCard
// import ReviewCard
// if item from activity has stars, then render with <BusinessCard /> else render with <ReviewCard />

const ActivityIndex = () => {
  const dispatch = useDispatch();
  const activities = useSelector((state) => state.activities);
  const user = useSelector((state) => state.session.user);

  useEffect(() => {
    const activityRestore = async () => {
      await dispatch(getActivitiesThunk());
    };
    activityRestore();
  }, []);

  // activities.sort(
  //   (a, b) => Date.parse(b.created_at) - Date.parse(a.created_at)
  // );

  // if (!activities[0]) return;

  return (
    <>
      <h1>Test Activities</h1>
    </>
  );
};

export default ActivityIndex;
