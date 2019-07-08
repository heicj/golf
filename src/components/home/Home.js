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

  names = ['charlieAvgScore', 'charlieFirAvg', 'charlieGirAvg', 'charliePuttsAvg', 'jeremyAvgScore', 'jeremyFirAvg', 'jeremyGirAvg', 'jeremyPuttsAvg']
   
  
  handleStats = (arr) => {
    console.log(arr);
  }
  handleCharlieAvg = (avgScore) => {
    this.setState({ charlieAvgScore: avgScore.toFixed(2) });
  };

  handleCharlieFirAvg = (avgScore) => {
    this.setState({ charlieFirAvg: avgScore.toFixed(2) });
  };

  handleCharlieGirAvg = (avgScore) => {
    this.setState({ charlieGirAvg: avgScore.toFixed(2) });
  };

  handleCharliePuttsAvg = (avgScore) => {
    this.setState({ charliePuttsAvg: avgScore.toFixed(2) });
  };

  handleCharlieLowScore = (lowScore) => {
    this.setState({ charlieLowScore: lowScore });
  }
  handleCharlieLowFir = (fir) => {
    this.setState({ charlieLowFir: fir });
  }
  handleCharlieLowGir = (gir) => {
    this.setState({ charlieLowGir: gir });
  }

  handleCharlieLowPutts = (putts) => {
    this.setState({ charlieLowPutts: putts });
  }

  handleCharlieHighScore = (highScore) => {
    this.setState({ charlieHighScore: highScore });
  }
  handleCharlieHighFir = (fir) => {
    this.setState({ charlieHighFir: fir });
  }
  handleCharlieHighGir = (gir) => {
    this.setState({ charlieHighGir: gir });
  }

  handleCharlieHighPutts = (putts) => {
    this.setState({ charlieHighPutts: putts });
  }

  handleJeremyAvg = (avgScore) => {
    this.setState({ jeremyAvgScore: avgScore.toFixed(2) });
  };

  handleJeremyFirAvg = (avgScore) => {
    this.setState({ jeremyFirAvg: avgScore.toFixed(2) });
  };
  
  handleJeremyGirAvg = (avgScore) => {
    this.setState({ jeremyGirAvg: avgScore.toFixed(2) });
  };
  handleJeremyPuttsAvg = (avgScore) => {
    this.setState({ jeremyPuttsAvg: avgScore.toFixed(2) });
  };

  handleJeremyLowScore = (lowScore) => {
    this.setState({ jeremyLowScore: lowScore });
  }
  handleJeremyLowFir = (fir) => {
    this.setState({ jeremyLowFir: fir });
  }
  handleJeremyLowGir = (gir) => {
    this.setState({ jeremyLowGir: gir });
  }

  handleJeremyLowPutts = (putts) => {
    this.setState({ jeremyLowPutts: putts });
  }

  handleJeremyHighScore = (highScore) => {
    this.setState({ jeremyHighScore: highScore });
  }
  handleJeremyHighFir = (fir) => {
    this.setState({ jeremyHighFir: fir });
  }
  handleJeremyHighGir = (gir) => {
    this.setState({ jeremyHighGir: gir });
  }

  handleJeremyHighPutts = (putts) => {
    this.setState({ jeremyHighPutts: putts });
  }

  componentDidMount(){
    this.props.getStats('Charlie', this.handleStats);
    this.props.getScoreAvg('Charlie', 'totalScore', this.handleCharlieAvg);
    this.props.getScoreAvg('Charlie', 'totalFir', this.handleCharlieFirAvg);
    this.props.getScoreAvg('Charlie', 'totalGir', this.handleCharlieGirAvg);
    this.props.getScoreAvg('Charlie', 'totalPutts', this.handleCharliePuttsAvg);
    this.props.getMinMax('Charlie', 'totalScore', 'min', this.handleCharlieLowScore);
    this.props.getMinMax('Charlie', 'totalFir', 'min', this.handleCharlieLowFir);
    this.props.getMinMax('Charlie', 'totalGir', 'min', this.handleCharlieLowGir);
    this.props.getMinMax('Charlie', 'totalPutts', 'min', this.handleCharlieLowPutts);
    this.props.getMinMax('Charlie', 'totalScore', 'max', this.handleCharlieHighScore);
    this.props.getMinMax('Charlie', 'totalFir', 'max', this.handleCharlieHighFir);
    this.props.getMinMax('Charlie', 'totalGir', 'max', this.handleCharlieHighGir);
    this.props.getMinMax('Charlie', 'totalPutts', 'max', this.handleCharlieHighPutts);

    this.props.getScoreAvg('Jeremy', 'totalScore', this.handleJeremyAvg);
    this.props.getScoreAvg('Jeremy', 'totalFir', this.handleJeremyFirAvg);
    this.props.getScoreAvg('Jeremy', 'totalGir', this.handleJeremyGirAvg);
    this.props.getScoreAvg('Jeremy', 'totalPutts', this.handleJeremyPuttsAvg);
    this.props.getMinMax('Jeremy', 'totalScore', 'min', this.handleJeremyLowScore);
    this.props.getMinMax('Jeremy', 'totalFir', 'min', this.handleJeremyLowFir);
    this.props.getMinMax('Jeremy', 'totalGir', 'min', this.handleJeremyLowGir);
    this.props.getMinMax('Jeremy', 'totalPutts', 'min', this.handleJeremyLowPutts);
    this.props.getMinMax('Jeremy', 'totalScore', 'max', this.handleJeremyHighScore);
    this.props.getMinMax('Jeremy', 'totalFir', 'max', this.handleJeremyHighFir);
    this.props.getMinMax('Jeremy', 'totalGir', 'max', this.handleJeremyHighGir);
    this.props.getMinMax('Jeremy', 'totalPutts', 'max', this.handleJeremyHighPutts);
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