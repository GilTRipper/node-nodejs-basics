import process from 'process';
import fs from 'fs';
import { Transform } from 'stream';
import { pipeline } from 'stream/promises';

const transform = async () => {
  const transformStream = fs.createWriteStream(
    'src/streams/files/fileToWrite.txt',
    { encoding: 'utf-8' }
  );

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
};

await transform();
