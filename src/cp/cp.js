import cp from 'child_process';

const spawnChildProcess = async (args) => {
  cp.fork('src/cp/files/script.js', args);
};

spawnChildProcess(['first', 'second', 'third']);
