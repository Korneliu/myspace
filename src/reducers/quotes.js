
const quotesDefaultState = [];
export default (state = quotesDefaultState, action) => {
  switch (action.type) {
    case 'ADD_QUOTE':
      return [
        ...state,
        action.quote
      ]
  }
}