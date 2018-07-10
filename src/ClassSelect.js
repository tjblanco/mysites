import React, { Component } from 'react';


export default class ClassSelect extends Component {

    render() {
        return(
            <div>
                <h2 className="small">Select Cousine Type</h2>
                <select onChange={(e) => {this.props.filterOptions(e.target.value)}} >
                    {this.props.classes.map((c) => (<option value={c}>{c}</option>))}
                </select>
            </div>
        )
    }
}