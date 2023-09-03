import React, { useState, useEffect } from "react";
import "./StocksBar.scss";
import StockItem from "../StockItem/StockItem";

const StocksBar = () =>

  {
    const apiKey = process.env.REACT_APP_STOCK_MARKET_API_KEY;
    const [ibm, setIbm] = useState({});
    const [aapl, setAapl] = useState({});
    const [googl, setGoogl] = useState({});
    const [amzn, setAmzn] = useState({});
    const [nvda, setNvda] = useState({});
    const [meta, setMeta] = useState({});
    const [tsla, setTsla] = useState({});
    const [msft, setMsft] = useState({});
    const [jpm, setJpm] = useState({});

    const getIbm = async () => {
      const url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=IBM&apikey=${apiKey}`;
      const res = await fetch(url);
      const data = await res.json();
      setIbm(data);
    };

    const getAapl = async () => {
      const url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=AAPL&apikey=${apiKey}`;
      const res = await fetch(url);
      const data = await res.json();
      setAapl(data);
    };

    const getGoogl = async () => {
      const url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=GOOGL&apikey=${apiKey}`;
      const res = await fetch(url);
      const data = await res.json();
      setGoogl(data);
    };
    const getAmzn = async () => {
      const url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=AMZN&apikey=${apiKey}`;
      const res = await fetch(url);
      const data = await res.json();
      setAmzn(data);
    };

    const getNvda = async () => {
      const url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=NVDA&apikey=${apiKey}`;
      const res = await fetch(url);
      const data = await res.json();
      setNvda(data);
    };

    const getMeta = async () => {
      const url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=META&apikey=${apiKey}`;
      const res = await fetch(url);
      const data = await res.json();
      setMeta(data);
    };

    const getTsla = async () => {
      const url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=TSLA&apikey=${apiKey}`;
      const res = await fetch(url);
      const data = await res.json();
      setTsla(data);
    };

    const getMsft = async () => {
      const url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=MSFT&apikey=${apiKey}`;
      const res = await fetch(url);
      const data = await res.json();
      setMsft(data);
    };

    const getJpm = async () => {
      const url = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=JPM&apikey=${apiKey}`;
      const res = await fetch(url);
      const data = await res.json();
      setJpm(data);
    };

    useEffect(() => {
      getIbm();
      getAapl();
      getGoogl();
      getAmzn();
      getNvda();
      getMeta();
      getTsla();
      getMsft();
      getJpm();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(ibm);

    const ibmOpen = (ibm) => {
      const formattedData = [];
      Object.values(aapl["Weekly Adjusted Time Series"]).map((value) =>
        formattedData.push(value["1. open"])
      );
      return formattedData[0];
    };
    const ibmOpenPrice = ibmOpen(ibm);

    const aaplOpen = (aapl) => {
      const formattedData = [];
      Object.values(aapl["Weekly Adjusted Time Series"]).map((value) =>
        formattedData.push(value["1. open"])
      );
      return formattedData[0];
    };
    const aaplOpenPrice = aaplOpen(aapl);

    const googlOpen = (googl) => {
      const formattedData = [];
      Object.values(googl["Weekly Adjusted Time Series"]).map((value) =>
        formattedData.push(value["1. open"])
      );
      return formattedData[0];
    };
    const googlOpenPrice = googlOpen(googl);

    const amznOpen = (amzn) => {
      const formattedData = [];
      Object.values(amzn["Weekly Adjusted Time Series"]).map((value) =>
        formattedData.push(value["1. open"])
      );
      return formattedData[0];
    };
    const amznOpenPrice = amznOpen(amzn);

    const nvdaOpen = (nvda) => {
      const formattedData = [];
      Object.values(nvda["Weekly Adjusted Time Series"]).map((value) =>
        formattedData.push(value["1. open"])
      );
      return formattedData[0];
    };
    const nvdaOpenPrice = nvdaOpen(nvda);

    const metaOpen = (meta) => {
      const formattedData = [];
      Object.values(meta["Weekly Adjusted Time Series"]).map((value) =>
        formattedData.push(value["1. open"])
      );
      return formattedData[0];
    };
    const metaOpenPrice = metaOpen(meta);

    const tslaOpen = (tsla) => {
      const formattedData = [];
      Object.values(tsla["Weekly Adjusted Time Series"]).map((value) =>
        formattedData.push(value["1. open"])
      );
      return formattedData[0];
    };
    const tslaOpenPrice = tslaOpen(tsla);

    const msftOpen = (msft) => {
      const formattedData = [];
      Object.values(msft["Weekly Adjusted Time Series"]).map((value) =>
        formattedData.push(value["1. open"])
      );
      return formattedData[0];
    };
    const msftOpenPrice = msftOpen(msft);

    const jpmOpen = (jpm) => {
      const formattedData = [];
      Object.values(jpm["Weekly Adjusted Time Series"]).map((value) =>
        formattedData.push(value["1. open"])
      );
      return formattedData[0];
    };
    const jpmOpenPrice = jpmOpen(jpm);

    return (
      <>
        <div className="stocks-bar">
          <StockItem element="1" open={ibmOpenPrice} companySymbol="IBM" />
          <StockItem element="2" open={aaplOpenPrice} companySymbol="AAPL" />
          <StockItem element="3" open={googlOpenPrice} companySymbol="GOOGL" />
          <StockItem element="4" open={amznOpenPrice} companySymbol="AMZN" />
          <StockItem element="5" open={nvdaOpenPrice} companySymbol="NVDA" />
          <StockItem element="6" open={metaOpenPrice} companySymbol="META" />
          <StockItem element="7" open={tslaOpenPrice} companySymbol="TSLA" />
          <StockItem element="8" open={msftOpenPrice} companySymbol="MSFT" />
          <StockItem element="1" open={jpmOpenPrice} companySymbol="JPM" />
        </div>
      </>
    );
  };

export default StocksBar;
