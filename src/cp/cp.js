import cp from 'child_process';
import path from 'path';
import { getDirname } from '../utils.js';

const __dirname = getDirname(import.meta.url);

const spawnChildProcess = async (args) => {
  const modulePath = path.join(__dirname, 'files', 'script.js');
  cp.fork(modulePath, args);
};

spawnChildProcess(['first', 'second', 'third']);
