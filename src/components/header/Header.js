import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './header.css';
import { signOut } from '../login/actions';

class Header extends PureComponent{

  handleLogOut = event => {
    event.preventDefault();
    this.props.signOut();
  }

  render(){
    const auth = this.props.auth;
    return (
      <div>
        {
          auth ? 
            <div>
              <Link to='/home'>Home</Link> 
              &nbsp;
              <Link onClick={this.handleLogOut} to='/'>Sign Out</Link>
            </div>
            : 
            null

        }
        <h1 id='title'>Golf Stats</h1>
        
      </div>
    );
  }
}

export default connect(
  state => ({
    auth: state.auth
  }),
  {signOut}
)(Header);