import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import GoogleMap from './GoogleMap'

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

                    <GoogleMap

                    />
                </GoogleMapReact>
            </div>
        )
    }
}
