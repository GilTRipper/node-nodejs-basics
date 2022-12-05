import { cpus } from 'os';
import { Worker } from 'worker_threads';

const startWorker = (num) =>
  new Promise((resolve, reject) => {
    const worker = new Worker('./src/wt/worker.js', { workerData: num });
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
