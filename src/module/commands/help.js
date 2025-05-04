import { paint } from "../helper/colors.js";

  export const help = () => {
    console.log(paint('Available commands:', 'magenta'));
    console.log(paint('----------------------------------------', 'magenta'));
    console.log(`${paint('up', 'yellow')} - go up one directory`);
    console.log(`${paint('cd', 'yellow')} - change directory`);
    console.log(`${paint('ls', 'yellow')} - list directory contents`);
    console.log(`${paint('cat', 'yellow')} - display the contents of a file`);
    console.log(`${paint('add', 'yellow')} - add a file`);
    console.log(`${paint('mkdir', 'yellow')} - create a new directory`);
    console.log(`${paint('rn', 'yellow')} - rename a file`);
    console.log(`${paint('cp', 'yellow')} - copy a file`);
    console.log(`${paint('mv', 'yellow')} - move a file`);
    console.log(`${paint('rm', 'yellow')} - remove a file`);
    console.log(`${paint('os', 'yellow')} - shows os info and requires one of the following arguments:`);
    console.log(`\t${paint('--EOL', 'bgGreen')} - show the operating system end-of-line characters`);
    console.log(`\t${paint('--cpus', 'bgGreen')} - show the host machine CPUs info`);
    console.log(`\t${paint('--homedir', 'bgGreen')} - show home directory path`);
    console.log(`\t${paint('--username', 'bgGreen')} - show current system username`);
    console.log(`\t${paint('--architecture', 'bgGreen')} - show CPU architecture`);
    console.log(`${paint('help', 'yellow')} - show help for a list of commands`);
    console.log(`${paint('.exit', 'yellow')} - exit the program`);
    console.log(paint('----------------------------------------', 'magenta'));
  }
