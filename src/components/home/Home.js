import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Home extends PureComponent{
  render(){
    return (
      <div>hello</div>
    );
  }
}

export default connect(
  null,
  null
)(Home);