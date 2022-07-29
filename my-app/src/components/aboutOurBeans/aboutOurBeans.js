// import { Component } from "react";
import AboutOurBeansItem from '../aboutOurBeans-item/aboutOurBeans-item';
import LookiingFor from '../lookiingFor/lookiingFor';
import AppFilter from '../app-filter/app-filter'

import Girl from './img/girl.jpg';
import Vector from './img/Vector.png';

import './aboutOurBeans.css';

const AboutOurBeans = ({data, term, onUpdateSearch, filter, onFilterSelect}) => {
    const elements = data.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <AboutOurBeansItem 
            key={id} 
            {...itemProps}/>
        )
    })
    return (
        <div className="aboutOurBeans">
            <div className="aboutOurBeans-container">
                <div>
                    <img src={Girl} alt="" />
                </div>
                <div className="aboutOurBeans-div">
                    <h2 className="aboutOurBeans-h2">About our beans</h2>
                    <div className="aboutOurBeans-line-div">
                        <div className="aboutOurBeans-line"></div>
                        <img src={Vector} alt="" />
                        <div className="aboutOurBeans-line"></div>
                    </div>                       
                    <p className="aboutOurBeans-p">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.

                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. 
                    As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.
                    </p>
                </div>
            </div>
            <div className="aboutOurBeans-line2-div">
                <div className="aboutOurBeans-line2"></div>
            </div>
            <div className="aboutOurBeans-filter">
                <p className="lookiing-for">Lookiing for</p>
                <LookiingFor
                term={term}
                onUpdateSearch={onUpdateSearch}/>
                <p className="lookiing-filter">Or filter</p>
                <AppFilter
                filter={filter}
                onFilterSelect={onFilterSelect}/>
                {/* <button className="aboutOurBeans-button">Brazil</button>
                <button className="aboutOurBeans-button">Kenya</button>
                <button className="aboutOurBeans-button">Columbia</button> */}
            </div>
            <div className="block-display">
                {elements}
            </div>
        </div>
    )
}

export default AboutOurBeans;