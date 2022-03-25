const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const webpack = require('webpack');
// const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: [path.resolve(__dirname, 'index.js'), 'regenerator-runtime/runtime.js'],
  output: {
    path: path.resolve(__dirname, 'dist/app'),
    filename: 'main.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.$css/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.', '.js', '.jsx', '.css', '.scss'],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'index.css',
    }),
    // new BundleAnalyzerPlugin(),
    // new CompressionPlugin({
    //   test: /\.js(\?.*)?$/i,
    //   filename: '',
    //   algorithm: 'gzip',
    //   deleteOriginalAssets: false,
    // }),
  ],
};
