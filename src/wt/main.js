import { cpus } from 'os';
import { join } from 'path';
import { Worker } from 'worker_threads';
import { getDirname } from '../utils.js';

const __dirname = getDirname(import.meta.url);

const modulePath = join(__dirname, 'worker.js');

const startWorker = (workerData) =>
  new Promise((resolve, reject) => {
    const worker = new Worker(modulePath, { workerData });
    worker.on('message', resolve);
    worker.on('error', reject);
  });

const performCalculations = async () => {
  try {
    const workers = cpus().map((_, index) => startWorker(10 + index));
    const results = (await Promise.allSettled(workers)).map(
      ({ status, value }) => ({
        result: status,
        value: value ?? null,
      })
    );
    console.log(results);
  } catch (error) {
    throw new Error('WT operation failed');
  }
};

await performCalculations();
