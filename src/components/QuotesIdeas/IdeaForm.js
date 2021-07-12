import React from 'react';

export default class IdeaForm extends React.Component {
  state = {
    text: '',
    error: ''
  }
  onTextChange = (e) => {
    const text = e.target.value;
    this.setState(() => ({ text }))
  }
  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }))
  }
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.text) {
      this.setState(() => ({ error: 'Please provide text' }))
    } else {
      this.setState(() => ({ error: '' }))
      this.props.onSubmit({
        title: this.state.title,
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
            placeholder="type the title"
            autoFocus
            onChange={this.onTitleChange}
          />
          <textarea
            type="text"
            placeholder="type your idea"
            autoFocus
            value={this.state.text}
            onChange={this.onTextChange}
          />
          <button>Add Idea</button>
        </form>
      </div>
    )
  }
};