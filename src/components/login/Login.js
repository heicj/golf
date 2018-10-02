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
      <form className='singinForm' onSubmit={this.handleSubmit}>
        sign in page
        <div className='inputs'>
          <label htmlFor='name'>
            Name:<input type='text' name='name'/>
          </label>
        </div>
        <div className='inputs'>
          <label htmlFor='password'>
            Password:<input type='password' name='password'/>
          </label>
        </div>

        <button className="button">Submit</button>
      </form>

    );
  }
}

export default connect(
  (state) => ({
    auth: state.auth
  }),
  { userSignin }
)(Login);