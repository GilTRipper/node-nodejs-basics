import fs from 'fs';
import { join } from 'path';
import process from 'process';
import { pipeline } from 'stream/promises';
import { getDirname } from '../utils.js';

const __dirname = getDirname(import.meta.url);

const read = async () => {
  const filePath = join(__dirname, 'files', 'fileToRead.txt');
  try {
    const readStream = fs.createReadStream(filePath, 'utf-8');
    await pipeline(readStream, process.stdout);
  } catch (e) {
    throw new Error('Stream operation failed');
  }
};

await read();
