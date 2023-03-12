/* ----- CONSTANTS ----- */
const GET_SINGLE_BUSINESS = "businesses/GET_SINGLE_BUSINESS";
const GET_CURRENT_BUSINESSES = "businesses/GET_CURRENT_BUSINESSES";
const POST_BUSINESS = "businesses/POST_BUSINESS";

/* ----- ACTIONS ----- */
const getSingleBusinessAction = (business) => {
  return {
    type: GET_SINGLE_BUSINESS,
    business,
  };
};

const getCurrentBusinessesAction = (businesses) => {
  return {
    type: GET_CURRENT_BUSINESSES,
    businesses,
  };
};

const postBusinessAction = (business) => {
  return {
    type: POST_BUSINESS,
    business,
  };
};

/* ----- THUNKS ----- */

// Display single business details
export const getSingleBusinessThunk = (id) => async (dispatch) => {
  const res = await fetch(`/api/businesses/${id}`);
  if (res.ok) {
    const business = await res.json();
    dispatch(getSingleBusinessAction(business));
  }
};

// Display current user businesses
export const getCurrentBusinessesThunk = () => async (dispatch) => {
  const res = await fetch(`/api/businesses/current`);
  if (res.ok) {
    const businesses = await res.json();
    dispatch(getCurrentBusinessesAction(businesses));
  }
};

// Create a new business
export const postBusinessThunk = (newBusiness) => async (dispatch) => {
  const res = await fetch(`/api/businesses/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newBusiness),
  });

  if (res.ok) {
    const createdBusiness = await res.json();
    dispatch(postBusinessAction(createdBusiness));
    return createdBusiness;
  }
};

/* ----- INITIAL STATE ----- */
const initialState = {
  businesses: null,
  singleBusiness: null,
};

/* ----- REDUCER ----- */
const businessReducer = (state = initialState, action) => {
  let newState = { ...state };
  console.log(action);
  switch (action.type) {
    case GET_SINGLE_BUSINESS:
      newState.singleBusiness = action.business;
      return newState;
    case GET_CURRENT_BUSINESSES:
      newState.businesses = action.businesses.businesses;
      return newState;
    case POST_BUSINESS:
      newState.singleBusiness = action.business;
      return newState;
    default:
      return state;
  }
};

export default businessReducer;
