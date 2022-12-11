import { access, cp } from 'fs/promises';

const copy = async () => {
    const copyPathFolder = 'src/fs/files_copy';
    const copyTargetPathFolder = 'src/fs/files';
    const isExistingFolder = await access(copyPathFolder).then(() => true).catch(() => false);
    const hasCopyTarget = await access(copyTargetPathFolder).then(() => true).catch(() => false);

    if (isExistingFolder || !hasCopyTarget) {
        throw new Error('FS operation failed');
    }

    await cp(copyTargetPathFolder, copyPathFolder,  {recursive: true})
};

await copy();
