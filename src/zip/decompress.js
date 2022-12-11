import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';

const decompress = async (
    filePath = 'src/zip/files/archive.gz',
    decompressedFileDir = 'src/zip/files',
    unzipFileName = 'fileToCompress.txt'
) => {
    const newUnzip = createUnzip();
    const readFileToDecompressStream = createReadStream(filePath);
    const compressedFileStream = createWriteStream(`${decompressedFileDir}/${unzipFileName}`);

    readFileToDecompressStream.pipe(newUnzip).pipe(compressedFileStream);
};

await decompress();