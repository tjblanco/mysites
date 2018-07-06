import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import GoogleMap from './GoogleMap'

export default class Map extends Component {
    static defaultProps = {
        center: { lat: 40.7446790, lng: -73.9485420 },
        zoom: 11
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

                        lat={ 40.7473310 }
                        lng={ -73.8517440 }
                        text={ "Where's Waldo?" }
                    />
                </GoogleMapReact>
            </div>
        )
    }
}
