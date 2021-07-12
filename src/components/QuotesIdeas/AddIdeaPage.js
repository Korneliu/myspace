import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../Navbar';
import IdeaForm from './IdeaForm';
import { addIdea } from '../../actions/ideas';


const AddIdeaPage = (props) => (
  <div>
    <Navbar />
    <IdeaForm
      onSubmit={(idea) => {
        props.dispatch(addIdea(idea));
        props.history.push('/quotesideas')
      }}
    />
  </div>
);

export default connect()(AddIdeaPage);