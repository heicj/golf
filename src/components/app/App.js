
import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../home/Home';
import Header from '../header/Header';
import AddRoundForm from '../addRoundForm/AddRoundForm';

export default class App extends PureComponent{

  render(){
    return (
      <div>
        <Router>
          <div>
            <Header/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/newRound/:name' component={AddRoundForm}/>
              <Redirect to='/'/>
              
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}