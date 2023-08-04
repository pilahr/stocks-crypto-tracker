import React from "react";
import "./Graph.scss";
import ReactApexChart from "react-apexcharts";

const Graph = ({
  graphBackground,
  textColor,
  companySymbol,
  seriesDataForGraph,
  graphOption,
}) => {
  let backgroundStyle = "graph";

  switch (graphBackground) {
    case "light":
      backgroundStyle += " light";
      break;
    case "dark":
      backgroundStyle += " dark";
      break;
    default:
      backgroundStyle += "";
  }

  let textStyle = "graph__header--text";
  switch (textColor) {
    case "white":
      textStyle += " white-text";
      break;
    case "black":
      textStyle += " black-text";
      break;
    default:
      textStyle += "";
  }

  return (
    <div className={backgroundStyle}>
      <div className="graph__header">
        <h3 className={textStyle}>{companySymbol}</h3>
      </div>

      <div className="graph__graphical">
        <ReactApexChart
          series={[
            {
              data: seriesDataForGraph
            },
          ]}
          options={graphOption}
          type="candlestick"
        />
      </div>
    </div>
  );
};

export default Graph;
