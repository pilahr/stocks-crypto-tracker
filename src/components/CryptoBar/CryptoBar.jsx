import React from "react";
import "./CryptoBar.scss";
import StockItem from "../StockItem/StockItem";

const CryptoBar = ({ open, companySymbol }) => {
  return (
    <>
      <div className="crypto-bar">
        <StockItem
          element="1"
          symbol="IBM"
          open={open}
          companySymbol={companySymbol}
        />
        <StockItem
          element="2"
          symbol="IBM"
          open={open}
          companySymbol={companySymbol}
        />
        <StockItem
          element="3"
          symbol="IBM"
          open={open}
          companySymbol={companySymbol}
        />
        <StockItem
          element="4"
          symbol="IBM"
          open={open}
          companySymbol={companySymbol}
        />
        <StockItem
          element="5"
          symbol="IBM"
          open={open}
          companySymbol={companySymbol}
        />
        <StockItem
          element="6"
          symbol="IBM"
          open={open}
          companySymbol={companySymbol}
        />
        <StockItem
          element="7"
          symbol="IBM"
          open={open}
          companySymbol={companySymbol}
        />
        <StockItem
          element="8"
          symbol="IBM"
          open={open}
          companySymbol={companySymbol}
        />
        <StockItem
          element="1"
          symbol="IBM"
          open={open}
          companySymbol={companySymbol}
        />
      </div>
    </>
  );
};

export default CryptoBar;
