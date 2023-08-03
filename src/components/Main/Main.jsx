import React from "react";
import "./Main.scss";
import StockDetails from "../StockDetails/StockDetails";
import StockGraph from "../StockGraph/StockGraph";

const Main = ({
  seriesStockDataForGraph,
  companySymbol,
  todayDate,
  open,
  high,
  low,
  close,
  volume,
}) => {

  return (
    <div className="main">
      <div className="main__container">
        <StockGraph companySymbol={companySymbol} seriesStockDataForGraph={seriesStockDataForGraph} />
        <StockDetails
          date={todayDate}
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

export default Main;
