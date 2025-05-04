import { createHash } from 'crypto';
import { getParsedPath } from '../navi/path.js';
import { INVALID_INPUT } from '../helper/helpers.js';

export const hash = async (data, ...args) => {
  if (!args[0]){
    console.log(INVALID_INPUT);
    return;
  }
  const filePath = getParsedPath(data, args[0]);

  try {
    const hash = createHash('sha256').update(filePath).digest('hex');
    console.log(hash)
    return;
  } catch (error) {
    console.log(OPERATION_ERROR);
    return;
  }
}