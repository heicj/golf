import React, { PureComponent } from 'react';
import './addRoundForm.css';

export default class HoleForm extends PureComponent{

  render(){
    const { id, onSelect, checkbox } = this.props;
    return (
      <li className="formHoles" id={id}>
        <div id="hole">
          Hole { id + 1 } &nbsp;
        </div>
        <div id="holeDetails">
          <label htmlFor="score">
        Score: <input  id={id} name={`score${id}`} type="number" required onChange={onSelect}/>
          </label>
          <label htmlFor="fir">
        FIR:<input id={id} type="checkbox" name={`fir${id}`} value={false} onChange={checkbox}/>
          </label>
          <label htmlFor="gir">
        GIR:<input id={id} type="checkbox" name={`gir${id}`} value={false} onChange={checkbox}/>
          </label>
          <label htmlFor="putts">
        Putts: <input  id={id} name={`putts${id}`} type="number" required onChange={onSelect}/>
          </label>
        </div>
      </li>
    );
  }
}