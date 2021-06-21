import { v4 as uuidv4 } from 'uuid';

//ADD_SELFIMPNOTE
export const addSelfImpNote = (
  { title = '',
    text = ''
  } = {}) =>
({
  type: 'ADD_SELFIMPNOTE',
  selfImpNotes: {
    id: uuidv4(),
    title,
    text
  }
});

// REMOVE_SELFIMPONOTE
export const removeSelfImpNote = ({ id } = {}) => ({
  type: 'REMOVE_SELFIMPNOTE',
  id
});

