import React from "react";
import "./Main.scss";
import Graph from "../Graph/Graph";
import StockDetails from "../StockDetails/StockDetails";

const Main = () => {
  return (
    <div className="main">
      <div className="main__container">
        <Graph />
        <StockDetails />
      </div>
    </div>
  );
};

export default Main;
