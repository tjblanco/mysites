import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import menuIcon from './menu.svg'
import './responsive.css'
import SitesList from "./SitesList";
import Map from "./Map"

class App extends Component {
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
            <Map/>
          </body>
      </div>
    );
  }
}

export default App;
