const { Router } = require('express');

const cards = require('../data/cards.json');

const router = new Router();

router.get('/cards', (req, res) => {
  res.send(cards);
});

module.exports = router;
