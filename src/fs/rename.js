import { access, rename as renameFile } from 'fs/promises';

const rename = async () => {
    const wrongFileNamePath = 'src/fs/files/wrongFilename.txt';
    const properFileNamePath = 'src/fs/files/properFilename.md';
    const isExistingFile = await access(properFileNamePath).then(() => true).catch(() => false);
    const hasRenamingTarget = await access(wrongFileNamePath).then(() => true).catch(() => false);

    if (isExistingFile || !hasRenamingTarget) {
        throw new Error('FS operation failed');
    }

    await renameFile(wrongFileNamePath, properFileNamePath);
};

await rename();