import * as log4js from 'log4js';
import { join } from 'path';
import { existsSync } from 'fs';
const cwd = process.cwd();
const config = join(cwd, 'log4js.json');

if (existsSync(config)) {
    log4js.configure(config);
}

export const logger = log4js.getLogger('app');