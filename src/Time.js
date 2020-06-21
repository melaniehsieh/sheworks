import React from "react";
import Donut from "./components/Donut";
import "./App.css";
import Stacked from "./components/Stacked";

export default class Time extends React.Component {
  state = {
    width: 450,
    height: 500,
    margin: 40,
  };

  render() {
    return (
      <div className="row">
        <div>
          <h1>Daily</h1>
          <Donut
            width={this.state.width}
            height={this.state.height}
            margin={this.state.margin}
          />
        </div>
        <div>
          <h1>Weekly</h1>
          <Stacked />
        </div>
        <div style={{ width: "100%" }}>
          <h1>Family Members</h1>
          <ul>
            <li style={{ background: "#2AB290" }}>Father</li>
            <li style={{ background: "#F17B3C" }}>Mother</li>
            <li style={{ background: "#7B68B4" }}>Older Sister</li>
            <li style={{ background: "#FF3D96" }}>Younger Sister</li>
            <li style={{ background: "#87B858" }}>Older Brother</li>
            <li style={{ background: "#F4B644" }}>Younger Brother</li>
          </ul>
        </div>
      </div>
    );
  }
}
