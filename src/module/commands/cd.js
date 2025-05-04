import { stat } from 'fs/promises';
import { OPERATION_ERROR } from '../helper/helpers.js';
import { getParsedPath } from '../navi/path.js';

export const cd = async (data, ...args) => {
  if (args.length === 0 || args[0] === '') {
    console.log(OPERATION_ERROR);
    return;
  }

  const path = getParsedPath(data, ...args);

  try {
    const check = await stat(path);
    if (!check.isDirectory()) {
      console.log(OPERATION_ERROR);
      return;
    }
    data.path = path;
  }
  catch (error) {
    console.log(OPERATION_ERROR);
  }
}

export const up = async (data, ..._) => {
  return cd(data, '..');

}