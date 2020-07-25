import express from 'express';
import path from 'path';
import cards from './routes/cards.js';
import users from './routes/users.js';

const { PORT = 3000 } = process.env;
const app = express();
app.use('/', cards, users);
app.use(express.static(path.join(process.cwd(), 'public')));
app.use((req, res) => {
  res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
});
app.listen(PORT);
