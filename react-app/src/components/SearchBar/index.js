import { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="search-container">
      <form className="search-container-form">
        <input
          className="search-container-input"
          type="text"
          placeholder="American, dinner, price"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        <button type="submit">&#x1F50D;</button>
      </form>
    </div>
  );
};

export default SearchBar;
