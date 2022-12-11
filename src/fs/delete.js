import { unlink } from 'fs/promises';

const remove = async (deletingFilePath = 'src/fs/files/fileToRemove.txt') =>
    await unlink(deletingFilePath).catch(() => {
        throw new Error('FS operation failed');
    });

await remove();