import fs from 'fs';
import { createUnzip } from 'zlib';
import { pipeline } from 'stream/promises';
import { rm } from 'fs/promises';

const decompress = async () => {
  const source = fs.createReadStream('src/zip/files/archive.gz');
  const destination = fs.createWriteStream('src/zip/files/fileToCompress.txt');
  const unzip = createUnzip();

  await pipeline(source, unzip, destination).then(async () => {
    await rm('src/zip/files/archive.gz');
  });
};

await decompress();
