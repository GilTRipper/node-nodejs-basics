import fs from 'fs';
import { join } from 'path';
import process from 'process';
import { pipeline } from 'stream/promises';
import { getDirname } from '../utils.js';

const __dirname = getDirname(import.meta.url);

const write = async () => {
  const path = join(__dirname, 'files', 'fileToWrite.txt');
  try {
    const writeStream = fs.createWriteStream(path, { encoding: 'utf-8' });
    await pipeline(process.stdin, writeStream);
  } catch (error) {
    throw new Error('Stream operation failed');
  }
};

await write();
