import React from 'react';
import Navbar from '../Navbar';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import IdeaListItem from './IdeaListItem';
import QuotesList from './QuotesList';
import { generateRandomQuote } from '../../actions/quotes';



const QuotesIdeas = (props) => (
  <div className='quotesideas-layout'>
    <h1>Quotes & Ideas</h1>
    <Navbar />

    <div className="ideas-quotes">
      <div className="quotes">
        <h3>Quotes</h3>
        <NavLink to="/createquote" activeClassName="is-active" id="create-quote-link">Create Quote</NavLink>
        <QuotesList />
      </div>
      <div className="ideas">
        <h3>Ideas</h3>
        <NavLink to="/createidea" activeClassName="is-active" id="create-idea-link">Create Idea</NavLink>
        {
          props.ideas.map((idea) => {
            return <IdeaListItem key={idea.id}{...idea} />
          })
        }
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    ideas: state.ideas,
    quotes: state.quotes
  }
};

export default connect(mapStateToProps)(QuotesIdeas);
//

// {
//   props.ideas.map((idea) => {
//     return <IdeaListItem key={idea.id}{...idea} />
//   })
// }


/*   < button onClick = {() => {
  console.log(props.ideas[3])
  props.ideas.map((idea) => {
    return <IdeaListItem key={idea.id}{...idea} />
  })
}}> Generate Idea</button > */

// <button onClick={() => {
    //   console.log(props.ideas[3])
    //   let title = props.ideas.text
    //   console.log(title)

    //   props.ideas.map((idea) => {
    //     return
    //   })
    // }}>Generate Idea</button>