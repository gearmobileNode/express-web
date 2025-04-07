import { join } from 'node:path';
import { readFileSync } from 'node:fs';

import { currentDir } from '../helpers/helper.js';

const dataFilePath = join(currentDir, 'data', 'todos.json');
const data = JSON.parse(readFileSync(dataFilePath, 'utf-8'));

export { data };
