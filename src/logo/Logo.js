import React, { Component } from 'react';
import logo from '../img/pixilGolfer.ico';

export default class Logo extends Component {
  render() {
    return (
      <div className="row">
        <div className="logo">
          <img src={logo} width="100" height="50" />
        </div>
      </div>
    );
  }
} 