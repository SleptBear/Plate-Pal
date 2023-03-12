import { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [search, setSearch] = useState("");

  return (
    <form>
      <input
        type="text"
        placeholder="American, dinner, price"
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </form>
  );
};

export default SearchBar;
