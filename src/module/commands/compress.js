import {createWriteStream, createReadStream} from 'node:fs';
import { getParsedPath } from '../navi/path.js';
import { OPERATION_ERROR, INVALID_INPUT } from '../helper/helpers.js';
import { pipeline } from 'node:stream';
import zlib from 'node:zlib';


export const compress = async (data, ...args) => {
  if (args.length < 2) {
    console.log(INVALID_INPUT);
    return;
  }
  const oldFilePath = getParsedPath(data, args[0]);
  const newFilePath = getParsedPath(data, args[1]);
  const readable = createReadStream(oldFilePath);
  const writable = createWriteStream(newFilePath);

  try {
    pipeline(readable, zlib.createBrotliCompress(), writable, (error) => {
      if (error) {
        console.log(OPERATION_ERROR);
        return;
      }
    })
  } catch (error) {
    console.log(OPERATION_ERROR);
  }
}