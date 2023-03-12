/* ----- CONSTANTS ----- */
const GET_BUSINESS_REVIEWS = "reviews/GET_BUSINESS_REVIEWS";
const Get_USER_REVIEWS = "reviews/Get_USER_REVIEWS";

/* ----- ACTIONS ----- */
const getBusinessReviewsAction = (reviews) => {
  return {
    type: GET_BUSINESS_REVIEWS,
    reviews
  };
};

const getUserReviewsAction = (reviews) => {
    return {
      type: Get_USER_REVIEWS,
      reviews
    };
  };

/* ----- THUNKS ----- */

// Display all business reviews at business detail page
export const getBusinessReviewsThunk = (id) => async (dispatch) => {
  const res = await fetch(`/api/businesses/${id}/reviews`);
  if (res.ok) {
    const reviews = await res.json();
    console.log('??????????????????/', reviews)
    dispatch(getBusinessReviewsAction(reviews));
  }
};

// Display all user reviews at manage reviews page
export const getUserReviewsThunk = () => async (dispatch) => {
    const res = await fetch(`/api/reviews/current`);
    if (res.ok) {
      const reviews = await res.json();
      dispatch(getUserReviewsAction(reviews));
    }
  };

/* ----- INITIAL STATE ----- */
const initialState = {
    businessReviews: null,
    userReviews: null
};

/* ----- REDUCER ----- */
const reviewsReducer = (state = initialState, action) => {
  let newState = { ...state };
  console.log(action)
  switch (action.type) {
    case GET_BUSINESS_REVIEWS:
      newState.businessReviews = action.reviews.businessReviews;
      return newState;
    case Get_USER_REVIEWS:
        newState.userReviews = action.reviews.userReviews;
        return newState;
    default:
      return state;
  }
};

export default reviewsReducer;
