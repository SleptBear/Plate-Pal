import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getImagesThunk } from "../../../store/images";
import ImageCard from "../ImageCard";

import "./ManageImagesIndex.css";

const ManageImagesIndex = () => {
    const dispatch = useDispatch();
    let images = useSelector((state) => state.images.images);
    const user = useSelector((state) => state.session.user);

    useEffect(() => {
        const imageRestore = async () => {
            await dispatch(getImagesThunk());
        };
        imageRestore();
    }, [dispatch]);

    if (!images) return null;

    images = Object.values(images)

    images?.sort(
        (a, b) => Date.parse(b.updated_at) - Date.parse(a.updated_at)
    );

    let index = 0

    return (
        <>
            <div className="manage-images-index-container">
                {
                images.map((image) => {
                    index++
                    return (
                        <ImageCard
                            image={image}
                            key={image.id}
                            index={index}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default ManageImagesIndex;
