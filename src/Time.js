import React from "react";
import Donut from "./components/Donut";
import Stacked from "./components/Staked";
import "./App.css";

import DonutData from "./components/csv/DonutData.csv";

export default class Time extends React.Component {
  state = {
    data: DonutData,
    width: 450,
    height: 450,
    margin: 40,
  };

  render() {
    return (
      <div className="row">
        <div>
          <h1>Daily</h1>
          <Donut
            data={this.state.data}
            width={this.state.width}
            height={this.state.height}
            margin={this.state.margin}
          />
        </div>
        {/* <div>
          <h1>Weekly</h1>
          <Stacked />
        </div> */}
      </div>
    );
  }
}
