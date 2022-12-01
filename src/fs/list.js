import fs from 'fs/promises';

const list = async () => {
  try {
    const files = await fs.readdir('src/fs/files');
    console.log(files);
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

await list();
