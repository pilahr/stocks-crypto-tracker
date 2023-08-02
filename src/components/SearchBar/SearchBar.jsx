import React from "react";
import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <div className="searchBar">
      <input
        className="searchBar__input"
        placeholder="Search for companies"
      ></input>
    </div>
  );
};

export default SearchBar;
