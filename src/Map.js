import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import Markers from './Markers'

export default class Map extends Component {
    state = {
        sites: [
            {lat: 41.402367, lng: 2.154347, title: 'La Teresa. Taverna Valenciana', class: 'Tapas'},
            {lat: 41.3931733, lng: 2.1409225, title: 'Vins I Platillos Bar Restaurant', class: 'Tapas'},
            {lat: 41.402952, lng: 2.15791, title: 'Bar Canigó', class: 'Tapas'},
            {lat: 41.4043009, lng: 2.1549702, title: 'Intrèpid de Gràcia', class: 'Tapas'},
            {lat: 41.4007937, lng: 2.1587425, title: 'Messié Pizza', class: 'Pizza'},
            {lat: 41.380802, lng: 2.185336, title: 'La Gavina', class: 'Pizza'},
            {lat: 41.405009, lng: 2.153935, title: "Chivuo's", class: 'Burguer'},
            {lat: 41.402015, lng: 2.157232, title: 'La Vespa Burger Bar', class: 'Burguer'},
            {lat: 41.403539, lng: 2.160304, title: 'Heliogàbal', class: 'Cocktail Bar'},
            {lat: 41.4040643, lng: 2.1582468, title: 'Chatelet', class: 'Cocktail Bar'},
            {lat: 41.4040194, lng: 2.1581335, title: 'El Café de Teatre', class: 'Cocktail Bar'},
            {lat: 41.404438, lng: 2.1568115, title: 'Gracia Latina', class: 'Cocktail Bar'},
        ]
    }
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
                    {this.state.sites.map((site) => (<Markers lat={site.lat} lng={site.lng} text={site.title} className={site.class}/>) )}
                    
                </GoogleMapReact>
            </div>
        )
    }
}
