import fs from 'fs';

export default async function loadJson(path) {
  const json = await fs.promises.readFile(path, 'utf-8');
  return JSON.parse(json);
}
