// frontend/src/components/deleteFormModal/index.js
import React from "react";
import { useDispatch } from "react-redux";
import { Redirect, useHistory } from 'react-router-dom';
import "./ReviewDelete.css";
import { deleteReviewThunk } from "../../../store/reviews";
import { useParams } from "react-router-dom"

function ReviewDelete() {
  const dispatch = useDispatch();
  const { reviewId } = useParams()
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault()
    await dispatch(deleteReviewThunk(reviewId))
    history.push(`/reviews/current`);
    <Redirect to={`/reviews/current`} />
  };

  return (
    <>
      <div className="delete-form-container">
        <form className={"delete-form"} onSubmit={handleSubmit}>
          <h2 className="delete-form-title">Confirm Delete</h2>
          <span>
            Are you sure you want to remove this review from the listings?
          </span>
          <button type="submit" onClick={handleSubmit} className={"enabled"}>Yes (Delete Review)</button>
          {/* <button type="submit" onClick={} className={"accent"}>No (Keep Review)</button> */}
        </form>
      </div>
    </>
  );
}

export default ReviewDelete;
