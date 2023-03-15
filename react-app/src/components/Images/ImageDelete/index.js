// frontend/src/components/deleteFormModal/index.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory} from 'react-router-dom';
import "./ImageDelete.css";
import { deleteImageThunk } from "../../../store/images";
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { getSingleImageThunk } from "../../../store/images";

function ImageDelete() {
  const dispatch = useDispatch();
  const { imageId } = useParams()
  const history = useHistory();
  const user = useSelector(state => state.session.user)
  const [storeImage, setStoreImage] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await dispatch(deleteImageThunk(imageId))
    history.goBack()
  };



  useEffect(() => {

    const imageRestore = async () => {
        const confirmStoreImage = await dispatch(getSingleImageThunk(imageId))
        if(confirmStoreImage.owner_id !== user.id){
            history.goBack()
        }
        else{
            setStoreImage(confirmStoreImage)
        }
    }
    imageRestore()

}, [dispatch])


  if(!storeImage){
    return null
  }
  return (
    <>
      <div className="delete-form-container">
        <form className={"delete-form"} onSubmit={handleSubmit}>
          <h2 className="delete-form-title">Confirm Delete</h2>
          <span>
            Are you sure you want to remove this image from the listings?
          </span>
          <button type="submit" onClick={handleSubmit} className={"enabled"}>Yes (Delete Image)</button>
          {/* <button type="submit" onClick={} className={"accent"}>No (Keep Review)</button> */}
        </form>
      </div>
    </>
  );
}

export default ImageDelete;
