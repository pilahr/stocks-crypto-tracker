import React from "react";
import "./SearchBar.scss";

const SearchBar = ({ handleSymbolInputChange, searchTerm }) => {

  console.log("SearchTerm from searchBar: "+ searchTerm);
  return (
    <div className="searchBar">
      <input
        className="searchBar__input"
        placeholder="Search for companies"
        type="text"
        onChange={handleSymbolInputChange}
        value={searchTerm}
      ></input>
    </div>
  );
};

export default SearchBar;
