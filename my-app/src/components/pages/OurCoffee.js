import { Component } from 'react';
import Home2Page from '../home-2page/home-2page';
import AboutOurBeans from '../aboutOurBeans/aboutOurBeans'
import Footer from '../footer/footer';

import Coffee1 from '../ourBest/img/Coffee-1.png';
import Coffee2 from '../ourBest/img/Coffee-2.png';
import Coffee3 from '../ourBest/img/Coffee-3.png';



class OurCoffee extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data: [
            {img: Coffee1 ,h3: 'Solimo Coffee Beans 2 kg', country: 'Brazil',price: 10.73, id: 1},
            {img: Coffee2 ,h3: 'Presto Coffee Beans 1 kg', country: 'Kenya',price: 15.99, id: 2},
            {img: Coffee3 ,h3: 'AROMISTICO Coffee 1 kg', country: 'Columbia',price: 6.99, id: 3},
            {img: Coffee3 ,h3: 'Solimo Coffee Beans 2 kg', country: 'Columbia',price: 5.99, id: 4},
            {img: Coffee3 ,h3: 'Presto Coffee Beans 1 kg', country: 'Kenya',price: 12.59, id: 5},
            {img: Coffee3 ,h3: 'AROMISTICO Coffee 1 kg', country: 'Brazil',price: 7.99, id: 6}
        ],
        term: '',
        filter: 'all'
    }
  }
  searchEmp = (items, term) => {
    if (term.length === 0) {
        return items
    }
    return items.filter((item) => {
        return item.h3.indexOf(term) > -1
    })
  }
  onUpdateSearch = (term) => {
    this.setState({
        term: term
    })
  }
  filtePost = (items, filter) => {
    switch (filter) {
        case 'Brazil':
            return items.filter(item => item.country === 'Brazil');
        case 'Kenya':
            return items.filter(item => item.country === 'Kenya');
        case 'Columbia':
            return items.filter(item => item.country === 'Columbia');    
        default:
            return items;             
    }
  }
  onFilterSelect = (filter) => {
    this.setState({
        filter: filter
    })
  }
  render() {
    const {data, term, filter} = this.state;
    const visibleData = this.filtePost(this.searchEmp(data, term), filter);
    return (
      <div className="app">
        <Home2Page/>
        <AboutOurBeans
            term={term}
            onUpdateSearch={this.onUpdateSearch}
            data={visibleData}
            filter={filter}
            onFilterSelect={this.onFilterSelect}/>
        <Footer/>
      </div>
    );
  }
}

export default OurCoffee;
