var path = require('path');
var webpack = require('webpack');

var config = {
   entry: {
      bundle: './client/index.js'
   },
   output: {
      path: __dirname + '/dist',
      filename: '[name].js'
   },
   module: {
      rules: [
         {test: /\.js$/, use: 'babel-loader'}
      ]
   },
   resolve: {
      // modules: [
      //    path.resolve("./node_modules"),
      //    path.resolve("./")
      // ]
   }
};

module.exports = config;