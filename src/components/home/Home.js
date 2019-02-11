import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getScoreAvg } from './actions';
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

  componentDidMount(){
    this.props.getScoreAvg('Charlie', 'totalScore', this.handleCharlieAvg);
    this.props.getScoreAvg('Charlie', 'totalFir', this.handleCharlieFirAvg);
    this.props.getScoreAvg('Charlie', 'totalGir', this.handleCharlieGirAvg);
    this.props.getScoreAvg('Charlie', 'totalPutts', this.handleCharliePuttsAvg);

    this.props.getScoreAvg('Jeremy', 'totalScore', this.handleJeremyAvg);
    this.props.getScoreAvg('Jeremy', 'totalFir', this.handleJeremyFirAvg);
    this.props.getScoreAvg('Jeremy', 'totalGir', this.handleJeremyGirAvg);
    this.props.getScoreAvg('Jeremy', 'totalPutts', this.handleJeremyPuttsAvg);
  }
  render(){
    const { charlieAvgScore, charlieFirAvg, charlieGirAvg, charliePuttsAvg, jeremyAvgScore, jeremyFirAvg, jeremyGirAvg, jeremyPuttsAvg } = this.state;
    return (
      <div id="mainSection">
        <div className='playerBox'>
          <div className='player'>Charlie</div>
          <div>
            <Link to={'/newRound/Charlie'}>Add Round</Link>
            &nbsp;
            <Link to={'/rounds/Charlie'}>View Rounds</Link>
          </div>
          <div>Avg Score: {charlieAvgScore} </div>
          <div>Avg Fir: {charlieFirAvg}</div>
          <div>Avg Gir: {charlieGirAvg}</div>
          <div>Avg Putts: {charliePuttsAvg}</div>
        </div>
        <div className='playerBox'>
          <div className='player'>Jeremy</div>
          <div>
            <Link to={'/newRound/Jeremy'}>Add Round</Link>
            &nbsp;
            <Link to={'/rounds/Jeremy'}>View Rounds</Link>
          </div>
          <div>Avg Score: {jeremyAvgScore}</div>
          <div>Avg Fir: {jeremyFirAvg}</div>
          <div>Avg Gir: {jeremyGirAvg}</div>
          <div>Avg Putts: {jeremyPuttsAvg}</div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { getScoreAvg }
)(Home);