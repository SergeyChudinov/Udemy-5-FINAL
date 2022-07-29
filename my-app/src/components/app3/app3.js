import { Component } from 'react';

import Home2Page from '../home-2page/home-2page';
import AboutIt from '../aboutIt/aboutIt';
import Footer from '../footer/footer';

import './app3.css';

class App3 extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <div className="app3">
          <Home2Page/>
          <AboutIt/>
          <Footer/>
      </div>
    );
  }
}

export default App3;
