import React, { Component } from 'react';
import { connect } from 'react-redux';
import Round from '../round/Round';
import { getPlayerCoursePerHoleAvg } from '../courseAverages/actions';

class ViewCourseHoleAvgs extends Component{

  state = {

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
        <div>Hello world</div>

        {/* need new comonent to display hole avg, using Round
        doesn't work. */}
        {/* {
          this.state.player ?
          Object.keys(this.state.player).map(rdName => {
            let rd = this.state.player[rdName];
            let obj = {};
            obj['fir'] = rd.firavgInOrder;
            obj['gir'] = rd.giravgInOrder;
            obj['putts'] = rd.puttsavgInOrder;
            obj['holesScore'] = rd.holesScoreavgInOrder;
            obj['course'] = rdName;
  
            return <Round key={rdName} id={rdName} roundStats={obj} />
          }) : null

        } */}
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