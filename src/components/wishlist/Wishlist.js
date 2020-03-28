import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWishlist, addToWishlist, deleteWish } from './actions';
import WishView from '../wishView/WishView';
import './wishlist.css';


class Wishlist extends Component{

  state = {
    course: '',
    city: '',
    state: '',
    country: '',
    website: ''
  };

  componentDidMount(){
    this.props.getWishlist();
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addToWishlist(this.state);
    this.setState({
      course: '',
      city: '',
      state: '',
      country: '',
      website: ''
    });
  };

  render(){
    const { course, city, state, country, website } = this.state;
    const { wl, deleteWish } = this.props;
    return (
      <section id="wishlistPage">
        <form id='wishlistForm' onSubmit={this.handleSubmit}>
          <h2 id="wishlistHeader">Add Course To Wishlist</h2>
          <div className='container'>
            <div className="wishlishLabelDivs">
            Course:
            </div>
            <input className='wishlistInputs' onChange={this.handleChange} name='course' value={course} required placeholder='course name required'></input>
          </div>
          <div className='container'>
            <div className="wishlishLabelDivs">
              City:
            </div>
            <input className='wishlistInputs' onChange={this.handleChange} name='city' value={city} placeholder='optional'></input>
          </div>
          <div className='container'>
            <div className="wishlishLabelDivs">
              State:
            </div>
            <input className='wishlistInputs' onChange={this.handleChange} name='state' value={state} placeholder='optional'></input>
          </div>
          <div className='container'>
            <div className="wishlishLabelDivs">
            Country:
            </div>
            <input className='wishlistInputs' onChange={this.handleChange} name='country' value={country} placeholder='optional'></input>
          </div>
          <div className='container'>
            <div className="wishlishLabelDivs">
            Website:
            </div>
            <input className='wishlistInputs' onChange={this.handleChange} name='website' value={website} placeholder="optional. If filling in include full address with http://"></input>
          </div>
          <div id='buttonDiv'>
            <button>Submit</button>
          </div>
        </form>
        <section id='wishGridContainer'>
          {wl.map((w, i) => <WishView key={i} wishCourse={w} delWish={deleteWish}/>)}
        </section>
      </section>
    );
  }
}

export default connect(
  (state, props) => ({
    wl: state.wishlist
  }),
  { getWishlist, addToWishlist, deleteWish }
)(Wishlist);
