import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserReviewsThunk } from "../../../store/reviews";
import ReviewCard from "../ReviewCard";

import "./ManageReviewsIndex.css";

const ManageReviewsIndex = () => {
    const dispatch = useDispatch();
    let reviews = useSelector((state) => state.reviews.userReviews);
    const user = useSelector((state) => state.session.user);

    useEffect(() => {
        const businessRestore = async () => {
            await dispatch(getUserReviewsThunk());
        };
        businessRestore();
    }, [dispatch]);

    if (!reviews) return null;

    reviews = Object.values(reviews)

    reviews?.sort(
        (a, b) => Date.parse(b.updated_at) - Date.parse(a.updated_at)
    );



    return (
        <>
            <div>
                {reviews.map((review) => {
                    return (
                        <ReviewCard
                            review={review}
                            key={review.id}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default ManageReviewsIndex;
