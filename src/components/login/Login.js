import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { userSignin } from './actions';
import './login.css';

class Login extends PureComponent{

  state = {
    redirectToReferrer: false,
    auth: this.props,
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { target: { elements } } = event;
    const { name, password } = elements;

    if(name.value == 'charlie' || 'jeremy' && password.value == process.env.PASSWORD){
      this.props.userSignin();
      this.setState({ redirectToReferrer: true });
    }
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/home' } };
    const { redirectToReferrer } = this.state;

    if(redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (

      <div className='form-wrapper'>
        <h1 className='signIn'>Sign In</h1>
        <form onSubmit={this.handleSubmit}>
          <div className='form-item'>
            <label htmlFor='name'></label>
            <input type='text' name='name' placeholder='Name'/>
          </div>
          <div className='form-item'>
            <label htmlFor='password'></label>
            <input type='password' name='password' required='required' placeholder='Password'></input>
          </div>
          <div className='button-panel'>
            <input type='submit' className='button' title='Sign In' value='Sign In'></input>
          </div>
        </form>
      </div>

    );
  }
}

export default connect(
  (state) => ({
    auth: state.auth
  }),
  { userSignin }
)(Login);