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
  render() {
    return (
      <div>
        <Form></Form>
      </div>
    )
  }
}


