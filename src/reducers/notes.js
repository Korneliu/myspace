import React from 'react';

const notesReducerDefaultState = []
export const notesReducer = (state = notesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [
        ...state,
        action.notes
      ]
    case 'REMOVE_NOTE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_NOTE':
      return state.map((note) => {
        if (note.id === action.id) {
          return {
            ...note,
            ...action.updates
          }
        } else {
          return note;
        }
      })

    default:
      return state;
  }
}
