import React, { Component } from 'react';
import About from "./About";
import Booking from "./Booking";
import Contact from "./Contact";
import FindUs from "./FindUs";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">VIRTUAL FREEPLAY</h1>
        </header>
        <img className="bg-image" src={require("./images/bg.jpg")}/>
      </div>
    );
  }
}

export default App;
