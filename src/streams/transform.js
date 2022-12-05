import process from 'process';
import fs from 'fs';
import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

import { getDirname } from '../utils.js';
import { join } from 'path';

const __dirname = getDirname(import.meta.url);

const transform = async () => {
  const path = join(__dirname, 'files', 'filesToWrite.txt');
  try {
    const transformStream = fs.createWriteStream(path, { encoding: 'utf-8' });

    const reverse = new Transform({
      transform(chunk, _, callback) {
        try {
          const resultString = chunk
            .toString('utf-8')
            .split('')
            .reverse()
            .join('');
          callback(null, resultString);
        } catch (e) {
          callback(e);
        }
      },
    });

    await pipeline(process.stdin, reverse, transformStream);
  } catch (error) {
    throw new Error('Stream operation failed');
  }
};

await transform();
