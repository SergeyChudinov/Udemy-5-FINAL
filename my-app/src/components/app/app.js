import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 

import { Component } from 'react';

import MainPage from "../pages/MainPage";
import OurCoffee from "../pages/OurCoffee";

import './app.css';

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage/>
          </Route>
          <Route exact path="/ourcoffee">
            <OurCoffee/>
          </Route>
        </Switch>
      </Router>
  )
  }
}

export default App;
