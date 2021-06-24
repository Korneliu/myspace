import React from 'react';


export default class NoteForm extends React.Component {
  state = {
    description: '',
    note: ''
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }))
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }))
  }
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <textarea placeholder="Add your note"
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>Add Note</button>
        </form>
      </div>
    )
  }
}