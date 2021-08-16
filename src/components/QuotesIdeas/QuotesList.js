import { database } from 'firebase';
import React from 'react';
import { connect } from 'react-redux';
import QuoteListItem from './QuoteListItem';


class QuoteList extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      title: '',
      text: '',
      author: ''
    }
  };
  handleClick = (e) => {
    e.preventDefault();
    let propLength = quotes.length;
    console.log(propLength)
    // let randomNumber = Math.floor(Math.random() * propLength)
    // console.log(randomNumber)
    // let quoteObject = props.quotes[randomNumber]
    // let quoteTitle = quoteObject.title
    // let quoteText = quoteObject.text
    // let quoteAuthor = quoteObject.author
    // this.setState(() => ({ title: quoteTitle, text: quoteText, author: quoteAuthor }));
  };
  render() {
    return (
      <div className="quotes-list">
        <button className="generate-random-quote-button" onClick={this.handleClick}>Generate Random Quote</button>
        <h3 className="quote-title">{this.state.title}</h3>
        <p className="quote-text">{this.state.text}</p>
        <p className="quote-author">{this.state.author}</p>
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

// const QuoteList = (props) => (
//   <div>
//     <QuoteListItem />
//   </div>
// );

// const mapStateToProps = (state) => {
//   return {
//     quotes: state.quotes
//   };
// };

// export default connect(mapStateToProps)(QuoteList);
//return <QuoteListItem key={quote.id}{...quote} /> */





