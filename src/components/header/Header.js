import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Header extends PureComponent{
  render(){
    return (
      <h1>Golf Stats</h1>
    );
  }
}

export default connect(
  null,
  null
)(Header);