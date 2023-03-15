import { Link } from "react-router-dom";
import "./BusinessCard.css";
import { useHistory } from "react-router-dom";



const BusinessCard = ({ item }) => {
  const history = useHistory()


  return (
    <div className="business-card-container nft">
      <br></br>
      <span className="description">New Business Open 🔔</span>
      <div className="main">
        <Link to={`/businesses/${item.id}`}>
          <img
            className="tokenImage business-card-image"
            src={item.images[0]?.url}
            alt={item.name}
          />
          <h2>{item.name}</h2>
        </Link>
        <span className="location">{`${item.city}, ${item.state}`}</span>
        <Link to={`/businesses/search/${item.category}`}>
          <h3>{item.category}</h3>
        </Link>
      </div>
    </div>
  );
};

export default BusinessCard;
