import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { startLogout } from "../actions/auth";


const Header = ({ startLogout }) => (
  <header>
    <h1>My Space</h1>
    <NavLink to="/" activeClassName="is-active"
      exact={true}>MySpaceDashboard</NavLink>
    <button onClick={startLogout}>Logout</button>

  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header)