import React from 'react';
import * as config from './config'
import GoogleApiComponent from './GoogleApiComponent'
import SitesMap from './SitesMap'
import {Marker} from './Marker'
import {InfoWindow} from './InfoWindow'
import FoursquareApiComponent from './FoursquareApiComponent'


export class SitesMapContainer extends React.Component {
  render() {
    return (
      <div>
      <SitesMap google={this.props.google}>
        {this.props.markers.map(marker =>
          <Marker
            key={marker.get('title')}
            title={marker.get('title')}
            description={marker.get('description')}
            properties={marker.get('properties')}
            position={marker.get('position')}
            mapOn={marker.get('mapOn')}
            addMarker={this.props.addMarker}
            onMarkerClick={this.props.onMarkerClick}
          />

        )}
        <InfoWindow {...this.props}
            marker={this.props.activeMarker}
            visible={this.props.showingInfoWindow}>
              <div>
                <h4>{this.props.selectedTitle}</h4>
              </div>
          </InfoWindow>

      </SitesMap>
      </div>
    )}
}

let key = config.getGoogleKey()
export default GoogleApiComponent({
  apiKey: key
})(SitesMapContainer)
