import { INVALID_INPUT, OPERATION_ERROR } from '../helper/helpers.js';
import { copyFile } from '../helper/copy.file.js';
import { rm } from 'fs/promises';
import { getParsedPath } from '../navi/path.js';



export const mv = async (data, ...args) => {
  if (args.length < 2){
    console.log(INVALID_INPUT);
    return;
  }
  const filePath = getParsedPath(data, args[0]);
  await copyFile(data, ...args);
  try {
    await rm(filePath);
  } catch (error) {
    console.log(OPERATION_ERROR);
  }
}