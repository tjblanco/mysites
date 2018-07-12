import React from 'react';
import ReactDOM from 'react-dom';

export default class SitesMap extends React.Component {

  renderChildren() {
    const {children} = this.props;
    if (!children) return;
    return React.Children.map(children, c => {
     return React.cloneElement(c, {
       map: this.map,
       google: this.props.google
     });
   })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
      this.forceUpdate()
   }
  }

  // called after the component renders
  loadMap() {
    if (this.props && this.props.google) {
      // google is available\
      const {google} = this.props;
      const maps = google.maps;

    // since the component has already rendered we can grab
    // a ref to the map div so we can properly load the map
    // this is not super react-ish, since ideally React alone
    // touches the DOM
      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
      let zoom = 15;
      let lat = 41.40366;
      let lng = 2.1526901;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })

      this.map = new maps.Map(node, mapConfig);
    }

  //
  }
  render() {
    const style = {
        heigth: '100%',
        minHeigth: '550px'
    }
    return (
      <div>
        <div className='map' style={style} ref='map' >
          {this.renderChildren()}
          Loading map...
        </div>
      </div>
    )
  }
}
