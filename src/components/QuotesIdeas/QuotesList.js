import React from 'react';
import { connect } from 'react-redux';
import QuoteListItem from './QuoteListItem';

const QuoteList = (props) => (
  <div>
    <h1>Quotes List</h1>

    <p>{props.quotes[0].title}</p>

    <p>{props.quotes[0].text}</p>


  </div>
);

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes
  };
};

export default connect(mapStateToProps)(QuoteList);
//return <QuoteListItem key={quote.id}{...quote} />

