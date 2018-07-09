import React, { Component } from 'react'
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

class MapWrapper extends Component {

    static defaultProps = {
        center: { lat: 41.40166, lng: 2.1566901 },
        zoom: 15
    }

    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    }

    componentDidMount() {
        this.props.google.panControl = true
        this.props.google.mapTypeControl = false
        this.props.google.scrollwheel = false
        this.props.google.scaleControl = true
    }

    createMapOptions= (maps) => {
        return {
            panControl: true,
            mapTypeControl: false,
            scrollwheel: false,
            scaleControl: true
        }
    }

    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }
    onMapClick = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    }

    render() {
        const style = {
            width: '100%',
            height: '100%'
        }
        return (
            <div className='map'>
                <Map
                    item
                    xs = { this.props.zoom }
                    style = { style }
                    google = {this.props.google}
                    onClick = { this.onMapClick }
                    zoom = { this.props.zoom }
                    initialCenter = {this.props.center}
                >
                    {this.props.sites.map((site,index) => (<Marker position={site.position} title={site.title} name={site.title} className={site.class} key={index}/>) )}
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyASXg9YtZ5fVwJQk3zPGQuaina7Qqt5ZEE')
})(MapWrapper)