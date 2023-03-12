/* ----- CONSTANTS ----- */
const GET_BUSINESS_REVIEWS = "reviews/GET_BUSINESS_REVIEWS";

/* ----- ACTIONS ----- */
const getBusinessReviewsAction = (reviews) => {
  return {
    type: GET_BUSINESS_REVIEWS,
    reviews
  };
};

/* ----- THUNKS ----- */

// Display all businesses at root page
export const getBusinessReviewsThunk = (id) => async (dispatch) => {
  const res = await fetch(`/api/businesses/${id}/reviews`);
  if (res.ok) {
    const reviews = await res.json();
    console.log('??????????????????/', reviews)
    dispatch(getBusinessReviewsAction(reviews));
  }
};

/* ----- INITIAL STATE ----- */
const initialState = {
    businessReviews: null
};

/* ----- REDUCER ----- */
const reviewsReducer = (state = initialState, action) => {
  let newState = { ...state };
  console.log(action)
  switch (action.type) {
    case GET_BUSINESS_REVIEWS:
      newState.businessReviews = action.reviews.businessReviews;
      return newState;
    default:
      return state;
  }
};

export default reviewsReducer;
