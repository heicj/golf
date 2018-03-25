import React, { PureComponent } from 'react';

export default class TeeSelector extends PureComponent{
  render(){
    return (
      <div>
      Tee:
        <select>
          <option>Red</option>
          <option>White</option>
          <option>Blue</option>
          <option>Black</option>
        </select>
      </div>
    )
  }
}