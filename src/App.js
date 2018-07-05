import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import menuIcon from './menu.svg'
import './responsive.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <img src={menuIcon} className="menu" alt="menu" />
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">MySites in Gracia</h1>
        </header>
          <body>

          </body>
      </div>
    );
  }
}

export default App;
