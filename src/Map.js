import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import GoogleMap from './GoogleMap'

export default class Map extends Component {
    static defaultProps = {
        center: { lat: 41.40166, lng: 2.1566901 },
        zoom: 15
    }
    render() {
        return (
            <div className='map'>
                <GoogleMapReact
                    defaultCenter={ this.props.center }
                    defaultZoom={ this.props.zoom }
                    bootstrapURLKeys={{
                        key: 'AIzaSyASXg9YtZ5fVwJQk3zPGQuaina7Qqt5ZEE'
                    }}>

                    <GoogleMap

                    />
                </GoogleMapReact>
            </div>
        )
    }
}
