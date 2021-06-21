import { createStore, combineReducers } from "redux";
import notesReducer from "../reducers/notes";
import selfImpNotesReducer from "../reducers/selfImpNotes";

export default () => {
  const store = createStore(
    combineReducers({
      notes: notesReducer,
      selfImpNotes: selfImpNotesReducer
    })
  );
  return store
};


