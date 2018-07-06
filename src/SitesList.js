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
                <p>Here is the navigator panel!!</p>
            </navigator>
        )
    }
}

export default SitesList;