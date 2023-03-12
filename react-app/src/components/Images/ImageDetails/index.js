import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { getSingleImageThunk } from "../../../store/images"

// import css

const ImageDetail = () => {
    const dispatch = useDispatch()
    const { imageId } = useParams()
    const image = useSelector(state => state.images.singleImage)

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
            {/* image url */}
            <span>{image.url}</span>
        </>
    );
}

export default ImageDetail
