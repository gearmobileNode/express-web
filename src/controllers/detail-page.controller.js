import errorController from './error-page.controller.js';
import { getTodo } from '../models/todos-model.js';

function detailController(req, res) {
  const todo = getTodo(req.params.id);

  if (!todo) {
    errorController(req, res);
    return;
  }

  res.render('detail', {
    todo,
  });
}

export default detailController;
