import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addNote } from './actions/notes';
import { addSelfImpNote } from './actions/selfImpNotes';
import 'normalize.css/normalize.css'
import './styles/styles.scss'


const store = configureStore();


store.dispatch(addNote({ description: 'Objects', text: 'learn about objects' }))
store.dispatch(addNote({ description: 'ForEach', text: 'learn about ForEach ' }))
store.dispatch(addNote({ description: 'Spread', text: 'learn about spread op' }))
store.dispatch(addSelfImpNote({ title: 'room', text: 'biggest room' }));

console.log(store.getState());


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)



ReactDOM.render(jsx, document.getElementById('app'))