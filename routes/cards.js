const {Router} = require('express');
const loadJson = require('../json');

const router = new Router();

router.get('/cards', (req, res) => {
  loadJson('./data/cards.json').then((cards) => {
    res.send(cards);
  }, () => {
    res.status(503).send({ mesage: 'Ошибка чтения cards.json' });
  });
});

module.exports = router;
