// @ts-check
const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const rootPath = resolve(__dirname, '.');
const srcPath = resolve(__dirname, './src');
const distPath = resolve(__dirname, './dist');

/** @type import('webpack').Configuration */
module.exports = {
  entry: {
    app: [resolve(srcPath, './index.tsx')],
  },
  output: {
    path: distPath,
    filename: 'js/[name].[chunkhash].js',
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: { transpileOnly: true },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },

  plugins: [new MiniCssExtractPlugin()],

  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
};