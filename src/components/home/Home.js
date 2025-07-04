import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { appUsers } from '../../services/firebase';
import { getPlayerStats, getStats, getAveragesLastFiveRounds } from './actions';
import { coursesPlayedList } from '../coursesPlayed/actions';
import './home.css';

class Home extends PureComponent{

  state = {
    Charlie: {},
    Jeremy: {},
    Evan: {},
    charlieLastFiveAvgs: {},
    jeremyLastFiveAvgs: {},
    evanLastFiveAvgs: {}
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
  };

  componentDidMount(){

    appUsers.forEach(user => {
      this.props.getPlayerStats(user, this.handleStats);
      getAveragesLastFiveRounds(user, this.handleLastFiveRounds);
    });
  }

  render(){
    const { Charlie, Jeremy, Evan, charlieLastFiveAvgs, jeremyLastFiveAvgs, evanLastFiveAvgs } = this.state;
    return (
      <div id="mainSection">
        <div className='playerBox'>
          <div className='player'>Charlie</div>
          <div className='rdTotals'>Total Rounds: {Charlie.totalRounds}</div>
          <div>Handicap: {Charlie.playerHandicap}</div>
          <div className='statDiv'>
            <Link id="main-link" to={'/newRound/Charlie'}>Add Round</Link>
            &nbsp;
            <Link id="main-link" to={'/rounds/Charlie'}>View Rounds</Link>
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
              <Link to={{ pathname: '/viewRounds', state: Charlie.lowScoreRounds, statCategory: 'Low Score' }}>
                <div className ='statDiv'>Score: {Charlie.lowScore}</div>
              </Link>
              <Link to={{ pathname: '/viewRounds', state: Charlie.highFirRounds, statCategory: 'High FIR'  }}>
                <div className ='statDiv'>FIR: {Charlie.highFir}</div>
              </Link>
              <Link to={{ pathname: '/viewRounds', state: Charlie.highGirRounds, statCategory: 'High GIR'  }}>
                <div className ='statDiv'>GIR: {Charlie.highGir}</div>
              </Link>
              <Link to={{ pathname: '/viewRounds', state: Charlie.lowPuttsRounds, statCategory: 'Low Putts'  }}>
                <div className ='statDiv'>Putts: {Charlie.lowPutts}</div>
              </Link>
            </div>
            <div className='statColumn'>
              <h2>Worst</h2>
              <Link to={{ pathname: '/viewRounds', state: Charlie.highScoreRounds, statCategory: 'High Score'  }}>
                <div className ='statDiv'>Score: {Charlie.highScore}</div>
              </Link>
              <Link to={{ pathname: '/viewRounds', state: Charlie.lowFirRounds, statCategory: 'Low FIR'  }}>
                <div className ='statDiv'>FIR: {Charlie.lowFir}</div>
              </Link>
              <Link to={{ pathname: '/viewRounds', state: Charlie.lowGirRounds, statCategory: 'Low GIR'  }}> 
                <div className ='statDiv'>GIR: {Charlie.lowGir}</div>
              </Link>
              <Link to={{ pathname: 'viewRounds', state: Charlie.highPuttsRounds, statCategory: 'High Putts'  }}> 
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
            <Link id="main-link" to={'/newRound/Jeremy'}>Add Round</Link>
            &nbsp;
            <Link id="main-link" to={'/rounds/Jeremy'}>View Rounds</Link>
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
              <Link to={{ pathname: '/viewRounds', state: Jeremy.lowScoreRounds, statCategory: 'Low Score' }}>
                <div className ='statDiv'>Score: {Jeremy.lowScore}</div>
              </Link>
              <Link to={{ pathname: '/viewRounds', state: Jeremy.highFirRounds, statCategory: 'High FIR' }}>
                <div className ='statDiv'>FIR: {Jeremy.highFir}</div>
              </Link>
              <Link to={{ pathname: '/viewRounds', state: Jeremy.highGirRounds, statCategory: 'High GIR' }}>
                <div className ='statDiv'>GIR: {Jeremy.highGir}</div>
              </Link>
              <Link to={{ pathname: '/viewRounds', state: Jeremy.lowPuttsRounds, statCategory: 'Low Putts' }}>
                <div className ='statDiv'>Putts: {Jeremy.lowPutts}</div>
              </Link>
            </div>
            <div className='statColumn'>
              <h2>Worst</h2>
              <Link to={{ pathname: '/viewRounds', state: Jeremy.highScoreRounds, statCategory: 'High Score' }}>
                <div className ='statDiv'>Score: {Jeremy.highScore}</div>
              </Link>
              <Link to={{ pathname: '/viewRounds', state: Jeremy.lowFirRounds, statCategory: 'Low FIR' }}>
                <div className ='statDiv'>FIR: {Jeremy.lowFir}</div>
              </Link> 
              <Link to={{ pathname: '/viewRounds', state: Jeremy.lowGirRounds, statCategory: 'Low GIR' }}>
                <div className ='statDiv'>GIR: {Jeremy.lowGir}</div>
              </Link>
              <Link to={{ pathname: 'viewRounds', state: Jeremy.highPuttsRounds, statCategory: 'High Putts' }}>
                <div className ='statDiv'>Putts: {Jeremy.highPutts}</div>
              </Link> 
            </div>
          </section>
        </div>

        <div className='playerBox'>
          <div className='player'>Evan</div>
          <div className='rdTotals'>Total Rounds: {Evan.totalRounds}</div>
          <div>Handicap: {Evan.playerHandicap}</div>
          <div className='statDiv'>
            <Link id="main-link" to={'/newRound/Evan'}>Add Round</Link>
            &nbsp;
            <Link id="main-link" to={'/rounds/Evan'}>View Rounds</Link>
          </div>
          <section className='statsSection'>
            <div className='statColumn'>
              <h2>Averages</h2>
              <div className='statDiv'>Score: {Evan.avgScore}</div>
              <div className='statDiv'>Fir: {Evan.avgFir}</div>
              <div className='statDiv'>Gir: {Evan.avgGir}</div>
              <div className='statDiv'>Putts: {Evan.avgPutts}</div>
            </div>
            <div className='statColumn'>
              <h2>Last 5 Rds Avgs</h2>
              <div className='statDiv'>Score: {evanLastFiveAvgs.avgScore}</div>
              <div className='statDiv'>Fir: {evanLastFiveAvgs.avgFir}</div>
              <div className='statDiv'>Gir: {evanLastFiveAvgs.avgGir}</div>
              <div className='statDiv'>Putts: {evanLastFiveAvgs.avgPutts}</div>
            </div>
            <div className='statColumn'>
              <h2>Best</h2>
              <Link to={{ pathname: '/viewRounds', state: Evan.lowScoreRounds, statCategory: 'Low Score' }}>
                <div className ='statDiv'>Score: {Evan.lowScore}</div>
              </Link>
              <Link to={{ pathname: '/viewRounds', state: Evan.highFirRounds, statCategory: 'High FIR' }}>
                <div className ='statDiv'>FIR: {Evan.highFir}</div>
              </Link>
              <Link to={{ pathname: '/viewRounds', state: Evan.highGirRounds, statCategory: 'High GIR' }}>
                <div className ='statDiv'>GIR: {Evan.highGir}</div>
              </Link>
              <Link to={{ pathname: '/viewRounds', state: Evan.lowPuttsRounds, statCategory: 'Low Putts' }}>
                <div className ='statDiv'>Putts: {Evan.lowPutts}</div>
              </Link>
            </div>
            <div className='statColumn'>
              <h2>Worst</h2>
              <Link to={{ pathname: '/viewRounds', state: Evan.highScoreRounds, statCategory: 'High Score' }}>
                <div className ='statDiv'>Score: {Evan.highScore}</div>
              </Link>
              <Link to={{ pathname: '/viewRounds', state: Evan.lowFirRounds, statCategory: 'Low FIR' }}>
                <div className ='statDiv'>FIR: {Evan.lowFir}</div>
              </Link> 
              <Link to={{ pathname: '/viewRounds', state: Evan.lowGirRounds, statCategory: 'Low GIR' }}>
                <div className ='statDiv'>GIR: {Evan.lowGir}</div>
              </Link>
              <Link to={{ pathname: 'viewRounds', state: Evan.highPuttsRounds, statCategory: 'High Putts' }}>
                <div className ='statDiv'>Putts: {Evan.highPutts}</div>
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