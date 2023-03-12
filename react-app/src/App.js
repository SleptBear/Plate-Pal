import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import Navigation from "./components/Navigation";
import ActivityIndex from "./components/Activity/ActivityIndex";
import BusinessDetail from "./components/Business/BusinessDetails";
import ManageBusinessesIndex from "./components/Business/ManageBusinessesIndex";
import ManageReviewsIndex from "./components/Review/ManageReviewsIndex";
import ManageImagesIndex from "./components/Images/ManageImagesIndex";
import ImageDetail from "./components/Images/ImageDetails";
import CreateNewReview from "./components/Review/CreateReview";
import CreateNewBusiness from "./components/Business/BusinessCreate";
import ReviewDelete from "./components/Review/ReviewDelete";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <ActivityIndex />
          </Route>
          <Route exact path="/businesses/current">
            <ManageBusinessesIndex />
          </Route>
          <Route path="/businesses/new">
            <CreateNewBusiness />
          </Route>
          <Route exact path="/businesses/:businessId">
            <BusinessDetail />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/businesses/:businessId/reviews/new">
            <CreateNewReview />
          </Route>
          <Route path="/reviews/current">
            <ManageReviewsIndex />
          </Route>
          <Route path="/reviews/:reviewId/delete">
            <ReviewDelete />
          </Route>
          <Route path="/images/current">
            <ManageImagesIndex />
          </Route>
          <Route path="/images/:imageId">
            <ImageDetail />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
