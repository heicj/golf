import React, { PureComponent } from 'react';

export default class HoleForm extends PureComponent{

  render(){
    return (
      <li>
        <label htmlFor="score">
      Score:<input required name="score" type="number" onChange={this.handleChange}/>
        </label>
        <label htmlFor="fir">
      FIR:<input type="checkbox" name="fir"/>
        </label>
        <label htmlFor="gir">
      GIR:<input type="checkbox" name="gir"/>
        </label>
        <label htmlFor="putts">
      Putts:<input required name="putts" type="number" onChange={this.handleChange}/>
        </label>
      </li>
    );
  }
}