import React from 'react';
import { connect } from 'react-redux';

const QuoteList = (props) => (
  <div>
    <h1>Quotes List</h1>
    {props.quotes.length}
  </div>
);

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes
  };
};

export default connect(mapStateToProps)(QuoteList);

