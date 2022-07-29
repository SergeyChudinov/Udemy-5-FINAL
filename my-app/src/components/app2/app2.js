import { Component } from 'react';
import Home2Page from '../home-2page/home-2page';
import AboutOurBeans from '../aboutOurBeans/aboutOurBeans'
import Footer from '../footer/footer';

import Coffee1 from '../ourBest/img/Coffee-1.png';
import Coffee2 from '../ourBest/img/Coffee-2.png';
import Coffee3 from '../ourBest/img/Coffee-3.png';

import './app2.css';

class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [
            {img: Coffee1 ,h3: 'Solimo Coffee Beans 2 kg', country: 'Brazil',price: 10.73, id: 1},
            {img: Coffee2 ,h3: 'Presto Coffee Beans 1 kg', country: 'Kenya',price: 15.99, id: 2},
            {img: Coffee3 ,h3: 'AROMISTICO Coffee 1 kg', country: 'Columbia',price: 6.99, id: 3},
            {img: Coffee3 ,h3: 'AROMISTICO Coffee 1 kg', country: 'Cuba',price: 5.99, id: 4},
            {img: Coffee3 ,h3: 'AROMISTICO Coffee 1 kg', country: 'Argentina',price: 12.59, id: 5},
            {img: Coffee3 ,h3: 'AROMISTICO Coffee 1 kg', country: 'Chile',price: 7.99, id: 6}
        ],
        term: '',
        filter: 'all'
    }
  }
  render() {
    return (
      <div className="app2">
        <Home2Page/>
        <AboutOurBeans
            data={this.state.data}/>
        <Footer/>
      </div>
    );
  }
  }

export default App2;
