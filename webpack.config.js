var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    './modules/index',
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'module.js'
  },
  debug: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'modules'),
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};
