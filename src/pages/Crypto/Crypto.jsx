import React from "react";
import "./Crypto.scss";
import TopNav from "../../components/TopNav/TopNav";
import SearchBar from "../../components/SearchBar/SearchBar";
import CryptoBar from "../../components/CryptoBar/CryptoBar";
import MainCrypto from "../../components/MainCrypto/MainCrypto";

const Crypto = () => {
  return (
    <div className="crypto-page">
      <div className="crypto-page__topNav">
        <TopNav page="blue" textColor="white" textColor2="white" />
        <SearchBar />
      </div>
      <div className="crypto-page__bar">
        <CryptoBar />
      </div>
      <div>
        <MainCrypto />
      </div>
    </div>
  );
};

export default Crypto;
