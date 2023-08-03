import React from "react";
import "./CryptoDetails.scss";
import StockData from "../StockData/StockData";

const CryptoDetails = ({ date }) => {
  return (
    <div className="cryptoDetails">
      <div className="cryptoDetails__header">
        <h3 className="cryptoDetails__header--text">{date}</h3>
      </div>
      <div>
        <StockData topic="Open" value="800" />
        <StockData topic="High" value="" />
        <StockData topic="Low" value="" />
        <StockData topic="Close" value="" />
        <StockData topic="Volume" value="" />
      </div>
    </div>
  );
};

export default CryptoDetails;
