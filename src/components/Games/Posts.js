import React from 'react';

const Quotes = ({posts}) => (
  <div>
    <h1>Posts</h1>
    <ul>
      {
        posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            </li>
        ))
      }
    </ul>
   
    

  </div>
)

export default Quotes