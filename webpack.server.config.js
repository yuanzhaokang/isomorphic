var path = require('path');
var webpack = require('webpack');

var config = {
   target: 'node',
   entry: {
      bundle: './index.js'
   },
   output: {
      path: __dirname + '/dist',
      filename: 'server.js'
   },
   module: {
      rules: [
         {test: /\.js$/, use: 'babel-loader'},
         {test: /\.jsx$/, use: 'babel-loader!jsx-loader'},
         {test: /\.css$/, use: 'null'},
         {
            test: /\.scss$/, use: [
               {loader: 'css-loader/locals'},
            ]
         }
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
      }),
   ]
};

module.exports = config;