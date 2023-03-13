import { Link } from "react-router-dom";
import OpenModalImage from "../../OpenModalImage";
import ImageModal from "../ImageModal";
// import css

const ImageCard = ({ image }) => {
  return (
    <>
      <OpenModalImage
        imageUrl={image.url}
        modalComponent={<ImageModal imageId={image.id} />}
      >

      </OpenModalImage>
    </>
  );
};

export default ImageCard;
