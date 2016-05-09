const path = require('path')
const fs = require('fs')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

let configs = [
  {
    entry: './src/js/index.js',
    output: {
      path: path.join(__dirname, 'dist', 'js'),
      filename: 'dropup.js',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
      ]
    }
  },
]

let themes = fs.readdirSync('./src/themes').map(file => {
  return file.replace('.styl', '')
})

themes.forEach(theme => {
  configs.push({
    entry: `./src/themes/${theme}.styl`,
    output: {
      path: path.join(__dirname, 'dist', 'css'),
      filename: `dropup-${theme}.theme.css`,
    },
    module: {
      loaders: [
        {
          test: /\.styl$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader!stylus-loader')
        },
      ],
    },
    plugins: [
        new ExtractTextPlugin(`dropup-${theme}.theme.css`)
    ]
  })
})

module.exports = configs
