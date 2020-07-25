const { Router } = require('express');
const users = require('../data/users.json');

const router = new Router();

function getUserById(req, res, next) {
  const { id } = req.params;
  const user = users.find((u) => u._id === id); // eslint-disable-line no-underscore-dangle
  if (user) {
    req.user = user;
    next();
  } else {
    res.send({
      message: 'Нет пользователя с таким id',
    });
  }
}

router.get('/users', (req, res) => {
  res.send(users);
});

router.get('/users/:id', getUserById, (req, res) => {
  res.send(req.user);
});

module.exports = router;
