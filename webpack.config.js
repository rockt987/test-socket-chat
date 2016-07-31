const path = require('path');
const webpack = require('webpack');
const APP_DIR = path.resolve('./client');
const BUILD_DIR = path.resolve('./public');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {

  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    APP_DIR + '/index.jsx'
  ],

  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      include: APP_DIR,
      loader: 'react-hot!babel'
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader')
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader?importLoaders=1'
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
    }]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  devServer: {
    contentBase: BUILD_DIR,
    hot: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css', {
      allChunks: true,
      disable: true
    })
  ]
};

module.exports = config;
