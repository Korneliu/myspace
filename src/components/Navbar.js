import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';
import MySpaceDashboard from './MySpaceDashboard';

export const Navbar = ({ startLogout }) => (
  <div className="navbar-layout">
    <NavLink to='/myspacedashboard' activeClassName="is-active" exact={true}>MySpace</NavLink>
    <NavLink to='/notes' activeClassName='is-active'>Notes</NavLink>
    <NavLink to='/code' activeClassName='is-active'>Code</NavLink>
    <NavLink to='/quotesideas' activeClassName='is-active'>Quotes & Ideas</NavLink>
    <NavLink to='/games' activeClassName="is-active">Games</NavLink>
    <button onClick={startLogout} >Logout</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(MySpaceDashboard)

