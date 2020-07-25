const {Router} = require('express');
const loadJson = require('../json');

const router = new Router();

function handleJsonError(res) {
  res.status(503).send({ mesage: 'Ошибка чтения users.json' });
}

function getUserById(req, res, next) {
  const { id } = req.params;
  loadJson('./data/users.json').then((users) => {
    const user = users.find((u) => u._id === id); // eslint-disable-line no-underscore-dangle
    if (user) {
      req.user = user;
      next();
    } else {
      res.send({
        message: 'Нет пользователя с таким id',
      });
    }
  }, () => handleJsonError(res));
}

router.get('/users', (req, res) => {
  loadJson('./data/users.json').then((users) => res.send(users), () => handleJsonError(res));
});

router.get('/users/:id', getUserById, (req, res) => {
  res.send(req.user);
});

module.exports = router;
