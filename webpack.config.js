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
         {test: /\.js$/, use: 'babel-loader'},
         {test: /\.jsx$/, use: 'babel-loader!jsx-loader'}
      ]
   },
   resolve: {
      // modules: [
      //    path.resolve("./node_modules"),
      //    path.resolve("./")
      // ]
   },
   plugins: [
      new webpack.DefinePlugin({
         __isServer: true, // is server rendering.
      })
   ]
};

module.exports = config;