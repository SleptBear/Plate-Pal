import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getImagesThunk, getImagesAction } from "../../../store/images";
import ColoredLine from "../../ColoredLine";
import { useParams } from "react-router-dom";
import { getSingleBusinessThunk } from "../../../store/businesses";
import ImageCard from "../../Images/ImageCard";
import "./BusinessImagesIndex.css";

const BusinessImagesIndex = () => {
    const { businessId } = useParams()
    const dispatch = useDispatch();
    let images = useSelector((state) => state.images.images);
    const user = useSelector((state) => state.session.user);
    const business = useSelector((state) => state.businesses.singleBusiness)
    // console.log('BUSINESS', business)

    useEffect(() => {
        const imageRestore = async () => {
            const business = await dispatch(getSingleBusinessThunk(businessId))
            console.log('BUSINESS', business)
            if(business){
                let images = {}
                for (let i = 0; i < business.images.length; i++){
                    images[business.images[i].id] = business.images[i]
                }
                await dispatch(getImagesAction({"images": images}));
            }
        };
        imageRestore();
    }, [dispatch]);

    if (!images || !business) return null;

    images = Object.values(images)

    images?.sort(
        (a, b) => Date.parse(b.updated_at) - Date.parse(a.updated_at)
    );

    let index = 0


    return (
        <>

            <div className="business-images-index-container">
                <br></br>
                <h2 className="business-images-index-title">{`Images for ${business.name}`}</h2>
                <br></br>
                <ColoredLine />
                <br></br>
                <div className="business-images-index-grid">
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
            </div>
        </>
    );
};

export default BusinessImagesIndex;
