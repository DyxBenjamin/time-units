import { readFileSync } from 'node:fs';
import path from 'node:path';


const packageJson = JSON.parse(readFileSync(path.resolve(process.cwd(), 'package.json'), 'utf-8'));
const { name, version } = packageJson;

console.log(`
  [32mSuccessfully published ${name}@latest[0m

  [34mTo install, run:[0m

  [35mnpm install ${name}@latest[0m
  [35mpnpm install ${name}@latest[0m
  [35mbun add ${name}@latest[0m
  [35myarn add ${name}@latest[0m
  
  [34mOr:[0m
  
  [35mnpm install ${name}@${version}[0m
  [35mpnpm install ${name}@${version}[0m
  [35mbun add ${name}@${version}[0m
  [35myarn add ${name}@${version}[0m
`);
