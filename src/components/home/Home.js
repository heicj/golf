import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getScoreAvg } from './actions';
// import AddRoundForm from '../addRoundForm/AddRoundForm';
class Home extends PureComponent{

  state = {
    charlieAvgScore: '',
    charlieFirAvg: '',
    charlieGirAvg: '',
    charliePuttsAvg: '',
    jeremyAvgScore: ''
  };

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

  componentDidMount(){
    this.props.getScoreAvg('Charlie', 'totalScore', this.handleCharlieAvg);
    this.props.getScoreAvg('Charlie', 'totalFir', this.handleCharlieFirAvg);
    this.props.getScoreAvg('Charlie', 'totalGir', this.handleCharlieGirAvg);
    this.props.getScoreAvg('Charlie', 'totalPutts', this.handleCharliePuttsAvg);

    this.props.getScoreAvg('Jeremy', 'totalScore', this.handleJeremyAvg);
  }
  render(){
    const { charlieAvgScore, charlieFirAvg, charlieGirAvg, charliePuttsAvg, jeremyAvgScore } = this.state;
    return (
      <div>
        <div>Charlie</div>
        <Link to={'/newRound/Charlie'}>Add Round</Link>
        &nbsp;
        <Link to={'/rounds/Charlie'}>View Rounds</Link>
        <div>Avg Score: {charlieAvgScore} </div>
        <div>Avg Fir: {charlieFirAvg}</div>
        <div>Avg Gir: {charlieGirAvg}</div>
        <div>Avg Putts: {charliePuttsAvg}</div>
        <div>Jeremy</div>
        <Link to={'/newRound/Jeremy'}>Add Round</Link>
        &nbsp;
        <Link to={'/rounds/Jeremy'}>View Rounds</Link>
        <div>Avg Score: {jeremyAvgScore}</div>
      </div>
    );
  }
}

export default connect(
  null,
  { getScoreAvg }
)(Home);