import { readdir } from 'fs/promises';

export const ls = async (data) => {
  const file = await readdir(data.path, { withFileTypes: true });

  const conclusion = file.map((file) => ({
    name: file.name,
    type: file.isFile() ? 'file' : 'directory',
  })).sort((a, b) => a.type.localeCompare(b.type) || a.name.localeCompare(b.name));
  
  console.table(conclusion);
};