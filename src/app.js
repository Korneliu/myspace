import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addNote } from './actions/notes';
import { addSelfImpNote } from './actions/selfImpNotes';
import 'normalize.css/normalize.css'
import './styles/styles.scss'


const store = configureStore();

store.dispatch(addNote({ description: 'OBJ', note: 'learn about objects' }))
store.dispatch(addNote({ description: 'JS', note: 'learn about spread op' }))
store.dispatch(addSelfImpNote({ title: 'room', text: 'biggest room' }));

console.log(store.getState());

const jsx = (
  <div>
    <AppRouter />
  </div>
)
/* 
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
 */


ReactDOM.render(jsx, document.getElementById('app'))

