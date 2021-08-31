import React from 'react';

const Quotes = props => (
  <div>
    <h1>Quotes</h1>
    <button onClick={e => {
      e.preventDefault();
      this.setState({
        oneQuote: this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)]
      })

    }}>Click
    </button>
    <h3>{this.state.oneQuote}</h3>


  </div>
)

export default Quotes