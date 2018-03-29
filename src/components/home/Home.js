import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import AddRoundForm from '../addRoundForm/AddRoundForm';
class Home extends PureComponent{
  render(){
    return (
      <div>
        <div>hello</div>
        <AddRoundForm/>
      </div>
    );
  }
}

export default connect(
  null,
  null
)(Home);