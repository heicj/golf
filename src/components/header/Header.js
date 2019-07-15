import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './header.css';
import { signOut } from '../login/actions';

class Header extends PureComponent{

  componentDidMount(){
    this.eventListener()
  }

  state={
    menu: false
  }

  eventListener = () => {
    document.addEventListener('click', () => {
      if(this.state.menu == false){
        return;
      } else {
        this.setState({
          'menu': !this.state.menu
        });
      }
    });
  }

  handleClick = () => {
    this.setState({
      'menu': !this.state.menu,
    });
  }


  handleLogOut = event => {
    event.preventDefault();
    this.props.signOut();
  }

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
              { menu ?
                <section id='menuLinks'>
                  <div>
                    <Link to='/home'>Home</Link> 
                  </div>
                  &nbsp;
                  <div>
                    <Link to='/rounds/Charlie'>Charlie's rounds</Link>
                  </div>
                  &nbsp;
                  <div>
                    <Link to='/rounds/Jeremy'>Jeremy's rounds</Link>
                  </div>
                  &nbsp;
                  <div>
                    <Link to='/newRound/Charlie'>Charlie add round</Link>
                  </div>
                  &nbsp;
                  <div>
                    <Link to='/newRound/Jeremy'>Jeremy add round</Link>
                  </div>
                  &nbsp;
                  <div>
                    <Link onClick={this.handleLogOut} to='/'>Sign Out</Link>
                  </div>
                </section> :
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

export default connect(
  state => ({
    auth: state.auth
  }),
  {signOut}
)(Header);