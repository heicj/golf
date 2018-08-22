import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { userSignin } from './actions';

class Login extends PureComponent{

  handleSubmit = (event) => {
    event.preventDefault();
    const { target: { elements } } = event;
    const { name, password } = elements;

    if(name.value == 'charlie' || 'jeremy' && password.value == 'letmein'){
      this.props.userSignin();
    }
    console.log(name.value, password.value);
  }
  render() {
    return (
      <form className='singinForm' onSubmit={this.handleSubmit}>
        sign in page
        <label htmlFor='name'>
          Name:<input type='text' name='name'/>
        </label>
        <label htmlFor='password'>
          Password:<input type='password' name='password'/>
        </label>
        <button>Submit</button>
      </form>

    );
  }
}

export default connect(
  null,
  { userSignin }
)(Login);