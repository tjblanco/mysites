import React from 'react';
import SitesFilter from './SitesFilter'

export default class SitesFilterList extends React.Component {

    getCampgrounds() {
        return this.props.markers.filter(
            cg => cg.get('mapOn') === true
        )
    }

    render() {
    return (
              <navigator className="nav_panel hidden">
                  <SitesFilter classes={this.props.filters} changeFilter={this.props.changeFilter} />
                  <h2 className="small">MySites</h2>
                  <ul>
                      { this.getCampgrounds().map(item =>(<li key={item.get('title')}>{item.get('title')}</li>)) }
                  </ul>
              </navigator>
  )}
}
