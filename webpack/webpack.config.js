const path = require('path')
const webpack = require('webpack')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')

module.exports = {
  context: path.join(__dirname, '../src'),

  entry: {
    app: './app.jsx'
  },

  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name]-bundle.js',
    chunkFilename: '[name]-[hash].chunk.js',
    publicPath: '/assets/'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.join(__dirname, '../src'),
      'node_modules'
    ],
  },
  
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': process.env.NODE_ENV
    }),

    new LodashModuleReplacementPlugin()
  ]
}