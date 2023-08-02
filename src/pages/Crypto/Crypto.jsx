import React from "react";
import "./Crypto.scss";
import TopNav from "../../components/TopNav/TopNav";
import SearchBar from "../../components/SearchBar/SearchBar";
import StocksBar from "../../components/StocksBar/StocksBar";
import Main from "../../components/Main/Main";

const Crypto = () => {
  return (
    <div className="crypto-page">
      <div className="crypto-page__topNav">
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

export default Crypto;
