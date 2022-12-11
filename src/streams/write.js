import { createWriteStream } from 'fs';
import { stdin } from 'node:process';

const write = async (pathOfWriteFile = 'src/streams/files/fileToWrite.txt') => {
    const fileStream = createWriteStream(pathOfWriteFile);

    stdin.on('data', async (data) => {
        fileStream.write(data.toString())
    });
};

await write();