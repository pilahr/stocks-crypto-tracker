import React from "react";
import "./StockItem.scss";

const StockItem = ({
  element,
  companySymbol,
  // company,
  open,
}) => {
  // const apiKey = process.env.REACT_APP_STOCK_MARKET_API_KEY;

  // const [stockData, setStockData] = useState({});

  // const getStockData = async () => {
  //   try {
  //     let url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=`;

  //     switch (company) {
  //       case "amzn":
  //         url += `amzn&apikey=${apiKey}`;
  //         break;
  //       case "aapl":
  //         url += `aapl&apikey=${apiKey}`;
  //         break;
  //       case "googl":
  //         url += `googl&apikey=${apiKey}`;
  //         break;
  //       case "shop":
  //         url += `shop&apikey=${apiKey}`;
  //         break;
  //       default:
  //         url += `ibm&apikey=${apiKey}`;
  //         break;
  //     }
  //     console.log(url);

  //     const res = await fetch(url);
  //     if (!res.ok) {
  //       throw new Error("Sorry something went wrong!");
  //     }

  //     const data = await res.json();

  //     setStockData(data);
  //   } catch (e) {
  //     alert(e.message);
  //   }
  // };

  // useEffect(() => {
  //   getStockData();
  // }, []);

  // const getOpenPrice = (stockData) => {
  //   const formattedData = [];
  //   Object.values(stockData["Weekly Adjusted Time Series"]).map((value) =>
  //     formattedData.push(value["1. open"])
  //   );
  //   return formattedData[0];
  // };
  // const open = getOpenPrice(stockData);

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
