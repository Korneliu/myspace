import React from 'react';
import Navbar from '../Navbar';
import { NavLink } from 'react-router-dom';
import Number from './Number';


export default class Games extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      randomNumber: 0,
      number: 0,
      quotes: ["whatever", "here", "there"],
      oneQuote: ''
    }
  }
  generateRandomNumber = e => {
    e.preventDefault()
    this.setState({
      number: this.state.number = Math.floor(Math.random() * 11)
    })
  }
  render() {
    return (
      <div className="games-layout">
        <h1>Games, work in progres!</h1>
        <Navbar />
        <NavLink to="/" activeClassName="is-active" exact={true}>Go to Main Page</NavLink>
        <Number
          randomNumber={this.generateRandomNumber}
          number={this.state.number}
        />

        <h1>Quotes</h1>
        <button onClick={e => {
          e.preventDefault();
          this.setState({
            oneQuote: this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)]
          })

        }}>Click
        </button>
        <h3>{this.state.oneQuote}</h3>
      </div >
    )
  }

}

