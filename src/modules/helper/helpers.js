import { paint } from './colors.js';

export const OPERATION_ERROR = paint(`Operation failed`, 'bgRed');
export const INVALID_INPUT = paint(`Invalid input`, 'bgRed');

export const nameParse = (name) => {
  const trimmedName = name.trim();
  const isQuoted = /^(\'|\")/.test(trimmedName) && trimmedName.endsWith(trimmedName[0]);
  const fileName = isQuoted ? trimmedName.slice(1, -1) : trimmedName;
  const symbols = ['/', '\\', ':', '*', '?', '"', '<', '>', '|'];
  if (!fileName || symbols.some(symbol => fileName.includes(symbol)) || fileName.endsWith('.')) {
    return '';
  }

  return fileName;
}

