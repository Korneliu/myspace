import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addNote } from './actions/notes';
import { startSetIdeas } from './actions/ideas';
import { addQuote, removeQuote } from '../src/actions/quotes.js';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase';



const store = configureStore();


store.dispatch(addNote({ description: 'Map', text: 'read about map method' }))
store.dispatch(addNote({ description: 'Database', text: 'read about database structure' }))
store.dispatch(addNote({ description: 'Spread', text: 'read about spread operator' }))
store.dispatch(addQuote({ title: 'Social Network', text: '"I argue that the most powerful thing you can do to add healthy years is to curate your immediate social network' }));
console.log(store.getState());
store.dispatch(removeQuote({ id: "dd1fefa4 - 10c5- 446c - 927b - caccc572de69" }))

console.log(store.getState());


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)


ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetIdeas()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
})