import React from 'react';
import Games from './Games';


const Number = props => (
  <div>
    <h2>Random Number from 0 to 10 : {props.number}</h2>
    <button onClick={props.randomNumber}>Click</button>

  </div>
)



export default Number;



