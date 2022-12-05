import fs from 'fs/promises';
import { join } from 'path';
import { getDirname } from '../utils.js';

const __dirname = getDirname(import.meta.url);

const rename = async () => {
  const filePath = join(__dirname, 'files', 'wrongFilename.txt');
  const newFilePath = join(__dirname, 'files', 'properFilename.md');
  try {
    await fs.rename(filePath, newFilePath);
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

await rename();
