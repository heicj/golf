import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleMenu } from '../header/actions';
import './menuLinks.css';

class MenuLinks extends PureComponent{

  
  render(){
    return (
      <section onClick={this.props.toggleMenu}  id="menuLinks">
        <div className='menu-link-wrapper'>
          <Link to='/home'>Home</Link> 
        </div>
                  &nbsp;
        <div className='menu-link-wrapper'>
          <Link to='/coursesPlayed'>Courses Played</Link>
        </div>
                  &nbsp;
        <div className='menu-link-wrapper'>
          <Link to='/backup'>Backup</Link>
        </div>
                  &nbsp;
        <div className='menu-link-wrapper'>
          <Link to='wishlist'>Wishlist</Link>
        </div>
                  &nbsp;
        <div className='menu-link-wrapper'>
          <Link to='/charts'>Charts</Link>
        </div>
                  &nbsp;
        <div className='menu-link-wrapper'>
          <Link to='/courseAverages'>Course Avgs</Link>
        </div>
                  &nbsp;
        <div className='menu-link-wrapper'>
          <Link to='/holeAverages/Charlie'>Charlie Hole Avgs</Link>
        </div>
                  &nbsp;
        <div className='menu-link-wrapper'>
          <Link to='/holeAverages/Jeremy'>Jeremy Hole Avgs</Link>
        </div>
                  &nbsp;
        <div className='menu-link-wrapper'>
          <Link to='/holeAverages/Evan'>Evan Hole Avgs</Link>
        </div>
                  &nbsp;
        <div className='menu-link-wrapper'>
          <Link to='/correlations'>Correlations</Link>
        </div>
                  &nbsp;
        <div className='menu-link-wrapper'>
          <Link onClick={this.handleLogOut} to='/'>Sign Out</Link>
        </div>
      </section>
    );
  }
}

export default connect(
  state => ({
    menuView: state.menuVisibility
  }),
  { toggleMenu }
)(MenuLinks);