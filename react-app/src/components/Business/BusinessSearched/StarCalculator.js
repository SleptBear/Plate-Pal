// handle stars display
import "./StarCalculator.css"
const StarCalculator = (rating) => {
  if (
    (Math.round(rating * 2) / 2).toFixed(1) === "1.0" ||
    rating === null
  ) {
    return (
      <span>
      <span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x yellow"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x gray"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x gray"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x gray"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x gray"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
      </span>
      </span>
    );
  }
  if ((Math.round(rating * 2) / 2).toFixed(1) === "1.5") {
    return (
      <span>
      <span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x yellow"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x yellow-gray"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x gray"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x gray"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x gray"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
      </span>
      </span>
    );
  }
  if ((Math.round(rating * 2) / 2).toFixed(1) === "2.0") {
    return (
      <span>
      <span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x gold"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x gold"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x gold"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x gray"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x gray"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
      </span>
      </span>
    );
  }
  if ((Math.round(rating * 2) / 2).toFixed(1) === "2.5") {
    return (
      <span>
      <span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x gold"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x gold"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x gold-gray"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x gray"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x gray"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
      </span>
      </span>
    );
  }
  if ((Math.round(rating * 2) / 2).toFixed(1) === "3.0") {
    return (
      <span>
      <span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x orange"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x orange"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x orange"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x gray"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x gray"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
      </span>
      </span>
    );
  }
  if ((Math.round(rating * 2) / 2).toFixed(1) === "3.5") {
    return (
      <span>
      <span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x orange"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x orange"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x orange"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x orange-gray"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x gray"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
      </span>
      </span>
    );
  }
  if ((Math.round(rating * 2) / 2).toFixed(1) === "4.0") {
    return (
      <span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x amber"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x amber"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x amber"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x amber"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x gray"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
      </span>
    );
  }
  if ((Math.round(rating * 2) / 2).toFixed(1) === "4.5") {
    return (
      <span>
      <span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x amber"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse "></i>
        </span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x amber"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x amber"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x amber"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x amber-gray"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
      </span>
      </span>
    );
  }
  if ((Math.round(rating * 2) / 2).toFixed(1) === "5.0") {
    return (
      <span>
        <div></div>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x red"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x red"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x red"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x red"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
        <span class="fa-stack">
          <i class="fas fa-square fa-stack-2x red"></i>
          <i class="fas fa-star fa-stack-1x fa-inverse"></i>
        </span>
      </span>
    );
  }
};

export default StarCalculator;
