import React from "react";
import "./StocksBar.scss";
import StockItem from "../StockItem/StockItem";

const StocksBar = ({
  // open,
  companySymbol,
  // companySymbolData,
  // setCompanySymbol,
  // amznData,
  // shopData,
}) => {
  // const apiKey = process.env.REACT_APP_STOCK_MARKET_API_KEY;

  // let url =
  //   "https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=";

  // switch (company) {
  //   case "amzn":
  //     url += `amzn&apikey=${apiKey}`;
  //     break;
  //   case "aapl":
  //     url += `aapl&apikey=${apiKey}`;
  //     break;
  //   case "googl":
  //     url += `googl&apikey=${apiKey}`;
  //     break;
  //   case "shop":
  //     url += `shop&apikey=${apiKey}`;
  //     break;
  //   default:
  //     url += `ibm&apikey=${apiKey}`;
  //     break;
  // }

  // const getStockData = async (symbolResult) => {
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

  // const amznOpen = (amznData) => {
  //   const formattedData = [];
  //   Object.values(amznData["Weekly Adjusted Time Series"]).map((value) =>
  //     formattedData.push(value["1. open"])
  //   );
  //   return formattedData[0];
  // };
  // const amznOpenPrice = amznOpen(amznData)

  // const shopOpen = (shopData) => {
  //   const formattedData = [];
  //   Object.values(shopData["Weekly Adjusted Time Series"]).map((value) =>
  //     formattedData.push(value["1. open"])
  //   );
  //   return formattedData[0];
  // };
  // const shopOpenPrice = shopOpen(shopData)

  return (
    <>
      <div className="stocks-bar">
        <StockItem
          element="1"
          // symbol="IBM"
          // open={open}
          companySymbol={companySymbol}
          company="amzn"
        />
        <StockItem
          element="2"
          // symbol="GOOGL"
          // open={open}
          companySymbol={companySymbol}
          company="aapl"
        />
        <StockItem
          element="3"
          // symbol="AMZN"
          // open={open}
          companySymbol={companySymbol}
          company ="googl"
        />
        <StockItem
          element="4"
          // symbol="META"
          // open={open}
          companySymbol={companySymbol}
          company="shop"
        />
        <StockItem
          element="5"
          // symbol="SHOP"
          // open={open}
          companySymbol={companySymbol}
        />
        {/* <StockItem
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
        /> */}
      </div>
    </>
  );
};

export default StocksBar;
