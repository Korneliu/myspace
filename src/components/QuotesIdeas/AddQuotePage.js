import React from 'react';
import Navbar from '../Navbar';
import { connect } from 'react-redux';
import QuoteForm from './QuoteForm';
import { addQuote } from '../../actions/quotes';

const AddQuotePage = (props) => (

  <div className="add-quote-page">
    <h1>Add Quote</h1>
    <Navbar />
    <QuoteForm
      onSubmit={(quote) => {
        props.dispatch(addQuote(quote))
        console.log(quote)
        props.history.push('/quotesideas')
      }}
    />
  </div>
);

export default connect()(AddQuotePage);