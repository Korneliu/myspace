// Quotes
const quotesDefaultState = []
export default (state = quotesDefaultState, action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [
        ...state,
        action.quote
      ]
    case 'REMOVE_QUOTE':
      return state.filter(({ id }) => !id === action.id);
    case 'EDIT_QUOTE':
      return state.map((quote) => {
        if (quote.id === action.id) {
          return {
            ...quote,
            ...action.updates
          }
        } else {
          return quote;
        }
      })
    /*  case 'GENERATE_RANDOM_QUOTE':
       return action.quotes[0] */
    default:
      return state;
  };
};
