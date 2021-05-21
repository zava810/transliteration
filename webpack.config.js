const path = require('path')

module.exports = {
  entry: './transliterator.js',
  output: {
    library: 'transliterator',
    libraryTarget: 'window',
    filename: 'transliterator.js',
    path: path.resolve(__dirname, 'dist')
  }
}
