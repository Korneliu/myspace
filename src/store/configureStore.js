import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import notesReducer from "../reducers/notes";
import quotesReducer from "../reducers/quotes";
import ideasReducer from "../reducers/ideas";
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      notes: notesReducer,
      quotes: quotesReducer,
      ideas: ideasReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store
};


//demo state
// const demostate = {
//   quotes: [{
//     title: 'what is important ?',
//     quote: 'be happy',
//     author: 'max'
//   }],
//   ideas: [{
//     text: 'idea text',
//     title: 'idea title'

//   }]
// }