import React from 'react';
import Navbar from '../Navbar';
import { NavLink } from 'react-router-dom';

const QuotesIdeas = () => (
  <div>
    <h1>Quotes & Ideas</h1>
    <Navbar />
    <NavLink to="/createidea" activeClassName="is-active">Create Idea</NavLink>

  </div>
);

export default QuotesIdeas;