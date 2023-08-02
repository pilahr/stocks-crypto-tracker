import React from "react";
import "./Stock.scss";
import TopNav from "../../components/TopNav/TopNav";
import SearchBar from "../../components/SearchBar/SearchBar";
import StocksBar from "../../components/StocksBar/StocksBar";
import Main from "../../components/Main/Main";

const Stock = () => {
  return (
    <div className="stock-page">
      <div className="stock-page__topNav">
        <TopNav page="others" textColor="black" textColor2="black" />
        <SearchBar />
      </div>

      <div>
        <StocksBar />
      </div>

      <div>
        <Main />
      </div>
    </div>
  );
};

export default Stock;
