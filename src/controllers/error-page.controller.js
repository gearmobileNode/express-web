function errorController(_, res) {
  res.status(404);

  res.render('404', {
    title: 'Ошибка',
    description: 'Запрошенная страница не существует.',
  });
}

export default errorController;
