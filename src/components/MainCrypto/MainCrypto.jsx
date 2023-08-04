import React from "react";
import "./MainCrypto.scss";
import CryptoDetails from "../CryptoDetails/CryptoDetails";
import CryptoGraph from "../CryptoGraph/CryptoGraph";

const MainCrypto = ({
  seriesCryptoDataForGraph,
  companySymbol,
  todayDate,
  open,
  high,
  low,
  close,
  volume,
}) => {
  return (
    <div className="mainCrypto">
      <div className="mainCrypto__container">
        <CryptoGraph
          companySymbol={companySymbol}
          seriesCryptoDataForGraph={seriesCryptoDataForGraph}
        />
        <CryptoDetails
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

export default MainCrypto;
