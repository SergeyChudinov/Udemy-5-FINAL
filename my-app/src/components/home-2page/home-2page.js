import { Component } from "react";
import Header from '../header/header';

import './home-2page.css';

class Home2Page extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="home2Page">
                <Header/>
                <h1 className="home2Page-h1">Our Coffee</h1>
            </div>
        )
    }
}

export default Home2Page;