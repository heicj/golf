import React, { PureComponent } from 'react';

export default class HoleForm extends PureComponent{

  render(){
    return (
      <li>
        <label htmlFor="score">
      Score:<input required name="score" type="number" onChange={this.handleChange} value={score}/>
        </label>
        <label htmlFor="putts">
      Putts:<input required name="putts" type="number" onChange={this.handleChange} value={putts}/>
        </label>
      </li>
    );
  }
}