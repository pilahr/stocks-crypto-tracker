import React from "react";
import "./StocksBar.scss";
import StockItem from "../StockItem/StockItem";

const StocksBar = ({stockData}) => {

  return (
    <div className="stocks-bar">
      <StockItem />
      <StockItem />
      <StockItem />
      <StockItem />
      <StockItem />
      <StockItem />
      <StockItem />
      <StockItem />
      <StockItem />
      <StockItem />
      <StockItem />
      <StockItem />
      <StockItem />
    </div>
  );
};

export default StocksBar;
