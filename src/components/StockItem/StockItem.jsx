import React from "react";
import "./StockItem.scss";

const StockItem = () => {
  return (
    <div className="stockItem">
      <div className="stockItem__wrap">
        <h3 className="stockItem__wrap--h3">IBM</h3>
        <h6 className="stockItem__wrap--h6">804.80</h6>
      </div>
    </div>
  );
};

export default StockItem;
