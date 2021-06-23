import React from 'react';
import { connect } from 'react-redux';
import { removeNote } from '../actions/notes';


const NoteListItem = ({ dispatch, id, description, note }) => (
  <div>
    <h3>{description}</h3>
    <p>{note}</p>
    <button onClick={() => {
      dispatch(removeNote({ id }))
    }}>Remove</button>
  </div>
);

export default connect()(NoteListItem);