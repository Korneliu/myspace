

const selfImpNotesDefaultState = [];
export const selfImpNotesReducer = (state = selfImpNotesDefaultState, action) => {
  switch (action.type) {
    case 'ADD_SELFIMPNOTE':
      return [
        ...state,
        action.selfImpNotes
      ]
    case 'REMOVE_SELFIMPONOTE':
      return state.filter(({ id }) => id !== action.id);
    default:
      return state;
  }
}