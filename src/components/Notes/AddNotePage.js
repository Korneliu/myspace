import React from 'react';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';
import { addNote } from '../../actions/notes';
import Navbar from '../Navbar';

const AddNotePage = (props) => (
  <div>
    <Navbar />
    <h1>Add Note</h1>
    <NoteForm
      onSubmit={(note) => {
        props.dispatch(addNote(note))
        props.history.push('/notes')
      }}
    />
  </div>
)

export default connect()(AddNotePage)