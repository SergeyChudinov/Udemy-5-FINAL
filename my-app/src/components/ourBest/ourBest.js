import OurBestItem from '../ourBest-item/ourBest-item';
// import { Component } from "react";
// import Coffee1 from './img/Coffee-1.png';
// import Coffee2 from './img/Coffee-2.png';
// import Coffee3 from './img/Coffee-3.png';

import './ourBest.css';

const OurBest = ({data}) => {   //extends Component
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //     }
    // }


    
        const elements = data.map((item) => {
            const {id, ...itemProps} = item;
            return (
                <OurBestItem 
                key={id} 
                {...itemProps}/>
            )
        })

        return (
            <div className="ourBest">
                <h1 className="ourBest-h1">Our best</h1>
                <div className="block-display">
                    {elements}
                </div>
            </div>

        )

    
}

export default OurBest;