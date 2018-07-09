import React, { Component } from 'react';

class Markers extends Component {

    static defaultProps = {};


    render() {
        return (

                <div className={'marker ' + this.props.className}
                     key={this.props.key}
                ></div>

        )
    }

}

export default Markers;