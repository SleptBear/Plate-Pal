import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { postImageThunk } from "../../../store/images";

import "./ImageCreate.css";

const ImageCreate = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const { businessId } = useParams()
    const [url, setUrl] = useState("");
    const[caption, setCaption] = useState("");
    // likely need to separate hours of ops M-Sun + inputs for hours
    // then format input data as string for hours of operations

    // price hover

    const onSubmit = async (e) => {
        e.preventDefault();
        const newImage = {
            url,
            caption,
        };

        let createdImage = await dispatch(postImageThunk(newImage, businessId));

        if (createdImage) {
            history.push(`/images/${createdImage.id}`);
        }
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <ul>{/* map errors */}</ul>
                <input
                    type="text"
                    placeholder="caption"
                    value={caption}
                    onChange={(e) => setCaption(e.target.value)}
                ></input>
                <input
                    type="text"
                    placeholder="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                ></input>
                <button>Add Image</button>
            </form>
        </div>
    );
};

export default ImageCreate;
