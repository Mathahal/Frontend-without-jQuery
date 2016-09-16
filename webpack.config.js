var webpack = require('webpack')
module.exports = {
  entry: {
    entry: './assets/js/entry.js'
  },
  output: {
    path: './build/',
    filename: 'build.js'
  },
  module: {
    loaders: [
      {
        test: /\.sass$/,
        exclude: /(application|node_modules|bootstrap|public_html|.git)/,
        loader: 'style!css!sass'
      },
      {
        test: /\.jsx$/,
        exclude: /(application|node_modules|bootstrap|public_html|.git)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
