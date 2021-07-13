import { createStore, combineReducers } from "redux";
import notesReducer from "../reducers/notes";
import quotesReducer from "../reducers/quotes";
import ideasReducer from "../reducers/ideas";


export default () => {
  const store = createStore(
    combineReducers({
      notes: notesReducer,
      quotes: quotesReducer,
      ideas: ideasReducer
    })
  );
  return store
};


//demo state
const demostate = {
  quotes: [{
    title: 'what is important ',
    quote: 'be happy',
    author: 'max'
  }],
  ideas: [{
    idea: 'keep improving'
  }]
}