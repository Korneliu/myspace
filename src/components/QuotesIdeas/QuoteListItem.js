import React from 'react';


const QuoteListItem = ({ title, text, author }) => (
  <div>
    <h2>{title}</h2>
    <p>{text}</p>
    <p>{author}</p>
  </div>
)

export default QuoteListItem;