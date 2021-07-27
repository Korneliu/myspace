import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../Navbar';
import IdeaForm from './IdeaForm';
import { startAddIdea } from '../../actions/ideas';


export class AddIdeaPage extends React.Component {
  onSubmit = (idea) => {
    this.props.startAddIdea(idea);
    this.props.history.push('/quotesideas');
  };
  render() {
    return (
      <div className="add-idea-page">
        <h1>Add Idea</h1>
        <Navbar />
        <IdeaForm
          onSubmit={this.onSubmit}
        />
      </div>

    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  startAddIdea: (idea) => dispatch(startAddIdea(idea))
});

export default connect(undefined, mapDispatchToProps)(AddIdeaPage);