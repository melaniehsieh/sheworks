import React from "react";
import { TimeSeries } from "pondjs";
import {
  Resizable,
  Charts,
  ChartContainer,
  ChartRow,
  YAxis,
  LineChart,
} from "react-timeseries-charts";
import "./Chart.css";
import data from "./data";

class Chart extends React.Component {
  state = {
    tracker: null,
  };

  handleTrackerChanged = (tracker) => {
    this.setState({ tracker });
  };

  handleTimeRangeChange = (timerange) => {
    this.setState({ timerange });
  };

  render() {
    const series = new TimeSeries({
      name: "USD_vs_EURO",
      columns: ["time", "value"],
      points: data.widget[0].data.reverse(),
    });

    const axisStyle = {
      labels: { labelColor: "Red", labelWeight: 100, labelSize: 11 },
      axis: { axisColor: "Orange" },
    };

    return (
      <Resizable>
        <ChartContainer timeRange={series.range()} timeAxisStyle={axisStyle}>
          <ChartRow height="150">
            <YAxis
              style={axisStyle}
              id="price"
              label="Price ($)"
              min={series.min()}
              max={series.max()}
              width="60"
              format="$,.1f"
            />
            <Charts>
              <LineChart axis="price" series={series} className="line" />
            </Charts>
          </ChartRow>
        </ChartContainer>
      </Resizable>
    );
  }
}

export default Chart;
