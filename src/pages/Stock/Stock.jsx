import React, { useMemo } from "react";
import "./Stock.scss";
import TopNav from "../../components/TopNav/TopNav";
import SearchBar from "../../components/SearchBar/SearchBar";
import StocksBar from "../../components/StocksBar/StocksBar";
import Main from "../../components/Main/Main";

const Stock = ({ stockData }) => {
  console.log(stockData);
  const companySymbol = stockData["Meta Data"]["2. Symbol"];

  const formattedStockData = (stockData) => {
    const formattedData = [];
    if (stockData["Weekly Adjusted Time Series"]) {
      Object.entries(stockData["Weekly Adjusted Time Series"]).map(
        ([key, value]) => {
          formattedData.push({
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

  const todayDate = seriesStockData[0]["x"];

  const todayOpen = seriesStockData[0]["y"][0];
  const open = parseFloat(todayOpen).toFixed(2);

  const todayHigh = seriesStockData[0]["y"][1].split(".")[0];
  const high = parseFloat(todayHigh).toFixed(2);

  const todayLow = seriesStockData[0]["y"][2].split(".")[0];
  const low = parseFloat(todayLow).toFixed(2);

  const todayClose = seriesStockData[0]["y"][3].split(".")[0];
  const close = parseFloat(todayClose).toFixed(2);

  const todayVolume = seriesStockData[0]["y"][4];

  const volumeWithCommas = (todayVolume) => {
    return todayVolume.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const volume = volumeWithCommas(todayVolume);

  const formattedStockDataForGraph = (stockData) => {
    const formattedData = [];
    if (stockData["Weekly Adjusted Time Series"]) {
      Object.entries(stockData["Weekly Adjusted Time Series"]).map(
        ([key, value]) => {
          formattedData.push({
            x: new Date(key).getTime(),
            y: [
              value["1. open"],
              value["2. high"],
              value["3. low"],
              value["4. close"],
              // value["5. volume"],
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
        <SearchBar />
      </div>

      <div>
        <StocksBar open={open} companySymbol={companySymbol} />
      </div>

      <div>
        <Main
          seriesStockDataForGraph={seriesStockDataForGraph}
          companySymbol={companySymbol}
          todayDate={todayDate}
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
