import { getSingleBusinessThunk } from "./businesses";

/* ----- CONSTANTS ----- */
const GET_BUSINESS_REVIEWS = "reviews/GET_BUSINESS_REVIEWS";
const GET_USER_REVIEWS = "reviews/GET_USER_REVIEWS";
const POST_REVIEW = "reviews/POST_REVIEW";
const DELETE_REVIEW = "reviews/DELETE_REVIEW";

/* ----- ACTIONS ----- */
const getBusinessReviewsAction = (reviews) => {
    return {
        type: GET_BUSINESS_REVIEWS,
        reviews,
    };
};

const getUserReviewsAction = (reviews) => {
    return {
        type: GET_USER_REVIEWS,
        reviews,
    };
};

const postReviewAction = (review) => {
    return {
        type: POST_REVIEW,
        review,
    };
};

const deleteReviewAction = (id) => {
    return {
        type: DELETE_REVIEW,
        id,
    };
};

/* ----- THUNKS ----- */

// Display all business reviews at business detail page
export const getBusinessReviewsThunk = (id) => async (dispatch) => {
    const res = await fetch(`/api/businesses/${id}/reviews`);
    if (res.ok) {
        const reviews = await res.json();
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

// Delete review by review id for current user
export const deleteReviewThunk = (reviewId) => async (dispatch) => {
    const res = await fetch(`/api/reviews/${reviewId}`, {
        method: "DELETE"
    });
    if (res.ok) {
        dispatch(deleteReviewAction(reviewId));
    }
};


// Post new review by business id for current user
export const postReviewThunk =
    (newReview, businessId) => async (dispatch) => {
        const res = await fetch(`/api/businesses/${businessId}/reviews`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newReview),
        });

        if (res.ok) {
            const createdReview = await res.json();
            dispatch(postReviewAction(createdReview));
            dispatch(getSingleBusinessThunk(businessId));
            return createdReview;
        }
    };

/* ----- INITIAL STATE ----- */
const initialState = {
    businessReviews: null,
    userReviews: null,
    singleReview: null,
};

/* ----- REDUCER ----- */
const reviewsReducer = (state = initialState, action) => {
    let newState = { ...state };
    switch (action.type) {
        case GET_BUSINESS_REVIEWS:
            newState.businessReviews = action.reviews.businessReviews;
            return newState;
        case GET_USER_REVIEWS:
            newState.userReviews = action.reviews.userReviews;
            return newState;
        case POST_REVIEW:
            newState.singleReview = action.review;
            return newState;
        case DELETE_REVIEW:
            if (newState.userReviews) {
                delete newState.userReviews[action.id]
            }
            if (newState.businessReviews) {
                delete newState.businessReviews[action.id]
            }
            return newState
        default:
            return state;
    }
};

export default reviewsReducer;
