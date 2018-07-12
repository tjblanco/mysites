import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import menuIcon from './menu.svg'
import './responsive.css'
import SitesList from "./SitesList";
import MapWrapper from "./MapWrapper"

class App extends Component {
    state = {
        sites: [
            {position: {lat: 41.402367, lng: 2.154347}, title: 'La Terreta. Taverna Valenciana', class: 'Tapas'},
            {position: {lat: 41.404103, lng: 2.156737}, title: 'Vins I Platillos Bar Restaurant', class: 'Tapas'},
            {position: {lat: 41.402952, lng: 2.15791}, title: 'Bar Canigó', class: 'Tapas'},
            {position: {lat: 41.4043009, lng: 2.1549702}, title: 'Intrèpid de Gràcia', class: 'Tapas'},
            {position: {lat: 41.4007937, lng: 2.1587425}, title: 'Messié Pizza', class: 'Pizza'},
            {position: {lat: 41.401499, lng: 2.155414}, title: 'La Gavina', class: 'Pizza'},
            {position: {lat: 41.405009, lng: 2.153935}, title: "Chivuo's", class: 'Burguer'},
            {position: {lat: 41.402015, lng: 2.157232}, title: 'La Vespa Burger Bar', class: 'Burguer'},
            {position: {lat: 41.403539, lng: 2.160304}, title: 'Heliogàbal', class: 'Cocktail Bar'},
            {position: {lat: 41.4040643, lng: 2.1582468}, title: 'Chatelet', class: 'Cocktail Bar'},
            {position: {lat: 41.404438, lng: 2.1568115}, title: 'Gràcia Latina', class: 'Cocktail Bar'},
            {position: {lat: 41.396620, lng: 2.156338}, title: 'Modu Korean Restaurant', class: 'Asian'},
            {position: {lat: 41.399710, lng: 2.157236}, title: 'Kibuka Sushi', class: 'Asian'},
            {position: {lat: 41.403824, lng: 2.148031}, title: 'El Petit Bangkok', class: 'Asian'},
        ],
        classes: ['All','Tapas','Pizza','Burguer','Cocktail Bar','Asian'],
        displaySites: []
    }

    componentDidMount() {
        this.setState({
            displaySites: this.state.sites
        })
    }

    filterOptions= (filter) => {
        if(filter === 'undefined'){
            this.setState({
                displaySites: this.state.sites
            })
        }else if(filter === 'All') {
            this.setState({
                displaySites: this.state.sites
            })
        }else{
            this.setState({
                displaySites: this.state.sites.filter((site) => site.class === filter)
            })
        }
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
            <img onClick={() => (
                document.querySelector('.nav_panel').classList.toggle('hidden')
            )} src={menuIcon} className="menu" alt="menu" />
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">MySites in Gràcia</h1>
        </header>
          <body>
            <SitesList sites={this.state.displaySites} classes={this.state.classes} filterOptions={(filter) => this.filterOptions(filter)}/>
            <MapWrapper sites={this.state.displaySites}/>
          </body>
      </div>

    );
  }
}

export default App;
