import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import AppRouter from './routers/AppRouter';
import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';


//Actions generators
//ADD_NOTE
const addNote = (
  { description = '',
    note = ''
  } = {}) =>
({
  type: 'ADD_NOTE',
  notes: {
    id: uuidv4(),
    description,
    note
  }
});
// REMOVE_NOTE
const removeNote = ({ id } = {}) => ({
  type: 'REMOVE_NOTE',
  id
})
// Reducers
const notesReducerDefaultState = []
const notesReducer = (state = notesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [
        ...state,
        action.notes
      ]
    case 'REMOVE_NOTE':
      return state.filter(({ id }) => id !== action.id);

    default:
      return state;
  }
}

//Store creation
const store = createStore(
  combineReducers({
    notes: notesReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
})

const noteOne = store.dispatch(addNote({ description: 'OBJ', note: 'learn about objects' }))
const noteTwo = store.dispatch(addNote({ description: 'JS', note: 'learn about spread op' }))

store.dispatch(removeNote({ id: noteOne.notes.id }))

console.log(noteOne)
console.log(noteTwo)

const jsx = (
  <div>
    <AppRouter />
  </div>
)

const demostate = {
  notes: [{
    id: 'asdfasd',
    description: 'About computers',
    note: 'I need to buy new graphic card',
    date: 'December 24'
  }],
  notesSelfImprovement: [{
    id: 'asdfasd',
    description: 'how to rebound from mistake',
    question: 'what is easy for you',
    note: 'always remember',
    date: 'December 24'
  }]
}


ReactDOM.render(jsx, document.getElementById('app'))

