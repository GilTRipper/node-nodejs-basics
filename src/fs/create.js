import fs from 'fs/promises';
import { join } from 'path';
import { getDirname } from '../utils.js';

const __dirname = getDirname(import.meta.url);

const _text = 'I am fresh and young';

const create = async () => {
  const filePath = join(__dirname, 'files', 'freshText.txt');
  const file = await fs.readFile(filePath).catch(async () => {
    await fs.writeFile(filePath, _text);
  });
  if (file) throw new Error('FS operation failed');
};

await create();
