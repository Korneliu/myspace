
// Add Idea
export const addIdea = (
  {
    text = ''
  } = {}
) => ({
  type: 'ADD_IDEA',
  ideas: {
    text
  }
});

