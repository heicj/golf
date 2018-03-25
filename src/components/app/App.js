import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../home/Home';
import Header from '../header/Header';

export default class App extends PureComponent{

  render(){
    return (
      <div>
        <Router>
          <div>
            <Header/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Redirect to='/'/>
              
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}