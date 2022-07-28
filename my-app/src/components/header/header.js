import { Component } from "react";

import src from './img/Group.png';

import './header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="header">
                <img className="img" src={src} alt="coffee" />
                <a className="header-href" href="vk.com">Coffee house</a>
                <a className="header-href" href="vk.com">Our coffee</a>
                <a className="header-href" href="vk.com">For your pleasure</a>
            </div>
        )
    }
}

export default Header;