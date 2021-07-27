import React from 'react';

export default class QuoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title ? props.quote.title : '',
      text: props.text ? props.quote.text : '',
      author: props.author ? props.quote.author : ''
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
  render() {
    return (
      <div>
        <form>
          <input
            type="title"
            placeholder="Type title"
            autoFocus
            onChange={this.onTitleChange}
          />
          <input
            type="text"
            placeholder="Type author"
            autoFocus
            onChange={this.onTextChange}
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}


