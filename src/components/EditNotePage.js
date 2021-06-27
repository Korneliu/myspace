import React from 'react';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';
import Navbar from './Navbar';

const EditNotePage = (props) => {
  return (
    <div>
      <Navbar />
      <NoteForm
        note={props.note}
        onSubmit={(note) => {
          console.log('updated', note)
        }}
      />
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    note: state.notes.find((note) => note.id === props.match.params.id)
  }
}

export default connect(mapStateToProps)(EditNotePage)