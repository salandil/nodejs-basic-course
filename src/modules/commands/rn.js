import { rename } from 'fs/promises';
import { OPERATION_ERROR, INVALID_INPUT } from '../helper/helpers.js';
import { getParsedPath } from '../navi/path.js';
import { nameParse } from '../helper/helpers.js';
import { dirname, join } from 'path';

export const rn = async (data, ...args) => {
  const fileName = nameParse(args[1] || '');
    if (args.length < 2 || !fileName){
      console.log(INVALID_INPUT);
      return;
    }
 
  const oldFilePath = getParsedPath(data, args[0]);
  const oldDirName = dirname(oldFilePath);
  const newFilePath = join(oldDirName, fileName);
  try {
    await rename(oldFilePath, newFilePath);
    return;
  } catch (error) {
    console.log(OPERATION_ERROR);
    return;
  }
}