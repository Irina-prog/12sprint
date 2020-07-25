import express from 'express';
import loadJson from '../json.js';

const router = new express.Router();

router.get('/cards', (req, res) => {
  loadJson('./data/cards.json').then((cards) => {
    res.send(cards);
  }, () => {
    res.status(503).send({ mesage: 'Ошибка чтения cards.json' });
  });
});

export default router;
