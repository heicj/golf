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
          <div className='stat-cell'>Score: {playerStats.lowScore}</div>
          <div className='stat-cell'>Fir: {playerStats.highFir}</div>
          <div className='stat-cell'>Gir: {playerStats.highGir}</div>
          <div className='stat-cell'>Putts: {playerStats.lowPutts}</div>
        </div>

        <div id='playerWorst'>
          <h2>Worst</h2>
          <div className='stat-cell'>Score: {playerStats.highScore}</div>
          <div className='stat-cell'>Fir: {playerStats.lowFir}</div>
          <div className='stat-cell'>Gir: {playerStats.lowGir}</div>
          <div className='stat-cell'>Putts: {playerStats.highPutts}</div>
        </div>
      </section>
    );
  }
}