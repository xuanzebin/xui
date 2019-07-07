module.exports = {
  entry:{
    index:'./lib/index.tsx'
  },
  output:{
    path:path.resolve(__dirname,'dist/lib'),
    library:'xui',
    libraryTarget:'umd'
  },
  module:{
    rules:[
      {
        test:/\.tsx?$/,
        loader:'awesome-typescript-loader'
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template:'index.html'
    })
  ]
}