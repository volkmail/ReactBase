const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ROOT_DIR = path.resolve(__dirname, '../');

module.exports = {
  target: ['web', 'es5'],
  entry: `${ROOT_DIR}/src/index.tsx`,
  output: {
    path: `${ROOT_DIR}/build`,
    clean: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '...'],
    alias: {
      '@src': `${ROOT_DIR}/src`,
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: `${ROOT_DIR}/src/index.html`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        exclude: /node_modules/,
      },
    ],
  },
};
