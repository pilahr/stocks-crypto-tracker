import React from "react";
import "./MainCrypto.scss";
import CryptoDetails from "../CryptoDetails/CryptoDetails";
import CryptoGraph from "../CryptoGraph/CryptoGraph";

const MainCrypto = () => {
  return (
    <div className="mainCrypto">
      <div className="mainCrypto__container">
        <CryptoGraph />
        <CryptoDetails date="27 Jan 2023" />
      </div>
    </div>
  );
};

export default MainCrypto;
