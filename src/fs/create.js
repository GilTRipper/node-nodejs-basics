import fs from 'fs/promises';

const create = async () => {
  const file = await fs
    .readFile('src/fs/files/freshText.txt')
    .catch(async () => {
      await fs.writeFile('src/fs/files/freshText.txt', 'I am fresh and young');
    });
  if (file) throw new Error('FS operation failed');
};

await create();
