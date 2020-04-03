import React, { Component } from 'react'

export default class Selector extends Component{

  render(){
    const { name, onSelect } = this.props;
    return (
      <select name={name} onChange={onSelect}>
        <option value="ALL">ALL</option>
        <option value="FIR">FIR</option>
        <option value="GIR">GIR</option>
        <option value="Putts">PUTTS</option>
        <option value="Score">SCORE</option>
      </select>
    )
  }
}