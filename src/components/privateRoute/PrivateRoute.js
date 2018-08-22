import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ user, component: Component, render, ...rest }) => {

  return <Route {...rest} render={props => {
    if(!user) return <Redirect
      to = {{
        pathname: '/',
        state: { 
          from: props.location.pathname
        }
      }}
    />;

    if(Component) return <Component {...props}/>;
    if(render) return render(props);
    return null;

  }}/>;

};

export default connect(
  state => ({ user: state.auth }),
  null
)(PrivateRoute);

