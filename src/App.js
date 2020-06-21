import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";
import { About } from "./About";
import Time from "./Time";
import { Family } from "./Family";
import { Login } from "./Login";
import { NoMatch } from "./NoMatch";
import Navbar from "./Navbar";


function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/time" component={Time} />
          <Route path="/family" component={Family} />
          <Route path="/login" component={Login} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
