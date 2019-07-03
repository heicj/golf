
import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../home/Home';
import Header from '../header/Header';
import Login from '../login/Login';
import AddRoundForm from '../addRoundForm/AddRoundForm';
import ViewRounds from '../viewRounds/ViewRounds';
import PrivateRoute from '../privateRoute/PrivateRoute';
import { userSignin } from '../login/actions';

import LogoImg from '../logo/Logo';

class App extends PureComponent{

  componentDidMount(){
    let auth = null;
    if(localStorage.getItem('golfstats')){
      this.props.userSignin();
    }
  }
  render(){
    return (
      <div>
        <Router>
          <div>
            <Header/>
            <Switch>
              <Route exact path='/' component={Login}/>
              <PrivateRoute path='/home' component={Home}/>
              <Route path='/newRound/:name' component={AddRoundForm}/>
              <Route path='/rounds/:name' component={ViewRounds}/>
              <Route path = '/logo' component={LogoImg}/>
              <Redirect to='/'/>
              
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default connect(
  null,
  { userSignin }
)(App);