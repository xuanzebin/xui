const path = require('path')
module.exports = {
  entry: {
    index: './lib/index.tsx'
  },
  mode:'production',
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'xui',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js','.jsx','.ts','.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader'
      }
    ]
  }
}