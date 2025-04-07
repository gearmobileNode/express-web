import { data } from './loader.js';

const todos = data.todos;

function getTodos() {
  return [...todos];
}

export { getTodos };
