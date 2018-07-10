import React, { Component } from 'react'
import { GoogleApiWrapper, InfoWindow, Map, Marker} from 'google-maps-react';

class MapWrapper extends Component {
    static defaultProps = {
        center: { lat: 41.40166, lng: 2.1566901 },
        zoom: 15
    }

    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: null,
            selectedPlace: null
        }
        // binding this to event-handler functions
        this.onMarkerClick = this.onMarkerClick.bind(this)
        this.onMapClick = this.onMapClick.bind(this)
        this.onInfoClose = this.onInfoClose.bind(this)
    }

    onMarkerClick = (props, marker, e) => {
        // Remove style if there is a selected marker
        if(this.state.activeMarker != null)
            this.state.activeMarker.setIcon(
                {
                    url: 'http://maps.google.com/mapfiles/marker.png'
                })
        marker.setIcon(
            {
                url: 'http://maps.google.com/mapfiles/marker_yellow.png',
                scaledSize: new this.props.google.maps.Size(30,50)
            })
        // Update component style
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        })
    }

    onMapClick = (props, marker, e) =>{
        if(this.state.activeMarker != null)
            this.state.activeMarker.setIcon(
                {
                    url: 'http://maps.google.com/mapfiles/marker.png'
                })
        this.setState({
            selectedPlace: null,
            activeMarker: null,
            showingInfoWindow: false
        })
    }

    onInfoClose = (props, marker, e) => {
        if(this.state.activeMarker != null)
            this.state.activeMarker.setIcon(
                {
                    url: 'http://maps.google.com/mapfiles/marker.png'
                })
        this.setState({
            selectedPlace: null,
            activeMarker: null,
            showingInfoWindow: false
        })
    }

    render() {
        const style = {
            width: '100%',
            height: '100%'
        }
        return (
            <div className='map'>
                <Map
                    style = { style }
                    google = {this.props.google}
                    onClick = { this.onMapClick }
                    zoom = { this.props.zoom }
                    initialCenter = {this.props.center}
                >
                    {this.props.sites.map((site,index) => (<Marker onClick={this.onMarkerClick}
                                                                   position={site.position}
                                                                   title={site.title}
                                                                   name={site.title}
                                                                   className={site.class}
                                                                   key={index}
                                                                   options={{icon: 'http://maps.google.com/mapfiles/marker.png'}}
                    />) )}

                    <InfoWindow
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}
                        onClose={this.onInfoClose}
                    >
                        <h4>
                            {this.state.selectedPlace != null ? this.state.selectedPlace.title : 'MySite' }
                        </h4>
                        <p>
                            {this.state.selectedPlace != null ? this.state.selectedPlace.className : 'MySite type'}
                        </p>
                    </InfoWindow>
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyASXg9YtZ5fVwJQk3zPGQuaina7Qqt5ZEE')
})(MapWrapper)