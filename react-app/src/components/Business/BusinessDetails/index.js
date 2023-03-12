import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { getSingleBusinessThunk } from "../../../store/businesses"
import { getBusinessReviewsThunk } from "../../../store/reviews"
// import css

const BusinessDetail = () => {
    const dispatch = useDispatch()
    const { businessId } = useParams()
    const business = useSelector(state => state.businesses.singleBusiness)
    const reviews = useSelector(state => state.reviews.businessReviews)
    // const reviews = useSelector(state => state.reviews.businessReviews)

    useEffect(() => {
        const businessRestore = async () => {
            await dispatch(getSingleBusinessThunk(businessId))
            await dispatch(getBusinessReviewsThunk(businessId))
        }
        businessRestore()
    }, [dispatch, businessId])

    console.log('??????????????????/', business)
    console.log('??????????????????/', reviews)
    if (!business) {
        return null
    }
    return (
        <>
            {/* business name */}
            <span>{business.name}</span>
            {/* new business open */}
            <span>New Business Open</span>
            <img src={business.images[0].url}></img>
            {/* city, state */}
            <span>{`${business.city}, ${business.state}`}</span>
        </>
    );
}

export default BusinessDetail
