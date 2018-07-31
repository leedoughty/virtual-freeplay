import React, { Component } from 'react';
import About from "./About";
import Booking from "./Booking";
import Contact from "./Contact";
import FindUs from "./FindUs";
import PageHeader from "./PageHeader";
import NavigationBar from "./NavigationBar";
import Content from "./Content";
import Footer from "./Footer";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const bgimage = {
  position: "fixed",
  top: 0,
  left: 0,
  opacity: 0.4,
  height: "100%",
  width: "100%",
  "object-fit": "cover",
}

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <PageHeader title="VIRTUAL FREEPLAY"/>
        <NavigationBar/>
        <Footer/>
        <Route path="/about" component={About}/>
        <Route path="/booking" component={Booking}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/findus" component={FindUs}/>
        <Route exact path="/" component={Content}/>

        <img className="bg-image" style={bgimage} src={require("./images/bg.jpg")}/>
      </div>
    </Router>

    );
  }
}

export default App;
