import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './round.css';

class Round extends Component{
  handleClick = () => {
    if(confirm('Delete Round?')){
      this.props.deleteRound(this.props.name, this.props.roundStats.key);
    } else {
      return;
    }
  };

  handleEdit = () => {
    const { history } = this.props;
    history.push(`/editRound/${this.props.roundStats.player}/${this.props.roundStats.key}`);
  };

  handleChart = () => {
    const { history } = this.props;
    history.push(`/chart/${this.props.roundStats.player}/${this.props.roundStats.key}`);
  }

  render(){
    const { roundStats } = this.props;
    const holes = Array(18).fill('');
    return (
      <div>
        <section className='round'>
          <div>
            <h1 id="course">{roundStats.course}</h1>
            <p className="rdDetails">{roundStats.date}</p>
            <p className="rdDetails">Rating: {roundStats.rating}</p>
            <p className="rdDetails">Slope: {roundStats.slope}</p>
          </div>
          <div id="rdStats">
            <h5>Tee: {roundStats.tee}</h5>
            <h5>Score: {roundStats.totalScore}</h5>
            <h5>FIR: {roundStats.totalFir}</h5>
            <h5>GIR: {roundStats.totalGir}</h5>
            <h5>Putts: {roundStats.totalPutts}</h5>
          </div>
          <div id="grid">
            <div className="title" id="labels">Hole</div>{holes.map((h, i) => <div className="title" key={i} id={i}>{i + 1}</div>)}
            <div className="title" id="labels">Score</div>{roundStats.holesScore.map((s, i) => <div className="data" key={i} id={i}>{s}</div>)}
            <div className="title" id="labels">FIR</div>{roundStats.fir.map((f, i) => <div className="data" key={i} id={i}>{(f) ? '✓' : ''}</div>)}
            <div className="title" id="labels">GIR</div>{roundStats.gir.map((g, i) => <div className="data" key={i} id={i}>{(g) ? '✓' : ''}</div>)}
            <div className="title" id="labels">Putts</div>{roundStats.putts.map((p, i) => <div className="data" key={i} id={i}>{p}</div>)}
          </div>
          <div id="commentView">
            {roundStats.comment}
          </div>
          <div id='editButtons'>
            <div onClick={this.handleEdit}>Edit ✎</div>
            <div onClick={this.handleChart}>View Chart 📈</div>
            <div onClick={this.handleClick}>Delete Rd 🗑</div>
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(connect(
  null,
  null
)(Round));

