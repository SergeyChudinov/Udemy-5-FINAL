import { Component } from "react";

import Coffee from './img/Coffee.jpg';
import Vector from './img/Vector.png';

import './aboutIt.css';

class AboutIt extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="aboutOurBeans">
                <div className="aboutOurBeans-container">
                    <div>
                        <img src={Coffee} alt="" />
                    </div>
                    <div className="aboutOurBeans-div">
                        <h2 className="aboutOurBeans-h2">About it</h2>
                        <div className="aboutOurBeans-line-div">
                            <div className="aboutOurBeans-line"></div>
                            <img src={Vector} alt="" />
                            <div className="aboutOurBeans-line"></div>
                        </div> 
                        <p className="aboutOurBeans-p">Country: Brasil</p>                      
                        <p className="aboutOurBeans-p">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.

                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. 
                        As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                        </p>
                        <p className="aboutOurBeans-p">Price: 16.99$</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutIt;