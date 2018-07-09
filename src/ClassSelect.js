import React, { Component } from 'react';


export default class ClassSelect extends Component {


    render() {
        return(
            <div>
                <h2 className="small">Select Cousine Type</h2>
                <select>
                    <option >All</option>
                    {this.props.classes.map((c) => (<option>{c}</option>)) }
                </select>
            </div>
        )
    }
}