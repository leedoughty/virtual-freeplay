import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'

class NavigationBar extends Component {
  render() {
    return (
      <ul className="menu">
        <Link to="/about">About</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/findus"> Find Us</Link>
      </ul>
    )
  }
}

export default NavigationBar;
