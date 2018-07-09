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
                <ClassSelect classes={this.getClasses()} />
                <h2 className="small">MySites</h2>
                <ol type="A">
                    { this.props.sites.map((c) => (<li key={c.title}>{c.title}</li>)) }
                </ol>
            </navigator>
        )
    }
}

export default SitesList;