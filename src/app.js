import express from 'express';
import { config } from 'dotenv';

import './models/loader.js';
import './controllers/todos-controller.js';
import { mainPage } from './controllers/todos-controller.js';

config();

const port = process.env.PORT || 8000;
const app = express();

app.get('/', mainPage);
app.set('x-powered-by', true);

app.listen(port, () => console.log(`Server start on http://localhost:${port}`));
