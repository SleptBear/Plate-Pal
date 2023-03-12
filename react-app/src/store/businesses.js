/* ----- CONSTANTS ----- */
const GET_SINGLE_BUSINESS = "businesses/GET_SINGLE_BUSINESS";

/* ----- ACTIONS ----- */
const getSingleBusincessAction = (business) => {
  return {
    type: GET_SINGLE_BUSINESS,
    business
  };
};

/* ----- THUNKS ----- */

// Display all businesses at root page
export const getSingleBusinessThunk = (id) => async (dispatch) => {
  const res = await fetch(`/api/businesses/${id}`);
  if (res.ok) {
    const business = await res.json();
    console.log('??????????????????/', business)
    dispatch(getSingleBusincessAction(business));
  }
};

/* ----- INITIAL STATE ----- */
const initialState = {
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
    default:
      return state;
  }
};

export default businessReducer;
