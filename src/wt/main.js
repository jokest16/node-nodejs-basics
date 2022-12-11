import { Worker } from 'node:worker_threads';
import { cpus } from 'os';

const DEFAULT_START_NUMBER = 10;

const getNthFibonacciNumber = (data, workerFilePath = './src/wt/worker.js') => new Promise((resolve, reject) => {
    const newWorker = new Worker(workerFilePath, { workerData: data });

    newWorker.on('message', (data) => resolve({status: 'resolved', data}))
    newWorker.on('error',() => reject({status: 'error', data: null}))
});

const performCalculations = async () =>
    console.log(
        await Promise.all(
            cpus().map((item,index) => getNthFibonacciNumber(index + DEFAULT_START_NUMBER))
        )
    );

await performCalculations();