import React from "react";
import "./Crypto.scss";
import TopNav from "../../components/TopNav/TopNav";
import SearchBar from "../../components/SearchBar/SearchBar";

const Crypto = () => {
  return (
    <div className="crypto-page">
      <div className="crypto-page__topNav">
        <TopNav />
        <SearchBar />
      </div>
    </div>
  );
};

export default Crypto;
