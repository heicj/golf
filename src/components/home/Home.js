import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getScoreAvg, getLowest } from './actions';
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

  componentDidMount(){
    this.props.getScoreAvg('Charlie', 'totalScore', this.handleCharlieAvg);
    this.props.getScoreAvg('Charlie', 'totalFir', this.handleCharlieFirAvg);
    this.props.getScoreAvg('Charlie', 'totalGir', this.handleCharlieGirAvg);
    this.props.getScoreAvg('Charlie', 'totalPutts', this.handleCharliePuttsAvg);
    this.props.getLowest('Charlie', 'totalScore', this.handleCharlieLowScore);
    this.props.getLowest('Charlie', 'totalFir', this.handleCharlieLowFir);
    this.props.getLowest('Charlie', 'totalGir', this.handleCharlieLowGir);

    this.props.getScoreAvg('Jeremy', 'totalScore', this.handleJeremyAvg);
    this.props.getScoreAvg('Jeremy', 'totalFir', this.handleJeremyFirAvg);
    this.props.getScoreAvg('Jeremy', 'totalGir', this.handleJeremyGirAvg);
    this.props.getScoreAvg('Jeremy', 'totalPutts', this.handleJeremyPuttsAvg);
    this.props.getLowest('Jeremy', 'totalScore', this.handleJeremyLowScore);
    this.props.getLowest('Jeremy', 'totalFir', this.handleJeremyLowFir);
    this.props.getLowest('Jeremy', 'totalGir', this.handleJeremyLowGir);
  }
  render(){
    const { charlieAvgScore, charlieFirAvg, charlieGirAvg, charliePuttsAvg, jeremyAvgScore, jeremyFirAvg, jeremyGirAvg, jeremyPuttsAvg, charlieLowFir, charlieLowGir, charlieLowScore, jeremyLowScore, jeremyLowGir, jeremyLowFir } = this.state;
    return (
      <div id="mainSection">
        <div className='playerBox'>
          <div className='player'>Charlie</div>
          <div className='statDiv'>
            <Link to={'/newRound/Charlie'}>Add Round</Link>
            &nbsp;
            <Link to={'/rounds/Charlie'}>View Rounds</Link>
          </div>
          <div className='statDiv'>Avg Score: {charlieAvgScore} </div>
          <div className='statDiv'>Avg Fir: {charlieFirAvg}</div>
          <div className='statDiv'>Avg Gir: {charlieGirAvg}</div>
          <div className='statDiv'>Avg Putts: {charliePuttsAvg}</div>
          <div className ='statDiv'>Low Score: {charlieLowScore}</div>
          <div className ='statDiv'>Low FIR: {charlieLowFir}</div>
          <div className ='statDiv'>Low GIR: {charlieLowGir}</div>

        </div>
        <div className='playerBox'>
          <div className='player'>Jeremy</div>
          <div className='statDiv'>
            <Link to={'/newRound/Jeremy'}>Add Round</Link>
            &nbsp;
            <Link to={'/rounds/Jeremy'}>View Rounds</Link>
          </div>
          <div className='statDiv'>Avg Score: {jeremyAvgScore}</div>
          <div className='statDiv'>Avg Fir: {jeremyFirAvg}</div>
          <div className='statDiv'>Avg Gir: {jeremyGirAvg}</div>
          <div className='statDiv'>Avg Putts: {jeremyPuttsAvg}</div>
          <div className ='statDiv'>Low Score: {jeremyLowScore}</div>
          <div className ='statDiv'>Low FIR: {jeremyLowFir}</div>
          <div className ='statDiv'>Low GIR: {jeremyLowGir}</div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { getScoreAvg, getLowest }
)(Home);