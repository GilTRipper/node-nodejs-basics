import { dirname } from 'path';
import { fileURLToPath } from 'url';

const getDirname = (path) => dirname(fileURLToPath(path));

export { getDirname };
