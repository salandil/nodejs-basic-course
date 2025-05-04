import { createReadStream } from 'fs';
import { getParsedPath } from '../navi/path.js';
import { OPERATION_ERROR } from '../helper/helpers.js';

export const cat = async (data, ...args) => {
      if (!args[0]){
        console.log(INVALID_INPUT);
        return;
      }
  const file = getParsedPath(data, ...args);
  const readable = createReadStream(file);
  try {
    readable.on('data', (chunk) => {
      process.stdout.write(chunk);
      process.stdout.write('\n');
      return;
    })    
  } catch (error) {
    console.log(OPERATION_ERROR);
    return;
}
}