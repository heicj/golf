import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getScoreAvg } from './actions';
// import AddRoundForm from '../addRoundForm/AddRoundForm';
class Home extends PureComponent{

  state = {
    charlieAvgScore: '',
    jeremyAvgScore: ''
  };

  handleCharlieAvg = (avgScore) => {
    this.setState({ charlieAvgScore: avgScore.toFixed(2) });
  };

  handleJeremyAvg = (avgScore) => {
    this.setState({ jeremyAvgScore: avgScore.toFixed(2) });
  };

  componentDidMount(){
    this.props.getScoreAvg('Charlie', this.handleCharlieAvg);
    this.props.getScoreAvg('Jeremy', this.handleJeremyAvg);
  }
  render(){
    const { charlieAvgScore, jeremyAvgScore } = this.state;
    return (
      <div>
        <div>Charlie</div>
        <Link to={'/newRound/Charlie'}>Add Round</Link>
        <Link to={'/rounds/Charlie'}>View Rounds</Link>
        <div>Avg Score: {charlieAvgScore} </div>
        <div>Jeremy</div>
        <Link to={'/newRound/Jeremy'}>Add Round</Link>
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