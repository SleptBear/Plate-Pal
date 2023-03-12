/* ----- CONSTANTS ----- */
const GET_USER_IMAGES = "images/GET_USER_IMAGES";
const GET_SINGLE_IMAGE = "images/GET_SINGLE_IMAGE"

/* ----- ACTIONS ----- */

const getUserImagesAction = (images) => {
    return {
        type: GET_USER_IMAGES,
        images
    };
};

const getSingleImageAction = (image) => {
    return {
        type: GET_SINGLE_IMAGE,
        image
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

export const getSingleImageThunk = (id) => async (dispatch) => {
    const res = await fetch(`/api/images/${id}`);
    if (res.ok) {
        const image = await res.json();
        dispatch(getSingleImageAction(image));
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
    switch (action.type) {
        case GET_USER_IMAGES:
            newState.userImages = action.images.userImages;
            return newState;
        case GET_SINGLE_IMAGE:
            newState.singleImage = action.image;
            return newState;
        default:
            return state;
    }
};

export default imagesReducer;
