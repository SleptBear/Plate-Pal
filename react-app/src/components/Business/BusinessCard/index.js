import { Link } from "react-router-dom";
import "./BusinessCard.css";

const BusinessCard = ({ business }) => {
  return (
    <div className="business-card">
      {/* business name */}
      <Link to={`/businesses/${business.id}`}>
        <h2>{business.name}</h2>
      </Link>
      <Link to={`/businesses/${business.id}/edit`}>
        <button>Edit Business</button>
      </Link>
      <Link to={`/businesses/${business.id}/delete`}>
        <button>Delete Business</button>
      </Link>
      <img src={business.images[0]?.url} alt={business.name} />
      {/* city, state */}
      <p>{`${business.city}, ${business.state}`}</p>
      {/* category */}
      <p>{business.category}</p>
    </div>
  );
};

export default BusinessCard;
