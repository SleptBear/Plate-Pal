/* ----- CONSTANTS ----- */
const GET_SINGLE_BUSINESS = "businesses/GET_SINGLE_BUSINESS";
const GET_CURRENT_BUSINESSES = "businesses/GET_CURRENT_BUSINESSES";

/* ----- ACTIONS ----- */
const getSingleBusincessAction = (business) => {
  return {
    type: GET_SINGLE_BUSINESS,
    business
  };
};

const getCurrentBusinessesAction = (businesses) => {
    return {
      type: GET_CURRENT_BUSINESSES,
      businesses
    };
  };

/* ----- THUNKS ----- */

// Display single business details
export const getSingleBusinessThunk = (id) => async (dispatch) => {
  const res = await fetch(`/api/businesses/${id}`);
  if (res.ok) {
    const business = await res.json();
    dispatch(getSingleBusincessAction(business));
  }
};

// Display current user businesses

export const getCurrentBusinessesThunk = () => async (dispatch) => {
    const res = await fetch(`/api/businesses/current`);
    if (res.ok) {
      const businesses = await res.json();
      console.log('???????asdasd????????', businesses.businesses)
      dispatch(getCurrentBusinessesAction(businesses));
    }
  };

/* ----- INITIAL STATE ----- */
const initialState = {
    businesses: null,
    singleBusiness: null
};

/* ----- REDUCER ----- */
const businessReducer = (state = initialState, action) => {
  let newState = { ...state };
  console.log(action)
  switch (action.type) {
    case GET_SINGLE_BUSINESS:
      newState.singleBusiness = action.business;
      return newState;
    case GET_CURRENT_BUSINESSES:
      newState.businesses = action.businesses.businesses
      return newState
    default:
      return state;
  }
};

export default businessReducer;
