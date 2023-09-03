import React, { useEffect, useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Stock from "./pages/Stock/Stock";
import Crypto from "./pages/Crypto/Crypto";
// import stockData from "./mockData";
// import cryptoData from "./mockCryptoData";

const App = () => {
  const apiKey = process.env.REACT_APP_STOCK_MARKET_API_KEY;

  const [stockData, setStockData] = useState({});
  const [companySymbolData, setCompanySymbolData] = useState("IBM");

  const [cryptoData, setCryptoData] = useState({});
  const [CryptoSymbol, setCryptoSymbol] = useState("BTC");

  const getStockData = async (symbolResult) => {
    try {
      let pageUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=`;
      let url = pageUrl + `${symbolResult}&apikey=${apiKey}`;
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Sorry something went wrong!");
      }

      const data = await res.json();

      setStockData(data);
    } catch (e) {
      alert(e.message);
    }
  };

  const getCryptoData = async (symbolResult) => {
    try {
      let pageUrl = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_WEEKLY&symbol=`;
      let url = pageUrl + `${symbolResult}&market=CNY&apikey=${apiKey}`;

      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Sorry something went wrong!");
      }

      const data = await res.json();

      setCryptoData(data);
    } catch (e) {
      alert(e.message);
    }
  };

  useEffect(() => {
    getStockData(companySymbolData);
    getCryptoData(CryptoSymbol);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/stock"
            element={
              <Stock
                stockData={stockData}
                setCompanySymbol={setCompanySymbolData}
              />
            }
          />
          <Route
            path="/crypto"
            element={
              <Crypto
                cryptoData={cryptoData}
                setCryptoSymbol={setCryptoSymbol}
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
