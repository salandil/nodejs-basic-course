import { createHash } from 'crypto';
import { getParsedPath } from '../navi/path.js';
import { INVALID_INPUT, OPERATION_ERROR } from '../helper/helpers.js';
import { createReadStream } from 'fs';

export const hash = async (data, ...args) => {
  if (!args[0]){
    console.log(INVALID_INPUT);
    return;
  }
  const filePath = getParsedPath(data, args[0]);

  try {
    const readable = createReadStream(filePath, {flags: 'rs'});
    return await new Promise((resolve, reject) => {     
    readable.on('data', (chunk) => {
      const hash = createHash('sha256').update(chunk).digest('hex');
      console.log(hash);
      resolve()
    });
    readable.on('error', (error) => {
      reject();
    });
  })
  } catch (error) {
    console.log(OPERATION_ERROR);
    return;
  }
}