import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 

import { Component } from 'react';

import MainPage from "../pages/MainPage";
import OurCoffee from "../pages/OurCoffee";

import './app.css';

class App extends Component {

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/ourcoffee" element={<OurCoffee/>}/>
        </Routes>
      </Router>
  )
  }
}

export default App;
