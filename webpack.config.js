var path = require('path');
var webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')

var config = {
  debug: true,
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true
  },
  entry: './src/index.js',
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.ProvidePlugin({
      'jQuery': 'jquery',  // we use bootStrap berger menu
    }),
    new webpack.HotModuleReplacementPlugin(),
    // extract all css into a separate file
    new ExtractTextPlugin('style.css'),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        loaders: ['react-hot','babel','eslint'],
        exclude: /node_modules/,
      },
      {
        //bootstrap requires this
        test: /\.((woff2?)(\?v=[0-9]\.[0-9]\.[0-9]))|(woff2?)$/,
        loader: 'url?limit=10000'
      },
      {
        //bootstrap requires this
        test: /\.((ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9]))|(ttf|eot)$/,
        loader: 'file'
      },
      {
        //bootstrap requires this
        test: /\.svg?$/,
        loader: "url?limit=10000&minetype=image/svg+xml"
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style','css!postcss!sass')
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style', "css!postcss!less")
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', "css!postcss")
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$/i,
        loader: 'file?name=[name].[ext]'
      }
      
    ]
  },
   postcss: (webpack) => {
    return [
      autoprefixer({
        browsers: ['last 2 versions']
      })
    ] 
  },
};


module.exports = config