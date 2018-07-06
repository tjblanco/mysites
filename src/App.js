import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import menuIcon from './menu.svg'
import './responsive.css'
import SitesList from "./SitesList";
import Map from "./Map"

class App extends Component {
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
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <img onClick={() => (
                document.querySelector('.nav_panel').classList.toggle('hidden')
            )} src={menuIcon} className="menu" alt="menu" />
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">MySites in Gracia</h1>
        </header>
          <body>
            <SitesList/>
            <Map sites={this.state.sites}/>
          </body>
      </div>
    );
  }
}

export default App;
