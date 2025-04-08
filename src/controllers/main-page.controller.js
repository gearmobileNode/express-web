import { getTodos } from '../models/todos-model.js';

function mainController(_, res) {
  const todos = getTodos();

  const ctx = {
    todos,
    title: 'Запланированные дела',
  };

  res.render('main', ctx);
}

export default mainController;
