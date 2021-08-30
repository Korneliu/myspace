import React from 'react';
import Navbar from '../Navbar';
import { NavLink } from 'react-router-dom';
import Number from './Number';



export default class Games extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 0
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
      </div>
    )
  }

}

