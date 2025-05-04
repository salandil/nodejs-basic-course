import { INVALID_INPUT } from '../helper/helpers.js';
import { copyFile } from '../helper/copy.file.js';


export const cp = async (data, ...args) => {
    if (args.length < 2){
      console.log(INVALID_INPUT);
      return;
    }
 
  return await copyFile(data, ...args);
}