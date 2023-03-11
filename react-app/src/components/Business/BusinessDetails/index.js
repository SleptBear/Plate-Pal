import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

// import getSingleBusinessThunk, getBusinessReviewsThunk
// import css

const BusinessDetail = () => {
    const dispatch = useDispatch()
    const { businessId } = useParams()
    const business = useSelector(state => state.businesses.singleBusiness)
    const reviews = useSelector(state => state.reviews.businessReviews)

    useEffect(() => {
        const businessRestore = async ()
    })
    return null
}

export default BusinessDetail
