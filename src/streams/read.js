import fs from 'fs';
import process from 'process';
import { pipeline } from 'stream/promises';

const read = async () => {
  try {
    const readStream = fs.createReadStream(
      'src/streams/files/fileToRead.txt',
      'utf-8'
    );
    await pipeline(readStream, process.stdout);
  } catch (e) {
    throw new Error('Stream operation failed');
  }
};

await read();
