import { up, add, help, exit, osInfo, cd, ls, cat, mkDir, remove, rn, cp, mv, hash, compress, decompress } from './commands/index.js'; 

export const commands = {
  'up': up, 
  'cd': cd, 
  'ls': ls,
  'cat': cat,  
  'add': add, 
  'mkdir': mkDir, 
  'rn': rn, 
  'cp': cp, 
  'mv': mv, 
  'rm': remove, 
  'os': osInfo, 
  'hash': hash, 
  'compress': compress, 
  'decompress': decompress, 
  'help': help,
  '.exit': exit,
}