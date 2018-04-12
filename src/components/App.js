import React, { Component } from 'react';
import {
  HashRouter as Router,
  Link
} from 'react-router-dom';

import logo from '../images/logo.svg';
import '../styles/App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Router>
          <ul>
            <li><Link to="/">App</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/inbox">Inbox</Link></li>
          </ul>
        </Router>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

      </div>
    );
  }
}

export default App;
