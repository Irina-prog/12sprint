import express from 'express';
import path from 'path';

const { PORT = 3000 } = process.env;
const app = express();
app.use(express.static(path.join(process.cwd(), 'public')));
app.listen(PORT);
