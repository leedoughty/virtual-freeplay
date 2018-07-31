import React, { Component } from 'react';
import './App.css';

class Contact extends Component {
  render() {
    const iframeStyle = {width:"100%",border:"none"}
    const iframeDiv = {"font-family":"inherit","font-size": "small",color:"#a7a7a7","text-align":"center",display:"block"}
    return (
      <div className="App">
        <iframe height="342"
        allowTransparency="true"
        frameborder="0"
        scrolling="no"
        style={iframeStyle}
        src="https://leedoughty.wufoo.com/embed/z1tstdiq08jyu3v/">
          <a href="https://leedoughty.wufoo.com/forms/z1tstdiq08jyu3v/">
            Fill out my Wufoo form!
          </a>
        </iframe>
        <div id="wuf-adv" style={iframeDiv}>
    <span class="notranslate">
      The easy to use <a href="http://www.wufoo.com/form-builder/">Wufoo form builder</a> helps you make forms easy, fast, and fun.
    </span>
  </div>

      </div>
    );
  }
}

export default Contact;
