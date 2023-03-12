import { Link } from "react-router-dom";
// import css

const ImageCard = ({ image }) => {
  return (
    <>
      {/* image url */}
      <Link to={`/images/${image.id}`}>
        <span>{image.url}</span>
      </Link>
      <Link to={`/images/${image.id}/delete`}>
        <button>Delete Image</button>
      </Link>
    </>
  );
};

export default ImageCard;
