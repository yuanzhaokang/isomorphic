var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
         {test: /\.jsx$/, use: 'babel-loader!jsx-loader'},
         {
            test: /\.scss$/, use: ExtractTextPlugin.extract({
               fallback: "style-loader",
               use: ['css-loader', 'sass-loader']
            })
         }
      ]
   },
   resolve: {
      modules: [
         path.resolve("./node_modules"),
         path.resolve("./")
      ]
   },
   plugins: [
      new webpack.DefinePlugin({
         __isClient: true, // is client rendering.
      }),
      new ExtractTextPlugin({
         filename: 'style.css'
      })
   ]
};

module.exports = config;