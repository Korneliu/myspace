import { createStore, combineReducers } from "redux";
import notesReducer from "../reducers/notes";
import selfImpNotesReducer from "../reducers/selfImpNotes";

//selfImpNotes -> self improvement notes

export default () => {
  const store = createStore(
    combineReducers({
      notes: notesReducer,
      selfImpNotes: selfImpNotesReducer
    })
  );
  return store
};


