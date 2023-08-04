import React from "react";
import "./CryptoDetails.scss";
import StockData from "../StockData/StockData";

const CryptoDetails = ({ date, open, high, low, close, volume }) => {
  return (
    <div className="cryptoDetails">
      <div className="cryptoDetails__header">
        <h3 className="cryptoDetails__header--text">{date}</h3>
      </div>
      <div>
        <StockData topic="Open" value={open} />
        <StockData topic="High" value={high} />
        <StockData topic="Low" value={low} />
        <StockData topic="Close" value={close} />
        <StockData topic="Volume" value={volume} />
      </div>
    </div>
  );
};

export default CryptoDetails;
