import fs from 'fs/promises';
const read = async () => {
  try {
    const data = await fs.readFile('src/fs/files/fileToRead.txt', {
      encoding: 'utf-8',
    });
    console.log(data);
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

await read();
