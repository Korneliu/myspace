

//ADD_QUOTE
export default addQuote = ({
  title = '',
  text = '',
  author = ''
} = {}) => ({
  type: 'ADD_QUOTE',
  quotes: {
    title,
    text,
    author
  }
});