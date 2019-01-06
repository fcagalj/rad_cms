require('dotenv').config();
const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,
  // Entry file for all of our React code
  entry: [
    './client/index.jsx',
  ],
  // Final bundle file output
  output: {
    path: path.join(__dirname, '/server/public/js/'),
    filename: 'bundle.js',
    publicPath: 'server/public/js/',
  },
  // Babel loader to compile our javascript and jsx files
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              '@babel/preset-env',
            ],
          },
        },
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
  },
};
