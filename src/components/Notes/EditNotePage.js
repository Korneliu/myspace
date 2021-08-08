import React from 'react';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';
import Navbar from '../Navbar';
import { editNote } from '../../actions/notes';

const EditNotePage = (props) => {
  return (
    <div>
      <Navbar />
      <NoteForm
        note={props.note}
        onSubmit={(note) => {
          props.dispatch(editNote(props.note.id, note))
          props.history.push('/notes')
        }}
      />
    </div>
  )
};

const mapStateToProps = (state, props) => {
  return {
    note: state.notes.find((note) => note.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(EditNotePage)