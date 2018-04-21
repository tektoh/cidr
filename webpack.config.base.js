const path = require('path')
const Dotenv = require('dotenv-webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/javascripts/application.js',
  output: {
    filename: 'application.js',
    path: path.join(__dirname, 'public')
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.scss$/,
      exclude: /node_modules/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'postcss-loader'
      }, {
        loader: 'sass-loader'
      }]
    }, {
      test: /\.pug$/,
      exclude: /node_modules/,
      loader: 'pug-loader'
    }]
  },
  plugins: [
    new Dotenv({
      path: '.env',
      safe: false
    }),
    new HtmlWebpackPlugin({
      title: '',
      filename: 'index.html',
      template: 'src/templates/index.pug'
    })
  ]
}
