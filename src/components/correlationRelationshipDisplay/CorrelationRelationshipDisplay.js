import React, { Component } from 'react';
import { player } from '../addRoundForm/reducers';
import './correlationRelationshipDisplay.css';

export default class CorrelationRelationshipDisplay extends Component {


  render(){
    const { playerCorrelations } = this.props;
    return (
      <section id='correlation-section'>
        <div className='wrapper-div'>
          <h2 className="headers">Player</h2>
          <div>{playerCorrelations.player}</div>
        </div>
        <div className='wrapper-div'>
          <h2 className="headers">FIR to GIR Phi Correlation</h2>
          <div>{playerCorrelations.firGirPhiCorr}</div>
        </div>
        <div className='wrapper-div'>
          <h2 className="headers">GIR to Putts Pearson Correlation</h2>
          <div>{playerCorrelations.girPuttsPearsonCorrelation}</div>
        </div>
      </section>
    );
  }
}