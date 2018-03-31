import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends PureComponent{
  render(){
    return (
      <div>
        <h1>Golf Stats</h1>
        <Link to='/'>Home</Link>
      </div>
    );
  }
}

export default connect(
  null,
  null
)(Header);