/* eslint-env node */
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const buildDir = 'build';
const path = `${__dirname}/${buildDir}`;

module.exports = {
  entry: './src/index.js',
  output: {
    path,
    filename: 'bundle.[hash].js',
    publicPath: '/'
  },
  node: {
    fs: 'empty'
  },
  devServer: {
    contentBase: './${buildDir}',
    historyApiFallback: true
  },
  devtool: 'inline-source-map',
  plugins: [
    new CleanWebpackPlugin(`${path}/bundle.*.js`), 
    new HtmlPlugin({ favicon: './favicon.ico' }),
    new HtmlPlugin({ favicon: './android-chrome-192x192.png' }),
    new HtmlPlugin({ favicon: './android-chrome-512x512.png' }),
    new HtmlPlugin({ favicon: './apple-touch-icon.png' }),
    new HtmlPlugin({ favicon: './favicon-16x16.png' }),
    new HtmlPlugin({ favicon: './favicon-32x32.png' }),
    new HtmlPlugin({ template: './src/index.html' }),
    new Dotenv()
  ],
  module: {
    rules: [
      {   
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'css-loader',
            options: { 
              sourceMap: true,
              importLoaders: 1 
            }
          },
          {
            loader: 'postcss-loader',
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: 'url-loader',
          options: { limit: 5000 },
        },
      }
    ]
  }
};