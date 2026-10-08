import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import  PlayerStatBox from '../playerStatBox/PlayerStatBox';
import { appUsers } from '../../services/firebase';
import { getPlayerStats, getStats, getAveragesLastFiveRounds } from './actions';
import { coursesPlayedList } from '../coursesPlayed/actions';
import './home.css';

class Home extends PureComponent{

  state = {
    Charlie: { averagesLastFiveRounds: {} },
    Jeremy: { averagesLastFiveRounds: {} },
    Evan: { averagesLastFiveRounds: {} },
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
    });
  }

  render(){
    const { Charlie, Jeremy, Evan } = this.state;
    return (
      <div id="mainSection">
        <PlayerStatBox playerStats={Charlie} playerName={'Charlie'}/>
        <PlayerStatBox playerStats={Jeremy} playerName={'Jeremy'}/>
        <PlayerStatBox playerStats={Evan} playerName={'Evan'}/>
    
      </div>
    );
  }
}

export default connect(
  state => ({
    menuView: state.menuVisibility
  }),
  { getPlayerStats, getStats, coursesPlayedList }
)(Home);