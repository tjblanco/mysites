import React, { Component } from 'react'
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';

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
        this.onMarkerClick = this.onMarkerClick.bind(this);
    }

    componentDidMount() {
        this.props.google.panControl = true
        this.props.google.mapTypeControl = false
        this.props.google.scrollwheel = false
        this.props.google.scaleControl = true
    }

    onMarkerClick = (props, marker, e) => {
        if(this.state.activeMarker != null)
            this.state.activeMarker.setIcon(
                {
                    url: 'http://maps.google.com/mapfiles/marker.png'
                })

        marker.setIcon(
            {
                url: 'http://maps.google.com/mapfiles/marker_yellow.png',
                scaledSize: new this.props.google.maps.Size(30,50)
                // url: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjQ5cHgiIGhlaWdodD0iNjRweCIgdmlld0JveD0iMCAwIDQ5IDY0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnNrZXRjaD0iaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoL25zIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggMy4wLjQgKDgwNTQpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPmljb25zIDI8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0iUGFnZS0yIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBza2V0Y2g6dHlwZT0iTVNQYWdlIj4KICAgICAgICA8ZyBpZD0ibWFwNTgtKDEpIiBza2V0Y2g6dHlwZT0iTVNMYXllckdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxLjAwMDAwMCwgMS4wMDAwMDApIj4KICAgICAgICAgICAgPHBhdGggZD0iTS0wLjA0NTA2MzE4NjgsMjMuMjYwMjI2OCBDLTAuMDQ1MDYzMTg2OCwyOC40OTIyNTk4IDEuNjk4NTg1MTYsMzMuMzE1NjA0MSA0LjY0MzMxNTkzLDM3LjIwMzgzNTEgTDIzLjQ0OTI1NTUsNjIuMDI3MjI4OSBMNDIuMjU1MDY1OSwzNy4yMDM4MzUxIEM0NS4yMDAwNTQ5LDMzLjMxNTYwNDEgNDYuOTQzNDQ1MSwyOC40OTIzODc2IDQ2Ljk0MzQ0NTEsMjMuMjYwMjI2OCBDNDYuOTQzNDQ1MSwxMC40MTUxMDUyIDM2LjQyMzU3OTcsMCAyMy40NDkxMjY0LDAgQzEwLjQ3NDgwMjIsMCAtMC4wNDUwNjMxODY4LDEwLjQxNTEwNTIgLTAuMDQ1MDYzMTg2OCwyMy4yNjAyMjY4IFoiIGlkPSJQYXRoIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0iIzQ5OTBFMiIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMjMuNDQ5MTI2NCwzOC43NjY4NzQyIEMxNC43OTk0NDc4LDM4Ljc2Njg3NDIgNy43ODY1MDU0OSwzMS44MjQwMjQ3IDcuNzg2NTA1NDksMjMuMjYwMjI2OCBDNy43ODY1MDU0OSwxNC42OTY2ODQ1IDE0Ljc5OTQ0NzgsNy43NTMzMjM3MSAyMy40NDkxMjY0LDcuNzUzMzIzNzEgQzMyLjA5OTA2MzIsNy43NTMzMjM3MSAzOS4xMTE3NDczLDE0LjY5NjY4NDUgMzkuMTExNzQ3MywyMy4yNjAyMjY4IEMzOS4xMTE3NDczLDMxLjgyNDE1MjYgMzIuMDk5MTkyMywzOC43NjY4NzQyIDIzLjQ0OTEyNjQsMzguNzY2ODc0MiBMMjMuNDQ5MTI2NCwzOC43NjY4NzQyIFoiIGlkPSJTaGFwZSIgZmlsbD0iI0ZGRkZGRiIgc2tldGNoOnR5cGU9Ik1TU2hhcGVHcm91cCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"
            })
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }


    render() {
        const style = {
            width: '100%',
            height: '100%'
        }
        const labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
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
                                                                   // label={labels[index % labels.length]}
                                                                   // icon={{url: 'http://maps.google.com/mapfiles/marker.png'}}
                    />) )}
                </Map>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ('AIzaSyASXg9YtZ5fVwJQk3zPGQuaina7Qqt5ZEE')
})(MapWrapper)