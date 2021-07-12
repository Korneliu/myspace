import React from 'react';
import { connect } from 'react-redux';

const IdeaListItem = ({ dispatch, id, title, text }) => (
  <div>
    <h2>{title}</h2>
    <h4>{text}</h4>
  </div>
);

export default connect()(IdeaListItem);