import {createWriteStream, createReadStream } from 'node:fs';
import { join, basename } from 'node:path';
import { getParsedPath } from '../navi/path.js';
import { OPERATION_ERROR } from './helpers.js';
import { access } from 'node:fs/promises';


export const copyFile = async (data, ...args) => {
  const oldFilePath = getParsedPath(data, args[0]);
  const newDirPath = getParsedPath(data, args[1]);
  const newFilePath = join(newDirPath, basename(oldFilePath));

  try {
    await access(oldFilePath);

    return await new Promise((resolve, reject) => {
      const readable = createReadStream(oldFilePath, { flags: 'rs' });
      const writable = createWriteStream(newFilePath, { flags: 'wx' });

      readable.pipe(writable);

      writable.on('finish', () => {
        resolve(true);
      });

      readable.on('error', () => {
        reject();
      });
  
      writable.on('error', () => {
        reject();
      });
    });
  } catch (error) {
    console.log(OPERATION_ERROR);
  }
}