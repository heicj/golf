import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MenuLinks from '../menuLinks/MenuLinks';
import './header.css';
import { signOut } from '../login/actions';

class Header extends PureComponent{

  state={
    menu: false
  };

  handleClick = () => {
    // document.getElementById('menuLinks').style.width = '250px';
    this.setState({
      'menu': !this.state.menu,
    });
  };

  handleLogOut = event => {
    event.preventDefault();
    const { history } = this.props;
    history.push('/home');
    this.props.signOut();
  };

  render(){
    const auth = this.props.auth;
    const menu = this.state.menu;
    return (
      <div className='image-container'>
        {
          auth ? 
            <div id='menuDiv' onClick={this.handleClick}>
              <div className='menu'></div>
              <div className='menu'></div>
              <div className='menu'></div>
              {/* <MenuLinks/> */}
              { menu ?
                <MenuLinks/>
                :
                null}
            </div>
            
            : 
            null

        }
        <h1 id='title'>Golf Stats</h1>
        
      </div>
    );
  }
}

export default withRouter(connect(
  state => ({
    auth: state.auth
  }),
  { signOut }
)(Header));