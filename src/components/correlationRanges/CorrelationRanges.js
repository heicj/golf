import React, { Component } from 'react';
import './correlationRanges.css';

export default class CorrelationRanges extends Component {

  render(){
    return (
      <section id="ranges-wrapper">
        <div>+.70 or higher 	Very strong positive relationship</div>
        <div>+.40 to +.69 	Strong positive relationship</div>
        <div>+.30 to +.39 	Moderate positive relationship</div>
        <div>+.20 to +.29 	weak positive relationship</div>
        <div>+.01 to +.19 	No or negligible relationship</div>
        <div>0 	No relationship</div>
        <div>-.01 to -.19 	No or negligible relationship</div>
        <div>-.20 to -.29 	weak negative relationship</div>
        <div>-.30 to -.39 	Moderate negative relationship</div>
        <div>-.40 to -.69 	Strong negative relationship</div>
        <div>-.70 or higher 	Very strong negative relationship</div>
      </section>
    );
  }
}