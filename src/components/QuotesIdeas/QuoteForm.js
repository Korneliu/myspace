import React from 'react';

export default class QuoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title ? props.quote.title : '',
      text: props.text ? props.quote.text : '',
      author: props.author ? props.quote.author : '',
      error: ''
    }
  }
  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState(() => ({ title }));
  }
  onTextChange = (e) => {
    const text = e.target.value;
    this.setState(() => ({ text }));
  }
  onAuthorChange = (e) => {
    const author = e.target.value;
    this.setState(() => ({ author }))
  }
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.title || !this.state.text) {
      this.setState(() => ({ error: 'Please provide title and text!' }))
    } else {
      this.setState(() => ({ error: '' }))
      this.props.onSubmit({
        title: this.state.title,
        text: this.state.text,
        author: this.state.author
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
            placeholder="Type title"
            autoFocus
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <textarea
            type="text"
            placeholder="Type text"
            value={this.state.text}
            onChange={this.onTextChange}
          >
          </textarea>
          <input
            type="text"
            placeholder="Type author"
            value={this.state.author}
            onChange={this.onAuthorChange}
          />
          <button>Add Quote</button>
        </form>
      </div>
    )
  }
}


