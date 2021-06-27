import React from 'react';


export default class NoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.note ? props.note.description : '',
      text: props.note ? props.note.text : '',
      error: ''
    }
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }))
  };
  onNoteChange = (e) => {
    const text = e.target.value;
    this.setState(() => ({ text }))
  }
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.text) {
      this.setState(() => ({ error: 'Please provide description and note' }))
    } else {
      this.setState(() => ({ error: '' }))
      this.props.onSubmit({
        description: this.state.description,
        text: this.state.text
      })
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <textarea placeholder="Add your note"
            value={this.state.text}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button

          >Add Note</button>
        </form>
      </div>
    )
  }
}