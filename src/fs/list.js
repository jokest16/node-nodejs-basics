import { readdir } from 'fs/promises';

const list = async (readDirPath = 'src/fs/files') =>
    readdir(readDirPath)
        .then((currentDirContent) => console.log(currentDirContent))
        .catch(() => {
            throw new Error('FS operation failed')
    });

await list();