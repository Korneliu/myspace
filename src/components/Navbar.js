import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar-layout">
    <NavLink to='/myspacedashboard' activeClassName="is-active" exact={true}>MySpace</NavLink>
    <NavLink to='/notes' activeClassName='is-active'>Notes</NavLink>
    <NavLink to='/code' activeClassName='is-active'>Code</NavLink>
    <NavLink to='/quotesideas' activeClassName='is-active'>Quotes & Ideas</NavLink>
    <NavLink to='/games' activeClassName="is-active">Games</NavLink>
  </div>
);

export default Navbar;

