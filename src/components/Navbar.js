import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div>
    <h2>Navbar</h2>
    <NavLink to='/' activeClassName="is-active" exact={true}>MySpace</NavLink>
    <NavLink to='/notes' activeClassName='is-active'>Notes</NavLink>
    <NavLink to='/coding' activeClassName='is-active'>Coding</NavLink>
    <NavLink to='/quotesideas' activeClassName='is-active'>Quotes & Ideas</NavLink>
    <NavLink to='/games' activeClassName="is-active">Games</NavLink>
  </div>
);

export default Navbar;

