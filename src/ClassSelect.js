import React, { Component } from 'react';


export default class ClassSelect extends Component {


    render() {
        return(
            <select>
                <option >All</option>
                {this.props.classes.map((c) => (<option>{c}</option>)) }
            </select>
        )
    }
}