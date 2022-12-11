import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

const compress = async (
    filePath = 'src/zip/files/fileToCompress.txt',
    compressedFileDir = 'src/zip/files',
    gzipFileName = 'archive'
) => {
    const newGzip = createGzip();
    const readFileToCompressStream = createReadStream(filePath);
    const compressedFileStream = createWriteStream(`${compressedFileDir}/${gzipFileName}.gz`);

    readFileToCompressStream.pipe(newGzip).pipe(compressedFileStream);
};

await compress();