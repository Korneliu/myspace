import React from 'react';
import { connect } from 'react-redux';
import NoteListItem from './NoteListItem';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';



const Notes = (props) => (
  <div>
    <Navbar />
    <NavLink to='/createnote' activeClassName="is-active">Create Note</NavLink>
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