import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRounds } from './actions';
// import AddRoundForm from '../addRoundForm/AddRoundForm';
class Home extends PureComponent{

  componentDidMount(){
    // this.props.getRounds('Charlie');
  }
  render(){
    return (
      <div>
        <div>Charlie</div>
        <Link to={'/newRound/Charlie'}>Add Round</Link>
        <Link to={'/rounds/Charlie'}>View Rounds</Link>
        <div>Jeremy</div>
        <Link to={'/newRound/Jeremy'}>Add Round</Link>
        <Link to={'/rounds/Jeremy'}>View Rounds</Link>
      </div>
    );
  }
}

export default connect(
  null,
  { getRounds }
)(Home);