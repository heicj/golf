import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import AddRoundForm from '../addRoundForm/AddRoundForm';
class Home extends PureComponent{
  render(){
    return (
      <div>
        <div>Charlie</div>
        <Link to={'/newRound/Charlie'}>Add Round</Link>
        <div>Jeremy</div>
        <Link to={'/newRound/Jeremy'}>Add Round</Link>
      </div>
    );
  }
}

export default connect(
  null,
  null
)(Home);