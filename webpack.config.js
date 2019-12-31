const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const IS_DEV_SERVER = process.argv[1].indexOf('webpack-dev-server') >= 0;

function getFilename(name) {
  // https://github.com/webpack/webpack-dev-server/issues/438
  return `[name].${IS_DEV_SERVER ? name : '[hash]'}.js`;
}

module.exports = {
  entry: './src/index.js', // If a string or array of strings is passed, the chunk is named 'main'.
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: getFilename('bundle'), // when creating multiple bundles via more than one entry point, code splitting, or various plugins, you should use not a static name.
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader', // https://webpack.js.org/loaders/babel-loader/
          options: {
            // babel options : https://babeljs.io/docs/en/options
            presets: ['@babel/preset-env']
            // plugins : [...],
          },
        },
      },
      {
        /**
         * style-loader : https://webpack.js.org/loaders/style-loader/
         * css-loader : https://webpack.js.org/loaders/css-loader/
         */
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    // devServer: https://webpack.js.org/configuration/dev-server/
    contentBase: path.join(__dirname, 'public/'),
    port: 8080,
    publicPath: 'http://localhost:8080/dist/',
    hotOnly: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      meta: {
        viewport: 'width=device-width, initial-scale=1'
      },
      title: 'React'
    }),
  ]
};