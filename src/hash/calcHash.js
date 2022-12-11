import { createHash } from 'node:crypto';
import { readFile } from 'fs/promises';

const calculateHash = async (hashFilePath = 'src/hash/files/fileToCalculateHashFor.txt') =>
    await readFile(hashFilePath)
        .then((currentDirContent) =>
            console.log(
                createHash('sha256').update(currentDirContent.toString()).digest('hex')
            )
        );

await calculateHash();