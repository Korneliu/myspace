import React from 'react';

export default class IdeaForm extends React.Component {
  state = {
    text: ''
  }
  onTextChange = (e) => {
    const text = e.target.value;
    this.setState(() => ({ text }))
  }

  onTextChange = (e) => {
    const text = e.target.value;
    this.setState(() => ({ text }))
  }
  onTextChange = (e) => {
    const text = e.target.value;
    this.setState(() => ({ text }))
  }








  render() {
    return (
      <div>
        <form>
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