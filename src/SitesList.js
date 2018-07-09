import React, { Component } from 'react';
import ClassSelect from "./ClassSelect";

class SitesList extends Component {
    getClasses = () => {

        var a = this.props.sites.map((site) => {return(site.class)})
        a = Array.from(new Set(a))
        console.log(a)
        return a
    }
    render() {
        return(
            <navigator className="nav_panel hidden">
                <ClassSelect classes={this.getClasses()} />
                <h2 class="small">MySites</h2>
                <ul>
                    { this.props.sites.map((c) => (<li>{c.title}</li>)) }
                </ul>
            </navigator>
        )
    }
}

export default SitesList;