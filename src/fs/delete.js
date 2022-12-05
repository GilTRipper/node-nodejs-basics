import fs from 'fs/promises';
import { join } from 'path';
import { getDirname } from '../utils.js';

const __dirname = getDirname(import.meta.url);

const remove = async () => {
  try {
    const filePath = join(__dirname, 'files', 'fileToRemove.txt');
    await fs.rm(filePath);
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

await remove();
