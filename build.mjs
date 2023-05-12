import * as fs from 'node:fs/promises';
import { buildTools } from '@zooduck/build-tools';

await fs.rm('dist', { recursive: true, force: true });
await fs.mkdir('dist');
await fs.copyFile('src/commandlineArgs.util.mjs', 'dist/index.module.mjs');
await buildTools.removeCommentsFromFile('dist/index.module.mjs');
