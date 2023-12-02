const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const PACKAGE = require('../package.json');

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const fileName = `${PACKAGE.version}.[name]`;

module.exports = () =>
  merge(common, {
    mode: 'development',
    output: {
      filename: `${fileName}.js`,
    },
    devServer: {
      port: 3000,
    },
    devtool: 'source-map',
    optimization: {
      minimizer: ['...', new CssMinimizerPlugin()],
    },
    plugins: [new MiniCssExtractPlugin({ filename: `${fileName}.css` })],
  });
