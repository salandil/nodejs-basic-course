import { rm } from 'fs/promises';
import { OPERATION_ERROR } from '../helper/helpers.js';
import { getParsedPath } from '../navi/path.js';



export const remove = async (data, ...args) => {
    if (!args[0]){
      console.log(INVALID_INPUT);
      return;
    }

    const filePath = getParsedPath(data, args[0]);
    try {
      await rm(filePath);
      return;
    } catch (error) {
      console.log(OPERATION_ERROR);
      return;
    }
};