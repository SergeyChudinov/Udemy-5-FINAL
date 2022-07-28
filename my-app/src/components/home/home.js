import { Component } from "react";
import Header from '../header/header';
import Everything from '../everything/everything';

import './home.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="home">
                <Header/>
                <Everything/>
            </div>
        )
    }
}

export default Home;