import fs from 'fs/promises';

const copy = async () => {
  try {
    await fs.readdir('src/fs/files');
    await fs.mkdir('src/fs/filesCopy');
    await fs.cp('src/fs/files', 'src/fs/filesCopy', { recursive: true });
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

await copy();
