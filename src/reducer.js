import {Map} from 'immutable';

function updateMarker(state, markerIndex, mapOnVal) {
  return state.get('markers')
    .get(markerIndex)
    .update('mapOn', mapOn => mapOnVal);
}

function setState(state, newState) {
  return state.merge(newState);
}

function onMarkerClick(state, marker) {
    if(state.get('activeMarker') != null)
        state.get('activeMarker').setIcon(
            {
                url: 'http://maps.google.com/mapfiles/marker.png'
            })
    marker.setIcon(
        {
            url: 'http://maps.google.com/mapfiles/marker_yellow.png'
        })
    // document.querySelector('.infoWindow').style.display='block';
  return state.merge(Map({
    'activeMarker': marker,
    'selectedTitle': marker.get('title'),
    'showingInfoWindow': true
  }))
}

function addMarker(state, marker) {
  let markers = state.get('gmapMarkers')
  let newMarkers = markers.push(marker)
  return state.update('gmapMarkers', oldmarkers => newMarkers)
}

function changeFilter(state, filter) {
  if(filter !== 'All'){
      let markers = state.get('markers')
      let updatedMarkers = markers
      markers.map((marker,markerIndex) => {
          let mapOn = false
          if(marker.get('description')===filter)
              mapOn = true
          const updatedMarker = updateMarker(state, markerIndex, mapOn)
          updatedMarkers = updatedMarkers.set(markerIndex, updatedMarker)
          return(null)
      })
      if(state.get('activeMarker')){
          document.getElementsByClassName('info')[0].style.display = 'none'
          state.get('activeMarker').setIcon({
              url: 'http://maps.google.com/mapfiles/marker.png'
          })
      }
      return state.merge(Map({
          'markers': updatedMarkers
      }))
  } else {
      let markers = state.get('markers')
      let updatedMarkers = markers
      markers.map((marker,markerIndex) => {
          const updatedMarker = updateMarker(state, markerIndex, true)
          updatedMarkers = updatedMarkers.set(markerIndex, updatedMarker)
          return(null)
      })
      if(state.get('activeMarker')){
          document.getElementsByClassName('info')[0].style.display = 'none'
          state.get('activeMarker').setIcon({
              url: 'http://maps.google.com/mapfiles/marker.png'
          })
      }
      return state.merge(Map({
          'markers': updatedMarkers
      }))
  }

}

export default function(state = Map(), action) {
  switch (action.type) {
    case 'SET_STATE':
      return setState(state, action.state);
    case 'CHANGE_FILTER':
        return changeFilter(state, action.filter);
    case 'MARKER_CLICK':
        return onMarkerClick(state, action.marker)
    case 'ADD_MARKER':
        return addMarker(state, action.marker)
    default:
      return state
  }
}
