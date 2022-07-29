import { Component } from "react";

import src from './img/Group.png'

import './everything.css';

class Everything extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="everything">
                    <h1 className="everything-h1">Everything You Love About Coffee</h1>
                    <div className="everything-div">
                        <div className="everything-line"></div>
                        <img src={src} alt="" />
                        <div className="everything-line"></div>
                    </div>
                    <h2 className="everything-h2">We makes every day full of energy and taste</h2>
                    <h2 className="everything-h2">Want to try our beans?</h2>
                    <div className="button-div">
                        <a className="everything-a" href="index2.html">
                            <div className="button">More</div>
                        </a>
                    </div>
            </div>
        )
    }
}

export default Everything;