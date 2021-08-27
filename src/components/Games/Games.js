import React from 'react';
import Navbar from '../Navbar';
import { NavLink } from 'react-router-dom';

export default class Games extends React.Component {
  render() {
    return (
      <div>
        <h1>Work in progress...</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Go to Main Page</NavLink>

      </div>
    )
  }

}

