import { Link } from "react-router-dom";
import "./BusinessCard.css";

const BusinessCard = ({ item }) => {
  return (
    <div className="business-card-container">
      <Link to={`/businesses/${item.id}`}>
        <span>{item.name}</span>
      </Link>
      <span>New Business Open</span>
      <img className="business-card-image" src={item.images[0]?.url}></img>
      <span>{`${item.city}, ${item.state}`}</span>
      <span>{item.category}</span>
    </div>
  );
};

export default BusinessCard;
