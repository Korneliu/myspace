import { v4 as uuidv4 } from 'uuid';

//ADD_QUOTE
export const addQuote = ({
  title = '',
  text = '',
  author = ''
} = {}) => ({
  type: 'ADD_QUOTE',
  quotes: {
    id: uuidv4(),
    title,
    text,
    author
  }
})

//REMOVE_QUOTE
export const removeQuote = ({ id } = {}) => ({
  type: 'REMOVE_QUOTE',
  id
});