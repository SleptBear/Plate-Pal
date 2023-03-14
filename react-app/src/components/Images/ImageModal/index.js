import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useModal } from "../../../context/Modal"
import { useSelector } from "react-redux";
import "./ImageModal.css";
import { getSingleImageThunk } from "../../../store/images";
import ColoredLine from "../../ColoredLine";

function ImageModal({ imageId, index }) {
    const dispatch = useDispatch();
    const [modalImageId, setModalImageId] = useState(imageId)
    const image = useSelector(state => state.images.singleImage)
    let images = useSelector(state => state.images.images)
    const [relatedIndex, setRelatedIndex] = useState(index)
    const { closeModal } = useModal();

    useEffect(() => {
        const imageRestore = async () => {
            let storeImage =  await dispatch(getSingleImageThunk(modalImageId))
            let copiedStoreImage = {...storeImage}
            const imagesIds = Object.values(images).map((image)=> {
                return image.id
            })
            const mappedIndex = imagesIds.indexOf(copiedStoreImage.id)
            const imageElements = document.getElementsByClassName("image-modal-information-related-image")
            for (let i = imageElements.length - 1; i >= 0; i--) {
                imageElements[i].setAttribute('class', "image-modal-information-related-image image-modal-information-related-image-inactive")
                if (i === mappedIndex) {
                    imageElements[i].setAttribute('class', "image-modal-information-related-image image-modal-information-related-image-active")
                }
            }
        }
        imageRestore()


    }, [dispatch, modalImageId])

    if (!image || !images) {
        return null
    }

    const handleClick = async (id, mappedIndex) => {
        await dispatch(getSingleImageThunk(id))
        setRelatedIndex(mappedIndex + 1)
    }

    images = Object.values(images)

    let date
    let formattedDate
    let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    options.timeZone = "UTC";
    options.timeZoneName = "short";
    date = new Date(image.created_at)
    formattedDate = new Intl.DateTimeFormat("en-US", options).format(date)

    let mappedIndex = 0
    return (
        <div className="image-modal-container">
            <div className="image-modal-image-container">
                <img className="image-modal-image-singleImage" src={image.url} />
            </div>
            <div className="image-modal-information-container">
                <h2>{`Photos for ${image.business_name}`}</h2>
                <br></br>
                <br></br>
                <p>{relatedIndex} of {images.length}</p>
                <br></br>
                <br></br>
                <ColoredLine />
                <br></br>
                <br></br>
                <p>{image.caption || 'caption'}</p>
                <br></br>
                <br></br>
                <p>{`by ${image.user_first_name} ${image.user_last_name[0]}. on ${formattedDate.split(", ")[1]}, ${formattedDate.split(", ")[2].split(" at")[0]}`}</p>
                <br></br>
                <br></br>
                <div className="image-modal-information-related-images-container">
                    <div className="image-modal-information-related-images-grid">
                        {images.map((relatedImage) => {
                            return <img key={relatedImage.id} className={"image-modal-information-related-image image-modal-information-related-image-inactive"} src={relatedImage.url} onClick={() => { handleClick(relatedImage.id, images.indexOf(relatedImage)) }} />;
                        })}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ImageModal;
