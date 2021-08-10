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

store.dispatch(addQuote({
  title: 'Leverage', text: 'Humans evolved in societies where there was no leverage. If I was chopping wood or carrying water for you, you knew eight hours put in would be equal to about eight hours of output. Now weve invented leverage...As a worker, you want to be as leveraged as possible so you have a huge impact without as much time or physical effort.', author: 'Naval Ravikant '
}));
store.dispatch(addQuote({ title: 'Lessons of life', text: 'There are years that ask questions, and years that answer.', author: 'Zora Neale Hurston' }));
store.dispatch(addQuote({ title: 'Love to learn', text: 'Books are paper ships, to all the worlds, to ancient Egypt, outer space, eternity, into the childhood of your favorite musician, and — the most precious stunning journey of all — into your own heart, your own family, your own history and future and body ', author: 'Anne Lamott' }))
store.dispatch(addQuote({ title: 'Beautiful people', text: 'The most beautiful people we have known are those who have known defeat, known suffering, known struggle, known loss, and have found their way out of the depths. These persons have an appreciation, a sensitivity, and an understanding of life that fills them with compassion, gentleness, and a deep loving concern. Beautiful people do not just happen.', author: 'Elisabeth Kübler Ross' }));
/* const quote1 = store.dispatch(removeQuote({ id: "dd1fefa4 - 10c5- 446c - 927b - caccc572de69" })) */

//store.dispatch(editQuote(quoteOne.quote.id, { title: 'Whatever' }));
//store.dispatch(editNote(noteOne.note.id, { text: 'Whatever' }));


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)


ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetIdeas()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
})

