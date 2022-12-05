import crypto from 'crypto';
import fs from 'fs/promises';
import { join } from 'path';
import { getDirname } from '../utils.js';

const __dirname = getDirname(import.meta.url);

const calculateHash = async () => {
  try {
    const data = await fs.readFile(
      join(__dirname, 'files', 'fileToCalculateHashFor.txt'),
      { encoding: 'utf-8' }
    );
    const hash = crypto.createHash('sha256').update(data);
    console.log(hash.digest('hex'));
  } catch (e) {
    throw new Error('Hash operation failed');
  }
};

await calculateHash();
