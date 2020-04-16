import React, { Component } from 'react';
import './holeAverages.css';

export default class HoleAverages extends Component {
  render(){
    const { rdStats } = this.props;
    const holes = Array(18).fill('');
    return (
      <section>
        <div>{rdStats.course}</div>
        <div id='avgGrid'>
          <div className="title" id="labels">Hole</div>{holes.map((h, i) => <div className="title" key={i} id={i}>{i + 1}</div>)}
          <div className="title" id="labels">Score</div>{rdStats.holesScore.map((s, i) => <div className="data" key={i} id={i}>{s}</div>)}
          <div className="title" id="labels">FIR</div>{rdStats.fir.map((f, i) => <div className="data" key={i} id={i}>{f}</div>)}
          <div className="title" id="labels">GIR</div>{rdStats.gir.map((g, i) => <div className="data" key={i} id={i}>{g}</div>)}
          <div className="title" id="labels">Putts</div>{rdStats.putts.map((p, i) => <div className="data" key={i} id={i}>{p}</div>)}

        </div>

      </section>
    )
  }
}