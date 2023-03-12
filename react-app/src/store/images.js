/* ----- CONSTANTS ----- */
const GET_USER_IMAGES = "images/GET_USER_IMAGES";

/* ----- ACTIONS ----- */

const getUserImagesAction = (images) => {
    return {
      type: GET_USER_IMAGES,
      images
    };
  };

/* ----- THUNKS ----- */

// Display all user images at manage images page
export const getUserImagesThunk = () => async (dispatch) => {
    const res = await fetch(`/api/images/current`);
    if (res.ok) {
      const images = await res.json();
      dispatch(getUserImagesAction(images));
    }
  };

/* ----- INITIAL STATE ----- */
const initialState = {
    userImages: null,
    singleImage: null
};

/* ----- REDUCER ----- */
const imagesReducer = (state = initialState, action) => {
  let newState = { ...state };
  console.log(action)
  switch (action.type) {
    case GET_USER_IMAGES:
        newState.userImages = action.images.userImages;
        return newState;
    default:
      return state;
  }
};

export default imagesReducer;
