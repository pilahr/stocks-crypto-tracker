import React from "react";
import "./Stock.scss";
import TopNav from "../../components/TopNav/TopNav";
import SearchBar from "../../components/SearchBar/SearchBar";

const Stock = () => {
  return (
    <div className="stock-page">
      <div className="stock-page__topNav">
        <TopNav />
        <SearchBar />
      </div>
    </div>
  );
};

export default Stock;
