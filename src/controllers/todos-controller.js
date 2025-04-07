import { getTodos } from '../models/todos-model.js';

function mainPage(_, res) {
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

  list += '  </body>' + '</html>';

  res.send(list);
}

export { mainPage };
