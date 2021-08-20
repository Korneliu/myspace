import { v4 as uuidv4 } from 'uuid';
import database from '../firebase/firebase';

// ADD_IDEA
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
        id: ref.key,
        ...idea
      }))
    })
  };
};

//SET_IDEAS
export const setIdeas = (ideas) => ({
  type: 'SET_IDEAS',
  ideas
})

//START_SET_IDEAS
export const startSetIdeas = () => {
  return (dispatch) => {
    return database.ref('ideas').once('value').then((snapshot) => {
      const ideas = [];
      snapshot.forEach((childSnapshot) => {
        ideas.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      });
      dispatch(setIdeas(ideas));
    })
  }
};



// export const startGenerateRandomIdea = () => {
//   return (dispatch) => {
//     return database.ref('ideas').once('value').then((snapshot) => {

//     })
//   }
// }

// REMOVE_IDEA
export const removeIdea = ({ id } = {}) => ({
  type: 'REMOVE_IDEA',
  id
});

export const startRemoveExpense = ({ id } = {}) => {
  return (dispatch) => {
    return database.ref(`ideas/${id}`).remove().then(() => {
      dispatch(removeIdea({ id }));
    })
  }
};



/*
export const startSetIdeas = () => {
  return (dispatch) => {
    return database.ref('ideas').once('value').then((snapshot) => {
      const ideas = [];
      snapshot.forEach((childSnapshot) => {
        ideas.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        })
      });
      dispatch(setIdeas(ideas));
    })
  }
}; */

// export const startSetIdeas = () => {
//   return (dispatch) => {
//     return database.ref('ideas').once('value').then((snapshot) => {
//       const val = snapshot.val();
//       const ideas = [];
//       snapshot.forEach(childSnapshot => {
//         let item = childSnapshot.val();
//         item.key = childSnapshot.key;
//         ideas.push(item)
//       })
//       console.log(ideas[0])
//       dispatch(setIdeas(ideas[0]));
//     })
//   }
// };