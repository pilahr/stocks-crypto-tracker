import React from "react";
import "./StockGraph.scss";
import Graph from "../Graph/Graph";
import dayjs from "dayjs";

const StockGraph = ({ companySymbol, seriesStockDataForGraph }) => {
  // const graphOption = {
  //   series: [
  //     {
  //       name: { companySymbol },
  //       data: seriesStockDataForGraph,
  //     },
  //   ],
  //   type: "area",
  //   chart: {
  //     type: "area",
  //     stacked: false,
  //     height: 350,
  //     zoom: {
  //       type: "x",
  //       enabled: true,
  //       autoScaleYaxis: true,
  //     },
  //     toolbar: {
  //       autoSelected: "zoom",
  //     },
  //   },
  //   dataLabels: {
  //     enabled: false,
  //   },
  //   markers: {
  //     size: 0,
  //   },
  //   title: {
  //     text: "Stock Price Movement",
  //     align: "left",
  //   },
  //   fill: {
  //     type: "gradient",
  //     gradient: {
  //       shadeIntensity: 1,
  //       inverseColors: false,
  //       opacityFrom: 0.5,
  //       opacityTo: 0,
  //       stops: [0, 90, 100],
  //     },
  //   },
  //   yaxis: {
  //     labels: {
  //       formatter: function (val) {
  //         return (val / 1000000).toFixed(0);
  //       },
  //     },
  //     title: {
  //       text: "Price",
  //     },
  //   },
  //   xaxis: {
  //     type: "datetime",
  //   },
  //   tooltip: {
  //     shared: false,
  //     y: {
  //       formatter: function (val) {
  //         return (val / 1000000).toFixed(0);
  //       },
  //     },
  //   },
  // };

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
              background: "#00E396",
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
        graphBackground="light"
        textColor="black"
        companySymbol={companySymbol}
        seriesDataForGraph={seriesStockDataForGraph}
        graphOption={candleStickGraphOption}
      />
    </div>
  );
};

export default StockGraph;
