import React, { Component } from 'react';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Tooltip from 'react-bootstrap/lib/Tooltip';

class Markers extends Component {

    static defaultProps = {};

    tooltip = (title) => {
        return(<Tooltip id="tooltip">
                {title}
                </Tooltip>
        )
    }

    render() {
        return (
            <OverlayTrigger placement="top" overlay={this.tooltip(this.props.title)}>
                <div className={'marker ' + this.props.className}
                     key={this.props.key}
                ></div>
            </OverlayTrigger>

        )
    }

}

export default Markers;