import React, { PureComponent } from 'react';

export default class HoleForm extends PureComponent{

  render(){
    const { id, onSelect } = this.props;
    return (
      <li>
        Hole { id + 1 } &nbsp;
        <label htmlFor="score">
      Score:<input required name="score" type="number" onChange={this.onSelect}/>
        </label>
        <label htmlFor="fir">
      FIR:<input type="checkbox" name="fir"/>
        </label>
        <label htmlFor="gir">
      GIR:<input type="checkbox" name="gir"/>
        </label>
        <label htmlFor="putts">
      Putts:<input required name="putts" type="number" onChange={this.onSelect}/>
        </label>
      </li>
    );
  }
}