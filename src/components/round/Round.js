import React, { Component } from 'react';
import './round.css';

export default class Round extends Component{
  handleClick = () => {
    if(confirm('Delete Round?')){
      this.props.deleteRound(this.props.name, this.props.roundStats.key);
    } else {
      return;
    }
  };

  render(){
    const { roundStats } = this.props;
    const holes = Array(18).fill('');
    return (
      <div>
        <section className='round'>
          <div>
            <h1 id="course">{roundStats.course}</h1>
            <p id="date">{roundStats.date}</p>
          </div>
          <div id="rdStats">
            <h5>Score: {roundStats.totalScore}</h5>
            <h5>FIR: {roundStats.totalFir}</h5>
            <h5>GIR: {roundStats.totalGir}</h5>
            <h5>Putts: {roundStats.totalPutts}</h5>
          </div>
          <div id="grid">
            <div className="title">Hole</div>{holes.map((h, i) => <div className="title" key={i} id={i}>{i + 1}</div>)}
            <div className="title">Score</div>{roundStats.holesScore.map((s, i) => <div className="title" key={i} id={i}>{s}</div>)}
            <div className="title">FIR</div>{roundStats.fir.map((f, i) => <div className="title" key={i} id={i}>{(f) ? '✓' : ''}</div>)}
            <div className="title">GIR</div>{roundStats.gir.map((g, i) => <div className="title" key={i} id={i}>{(g) ? '✓' : ''}</div>)}
            <div className="title">Putts</div>{roundStats.putts.map((p, i) => <div className="title" key={i} id={i}>{p}</div>)}
          </div>
          <div id='editButtons'>
            {/* <div>✎</div> */}
            <div onClick={this.handleClick}>Delete Rd 🗑</div>
          </div>
        </section>
      </div>
    );
  }
}