import React, { PureComponent } from 'react';

export default class HoleForm extends PureComponent{

  render(){
    const { id, onSelect, checkbox } = this.props;
    return (
      <li id={id}>
        Hole { id + 1 } &nbsp;
        <label htmlFor="score">
      Score:<input  id={id} name={`score${id}`} type="number" onChange={onSelect}/>
        </label>
        <label htmlFor="fir">
      FIR:<input id={id} type="checkbox" name={`fir${id}`} value={false} onChange={checkbox}/>
        </label>
        <label htmlFor="gir">
      GIR:<input id={id} type="checkbox" name={`gir${id}`} value={false} onChange={checkbox}/>
        </label>
        <label htmlFor="putts">
      Putts:<input  id={id} name={`putts${id}`} type="number" onChange={onSelect}/>
        </label>
      </li>
    );
  }
}