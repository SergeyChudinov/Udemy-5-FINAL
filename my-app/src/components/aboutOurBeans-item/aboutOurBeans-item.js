import { Component } from "react";



import './aboutOurBeans-item.css';

class AboutOurBeansItem extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="block">
                <a className="block-a" href="index3.html">
                    <div className="ourBest-div">
                        <div className="ourBest-div-div">
                            <img src={this.props.img} alt="" />
                        </div>
                        <h3 className="ourBest-h3">{this.props.h3}</h3>
                        <p className="ourBest-p">{this.props.country}</p>
                        <p className="ourBest-p">{this.props.price}$</p>
                    </div>
                </a>
            </div>           
        )
    }
}

export default AboutOurBeansItem;