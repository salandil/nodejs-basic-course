import {writeFile } from 'fs/promises';
import { OPERATION_ERROR, INVALID_INPUT } from '../helper/helpers.js';
import { getParsedPath } from '../navi/path.js';
import { nameParse } from '../helper/helpers.js';

export const add = async (data, ...args) => {
    const fileName = nameParse(args[0] || '');
    if (!args[0] || !fileName){
      console.log(INVALID_INPUT);
      return;
    }

    const file = getParsedPath(data, fileName);
    try {
      await writeFile(file, '', { flag: 'wx' });
      return;
    } catch (error) {
      console.log(OPERATION_ERROR);
      return;
    }
};