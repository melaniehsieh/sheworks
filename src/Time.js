import React from "react";
import Donut from "./components/Donut";
import Stacked from "./components/Staked";
import "./App.css";
import DonutData from "./components/csv/DonutData.csv";

export default class Time extends React.Component {
  state = {
    width: 450,
    height: 500,
    margin: 40,
    marginT: 40,
    marginR: 40,
    marginB: 40,
    marginL: 40,
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
        <div>
          <h1>Weekly</h1>
          <Stacked
            width={this.state.width}
            height={this.state.height}
            marginT={this.state.marginT}
            marginR={this.state.marginR}
            marginB={this.state.marginB}
            marginL={this.state.marginL}
          />
        </div>
      </div>
    );
  }
}
