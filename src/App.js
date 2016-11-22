import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/common/header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="col-md-4 col-md-offset-4">
          <p><Header /></p>
          {this.props.children}
        </div>
      </div>
    );
  }
}



export default App;

