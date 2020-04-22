import React, { Component } from 'react';
import './holeAverages.css';

export default class HoleAverages extends Component {
  render(){
    const { rdStats } = this.props;
    const holes = Array(18).fill('');
    return (
      <section id='holeAvgSection'>
        <div className='courseName'>{rdStats.course}</div>
        
        <div className='timesPlayed'>Times Played: {rdStats.timesPlayed}</div>

        <div id='avgGrid'>
          <div className="avgTitle" id="avgLabels">Hole</div>{holes.map((h, i) => <div className="avgTitle" key={i} id={i}>{i + 1}</div>)}
          <div className="avgTitle" id="avgLabels">Score</div>{rdStats.holesScore.map((s, i) => <div className="data" key={i} id={i}>{s}</div>)}
          <div className="avgTitle" id="avgLabels">FIR</div>{rdStats.fir.map((f, i) => <div className="data" key={i} id={i}>{f}</div>)}
          <div className="avgTitle" id="avgLabels">GIR</div>{rdStats.gir.map((g, i) => <div className="data" key={i} id={i}>{g}</div>)}
          <div className="avgTitle" id="avgLabels">Putts</div>{rdStats.putts.map((p, i) => <div className="data" key={i} id={i}>{p}</div>)}

        </div>

      </section>
    )
  }
}