import{ EOL, cpus, homedir, platform, userInfo, arch } from 'os';

export default class Data {
  #path;
  #userName;
  #os;
  #eol;

  constructor(path, userName) {
    this.#path = path;
    this.#userName = userName;    
    this.#eol = EOL;
    this.#os = {
      platform: platform(),
      arch: arch(),
      cpus: cpus(),
      homeDir: homedir(),
      username: userInfo().username
    };    
  }
  get path() {
    return this.#path;
  }

  get userName() {
    return this.#userName;
  }

  get os() {
    return this.#os;
  }

  get eol() {
    return this.#eol;
  }

  set path(path) {
    this.#path = path;
  }
}