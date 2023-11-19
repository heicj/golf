import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPlayerStats, getStats, getAveragesLastFiveRounds } from './actions';
import { coursesPlayedList } from '../coursesPlayed/actions';
import './home.css';

class Home extends PureComponent{

  state = {
    Charlie: {},
    Jeremy: {},
    charlieLastFiveAvgs: {},
    jeremyLastFiveAvgs: {}
  };

  handleCharlieLastFiveAverages = (obj) => {
    this.setState({ 'charlieLastFiveAvgs': obj });
  };

  handleJeremyLastFiveAverages = (obj) => {
    this.setState({ 'jeremyLastFiveAvgs': obj });
  };

  handleStats = (obj) => {
    let o = {};
    let p = obj['player'];
    o[p] = obj;
    this.setState(o);
  };

  handleLastFiveRounds = (obj) => {
    let o = {};
    let p = obj.player.toLowerCase() + 'LastFiveAvgs';
    o[p] = obj;
    this.setState(o);
  }

  componentDidMount(){
    // this.props.coursesPlayedList(['Charlie', 'Jeremy']);
    getAveragesLastFiveRounds('Charlie', this.handleLastFiveRounds);
    getAveragesLastFiveRounds('Jeremy', this.handleLastFiveRounds);

    this.props.getPlayerStats('Charlie', this.handleStats);
    this.props.getPlayerStats('Jeremy', this.handleStats);
  }
  render(){
    const { Charlie, Jeremy, charlieLastFiveAvgs, jeremyLastFiveAvgs } = this.state;
    return (
      <div id="mainSection">
        <div className='playerBox'>
          <div className='player'>Charlie</div>
          <div className='rdTotals'>Total Rounds: {Charlie.totalRounds}</div>
          <div>Handicap: {Charlie.playerHandicap}</div>
          <div className='statDiv'>
            <Link to={'/newRound/Charlie'}>Add Round</Link>
            &nbsp;
            <Link to={'/rounds/Charlie'}>View Rounds</Link>
          </div>
          <section className='statsSection'>
            <div className='statColumn'>
              <h2>Averages</h2>
              <div className='statDiv'>Score: {Charlie.avgScore} </div>
              <div className='statDiv'>Fir: {Charlie.avgFir}</div>
              <div className='statDiv'>Gir: {Charlie.avgGir}</div>
              <div className='statDiv'>Putts: {Charlie.avgPutts}</div>
            </div>
            <div className='statColumn'>
              <h2>Last 5 Rds Avgs</h2>
              <div className='statDiv'>Score: {charlieLastFiveAvgs.avgScore}</div>
              <div className='statDiv'>Fir: {charlieLastFiveAvgs.avgFir}</div>
              <div className='statDiv'>Gir: {charlieLastFiveAvgs.avgGir}</div>
              <div className='statDiv'>Putts: {charlieLastFiveAvgs.avgPutts}</div>
            </div>
            <div className='statColumn'>
              <h2>Best</h2>
              <Link to={{ pathname: '/viewRounds', state: Charlie.lowScoreRounds }}>
                <div className ='statDiv'>Score: {Charlie.lowScore}</div>
              </Link>
              <Link to={{ pathname: '/viewRounds', state: Charlie.highFirRounds }}>
                <div className ='statDiv'>FIR: {Charlie.highFir}</div>
              </Link>
              <Link to={{ pathname: '/viewRounds', state: Charlie.highGirRounds }}>
                <div className ='statDiv'>GIR: {Charlie.highGir}</div>
              </Link>
              <Link to={{ pathname: '/viewRounds', state: Charlie.LowPuttsRounds }}>
                <div className ='statDiv'>Putts: {Charlie.lowPutts}</div>
              </Link>
            </div>
            <div className='statColumn'>
              <h2>Worst</h2>
              <Link to={{ pathname: '/viewRounds', state: Charlie.highScoreRounds }}>
                <div className ='statDiv'>Score: {Charlie.highScore}</div>
              </Link>
              <Link to={{ pathname: '/viewRounds', state: Charlie.lowFirRounds }}>
                <div className ='statDiv'>FIR: {Charlie.lowFir}</div>
              </Link>
              <Link to={{ pathname: '/viewRounds', state: Charlie.lowGirRounds }}> 
                <div className ='statDiv'>GIR: {Charlie.lowGir}</div>
              </Link>
              <Link to={{ pathname: 'viewRounds', state: Charlie.highPuttsRounds }}> 
                <div className ='statDiv'>Putts: {Charlie.highPutts}</div>
              </Link>
            </div>
          </section>
        </div>
        <div className='playerBox'>
          <div className='player'>Jeremy</div>
          <div className='rdTotals'>Total Rounds: {Jeremy.totalRounds}</div>
          <div>Handicap: {Jeremy.playerHandicap}</div>
          <div className='statDiv'>
            <Link to={'/newRound/Jeremy'}>Add Round</Link>
            &nbsp;
            <Link to={'/rounds/Jeremy'}>View Rounds</Link>
          </div>
          <section className='statsSection'>
            <div className='statColumn'>
              <h2>Averages</h2>
              <div className='statDiv'>Score: {Jeremy.avgScore}</div>
              <div className='statDiv'>Fir: {Jeremy.avgFir}</div>
              <div className='statDiv'>Gir: {Jeremy.avgGir}</div>
              <div className='statDiv'>Putts: {Jeremy.avgPutts}</div>
            </div>
            <div className='statColumn'>
              <h2>Last 5 Rds Avgs</h2>
              <div className='statDiv'>Score: {jeremyLastFiveAvgs.avgScore}</div>
              <div className='statDiv'>Fir: {jeremyLastFiveAvgs.avgFir}</div>
              <div className='statDiv'>Gir: {jeremyLastFiveAvgs.avgGir}</div>
              <div className='statDiv'>Putts: {jeremyLastFiveAvgs.avgPutts}</div>
            </div>
            <div className='statColumn'>
              <h2>Best</h2>
              <Link to={{ pathname: '/viewRounds', state: Jeremy.lowScoreRounds }}>
                <div className ='statDiv'>Score: {Jeremy.lowScore}</div>
              </Link>
              <Link to={{ pathname: '/viewRounds', state: Jeremy.highFirRounds }}>
                <div className ='statDiv'>FIR: {Jeremy.highFir}</div>
              </Link>
              <Link to={{ pathname: '/viewRounds', state: Jeremy.highGirRounds }}>
                <div className ='statDiv'>GIR: {Jeremy.highGir}</div>
              </Link>
              <Link to={{ pathname: '/viewRounds', state: Jeremy.lowPuttsRounds }}>
                <div className ='statDiv'>Putts: {Jeremy.lowPutts}</div>
              </Link>
            </div>
            <div className='statColumn'>
              <h2>Worst</h2>
              <Link to={{ pathname: '/viewRounds', state: Jeremy.highScoreRounds }}>
                <div className ='statDiv'>Score: {Jeremy.highScore}</div>
              </Link>
              <Link to={{ pathname: '/viewRounds', state: Jeremy.lowFirRounds }}>
                <div className ='statDiv'>FIR: {Jeremy.lowFir}</div>
              </Link> 
              <Link to={{ pathname: '/viewRounds', state: Jeremy.lowGirRounds }}>
                <div className ='statDiv'>GIR: {Jeremy.lowGir}</div>
              </Link>
              <Link to={{ pathname: 'viewRounds', state: Jeremy.highPuttsRounds }}>
                <div className ='statDiv'>Putts: {Jeremy.highPutts}</div>
              </Link> 
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { getPlayerStats, getStats, coursesPlayedList }
)(Home);