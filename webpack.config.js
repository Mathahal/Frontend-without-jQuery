var webpack = require('webpack'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin');

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
  },
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['.'] },
      files: ["./"]
    })
  ]
}
