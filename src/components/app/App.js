
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
import EditForm from '../editForm/EditForm';
import Courses from '../coursesPlayed/CoursesPlayed';
import Backup from '../backup/Backup';
import Wishlist from '../wishlist/Wishlist';
import DataChart from '../chart/DataChart';
import ChartSingleRd from '../chartSingleRd/ChartSingleRd';
import CourseAverages from '../courseAverages/CourseAverages';
import ViewCourseHoleAvgs from '../viewCourseHoleAvgs/ViewCourseHoleAvgs';
import ViewBestAndWorstRounds from '../viewBestAndWorstRounds/ViewBestAndWorstRounds';
import Correlation from '../correlation/Correlation';

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
              <Route path='/editRound/:player/:id' component={EditForm}/>
              <Route path='/coursesPlayed' component={Courses}/>
              <Route path='/backup' component={Backup}/>
              <Route path='/wishlist' component={Wishlist}/>
              <Route path='/charts' component={DataChart}/>
              <Route path='/chart/:player/:id' component={ChartSingleRd}/>
              <Route path='/courseAverages' component={CourseAverages}/>
              <Route path='/holeAverages/:name' component={ViewCourseHoleAvgs}/>
              <Route path='/viewRounds' component={ViewBestAndWorstRounds}/>
              <Route path='/correlations' component={Correlation}/>
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