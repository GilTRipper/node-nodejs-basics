import fs from 'fs';
import { createGzip } from 'zlib';
import { pipeline } from 'stream/promises';
import { rm } from 'fs/promises';
import { getDirname } from '../utils.js';
import { join } from 'path';

const __dirname = getDirname(import.meta.url);
const filesPath = join(__dirname, 'files');

const compress = async () => {
  const sourcePath = join(filesPath, 'fileToCompress.txt');
  const destinationPath = join(filesPath, 'archive.gz');
  try {
    const source = fs.createReadStream(sourcePath);
    const destination = fs.createWriteStream(destinationPath);
    const gzip = createGzip();

    await pipeline(source, gzip, destination).then(async () => {
      await rm(sourcePath);
    });
  } catch (error) {
    throw new Error('Zip operation failed');
  }
};

await compress();
