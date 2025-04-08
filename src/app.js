import express from 'express';
import { config } from 'dotenv';

import './models/loader.js';
import router from './router/router.js';

config();

const port = process.env.PORT || 8000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/templates');

app.use('/', router);

app.listen(port, () => console.log(`Server start on http://localhost:${port}`));
