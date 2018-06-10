import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
// import { userSignin } from './actions';

class Login extends PureComponent{
  render() {
    return (
      <div>
        sign in page
      </div>

    );
  }
}

export default connect(
  null,
  null
)(Login);