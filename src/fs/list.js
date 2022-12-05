import fs from 'fs/promises';
import { join } from 'path';
import { getDirname } from '../utils.js';

const __dirname = getDirname(import.meta.url);

const list = async () => {
  try {
    const filesPath = join(__dirname, 'files');
    const files = await fs.readdir(filesPath);
    console.log(files);
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

await list();
