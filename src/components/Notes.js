import React from 'react';
import { connect } from 'react-redux';
import NoteListItem from './NoteListItem';
import NoteForm from './NoteForm';
import Navbar from './Navbar';

const Notes = (props) => (
  <div>
    <Navbar />
    <h1>Add Note</h1>
    <NoteForm />
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