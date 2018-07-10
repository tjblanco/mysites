import React, { Component } from 'react';
import ClassSelect from "./ClassSelect";

class SitesList extends Component {
    getClasses = () => {
        var a = this.props.sites.map((site) => {return(site.class)})
        return Array.from(new Set(a))
    }
    render() {
        return(
            <navigator className="nav_panel hidden">
                <ClassSelect classes={this.props.classes} filterOptions={(filter) => this.props.filterOptions(filter)} />
                <h2 className="small">MySites</h2>
                <ul>
                    { this.props.sites.map((c) => (
                        <li key={c.title}
                            onClick={() => this.props.selectMarker(c.title)}
                        >
                            {c.title}
                        </li>
                    )) }
                </ul>
            </navigator>
        )
    }
}

export default SitesList;