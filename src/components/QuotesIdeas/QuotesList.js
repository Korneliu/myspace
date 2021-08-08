import React from 'react';
import { connect } from 'react-redux';
import QuoteListItem from './QuoteListItem';
import IdeaListItem from './IdeaListItem';


class QuoteList extends React.Component {
  constructor(props) {
    super(props)
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
    this.setState(() => ({ title: quoteTitle, text: quoteText, author: quoteAuthor }))
  };
  render() {
    return (
      <div>
        <h1>Quotes from class component</h1>
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
//     <h1>Quotes List</h1>
//     <p>{props.quotes[0].title}</p>
//     <p>{props.quotes[0].text}</p>

//   </div>
// );

// const mapStateToProps = (state) => {
//   return {
//     quotes: state.quotes
//   };
// };

// export default connect(mapStateToProps)(QuoteList);
//return <QuoteListItem key={quote.id}{...quote} /> */

