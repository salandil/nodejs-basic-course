export const osInfo = async (data, ...args) => {
  const cpusInfo = data.os.cpus.map(({model, speed}) => {
    speed = `${speed / 1000} GHz`;
    return { model, speed };
  });
  if (args.length === 0) {
    console.log('No arguments provided. Please provide at least one argument.');
    return;
  }
  const arg = args[0];
  const osInfo = {
    '--EOL': () => { console.log(JSON.stringify(data.eol)) },
    '--cpus': () => {
      console.log(`Host machine CPUs number:${cpusInfo.length}`);
      console.table(cpusInfo)
    },
    '--homedir': () => { console.log(`Homedir: ${data.os.homeDir}`)},
    '--username': () => { console.log(`System username: ${data.os.username}`)},
    '--architecture': () => { console.log(`Architecture: ${data.os.arch}`)},
  }
  osInfo[arg]();
  return;
}