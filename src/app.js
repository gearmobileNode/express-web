import express from 'express';
import { config } from 'dotenv';

import './models/loader.js';
import router from './router/router.js';

config();

const port = process.env.PORT || 8000;
const app = express();

app.use('/', router);

app.listen(port, () => console.log(`Server start on http://localhost:${port}`));
