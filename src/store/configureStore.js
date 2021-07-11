import { createStore, combineReducers } from "redux";
import notesReducer from "../reducers/notes";
import selfImpNotesReducer from "../reducers/selfImpNotes";
import quotesReducer from "../reducers/quotes";
import ideasReducer from "../reducers/ideas";

//selfImpNotes -> self improvement notes

export default () => {
  const store = createStore(
    combineReducers({
      notes: notesReducer,
      selfImpNotes: selfImpNotesReducer,
      quotes: quotesReducer,
      ideas: ideasReducer
    })
  );
  return store
};


//demo state
const demostate = {
  quote: [{
    quote: 'be happy',
    author: 'max'
  }],
  ideas: [{
    idea: 'keep improving'
  }]
}