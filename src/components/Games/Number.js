import React from 'react';
import Games from './Games';


const Number = props => (
  <div>
    <h1>Random Number</h1>
    <button onClick={props.randomNumber}>Click</button>
    <h2>{props.number}</h2>
  </div>
)



export default Number;



