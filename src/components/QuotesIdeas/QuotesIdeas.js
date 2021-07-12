import React from 'react';
import Navbar from '../Navbar';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import IdeaListItem from './IdeaListItem';

const QuotesIdeas = (props) => (
  <div>
    <Navbar />
    <h1>Quotes & Ideas</h1>
    <NavLink to="/createidea" activeClassName="is-active">Create Idea</NavLink>
    {
      props.ideas.map((idea) => {
        return <IdeaListItem key={idea.id}{...idea} />
      })
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    ideas: state.ideas
  }
}

export default connect(mapStateToProps)(QuotesIdeas)