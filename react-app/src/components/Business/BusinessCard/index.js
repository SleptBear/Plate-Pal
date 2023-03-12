import { Link } from "react-router-dom";
// import css

const BusinessCard = ({ item }) => {
  return (
    <>
      {/* business name */}
      <Link to={`/businesses/${item.id}`}>
        <span>{item.name}</span>
      </Link>
      {/* new business open */}
      <span>New Business Open</span>
      <img src={item.images[0].url}></img>
      {/* city, state */}
      <span>{`${item.city}, ${item.state}`}</span>
      {/* category */}
      <span>{item.category}</span>
    </>
  );
};

export default BusinessCard;
