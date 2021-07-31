// Quotes
const quotesDefaultState = []
export default (state = quotesDefaultState, action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [
        ...state,
        action.quotes
      ]
    case 'REMOVE_QUOTE':
      return state.filter(({ id }) => !id === action.id);
    default:
      return state;
  };
};
