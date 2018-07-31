import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'

class PageHeader extends Component {
  render() {
    return (
      <header className="header">
        <Link to="/">
          <h1 className="title">{this.props.title}</h1>
        </Link>
      </header>
    )
  }
}

export default PageHeader;
