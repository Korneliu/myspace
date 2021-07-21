import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addNote } from './actions/notes';
import { startSetIdeas } from './actions/ideas';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase';



const store = configureStore();


store.dispatch(addNote({ description: 'Map', text: 'read about map method' }))
store.dispatch(addNote({ description: 'Database', text: 'read about database structure' }))
store.dispatch(addNote({ description: 'Spread', text: 'read about spread operator' }))

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