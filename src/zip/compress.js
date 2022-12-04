import fs from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';
import { rm } from 'fs/promises';

const compress = async () => {
  try {
    const source = fs.createReadStream('src/zip/files/fileToCompress.txt');
    const destination = fs.createWriteStream('src/zip/files/archive.gz');
    const gzip = createGzip();

    await pipeline(source, gzip, destination).then(async () => {
      await rm('src/zip/files/fileToCompress.txt');
    });
  } catch (error) {
    throw new Error('Zip operation failed');
  }
};

await compress();
