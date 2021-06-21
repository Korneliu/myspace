import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import AppRouter from './routers/AppRouter';
import { createStore, combineReducers } from 'redux';
import { addSelfImpNote } from './actions/selfImpNotes';
import { removeSelfImpNote } from './actions/selfImpNotes';
import { selfImpNotesReducer } from './reducers/selfImpNotes';
import { addNote } from './actions/notes';
import { removeNote } from './actions/notes';
import { editNote } from './actions/notes';
import { notesReducer } from './reducers/notes';



//Store creation
const store = createStore(
  combineReducers({
    notes: notesReducer,
    selfImpNotes: selfImpNotesReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
})

const noteOne = store.dispatch(addNote({ description: 'OBJ', note: 'learn about objects' }))
const noteTwo = store.dispatch(addNote({ description: 'JS', note: 'learn about spread op' }))
const selfImpNoteOne = store.dispatch(addSelfImpNote({ title: 'room', text: 'biggest room' }));

store.dispatch(removeNote({ id: noteOne.notes.id }))
//store.dispatch(removeSelfImpNote({ id: selfImpNoteOne.selfImpNotes.id }));
store.dispatch(editNote(noteTwo.notes.id, { description: 'whatever', note: 'learn about whatever' }))


// console.log(noteTwo)
//console.log(selfImpNoteOne)


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

