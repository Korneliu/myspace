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
    console.log(this.props.quotes.length)
    let quoteObject = this.props.quotes[0]
    let quoteTitle = quoteObject.title
    let quoteText = quoteObject.text
    let quoteAuthor = quoteObject.author
    this.setState(() => ({ title: quoteTitle, text: quoteText, author: quoteAuthor }));
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Generate Random Quote</button>
        <h3>{this.state.title}</h3>
        <p>{this.state.text}</p>
        <p>{this.state.author}</p>
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

