import React from "react";
import "./CryptoBar.scss";
import StockItem from "../StockItem/StockItem";

const CryptoBar = () => {
  return (
    <>
      <div className="crypto-bar">
        <StockItem element="1" symbol="IBM" />
        <StockItem element="2" symbol="IBM" />
        <StockItem element="3" symbol="IBM" />
        <StockItem element="4" symbol="IBM" />
        <StockItem element="5" symbol="IBM" />
        <StockItem element="6" symbol="IBM" />
        <StockItem element="7" symbol="IBM" />
        <StockItem element="8" symbol="IBM" />
        <StockItem element="1" symbol="IBM" />
      </div>
    </>
  );
};

export default CryptoBar;
