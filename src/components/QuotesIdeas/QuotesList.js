
import React from 'react';
import { connect } from 'react-redux';
import QuoteListItem from './QuoteListItem';
import { generateRandomQuote } from '../../actions/quotes';


const QuoteList = (props) => {
  console.log(props)
  return (
    <div className="quotes-list">
      <button className="generate-random-quote-button"
        onClick={(quote) => { props.dispatch(generateRandomQuote({ quote })) }}>Generate Random Quote</button>
      <h3 className="quote-title"></h3>
      <p className="quote-text"></p>
      <p className="quote-author"></p>
    </div>
  )
};

<button onClick={() => {
  dispatch(removeNote({ id }))
}}>Remove</button>

const mapStateToProps = (state, props) => {
  return {
    quotes: state.quotes
  };
};
export default connect(mapStateToProps)(QuoteList);


// export default connect(mapStateToProps)(QuoteList);
//return <QuoteListItem key={quote.id}{...quote} /> */





