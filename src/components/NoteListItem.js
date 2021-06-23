import React from 'react';



const NoteListItem = ({ description, note }) => (
  <div>
    <h3>{description}</h3>
    <p>{note}</p>
  </div>
)


export default NoteListItem;