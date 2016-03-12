'use strict';

const path = require('path');
const webpack = require('webpack');
const nodeModulesPath = path.join(__dirname, 'node_modules');

module.exports = {
  entry: ['./Src/index'],
  output: {
    path: path.join(__dirname, 'Dist'),
    filename: '[name].bundle.js'
  },
  plugins: [new webpack.NoErrorsPlugin()],
  resolve: {
    root: [nodeModulesPath],
    extensions: ['', '.js', '.jsx'],
  },
  resolveLoader: {
    root: nodeModulesPath
  },
  module: {
    loaders: [
      {
        test: /\.js?$|\.jsx?#/,
        exclude: /node_modules/,
        loader: 'babel?presets[]=react,presets[]=es2015'
      }
    ]
  }
};