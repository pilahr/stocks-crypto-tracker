import React from "react";
import "./StockDetails.scss";
import StockData from "../StockData/StockData";

const StockDetails = () => {
  return (
    <div className="stockDetails">
      <div className="stockDetails__header">
        <h3 className="stockDetails__header--text"> 27 May 2022</h3>
      </div>
      <div>
        <StockData />
        <StockData />
        <StockData />
        <StockData />
        <StockData />
      </div>
    </div>
  );
};

export default StockDetails;
