import React from 'react';
import SitesFilter from './SitesFilter'

export default class SitesFilterList extends React.Component {
    // componentDidUpdate(prevProps, prevState) {
    //     if (this.props.activeMarker !== prevProps.activeMarker) {
    //         let img_ref = this.refs.cg_image
    //         if (this.props.showingInfoWindow && (this.props.selectedTitle === this.props.title)) {
    //             img_ref.style.border = "3px solid black"
    //         }
    //         else {
    //             img_ref.style.border = null
    //         }
    //     }
    // }

    getMarker(title_match) {
        let match_list = this.props.gmapMarkers.filter(item =>
            item.get('title') === title_match
        )
        if (match_list) {
            return match_list.first()
        }
        else {
            return null;
        }
    }

    getCampgrounds() {
        return this.props.markers.filter(
            cg => cg.get('mapOn') === true
        )
    }
    onKeyPress= (e,title) => {
        if(e.key==='Enter'){
            this.props.onMarkerClick(this.getMarker(title))
        }
    }

    render() {
    return (
              <navigator className="nav_panel hidden">
                  <SitesFilter classes={this.props.filters} changeFilter={this.props.changeFilter} />
                  <h2 className="small">MySites</h2>
                  <ul>
                      { this.getCampgrounds().map(item =>(<li key={item.get('title')}
                                                              tabIndex='0'
                                                              onKeyPress={(e) => this.onKeyPress(e,item.get('title'))}
                                                              onClick={() => this.props.onMarkerClick(this.getMarker(item.get('title')))}


                      >{item.get('title')}</li>)) }
                  </ul>
              </navigator>
  )}
}
