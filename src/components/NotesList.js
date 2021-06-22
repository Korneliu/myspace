import React from 'react';
import { connect } from 'react-redux';

const NotesList = (props) => (
  <div>
    <h1>NotesList</h1>
    {props.notes.length}
    {props.notif[0].text}
  </div>
)

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    notif: state.selfImpNotes
  };
};

export default connect(mapStateToProps)(NotesList);


