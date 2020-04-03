import React, { Component } from 'react';
import { Line, Chart } from 'react-chartjs-2';
import { charlieChartOptions, jeremyChartOptions, charlieSetOptions, jeremySetOptions } from './options';
// import LineGraph  from '../lineGraph/LineGraph'
import Selector from '../selector/Selector';
import { getPlayerRounds } from './getDataFunc';
import './chart.css';

export default class DataChart extends Component{
  state = {
    // data: {
    //   labels: ['3-31-2020 chehalem glenn', '7-2-2020 old macdonald'],
    //   datasets: [
    //     { label: 'FIR',
    //       backgroundColor:  'rgba(10, 20, 30, 20)',
    //       borderColor: 'rgba(255, 0, 0, 1)',
    //       fill: false,
    //       data: [10, 8]
    //     },
    //     { label: 'GIR',
    //       backgroundColor: 'rgba(15, 25, 35, 25)', 
    //       borderColor: 'rgba(0, 255, 0, 1)', 
    //       fill: false,
    //       data: [1, 2]
    //     },
    //     { label: 'Putts',
    //       backgroundColor: 'rgba(20, 25, 40, 30)', 
    //       borderColor: 'rgba(0, 0, 255, 1)', 
    //       fill: false,
    //       data: [36, 38]
    //     },
    //     { label: 'Score',
    //       backgroundColor: 'rgba(50, 20, 60, 20)',
    //       borderColor: 'rgba(50, 50, 0, 1)',
    //       fill: false,
    //       data: [72, 71]
    //     }
    //   ]
    // },
    charlieSetOptions,
    jeremySetOptions,
    charlieChartOptions,
    jeremyChartOptions,
    charlieSelectorChoice: 'ALL',
    jeremySelectorChoice: 'ALL'
   
  };
  
  handlePlayerState = (name, obj) => {
    let stateDataObj = {};
    let key = name + 'Data';
    stateDataObj[key] = obj;
    this.setState(stateDataObj);
  };

  componentDidMount(){
    getPlayerRounds('Charlie', this.handlePlayerState, this.state.charlieSetOptions);
    getPlayerRounds('Jeremy', this.handlePlayerState, this.state.jeremySetOptions);
  }

  selectorHandler = ({ target }) => {
    this.setState({ [target.name ]: target.value });
  }

  render(){
    const { CharlieData, JeremyData, charlieSelectorChoice, jeremySelectorChoice } = this.state;
    return (
      <div>
        <section className='chartContainer'>
          {
            this.state.CharlieData ? 
              <Line
                data={() => {
                  let copy = {};
                  Object.assign(copy, CharlieData);
                  let ds = copy.datasets;
                  if(charlieSelectorChoice == 'ALL'){
                    return copy;
                  } else {
                    copy.datasets = ds.filter((s) => {
                      return s.label == charlieSelectorChoice;
                    });
                    return copy;
                  }
                }}
                options={this.state.charlieChartOptions}
              /> :
              null
          }
          <div className='charlieJeremySelectorContainer'>
            <Selector
              allValue="ALL"
              firValue="Charlie FIR"
              girValue="Charlie GIR"
              puttsValue="Charlie Putts"
              scoreValue="Charlie Score"
              value={charlieSelectorChoice} 
              name='charlieSelectorChoice' 
              onSelect={this.selectorHandler}
            />
          </div>
        </section>
        <section className='chartContainer'>
          {
            this.state.JeremyData ?
              <Line 
                data={() => {
                  let copy = {};
                  Object.assign(copy, JeremyData);
                  let ds = copy.datasets;
                  if(jeremySelectorChoice == 'ALL'){
                    return copy;
                  } else {
                    copy.datasets = ds.filter((s) => {
                      return s.label == jeremySelectorChoice;
                    });
                    return copy;
                  }
                }}
                options={this.state.jeremyChartOptions}
              /> :
              null
          }
          <div className='charlieJeremySelectorContainer'>
            <Selector
              allValue="ALL"
              firValue="Jeremy FIR"
              girValue="Jeremy GIR"
              puttsValue="Jeremy Putts"
              scoreValue="Jeremy Score"
              value={charlieSelectorChoice} 
              name='jeremySelectorChoice' 
              onSelect={this.selectorHandler}
            />
          </div>
        </section>
      </div>
    );
  }
}