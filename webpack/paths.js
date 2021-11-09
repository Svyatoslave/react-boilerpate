const { resolve } = require('path');

const rootDir = resolve(__dirname, '../');
const srcDir = resolve(rootDir, 'src');
const outDir = resolve(rootDir, 'dist');
const publicDir = resolve(rootDir, 'public');

module.exports = {
  rootDir,
  srcDir,
  outDir,
  publicDir,
};
