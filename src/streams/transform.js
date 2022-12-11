import { Transform } from 'node:stream';
import { stdin, stdout } from 'node:process';

const transform = async () => {
    const transformData = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join(''));
        },
    });

    transformData.on('data', (chunk) => stdout.write(chunk));

    stdin.on('data', async (data) => {
        transformData.write(data)
    })
};

await transform();