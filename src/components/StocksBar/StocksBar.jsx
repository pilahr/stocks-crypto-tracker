import React from "react";
import "./StocksBar.scss";
import StockItem from "../StockItem/StockItem";

const StocksBar = ({ open, companySymbol }) => {
  return (
    <>
      <div className="stocks-bar">
        <StockItem
          element="1"
          // symbol="IBM"
          open={open}
          companySymbol={companySymbol}
        />
        <StockItem
          element="2"
          // symbol="GOOGL"
          open={open}
          companySymbol={companySymbol}
        />
        <StockItem
          element="3"
          // symbol="AMZN"
          open={open}
          companySymbol={companySymbol}
        />
        <StockItem
          element="4"
          // symbol="META"
          open={open}
          companySymbol={companySymbol}
        />
        <StockItem
          element="5"
          // symbol="SHOP"
          open={open}
          companySymbol={companySymbol}
        />
        <StockItem
          element="6"
          // symbol="TSCO"
          open={open}
          companySymbol={companySymbol}
        />
        <StockItem
          element="7"
          // symbol="DAI"
          open={open}
          companySymbol={companySymbol}
        />
        <StockItem
          element="8"
          // symbol="AAPL"
          open={open}
          companySymbol={companySymbol}
        />
        <StockItem
          element="1"
          // symbol="MSFT"
          open={open}
          companySymbol={companySymbol}
        />
      </div>
    </>
  );
};

export default StocksBar;
