import fs from 'fs';
import { createUnzip } from 'zlib';
import { pipeline } from 'stream/promises';
import { rm } from 'fs/promises';
import { getDirname } from '../utils.js';
import { join } from 'path';

const __dirname = getDirname(import.meta.url);
const filesPath = join(__dirname, 'files');

const decompress = async () => {
  try {
    const sourcePath = join(filesPath, 'archive.gz');
    const destinationPath = join(filesPath, 'fileToCompress.txt');

    const source = fs.createReadStream(sourcePath);
    const destination = fs.createWriteStream(destinationPath);
    const unzip = createUnzip();

    await pipeline(source, unzip, destination).then(async () => {
      await rm(sourcePath);
    });
  } catch (error) {
    throw new Error('Zip operation failed');
  }
};

await decompress();
