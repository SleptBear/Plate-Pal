import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentBusinessesThunk } from "../../../store/businesses";
import BusinessCard from "../BusinessCard";

import "./ManageBusinessesIndex.css";

const ManageBusinessesIndex = () => {
    const dispatch = useDispatch();
    let businesses = useSelector((state) => state.businesses.businesses);
    const user = useSelector((state) => state.session.user);

    useEffect(() => {
        const businessRestore = async () => {
            await dispatch(getCurrentBusinessesThunk());
        };
        businessRestore();
    }, [dispatch]);

    if (!businesses) return null;

    businesses = Object.values(businesses)

    businesses?.sort(
        (a, b) => Date.parse(b.updated_at) - Date.parse(a.updated_at)
    );

    return (
        <>
            <div className="manage-businesses-container">
                {businesses.map((business) => {
                    return (
                        <BusinessCard
                            business={business}
                            key={business.id}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default ManageBusinessesIndex;
