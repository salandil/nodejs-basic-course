import {createWriteStream, createReadStream} from 'node:fs';
import { join, basename } from 'node:path';
import { getParsedPath } from '../navi/path.js';
import { OPERATION_ERROR } from './helpers.js';


export const copyFile = async (data, ...args) => {
  const oldFilePath = getParsedPath(data, args[0]);
  const newDirPath = getParsedPath(data, args[1]);
  const newFilePath = join(newDirPath, basename(oldFilePath));
  const readable = createReadStream(oldFilePath);
  const writable = createWriteStream(newFilePath);

  try {
    readable.pipe(writable)
    readable.on('error', (error) => {
      console.log(OPERATION_ERROR);
      return;
    });

    writable.on('error', (error) => {
      console.log(OPERATION_ERROR);
      return;
    });
  } catch (error) {
    console.log(OPERATION_ERROR);
  }
}