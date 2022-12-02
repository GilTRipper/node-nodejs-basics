import fs from 'fs/promises';

const copy = async () => {
  try {
    const files = await fs.readdir('src/fs/files');
    await fs.mkdir('src/fs/filesCopy');
    for (let file of files) {
      await fs.copyFile(`src/fs/files/` + file, 'src/fs/filesCopy/' + file);
    }
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

await copy();
