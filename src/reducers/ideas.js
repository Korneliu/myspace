const defaultIdeasState = [];
export default (state = defaultIdeasState, action) => {
  switch (action.type) {
    case 'ADD_IDEA':
      return [
        ...state,
        action.ideas
      ]
    default:
      return state
  }
}