import React from 'react';

const Quotes = props => (
  <div>
    <h1>Quotes</h1>
    <button onClick={props.randomQuote}> Generate Random Quote</button>
    <h3>{props.oneQuote}</h3>

  </div>
)

export default Quotes