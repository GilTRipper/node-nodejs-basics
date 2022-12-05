import fs from 'fs/promises';
import { join } from 'path';
import { getDirname } from '../utils.js';

const __dirname = getDirname(import.meta.url);

const copy = async () => {
  const sourceFilesDir = join(__dirname, 'files');
  const copyFilesDir = join(__dirname, 'filesCopy');
  try {
    const files = await fs.readdir(sourceFilesDir);
    await fs.mkdir(copyFilesDir);
    for (let file of files) {
      await fs.copyFile(join(sourceFilesDir, file), join(copyFilesDir, file));
    }
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

await copy();
