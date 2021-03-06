var webpack = require('webpack'),
    path = require('path'),
    BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: {
    entry: './assets/js/entry.js'
  },
  output: {
    path: path.resolve('./build/'),
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
        test: /\.js$/,
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
      proxy: 'http://localhost:8888/',
      // server: { baseDir: ['./'] },
      files: ["./*.html", "./assets"]
    },{
      reload: true
    })
  ]
}
