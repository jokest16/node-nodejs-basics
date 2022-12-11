import { readFile } from 'fs/promises';

const read = async (readFilePath = 'src/fs/files/fileToRead.txt') =>
    await readFile(readFilePath)
        .then((currentDirContent) => console.log(currentDirContent.toString()))
        .catch(() => {
            throw new Error('FS operation failed')
    });

await read();