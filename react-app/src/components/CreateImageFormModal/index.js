import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./CreateImageFormModal.css";
import { getSingleBusinessThunk } from "../../store/businesses";
import { getSingleReviewThunk, postReviewImageThunk } from "../../store/reviews";
import { postBusinessImageThunk } from "../../store/businesses";
import { useModal } from "../../context/Modal";


function CreateImageFormModal({ review_id, business_id }) {

    console.log(review_id)
    console.log(business_id)
    const dispatch = useDispatch();
    const [review, setReview] = useState(null)
    const [business, setBusiness] = useState(null)
    const [imageURL, setImageURL] = useState("");
    const [imagePreview, setImagePreview] = useState(null);
    const [caption, setCaption] = useState("");
    const { closeModal } = useModal()
    const [urlError, setUrlError] = useState(null)


    useEffect(() => {

        const infoRestore = async () => {
            let response
            if (review_id) {
                response = await dispatch(getSingleReviewThunk(review_id))
                setReview(response)
            }
            if (business_id) {
                response = await dispatch(getSingleBusinessThunk(business_id))
                setBusiness(response)
            }
        }
        infoRestore()

    }, [dispatch])

    const handleImageURLChange = (e) => {
        const url = e.target.value;
        setImageURL(url);
        setImagePreview(url);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setUrlError(null)

        const newImage = {
            url: imageURL,
            caption: caption
        };

        let errors
        if (review) {
            errors = await dispatch(postReviewImageThunk(newImage, review.id, review.business_id))
        }

        if (business) {
            errors = await dispatch(postBusinessImageThunk(newImage, business.id))
        }

        console.log(errors)
        if (!errors) {
            closeModal()
        }
        else {
            if (errors.errors.includes("url : This field is required.")) {
                setUrlError("Image URL is required")
            }
            else if (errors.errors.includes("url : Invalid URL.")) {
                setUrlError("Image URL is invalid")
            }
            else if (errors.errors.includes('url : URL does not end in a valid extension')) {
                setUrlError("Image URL must end in '.jpeg', '.jpg', or '.png',")
            }
            else {
                setUrlError(errors.errors[0])
            }
        }

    };

    if (!business && !review) {
        return null
    }

    if (business) {
        return (
            <>
                <div className="create-image-form-container">
                    <form onSubmit={onSubmit} className="create-image-form">
                        <h2 className="create-image-form-title">Add an image for {business.name}</h2>
                        <br></br>
                        <input
                            type="text"
                            placeholder="Image URL"
                            value={imageURL}
                            onChange={handleImageURLChange}
                            className="business-form-input"
                        />
                        {urlError ? (
                            urlError === "Image URL must end in '.jpeg', '.jpg', or '.png'," ? (
                                <>
                                    <div className="create-image-form-error">
                                        {urlError}
                                    </div>
                                    <br></br>
                                </>
                            ) : (
                                <>
                                    <div className="create-image-form-error">
                                        {urlError}
                                    </div>
                                </>
                            )
                        ) : (
                            <></>
                        )}
                        {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" style={{
                            width: "320px",
                            height: "180px",
                            objectFit: "cover",
                        }} />}
                        <br></br>
                        <input
                            type="text"
                            placeholder="Caption (Optional)"
                            value={caption}
                            onChange={(e) => { setCaption(e.target.value) }}
                            className="business-form-input"
                        />
                        <br></br>
                        <button type="submit" className="review-card-add-photo-button">
                            <i className="fa-solid fa-plus"></i>
                            &nbsp;
                            <div><span> Add </span></div>
                        </button>
                    </form>
                </div>

            </>
        );
    }

    if (review) {
        return (
            <>
                <div className="create-image-form-container">
                    <form onSubmit={onSubmit} className="create-image-form">
                        <h2 className="create-image-form-title" style={{ "textAlign": "center", "width": "400px" }}>Add an image for your review at {review.business_name}</h2>
                        <br></br>
                        <input
                            type="text"
                            placeholder="Image URL"
                            value={imageURL}
                            onChange={handleImageURLChange}
                            className="business-form-input"
                        />
                        {urlError ? (
                            urlError === "Image URL must end in '.jpeg', '.jpg', or '.png'," ? (
                                <>
                                    <div className="create-image-form-error">
                                        {urlError}
                                    </div>
                                    <br></br>
                                </>
                            ) : (
                                <>
                                    <div className="create-image-form-error">
                                        {urlError}
                                    </div>
                                </>
                            )
                        ) : (
                            <></>
                        )}
                        {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" style={{
                            width: "320px",
                            height: "180px",
                            objectFit: "cover",
                        }} />}
                        <br></br>
                        <input
                            type="text"
                            placeholder="Caption (Optional)"
                            value={caption}
                            onChange={(e) => { setCaption(e.target.value) }}
                            className="business-form-input"
                        />
                        <br></br>
                        <button type="submit" className="review-card-add-photo-button">
                            <i className="fa-solid fa-plus"></i>
                            &nbsp;
                            <div><span> Add </span></div>
                        </button>
                    </form>
                </div>

            </>
        );
    };






}

export default CreateImageFormModal;
