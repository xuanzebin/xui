const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const base = require('./webpack.config')
module.exports = Object.assign({}, base, {
  mode:'development',
  entry: {
    index: './example.tsx'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'example.html'
    })
  ]
})