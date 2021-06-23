import React from 'react';
import { connect } from 'react-redux';


const NotesListItem = ({ description, note }) => (
  <div>
    <h3>{description}</h3>
    <p>{note}</p>
  </div>
)


export default NotesListItem;