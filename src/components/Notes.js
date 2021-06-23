import React from 'react';
import { connect } from 'react-redux';
import NoteListItem from './NoteListItem';

const Notes = (props) => (
  <div>
    <h1>Notes List</h1>
    {
      props.notes.map((note) => {
        return <NoteListItem key={note.id}{...note} />
      })
    }
  </div>
)


const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    notif: state.selfImpNotes
  };
};

export default connect(mapStateToProps)(Notes);