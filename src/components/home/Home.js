import React, { PureComponent } from 'react';
import { connect } from 'react-router-dom';

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