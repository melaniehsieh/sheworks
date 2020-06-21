import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import{ Home } from './Home';
import{ About } from './About';
import{ Time } from './Time';
import { Login } from './Login';
import{ Family } from './Family';
import{ NoMatch } from './NoMatch';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/Time" component={Time}/>
          <Route path="/Login" component={Login}/>
          <Route path="/Family" component={Family}/>
          <Route component={NoMatch}/>
        </Switch>
  
      </Router>
      


    </React.Fragment>
  );


}

export default App;
