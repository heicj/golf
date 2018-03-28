import React, { PureComponent } from 'react';

export default class HoleForm extends PureComponent{

  render(){
    const { id, onSelect, checkbox } = this.props;
    return (
      <li id={id}>
        Hole { id + 1 } &nbsp;
        <label htmlFor="score">
      Score:<input required name={`score${id}`} type="number" onChange={onSelect}/>
        </label>
        <label htmlFor="fir">
      FIR:<input type="checkbox" name={`fir${id}`} onChange={checkbox}/>
        </label>
        <label htmlFor="gir">
      GIR:<input type="checkbox" name={`gir${id}`} onChange={checkbox}/>
        </label>
        <label htmlFor="putts">
      Putts:<input required name={`putts${id}`} type="number" onChange={onSelect}/>
        </label>
      </li>
    );
  }
}