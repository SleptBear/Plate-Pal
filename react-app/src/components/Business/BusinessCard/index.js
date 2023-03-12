import { Link } from "react-router-dom";
// import css

const BusinessCard = ({ business }) => {
  return (
    <>
      {/* business name */}
      <Link to={`/businesses/${business.id}`}>
        <span>{business.name}</span>
      </Link>
      {/* new business open */}
      <span>New Business Open</span>
      <img src={business.images[0].url}></img>
      {/* city, state */}
      <span>{`${business.city}, ${business.state}`}</span>
      {/* category */}
      <span>{business.category}</span>
    </>
  );
};

export default BusinessCard;
