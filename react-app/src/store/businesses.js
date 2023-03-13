/* ----- CONSTANTS ----- */
const GET_SINGLE_BUSINESS = "businesses/GET_SINGLE_BUSINESS";
const GET_CURRENT_BUSINESSES = "businesses/GET_CURRENT_BUSINESSES";
const POST_BUSINESS = "businesses/POST_BUSINESS";
const DELETE_BUSINESS = "businesses/DELETE_BUSINESS";
const EDIT_BUSINESS = "businesses/EDIT_BUSINESS";

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

const deleteBusinessAction = (id) => {
  return {
    type: DELETE_BUSINESS,
    id,
  };
};

const editBusinessAction = (business) => {
  return {
    type: EDIT_BUSINESS,
    business,
  };
};

/* ----- THUNKS ----- */

// Delete business by business id for current user
export const deleteBusinessThunk = (businessId) => async (dispatch) => {
  const res = await fetch(`/api/businesses/${businessId}`, {
    method: "DELETE",
  });
  if (res.ok) {
    dispatch(deleteBusinessAction(businessId));
  }
};

// Display single business details
export const getSingleBusinessThunk = (id) => async (dispatch) => {
  const res = await fetch(`/api/businesses/${id}`);
  if (res.ok) {
    const business = await res.json();
    dispatch(getSingleBusinessAction(business));
    return business;
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

// Edit a business by id
export const editBusinessThunk =
  (businessContent, businessId) => async (dispatch) => {
    const res = await fetch(`/api/businesses/${businessId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(businessContent),
    });

    if (res.ok) {
      const editedBusiness = await res.json();
      dispatch(editBusinessAction(editedBusiness));
      return editedBusiness;
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
    case DELETE_BUSINESS:
      if (newState.businesses) {
        delete newState.businesses[action.id];
      }
      return newState;
    case EDIT_BUSINESS:
      newState.singleBusiness = action.business;
      return newState;
    default:
      return state;
  }
};

export default businessReducer;
