import React, { Component } from 'react'

export default class Selector extends Component{

  render(){
    const { name, onSelect, allValue, firValue, girValue, puttsValue, scoreValue } = this.props;
    return (
      <select name={name} onChange={onSelect}>
        <option value={allValue}>ALL</option>
        <option value={firValue}>FIR</option>
        <option value={girValue}>GIR</option>
        <option value={puttsValue}>PUTTS</option>
        <option value={scoreValue}>SCORE</option>
      </select>
    );
  }
}