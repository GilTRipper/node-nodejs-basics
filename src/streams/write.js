import fs from 'fs';
import process from 'process';
import { pipeline } from 'stream/promises';

const write = async () => {
  try {
    const writeStream = fs.createWriteStream(
      'src/streams/files/fileToWrite.txt',
      { encoding: 'utf-8' }
    );
    await pipeline(process.stdin, writeStream);
  } catch (error) {
    throw new Error(error);
  }
};

await write();
