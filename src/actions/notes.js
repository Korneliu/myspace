import { v4 as uuidv4 } from 'uuid';

//ADD_NOTE
export const addNote = (
  { description = '',
    text = ''
  } = {}) =>
({
  type: 'ADD_NOTE',
  notes: {
    id: uuidv4(),
    description,
    text
  }
});

// REMOVE_NOTE
export const removeNote = ({ id } = {}) => ({
  type: 'REMOVE_NOTE',
  id
});

//EDIT_NOTE
export const editNote = (id, updates) => ({
  type: 'EDIT_NOTE',
  id,
  updates
})