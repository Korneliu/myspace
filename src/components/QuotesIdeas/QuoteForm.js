import React from 'react';

export default class QuoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title ? props.title.text : '',
      author: props.author ? props.author.text : '',
      date: date
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
        <Form>
          <input
            type="title"
            placeholder="Type title"
            autoFocus
            onChange={onTitleChange}
          />
          <input
            type="text"
            placeholder="Type author"
            autoFocus
            onChange={this.onTextChange}
          />
        </Form>
      </div>
    )
  }
}


