// frontend/src/components/deleteFormModal/index.js
import React from "react";
import { useDispatch } from "react-redux";
import { Redirect, useHistory } from 'react-router-dom';
import "./BusinessDelete.css";
import { deleteBusinessThunk } from "../../../store/businesses";
import { useParams } from "react-router-dom"

function BusinessDelete() {
  const dispatch = useDispatch();
  const { businessId } = useParams()
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault()
    await dispatch(deleteBusinessThunk(businessId))
    history.push(`/businesses/current`);
    <Redirect to={`/businesses/current`} />
  };

  return (
    <>
      <div className="delete-form-container">
        <form className={"delete-form"} onSubmit={handleSubmit}>
          <h2 className="delete-form-title">Confirm Delete</h2>
          <span>
            Are you sure you want to remove this business from the listings?
          </span>
          <button type="submit" onClick={handleSubmit} className={"enabled"}>Yes (Delete Review)</button>
          {/* <button type="submit" onClick={} className={"accent"}>No (Keep Review)</button> */}
        </form>
      </div>
    </>
  );
}

export default BusinessDelete;
