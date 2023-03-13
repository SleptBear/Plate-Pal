import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SearchBar.css";

const SearchBar = () => {
  const history = useHistory();
  const [searchString, setSearchString] = useState("");

  const onSubmit = () => {
    history.push(`/businesses/search/${searchString}`);
  };

  return (
    <div className="search-container">
      <form className="search-container-form" onSubmit={onSubmit}>
        <input
          className="search-container-input"
          type="text"
          placeholder="American, dinner, price"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        ></input>
        <button type="submit">&#x1F50D;</button>
      </form>
    </div>
  );
};

export default SearchBar;
