import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase';

//ADD_QUOTE
export const addQuote = (quote) => ({
  type: 'ADD_QUOTE',
  quote
});

export const startAddQuote = (quoteData = {}) => {
  return (dispatch) => {
    const {
      title = '',
      text = '',
      author = ''
    } = quoteData;

    const quote = { title, text, author }
    database.ref('quotes').push(quote).then((ref) => {
      dispatch(addQuote({
        id: ref.key,
        ...quote
      }))
    });
  }
}

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
});