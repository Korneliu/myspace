import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeNote } from '../../actions/notes';


const NoteListItem = ({ dispatch, id, description, text }) => (
  <div>
    <Link to={`/editnote/${id}`}>
      <h2>{description}</h2>
    </Link>
    <p>{text}</p>
    <button onClick={() => {
      dispatch(removeNote({ id }))
    }}>Remove</button>
  </div>
);

export default connect()(NoteListItem);