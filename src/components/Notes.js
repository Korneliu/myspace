import React from 'react';
import { connect } from 'react-redux';
import NotesListItem from './NotesListItem';

const Notes = (props) => (
  <div>
    <h1>NotesList</h1>
    {
      props.notes.map((note) => {
        return <NotesListItem key={note.id}{...note} />
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