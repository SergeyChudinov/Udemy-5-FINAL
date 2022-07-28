import { Component } from 'react';
import Home from '../home/home';
import AboutUs from '../aboutUs/aboutUs';
import OurBest from '../ourBest/ourBest';
import Footer from '../footer/footer';

import Coffee1 from '../ourBest/img/Coffee-1.png';
import Coffee2 from '../ourBest/img/Coffee-2.png';
import Coffee3 from '../ourBest/img/Coffee-3.png';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {img: Coffee1 ,h3: 'Solimo Coffee Beans 2 kg',price: 10.73, id: 1},
        {img: Coffee2 ,h3: 'Presto Coffee Beans 1 kg',price: 15.99, id: 2},
        {img: Coffee3 ,h3: 'AROMISTICO Coffee 1 kg',price: 6.99, id: 3}
      ]
    }
  }
  render() {
    return (
      <div className="app">
        <Home/>
        <AboutUs/>
        <OurBest 
          data={this.state.data}/>
        <Footer/>
      </div>
    );
  }
  }

export default App;
