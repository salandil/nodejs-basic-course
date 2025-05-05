export const paint = (str, color) => {
  const colors = {
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    darkBlue: '\x1b[34m',
    purpur: '\x1b[35m',
    lightBlue: '\x1b[36m',
    white: '\x1b[37m',
    black: '\x1b[30m',
    bgRed: '\x1b[41m',
    bgGreen: '\x1b[42m',
    bgYellow: '\x1b[43m',
    bgDarkBlue: '\x1b[44m',
    bgPurpur: '\x1b[45m',
  }

  return `${colors[color]}${str}\x1b[0m`
}