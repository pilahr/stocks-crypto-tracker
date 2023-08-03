import React from "react";
import "./StockDetails.scss";
import StockData from "../StockData/StockData";

const StockDetails = ({ date, open, high, low, close, volume }) => {
  return (
    <div className="stockDetails">
      <div className="stockDetails__header">
        <h3 className="stockDetails__header--text">{date}</h3>
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

export default StockDetails;
