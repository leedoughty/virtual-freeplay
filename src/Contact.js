import React, { Component } from 'react';
import './App.css';

class Contact extends Component {
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

export default Contact;
