import Data from './modules/helper/data.js';
import { createInterface } from 'readline/promises';
import os from 'os';
import { commands } from './modules/commands.js';
import { paint } from './modules/helper/colors.js';
import {INVALID_INPUT} from './modules/helper/helpers.js';

const start = async () => {
  const ARG_NAME = '--username=';
  const arg = process.argv[2]
  const userName = !!arg && arg.includes(ARG_NAME)? arg.replace(/--username=/, ''): 'default';
  const data = new Data(os.homedir(), userName);
  console.log(paint(`Welcome to the File Manager, ${data.userName}!`, 'green'));

  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: paint(` > `, 'purpur'),
  });
  
  rl.on('line', async (line) => {
    const str = line.trim();
    if (!str) {
      rl.prompt();
      return;
    }
    
    const [command, ...args] = str.split(' ');

    if (!Object.keys(commands).includes(command)) {
      console.log(INVALID_INPUT);
      rl.prompt();
      return;
    }

    await commands[command](data, ...args);
    console.log(`${paint(`You are currently in ${data.path}`, 'green')}`);
    rl.prompt();
  });

  rl.prompt();

  process.on('SIGINT', () => {
    process.exit();
  });

  process.on('exit', function() {
    rl.close();
    console.log(os.EOL);
    console.log(paint(`Thank you for using File Manager, ${userName}, goodbye!`, 'bgPurpur'));
    process.exit();
  });

}
start();