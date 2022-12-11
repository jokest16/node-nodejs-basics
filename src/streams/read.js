import { createReadStream } from 'fs';
import { stdout } from 'node:process';


const read = async (readFilePath = 'src/streams/files/fileToRead.txt') => {
    const fileStream = createReadStream(readFilePath);

    fileStream.on('data', (data) => {
        stdout.write(data.toString())
    })
};

await read();