import React from "react";
import "./CryptoGraph.scss";
import Graph from "../Graph/Graph";
import dayjs from "dayjs";

const CryptoGraph = ({ companySymbol, seriesCryptoDataForGraph }) => {
  const candleStickGraphOption = {
    chart: {
      height: 0,
      type: "candlestick",
    },
    annotations: {
      xaxis: [
        {
          borderColor: "#00E396",
          label: {
            borderColor: "#00E396",
            style: {
              fontSize: "12px",
              color: "#fff",
              background: "#FFFFFF",
            },
            orientation: "horizontal",
            offsetY: 7,
            text: "Annotation Test",
          },
        },
      ],
    },
    tooltip: {
      enabled: true,
    },
    xaxis: {
      type: "category",
      labels: {
        formatter: function (val) {
          return dayjs(val).format("MMM DD");
        },
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };
  return (
    <div>
      <Graph
        graphBackground="dark"
        textColor="white"
        companySymbol={companySymbol}
        seriesDataForGraph={seriesCryptoDataForGraph}
        graphOption={candleStickGraphOption}
      />
    </div>
  );
};

export default CryptoGraph;
