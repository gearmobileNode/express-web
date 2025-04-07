import express from 'express';
import { config } from 'dotenv';

import './models/loader.js';
import './controllers/todos-controller.js';
import { mainPage, detailPage } from './controllers/todos-controller.js';

config();

const port = process.env.PORT || 8000;
const app = express();

app.get('/:id', detailPage);
app.get('/', mainPage);

app.listen(port, () => console.log(`Server start on http://localhost:${port}`));
