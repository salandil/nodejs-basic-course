import { INVALID_INPUT } from '../helper/helpers.js';
import { isAbsolute, resolve } from 'node:path';

export const getParsedPath = (data, ...args) =>{
  const path = args.join(' ').trim();
  const hasQuotes = (path.startsWith('"') || path.startsWith("'")) && path.endsWith(path[0]);
  const strippedPath = hasQuotes ? path.slice(1, -1) : path;
  const parsedPath = strippedPath.trim();
  if (parsedPath.includes(' ') && !hasQuotes) {
    console.log(INVALID_INPUT);
    return;
  }
  const isRootPath = parsedPath.includes(':') && !isAbsolute(parsedPath);
  const entry = isRootPath && data.os.platform === 'win32' ? '/' : data.path;

  return resolve(entry, parsedPath);
}