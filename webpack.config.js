const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index_bundle.js',
  },
  target: 'web',
  devServer: {
    port: '5000',
    static: path.resolve(__dirname, './public'),
    open: true,
    hot: true,
    liveReload: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: '/node_modules',
        use: 'babel-loader',
      },
      {
        test: /\.(sass|css)$/,
        use: ['style-loader', 'css-loader']
      }
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html')
    })
  ],
}