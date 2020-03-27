import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWishlist } from './actions';

class Wishlist extends Component{
  componentDidMount(){
    this.props.getWishlist();
  }

  render(){
    return (
      <section>
        hello wishlist
      </section>
    );
  }
}

export default connect(
  (state, props) => ({
    wl: state.wishlist
  }),
  { getWishlist }
)(Wishlist);
