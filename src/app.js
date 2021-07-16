import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addNote } from './actions/notes';
import { addIdea } from './actions/ideas';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase';



const store = configureStore();


store.dispatch(addNote({ description: 'Objects', text: 'learn about objects' }))
store.dispatch(addNote({ description: 'ForEach', text: 'learn about ForEach ' }))
store.dispatch(addNote({ description: 'Spread', text: 'learn about spread op' }))
//store.dispatch(addIdea({ text: 'whatever' }))

console.log(store.getState());



const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)



ReactDOM.render(jsx, document.getElementById('app'))