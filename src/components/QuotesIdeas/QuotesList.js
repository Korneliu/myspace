
import React from 'react';
import { connect } from 'react-redux';
import QuoteListItem from './QuoteListItem';


class QuoteList extends React.Component {
  constructor(props) {
    super(props)
  };
  handleClick = () => {
    //console.log(this.state.length)
  };
  render() {
    return (
      <div className="quotes-list">
        <button className="generate-random-quote-button" onClick={this.handleClick}>Generate Random Quote</button>
        <h3 className="quote-title"></h3>
        <p className="quote-text"></p>
        <p className="quote-author"></p>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    quotes: state.quotes
  };
};
export default connect(mapStateToProps)(QuoteList);


// export default connect(mapStateToProps)(QuoteList);
//return <QuoteListItem key={quote.id}{...quote} /> */





