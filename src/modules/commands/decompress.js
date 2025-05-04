import {createWriteStream, createReadStream } from 'node:fs';
import { getParsedPath } from '../navi/path.js';
import { OPERATION_ERROR, INVALID_INPUT } from '../helper/helpers.js';
import { pipeline } from 'node:stream';
import { access } from 'node:fs/promises';
import zlib from 'node:zlib';



export const decompress = async (data, ...args) => {
  if (args.length < 2) {
    console.log(INVALID_INPUT);
    return;
  }
  const oldFilePath = getParsedPath(data, args[0]);
  const newFilePath = getParsedPath(data, args[1]);

  try {
    await access(oldFilePath);

    const readable = createReadStream(oldFilePath, { flags: 'rs'});
    const writable = createWriteStream(newFilePath);

    return await new Promise((resolve, reject) => {
    pipeline(readable, zlib.createBrotliDecompress(), writable, (error) => {
      if (error) {
        reject();
      }
      resolve();
    });
  });
  } catch (error) {
    console.log(OPERATION_ERROR);
  }
}