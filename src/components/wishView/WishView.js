import React, { Component } from 'react';
import './wishView.css';

export default class WishView extends Component{
  
  handleDelete = () => {
    if(confirm('Delete Course?')){
      this.props.delWish(this.props.wishCourse.key);
    } else {
      return;
    }
  };
  
  render(){

    const { wishCourse } = this.props;
    return (
      <div className='wishItem'>
        <div className='deleteWish' onClick={this.handleDelete}>Delete</div>
        <div>{wishCourse.course}</div>
        <div>{wishCourse.city}</div>
        <div>{wishCourse.state}</div>
        <div>{wishCourse.country}</div>
        <a className='wishWebLink' target="_blank" href={wishCourse.website} rel="external"><div>{wishCourse.website}</div></a>
      </div>
    );
  }
}