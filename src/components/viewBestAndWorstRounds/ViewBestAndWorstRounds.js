import React, { Component } from 'react';
import Round from '../round/Round';
import './viewBestAndWorstRounds.css';


export default class ViewBestAndWorstRounds extends Component {
  
  
  render() {
    let rounds = this.props.location.state;
    return (
      <div>
        <h1 id="player-name" className='header'>{ rounds[0].player }</h1>
        <h2 id="category" className='header'>{ this.props.location.statCategory }</h2>
        {
          rounds.map((r, i) => <Round name={r.player} key={i}  id={r.key} roundStats={r} />)
        }
      </div>
    );
  }
}