import { data } from './loader.js';

const todos = data.todos;

/** Get all todos */
function getTodos() {
  return [...todos];
}

/** Get unique todo */
function getTodo(id) {
  return todos.find((todo) => todo._id === id);
}

export { getTodos, getTodo };
