import fs from 'fs/promises';
import { join } from 'path';
import { getDirname } from '../utils.js';

const __dirname = getDirname(import.meta.url);

const read = async () => {
  const path = join(__dirname, 'files', 'fileToRead.txt');
  try {
    const data = await fs.readFile(path, { encoding: 'utf-8' });
    console.log(data);
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

await read();
