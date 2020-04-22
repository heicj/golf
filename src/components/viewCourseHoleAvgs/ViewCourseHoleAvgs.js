import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPlayerCoursePerHoleAvg } from '../courseAverages/actions';
import HoleAverages from '../holeAverages/HoleAverages';
import './ViewCourseHoleAvgs.css';

class ViewCourseHoleAvgs extends Component{

  state = {
    player: {}
  };

  holeAvgHandler = (name, obj) => {
    let avgObj = {};
    avgObj['player'] = obj;
    this.setState(avgObj);
  };

  componentDidMount(){
    const { name } = this.props;
    this.props.getPlayerCoursePerHoleAvg(name, this.holeAvgHandler);
  }

  componentDidUpdate(prevProps, prevState){
    if(prevProps.name !== this.props.name){
      this.props.getPlayerCoursePerHoleAvg(this.props.name, this.holeAvgHandler);
    }
  }

  render(){
    return (
      <section>
        <h1 id='holeAvgTitle'>{this.props.name}'s Hole Averages</h1>
        {
          Object.keys(this.state.player).map(key => {
            let stats = {};
            let rd = this.state.player[key];
            stats.course = key;
            stats.fir = rd.firavgInOrder;
            stats.gir = rd.giravgInOrder;
            stats.putts = rd.puttsavgInOrder;
            stats.holesScore = rd.holesScoreavgInOrder;
            stats.timesPlayed = rd.oneholesScore.length;
            return <HoleAverages key={key} rdStats={stats}/>;
          })
        }
      </section>
    );
  }
}

export default connect(
  (state, props) => ({
    name: props.match.params.name
  }),
  { getPlayerCoursePerHoleAvg }
)(ViewCourseHoleAvgs);