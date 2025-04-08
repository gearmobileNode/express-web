import { getTodos, getTodo } from '../models/todos-model.js';

function mainController(_, res) {
  const todos = getTodos();

  let list =
    '<!doctype html>' +
    '<html>' +
    '  <head>' +
    '    <meta charset="UTF-8">' +
    '    <title>Список запланированных дел</title>' +
    '  </head>' +
    '  <body>' +
    '    <h1>Запланированные дела</h1>';

  for (let todo of todos) {
    const date = new Date(todo.createdAt);

    list +=
      `    <h2><a href="/${todo._id}/">${todo.title}</a></h2>` +
      `    <p>${todo.desc}</p>` +
      `    <p>${date.toLocaleString()}</p>` +
      '    <p>&nbsp;</p>';
  }

  list += '</body>' + '</html>';

  res.send(list);
}

function detailController(req, res) {
  const todo = getTodo(req.params.id);

  if (!todo) {
    errorController(req, res);
    return;
  }

  const date = new Date(todo.createdAt);
  res.send(
    '<!doctype html>' +
      '<html>' +
      '  <head>' +
      '    <meta charset="UTF-8">' +
      `    <title>${todo.title} :: Список запланированных ` +
      'дел</title>' +
      '  </head>' +
      '  <body>' +
      `    <h1>${todo.title}</h1>` +
      `    <p>${todo.desc}</p>` +
      `    <p>Создано: ${date.toLocaleString()}</p>` +
      '  </body>' +
      '</html>',
  );
}

function errorController(_, res) {
  res.status(404);

  res.send(
    '<!doctype html>' +
      '<html>' +
      '  <head>' +
      '    <meta charset="UTF-8">' +
      '    <title>Ошибка</title>' +
      '  </head>' +
      '  <body>' +
      '    <h1>Ошибка!</h1>' +
      '    <p>Запрошенная страница не существует.</p>' +
      '  </body>' +
      '</html>',
  );
}

export { mainController, detailController };
