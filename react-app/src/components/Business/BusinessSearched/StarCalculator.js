// handle stars display
const StarCalculator = (rating) => {
  if (
    (Math.round(rating * 2) / 2).toFixed(1) === "1.0" ||
    rating === null
  ) {
    return (
      <span>
        <i className="fas fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
      </span>
    );
  }
  if ((Math.round(rating * 2) / 2).toFixed(1) === "1.5") {
    return (
      <span>
        <i className="fas fa-star"></i>
        <i className="fa-solid fa-star-half-stroke"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
      </span>
    );
  }
  if ((Math.round(rating * 2) / 2).toFixed(1) === "2.0") {
    return (
      <span>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
      </span>
    );
  }
  if ((Math.round(rating * 2) / 2).toFixed(1) === "2.5") {
    return (
      <span>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fa-solid fa-star-half-stroke"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
      </span>
    );
  }
  if ((Math.round(rating * 2) / 2).toFixed(1) === "3.0") {
    return (
      <span>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
      </span>
    );
  }
  if ((Math.round(rating * 2) / 2).toFixed(1) === "3.5") {
    return (
      <span>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fa-solid fa-star-half-stroke"></i>
        <i className="fa-regular fa-star"></i>
      </span>
    );
  }
  if ((Math.round(rating * 2) / 2).toFixed(1) === "4.0") {
    return (
      <span>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fa-regular fa-star"></i>
      </span>
    );
  }
  if ((Math.round(rating * 2) / 2).toFixed(1) === "4.5") {
    return (
      <span>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fa-solid fa-star-half-stroke"></i>
      </span>
    );
  }
  if ((Math.round(rating * 2) / 2).toFixed(1) === "5.0") {
    return (
      <span>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
        <i className="fas fa-star"></i>
      </span>
    );
  }
};

export default StarCalculator;
