import React, { PureComponent } from 'react';

export default class TeeSelector extends PureComponent{

  render(){
    return (
      <div>
      Tee:
        <select>
          <option value="white">White</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="black">Black</option>
        </select>
      </div>
    );
  }
}