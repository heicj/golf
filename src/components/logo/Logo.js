import React, { Component } from 'react';
const logo = require('../img/pixil-frame-0(1).png');

export default class LogoImg extends Component {
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

