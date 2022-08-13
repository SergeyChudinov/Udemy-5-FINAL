import {Link, NavLink} from 'react-router-dom'; 
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
                <NavLink exact activeStyle={{'color': '#9f0013'}} to='/' className="header-href" >Coffee house</NavLink>
                <NavLink exact activeStyle={{'color': '#9f0013'}} to='/ourcoffee' className="header-href" >Our coffee</NavLink>
                {/* <a className="header-href" href="#">For your pleasure</a> */}
            </div>
        )
    }
}

export default Header;

//<NavLink exact activeStyle={{'color': '#9f0013'}} to='/'