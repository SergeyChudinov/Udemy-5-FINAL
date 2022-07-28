import { Component } from "react";

import src1 from './img/Vector-1.png';
import src2 from './img/Vector-2.png'

import './footer.css';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (           
            <div className="footer">
                <div className="footer-div">
                    <img className="img" src={src1} alt="coffee" />
                    <a className="footer-href" href="vk.com">Coffee house</a>
                    <a className="footer-href" href="vk.com">Our coffee</a>
                    <a className="footer-href" href="vk.com">For your pleasure</a> 
                </div>   
                <div className="footer-div-img">
                    <img src={src2} alt="" />
                </div>          
            </div>
        )
    }
}

export default Footer;