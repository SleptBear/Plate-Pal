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
        <>
            {/*
      <Link to={`/images/${image.id}/delete`}>
        <button>Delete Image</button>
      </Link> */}
            <img src={image.url}/>
        </>

    );
}

export default ImageModal;
