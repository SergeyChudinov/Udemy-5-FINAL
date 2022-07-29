import { Component, Fragment } from 'react';

import './lookiingFor.css'

class LookiingFor extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            term: ''         
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({
            term: term
        })
        this.props.onUpdateSearch(term);
    }
        
    render() {
        return (
            <Fragment>
                <p className="lookiing-for">Lookiing for</p>
                <input onChange={this.onUpdateSearch}
                    type="text" 
                    className="aboutOurBeans-input"
                    placeholder="start typing here..."
                            //value={this.state.term}
                />
            </Fragment>
        )
    }
} 

export default LookiingFor;