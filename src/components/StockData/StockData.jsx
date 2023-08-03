import React from "react";
import "./StockData.scss";

const StockData = ({ topic, value }) => {
  return (
    <div className="stockData">
      <p className="stockData__text">{topic}</p>
      <h3 className="stockData__number">{value}</h3>
    </div>
  );
};

export default StockData;
