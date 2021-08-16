import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addNote, editNote, removeNote } from './actions/notes';
import { startSetIdeas } from './actions/ideas';
import { addQuote, removeQuote, editQuote } from '../src/actions/quotes.js';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase';



const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
})


const noteOne = store.dispatch(addNote({ description: 'Map', text: 'read about map method' }))
const noteTwo = store.dispatch(addNote({ description: 'Spread Operator', text: 'read about map method' }))
store.dispatch(addNote({ description: 'ForEach', text: 'Learn ForEach method' }));
store.dispatch(addNote({ description: 'Object literal', text: 'Read about Object literals' }));
store.dispatch(addNote({ description: 'Sort Method', text: 'Practice Sort method' }));




const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)


ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetIdeas()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
})

