import { v4 as uuidv4 } from 'uuid';

//ADD_QUOTE
export const addQuote = ({
  title = '',
  text = '',
  author = ''
} = {}) => ({
  type: 'ADD_QUOTE',
  quote: {
    id: uuidv4(),
    title,
    text,
    author
  }
});

//REMOVE_QUOTE
export const removeQuote = ({ id } = {}) => ({
  type: 'REMOVE_QUOTE',
  id
});


// EDIT_QUOTE
export const editQuote = (id, updates) => ({
  type: 'EDIT_QUOTE',
  id,
  updates
})