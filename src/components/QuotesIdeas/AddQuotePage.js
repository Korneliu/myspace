import React from 'react';
import Navbar from '../Navbar';
import { connect } from 'react-redux';
import QuoteForm from './QuoteForm';
import { startAddQuote } from '../../actions/quotes';

export class AddQuotePage extends React.Component {
  onSubmit = (quote) => {
    this.props.startAddQuote(quote);
    this.props.history.push('/quotesideas');
  }
  render() {
    return (
      <div className="add-quote-page">
        <h1>Add Quote</h1>
        <Navbar />
        <QuoteForm
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  startAddQuote: (quote) => dispatch(startAddQuote(quote))
})

export default connect(undefined, mapDispatchToProps)(AddQuotePage)