import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './PlayerStatBox.css';

export default class PlayerStatBox extends PureComponent {
  componentDidMount(){}

  render(){
    const { playerStats, playerName } = this.props;
    return (
      <section className='statBoxContainer'>
        <div id='playerArea'>
          <div>
            <h2 id='player-name-h2'>{playerName}</h2>
            <div>Rounds Played: {playerStats.totalRounds}</div>
            <div>Handicap: {playerStats.playerHandicap}</div>
          </div>
          <div>
            <div>
              <Link id="main-link" to={`/newRound/${playerName}`}>Add Round</Link>
            </div>
            <div>
              <Link id="main-link" to={`/rounds/${playerName}`}>View Rounds</Link>
            </div>
          </div>
        </div>

        <div id='playerAverages'>
          <h2>Averages</h2>
          <div className='stat-cell'>Score: {playerStats.avgScore}</div>
          <div className='stat-cell'>Fir: {playerStats.avgFir}</div>
          <div className='stat-cell'>Gir: {playerStats.avgGir}</div>
          <div className='stat-cell'>Putts: {playerStats.avgPutts}</div>
        </div>

        
        <div id='playerLast5Avgs'>
          <h2>Last 5 Rds Avgs</h2>
          <div className='stat-cell'>Score: {playerStats.averagesLastFiveRounds.avgScore}</div>
          <div className='stat-cell'>Fir: {playerStats.averagesLastFiveRounds.avgFir}</div>
          <div className='stat-cell'>Gir: {playerStats.averagesLastFiveRounds.avgGir}</div>
          <div className='stat-cell'>Putts: {playerStats.averagesLastFiveRounds.avgPutts}</div>
        </div>

        <div id='playerBest'>
          <h2>Best</h2>
          <Link to={{ pathname: '/viewRounds', state: playerStats.lowScoreRounds, statCategory: 'Low Score' }}>
            <div className='stat-cell'>Score: {playerStats.lowScore}</div>
          </Link>
          <Link to={{ pathname: '/viewRounds', state: playerStats.highFirRounds, statCategory: 'High FIR' }}>
            <div className='stat-cell'>Fir: {playerStats.highFir}</div>
          </Link>
          <Link to={{ pathname: '/viewRounds', state: playerStats.highGirRounds, statCategory: 'High GIR' }}>
            <div className='stat-cell'>Gir: {playerStats.highGir}</div>
          </Link>
          <Link to={{ pathname: '/viewRounds', state: playerStats.lowPuttsRounds, statCategory: 'Low Putts' }}>
            <div className='stat-cell'>Putts: {playerStats.lowPutts}</div>
          </Link>
        </div>

        <div id='playerWorst'>
          <h2>Worst</h2>
          <Link to={{ pathname: '/viewRounds', state: playerStats.highScoreRounds, statCategory: 'High Score' }}>
            <div className='stat-cell'>Score: {playerStats.highScore}</div>
          </Link>
          <Link to={{ pathname: '/viewRounds', state: playerStats.lowFirRounds, statCategory: 'Low FIR' }}>
            <div className='stat-cell'>Fir: {playerStats.lowFir}</div>
          </Link>
          <Link to={{ pathname: '/viewRounds', state: playerStats.lowGirRounds, statCategory: 'Low GIR' }}>
            <div className='stat-cell'>Gir: {playerStats.lowGir}</div>
          </Link>
          <Link to={{ pathname: '/viewRounds', state: playerStats.highPuttsRounds, statCategory: 'High Putts' }}>
            <div className='stat-cell'>Putts: {playerStats.highPutts}</div>
          </Link>
        </div>
      </section>
    );
  }
}