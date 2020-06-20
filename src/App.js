import React from "react";
import "./App.css";
import Chart from "./components/Chart";

class App extends React.Component {
  render() {
    return (
      <div className="p-3 m-4 border border-muted">
        <Chart />
      </div>
    );
  }
}

export default App;
