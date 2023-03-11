/* ----- CONSTANTS ----- */
const GET_ACTIVITIES = "activity/GET_ACTIVITIES";

/* ----- ACTIONS ----- */
const getActivitiesAction = (activities) => {
  return {
    type: GET_ACTIVITIES,
    activities,
  };
};

/* ----- THUNKS ----- */

// Display all activities at root page
export const getActivitiesThunk = () => async (dispatch) => {
  const res = await fetch("/api/activities/");
  if (res.ok) {
    const activities = await res.json();
    dispatch(getActivitiesAction(activities));
  }
};

/* ----- INITIAL STATE ----- */
const initialState = {};

/* ----- REDUCER ----- */
const activityReducer = (state = initialState, action) => {
  let newState = { ...state };
    console.log(action)
  switch (action.type) {
    case GET_ACTIVITIES:
      return { ...newState, activities: action.activities };
    default:
      return state;
  }
};

export default activityReducer;
