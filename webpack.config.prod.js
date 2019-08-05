const base = require('./webpack.config')
module.exports = Object.assign({}, base, {
  mode:'production',
  externals: {
      'react': {
          'commonjs': 'react',
          'commonjs2': 'react',
          'amd': 'react',
          'root': 'reat'
      },
      'reat-dom': {
          'commonjs': 'react-dom',
          'commonjs2': 'react-dom',
          'amd': 'react-dom',
          'root': 'reactDOM'
      }
  }
})