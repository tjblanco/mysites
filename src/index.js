import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer'
import {SitesFilterAppContainer} from './SitesFilterApp';
import './index.css';


const store = createStore(reducer)

// convert json into dict for use by the React components
// add mapOn variable to indicate if the marker should be visible
function get_mysites(features) {
    let mysites = []
    features.map(feature => {
        mysites.push({
            title : feature['properties']['title'],
            description : feature['properties']['description'],
            position : [feature['geometry']['coordinates'][0],
                feature['geometry']['coordinates'][1]],
            mapOn: true

        })
    });
    return mysites
}


let features = [{
    type: "Feature",
    geometry: {
        type: "Point",
        coordinates: [41.403824, 2.148031]
    },
    properties: {
        description: "Asian",
        title: "El Petit Bangkok"
    }
},{
    type: "Feature",
    geometry: {
        type: "Point",
        coordinates: [41.399710, 2.157236]
    },
    properties: {
        description: "Asian",
        title: "Kibuka Sushi"
    }
},{
    type: "Feature",
    geometry: {
        type: "Point",
        coordinates: [41.396620, 2.156338]
    },
    properties: {
        description: "Asian",
        title: "Modu Korean Restaurant"
    }
}, {
    type: "Feature",
    geometry: {
        type: "Point",
        coordinates: [41.404438, 2.1568115]
    },
    properties: {
        description: "Cocktail Bar",
        title: "Gràcia Latina"
    }
}, {
    type: "Feature",
    geometry: {
        type: "Point",
        coordinates: [41.4040643, 2.1582468]
    },
    properties: {
        description: "Cocktail Bar",
        title: "Chatelet"
    }
}, {
    type: "Feature",
    geometry: {
        type: "Point",
        coordinates: [41.402015, 2.157232]
    },
    properties: {
        description: "Burguer",
        title: "La Vespa"
    }
}, {
    description: "Feature",
    geometry: {
        description: "Point",
        coordinates: [41.403539, 2.160304]
    },
    properties: {
        description: "Cocktail Bar",
        title: "Heliogàbal"
    }
},{
    type: "Feature",
    geometry: {
        type: "Point",
        coordinates: [41.402367, 2.154347]
    },
    properties: {
        description: "Tapas",
        title: "La Terreta. Taverna Valenciana"
    }
}, {
    description: "Feature",
    geometry: {
        description: "Point",
        coordinates: [41.404103, 2.156737]
    },
    properties: {
        description: "Tapas",
        title: "Vins I Platillos Bar Restaurant"
    }
}, {
    description: "Feature",
    geometry: {
        description: "Point",
        coordinates: [41.402952, 2.15791]
    },
    properties: {
        description: "Tapas",
        title: "Bar Canigó",
    }
}, {
    description: "Feature",
    geometry: {
        description: "Point",
        coordinates: [41.4043009, 2.1549702]
    },
    properties: {
        description: "Tapas",
        title: "Intrèpid de Gràcia"
    }
}, {
    description: "Feature",
    geometry: {
        description: "Point",
        coordinates: [41.4007937, 2.1587425]
    },
    properties: {
        description: "Pizza",
        title: "Messié Pizza"
    }
}, {
    description: "Feature",
    geometry: {
        description: "Point",
        coordinates: [41.401499, 2.155414]
    },
    properties: {
        description: "Pizza",
        title: "La Gavina"
    }
}, {
    description: "Feature",
    geometry: {
        description: "Point",
        coordinates: [41.405009, 2.153935]
    },
    properties: {
        description: "Burguer",
        title: "Chivou's"
    }
}]

set_state(get_mysites(features))

// Set app state
function set_state(mysites) {
    store.dispatch ({
        type: 'SET_STATE',
        state: {
            filters: [
                {id: 'Tapas', inuse: false },
                {id: 'Pizza', inuse: false },
                {id: 'Burguer', inuse: false },
                {id: 'Cocktail Bar', inuse: false },
                {id: 'Asian', inuse: false}
            ],
            markers: mysites,
            gmapMarkers: [],
            showingInfoWindow: "false",
            activeMarker: null,
            selectedTitle: ""
        }
    })
}

ReactDOM.render(
    <Provider store={store}>
        <SitesFilterAppContainer />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();