import React, { Component } from 'react';

class FindUs extends Component {
  render() {
    const iframeStyle = {border:0};
    return (
      <div className="main" >
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.3770755909827!2d-0.13766134881726336!3d50.824179079428276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487585a025350cbb%3A0xd4f77ecdea66826b!2s58-67+Grand+Parade%2C+Brighton+BN2+0JY!5e0!3m2!1sen!2suk!4v1533064017777" width="600" height="450" frameborder="0" style={iframeStyle} allowfullscreen></iframe></div>
    );
  }
}

export default FindUs;
