import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { postNewReviewThunk } from "../../../store/reviews";

import "./CreateReview.css";

const CreateNewReview = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  //   const [ errors, setErrors ] = useState([])

  //   const businessId = useSelector((state) => state.businesses.id);

  return (
    <div>
      <div></div>
    </div>
  );
};
