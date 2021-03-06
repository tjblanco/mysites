import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from './action_creators';
import './App.css';
import logo from './logo.svg';
import menuIcon from './menu.svg'
import './responsive.css'
import SitesFilterList from './SitesFilterList';
import SitesMapContainer from './SitesMapContainer';

export class SitesFilterApp extends React.Component {

  render() {
    return (
        // General render
        <div className="App">
            <header className="App-header">
                <img onClick={() => (
                    document.querySelector('.nav_panel').classList.toggle('hidden')
                )} src={menuIcon} className="menu" alt="menu" />
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">MySites in Gràcia</h1>
            </header>

            <SitesFilterList {...this.props}/>
            <SitesMapContainer {...this.props} />

        </div>

  )};
}

function mapStateToProps(state) {
  return {
    filters: state.get('filters'),
    markers: state.get('markers'),
    showingInfoWindow: state.get('showingInfoWindow'),
    activeMarker: state.get('activeMarker'),
    selectedTitle: state.get('selectedTitle'),
    gmapMarkers: state.get('gmapMarkers')
  };
}


export const SitesFilterAppContainer = connect(mapStateToProps,actionCreators)(SitesFilterApp);
