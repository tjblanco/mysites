import React, { Component } from 'react';

class Markers extends Component {

    static defaultProps = {};

    render() {
        return (
            <div className={this.props.className}>
                {this.props.text}
            </div>
        );
    }
}

export default Markers;