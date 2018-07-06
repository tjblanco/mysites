import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import Markers from './Markers'

export default class Map extends Component {
    static defaultProps = {
        center: { lat: 41.40166, lng: 2.1566901 },
        zoom: 15
    }
    createMapOptions= (maps) => {
        return {
            panControl: true,
            mapTypeControl: false,
            scrollwheel: false,
            scaleControl: true,
            styles: []
        }
    }

    locations = [
        {title: 'Park Ave Penthouse', location: {lat: 40.7713024, lng: -73.9632393}},
        {title: 'Chelsea Loft', location: {lat: 40.7444883, lng: -73.9949465}},
        {title: 'Union Square Open Floor Plan', location: {lat: 40.7347062, lng: -73.9895759}},
        {title: 'East Village Hip Studio', location: {lat: 40.7281777, lng: -73.984377}},
        {title: 'TriBeCa Artsy Bachelor Pad', location: {lat: 40.7195264, lng: -74.0089934}},
        {title: 'Chinatown Homey Space', location: {lat: 40.7180628, lng: -73.9961237}}
    ];

    render() {
        return (
            <div className='map'>
                <GoogleMapReact
                    defaultCenter={ this.props.center }
                    defaultZoom={ this.props.zoom }
                    bootstrapURLKeys={{
                        key: 'AIzaSyASXg9YtZ5fVwJQk3zPGQuaina7Qqt5ZEE'
                    }}
                    options={this.createMapOptions}
                >
                    <Markers lat={41.405009} lng={2.153935} text={'Chivuo’s'} className={'Burguer'}/>
                </GoogleMapReact>
            </div>
        )
    }
}
