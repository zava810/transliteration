const path = require('path');

module.exports = {
  entry: './Transliterator.js',
  output: {
    library: 'Transliterator',
    libraryTarget: 'window',
    filename: 'transliterator.js',
    path: path.resolve(__dirname, 'dist'),
  },
}; 
