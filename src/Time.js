import React from "react";
import Donut from "./components/Donut";
import Stacked from "./components/Staked";
import "./App.css";

export default class Time extends React.Component {
  state = {
    data: { a: 9, b: 20, c: 30, d: 8, e: 12 },
    width: 450,
    height: 450,
    margin: 40,

    marginT: 10,
    marginR: 30,
    marginB: 30,
    marginL: 60,
    width1: 460,
    height1: 400,
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
            width={this.state.width1}
            height={this.state.height1}
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
