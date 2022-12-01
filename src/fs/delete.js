import fs from 'fs/promises';

const remove = async () => {
  try {
    await fs.rm('src/fs/files/fileToRemove.txt');
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

await remove();
