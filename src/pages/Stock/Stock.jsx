import React, { useMemo, useState } from "react";
import "./Stock.scss";
import TopNav from "../../components/TopNav/TopNav";
import SearchBar from "../../components/SearchBar/SearchBar";
import StocksBar from "../../components/StocksBar/StocksBar";
import Main from "../../components/Main/Main";

const Stock = ({
  stockData,
  setCompanySymbol,

}) => {


  // Taking input from SearchBar
  const [searchTerm, setSearchTerm] = useState("");

  const getCompanySymbol = (stockData) => {
    return stockData["Meta Data"]["2. Symbol"];
  };
  const companySymbol = getCompanySymbol(stockData);

  const handleSymbolInputChange = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value.toLowerCase());
    setCompanySymbol(searchTerm);
  };


  // Stock Data
  const formattedStockData = (stockData) => {
    const formattedData = [];
    if (stockData["Weekly Adjusted Time Series"]) {
      Object.entries(stockData["Weekly Adjusted Time Series"]).map(
        ([key, value]) => {
          return formattedData.push({
            x: key,
            y: [
              value["1. open"],
              value["2. high"],
              value["3. low"],
              value["4. close"],
              value["6. volume"],
            ],
          });
        }
      );
    }

    return formattedData;
  };

  const seriesStockData = formattedStockData(stockData);

  const getTodayDate = () => {
    const todayDate = seriesStockData[0]["x"];
    const dateFormat = "";
    const date = Date(todayDate).split(" ")[2];
    const month = Date(todayDate).split(" ")[1];
    const year = Date(todayDate).split(" ")[3];
    return dateFormat.concat(date, " ", month, " ", year);
  };
  const date = getTodayDate();

  const todayOpen = seriesStockData[0]["y"][0];
  const open = parseFloat(todayOpen).toFixed(2);

  const todayHigh = seriesStockData[0]["y"][1].split(".")[0];
  const high = parseFloat(todayHigh).toFixed(2);

  const todayLow = seriesStockData[0]["y"][2].split(".")[0];
  const low = parseFloat(todayLow).toFixed(2);

  const todayClose = seriesStockData[0]["y"][3].split(".")[0];
  const close = parseFloat(todayClose).toFixed(2);

  const volumeWithCommas = () => {
    const todayVolume = seriesStockData[0]["y"][4];
    return todayVolume.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const volume = volumeWithCommas();

  //Stock Data for the Graph
  const formattedStockDataForGraph = (stockData) => {
    const formattedData = [];
    if (stockData["Weekly Adjusted Time Series"]) {
      Object.entries(stockData["Weekly Adjusted Time Series"]).map(
        ([key, value]) => {
          return formattedData.push({
            x: new Date(key).getTime(),
            y: [
              value["1. open"],
              value["2. high"],
              value["3. low"],
              value["4. close"],
            ],
          });
        }
      );
    }
    return formattedData;
  };

  const seriesStockDataForGraph = useMemo(
    () => formattedStockDataForGraph(stockData),
    [stockData]
  );

  return (
    <div className="stock-page">
      <div className="stock-page__topNav">
        <TopNav page="stock" textColor="black" textColor2="black" />
        <SearchBar
          handleSymbolInputChange={handleSymbolInputChange}
          searchTerm={searchTerm}
        />
      </div>

      <div>
        <StocksBar
          open={open}
          companySymbol={companySymbol}
        />
      </div>

      <div>
        <Main
          seriesStockDataForGraph={seriesStockDataForGraph}
          companySymbol={companySymbol}
          todayDate={date}
          open={open}
          high={high}
          low={low}
          close={close}
          volume={volume}
        />
      </div>
    </div>
  );
};

export default Stock;
