import { v4 as uuidv4 } from 'uuid';
// Add Idea
export const addIdea = (
  {
    title = '',
    text = ''
  } = {}
) => ({
  type: 'ADD_IDEA',
  ideas: {
    id: uuidv4(),
    title,
    text
  }
});

