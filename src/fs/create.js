import { access, writeFile } from 'fs/promises';

const create = async () => {
    const filePath = 'src/fs/files/fresh.txt';
    const isExistingFile = await access(filePath).then(() => true).catch(() => false);

    if (isExistingFile) {
        throw new Error('FS operation failed');
    }

    await writeFile(filePath,'I am fresh and young', () => {})
};

await create();