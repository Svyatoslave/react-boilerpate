const HtmlWebpackPlugin = require('html-webpack-plugin');

const { resolve } = require('path');

const { srcDir, outDir, publicDir } = require('./paths');

module.exports = {
  entry: resolve(srcDir, 'main.jsx'),
  output: {
    path: outDir,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'jsx',
          target: 'es2015',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Pro Project',
      template: resolve(publicDir, 'index.html'),
      filename: 'index.html',
    }),
  ],
};
