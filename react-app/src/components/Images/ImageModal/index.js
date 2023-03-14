import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal"
import { useSelector } from "react-redux";
import "./ImageModal.css";
import { getSingleImageThunk } from "../../../store/images";

function ImageModal({ imageId }) {
    console.log(imageId)
    const dispatch = useDispatch();
    const image = useSelector(state => state.images.singleImage)

    const { closeModal } = useModal();

    useEffect(() => {
        const imageRestore = async () => {
            await dispatch(getSingleImageThunk(imageId))
        }
        imageRestore()
    }, [dispatch, imageId])

    if (!image) {
        return null
    }

    return (
        <div className="image-modal-container">
            <div className="image-modal-image-container">
                <img className="image-modal-image-singleImage" src={image.url} />
            </div>
            <div className="image-modal-information-container">
        
            </div>
        </div>

    );
}

export default ImageModal;
