
import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../home/Home';
import Header from '../header/Header';
import Login from '../login/Login';
import AddRoundForm from '../addRoundForm/AddRoundForm';
import ViewRounds from '../viewRounds/ViewRounds';

export default class App extends PureComponent{

  render(){
    return (
      <div>
        <Router>
          <div>
            <Header/>
            <Switch>
              <Route exact path='/' component={Login}/>
              <Route path='/home' component={Home}/>
              <Route path='/newRound/:name' component={AddRoundForm}/>
              <Route path='/rounds/:name' component={ViewRounds}/>
              <Redirect to='/'/>
              
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}