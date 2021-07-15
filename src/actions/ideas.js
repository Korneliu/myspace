import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase';

// Add Idea
export const addIdea = (idea) => ({
  type: 'ADD_IDEA',
  idea
});

export const startAddIdea = (ideaData = {}) => {
  return (dispatch) => {
    const {
      title = '',
      text = ''
    } = ideaData
    const idea = { title, text }

    database.ref('ideas').push(idea).then((ref) => {
      dispatch(addIdea({
        id: ref.id,
        ...idea
      }))
    })
  };
};