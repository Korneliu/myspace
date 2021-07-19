import React from 'react';
import Navbar from '../Navbar';
import { connect } from 'react-redux';
import NoteListItem from './NoteListItem';
import { NavLink } from 'react-router-dom';


const Notes = (props) => (
  <div className='notes-layout'>
    <h1>Notes List</h1>
    <Navbar />
    <NavLink to='/createnote' activeClassName="is-active">Create Note</NavLink>
    {
      props.notes.map((note) => {
        return <NoteListItem key={note.id}{...note} />
      })
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    notes: state.notes
  };
};

export default connect(mapStateToProps)(Notes);