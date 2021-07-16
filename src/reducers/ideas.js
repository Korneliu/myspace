
// Ideas Reducer
const defaultIdeasState = [];
export default (state = defaultIdeasState, action) => {
  switch (action.type) {
    case 'ADD_IDEA':
      return [
        ...state,
        action.idea
      ];
    case 'SET_IDEAS':
      return action.ideas;
    default:
      return state
  }
};