import React, { useEffect, useState } from "react";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Stock from "./pages/Stock/Stock";
import Crypto from "./pages/Crypto/Crypto";

const App = () => {
  const apiKey = process.env.REACT_APP_STOCK_MARKET_API_KEY;

  const [stockData, setStockData] = useState({});


  const getStockData = async () => {
    try {
      let url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY`;

      url += `&symbol=IBM&interval=5min&outputsize=full&datatype=json&apikey=${apiKey}`;

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

  useEffect(() => {
    getStockData();
  });

  // console.log(stockData);
  // console.log(stockData["Meta Data"]);


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stock" element={<Stock stockData={stockData} />} />
          <Route path="/crypto" element={<Crypto />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
