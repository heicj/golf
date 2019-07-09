import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getScoreAvg, getMinMax, getStats } from './actions';
// import AddRoundForm from '../addRoundForm/AddRoundForm';
import './home.css';

class Home extends PureComponent{

  state = {
    charlieAvgScore: '',
    charlieFirAvg: '',
    charlieGirAvg: '',
    charliePuttsAvg: '',
    jeremyAvgScore: '',
    jeremyFirAvg: '',
    jeremyGirAvg: '',
    jeremyPuttsAvg: ''
  };



  handleCharlieStats = (arr) => {
    arr.forEach(obj => {
      let stateObj = {};
      let key = Object.keys(obj);
      let newKey = 'charlie' + key[0];
      stateObj[newKey] = obj[key]; 
      this.setState(stateObj);
    });
  };

  handleJeremyStats = (arr) => {
    arr.forEach(obj => {
      let stateObj = {};
      let key = Object.keys(obj);
      let newKey = 'jeremy' + key[0];
      stateObj[newKey] = obj[key];
      this.setState(stateObj);
    });
  }

  componentDidMount(){
    this.props.getStats('Charlie', this.handleCharlieStats);
    this.props.getStats('Jeremy', this.handleJeremyStats);
   
  }
  render(){
    const { charlieAvgScore, charlieFirAvg, charlieGirAvg, charliePuttsAvg, jeremyAvgScore, jeremyFirAvg, jeremyGirAvg, jeremyPuttsAvg, charlieLowFir, charlieLowGir, charlieLowPutts, charlieLowScore, jeremyLowScore, jeremyLowGir, jeremyLowFir, jeremyLowPutts, charlieHighScore, charlieHighFir, charlieHighGir, charlieHighPutts, jeremyHighScore, jeremyHighFir, jeremyHighGir, jeremyHighPutts } = this.state;
    return (
      <div id="mainSection">
        <div className='playerBox'>
          <div className='player'>Charlie</div>
          <div className='statDiv'>
            <Link to={'/newRound/Charlie'}>Add Round</Link>
            &nbsp;
            <Link to={'/rounds/Charlie'}>View Rounds</Link>
          </div>
          <section className='statsSection'>
            <div className='statColumn'>
              <h2>Averages</h2>
              <div className='statDiv'>Score: {charlieAvgScore} </div>
              <div className='statDiv'>Fir: {charlieFirAvg}</div>
              <div className='statDiv'>Gir: {charlieGirAvg}</div>
              <div className='statDiv'>Putts: {charliePuttsAvg}</div>
            </div>
            <div className='statColumn'>
              <h2>Lows</h2>
              <div className ='statDiv'>Score: {charlieLowScore}</div>
              <div className ='statDiv'>FIR: {charlieLowFir}</div>
              <div className ='statDiv'>GIR: {charlieLowGir}</div>
              <div className ='statDiv'>Putts: {charlieLowPutts}</div>
            </div>
            <div className='statColumn'>
              <h2>Highs</h2>
              <div className ='statDiv'>Score: {charlieHighScore}</div>
              <div className ='statDiv'>FIR: {charlieHighFir}</div>
              <div className ='statDiv'>GIR: {charlieHighGir}</div>
              <div className ='statDiv'>Putts: {charlieHighPutts}</div>
            </div>
          </section>
        </div>
        <div className='playerBox'>
          <div className='player'>Jeremy</div>
          <div className='statDiv'>
            <Link to={'/newRound/Jeremy'}>Add Round</Link>
            &nbsp;
            <Link to={'/rounds/Jeremy'}>View Rounds</Link>
          </div>
          <section className='statsSection'>
            <div className='statColumn'>
              <h2>Averages</h2>
              <div className='statDiv'>Score: {jeremyAvgScore}</div>
              <div className='statDiv'>Fir: {jeremyFirAvg}</div>
              <div className='statDiv'>Gir: {jeremyGirAvg}</div>
              <div className='statDiv'>Putts: {jeremyPuttsAvg}</div>
            </div>
            <div className='statColumn'>
              <h2>Lows</h2>
              <div className ='statDiv'>Score: {jeremyLowScore}</div>
              <div className ='statDiv'>FIR: {jeremyLowFir}</div>
              <div className ='statDiv'>GIR: {jeremyLowGir}</div>
              <div className ='statDiv'>Putts: {jeremyLowPutts}</div>
            </div>
            <div className='statColumn'>
              <h2>Highs</h2>
              <div className ='statDiv'>Score: {jeremyHighScore}</div>
              <div className ='statDiv'>FIR: {jeremyHighFir}</div>
              <div className ='statDiv'>GIR: {jeremyHighGir}</div>
              <div className ='statDiv'>Putts: {jeremyHighPutts}</div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { getScoreAvg, getMinMax, getStats }
)(Home);