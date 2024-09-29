import path from 'path';
import { fileURLToPath } from 'node:url';

// @ts-ignore
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const CONSTS_PATH_APP_ROOT = path.resolve(__dirname, '../../../');
export const CONSTS_PATH_SRC_DIR = path.resolve(CONSTS_PATH_APP_ROOT, './src/');
