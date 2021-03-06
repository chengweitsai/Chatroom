var path = require('path');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: './src/index.js',  // 進入點
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',  // 輸出的檔案名稱
    publicPath: '/static/'
  },
  module: {
    loaders: [{
      test: /\.js$/,   // 針對 js 檔
      loaders: ['babel'],
      include: path.join(__dirname, 'src'),
      exclude: /node_modules/   // 不要處理 3rd party 的 code

    }, {
      test: /\.css$/,  // 針對 css 檔
      loaders: ['style', 'css'],
      exclude: /node_modules/   // 不要處理 3rd party 的 code
    }, {
      test: /\.json/  // 針對 css 檔
    }]
  }
};