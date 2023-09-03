import React from "react";
import "./StockItem.scss";

const StockItem = ({ element, companySymbol, open }) => {
  let itemColor = "stockItem";

  switch (element) {
    case "1":
      itemColor += " purple";
      break;
    case "2":
      itemColor += " light-blue";
      break;
    case "3":
      itemColor += " green";
      break;
    case "4":
      itemColor += " yellow";
      break;
    case "5":
      itemColor += " pink";
      break;
    case "6":
      itemColor += " red";
      break;
    case "7":
      itemColor += " bright-green";
      break;
    case "8":
      itemColor += " dark-purple";
      break;
    default:
      itemColor += "";
  }

  return (
    <div className={itemColor}>
      <div className="stockItem__wrap">
        <h3 className="stockItem__wrap--h3">{companySymbol}</h3>
        <h6 className="stockItem__wrap--h6">{open}</h6>
      </div>
    </div>
  );
};

export default StockItem;
