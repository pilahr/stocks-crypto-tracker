import React, { useMemo } from "react";
import "./Crypto.scss";
import TopNav from "../../components/TopNav/TopNav";
import SearchBar from "../../components/SearchBar/SearchBar";
import CryptoBar from "../../components/CryptoBar/CryptoBar";
import MainCrypto from "../../components/MainCrypto/MainCrypto";

const Crypto = ({ cryptoData, 
  cryptoSymbol, setCryptoSymbol 
}) => {

  /////////////////////////////////////////////
  // const apiKey = process.env.REACT_APP_STOCK_MARKET_API_KEY;

  // const [stockData, setStockData] = useState({});
  // // const [companySymbolData, setCompanySymbolData] = useState("IBM");

  // const [cryptoData, setCryptoData] = useState({});
  // // const [CryptoSymbol, setCryptoSymbol] = useState("BTC");

  // const getStockData = async (symbolResult) => {
  //   try {
  //     let pageUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=`;
  //     let url = pageUrl + `${symbolResult}&apikey=${apiKey}`;

  //     //let url = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${apiKey}`;

  //     // if (amznResult) {
  //     //   url = pageUrl + `amzn&apikey=${apiKey}`;
  //     // } else if (shopResult) {
  //     //   url = pageUrl + `shop&apikey=${apiKey}`;
  //     // }

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

  // const getCryptoData = async (symbolResult) => {
  //   try {
  //     let pageUrl = `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_WEEKLY&symbol=`;
  //     let url = pageUrl + `${symbolResult}&market=USD&apikey=${apiKey}`;

  //     const res = await fetch(url);
  //     if (!res.ok) {
  //       throw new Error("Sorry something went wrong!");
  //     }

  //     const data = await res.json();

  //     setCryptoData(data);
  //   } catch (e) {
  //     alert(e.message);
  //   }
  // };

  // useEffect(() => {
  //   getStockData(companySymbolData);
  //   getCryptoData(CryptoSymbol);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
/////////////////////////////////////////////////////


  const companySymbol = cryptoData["Meta Data"]["2. Digital Currency Code"];

  // console.log(cryptoData["Time Series (Digital Currency Weekly)"]);
  // console.log(
  //   Object.keys(cryptoData["Time Series (Digital Currency Weekly)"]).length
  // );

  // Stock Data
  const formattedCryptoData = (cryptoData) => {
    const formattedData = [];

    if (cryptoData["Time Series (Digital Currency Weekly)"]) {
      Object.entries(cryptoData["Time Series (Digital Currency Weekly)"]).map(
        ([key, value]) => {
          return formattedData.push({
            x: key,

            y: [
              value["1a. open (USD)"],
              value["2a. high (USD)"],
              value["3a. low (USD)"],
              value["4a. close (USD)"],
              value["5. volume"],
            ],
          });
        }
      );
    }

    return formattedData;
  };

  const seriesCryptoData = formattedCryptoData(cryptoData);

  const todayDate = seriesCryptoData[0]["x"];
  const getTodayDate = (todayDate) => {
    const dateFormat = "";
    const date = Date(todayDate).split(" ")[2];
    const month = Date(todayDate).split(" ")[1];
    const year = Date(todayDate).split(" ")[3];
    return dateFormat.concat(date, " ", month, " ", year);
  };
  const date = getTodayDate(todayDate);

  const todayOpen = seriesCryptoData[0]["y"][0];
  const open = parseFloat(todayOpen).toFixed(2);

  const todayHigh = seriesCryptoData[0]["y"][1].split(".")[0];
  const high = parseFloat(todayHigh).toFixed(2);

  const todayLow = seriesCryptoData[0]["y"][2].split(".")[0];
  const low = parseFloat(todayLow).toFixed(2);

  const todayClose = seriesCryptoData[0]["y"][3].split(".")[0];
  const close = parseFloat(todayClose).toFixed(2);

  const todayVolume = seriesCryptoData[0]["y"][4].split(".")[0];

  const volumeWithCommas = (todayVolume) => {
    return todayVolume.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const volume = volumeWithCommas(todayVolume);

  //Stock Data for the Graph
  const formattedCryptoDataForGraph = (cryptoData) => {
    const formattedData = [];
    if (cryptoData["Time Series (Digital Currency Weekly)"]) {
      Object.entries(cryptoData["Time Series (Digital Currency Weekly)"]).map(
        ([key, value]) => {
          return formattedData.push({
            x: new Date(key).getTime(),
            y: [
              value["1a. open (USD)"],
              value["2a. high (USD)"],
              value["3a. low (USD)"],
              value["4a. close (USD)"],
            ],
          });
        }
      );
    }

    return formattedData;
  };

  const seriesCryptoDataForGraph = useMemo(
    () => formattedCryptoDataForGraph(cryptoData),
    [cryptoData]
  );
  //////////////
  return (
    <div className="crypto-page">
      <div className="crypto-page__topNav">
        <TopNav page="blue" textColor="white" textColor2="white" />
        <SearchBar />
      </div>
      <div className="crypto-page__bar">
        <CryptoBar open={open} companySymbol={companySymbol} />
      </div>
      <div>
        <MainCrypto
          seriesCryptoDataForGraph={seriesCryptoDataForGraph}
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

export default Crypto;
