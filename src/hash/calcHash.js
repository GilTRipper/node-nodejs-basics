import crypto from 'node:crypto';
import fs from 'fs/promises';
const calculateHash = async () => {
  try {
    const data = await fs.readFile(
      'src/hash/files/fileToCalculateHashFor.txt',
      { encoding: 'utf-8' }
    );
    const hash = crypto.createHash('sha256').update(data);
    console.log(hash.digest('hex'));
  } catch (e) {
    throw new Error('Hash operation failed');
  }
};

await calculateHash();
