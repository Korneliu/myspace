import React from 'react';
import { connect } from 'react-redux';
import QuoteListItem from './QuoteListItem';

const QuoteList = (props) => (
  <div>
    <h1>Quotes List</h1>
    {
      props.quotes.map((quote) => {
        return <QuoteListItem key={quote.id}{...quote} />
      })
    }

  </div>
);

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes
  };
};

export default connect(mapStateToProps)(QuoteList);

