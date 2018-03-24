import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

export default class App extends PureComponent{

    render(){
        return(
            <div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Redirect pathc='/'/>
                    </Switch>
                </Router>
            </div>
        )
    }
}